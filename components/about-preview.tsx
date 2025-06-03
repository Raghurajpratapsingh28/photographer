"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section className="py-20 px-4 relative overflow-hidden" ref={containerRef}>
      {/* Background image with parallax */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div style={{ y, opacity }} className="h-full w-full relative">
          <Image
            src="https://images.pexels.com/photos/3800471/pexels-photo-3800471.jpeg"
            alt="Photographer at work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="md:col-span-7 lg:col-span-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
              The Artist Behind the Lens
            </h2>
            <p className="text-white/90 mb-6 max-w-xl">
              With over a decade of experience capturing life's most precious moments, 
              our lead photographer brings a unique artistic vision to every shoot. 
              Specializing in wedding, portrait, and event photography, we blend technical 
              expertise with creative storytelling to deliver truly timeless images.
            </p>
            <p className="text-white/90 mb-8 max-w-xl">
              Our approach is both professional and personal — creating a comfortable 
              environment that allows authentic moments to shine through in every photograph.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 text-sm font-medium text-white transition-colors border border-white/30"
            >
              Discover My Story
            </Link>
          </motion.div>
          
          <motion.div 
            className="md:col-span-5 lg:col-span-5 lg:col-start-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden border border-white/20 shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg"
                alt="Professional photographer portrait"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}