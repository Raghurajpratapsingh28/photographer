export const metadata = {
  title: "Gallery | Surya Photography",
  description: "Browse the gallery of stunning photographs by Surya Photography, including weddings, portraits, and events.",
  openGraph: {
    title: "Gallery | Surya Photography",
    description: "Browse the gallery of stunning photographs by Surya Photography, including weddings, portraits, and events.",
    url: "https://surya.raghuraj.xyz/gallery",
    images: ["/og-image.jpg"]
  }
};

import GalleryClient from './GalleryClient';

export default function GalleryPage() {
  return <GalleryClient />;
} 