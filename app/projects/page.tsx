import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SelectedWorkPage } from "@/components/selected-work-page";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected MASM brand, platform, website, campaign, and operating work showing how strategy becomes working commercial infrastructure.",
  alternates: {
    canonical: "https://www.masmgrowth.com/projects/",
  },
  openGraph: {
    title: "Selected Work | MASM Growth Systems",
    description:
      "Selected brand, platform, website, campaign, and operating work from MASM Growth Systems.",
    url: "https://www.masmgrowth.com/projects/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work | MASM Growth Systems",
    description:
      "Selected brand, platform, website, campaign, and operating work from MASM Growth Systems.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <SelectedWorkPage />
      <Footer compact />
    </>
  );
}

