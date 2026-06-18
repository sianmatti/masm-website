import type { Metadata } from "next";
import { ClientOutcomesPage } from "@/components/client-outcomes-page";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Client Outcomes",
  description:
    "See how MASM identifies growth constraints, connects fragmented functions, and creates measurable commercial and operating outcomes.",
  alternates: {
    canonical: "https://www.masmgrowth.com/work",
  },
  openGraph: {
    title: "Growth Systems in Practice | MASM Growth Systems",
    description:
      "Anonymized client outcomes showing how connected growth systems improve commercial performance, decision clarity, and operating capacity.",
    url: "https://www.masmgrowth.com/work",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <ClientOutcomesPage />
      <Footer />
    </>
  );
}
