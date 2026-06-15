import { BookingCta } from "./booking-cta";
import { ArrowIcon, ButtonLink } from "./ui";
import { sitePath } from "@/lib/site";

const checks = [
  ["Acquisition efficiency", "72"],
  ["Search visibility", "46"],
  ["Measurement integrity", "61"],
  ["Automation maturity", "38"],
];

const deliverables = [
  ["Executive Growth Scorecard", "A clear diagnosis of the primary growth constraint"],
  ["Primary Constraint Analysis", "A ranked 90-day action direction"],
  ["Prioritized 90-Day Roadmap", "A leadership-ready decision readout"],
  ["Leadership Decision Session", "A recommendation on whether MASM should execute or not"],
];

const bookingSteps = [
  [
    "Fit Review",
    "MASM confirms whether the Growth Diagnostic is the right next step.",
  ],
  [
    "Diagnostic Confirmation",
    "If there is a strong fit, payment and required materials are confirmed.",
  ],
  [
    "Five-Business-Day Readout",
    "MASM delivers the scorecard, constraint analysis, 90-day roadmap, and leadership decision session.",
  ],
];

export function Diagnostic() {
  return (
    <section id="diagnostic" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="overflow-hidden border border-ink/20 bg-white shadow-card">
          <div className="grid md:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="border border-ink bg-paper p-4 sm:p-5">
                <span className="eyebrow">Recommended first step</span>
                <p className="mt-1.5 text-base font-medium tracking-[-0.02em]">
                  Growth Diagnostic
                </p>
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
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <p className="border-l-2 border-ink pl-4 text-sm leading-6 text-ink">
                  <strong className="block font-semibold">Best for</strong>
                  Teams already investing in growth but lacking one clear view
                  of performance or what to prioritize next.
                </p>
                <p className="border-l-2 border-ink/20 pl-4 text-sm leading-6 text-muted">
                  <strong className="block font-semibold text-ink">Not for</strong>
                  Pre-launch ideas, cheap channel management, or teams expecting
                  guaranteed revenue or ROAS.
                </p>
              </div>
            </div>
            <div className="order-3 border-t border-ink/20 bg-ink p-7 text-white sm:p-10 md:order-none md:border-l md:border-t-0 lg:p-12">
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
                  the operating brief for a separately scoped Growth Engine
                  engagement.
                </p>
              </div>
            </div>
            <div className="order-2 border-t border-ink/20 bg-white p-7 sm:p-10 md:order-none md:col-span-2 lg:p-14">
              <span className="eyebrow block">You leave with</span>
              <div className="mt-4 grid border-l border-t border-line text-sm sm:mt-5 sm:grid-cols-2 lg:grid-cols-4">
                {deliverables.map(([title, outcome]) => (
                  <div key={title} className="flex items-start gap-2.5 border-b border-r border-line px-3.5 py-3.5 sm:min-h-24 sm:gap-3 sm:px-4 sm:py-4">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-[10px] text-white">✓</span>
                    <span>
                      <strong className="block font-medium">{title}</strong>
                      <span className="mt-1.5 block text-xs leading-5 text-muted">{outcome}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid overflow-hidden border border-ink lg:grid-cols-[1fr_0.72fr]">
                <div className="bg-paper p-4 sm:p-5">
                  <span className="eyebrow">Engagement details</span>
                  <p className="mt-2 text-sm font-medium leading-6 text-ink">
                    Fixed-scope strategic assessment
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Delivered in five business days after payment and required
                    materials are confirmed.
                  </p>
                </div>
                <div className="border-t border-ink bg-ink p-4 text-white sm:p-5 lg:border-l lg:border-t-0">
                  <strong className="block text-4xl font-semibold leading-none tracking-[-0.07em]">
                    $1,250
                  </strong>
                  <p className="mt-3 max-w-lg text-xs leading-5 text-white/60">
                    The Diagnostic fee may be credited toward an eligible Growth
                    Engine engagement started within 30 days.
                  </p>
                </div>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <BookingCta source="homepage_diagnostic">
                  Book a Growth Diagnostic
                </BookingCta>
                <ButtonLink
                  href={sitePath("/diagnostic/")}
                  variant="secondary"
                  className="[&>svg]:hidden"
                >
                  <span className="text-center leading-6">
                    <span className="block sm:inline">
                      See what’s included in the Growth
                    </span>{" "}
                    <span className="inline-flex items-center gap-3 whitespace-nowrap">
                      Diagnostic
                      <ArrowIcon />
                    </span>
                  </span>
                </ButtonLink>
              </div>
              <div className="mt-7 border-t border-ink/15 pt-6">
                <span className="eyebrow block">What happens after booking</span>
                <div className="mt-4 grid border-l border-t border-line sm:grid-cols-3">
                  {bookingSteps.map(([title, description], index) => (
                    <div
                      key={title}
                      className="border-b border-r border-line p-4 sm:min-h-36 sm:p-5"
                    >
                      <span className="font-mono text-[9px] text-muted">
                        0{index + 1}
                      </span>
                      <strong className="mt-3 block text-sm font-medium">
                        {title}
                      </strong>
                      <p className="mt-2 text-xs leading-5 text-muted">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
