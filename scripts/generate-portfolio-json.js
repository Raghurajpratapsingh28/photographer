const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_FILE = path.join(__dirname, '../data/portfolio.json');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

function isImage(file) {
  return IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase());
}

function prettifyTitle(folder) {
  return folder.replace(/&/g, ' & ').replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
}

function generatePortfolioItems() {
  const folders = fs.readdirSync(PUBLIC_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => !['certificates'].includes(name));

  const portfolioItems = folders.map((folder, idx) => {
    const folderPath = path.join(PUBLIC_DIR, folder);
    const images = fs.readdirSync(folderPath).filter(isImage);
    const title = prettifyTitle(folder);
    const photos = images.map((img, i) => ({
      id: `${folder.replace(/\W/g, '').toLowerCase()}_${i + 1}`,
      src: `/${folder}/${img}`,
      alt: `${title} photo ${i + 1}`,
      caption: `${title} - Photo ${i + 1}`
    }));
    return {
      id: idx + 1,
      title,
      category: 'weddings',
      slug: `wedding/${folder.replace(/\s+/g, '-').toLowerCase()}`,
      thumbnail: photos[0] ? photos[0].src : '',
      description: `${title} photo collection`,
      location: '',
      date: '',
      client: title,
      duration: '',
      services: [],
      photos,
      testimonial: null,
      tags: []
    };
  });
  return portfolioItems;
}

function main() {
  const portfolioItems = generatePortfolioItems();
  let output = {
    categories: [],
    portfolioItems,
    metadata: {
      totalItems: portfolioItems.length,
      totalPhotos: portfolioItems.reduce((sum, item) => sum + item.photos.length, 0),
      lastUpdated: new Date().toISOString().split('T')[0],
      version: 'auto-generated'
    }
  };
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      const old = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
      if (old.categories) output.categories = old.categories;
    } catch (e) {}
  }
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`Generated ${OUTPUT_FILE} with ${portfolioItems.length} items.`);
}

main(); 