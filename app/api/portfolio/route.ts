import { NextResponse } from 'next/server';
import { getPortfolioData, validatePortfolioData } from '../../../lib/portfolio';

export async function GET() {
  try {
    const data = getPortfolioData();
    const validation = validatePortfolioData();
    
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Portfolio data validation failed', errors: validation.errors },
        { status: 500 }
      );
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    return NextResponse.json(
      { error: 'Failed to load portfolio data' },
      { status: 500 }
    );
  }
} 