"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  category: string;
  slug: string;
  thumbnail: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Ankit & Mira's Wedding",
    category: "Wedding",
    slug: "ankit-mira-wedding",
    thumbnail: "https://images.pexels.com/photos/1420705/pexels-photo-1420705.jpeg",
    description: "A beautiful summer wedding at Taj Palace",
  },
  {
    id: 2,
    title: "Neha's Portrait Session",
    category: "Portrait",
    slug: "neha-portrait-session",
    thumbnail: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg",
    description: "Professional portraits in a studio setting",
  },
  {
    id: 3,
    title: "Annual Charity Gala",
    category: "Event",
    slug: "charity-gala-2025",
    thumbnail: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg",
    description: "Documenting a high-profile charity event",
  },
  {
    id: 4,
    title: "Rohan & Priya's Engagement",
    category: "Wedding",
    slug: "rohan-priya-engagement",
    thumbnail: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
    description: "Pre-wedding photoshoot at a scenic beach",
  },
  {
    id: 5,
    title: "Corporate Team Photos",
    category: "Commercial",
    slug: "tech-startup-team",
    thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    description: "Professional team photography for a tech startup",
  },
  {
    id: 6,
    title: "Fashion Editorial",
    category: "Fashion",
    slug: "summer-fashion-editorial",
    thumbnail: "https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg",
    description: "Summer collection for a local boutique",
  },
];

const categories = ["All", "Wedding", "Portrait", "Event", "Commercial", "Fashion"];

export default function FeaturedWork() {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 px-4 bg-background relative z-10">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of premium photography across various genres. 
            Each project tells a unique story, captured with precision and artistry.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/portfolio`}>
                <div className="aspect-[4/5] relative overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-xs uppercase tracking-wider bg-primary/80 text-primary-foreground px-2 py-1 rounded-full mb-2 inline-block backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-playfair font-medium text-white mt-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/80 mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/portfolio" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}