import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masmgrowth.com"),
  title: {
    default: "MASM Growth Systems | Engineered Growth",
    template: "%s | MASM Growth Systems",
  },
  description:
    "MASM builds integrated growth systems across performance marketing, SEO, analytics, and automation for ambitious companies.",
  keywords: [
    "growth consultancy",
    "performance marketing",
    "SEO consultancy",
    "marketing analytics",
    "marketing automation",
    "growth systems",
  ],
  openGraph: {
    title: "MASM Growth Systems | Engineered Growth",
    description:
      "Your growth channels should compound, not compete. We build the system that makes them work together.",
    url: "https://masmgrowth.com",
    siteName: "MASM Growth Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MASM Growth Systems | Engineered Growth",
    description:
      "Integrated performance, SEO, analytics, and automation systems for ambitious companies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
