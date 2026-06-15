import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ButtonLink } from "@/components/ui";
import { sitePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Growth Diagnostic Review Booked",
  description: "Your MASM Growth Diagnostic review is booked.",
  robots: {
    index: false,
    follow: false,
  },
};

const preparationChecklist = [
  "Your website",
  "Current paid media activity",
  "SEO or content work",
  "GA4 or reporting setup",
  "CRM or lead tracking process",
  "Current growth goals",
  "What feels unclear, disconnected, or difficult to measure",
];

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="grid-field">
        <section className="section-shell py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="eyebrow">Booking confirmed</span>
              <h1 className="display-xl mt-6 max-w-4xl text-balance">
                Your Growth Diagnostic review is booked.
              </h1>
              <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-muted">
                <p>Thank you for booking a MASM Growth Diagnostic review.</p>
                <p>
                  Before the review, prepare your current growth activity, active
                  channels, reporting setup, and the biggest constraint you
                  believe is limiting growth.
                </p>
                <p>
                  MASM will use the review to understand your current growth
                  system and determine the right next step.
                </p>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={sitePath("/#diagnostic")}>
                  Review the Growth Diagnostic
                </ButtonLink>
                <ButtonLink href={sitePath("/")} variant="secondary">
                  Return to homepage
                </ButtonLink>
              </div>
            </div>

            <aside className="border border-ink/20 bg-white p-7 shadow-card sm:p-9 lg:col-span-5">
              <span className="eyebrow">Preparation checklist</span>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {preparationChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-4 text-sm leading-6">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-[10px] text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
