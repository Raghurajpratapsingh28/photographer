import HeroSlideshow from '@/components/hero-slideshow';
import FeaturedWork from '@/components/featured-work';
import Testimonials from '@/components/testimonials';
import AboutPreview from '@/components/about-preview';
import CTASection from '@/components/cta-section';

export const metadata = {
  title: "Surya Photography - #1 Wedding Photographer in Kannauj, Uttar Pradesh | Award-Winning Studio",
  description: "🏆 Award-winning wedding photographer in Kannauj, UP. 500+ happy couples, 4.9★ rating. Specializing in Indian weddings, pre-wedding shoots, portraits & events. Book now for stunning photography that captures your precious moments forever!",
  keywords: [
    "best wedding photographer Kannauj",
    "top photographer Uttar Pradesh",
    "award winning photography studio",
    "Indian wedding photographer UP",
    "pre wedding photography Kannauj",
    "engagement photographer near me",
    "professional portrait photography",
    "Surya Photography Kannauj",
    "wedding photography packages UP",
    "destination wedding photographer India",
    "Hindu wedding photographer",
    "candid wedding photography",
    "affordable wedding photographer",
    "photography studio near me"
  ],
  alternates: {
    canonical: "https://surya.raghuraj.xyz/",
  },
  openGraph: {
    title: "Surya Photography - #1 Wedding Photographer in Kannauj, UP | Award-Winning Studio",
    description: "🏆 Award-winning wedding photographer in Kannauj, UP. 500+ happy couples, 4.9★ rating. Book now for stunning photography!",
    url: "https://surya.raghuraj.xyz/",
    type: "website",
    locale: "en_US",
    siteName: "Surya Photography",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Surya Photography - Award-winning wedding photographer in Kannauj, UP",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Photography - #1 Wedding Photographer in Kannauj, UP",
    description: "🏆 Award-winning wedding photographer. 500+ happy couples. Book your dream wedding photography today!",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <FeaturedWork />
      <Testimonials />
      <AboutPreview />
      <CTASection />
    </>
  );
}