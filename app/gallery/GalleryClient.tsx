"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

// Generate consistent layout based on image index
const getColumnClass = (index: number) => {
  const patterns = [
    'col-span-1 row-span-1',
    'col-span-1 lg:col-span-2 row-span-1',
    'col-span-1 row-span-2',
    'col-span-1 lg:col-span-2 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
  ];
  
  // Use modulo to create a consistent but varied pattern
  const patternIndex = index % patterns.length;
  return patterns[patternIndex];
};

const GalleryClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Use static images from gallery.json
  const [images, setImages] = useState<{ url: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/gallery');
        if (!res.ok) throw new Error('Failed to fetch gallery');
        const data = await res.json();
        setImages(data.images || []);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (loading) {
    return (
      <section className="py-12 sm:py-20 lg:py-24 relative w-full bg-black min-h-screen flex items-center justify-center">
        <div className="px-4 sm:px-6 lg:px-24 w-full text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-sm sm:text-base">Loading gallery...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 sm:py-20 lg:py-24 relative w-full bg-black min-h-screen flex items-center justify-center">
        <div className="px-4 sm:px-6 lg:px-24 w-full text-center">
          <div className="text-white">
            <p className="text-base sm:text-lg mb-4">Failed to load gallery</p>
            <p className="text-sm sm:text-base text-gray-400 mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors text-sm sm:text-base"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="section"
        className="py-12 sm:py-20 lg:py-24 relative w-full bg-black min-h-screen"
      >
        <div id="container" className="px-4 sm:px-6 lg:px-24 w-full">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bebas mb-2">Gallery</h1>
            <span className="text-white text-sm sm:text-base font-bold italic">
              Our Entire works are showcased here.
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[250px] xl:auto-rows-[200px]">
            {images.map((image, index) => (
              <div key={index} className={`${getColumnClass(index)} relative overflow-hidden rounded-lg bg-gray-900`}>
                <button
                  onClick={() => handleImageClick(index)}
                  className="w-full h-full cursor-pointer hover:opacity-90 active:opacity-75 transition-opacity duration-200 relative overflow-hidden group"
                >
                  <Image
                    src={image.url}
                    alt={`Gallery image ${index + 1}`}
                    width={420}
                    height={240}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading={index < 8 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageModal
        images={images}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNavigate={handleNavigate}
      />
    </>
  );
};

export default GalleryClient; 