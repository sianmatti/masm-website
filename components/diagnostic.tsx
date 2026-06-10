import { BookingCta } from "./booking-cta";
import { ButtonLink } from "./ui";
import { sitePath } from "@/lib/site";

const checks = [
  ["Acquisition efficiency", "72"],
  ["Search visibility", "46"],
  ["Measurement integrity", "61"],
  ["Automation maturity", "38"],
];

export function Diagnostic() {
  return (
    <section id="diagnostic" className="section-pad bg-paper">
      <div className="section-shell">
        <div className="overflow-hidden border border-ink/20 bg-white shadow-card">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 sm:p-12 lg:p-16">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Recommended first step</span>
                <span className="rounded-full border border-line px-3 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-muted">
                  Fixed scope · $1,250
                </span>
              </div>
              <h2 className="heading-section mt-8">
                Before investing more in ads, SEO, tools, or automation,
                identify the constraint limiting profitable growth.
              </h2>
              <p className="body-copy mt-6 max-w-md">
                A senior-led strategic assessment of your economics, demand,
                measurement, and operations, translated into a prioritized
                90-day direction.
              </p>
              <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  "Executive growth scorecard",
                  "Primary constraint analysis",
                  "Prioritized 90-day roadmap",
                  "Leadership decision session",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <BookingCta source="homepage_diagnostic">
                  Book a Diagnostic
                </BookingCta>
                <ButtonLink href={sitePath("/diagnostic/")} variant="secondary">
                  View full details
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted">
                Delivered in five business days. The full fee is credited
                toward eligible Growth Engine engagements started within 30 days.
              </p>
            </div>
            <div className="border-t border-ink/20 bg-ink p-7 text-white sm:p-12 lg:border-l lg:border-t-0">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <span className="font-mono text-[10px] tracking-wider text-white/45">SYSTEM READOUT</span>
                <span className="flex items-center gap-2 font-mono text-[9px] text-white/45">
                  <i className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-white" />
                  SAMPLE
                </span>
              </div>
              <div className="mt-10 space-y-8">
                {checks.map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm text-white/65">{label}</span>
                      <span className="font-mono text-xs">{value}/100</span>
                    </div>
                    <div className="h-1 bg-white/15">
                      <div className="h-full bg-white" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 grid grid-cols-3 border border-white/15">
                {[
                  ["04", "systems"],
                  ["11", "signals"],
                  ["03", "priorities"],
                ].map(([value, label], index) => (
                  <div key={label} className={`p-4 ${index > 0 ? "border-l border-white/15" : ""}`}>
                    <span className="block text-2xl tracking-[-0.04em]">{value}</span>
                    <span className="mt-1 block font-mono text-[8px] uppercase tracking-wider text-white/40">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-white/15 pt-6">
                <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-white/40">
                  Natural next step
                </span>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  When MASM is the right execution partner, the roadmap becomes
                  the operating brief for a Growth Engine engagement, typically
                  $2,500–$5,000+ per month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
