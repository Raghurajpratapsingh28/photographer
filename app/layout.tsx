import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://surya.raghuraj.xyz'),
  title: {
    default: 'Surya Photography - Professional Wedding & Event Photographer in Kannauj, UP',
    template: '%s | Surya Photography - Professional Wedding & Event Photographer'
  },
  description: 'Award-winning wedding, portrait, and event photographer in Kannauj, Uttar Pradesh. Capturing precious moments with artistic excellence. Book your photography session today!',
  keywords: [
    'wedding photographer Kannauj',
    'event photographer UP',
    'portrait photography Kannauj',
    'professional photography services',
    'wedding photography Uttar Pradesh',
    'Surya Photography',
    'best photographer Kannauj',
    'pre-wedding photography',
    'engagement photography',
    'family portraits',
    'commercial photography',
    'photography studio Kannauj'
  ],
  authors: [{ name: 'Surya Photography', url: 'https://surya.raghuraj.xyz' }],
  creator: 'Surya Photography',
  publisher: 'Surya Photography',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'INhRV3BDMXzz3R-PhKrNlKlDK0-DJZ027mvJKTmKHLc',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Photography',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://surya.raghuraj.xyz',
    siteName: 'Surya Photography - Professional Wedding & Event Photographer',
    title: 'Surya Photography - Professional Wedding & Event Photographer in Kannauj, UP',
    description: 'Award-winning wedding, portrait, and event photographer in Kannauj, Uttar Pradesh. Capturing precious moments with artistic excellence. Book your photography session today!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Surya Photography - Professional Wedding Photographer in Kannauj, UP',
        type: 'image/jpeg',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@suryaphotography',
    creator: '@suryaphotography',
    title: 'Surya Photography - Professional Wedding & Event Photographer in Kannauj, UP',
    description: 'Award-winning wedding, portrait, and event photographer in Kannauj, Uttar Pradesh. Capturing precious moments with artistic excellence.',
    images: [{
      url: '/og-image.jpg',
      alt: 'Surya Photography - Professional Wedding Photographer in Kannauj, UP',
    }]
  },
  alternates: {
    canonical: 'https://surya.raghuraj.xyz',
    languages: {
      'en-US': 'https://surya.raghuraj.xyz',
      'hi-IN': 'https://surya.raghuraj.xyz/hi',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
              "name": "Surya Photography",
              "alternateName": "Surya Photography Studio",
              "description": "Award-winning professional wedding, portrait, and event photographer in Kannauj, Uttar Pradesh. Specializing in capturing precious moments with artistic excellence.",
              "image": [
                "https://surya.raghuraj.xyz/og-image.jpg",
                "https://surya.raghuraj.xyz/logo.jpg",
                "https://surya.raghuraj.xyz/studio.jpg"
              ],
              "logo": "https://surya.raghuraj.xyz/logo.jpg",
              "@id": "https://surya.raghuraj.xyz/#organization",
              "url": "https://surya.raghuraj.xyz/",
              "telephone": "+91-9999999999",
              "email": "info@surya.raghuraj.xyz",
              "foundingDate": "2015",
              "founder": {
                "@type": "Person",
                "name": "Surya",
                "jobTitle": "Professional Photographer"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bank of India Road, Chhibramau",
                "addressLocality": "Kannauj",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "209721",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 27.1500239,
                "longitude": 79.4997724
              },
              "areaServed": {
                "@type": "State",
                "name": "Uttar Pradesh"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 27.1500239,
                  "longitude": 79.4997724
                },
                "geoRadius": "100000"
              },
              "priceRange": "$$-$$$",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI",
              "openingHours": [
                "Mo-Sa 09:00-18:00",
                "Su 10:00-16:00"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Photography Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wedding Photography",
                      "description": "Complete wedding photography coverage including ceremony, reception, and portraits"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Portrait Photography",
                      "description": "Professional portrait sessions for individuals, families, and corporate clients"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Event Photography",
                      "description": "Comprehensive event coverage for corporate events, parties, and special occasions"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Priya Sharma"
                  },
                  "reviewBody": "Surya Photography captured our wedding beautifully. Professional service and stunning photos!"
                }
              ],
              "sameAs": [
                "https://instagram.com/suryaphotography_official",
                "https://facebook.com/suryaphotographykannauj",
                "https://twitter.com/suryaphoto_in",
                "https://www.youtube.com/c/suryaphotography",
                "https://www.linkedin.com/company/surya-photography"
              ],
              "knowsAbout": [
                "Wedding Photography",
                "Portrait Photography",
                "Event Photography",
                "Pre-wedding Photography",
                "Family Photography",
                "Commercial Photography",
                "Fashion Photography"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Surya Photography",
              "url": "https://surya.raghuraj.xyz",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://surya.raghuraj.xyz/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://instagram.com/suryaphotography_official",
                "https://facebook.com/suryaphotographykannauj"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}