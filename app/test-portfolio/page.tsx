"use client";

import { portfolioItems } from "../portfolio/page";
import Link from "next/link";

export default function TestPortfolioPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Portfolio Test Page</h1>
        
        <div className="grid gap-4">
          <h2 className="text-xl font-semibold">Available Portfolio Items:</h2>
          {portfolioItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground">Slug: {item.slug}</p>
              <p className="text-sm text-muted-foreground">Category: {item.category}</p>
              <p className="text-sm text-muted-foreground">Photos: {item.photos.length}</p>
              <Link 
                href={`/portfolio/${item.slug}`}
                className="text-primary hover:underline text-sm"
              >
                View Portfolio →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Test Links:</h2>
          <div className="flex flex-wrap gap-2">
            {portfolioItems.map((item) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.slug}`}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 