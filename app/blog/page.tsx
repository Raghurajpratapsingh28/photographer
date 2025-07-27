export const metadata = {
  title: "Blog | Surya Photography",
  description: "Read photography tips, client stories, and updates from Surya Photography's blog.",
  openGraph: {
    title: "Blog | Surya Photography",
    description: "Read photography tips, client stories, and updates from Surya Photography's blog.",
    url: "https://surya.raghuraj.xyz/blog",
    images: ["/og-image.jpg"]
  }
};

import BlogClient from './BlogClient';

export default function BlogPage() {
  return <BlogClient />;
}