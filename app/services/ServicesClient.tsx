"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Camera, Users, Clock, Image as ImageIcon, Heart, Baby, Sparkles, Palette, Star, Gift } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Wedding Photography",
    description: "Capture your special day with our premium wedding photography services. From intimate ceremonies to grand celebrations, we ensure every precious moment is preserved beautifully.",
    price: "Starting from $2,500",
    icon: <Camera className="h-8 w-8 text-gold" />,
    image: "https://images.pexels.com/photos/1420705/pexels-photo-1420705.jpeg",
    features: [
      "Full-day coverage",
      "Pre-wedding shoot",
      "Digital album",
      "Print package"
    ]
  },
  {
    id: 2,
    title: "Portrait Sessions",
    description: "Professional portrait photography for individuals, families, and corporate clients. Create stunning images that capture your personality and style.",
    price: "Starting from $500",
    icon: <Users className="h-8 w-8 text-gold" />,
    image: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg",
    features: [
      "2-hour session",
      "Multiple outfits",
      "Retouched images",
      "Online gallery"
    ]
  },
  {
    id: 3,
    title: "Event Coverage",
    description: "Comprehensive event photography services for corporate events, parties, and special occasions. We document every important moment of your event.",
    price: "Starting from $1,000",
    icon: <Clock className="h-8 w-8 text-gold" />,
    image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg",
    features: [
      "Full event coverage",
      "Quick turnaround",
      "Professional editing",
      "Digital delivery"
    ]
  },
  {
    id: 4,
    title: "Commercial Photography",
    description: "Professional commercial photography for brands and businesses. Create compelling visual content for your marketing and advertising needs.",
    price: "Custom quotes",
    icon: <ImageIcon className="h-8 w-8 text-gold" />,
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    features: [
      "Product photography",
      "Brand storytelling",
      "Location shoots",
      "Commercial rights"
    ]
  },
  {
    id: 5,
    title: "Maternity Photography",
    description: "Celebrate the beauty of motherhood with our intimate maternity photography sessions. Capture this special time with elegant and artistic portraits.",
    price: "Starting from $800",
    icon: <Heart className="h-8 w-8 text-gold" />,
    image: "/paternity.png",
    features: [
      "2-3 hour session",
      "Multiple outfit changes",
      "Professional hair & makeup",
      "Digital gallery & prints"
    ]
  },
  {
    id: 6,
    title: "Mehandi Ceremony",
    description: "Document the vibrant and colorful mehandi ceremony with our specialized photography services. Capture the intricate designs and joyful celebrations.",
    price: "Starting from $600",
    icon: <Palette className="h-8 w-8 text-gold" />,
    image: "/Mehandi-sarika/1B1A9378.jpg",
    features: [
      "Full ceremony coverage",
      "Detail shots of mehandi",
      "Family portraits",
      "Quick delivery"
    ]
  },
  {
    id: 7,
    title: "Engagement Photography",
    description: "Mark the beginning of your journey together with beautiful engagement photography. Create romantic and memorable images of your love story.",
    price: "Starting from $700",
    icon: <Sparkles className="h-8 w-8 text-gold" />,
    image: "/KartiK-Worship/1B1A8692.jpg",
    features: [
      "2-3 hour session",
      "Multiple locations",
      "Outfit changes",
      "Digital gallery"
    ]
  },
  {
    id: 8,
    title: "Newborn Photography",
    description: "Capture the precious first moments of your baby's life with our gentle newborn photography sessions. Create timeless memories of this special time.",
    price: "Starting from $900",
    icon: <Baby className="h-8 w-8 text-gold" />,
    image: "/baby.png",
    features: [
      "3-4 hour session",
      "Professional props",
      "Family portraits included",
      "Digital gallery & prints"
    ]
  },
  {
    id: 9,
    title: "Pre-Wedding Shoot",
    description: "Create stunning pre-wedding memories with our creative photography sessions. Perfect for save-the-dates, wedding websites, and social media.",
    price: "Starting from $1,200",
    icon: <Star className="h-8 w-8 text-gold" />,
    image: "/prewed.png",
    features: [
      "Full day shoot",
      "Multiple locations",
      "Outfit styling",
      "Professional editing"
    ]
  },
  {
    id: 10,
    title: "Birthday & Celebrations",
    description: "Make every birthday and celebration special with our event photography. From intimate family gatherings to grand birthday parties.",
    price: "Starting from $400",
    icon: <Gift className="h-8 w-8 text-gold" />,
    image: "/bd.png",
    features: [
      "2-3 hour coverage",
      "Candid moments",
      "Group portraits",
      "Quick turnaround"
    ]
  }
];

const workflow = [
  {
    step: 1,
    title: "Consultation",
    description: "Initial meeting to discuss your vision and requirements"
  },
  {
    step: 2,
    title: "Planning",
    description: "Detailed planning of the shoot including location and timeline"
  },
  {
    step: 3,
    title: "Shooting",
    description: "Professional photography session with attention to detail"
  },
  {
    step: 4,
    title: "Editing",
    description: "Careful selection and professional editing of your photos"
  },
  {
    step: 5,
    title: "Delivery",
    description: "Final delivery of your beautifully edited photos"
  }
];

export default function ServicesClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/Mennakshi-JayRaj/MJ2.jpg"
          alt="Services hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
              Our Photography Services
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Professional photography services tailored to your unique needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Premium Photography Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully crafted photography packages designed to meet your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="font-playfair text-2xl font-bold ml-3">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-lg font-medium text-gold">{service.price}</span> */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined workflow ensuring the best possible results for your photography needs
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

            {/* Workflow Steps */}
            <div className="space-y-12 relative">
              {workflow.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  <div className="flex-1 text-center md:text-right">
                    <div className={`${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <span className="text-4xl font-bold text-gold">0{step.step}</span>
                      <h3 className="font-playfair text-xl font-bold mt-2">{step.title}</h3>
                      <p className="text-muted-foreground mt-2">{step.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12">
                    <div className="w-12 h-12 rounded-full bg-card border-4 border-gold flex items-center justify-center">
                      <span className="text-xl font-bold">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-primary/10" />
            <div className="relative">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Something Beautiful?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your photography needs and create a custom package that's perfect for you
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 