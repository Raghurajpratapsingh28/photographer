"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto">
        <motion.div 
          className="rounded-2xl overflow-hidden relative border border-border p-12 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-card/30 backdrop-blur-sm" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2 
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Create Timeless Memories?
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Book your photography session today and let us capture your special moments with our premium photography services.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 w-full sm:w-auto"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Book Now
              </Link>
              
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80 w-full sm:w-auto"
              >
                View Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}