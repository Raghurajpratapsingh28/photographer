import HeroSlideshow from '@/components/hero-slideshow';
import FeaturedWork from '@/components/featured-work';
import Testimonials from '@/components/testimonials';
import AboutPreview from '@/components/about-preview';
import CTASection from '@/components/cta-section';

export const metadata = {
  title: "Surya Photography | Professional Photographer in Kannauj, UP",
  description: "Surya Photography offers professional wedding, event, and portrait photography services in Kannauj and beyond. View our portfolio and book your session today!",
  openGraph: {
    title: "Surya Photography | Professional Photographer in Kannauj, UP",
    description: "Surya Photography offers professional wedding, event, and portrait photography services in Kannauj and beyond. View our portfolio and book your session today!",
    url: "https://surya.raghuraj.xyz/",
    images: ["/og-image.jpg"]
  }
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