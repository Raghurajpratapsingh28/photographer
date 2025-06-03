"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Category = "All" | "Weddings" | "Portraits" | "Events" | "Fashion" | "Commercial";

type PortfolioItem = {
  id: number;
  title: string;
  category: Category;
  slug: string;
  thumbnail: string;
  description: string;
  location: string;
  date: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Anira & Raj's Wedding",
    category: "Weddings",
    slug: "wedding/anira-and-raj",
    thumbnail: "/portfolio/wedding/anira-and-raj/ss.png",
    description: "A beautiful fusion wedding celebrating love, tradition, and family",
    location: "The Grand Pavilion, Mumbai",
    date: "March 2025"
  },
  {
    id: 2,
    title: "Professional Portraits",
    category: "Portraits",
    slug: "portraits",
    thumbnail: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg",
    description: "Professional portrait sessions capturing your unique personality",
    location: "Luxe Studio",
    date: "May 2025"
  },
  {
    id: 3,
    title: "Annual Charity Gala",
    category: "Events",
    slug: "events/charity-gala",
    thumbnail: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg",
    description: "Documenting a high-profile charity event",
    location: "Grand Hyatt",
    date: "April 2025"
  },
  {
    id: 4,
    title: "Summer Fashion Editorial",
    category: "Fashion",
    slug: "fashion/summer-editorial",
    thumbnail: "https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg",
    description: "Summer collection for a local boutique",
    location: "Beach Resort",
    date: "March 2025"
  },
  {
    id: 5,
    title: "Corporate Team Photos",
    category: "Commercial",
    slug: "commercial/tech-startup",
    thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    description: "Professional team photography for a tech startup",
    location: "Tech Park",
    date: "February 2025"
  },
  {
    id: 6,
    title: "Rohan & Priya's Engagement",
    category: "Weddings",
    slug: "wedding/rohan-priya",
    thumbnail: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
    description: "Pre-wedding photoshoot at a scenic beach",
    location: "Goa Beach",
    date: "January 2025"
  }
];

const categories: Category[] = ["All", "Weddings", "Portraits", "Events", "Fashion", "Commercial"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1813922/pexels-photo-1813922.jpeg"
          alt="Portfolio hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
              Portfolio of Eternal Moments
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              A collection of our finest work across various photography genres
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg bg-card shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/portfolio/${item.slug}`}>
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-xs uppercase tracking-wider bg-primary/80 text-primary-foreground px-2 py-1 rounded-full mb-2 inline-block backdrop-blur-sm">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-playfair font-medium text-white mt-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/80 mt-1">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between mt-4 text-xs text-white/70">
                        <span>{item.location}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Let's Create Your Story
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to capture your special moments? Let's discuss your photography needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Book a Session
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}