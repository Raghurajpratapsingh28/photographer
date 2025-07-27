const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_JSON = path.join(__dirname, '../data/gallery.json');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

function getAllImages(dir, baseUrl = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const relPath = path.join(baseUrl, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath, relPath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        // Use POSIX-style slashes for URLs
        results.push({ url: '/' + relPath.split(path.sep).join('/') });
      }
    }
  });
  return results;
}

const images = getAllImages(PUBLIC_DIR);
const gallery = { images };

fs.writeFileSync(OUTPUT_JSON, JSON.stringify(gallery, null, 2));
console.log(`Updated ${OUTPUT_JSON} with ${images.length} images.`); 