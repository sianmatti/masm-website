import type { Metadata } from "next";
import Script from "next/script";
import { sitePath } from "@/lib/site";
import "./globals.css";

const GTM_CONTAINER_ID = "GTM-58H8BC26";

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
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
+'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
