"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Array of hero images for the carousel
const heroImages = [
  "/home.jpg",
  "/character.jpg",
  "/memo.jpg",
];

export default function HeroSlideshow() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="section"
      className="h-screen w-full relative overflow-hidden"
    >
      <div id="container" className="w-full h-full relative">
        {/* Background Images with fade transition */}
        {heroImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Hero Background ${index + 1}`}
            fill
            className={`w-full h-full object-cover absolute transition-opacity duration-700 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 pointer-events-auto z-0"
                : "opacity-0 pointer-events-none z-0"
            }`}
            priority={index === 0}
          />
        ))}

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

        {/* Content */}
        <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full absolute bottom-8 sm:bottom-12 left-0 right-0 px-6 sm:px-24 z-20">
          <button
            onClick={() => router.push("/contact")}
            className="border-2 font-bebas pt-1 text-white hover:bg-white hover:text-black text-lg duration-300 border-white rounded-full px-9 py-1"
          >
            Contact Us
          </button>
          <div className="flex flex-col">
            <h2 className="font-bold text-4xl leading-none font-bebas text-white">
              Capturing Life's Best Moments
            </h2>
            <p className="text-white text-lg">Professional photography for weddings, portraits, and events.</p>
          </div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
