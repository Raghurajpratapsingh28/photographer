"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import galleryData from '@/data/gallery.json';

const randomColumns = () => {
  const columnSize = [
    'sm:row-span-1',
    'sm:col-span-3 row-span-1',
    'col-span-1 sm:row-span-2',
  ];
  const randomIndex = Math.floor(Math.random() * columnSize.length);
  return columnSize[randomIndex];
};

const GalleryClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Use static images from gallery.json
  const [images] = useState<{ url: string }[]>(galleryData.images);
  const [loading] = useState(false);

  useEffect(() => {
    // No need to fetch images from API
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
      <section className="py-24 overflow-hidden sm:py-24 relative w-full justify-center flex items-center bg-black">
        <div className="px-6 sm:px-24 w-full h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="section"
        className="py-24 overflow-hidden sm:py-24 relative w-full justify-center flex items-center bg-black"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <h1 className="text-white text-6xl font-bebas">Gallery</h1>
          <span className="text-white text-base font-bold italic">
            Our Entire works are showcased here.
          </span>
          <div className="grid-cols-1 grid-flow-row-dense gap-6 sm:grid-cols-2 md:grid-cols-4 grid">
            {images.map((image, index) => (
              <div key={index} className={randomColumns()}>
                <button
                  onClick={() => handleImageClick(index)}
                  className="w-full h-full cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <Image
                    src={image.url}
                    alt={`Gallery image ${index + 1}`}
                    width={420}
                    height={240}
                    className="w-full h-full object-cover"
                  />
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