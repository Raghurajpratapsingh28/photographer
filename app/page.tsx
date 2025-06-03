import HeroSlideshow from '@/components/hero-slideshow';
import FeaturedWork from '@/components/featured-work';
import Testimonials from '@/components/testimonials';
import AboutPreview from '@/components/about-preview';
import CTASection from '@/components/cta-section';

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