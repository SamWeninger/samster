#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const INPUT_DIR = process.argv[2] || 'public/images';
const SIZES = [1920, 1280, 960, 640];

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const dir = path.dirname(filePath);
  const name = path.basename(filePath, ext);

  const image = sharp(filePath);
  const metadata = await image.metadata();

  for (const width of SIZES) {
    if (metadata.width && width >= metadata.width) continue;
    const outJpg = path.join(dir, `${name}-${width}.jpg`);
    const outWebp = path.join(dir, `${name}-${width}.webp`);
    await image.resize({ width }).jpeg({ quality: 82 }).toFile(outJpg);
    await image.resize({ width }).webp({ quality: 80 }).toFile(outWebp);
    console.log('Wrote', outJpg, 'and', outWebp);
  }
}

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else await processImage(full);
  }
}

walk(INPUT_DIR).catch((e) => {
  console.error(e);
  process.exit(1);
});
