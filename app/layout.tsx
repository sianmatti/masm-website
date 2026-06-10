import type { Metadata } from "next";
import { sitePath } from "@/lib/site";
import "./globals.css";

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
  icons: {
    icon: sitePath("/masm-mark.svg"),
    shortcut: sitePath("/masm-mark.svg"),
    apple: sitePath("/masm-mark.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
