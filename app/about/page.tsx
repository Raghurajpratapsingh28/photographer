"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Camera, Award, Users, MapPin } from "lucide-react";

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

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden" ref={containerRef}>
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3584924/pexels-photo-3584924.jpeg"
            alt="Photographer at work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </motion.div>
        
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