import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'Surya Photography',
    template: '%s | Surya Photography'
  },
  description: 'Professional photography services for weddings, portraits, events, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Surya Photography',
    title: 'Surya Photography',
    description: 'Professional photography services for weddings, portraits, events, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Surya Photography'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surya Photography',
    description: 'Professional photography services for weddings, portraits, events, and more.',
    images: ['/og-image.jpg']
  }
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
              "@type": "LocalBusiness",
              "name": "Surya Photography",
              "image": "https://yourdomain.com/og-image.jpg",
              "@id": "https://yourdomain.com/",
              "url": "https://yourdomain.com/",
              "telephone": "+91-XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bank of India Road, Chhibramau 209721 Kannauj",
                "addressLocality": "Kannauj",
                "addressRegion": "UP",
                "postalCode": "209721",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 27.1500239,
                "longitude": 79.4997724
              },
              "sameAs": [
                "https://instagram.com/your-handle",
                "https://facebook.com/your-page",
                "https://twitter.com/your-handle"
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