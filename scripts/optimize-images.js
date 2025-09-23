// scripts/optimize-images.js
import fs from 'fs/promises';
import path from 'path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import sharp from 'sharp';

const exts = ['.jpg', '.jpeg', '.png', '.heic'];
const execFileAsync = promisify(execFile);

async function processDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDir(fullPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (!exts.includes(ext)) continue;

      const outPath = fullPath.replace(ext, '.webp');

      try {
        if (ext === '.png') {
          // PNG → WebP lossless
          await sharp(fullPath)
            .webp({ lossless: true })
            .toFile(outPath);

        } else if (ext === '.heic') {
          // HEIC → PNG intermedio usando heif-convert
          const tempPng = fullPath.replace(/\.heic$/, '.png');
          await execFileAsync('heif-convert', [fullPath, tempPng]);
          await sharp(tempPng)
            .webp({ quality: 85, effort: 4 })
            .toFile(outPath);
          await fs.unlink(tempPng); // limpia el PNG temporal

        } else {
          // JPG/JPEG → WebP con pérdida leve
          await sharp(fullPath)
            .webp({ quality: 85, effort: 4 })
            .toFile(outPath);
        }

        // ✅ borrar el original después de convertir
        await fs.unlink(fullPath);

        console.log(`✅ Optimizado y reemplazado: ${fullPath} → ${outPath}`);
      } catch (err) {
        console.error(`❌ Error convirtiendo ${fullPath}:`, err);
      }
    }
  }
}

async function main() {
  const root = process.cwd();
  await processDir(path.join(root, 'fotos-to-compress'));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
