export const metadata = {
  title: "Wedding Photography Portfolio | Stunning Wedding Photos by Surya Photography Kannauj",
  description: "✨ View our award-winning wedding photography portfolio featuring 500+ stunning Indian weddings, pre-wedding shoots, and portraits. See why couples in Kannauj, UP choose Surya Photography for their special day. Browse real wedding galleries now!",
  keywords: [
    "wedding photography portfolio Kannauj",
    "Indian wedding photos gallery",
    "pre wedding photography samples",
    "wedding photographer work UP",
    "bridal photography portfolio",
    "Hindu wedding photography gallery",
    "candid wedding photos Kannauj",
    "engagement photography portfolio",
    "destination wedding photos",
    "traditional wedding photography",
    "couple photography gallery",
    "wedding photo album samples",
    "best wedding photos Uttar Pradesh",
    "photography portfolio India"
  ],
  alternates: {
    canonical: "https://suryaphotography.com/portfolio",
  },
  openGraph: {
    title: "Wedding Photography Portfolio | Stunning Wedding Photos by Surya Photography",
    description: "✨ Award-winning wedding photography portfolio featuring 500+ stunning Indian weddings. See why couples choose us in Kannauj, UP!",
    url: "https://suryaphotography.com/portfolio",
    type: "website",
    locale: "en_US",
    siteName: "Surya Photography",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Wedding Photography Portfolio - Surya Photography Kannauj, UP",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Photography Portfolio | Surya Photography",
    description: "✨ Browse our stunning wedding photography portfolio. 500+ beautiful Indian weddings captured with artistic excellence.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
  },
};

import PortfolioClient from './PortfolioClient';

export default function PortfolioPage() {
  return <PortfolioClient />;
}