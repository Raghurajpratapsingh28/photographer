import { NextResponse } from 'next/server';
import { getPortfolioItemBySlug } from '../../../../lib/portfolio';

interface RouteParams {
  params: {
    slug: string[];
  };
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const slugPath = params.slug.join('/');
    const portfolioItem = getPortfolioItemBySlug(slugPath);
    
    if (!portfolioItem) {
      return NextResponse.json(
        { error: 'Portfolio item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(portfolioItem);
  } catch (error) {
    console.error('Error loading portfolio item:', error);
    return NextResponse.json(
      { error: 'Failed to load portfolio item' },
      { status: 500 }
    );
  }
} 