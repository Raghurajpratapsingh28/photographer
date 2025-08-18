export const metadata = {
  title: "Contact & Book Now | Wedding Photographer Kannauj | Free Consultation - Surya Photography",
  description: "📞 Book your wedding photography session with Surya Photography in Kannauj, UP. Free consultation available! Call +91-9999999999 or fill our contact form. Located at Bank of India Road, Chhibramau. Quick response guaranteed!",
  keywords: [
    "contact wedding photographer Kannauj",
    "book photography session UP",
    "wedding photographer phone number",
    "photography consultation Kannauj",
    "Surya Photography contact details",
    "wedding photography booking",
    "photographer near me Kannauj",
    "photography studio contact",
    "free photography consultation",
    "wedding photographer inquiry",
    "photography booking form",
    "professional photographer contact UP",
    "wedding photography quote",
    "photography services inquiry"
  ],
  alternates: {
    canonical: "https://suryaphotography.com/contact",
  },
  openGraph: {
    title: "Contact & Book Now | Wedding Photographer Kannauj | Free Consultation",
    description: "📞 Book your wedding photography session with Surya Photography. Free consultation available! Quick response guaranteed.",
    url: "https://suryaphotography.com/contact",
    type: "website",
    locale: "en_US",
    siteName: "Surya Photography",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Contact Surya Photography - Wedding Photographer in Kannauj, UP",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Book Now | Surya Photography",
    description: "📞 Book your wedding photography session. Free consultation available! Quick response guaranteed.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ContactClient from './ContactClient';

export default function ContactPage() {
  return <ContactClient />;
}