import portfolioData from '../data/portfolio.json';

// TypeScript interfaces for type safety
export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  slug: string;
  thumbnail: string;
  description: string;
  location: string;
  date: string;
  client: string;
  duration: string;
  services: string[];
  photos: Photo[];
  testimonial: Testimonial;
  tags: string[];
}

export interface PortfolioData {
  categories: Category[];
  portfolioItems: PortfolioItem[];
  metadata: {
    totalItems: number;
    totalPhotos: number;
    lastUpdated: string;
    version: string;
  };
}

// Load portfolio data
export const getPortfolioData = (): PortfolioData => {
  return portfolioData as PortfolioData;
};

// Get all portfolio items
export const getAllPortfolioItems = (): PortfolioItem[] => {
  return getPortfolioData().portfolioItems;
};

// Get portfolio item by slug
export const getPortfolioItemBySlug = (slug: string): PortfolioItem | null => {
  const items = getAllPortfolioItems();
  return items.find(item => item.slug === slug) || null;
};

// Get portfolio items by category
export const getPortfolioItemsByCategory = (category: string): PortfolioItem[] => {
  const items = getAllPortfolioItems();
  if (category === 'all') return items;
  return items.filter(item => item.category === category);
};

// Get all categories
export const getAllCategories = (): Category[] => {
  return getPortfolioData().categories;
};

// Get category by id
export const getCategoryById = (id: string): Category | null => {
  const categories = getAllCategories();
  return categories.find(cat => cat.id === id) || null;
};

// Get portfolio items with pagination
export const getPortfolioItemsPaginated = (
  page: number = 1,
  limit: number = 6,
  category?: string
): { items: PortfolioItem[]; total: number; pages: number } => {
  let items = category ? getPortfolioItemsByCategory(category) : getAllPortfolioItems();
  
  const total = items.length;
  const pages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  items = items.slice(startIndex, endIndex);
  
  return { items, total, pages };
};

// Search portfolio items
export const searchPortfolioItems = (query: string): PortfolioItem[] => {
  const items = getAllPortfolioItems();
  const lowercaseQuery = query.toLowerCase();
  
  return items.filter(item => 
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery) ||
    item.location.toLowerCase().includes(lowercaseQuery) ||
    item.client.toLowerCase().includes(lowercaseQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Get related portfolio items
export const getRelatedPortfolioItems = (currentItem: PortfolioItem, limit: number = 3): PortfolioItem[] => {
  const items = getAllPortfolioItems();
  
  // Get items from the same category, excluding current item
  let related = items.filter(item => 
    item.category === currentItem.category && item.id !== currentItem.id
  );
  
  // If not enough items from same category, add items with similar tags
  if (related.length < limit) {
    const itemsWithSimilarTags = items.filter(item => 
      item.id !== currentItem.id && 
      !related.find(r => r.id === item.id) &&
      item.tags.some(tag => currentItem.tags.includes(tag))
    );
    related = [...related, ...itemsWithSimilarTags];
  }
  
  // Return limited number of items
  return related.slice(0, limit);
};

// Get portfolio statistics
export const getPortfolioStats = () => {
  const data = getPortfolioData();
  const items = getAllPortfolioItems();
  
  const statsByCategory = data.categories.map(category => {
    const categoryItems = items.filter(item => item.category === category.id);
    return {
      category: category.name,
      count: categoryItems.length,
      totalPhotos: categoryItems.reduce((sum, item) => sum + item.photos.length, 0)
    };
  });
  
  return {
    totalItems: data.metadata.totalItems,
    totalPhotos: data.metadata.totalPhotos,
    categories: statsByCategory,
    averageRating: items.reduce((sum, item) => sum + item.testimonial.rating, 0) / items.length
  };
};

// Validate portfolio data
export const validatePortfolioData = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  const data = getPortfolioData();
  
  // Check if all required fields exist
  if (!data.portfolioItems || !Array.isArray(data.portfolioItems)) {
    errors.push('Portfolio items array is missing or invalid');
  }
  
  if (!data.categories || !Array.isArray(data.categories)) {
    errors.push('Categories array is missing or invalid');
  }
  
  // Validate each portfolio item
  data.portfolioItems?.forEach((item, index) => {
    if (!item.slug) errors.push(`Portfolio item ${index + 1}: Missing slug`);
    if (!item.title) errors.push(`Portfolio item ${index + 1}: Missing title`);
    if (!item.photos || item.photos.length === 0) {
      errors.push(`Portfolio item ${index + 1}: No photos found`);
    }
    if (item.photos && item.photos.length !== 12) {
      errors.push(`Portfolio item ${index + 1}: Expected 12 photos, found ${item.photos.length}`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
}; 