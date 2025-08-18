export const metadata = {
  title: "About Surya - Professional Wedding Photographer | 10+ Years Experience in Kannauj, UP",
  description: "Meet Surya, award-winning wedding photographer with 10+ years experience in Kannauj, UP. Discover our journey, passion for photography, and commitment to capturing your most precious moments with artistic excellence. 500+ satisfied clients trust us.",
  keywords: [
    "Surya photographer biography",
    "professional photographer Kannauj",
    "wedding photographer story",
    "experienced photographer UP",
    "photography studio owner Kannauj",
    "award winning photographer background",
    "certified professional photographer",
    "photography artist Uttar Pradesh",
    "creative wedding photographer",
    "photography expert Kannauj"
  ],
  alternates: {
    canonical: "https://suryaphotography.com/about",
  },
  openGraph: {
    title: "About Surya - Professional Wedding Photographer | 10+ Years Experience",
    description: "Meet Surya, award-winning wedding photographer with 10+ years experience in Kannauj, UP. 500+ satisfied clients trust our artistic excellence.",
    url: "https://suryaphotography.com/about",
    type: "website",
    locale: "en_US",
    siteName: "Surya Photography",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "About Surya - Professional Wedding Photographer in Kannauj, UP",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Surya - Professional Wedding Photographer",
    description: "Award-winning photographer with 10+ years experience. Meet the artist behind stunning wedding photography in Kannauj, UP.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
  },
};

import AboutClient from './AboutClient';

export default function AboutPage() {
  return <AboutClient />;
}