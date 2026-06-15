import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how MASM Growth Systems collects, uses, and protects information submitted through its website and third-party services.",
  alternates: {
    canonical: "https://www.masmgrowth.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | MASM Growth Systems",
    description:
      "Learn how MASM Growth Systems handles website, analytics, inquiry, and booking information.",
    url: "https://www.masmgrowth.com/privacy",
  },
};

const sections = [
  {
    title: "Introduction",
    content: (
      <p>
        This Privacy Policy explains how MASM Growth Systems collects, uses, and
        shares information when you visit{" "}
        <a href="https://www.masmgrowth.com" className="underline underline-offset-4">
          masmgrowth.com
        </a>
        , contact us, or book a Growth Diagnostic. By using the website, you
        acknowledge the practices described below.
      </p>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <>
        <p>
          We may collect information you voluntarily provide when you email MASM
          or book a Growth Diagnostic, including your name, email address,
          company details, website, booking details, and information about your
          current growth activity or business needs.
        </p>
        <p>
          We may also collect general website usage information, such as pages
          viewed, links clicked, thank-you page visits, scroll activity,
          referring sources, device and browser information, approximate
          location, and other interaction data.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Information",
    content: (
      <p>
        We use collected information to respond to inquiries, prepare for booked
        reviews, understand your current growth system, provide requested
        services, improve the website, measure conversion activity, analyze
        marketing performance, and maintain the security and operation of our
        services.
      </p>
    ),
  },
  {
    title: "Analytics and Tracking",
    content: (
      <p>
        MASM uses Google Tag Manager and Google Analytics 4 to understand website
        traffic, page performance, and conversion activity. These tools may
        record page views, clicks, scrolls, outbound link activity, thank-you
        page visits, and general website behavior. Google may process this
        information according to its own privacy practices.
      </p>
    ),
  },
  {
    title: "Calendly and Third-Party Tools",
    content: (
      <p>
        MASM uses Calendly to schedule Growth Diagnostic reviews. When you book,
        Calendly may collect your contact, company, scheduling, and booking
        information according to its own privacy practices. The website also
        relies on service providers such as Vercel, Google, and email service
        providers to host, operate, analyze, and support the website and related
        communications.
      </p>
    ),
  },
  {
    title: "Cookies and Similar Technologies",
    content: (
      <p>
        The website and its service providers may use cookies, browser storage,
        tags, pixels, and similar technologies to operate the site, remember
        preferences, understand usage, and measure marketing performance. You
        can adjust cookie settings through your browser, although disabling
        certain technologies may affect how parts of the website function.
      </p>
    ),
  },
  {
    title: "How We Share Information",
    content: (
      <p>
        MASM does not sell personal information. We may share information with
        service providers that help us host the website, manage bookings, analyze
        usage, send email, or provide services. We may also disclose information
        when reasonably necessary to comply with law, protect rights or safety,
        or address misuse of the website.
      </p>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <p>
        We retain information for as long as reasonably necessary to respond to
        inquiries, manage booked reviews, provide services, maintain business
        records, analyze website performance, and meet legitimate operational
        or legal needs. Retention periods may vary depending on the type and
        purpose of the information.
      </p>
    ),
  },
  {
    title: "Your Choices",
    content: (
      <p>
        You may limit cookies and similar technologies through your browser
        settings. You may also contact MASM to ask questions about information
        you have provided or request that we update or delete it, subject to any
        information we reasonably need to retain for operational or legal
        purposes.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        For privacy-related questions or requests, email{" "}
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
  {
    title: "Updates to This Policy",
    content: (
      <p>
        MASM may update this Privacy Policy from time to time to reflect changes
        in the website, services, or information practices. The updated version
        will be posted on this page with a revised effective date.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="grid-field">
        <section className="section-shell py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <header className="lg:col-span-4">
              <span className="eyebrow">Legal</span>
              <h1 className="display-xl mt-6 text-balance">Privacy Policy</h1>
              <p className="mt-6 max-w-sm text-sm leading-6 text-muted">
                Effective June 15, 2026
              </p>
              <p className="mt-5 max-w-sm text-base leading-7 text-muted">
                A clear overview of how MASM handles website, inquiry, analytics,
                and booking information.
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
