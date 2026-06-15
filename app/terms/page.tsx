import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Review the terms governing use of the MASM Growth Systems website, service information, and business inquiries.",
  alternates: {
    canonical: "https://www.masmgrowth.com/terms",
  },
  openGraph: {
    title: "Terms of Use | MASM Growth Systems",
    description:
      "Terms governing use of the MASM Growth Systems website and information about its consulting services.",
    url: "https://www.masmgrowth.com/terms",
  },
};

const sections = [
  {
    title: "Introduction",
    content: (
      <p>
        These Terms of Use apply when you visit{" "}
        <a href="https://www.masmgrowth.com" className="underline underline-offset-4">
          masmgrowth.com
        </a>
        , review information about MASM Growth Systems, contact us, or book a
        Growth Diagnostic. By using the website, you agree to use it responsibly
        and acknowledge the terms below.
      </p>
    ),
  },
  {
    title: "Use of This Website",
    content: (
      <p>
        This website is provided for informational and business inquiry
        purposes. You may use it to learn about MASM, evaluate potential
        services, contact the business, and schedule a review. You may not misuse
        the website, interfere with its operation, attempt unauthorized access,
        or use its content in a misleading or unlawful way.
      </p>
    ),
  },
  {
    title: "Services and Availability",
    content: (
      <p>
        MASM provides strategic analysis, recommendations, and consulting
        services related to growth strategy, acquisition, SEO, analytics,
        automation, conversion, and business optimization. Website descriptions
        are general summaries and do not create a consulting engagement. Service
        availability, timing, scope, and acceptance depend on capacity, required
        information, business needs, and mutual fit.
      </p>
    ),
  },
  {
    title: "Growth Diagnostic Scope",
    content: (
      <>
        <p>
          The Growth Diagnostic is a fixed-scope strategic assessment priced at
          $1,250. The stated five-business-day delivery period begins after
          payment and the required materials are confirmed.
        </p>
        <p>
          Unless separately agreed in writing, the Diagnostic does not include
          implementation, advertising management, SEO execution, automation
          setup, website development, ongoing reporting, or management of
          third-party platforms.
        </p>
      </>
    ),
  },
  {
    title: "No Guaranteed Results",
    content: (
      <p>
        Results vary based on the business model, market conditions, competition,
        data quality, budget, offer, internal execution, platform changes, and
        other factors outside MASM&apos;s control. MASM does not guarantee
        specific revenue, lead volume, bookings, search rankings, CAC reduction,
        ROAS, pipeline growth, conversion rates, or any other performance
        outcome.
      </p>
    ),
  },
  {
    title: "Selected Outcomes and Case Examples",
    content: (
      <p>
        Selected outcomes, metrics, and anonymized examples on the website are
        provided for context and illustration. They reflect particular
        circumstances and may not represent typical results. They should not be
        treated as a promise, forecast, or guarantee of what another business
        will achieve.
      </p>
    ),
  },
  {
    title: "Third-Party Tools and Links",
    content: (
      <p>
        The website may use or link to third-party services such as Calendly,
        Google, Vercel, email providers, and other external platforms. Those
        services operate under their own terms, policies, availability, and
        security practices. MASM is not responsible for third-party content,
        service interruptions, or changes made by those providers.
      </p>
    ),
  },
  {
    title: "Payments and Engagements",
    content: (
      <>
        <p>
          Payment terms, deliverables, timing, responsibilities, cancellation
          terms, and other engagement details will be confirmed separately
          before paid work begins. MASM does not currently process payments
          directly through this website.
        </p>
        <p>
          Any Growth Engine engagement, typically priced at $2,500–$5,000+ per
          month, is subject to a separate scope, price, agreement, and mutual
          fit. Completing a Growth Diagnostic does not guarantee or require an
          ongoing engagement.
        </p>
      </>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <p>
        The website, MASM name and branding, written content, graphics,
        frameworks, and other original materials are owned by MASM Growth
        Systems or used with permission. You may review and share links to the
        website for ordinary business purposes, but you may not copy, republish,
        sell, modify, or present MASM materials as your own without written
        permission.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <p>
        The website and its content are provided on an as-available basis.
        Information may change and may not address every business circumstance.
        To the extent permitted by applicable law, MASM is not responsible for
        indirect, incidental, or consequential losses arising from reliance on
        website content, inability to access the site, third-party services, or
        decisions made without a separate consulting agreement.
      </p>
    ),
  },
  {
    title: "Updates to These Terms",
    content: (
      <p>
        MASM may update these Terms of Use from time to time to reflect changes
        in the website, services, or business practices. The updated version
        will be posted on this page with a revised effective date. Continued use
        of the website after an update means the revised terms apply.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        For questions about these terms or MASM services, email{" "}
        <a
          href="mailto:info@masmgrowth.com"
          className="font-medium text-ink underline underline-offset-4"
        >
          info@masmgrowth.com
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="grid-field">
        <section className="section-shell py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <header className="lg:col-span-4">
              <span className="eyebrow">Legal</span>
              <h1 className="display-xl mt-6 text-balance">Terms of Use</h1>
              <p className="mt-6 max-w-sm text-sm leading-6 text-muted">
                Effective June 15, 2026
              </p>
              <p className="mt-5 max-w-sm text-base leading-7 text-muted">
                Practical terms for using the MASM website and evaluating its
                consulting services.
              </p>
            </header>

            <div className="border-t border-ink/20 lg:col-span-8">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  className="grid gap-4 border-b border-line py-8 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-10"
                >
                  <span className="font-mono text-[10px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="heading-card">{section.title}</h2>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-muted sm:text-base">
                      {section.content}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
