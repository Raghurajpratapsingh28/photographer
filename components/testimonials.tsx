"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ankit & Mira",
    role: "Wedding Clients",
    quote: "Our wedding photos exceeded all expectations. Every emotion, every moment was captured with such artistry. We couldn't be happier with the results!",
    avatar: "https://images.pexels.com/photos/4974402/pexels-photo-4974402.jpeg"
  },
  {
    id: 2,
    name: "Priya Shah",
    role: "Portrait Client",
    quote: "The portrait session was incredible. The photographer made me feel comfortable and the photos truly capture my personality. Highly recommended!",
    avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"
  },
  {
    id: 3,
    name: "Raj Mehta",
    role: "Corporate Client",
    quote: "The team photos for our company are perfect. Professional, creative, and delivered on time. We'll definitely be booking again for future events.",
    avatar: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg"
  },
  {
    id: 4,
    name: "Neha & Rohan",
    role: "Engagement Clients",
    quote: "Our engagement shoot was magical! The photographer knew exactly how to capture our connection in the most beautiful settings. The photos are treasures.",
    avatar: "https://images.pexels.com/photos/5638651/pexels-photo-5638651.jpeg"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Client Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients have to say about their experience and the memories we've helped them capture.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-lg backdrop-blur-sm border border-border relative"
            >
              <QuoteIcon className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              
              <p className="text-card-foreground italic mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                {testimonial.avatar && (
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3 border border-border">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      width={40} 
                      height={40}
                      className="object-cover h-full w-full"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-card-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}