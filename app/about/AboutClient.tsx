"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Camera, Award, Users, MapPin, X, ZoomIn } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const milestones = [
  {
    year: "2015",
    title: "Started Photography",
    description: "Began the journey into professional photography"
  },
  {
    year: "2018",
    title: "International Recognition",
    description: "Won Best Wedding Photography at Asian Photography Awards"
  },
  {
    year: "2020",
    title: "Studio Launch",
    description: "Opened our flagship luxury photography studio"
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Extended services to destination weddings worldwide"
  }
];

const funFacts = [
  {
    icon: <Camera className="h-8 w-8 text-gold" />,
    title: "10,000+",
    description: "Photos Delivered"
  },
  {
    icon: <Award className="h-8 w-8 text-gold" />,
    title: "15+",
    description: "Industry Awards"
  },
  {
    icon: <Users className="h-8 w-8 text-gold" />,
    title: "500+",
    description: "Happy Clients"
  },
  {
    icon: <MapPin className="h-8 w-8 text-gold" />,
    title: "25+",
    description: "Countries Visited"
  }
];

const certificates = [
  {
    src: "/certificates/123.jpg",
    alt: "Professional Photography Certification",
    title: "Professional Photography Certification",
    description: "Advanced certification in professional photography techniques and artistry"
  },
  {
    src: "/certificates/124.jpg",
    alt: "Wedding Photography Excellence",
    title: "Wedding Photography Excellence",
    description: "Specialized certification in wedding and event photography"
  },
  {
    src: "/certificates/125.jpg",
    alt: "Portrait Photography Mastery",
    title: "Portrait Photography Mastery",
    description: "Master certification in portrait and lifestyle photography"
  },
  {
    src: "/certificates/126.jpg",
    alt: "International Photography Award",
    title: "International Photography Award",
    description: "Recognition for outstanding contribution to photography industry"
  }
];

export default function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden" ref={containerRef}>
        {/* Removed hero image */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
              The Artist Behind the Lens
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Capturing life's precious moments with passion, creativity, and technical excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                A Journey of Passion
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over a decade of experience in professional photography, my journey began with 
                  a simple love for capturing moments. Today, that passion has evolved into a 
                  commitment to excellence in visual storytelling.
                </p>
                <p>
                  Specializing in wedding photography, portraits, and luxury events, I bring a unique 
                  blend of technical expertise and artistic vision to every shoot. My approach combines 
                  classic techniques with contemporary styles, ensuring timeless images that tell your story.
                </p>
                <p>
                  Having worked across continents and cultures, I've developed a deep appreciation for 
                  the diversity of human emotions and connections. Each click of the shutter is an 
                  opportunity to freeze a moment of joy, love, or celebration.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.pexels.com/photos/3584923/pexels-photo-3584923.jpeg"
                alt="Professional portrait"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Professional Journey
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center justify-between mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-5/12" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold" />
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <span className="text-gold font-bold">{milestone.year}</span>
                  <h3 className="font-playfair text-xl font-bold mt-2">{milestone.title}</h3>
                  <p className="text-muted-foreground mt-1">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Professional Certifications
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              showThumbs={true}
              className="carousel-root"
              renderThumbs={() =>
                certificates.map((certificate, index) => (
                  <div key={index} className="cursor-pointer">
                    <Image
                      src={certificate.src}
                      alt={certificate.alt}
                      width={120}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </div>
                ))
              }
            >
              {certificates.map((certificate, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div 
                    className="relative rounded-2xl overflow-hidden"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={certificate.src}
                      alt={certificate.alt}
                      width={600}
                      height={400}
                      className="rounded-2xl transition-transform duration-300 group-hover:scale-105 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                    <p className="text-muted-foreground">{certificate.description}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <Image
                  src={certificates[currentImage].src}
                  alt={certificates[currentImage].alt}
                  width={900}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {certificates[currentImage].title}
                </h3>
                <p className="text-white/70 text-lg">
                  {certificates[currentImage].description}
                </p>
              </div>
              {/* Navigation arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <button
                  onClick={() => setCurrentImage((prev) => (prev - 1 + certificates.length) % certificates.length)}
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <button
                  onClick={() => setCurrentImage((prev) => (prev + 1) % certificates.length)}
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fun Facts Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12"
          >
            By the Numbers
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-neumorphic text-center"
              >
                <div className="flex justify-center mb-4">{fact.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{fact.title}</h3>
                <p className="text-muted-foreground">{fact.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's work together to capture your special moments with artistry and emotion.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 