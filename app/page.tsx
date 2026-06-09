import { CaseStudies } from "@/components/case-studies";
import { Diagnostic } from "@/components/diagnostic";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { WhyMasm } from "@/components/why-masm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyMasm />
        <Diagnostic />
        <Process />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
