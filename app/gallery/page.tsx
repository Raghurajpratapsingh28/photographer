export const metadata = {
  title: "Photo Gallery | Best Wedding Photos by Surya Photography Kannauj | 1000+ Stunning Images",
  description: "🎨 Browse 1000+ stunning wedding photos in our gallery! See real Indian weddings, pre-wedding shoots, portraits & events by award-winning photographer Surya in Kannauj, UP. Get inspired for your special day. View our latest work now!",
  keywords: [
    "wedding photo gallery Kannauj",
    "Indian wedding photos UP",
    "pre wedding photo gallery",
    "wedding photography samples",
    "bridal photography gallery",
    "Hindu wedding photo gallery",
    "candid wedding photos",
    "traditional wedding gallery",
    "couple photography samples",
    "engagement photo gallery",
    "destination wedding photos",
    "wedding album samples Kannauj",
    "photography gallery Uttar Pradesh",
    "professional wedding photos"
  ],
  alternates: {
    canonical: "https://suryaphotography.raghuraj.xyz/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Best Wedding Photos by Surya Photography Kannauj",
    description: "🎨 Browse 1000+ stunning wedding photos! See real Indian weddings, pre-wedding shoots & portraits by award-winning photographer.",
    url: "https://suryaphotography.raghuraj.xyz/gallery",
    type: "website",
    locale: "en_US",
    siteName: "Surya Photography",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Photo Gallery - Best Wedding Photos by Surya Photography Kannauj, UP",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Best Wedding Photos by Surya Photography",
    description: "🎨 Browse 1000+ stunning wedding photos! Real Indian weddings, pre-wedding shoots & portraits by award-winning photographer.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
  },
};

import GalleryClient from './GalleryClient';

export default function GalleryPage() {
  return <GalleryClient />;
} 