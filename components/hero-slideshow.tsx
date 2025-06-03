"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Slide = {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1813922/pexels-photo-1813922.jpeg",
    alt: "Wedding photography",
    title: "Capturing Love",
    subtitle: "Timeless wedding moments",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg",
    alt: "Portrait photography",
    title: "Revealing Character",
    subtitle: "Portraits that tell stories",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/2253916/pexels-photo-2253916.jpeg",
    alt: "Event photography",
    title: "Freezing Time",
    subtitle: "Memorable event coverage",
  },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    if (currentSlide === index || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide]);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 100,
        ease: "none",
      });
    }

    return () => {
      // Cleanup GSAP
    };
  }, []);

  return (
    <div 
      className="relative h-screen w-full overflow-hidden -mt-24" 
      ref={sliderRef}
    >
      {/* Slides */}
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          ref={(el) => (slideRefs.current[currentSlide] = el)}
        >
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center min-h-screen w-full"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-[2px]" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slides[currentSlide].id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.h1 
              className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link 
                href="/portfolio" 
                className="px-6 py-3 bg-primary/90 hover:bg-primary text-primary-foreground font-medium rounded-md backdrop-blur-sm transition-colors"
              >
                Explore Portfolio
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-md backdrop-blur-sm transition-colors"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentSlide === index
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}