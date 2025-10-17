// scripts/optimize-images.js
import fs from 'fs/promises';
import path from 'path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import sharp from 'sharp';
import { optimize } from 'svgo';

const exts = ['.jpg', '.jpeg', '.png', '.heic'];
const execFileAsync = promisify(execFile);

async function optimizeSVG(fullPath) {
	try {
		const stats = await fs.stat(fullPath);
		const sizeMB = stats.size / (1024 * 1024);

		const svgContent = await fs.readFile(fullPath, 'utf8');

		// Configuraciones según el tamaño del archivo
		const plugins =
			sizeMB > 50
				? [
					'removeDoctype',
					'removeComments',
					'cleanupNumericValues',
					'convertPathData',
					'mergePaths',
					'removeDimensions',
					'removeMetadata',
					'removeDesc',
					'removeTitle',
					'removeUselessDefs',
					'cleanupIDs',
					'convertShapeToPath',
					'removeViewBox',
				]
				: [
					'removeDoctype',
					'removeComments',
					'cleanupNumericValues',
					'convertPathData',
					'mergePaths',
				];

		const optimized = optimize(svgContent, {
			path: fullPath,
			multipass: true,
			plugins,
		});

		await fs.writeFile(fullPath, optimized.data, 'utf8');
		console.log(
			`✅ SVG optimizado: ${fullPath} (${sizeMB.toFixed(2)} MB → ${(
				(await fs.stat(fullPath)).size /
				(1024 * 1024)
			).toFixed(2)} MB)`
		);
	} catch (err) {
		console.error(`❌ Error optimizando SVG ${fullPath}:`, err);
	}
}

async function processDir(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			await processDir(fullPath);
			continue;
		}

		const ext = path.extname(entry.name).toLowerCase();

		// 🟣 Soporte para SVGs
		if (ext === '.svg') {
			await optimizeSVG(fullPath);
			continue;
		}

		// 🔵 Soporte para JPG/PNG/HEIC
		if (!exts.includes(ext)) continue;

		const outPath = fullPath.replace(ext, '.webp');

		try {
			if (ext === '.png') {
				// PNG → WebP lossless
				await sharp(fullPath).webp({ lossless: true }).toFile(outPath);
			} else if (ext === '.heic') {
				// HEIC → PNG intermedio usando heif-convert
				const tempPng = fullPath.replace(/\.heic$/, '.png');
				await execFileAsync('heif-convert', [fullPath, tempPng]);
				await sharp(tempPng).webp({ quality: 85, effort: 4 }).toFile(outPath);
				await fs.unlink(tempPng); // limpia el PNG temporal
			} else {
				// JPG/JPEG → WebP con pérdida leve
				await sharp(fullPath).webp({ quality: 85, effort: 4 }).toFile(outPath);
			}

			// ✅ borrar el original después de convertir
			await fs.unlink(fullPath);
			console.log(`✅ Optimizado y reemplazado: ${fullPath} → ${outPath}`);
		} catch (err) {
			console.error(`❌ Error convirtiendo ${fullPath}:`, err);
		}
	}
}

async function main() {
	const root = process.cwd();
	await processDir(path.join(root, 'fotos-to-compress'));
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
