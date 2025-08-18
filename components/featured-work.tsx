"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  getAllPortfolioItems, 
  getAllCategories, 
  getPortfolioItemsByCategory,
  type PortfolioItem,
  type Category 
} from "@/lib/portfolio";

export default function FeaturedWork() {
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Get data from portfolio.ts
  const allItems = getAllPortfolioItems();
  const categories = getAllCategories();
  
  // Filter projects based on selected category
  const allFilteredProjects = filter === "all"
    ? allItems
    : getPortfolioItemsByCategory(filter);
  
  const filteredProjects = allFilteredProjects.slice(0, visibleItems);
  
  // Handle filter change with loading state
  const handleFilterChange = useCallback((newFilter: string) => {
    if (newFilter === filter) return;
    
    setIsLoading(true);
    setFilter(newFilter);
    setVisibleItems(6); // Reset to initial count
    
    setTimeout(() => setIsLoading(false), 300); // Smooth transition
  }, [filter]);
  
  // Load more items for mobile
  const loadMore = useCallback(() => {
    setVisibleItems(prev => Math.min(prev + 6, allFilteredProjects.length));
  }, [allFilteredProjects.length]);
  
  // Handle horizontal scrolling for categories on mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd || !scrollRef.current) return;
    
    const distance = touchStart - touchEnd;
    const scrollAmount = 200;
    
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        scrollRef.current.scrollLeft += scrollAmount; // Scroll right
      } else {
        scrollRef.current.scrollLeft -= scrollAmount; // Scroll left
      }
    }
  }, [touchStart, touchEnd]);

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
    <section className="py-16 sm:py-20 px-4 bg-background relative z-10">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ✨ Featured Work
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our portfolio of premium photography across various genres. 
            Each project tells a unique story, captured with precision and artistry.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filters for Mobile */}
        <motion.div 
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mobile: Horizontal scrollable filters */}
          <div className="sm:hidden">
            <div 
              ref={scrollRef}
              className="flex gap-3 pb-4 overflow-x-auto scrollbar-hide px-4 -mx-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleFilterChange(category.id)}
                  className={`mobile-tap-target flex-shrink-0 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2 whitespace-nowrap ${
                    filter === category.id 
                      ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105" 
                      : "bg-background hover:bg-secondary/80 text-foreground border-border hover:border-primary/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
            <div className="text-center text-xs text-muted-foreground mt-2">
              👈 Swipe to see more categories
            </div>
          </div>
          
          {/* Desktop: Centered wrap layout */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                  filter === category.id 
                    ? "bg-primary text-primary-foreground border-primary shadow-lg" 
                    : "bg-background hover:bg-secondary/80 text-foreground border-border hover:border-primary/50"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="loader"></div>
          </div>
        )}

        {/* Enhanced Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isLoading ? "hidden" : "visible"}
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${filter}`}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Link href={`/portfolio/${project.slug}`} className="block">
                  <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden rounded-t-xl bg-muted">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={index > 2 ? "lazy" : "eager"}
                    />
                    
                    {/* Enhanced overlay with better mobile visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 sm:opacity-80 transition-opacity group-hover:opacity-90" />
                    
                    {/* Mobile-optimized content overlay */}
                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                      {/* Category badge - always visible on mobile */}
                      <motion.span 
                        className="text-xs uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1.5 rounded-full mb-3 inline-block backdrop-blur-sm w-fit shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {project.category}
                      </motion.span>
                      
                      {/* Title and description - enhanced for mobile */}
                      <div className="transform translate-y-2 sm:translate-y-6 opacity-100 sm:opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="text-lg sm:text-xl font-playfair font-semibold text-white mb-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/90 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Mobile CTA */}
                        <div className="mt-3 flex items-center text-xs text-white/80">
                          <span>View Gallery</span>
                          <span className="ml-2">→</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Load More Button for Mobile */}
        {visibleItems < allFilteredProjects.length && (
          <motion.div 
            className="text-center mt-8 sm:hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={loadMore}
              className="mobile-tap-target bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg border border-border hover:border-primary/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More ({allFilteredProjects.length - visibleItems} remaining)
            </motion.button>
          </motion.div>
        )}

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/portfolio" 
              className="mobile-tap-target inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-gold px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span>🎨 View Full Portfolio</span>
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
          
          <motion.p 
            className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover our complete collection of premium photography work across all categories
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}