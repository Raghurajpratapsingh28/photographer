"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Calendar, MapPin, Camera, Clock } from "lucide-react";

// Portfolio data structure
type EventDetails = {
  title: string;
  date: string;
  location: string;
  photographer: string;
  duration: string;
  description: string;
  photos: string[];
};

type CategoryContent = {
  title: string;
  description: string;
  photos: string[];
};

type PortfolioEvents = {
  wedding: {
    title: string;
    description: string;
    events: Record<string, EventDetails>;
  };
  portraits: CategoryContent;
  events: CategoryContent;
  fashion: CategoryContent;
  commercial: CategoryContent;
};

const portfolioEvents: PortfolioEvents = {
  "wedding": {
    title: "Wedding Photography",
    description: "Capturing love stories and precious moments",
    events: {
      "anira-and-raj": {
        title: "Anira & Raj's Wedding",
        date: "March 15, 2025",
        location: "The Grand Pavilion, Mumbai",
        photographer: "Sarah Wilson",
        duration: "Full Day Coverage",
        description: "A beautiful fusion wedding celebrating love, tradition, and family. Every moment was filled with joy, color, and emotion.",
        photos: [
          "/portfolio/wedding/anira-and-raj/ss.png",
          "/portfolio/wedding/anira-and-raj/sss.png",
          "/portfolio/wedding/anira-and-raj/ssss.png",
          "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg",
          "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg",
          "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
          "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg",
          "https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg",
          "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg",
          "https://images.pexels.com/photos/1813922/pexels-photo-1813922.jpeg"
        ]
      },
      "rohan-priya": {
        title: "Rohan & Priya's Engagement",
        date: "January 10, 2025",
        location: "Goa Beach Resort",
        photographer: "Mike Johnson",
        duration: "Half Day Coverage",
        description: "A romantic beachside engagement shoot capturing the couple's love story against the backdrop of a stunning sunset.",
        photos: [
          "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
          "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg",
          "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg",
          "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
          "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg"
        ]
      }
    }
  },
  "portraits": {
    title: "Portrait Photography",
    description: "Professional portrait sessions capturing your unique personality",
    photos: [
      "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg",
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
      "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg",
      "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg"
    ]
  },
  "events": {
    title: "Event Photography",
    description: "Capturing the essence of special occasions",
    photos: [
      "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg",
      "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg",
      "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg",
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
    ]
  },
  "fashion": {
    title: "Fashion Photography",
    description: "Showcasing style and elegance",
    photos: [
      "https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg",
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
      "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg",
      "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg"
    ]
  },
  "commercial": {
    title: "Commercial Photography",
    description: "Professional business and corporate photography",
    photos: [
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
      "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg",
      "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg"
    ]
  }
};

// Generate static params for all portfolio items
export async function generateStaticParams() {
  const paths: { slug: string }[] = [];
  
  // Add main categories
  Object.keys(portfolioEvents).forEach(category => {
    paths.push({ slug: category });
    
    // Add event subcategories for weddings
    if (category === 'wedding' && portfolioEvents[category].events) {
      Object.keys(portfolioEvents[category].events).forEach(event => {
        paths.push({ slug: `wedding/${event}` });
      });
    }
  });
  
  return paths;
}

export default function PortfolioPage({ params }: { params: { slug: string[] } }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Handle nested routes
  const slugPath = Array.isArray(params.slug) ? params.slug : [params.slug];
  const [category, event] = slugPath;

  // Get the appropriate content based on the route
  let content: EventDetails | CategoryContent;
  if (category === 'wedding' && event) {
    content = portfolioEvents.wedding.events[event];
  } else {
    content = portfolioEvents[category as keyof PortfolioEvents] as CategoryContent;
  }

  // Type guard to check if content is EventDetails
  const isEventDetails = (content: EventDetails | CategoryContent): content is EventDetails => {
    return 'date' in content && 'location' in content && 'photographer' in content && 'duration' in content;
  };

  // Handle case where slug doesn't exist
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Portfolio Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested portfolio item does not exist.</p>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            View All Portfolios
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={content.photos[0]}
          alt={content.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
              {content.title}
            </h1>
            {isEventDetails(content) && (
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{content.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{content.location}</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Details Sidebar */}
            {isEventDetails(content) && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="bg-card rounded-lg p-6 shadow-lg sticky top-24">
                  <h2 className="font-playfair text-2xl font-bold mb-6">Event Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-gold" />
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-medium">{content.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-gold" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{content.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Camera className="w-5 h-5 mr-3 text-gold" />
                      <div>
                        <p className="text-sm text-muted-foreground">Photographer</p>
                        <p className="font-medium">{content.photographer}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-gold" />
                      <div>
                        <p className="text-sm text-muted-foreground">Coverage</p>
                        <p className="font-medium">{content.duration}</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-8 w-full inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    Book Similar Session
                  </Link>
                </div>
              </motion.div>
            )}

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={isEventDetails(content) ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <p className="text-muted-foreground mb-8 text-lg">
                {content.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.photos.map((photo: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        index={lightboxIndex}
        slides={content.photos.map((src: string) => ({ src }))}
      />
    </div>
  );
}