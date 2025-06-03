"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { useState } from "react";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  thumbnail: string;
  author: {
    name: string;
    avatar: string;
  };
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Essential Tips for Wedding Photography",
    slug: "essential-tips-wedding-photography",
    excerpt: "Discover the key techniques and preparation tips for capturing perfect wedding photographs that tell a beautiful story.",
    category: "Wedding Tips",
    date: "March 15, 2025",
    readTime: "5 min read",
    thumbnail: "https://images.pexels.com/photos/1420705/pexels-photo-1420705.jpeg",
    author: {
      name: "John Doe",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    }
  },
  {
    id: 2,
    title: "Mastering Portrait Photography Lighting",
    slug: "mastering-portrait-photography-lighting",
    excerpt: "Learn the fundamentals of lighting techniques that will help you create stunning portrait photographs.",
    category: "Photography Tips",
    date: "March 10, 2025",
    readTime: "7 min read",
    thumbnail: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg",
    author: {
      name: "Jane Smith",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    }
  },
  {
    id: 3,
    title: "The Art of Event Photography",
    slug: "art-of-event-photography",
    excerpt: "Explore the techniques and strategies for capturing memorable moments at various types of events.",
    category: "Event Coverage",
    date: "March 5, 2025",
    readTime: "6 min read",
    thumbnail: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg",
    author: {
      name: "Mike Johnson",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    }
  },
  {
    id: 4,
    title: "Creating the Perfect Pre-Wedding Shoot",
    slug: "perfect-pre-wedding-shoot",
    excerpt: "Tips and ideas for planning and executing a memorable pre-wedding photography session.",
    category: "Wedding Tips",
    date: "March 1, 2025",
    readTime: "8 min read",
    thumbnail: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
    author: {
      name: "Sarah Wilson",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    }
  },
  {
    id: 5,
    title: "Creating the Perfect Pre-Wedding Shoot",
    slug: "perfect-pre-wedding-shoot",
    excerpt: "Tips and ideas for planning and executing a memorable pre-wedding photography session.",
    category: "Wedding Tips",
    date: "March 1, 2025",
    readTime: "8 min read",
    thumbnail: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
    author: {
      name: "Sarah Wilson",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    }
  }
];

const categories = ["All", "Wedding Tips", "Photography Tips", "Event Coverage", "Behind the Scenes"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1813922/pexels-photo-1813922.jpeg"
          alt="Blog hero"
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
              Photography Blog
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Tips, insights, and stories from the world of professional photography
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            {filteredPosts.length > 0 && (
              <Link href={`/blog/${filteredPosts[0].slug}`}>
                <div className="relative h-[60vh] rounded-2xl overflow-hidden">
                  <Image
                    src={filteredPosts[0].thumbnail}
                    alt={filteredPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-sm bg-primary/80 text-primary-foreground px-3 py-1 rounded-full backdrop-blur-sm">
                      {filteredPosts[0].category}
                    </span>
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mt-4">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-white/90 mt-2 max-w-2xl">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center mt-6">
                      <Image
                        src={filteredPosts[0].author.avatar}
                        alt={filteredPosts[0].author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="ml-3">
                        <p className="text-white font-medium">{filteredPosts[0].author.name}</p>
                        <div className="flex items-center text-white/70 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {filteredPosts[0].date} · {filteredPosts[0].readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="font-playfair text-xl font-bold mt-4">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <span className="ml-2 text-sm font-medium">{post.author.name}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest photography tips, behind-the-scenes content, and exclusive offers
              delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}