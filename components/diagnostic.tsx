import { BookingCta } from "./booking-cta";
import { ButtonLink } from "./ui";
import { sitePath } from "@/lib/site";

const checks = [
  ["Acquisition efficiency", "72"],
  ["Search visibility", "46"],
  ["Measurement integrity", "61"],
  ["Automation maturity", "38"],
];

const deliverables = [
  ["Executive growth scorecard", "A clear diagnosis of the primary growth constraint"],
  ["Primary constraint analysis", "A ranked 90-day action direction"],
  ["Prioritized 90-day roadmap", "A leadership-ready decision readout"],
  ["Leadership decision session", "A recommendation on whether MASM should execute or not"],
];

export function Diagnostic() {
  return (
    <section id="diagnostic" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="overflow-hidden border border-ink/20 bg-white shadow-card">
          <div className="grid md:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="grid overflow-hidden border border-ink sm:grid-cols-[1fr_auto]">
                <div className="bg-paper p-4 sm:p-5">
                  <span className="eyebrow">Recommended first step</span>
                  <p className="mt-1.5 text-base font-medium tracking-[-0.02em]">Growth Diagnostic</p>
                </div>
                <div className="flex items-center justify-between gap-6 border-t border-ink bg-ink px-4 py-4 text-white sm:min-w-[170px] sm:flex-col sm:items-end sm:justify-center sm:border-l sm:border-t-0 sm:px-6 sm:text-right">
                  <span className="block font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-white/60">
                    Fixed scope
                  </span>
                  <strong className="block text-4xl font-semibold leading-none tracking-[-0.07em]">$1,250</strong>
                </div>
              </div>
              <h2 className="mt-7 text-[clamp(2rem,3.2vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-balance">
                Before spending more on ads, SEO, dashboards, or automation,
                identify the constraint limiting profitable growth.
              </h2>
              <p className="body-copy mt-5 max-w-lg">
                The Growth Diagnostic gives leadership a clear read on where
                growth is breaking down, which fixes matter most, and what to
                prioritize over the next 90 days.
              </p>
              <p className="mt-5 border-l-2 border-ink pl-4 text-sm leading-6 text-ink">
                <strong className="font-semibold">Best for:</strong> teams already
                investing in growth but lacking one clear view of what is working,
                what is wasting budget, and what should be prioritized next.
              </p>
              <span className="eyebrow mt-7 block">You leave with</span>
              <div className="mt-7 grid border-l border-t border-line text-sm sm:grid-cols-2">
                {deliverables.map(([title, outcome]) => (
                  <div key={title} className="flex min-h-24 items-start gap-3 border-b border-r border-line px-4 py-4">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-[10px] text-white">✓</span>
                    <span>
                      <strong className="block font-medium">{title}</strong>
                      <span className="mt-1.5 block text-xs leading-5 text-muted">{outcome}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <BookingCta source="homepage_diagnostic">
                  Book a Growth Diagnostic
                </BookingCta>
                <ButtonLink href={sitePath("/diagnostic/")} variant="secondary">
                  See what’s included in the Growth Diagnostic
                </ButtonLink>
              </div>
              <div className="mt-5 grid gap-2 border-t border-ink/15 pt-4 text-xs leading-5 text-muted sm:grid-cols-2">
                <p><strong className="font-medium text-ink">Delivered in five business days.</strong></p>
                <p><strong className="font-medium text-ink">Fee credited toward eligible Growth Engine engagements started within 30 days.</strong></p>
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
                The scorecard gives leadership a structured view of where the
                growth system is strong, where it is leaking performance, and
                which constraints deserve priority.
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
              <p className="mt-6 text-xs leading-5 text-white/45">
                Signals may include economics, attribution quality, conversion
                flow, channel dependency, search visibility, reporting
                reliability, and workflow maturity.
              </p>
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
