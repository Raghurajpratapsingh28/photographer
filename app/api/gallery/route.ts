import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  const galleryJsonPath = path.join(process.cwd(), 'data', 'gallery.json');
  try {
    const fileContents = fs.readFileSync(galleryJsonPath, 'utf-8');
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read gallery data.' }, { status: 500 });
  }
} 