import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mimosa Park & Island Camp | Sagana, Kenya",
    template: "%s | Mimosa Park & Island Camp",
  },
  description:
    "Experience Nature's Harmony at Mimosa Park & Island Camp. A luxury resort cradled along the river's edge in Sagana, Kenya — offering accommodation, island camping, a swimming pool, restaurant, and bar.",
  keywords: [
    "Mimosa Park",
    "Island Camp",
    "Sagana resort",
    "Kenya resort",
    "Sagana hotel",
    "island camping Kenya",
    "Sagana River",
    "luxury resort Kenya",
    "camping Sagana",
    "Mimosa Park Island Camp",
  ],
  authors: [{ name: "Mimosa Park & Island Camp" }],
  creator: "Mimosa Park & Island Camp",
  metadataBase: new URL("https://www.mimosaparkislandcamp.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://www.mimosaparkislandcamp.org",
    siteName: "Mimosa Park & Island Camp",
    title: "Mimosa Park & Island Camp | Experience Nature's Harmony",
    description:
      "A luxury resort cradled along the river's edge in Sagana, Kenya. Swimming pool, island camping, restaurant, bar and more.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mimosa Park & Island Camp — Sagana, Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimosa Park & Island Camp | Experience Nature's Harmony",
    description:
      "A luxury resort cradled along the river's edge in Sagana, Kenya. Swimming pool, island camping, restaurant, bar and more.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.jpeg", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.jpeg", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
        follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Explicit link tags as fallback for broader browser/crawler support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}