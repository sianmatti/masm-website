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
    <section id="diagnostic" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="overflow-hidden border border-ink/20 bg-white shadow-card">
          <div className="grid md:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="border border-ink bg-paper p-4 sm:flex sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <span className="eyebrow">Recommended first step</span>
                  <p className="mt-1 text-sm font-medium">Growth Diagnostic</p>
                </div>
                <div className="mt-4 border-t border-ink/15 pt-4 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 sm:text-right">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                    Fixed scope
                  </span>
                  <strong className="mt-1 block text-3xl font-semibold tracking-[-0.06em]">$1,250</strong>
                </div>
              </div>
              <h2 className="mt-7 text-[clamp(2rem,3.2vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-balance">
                Before investing more in ads, SEO, tools, or automation,
                identify the constraint limiting profitable growth.
              </h2>
              <p className="body-copy mt-5 max-w-lg">
                A senior-led strategic assessment of your economics, demand,
                measurement, and operations, translated into a prioritized
                90-day direction.
              </p>
              <div className="mt-7 grid border-l border-t border-line text-sm sm:grid-cols-2">
                {[
                  "Executive growth scorecard",
                  "Primary constraint analysis",
                  "Prioritized 90-day roadmap",
                  "Leadership decision session",
                ].map((item) => (
                  <div key={item} className="flex min-h-16 items-center gap-3 border-b border-r border-line px-4 py-3">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-[10px] text-white">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <BookingCta source="homepage_diagnostic">
                  Book a Diagnostic
                </BookingCta>
                <ButtonLink href={sitePath("/diagnostic/")} variant="secondary">
                  See what’s included
                </ButtonLink>
              </div>
              <div className="mt-5 grid gap-2 border-t border-ink/15 pt-4 text-xs leading-5 text-muted sm:grid-cols-2">
                <p><strong className="font-medium text-ink">Delivery:</strong> Five business days.</p>
                <p><strong className="font-medium text-ink">Fee credit:</strong> Applied to eligible Growth Engine engagements started within 30 days.</p>
              </div>
            </div>
            <div className="border-t border-ink/20 bg-ink p-7 text-white sm:p-10 md:border-l md:border-t-0 lg:p-12">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <div>
                  <span className="font-mono text-[10px] tracking-wider text-white/45">DIAGNOSTIC SCORECARD</span>
                  <p className="mt-2 text-sm font-medium">Sample system readout</p>
                </div>
                <span className="flex items-center gap-2 font-mono text-[9px] text-white/45">
                  <i className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-white" />
                  SAMPLE
                </span>
              </div>
              <p className="mt-6 max-w-md text-sm leading-6 text-white/55">
                A decision tool that exposes the weakest links across acquisition,
                search, measurement, and operating maturity.
              </p>
              <div className="mt-8 space-y-6">
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
              <div className="mt-9 grid grid-cols-3 border border-white/15">
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
              <div className="mt-7 border-t border-white/15 pt-6">
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
