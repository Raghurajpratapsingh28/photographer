"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, Tag } from "lucide-react";

const blogPost = {
  title: "Essential Tips for Wedding Photography",
  date: "March 15, 2025",
  readTime: "5 min read",
  author: {
    name: "John Doe",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bio: "Professional photographer with over 10 years of experience in wedding and portrait photography."
  },
  category: "Wedding Tips",
  coverImage: "https://images.pexels.com/photos/1420705/pexels-photo-1420705.jpeg",
  content: `
    <h2>Introduction</h2>
    <p>Wedding photography is an art that requires both technical skill and an eye for capturing emotional moments. In this comprehensive guide, we'll explore essential tips that will help you create stunning wedding photographs that tell a beautiful story.</p>

    <h2>1. Preparation is Key</h2>
    <p>Before the big day, visit the venue to scout locations and lighting conditions. Create a shot list with the couple and understand their specific preferences. Having a clear plan will help you stay organized and ensure you don't miss any important moments.</p>

    <h2>2. Capture the Details</h2>
    <p>Wedding details are crucial elements that help tell the complete story. Focus on photographing:</p>
    <ul>
      <li>The wedding rings</li>
      <li>Bridal accessories</li>
      <li>Venue decorations</li>
      <li>Table settings</li>
      <li>Floral arrangements</li>
    </ul>

    <h2>3. Master Natural Light</h2>
    <p>Understanding how to work with natural light is essential for wedding photography. Learn to position your subjects for the best lighting and know when to use fill flash or diffusers to enhance natural light.</p>

    <h2>4. Candid Moments Matter</h2>
    <p>While posed shots are important, some of the most memorable photos are candid moments. Keep your camera ready to capture genuine emotions, laughter, and tears throughout the day.</p>

    <h2>5. Equipment Checklist</h2>
    <p>Essential equipment for wedding photography includes:</p>
    <ul>
      <li>Multiple camera bodies</li>
      <li>Various lenses (wide-angle, portrait, macro)</li>
      <li>External flashes</li>
      <li>Backup batteries and memory cards</li>
      <li>Light modifiers</li>
    </ul>
  `,
  relatedPosts: [
    {
      title: "Mastering Portrait Photography Lighting",
      slug: "mastering-portrait-photography-lighting",
      thumbnail: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg"
    },
    {
      title: "The Art of Event Photography",
      slug: "art-of-event-photography",
      thumbnail: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg"
    },
    {
      title: "Creating the Perfect Pre-Wedding Shoot",
      slug: "perfect-pre-wedding-shoot",
      thumbnail: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg"
    }
  ]
};

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={blogPost.coverImage}
          alt={blogPost.title}
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
            <span className="inline-block bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm backdrop-blur-sm mb-4">
              {blogPost.category}
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{blogPost.readTime}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{blogPost.author.name}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </article>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <Image
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-playfair text-xl font-bold mb-2">
                      {blogPost.author.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {blogPost.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-8">
                {/* Related Posts */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-playfair text-xl font-bold mb-4">
                    Related Posts
                  </h3>
                  <div className="space-y-4">
                    {blogPost.relatedPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block"
                      >
                        <div className="relative h-48 rounded-lg overflow-hidden mb-2">
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-playfair text-xl font-bold mb-4">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Wedding Tips", "Photography Tips", "Event Coverage", "Behind the Scenes"].map((category) => (
                      <Link
                        key={category}
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-secondary/80 transition-colors"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest photography tips and insights delivered directly to your inbox
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