export const metadata = {
  title: "About | Surya Photography",
  description: "Learn more about Surya Photography, our story, and our passion for capturing moments.",
  openGraph: {
    title: "About | Surya Photography",
    description: "Learn more about Surya Photography, our story, and our passion for capturing moments.",
    url: "https://surya.raghuraj.xyz/about",
    images: ["/og-image.jpg"]
  }
};

import AboutClient from './AboutClient';

export default function AboutPage() {
  return <AboutClient />;
}