import type { ImageMetadata } from 'astro';
import path from 'node:path';
import sharp from 'sharp';

/**
 * Alle Bilder aus src/assets/bilder werden hier eingesammelt, damit sie in den
 * Datendateien nur per Dateiname referenziert werden müssen.
 */
const allImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/bilder/**/*.{jpg,jpeg,png,webp,avif,svg}',
  { eager: true },
);

export function getAsset(folder: string, file: string): ImageMetadata {
  const key = `/src/assets/bilder/${folder}/${file}`;
  const mod = allImages[key];
  if (!mod) {
    throw new Error(`Bild nicht gefunden: ${key} – Dateiname in der Datendatei prüfen.`);
  }
  return mod.default;
}

export function hasAsset(folder: string, file: string): boolean {
  return `/src/assets/bilder/${folder}/${file}` in allImages;
}

/** Nur Breiten erzeugen, die das Original auch hergibt – nie hochskalieren. */
export function widthsFor(img: ImageMetadata, wanted: number[]): number[] {
  const list = wanted.filter((w) => w < img.width);
  list.push(Math.min(img.width, Math.max(...wanted)));
  return [...new Set(list)].sort((a, b) => a - b);
}

const placeholderCache = new Map<string, string>();

/**
 * Winziges, weichgezeichnetes Vorschaubild als data-URI (verschwommener Platzhalter
 * während das eigentliche Bild lädt).
 */
export async function blurPlaceholder(folder: string, file: string): Promise<string> {
  const key = `${folder}/${file}`;
  const cached = placeholderCache.get(key);
  if (cached) return cached;
  const filePath = path.join(process.cwd(), 'src/assets/bilder', folder, file);
  const buf = await sharp(filePath).resize(16).blur(1.2).webp({ quality: 40 }).toBuffer();
  const uri = `data:image/webp;base64,${buf.toString('base64')}`;
  placeholderCache.set(key, uri);
  return uri;
}
