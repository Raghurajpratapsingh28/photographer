export const metadata = {
  title: "Portfolio | Surya Photography",
  description: "Explore our portfolio of wedding, event, and portrait photography by Surya Photography.",
  openGraph: {
    title: "Portfolio | Surya Photography",
    description: "Explore our portfolio of wedding, event, and portrait photography by Surya Photography.",
    url: "https://surya.raghuraj.xyz/portfolio",
    images: ["/og-image.jpg"]
  }
};

import PortfolioClient from './PortfolioClient';

export default function PortfolioPage() {
  return <PortfolioClient />;
}