import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site, images } from "@/lib/site";
import "./globals.css";

// Display: Fraunces — a warm, high-contrast serif. It reads "crafted home"
// rather than "corporate contractor", matching an interiors brand.
const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

// Body: Inter — neutral, legible at small sizes for spec-heavy copy.
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#1F4A45",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Laco Builders | Home Builders & Interior Designers in Kottayam",
    template: `%s | ${site.name}`,
  },
  description:
    "Laco Builders is a Kottayam home-building and interior firm rated 4.8 across 48 Google reviews. Construction and interiors from one team, signed off in 3D before we build. Since 2001.",
  keywords: [
    "builders in Kottayam",
    "interior designers in Kottayam",
    "modular kitchen Kottayam",
    "construction company Kerala",
    "LacoCina Interiors",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.legalName,
    title: "Laco Builders | Home Builders & Interior Designers in Kottayam",
    description:
      "Construction and interiors from one accountable team. Rated 4.8 from 48 reviews · 1,500+ projects across central Kerala since 2001.",
    locale: "en_IN",
    images: [{ url: images.hero, width: 1200, height: 630, alt: "Interior by Laco Builders" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laco Builders | Home Builders & Interior Designers in Kottayam",
    description:
      "One accountable team for construction and interiors. Rated 4.8 from 48 reviews, 1,500+ projects since 2001.",
    images: [images.hero],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`}>
      <head>
        {/* Preload the LCP hero so it paints fast. */}
        <link
          rel="preload"
          as="image"
          href={images.hero}
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
