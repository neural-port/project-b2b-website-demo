import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import SmoothScroll from "@/components/smooth-scroll";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D6336C",
};

export const metadata: Metadata = {
  title: "HerChoice — A Force for Health. A Force for Good.",
  description:
    "Leading sanitary hygiene manufacturer pioneering health and hygiene solutions for millions across India. ISO-certified, dermatologically tested, proudly made in Goa.",
  keywords: [
    "sanitary pads",
    "hygiene products",
    "women's health",
    "HerChoice",
    "Goa manufacturing",
    "ISO certified hygiene",
    "Cozy-Lite",
    "Live-Care pads",
    "India sanitary products",
  ],
  authors: [{ name: "HerChoice Private Limited" }],
  openGraph: {
    title: "HerChoice — A Force for Health. A Force for Good.",
    description:
      "Premium sanitary protection crafted for comfort, safety, and the confidence to live fully. Proudly manufactured in Goa, India.",
    type: "website",
    locale: "en_IN",
    siteName: "HerChoice",
  },
  twitter: {
    card: "summary_large_image",
    title: "HerChoice — A Force for Health. A Force for Good.",
    description:
      "Premium sanitary hygiene products, ISO-certified, made in Goa, India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased overflow-x-hidden">
        <SmoothScroll />
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#D6336C] focus:text-white focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
