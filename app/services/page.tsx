import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Photography Services & Packages | Wedding, Portrait, Event Photography in Kannauj, UP",
  description: "📷 Professional photography services in Kannauj, UP. Wedding photography packages starting ₹25,000. Portrait sessions, event coverage, commercial photography. Free consultation. Book your photography session today!",
  keywords: [
    "wedding photography packages Kannauj",
    "photography services UP",
    "portrait photography sessions",
    "event photography Kannauj",
    "commercial photography services",
    "pre wedding photography packages",
    "photography prices Uttar Pradesh",
    "professional photographer rates",
    "wedding photography cost Kannauj",
    "photography studio services",
    "family portrait packages",
    "engagement photography prices",
    "photography consultation Kannauj",
    "affordable photography services UP"
  ],
  alternates: {
    canonical: "https://surya.raghuraj.xyz/services",
  },
  openGraph: {
    title: "Photography Services & Packages | Surya Photography Kannauj",
    description: "📷 Professional photography services in Kannauj, UP. Wedding packages from ₹25,000. Free consultation available!",
    url: "https://surya.raghuraj.xyz/services",
    type: "website",
    locale: "en_US",
    siteName: "Surya Photography",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Photography Services & Packages - Surya Photography Kannauj, UP",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Services & Packages | Surya Photography",
    description: "📷 Professional photography services in Kannauj, UP. Wedding, portrait, and event photography. Free consultation!",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ServicesClient from "./ServicesClient";

export default function Page() {
  return <ServicesClient />;
}