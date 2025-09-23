#!/usr/bin/env node
/**
 * scripts/compress-videos.js
 *
 * Compress all .mp4 files inside ./videos-to-compress (recursively) until they are <= target.
 * Uses ffprobe and ffmpeg (2-pass).
 *
 * Default target: 50000 KB (50,000 KB). You can pass an argument with units:
 *   node scripts/compress-videos.js        -> uses 50000 KB
 *   node scripts/compress-videos.js 50000  -> interprets as 50000 KB
 *   node scripts/compress-videos.js 50000KB
 *   node scripts/compress-videos.js 50MB
 *
 * Requirements:
 *   - ffmpeg and ffprobe must be available in PATH
 *   - Run from project root (so it finds ./videos-to-compress)
 *
 * Behavior:
 *   - Replaces original only if compressed output exists and is smaller (or <= target)
 *   - Keeps best attempt when can't reach target but it's smaller
 */

import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { promisify } from 'node:util';
import { execFile as execFileCb } from 'node:child_process';
const execFile = promisify(execFileCb);

const TARGET_KB_DEFAULT = 50000; // default target = 50_000 KB
const MAX_ITERS = 8;
const MIN_VIDEO_KBPS = 150;
const AUDIO_KBPS_FALLBACK = 128;

function nullDevice() {
    const plat = process.platform;
    if (plat === 'win32') return 'NUL';
    return '/dev/null';
}

async function fileSizeBytes(filePath) {
    const st = await fs.stat(filePath);
    return st.size;
}

async function ffprobeDuration(filePath) {
    try {
        // 1) formato general (lo más común)
        const { stdout } = await execFile('ffprobe', [
            '-v', 'error',
            '-show_entries', 'format=duration',
            '-of', 'default=noprint_wrappers=1:nokey=1',
            filePath
        ]);
        const s = stdout.trim();
        if (s) return parseFloat(s);

        // 2) intentar duración por streams (devuelve múltiples líneas a veces)
        const { stdout: stdout2 } = await execFile('ffprobe', [
            '-v', 'error',
            '-show_entries', 'stream=duration',
            '-of', 'default=noprint_wrappers=1:nokey=1',
            filePath
        ]);
        const s2 = stdout2.trim();
        if (s2) {
            const nums = s2.split(/\r?\n/).map(x => parseFloat(x)).filter(n => Number.isFinite(n));
            if (nums.length) return Math.max(...nums);
        }

        // 3) último recurso: volcar show_format/show_streams y buscar "duration="
        const { stdout: stdout3, stderr: stderr3 } = await execFile('ffprobe', [
            '-v', 'error',
            '-show_format',
            '-show_streams',
            filePath
        ]);
        const m = stdout3.match(/duration="?([0-9.]+)"?/i);
        if (m) return parseFloat(m[1]);

        console.warn(`ffprobe gave no duration for "${filePath}". Last ffprobe stderr: ${stderr3 || '(none)'}`);
        return null;
    } catch (err) {
        console.warn(`ffprobe error probing duration for "${filePath}":`, err.message || err);
        return null;
    }
}

async function ffprobeAudioKbps(filePath) {
    try {
        const { stdout } = await execFile('ffprobe', [
            '-v', 'error',
            '-select_streams', 'a:0',
            '-show_entries', 'stream=bit_rate',
            '-of', 'default=noprint_wrappers=1:nokey=1',
            filePath
        ]);
        const s = stdout.trim();
        if (s) {
            const bps = parseInt(s, 10);
            if (Number.isFinite(bps) && bps > 0) return Math.round(bps / 1000);
        }

        // Fallback: intentar extraer sample rate/codec info y asumir fallback si no hay bit_rate
        const { stdout: stdout2 } = await execFile('ffprobe', [
            '-v', 'error',
            '-show_streams',
            '-select_streams', 'a',
            filePath
        ]);
        // si no hay bit_rate, devolvemos fallback
        return null;
    } catch (err) {
        console.warn(`ffprobe audio probe error for "${filePath}":`, err.message || err);
        return null;
    }
}

async function encodeTwoPass(input, tmpOut, passlog, videoKbps, audioKbps) {
    const NULL = nullDevice();
    // 1st pass
    await execFile('ffmpeg', [
        '-y',
        '-i', input,
        '-c:v', 'libx264',
        '-b:v', `${videoKbps}k`,
        '-preset', 'slow',
        '-passlogfile', passlog,
        '-pass', '1',
        '-an',
        '-f', 'mp4',
        NULL
    ], { stdio: 'inherit' }).catch(() => { /* ignore first-pass non-zero code issues */ });

    // 2nd pass (real output)
    await execFile('ffmpeg', [
        '-y',
        '-i', input,
        '-c:v', 'libx264',
        '-b:v', `${videoKbps}k`,
        '-preset', 'slow',
        '-passlogfile', passlog,
        '-pass', '2',
        '-c:a', 'aac',
        '-b:a', `${audioKbps}k`,
        '-movflags', '+faststart',
        tmpOut
    ], { stdio: 'inherit' });
}

function parseTargetArg(arg) {
    // returns targetBytes (number)
    // Accepts: "50000", "50000KB", "50MB", case-insensitive.
    if (!arg) {
        return TARGET_KB_DEFAULT * 1024;
    }
    const s = String(arg).trim();
    const match = s.match(/^([0-9]+(?:\.[0-9]+)?)\s*(kb|mb)?$/i);
    if (!match) {
        throw new Error('Invalid target format. Use e.g. 50000, 50000KB, or 50MB');
    }
    const num = parseFloat(match[1]);
    const unit = match[2] ? match[2].toLowerCase() : 'kb'; // default to KB
    if (unit === 'mb') {
        return Math.round(num * 1024 * 1024);
    } else { // 'kb' or undefined
        return Math.round(num * 1024);
    }
}

async function processFile(filePath, targetBytes) {
    console.log(`\n---\nProcessing: ${filePath}`);
    const inputBytes = await fileSizeBytes(filePath);

    if (inputBytes <= targetBytes) {
        const kb = (inputBytes / 1024).toFixed(2);
        console.log(`Already <= target (${kb} KB). Skipping.`);
        return;
    }

    const duration = await ffprobeDuration(filePath);
    if (!duration || !isFinite(duration) || duration <= 0) {
        console.warn('Could not determine duration — skipping file.');
        return;
    }

    let audioKbps = await ffprobeAudioKbps(filePath);
    if (!audioKbps) audioKbps = AUDIO_KBPS_FALLBACK;

    // total kbps needed = (targetBytes * 8) / duration / 1000
    const totalKbps = (targetBytes * 8) / duration / 1000;
    let videoKbps = Math.max(200, Math.round(totalKbps - audioKbps));
    if (videoKbps < MIN_VIDEO_KBPS) videoKbps = MIN_VIDEO_KBPS;

    console.log(`Duration: ${duration}s — audio ~${audioKbps} kbps — initial video guess ${videoKbps} kbps (total ~${Math.round(totalKbps)} kbps)`);

    // create tmp area and paths
    const tmpDir = await fs.mkdtemp(path.join(process.cwd(), 'tmp-compress-'));
    const passlog = path.join(tmpDir, 'ffmpeg2pass');
    const tmpOut = `${filePath}.tmp.mp4`;
    let iteration = 0;
    let bestAttemptBytes = Infinity;
    let bestAttemptPath = null;

    while (iteration < MAX_ITERS) {
        iteration++;
        console.log(`Iteration ${iteration}: encoding with v=${videoKbps}k a=${audioKbps}k`);
        try {
            await encodeTwoPass(filePath, tmpOut, passlog, videoKbps, audioKbps);
        } catch (err) {
            console.error('ffmpeg encoding error:', err.message || err);
            // break to avoid infinite loop
            break;
        }

        // check result
        if (!existsSync(tmpOut)) {
            console.warn('Temporary output not found after ffmpeg run — aborting this file.');
            break;
        }

        const outBytes = await fileSizeBytes(tmpOut);
        const outKb = (outBytes / 1024).toFixed(2);
        const outMb = (outBytes / (1024 * 1024)).toFixed(2);
        console.log(`Output size: ${outKb} KB (${outMb} MB)`);

        // remember best attempt
        if (outBytes < bestAttemptBytes) {
            bestAttemptBytes = outBytes;
            bestAttemptPath = tmpOut;
        }

        if (outBytes <= targetBytes) {
            // success: replace original with tmpOut
            try {
                await fs.unlink(filePath).catch(() => { });
            } catch (err) {
                console.warn('Could not remove original before replacing (will try rename):', err.message || err);
            }
            await fs.rename(tmpOut, filePath);
            console.log(`Success — original replaced with compressed file: ${filePath} (${outKb} KB)`);
            await cleanupPassLogs(passlog);
            await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => { });
            return;
        }

        // reduce bitrate and try again
        const newVideoKbps = Math.max(MIN_VIDEO_KBPS, Math.round(videoKbps * 0.85));
        if (newVideoKbps === videoKbps) {
            console.log('Video bitrate cannot be reduced further; stopping iterations.');
            break;
        }
        videoKbps = newVideoKbps;

        // if video kbps falls low, reduce audio too (but keep reasonable)
        if (videoKbps < 400 && audioKbps > 64) {
            audioKbps = Math.max(64, Math.round(audioKbps * 0.75));
            console.log(`Reducing audio to ${audioKbps}k to free more space.`);
        }

        // cleanup pass logs for next iteration
        await cleanupPassLogs(passlog);
    }

    // If we reach here, didn't hit target within iterations.
    // If we have a best attempt that is smaller than original, replace original with that.
    if (bestAttemptPath && bestAttemptBytes < inputBytes) {
        const bestKb = (bestAttemptBytes / 1024).toFixed(2);
        console.log(`Did not hit target but best attempt is smaller than original (${bestKb} KB). Replacing original.`);
        try {
            await fs.unlink(filePath).catch(() => { });
            await fs.rename(bestAttemptPath, filePath);
            console.log(`Replaced original with best attempt: ${filePath} (${bestKb} KB)`);
        } catch (err) {
            console.error('Failed to replace original with best attempt:', err);
            await fs.unlink(bestAttemptPath).catch(() => { });
        }
    } else {
        // no valid smaller attempt: clean tmp and keep original
        if (bestAttemptPath && existsSync(bestAttemptPath)) {
            console.log('Best attempt is not smaller than original — discarding temporary file and keeping original.');
            await fs.unlink(bestAttemptPath).catch(() => { });
        } else {
            console.log('No successful compression attempt — keeping original file.');
        }
    }

    // final cleanup
    await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => { });
    await cleanupPassLogs(passlog);
}

async function cleanupPassLogs(passlog) {
    try {
        await fs.rm(`${passlog}-0.log`, { force: true }).catch(() => { });
        await fs.rm(`${passlog}-0.log.mbtree`, { force: true }).catch(() => { });
    } catch {
        // ignore
    }
}

async function collectMp4s(dir) {
    let results = [];
    try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                const nested = await collectMp4s(full);
                results = results.concat(nested);
            } else if (entry.isFile() && /\.mp4$/i.test(entry.name)) {
                results.push(full);
            }
        }
    } catch (err) {
        // ignore if dir doesn't exist
    }
    return results;
}

async function main() {
    const rawArg = process.argv[2]; // e.g. "50000KB" or "50MB" or undefined
    let targetBytes;
    try {
        targetBytes = parseTargetArg(rawArg);
    } catch (err) {
        console.error('Invalid target:', err.message);
        process.exit(1);
    }

    const targetKb = (targetBytes / 1024).toFixed(2);
    console.log(`Target: ${targetKb} KB`);

    const root = process.cwd();
    const videosDir = path.join(root, 'videos-to-compress');

    console.log(`Looking for .mp4 files inside: ${videosDir}`);
    const files = await collectMp4s(videosDir);

    if (!files.length) {
        console.log('No .mp4 files found. Make sure the folder exists and contains .mp4 files.');
        return;
    }

    console.log(`Found ${files.length} .mp4 file(s). Processing sequentially (one-by-one).`);
    for (const file of files) {
        try {
            await processFile(file, targetBytes);
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }

    console.log('\nAll done.');
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
