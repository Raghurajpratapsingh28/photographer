import './globals.css';
import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair', 
});

export const metadata: Metadata = {
  title: 'Luxe Photography | Capturing Timeless Moments',
  description: 'Premium photography services specializing in weddings, portraits, and events. Crafting timeless memories with a luxury touch.',
  keywords: 'photographer, wedding photography, portrait photography, luxury photography, professional photographer',
  openGraph: {
    title: 'Luxe Photography | Capturing Timeless Moments',
    description: 'Premium photography services specializing in weddings, portraits, and events. Crafting timeless memories with a luxury touch.',
    url: 'https://luxephotography.com',
    siteName: 'Luxe Photography',
    images: [
      {
        url: 'https://images.pexels.com/photos/1813922/pexels-photo-1813922.jpeg',
        width: 1200,
        height: 630,
        alt: 'Luxe Photography',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${playfair.variable} font-sans bg-background text-foreground min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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