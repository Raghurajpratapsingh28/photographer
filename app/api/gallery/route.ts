import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  const dir = path.join(process.cwd(), 'public', 'redSareeandWhiteKurta');
  const files = fs.readdirSync(dir);
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  const images = files
    .filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()))
    .map((file) => ({ url: `/redSareeandWhiteKurta/${file}`}));
  return NextResponse.json({ images });
} 