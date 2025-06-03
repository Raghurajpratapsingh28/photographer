"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Calendar, Clock, Camera, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  eventType: z.enum(["wedding", "portrait", "event", "commercial"]),
  date: z.string(),
  time: z.string(),
  location: z.string().min(5, "Please enter a valid location"),
  package: z.enum(["basic", "standard", "premium"]),
  message: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

const packages = [
  {
    id: "basic",
    name: "Essential Package",
    price: "$500",
    description: "Perfect for simple portrait sessions and small events",
    features: [
      "2-hour photo session",
      "50 edited digital photos",
      "Online gallery",
      "Print release"
    ]
  },
  {
    id: "standard",
    name: "Premium Package",
    price: "$1,000",
    description: "Ideal for engagement shoots and medium-sized events",
    features: [
      "4-hour photo session",
      "100 edited digital photos",
      "Online gallery",
      "Print release",
      "10 professional prints"
    ]
  },
  {
    id: "premium",
    name: "Luxury Package",
    price: "$2,500",
    description: "Complete coverage for weddings and special events",
    features: [
      "Full-day coverage",
      "300+ edited digital photos",
      "Online gallery",
      "Print release",
      "Premium photo album",
      "Engagement session"
    ]
  }
];

export default function BookPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle booking submission
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3584924/pexels-photo-3584924.jpeg"
          alt="Booking hero"
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
              Book Your Session
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Choose your perfect package and schedule your photography session
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
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
              Choose Your Package
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select from our carefully crafted photography packages designed to meet your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border shadow-lg"
              >
                <h3 className="font-playfair text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gold text-3xl font-bold mb-4">{pkg.price}</p>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value={pkg.id}
                    {...register("package")}
                    className="form-radio text-primary"
                  />
                  <span>Select Package</span>
                </label>
              </motion.div>
            ))}
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="font-playfair text-2xl font-bold mb-8 text-center">
              Complete Your Booking
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  {...register("eventType")}
                  className="w-full px-4 py-3 rounded-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="event">Event Coverage</option>
                  <option value="commercial">Commercial Photography</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    {...register("date")}
                    className="w-full px-4 py-3 rounded-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    {...register("time")}
                    className="w-full px-4 py-3 rounded-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  {...register("location")}
                  className="w-full px-4 py-3 rounded-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Event or shoot location"
                />
                {errors.location && (
                  <p className="text-destructive text-sm mt-1">{errors.location.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Any special requests or details about your event..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Complete Booking
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-playfair text-3xl font-bold mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8 text-left">
              <div>
                <h3 className="font-medium mb-2">What is your booking process?</h3>
                <p className="text-muted-foreground">
                  After submitting your booking request, we'll review the details and contact you
                  within 24 hours to confirm availability and discuss any specific requirements.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">What is your cancellation policy?</h3>
                <p className="text-muted-foreground">
                  We understand that plans can change. Cancellations made 30 days or more before
                  the scheduled session are eligible for a full refund. Please contact us for more details.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">How long until I receive my photos?</h3>
                <p className="text-muted-foreground">
                  Delivery times vary by package and event type. Generally, you can expect to
                  receive your edited photos within 2-4 weeks after your session.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}