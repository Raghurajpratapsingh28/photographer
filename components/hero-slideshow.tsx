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
    src: "/home.jpg",
    alt: "Wedding photography",
    title: "Capturing Love",
    subtitle: "Timeless wedding moments",
  },
  {
    id: 2,
    src: "/character.jpg",
    alt: "Portrait photography",
    title: "Revealing Character",
    subtitle: "Portraits that tell stories",
  },
  {
    id: 3,
    src: "/memo.jpg",
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
    }, 4000);
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
      className="relative h-[100dvh] w-full overflow-hidden -mt-24 flex items-center justify-center"
      ref={sliderRef}
    >
      {/* Slides */}
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          ref={(el) => (slideRefs.current[currentSlide] = el)}
        >
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center h-full w-full"
            quality={100}
          />
          {/* Gradient overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slides[currentSlide].id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.h1
              className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-white/90 mb-10 drop-shadow-md"
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
                className="px-8 py-3 bg-primary/90 hover:bg-primary text-primary-foreground font-semibold rounded-full backdrop-blur-sm transition-colors shadow-lg text-lg"
              >
                Explore Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/40 font-semibold rounded-full backdrop-blur-sm transition-colors shadow-lg text-lg"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-3 w-8 rounded-full transition-all duration-300 border border-white/40",
              currentSlide === index
                ? "bg-white/90 w-8 shadow-lg"
                : "bg-white/40 w-3 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors z-20 shadow-lg border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors z-20 shadow-lg border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" />
      </button>
    </div>
  );
}
