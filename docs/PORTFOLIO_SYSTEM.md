# Portfolio System Documentation

## Overview

The portfolio system is now powered by a well-structured JSON file that makes it easy to manage and update portfolio content dynamically. This system provides:

- **Centralized Data Management**: All portfolio data is stored in `data/portfolio.json`
- **Type Safety**: Full TypeScript support with proper interfaces
- **API Endpoints**: RESTful APIs for accessing portfolio data
- **Dynamic Routing**: Automatic portfolio page generation
- **Rich Metadata**: Detailed information for each portfolio item

## File Structure

```
data/
├── portfolio.json          # Main portfolio data file
lib/
├── portfolio.ts           # Utility functions and types
app/
├── portfolio/
│   ├── page.tsx           # Main portfolio listing page
│   └── [...slug]/
│       └── page.tsx       # Dynamic portfolio detail pages
├── api/
│   └── portfolio/
│       ├── route.ts       # API endpoint for all portfolio data
│       └── [slug]/
│           └── route.ts   # API endpoint for individual items
└── test-portfolio/
    └── page.tsx           # Test page for portfolio validation
```

## JSON Data Structure

### Portfolio Item Structure

Each portfolio item contains:

```json
{
  "id": 1,
  "title": "Project Title",
  "category": "category-id",
  "slug": "category/project-slug",
  "thumbnail": "/path/to/thumbnail.jpg",
  "description": "Project description",
  "location": "Project location",
  "date": "Project date",
  "client": "Client name",
  "duration": "Project duration",
  "services": ["Service 1", "Service 2"],
  "photos": [
    {
      "id": "unique_photo_id",
      "src": "/path/to/photo.jpg",
      "alt": "Photo alt text",
      "caption": "Photo caption"
    }
  ],
  "testimonial": {
    "text": "Client testimonial",
    "author": "Client name",
    "rating": 5
  },
  "tags": ["tag1", "tag2"]
}
```

### Photo Structure

Each photo includes:

- `id`: Unique identifier for the photo
- `src`: Path to the image file
- `alt`: Alt text for accessibility
- `caption`: Descriptive caption for the photo

## API Endpoints

### Get All Portfolio Data

```
GET /api/portfolio
```

Returns complete portfolio data including categories, items, and metadata.

### Get Individual Portfolio Item

```
GET /api/portfolio/[slug]
```

Returns a specific portfolio item by its slug.

Example: `/api/portfolio/wedding/anira-and-raj`

## Utility Functions

### Core Functions

- `getPortfolioData()`: Get complete portfolio data
- `getAllPortfolioItems()`: Get all portfolio items
- `getPortfolioItemBySlug(slug)`: Get item by slug
- `getPortfolioItemsByCategory(category)`: Filter by category
- `getAllCategories()`: Get all categories

### Advanced Functions

- `getPortfolioItemsPaginated(page, limit, category)`: Paginated results
- `searchPortfolioItems(query)`: Search functionality
- `getRelatedPortfolioItems(item, limit)`: Related items
- `getPortfolioStats()`: Portfolio statistics
- `validatePortfolioData()`: Data validation

## Adding New Portfolio Items

1. **Add Photos**: Place new images in the `public/` directory
2. **Update JSON**: Add new portfolio item to `data/portfolio.json`
3. **Validate**: Ensure the item has exactly 12 photos
4. **Test**: Visit `/test-portfolio` to verify the new item

### Example: Adding a New Wedding Portfolio

```json
{
  "id": 7,
  "title": "New Wedding Project",
  "category": "weddings",
  "slug": "wedding/new-project",
  "thumbnail": "/new-wedding-thumbnail.jpg",
  "description": "Beautiful wedding celebration",
  "location": "Wedding Venue",
  "date": "December 2025",
  "client": "Bride & Groom",
  "duration": "Full Day",
  "services": ["Ceremony", "Reception", "Portraits"],
  "photos": [
    {
      "id": "new_wedding_1",
      "src": "/new-wedding-1.jpg",
      "alt": "Wedding ceremony",
      "caption": "Beautiful ceremony moment"
    }
    // ... 11 more photos
  ],
  "testimonial": {
    "text": "Amazing photography!",
    "author": "Happy Couple",
    "rating": 5
  },
  "tags": ["wedding", "celebration", "love"]
}
```

## Categories

The system supports these categories:

- `all`: All portfolio items
- `weddings`: Wedding photography
- `portraits`: Portrait sessions
- `events`: Event photography
- `fashion`: Fashion photography
- `commercial`: Commercial photography

## Features

### Dynamic Routing
- Automatic page generation for each portfolio item
- SEO-friendly URLs based on slugs
- Support for nested routes (e.g., `/portfolio/wedding/anira-and-raj`)

### Image Management
- Exactly 12 photos per portfolio item
- Rich metadata for each photo (alt text, captions)
- Automatic lightbox functionality
- Download and share capabilities

### Search & Filtering
- Category-based filtering
- Full-text search across titles, descriptions, and tags
- Related items suggestions

### Performance
- Optimized image loading
- Pagination support
- Caching-friendly API endpoints

## Validation

The system includes automatic validation:

- Ensures each portfolio item has exactly 12 photos
- Validates required fields (title, slug, photos)
- Checks for duplicate slugs
- Verifies image file paths

Run validation:

```typescript
import { validatePortfolioData } from '../lib/portfolio';

const validation = validatePortfolioData();
if (!validation.isValid) {
  console.error('Validation errors:', validation.errors);
}
```

## Testing

Visit `/test-portfolio` to:

- View all portfolio items
- Test navigation links
- Verify data structure
- Check photo counts
- Validate slugs

## Best Practices

1. **Image Naming**: Use descriptive, consistent naming for images
2. **Slugs**: Create SEO-friendly, unique slugs
3. **Photos**: Always include exactly 12 photos per item
4. **Metadata**: Provide rich alt text and captions
5. **Categories**: Use consistent category IDs
6. **Validation**: Run validation after adding new items

## Troubleshooting

### Common Issues

1. **Missing Photos**: Ensure each item has exactly 12 photos
2. **Invalid Slugs**: Check for duplicate or malformed slugs
3. **Image Paths**: Verify all image paths exist in the public directory
4. **Type Errors**: Ensure JSON structure matches TypeScript interfaces

### Debug Tools

- `/test-portfolio`: Visual validation page
- `validatePortfolioData()`: Programmatic validation
- Browser console: Check for image loading errors
- Network tab: Verify API responses 