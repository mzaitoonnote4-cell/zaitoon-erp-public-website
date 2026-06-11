/**
 * One-shot PNG optimization for public website assets.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const targets = [
  { file: "assets/za-erp-logo-dark.png", maxW: 304 },
  { file: "assets/za-erp-logo-light.png", maxW: 304 },
  { file: "assets/za-erp-monogram.png", maxW: 210 },
  { file: "assets/og-image.png", maxW: 1200 },
  { file: "assets/favicon-32x32.png", maxW: 32 },
  { file: "assets/apple-touch-icon.png", maxW: 180 }
];

for (const t of targets) {
  const filePath = path.join(root, t.file);
  const before = readFileSync(filePath).length;
  const img = sharp(filePath);
  const meta = await img.metadata();
  const pipeline =
    meta.width > t.maxW ? img.resize({ width: t.maxW, withoutEnlargement: true }) : img;
  const out = await pipeline.png({ compressionLevel: 9, adaptiveFiltering: true }).toBuffer();
  writeFileSync(filePath, out);
  console.log(`${t.file}: ${before} -> ${out.length} bytes`);
}
