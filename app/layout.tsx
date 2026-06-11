import type { Metadata } from "next";
import { sitePath } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://masmgrowth.com"),
  title: {
    default: "MASM Growth Systems | Growth Strategy, Analytics, SEO & AI Automation",
    template: "%s | MASM Growth Systems",
  },
  description:
    "MASM helps founders and growth leaders connect strategy, acquisition, SEO, analytics, AI automation, and business optimization into one operating model for profitable growth.",
  keywords: [
    "growth consultancy",
    "performance marketing",
    "SEO consultancy",
    "marketing analytics",
    "marketing automation",
    "growth systems",
  ],
  openGraph: {
    title: "MASM Growth Systems | Growth Strategy, Analytics, SEO & AI Automation",
    description:
      "MASM helps founders and growth leaders connect strategy, acquisition, SEO, analytics, AI automation, and business optimization into one operating model for profitable growth.",
    url: "https://masmgrowth.com",
    siteName: "MASM Growth Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MASM Growth Systems | Growth Strategy, Analytics, SEO & AI Automation",
    description:
      "MASM helps founders and growth leaders connect strategy, acquisition, SEO, analytics, AI automation, and business optimization into one operating model for profitable growth.",
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
