import { CaseStudies } from "@/components/case-studies";
import { Diagnostic } from "@/components/diagnostic";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { WhyMasm } from "@/components/why-masm";
import { AuthorityStrip } from "@/components/authority-strip";
import { Faq, homepageFaqs } from "@/components/faq";

export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MASM Growth Systems",
      url: "https://masmgrowth.com",
      email: "info@masmgrowth.com",
      logo: "https://masmgrowth.com/masm-mark.svg",
      description:
        "A growth systems consultancy connecting strategy, acquisition, SEO, analytics, AI automation, and business optimization.",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "MASM Growth Systems",
      url: "https://masmgrowth.com",
      email: "info@masmgrowth.com",
      areaServed: "Worldwide",
      serviceType: [
        "Growth strategy",
        "Performance marketing",
        "SEO",
        "Growth analytics",
        "AI automation",
        "Business optimization",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: homepageFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <AuthorityStrip />
        <Diagnostic />
        <Services />
        <CaseStudies />
        <WhyMasm />
        <Process />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
