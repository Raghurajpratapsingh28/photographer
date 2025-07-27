export const metadata = {
  title: "Contact | Surya Photography",
  description: "Contact Surya Photography for bookings, inquiries, and more information.",
  openGraph: {
    title: "Contact | Surya Photography",
    description: "Contact Surya Photography for bookings, inquiries, and more information.",
    url: "https://surya.raghuraj.xyz/contact",
    images: ["/og-image.jpg"]
  }
};

import ContactClient from './ContactClient';

export default function ContactPage() {
  return <ContactClient />;
}