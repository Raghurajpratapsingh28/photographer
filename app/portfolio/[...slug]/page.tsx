"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react";
import { getPortfolioItemBySlug, type PortfolioItem } from "../../../lib/portfolio";

// All available images from the public folder
const allImages = [
  "/011A8486.jpg",
  "/0O0A0978.jpg",
  "/1747143850683.jpg",
  "/1B1A0396.jpg",
  "/1B1A0398 (2).jpg",
  "/1B1A0405.jpg",
  "/1B1A0420.jpg",
  "/1B1A0944.jpg",
  "/1B1A0951.jpg",
  "/1B1A1411.jpg",
  "/1B1A3453.jpg",
  "/1B1A3469.jpg",
  "/1B1A3496.jpg",
  "/1B1A4151.jpg",
  "/1B1A5664.jpg",
  "/1B1A5671.jpg",
  "/1B1A5725.jpg",
  "/1B1A8359.jpg",
  "/1B1A8443.jpg",
  "/1B1A8450.jpg",
  "/1B1A8458.jpg",
  "/1B1A8652 (1).jpg",
  "/1B1A8680.jpg",
  "/1B1A8749.jpg",
  "/1B1A8752.jpg",
  "/1B1A9381.jpg",
  "/1B1A9384.jpg",
  "/5F3A0546 (1).jpg",
  "/character.jpg",
  "/home.jpg",
  "/IMG_0474.jpg",
  "/IMG_1658.jpg",
  "/IMG_1683 (1).jpg",
  "/IMG_1683.jpg",
  "/IMG_1896.jpg",
  "/IMG_2167.jpg",
  "/IMG_2263.jpg",
  "/IMG_2298.jpg",
  "/IMG_2304.jpg",
  "/IMG_2308.jpg",
  "/IMG_2316.jpg",
  "/IMG_2327.jpg",
  "/IMG_2328 (1).jpg",
  "/memo.jpg",
  "/VMC02805.jpg",
  "/VMC02809.jpg",
  "/VMC02827.jpg",
  "/VMC02863.jpg",
  "/VMC02872.jpg",
  "/VMC02899.jpg",
  "/VMC02901.jpg",
  "/VMC02907.jpg",
  "/VMC02910.jpg",
  "/VMC02915.jpg",
  "/VMC02918.jpg",
  "/VMC03044.jpg",
  "/VMC03054.jpg",
  "/VMC03055.jpg",
  "/VMC03069.jpg",
  "/VMC03144.jpg",
  "/VMC03145.jpg",
  "/VMC03146.jpg",
  "/VMC03152.jpg",
  "/VMC03154.jpg",
  "/VMC03176.jpg",
  "/VMC03181.jpg",
  "/VMC03210.jpg",
  "/VMC03322.jpg",
  "/VMC03327.jpg",
  "/VMC03370.jpg",
  "/VMC03373.jpg",
  "/White Simple Minimalist Happy Wedding Photo Collage_20250404_234036_0000.jpg"
];

interface PageProps {
  params: {
    slug: string[];
  };
}

export default function PortfolioDetailPage({ params }: PageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioItem, setPortfolioItem] = useState<PortfolioItem | null>(null);

  // Find the portfolio item based on the slug
  useEffect(() => {
    const slugPath = params.slug.join('/');
    const item = getPortfolioItemBySlug(slugPath);
    setPortfolioItem(item || null);
    setIsLoading(false);
  }, [params.slug]);

  // Get images for this portfolio
  const portfolioImages = portfolioItem?.photos || [];

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === portfolioImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? portfolioImages.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!portfolioItem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Portfolio Not Found</h1>
          <Link href="/portfolio" className="text-primary hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src={portfolioItem.thumbnail}
          alt={portfolioItem.title}
          fill
          className="object-cover"
          onError={(e) => {
            console.error(`Failed to load thumbnail: ${portfolioItem.thumbnail}`);
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <Link 
              href="/portfolio"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">
                {portfolioItem.title}
              </h1>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-4">
                {portfolioItem.description}
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-white/70">
                <span>{portfolioItem.location}</span>
                <span>•</span>
                <span>{portfolioItem.date}</span>
                <span>•</span>
                <span>{portfolioImages.length} Photos</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioImages.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-lg bg-card shadow-lg cursor-pointer"
                onClick={() => openLightbox(photo.src, index)}
                whileHover={{ y: -5 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    console.error(`Failed to load image: ${photo.src}`);
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative max-w-7xl max-h-full p-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft className="h-12 w-12" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight className="h-12 w-12" />
              </button>

              {/* Image */}
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={portfolioImages[currentImageIndex]?.src || ''}
                  alt={portfolioImages[currentImageIndex]?.alt || `${portfolioItem.title} - Photo ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="max-h-[80vh] w-auto object-contain"
                  onError={(e) => {
                    console.error(`Failed to load lightbox image: ${portfolioImages[currentImageIndex]?.src}`);
                  }}
                />
              </motion.div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                <p className="text-sm opacity-80">
                  {currentImageIndex + 1} of {portfolioImages.length}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Download functionality
                    const link = document.createElement('a');
                    link.href = portfolioImages[currentImageIndex]?.src || '';
                    link.download = `${portfolioItem.title}-${currentImageIndex + 1}.jpg`;
                    link.click();
                  }}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                >
                  <Download className="h-5 w-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Share functionality
                    if (navigator.share) {
                      navigator.share({
                        title: portfolioItem.title,
                        text: portfolioItem.description,
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 