import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  const publicDir = path.join(process.cwd(), 'public');
  const excludeFolders = ['certificates'];
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

  // Get all directories in public, excluding unwanted ones
  const allEntries = fs.readdirSync(publicDir, { withFileTypes: true });
  const folders = allEntries
    .filter((entry) => entry.isDirectory() && !excludeFolders.includes(entry.name))
    .map((entry) => entry.name);

  // For each folder, get images
  const galleries = folders.map((folder) => {
    const folderPath = path.join(publicDir, folder);
    const files = fs.readdirSync(folderPath);
    const images = files
      .filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()))
      .map((file) => ({ url: `/${folder}/${file}` }));
    return { folder, images };
  });

  return NextResponse.json({ galleries });
} 