import { ArrowIcon, BrandLockup } from "./ui";
import { sitePath } from "@/lib/site";
import { BookingCta } from "./booking-cta";
import { SiteHeader } from "./site-header";

const assessmentAreas = [
  {
    number: "01",
    title: "Growth economics",
    copy: "CAC, payback, margin, pipeline quality, and the commercial logic behind current investment.",
  },
  {
    number: "02",
    title: "Demand system",
    copy: "How paid acquisition, organic search, positioning, and conversion work together to create demand.",
  },
  {
    number: "03",
    title: "Measurement",
    copy: "The integrity of attribution, reporting, forecasting, and the decisions your data can actually support.",
  },
  {
    number: "04",
    title: "Operating leverage",
    copy: "Where process, lifecycle automation, AI, and ownership can remove drag from the growth engine.",
  },
];

const deliverables = [
  ["Executive scorecard", "A clear assessment across four connected growth systems, with evidence behind every score."],
  ["Constraint analysis", "The primary bottleneck limiting profitable growth and the downstream impact it creates."],
  ["Priority roadmap", "A sequenced 90-day plan focused on the few moves most likely to change business performance."],
  ["Decision session", "A 60-minute working session to pressure-test the findings, tradeoffs, and recommended direction."],
];

const processSteps = [
  ["01", "Consultation", "A focused call to understand the business, confirm fit, and define the decision the diagnostic must support.", "30 min"],
  ["02", "Diagnostic", "Complete the intake, share existing data, and let MASM isolate the highest-cost growth constraint.", "5 days"],
  ["03", "Readout", "Your leadership team receives the scorecard, roadmap, and a facilitated decision session.", "60 min"],
  ["04", "Proposal", "If MASM is the right execution partner, receive a focused Growth Engine proposal built from the findings.", "Optional"],
];

const faqs = [
  {
    question: "Who is the Growth Diagnostic for?",
    answer:
      "It is designed for founders and growth leaders at established digital businesses that are investing in growth but lack confidence in what to prioritize next. It is most valuable when several channels, tools, or teams are involved.",
  },
  {
    question: "Is this a marketing audit?",
    answer:
      "No. A marketing audit usually catalogs channel activity. The Growth Diagnostic evaluates the commercial system behind growth: economics, demand creation, measurement, operating leverage, and the decisions connecting them.",
  },
  {
    question: "What will you need access to?",
    answer:
      "We begin with your existing reporting, channel summaries, funnel metrics, and operating context. Read-only platform access may be requested when it materially improves the analysis, but it is not required in every engagement.",
  },
  {
    question: "How quickly is it completed?",
    answer:
      "Most diagnostics are completed within five business days of receiving the intake materials. The final readout is scheduled once the analysis is ready.",
  },
  {
    question: "What happens after the diagnostic?",
    answer:
      "You keep the scorecard and roadmap regardless of what happens next. If there is a strong fit, MASM may propose a Growth Engine engagement to implement and operate the highest-priority parts of the system.",
  },
  {
    question: "Is the fee refundable?",
    answer:
      "Because the work begins with senior analysis immediately after intake, the fee is non-refundable. If you begin an eligible Growth Engine engagement within 30 days, the full diagnostic fee is credited toward month one.",
  },
];

function DiagnosticHeader() {
  const navItems = [
    { label: "What We Assess", href: "#assessment" },
    { label: "What You Receive", href: "#deliverables" },
    { label: "How It Works", href: "#process" },
    { label: "Investment", href: "#pricing" },
  ];

  return (
    <SiteHeader
      navItems={navItems}
      bookingCta
      ctaLabel="Book a Growth Diagnostic"
    />
  );
}

function ScorecardPreview({ compact = false }: { compact?: boolean }) {
  const scores = [
    ["Economics", 58, "At risk"],
    ["Demand", 71, "Functional"],
    ["Measurement", 43, "Constraint"],
    ["Operations", 64, "Developing"],
  ];

  return (
    <div className={`card-system-dark ${compact ? "p-5" : "p-6 sm:p-8"}`}>
      <div className="flex items-center justify-between border-b border-white/15 pb-5">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">Growth system / scorecard</span>
        <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-white/45">
          <i className="h-1.5 w-1.5 rounded-full bg-white" />
          Example
        </span>
      </div>
      <div className={compact ? "mt-6 space-y-5" : "mt-8 space-y-7"}>
        {scores.map(([label, score, status]) => (
          <div key={label}>
            <div className="mb-2.5 flex items-end justify-between">
              <div>
                <span className="block text-sm text-white/75">{label}</span>
                {!compact ? <span className="mt-1 block font-mono text-[8px] uppercase tracking-wider text-white/30">{status}</span> : null}
              </div>
              <span className="font-mono text-xs">{score}<span className="text-white/30">/100</span></span>
            </div>
            <div className="h-1 bg-white/10">
              <div className="h-full bg-white" style={{ width: `${score}%` }} />
            </div>
          </div>
        ))}
      </div>
      {!compact ? (
        <div className="mt-8 grid grid-cols-3 border border-white/15">
          {[["01", "constraint"], ["03", "priorities"], ["90", "day plan"]].map(([value, label], index) => (
            <div key={label} className={`p-4 ${index ? "border-l border-white/15" : ""}`}>
              <strong className="block text-2xl font-medium tracking-[-0.05em]">{value}</strong>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-wider text-white/35">{label}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function DiagnosticHero() {
  return (
    <section className="grid-field section-pad-sm relative overflow-hidden">
      <div className="section-shell">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-ink" />
          <span className="eyebrow">Strategic business assessment</span>
          <span className="hidden font-mono text-[10px] text-muted sm:block">FIXED SCOPE / SENIOR-LED</span>
        </div>
        <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="display-xl max-w-5xl text-balance">
              Find what is limiting your <span className="text-muted">next stage of growth.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="body-lead max-w-md">
              A rigorous assessment of your growth economics, demand system,
              measurement, and operations, translated into a clear 90-day direction.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <BookingCta source="diagnostic_hero">Book a Growth Diagnostic</BookingCta>
              <BookingCta
                source="diagnostic_hero_strategy"
                type="strategy"
                variant="secondary"
              >
                Book a strategy call
              </BookingCta>
            </div>
            <a href="#scorecard" className="mt-4 inline-block text-xs font-medium underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
              View example output
            </a>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
              $1,250 · Delivered in 5 business days
            </p>
          </div>
        </div>
        <div className="card-system mt-12 grid sm:grid-cols-3">
          {[
            ["Built for decisions", "Not a channel checklist or automated report."],
            ["Senior analysis", "Strategy and interpretation handled by MASM directly."],
            ["Yours to keep", "Use the roadmap internally, with MASM, or elsewhere."],
          ].map(([title, copy], index) => (
            <div key={title} className={`p-6 sm:p-7 ${index ? "border-t border-ink/15 sm:border-l sm:border-t-0" : ""}`}>
              <span className="text-sm font-medium">{title}</span>
              <p className="body-small mt-2">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section-pad bg-white">
      <div className="section-shell">
        <div className="grid gap-12 border-t border-ink/20 pt-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <span className="eyebrow">The real problem</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display-lg max-w-5xl text-balance">
              More activity does not fix a system with an <span className="text-muted">unknown constraint.</span>
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <p className="body-lead max-w-md">
                Growth teams often have plenty of ideas, reporting, and channel
                activity. What they lack is a shared view of which problem is
                actually limiting performance.
              </p>
              <div className="space-y-5">
                {[
                  "Acquisition scales, but profitability deteriorates.",
                  "Reporting increases, but confidence in decisions does not.",
                  "Teams optimize channels while the customer journey stays fragmented.",
                  "Automation adds tools without creating operating leverage.",
                ].map((item) => (
                  <div key={item} className="flex gap-4 border-b border-ink/10 pb-5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    <p className="text-sm leading-6">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AssessmentSection() {
  return (
    <section id="assessment" className="section-pad bg-ink text-white">
      <div className="section-shell">
        <div className="grid gap-8 border-t border-white/20 pt-6 lg:grid-cols-12">
          <span className="eyebrow !text-white/45 lg:col-span-3">What we assess</span>
          <h2 className="display-lg max-w-5xl text-balance lg:col-span-9">
            Four systems. <span className="text-white/35">One commercial reality.</span>
          </h2>
        </div>
        <div className="mt-16 grid border-l border-t border-white/15 md:grid-cols-2">
          {assessmentAreas.map((area) => (
            <article key={area.number} className="min-h-[310px] border-b border-r border-white/15 p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/35">{area.number}</span>
                <span className="h-2 w-2 rounded-full border border-white/50" />
              </div>
              <div className="mt-24">
                <h3 className="heading-card">{area.title}</h3>
                <p className="body-small mt-4 max-w-md !text-white/55">{area.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  return (
    <section id="deliverables" className="section-pad bg-paper">
      <div className="section-shell">
        <div className="grid gap-8 border-t border-ink/20 pt-6 lg:grid-cols-12">
          <span className="eyebrow lg:col-span-3">What you receive</span>
          <div className="lg:col-span-9">
            <h2 className="display-lg max-w-5xl text-balance">
              A decision instrument, <span className="text-muted">not another deck.</span>
            </h2>
            <p className="body-copy mt-7 max-w-xl">
              Every output is designed to help leadership align resources,
              sequence priorities, and make the next growth decision with confidence.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {deliverables.map(([title, copy], index) => (
            <article key={title} className="card-system card-lift card-pad">
              <span className="font-mono text-[10px] text-muted">0{index + 1}</span>
              <h3 className="heading-card mt-16">{title}</h3>
              <p className="body-small mt-4 max-w-md">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScorecardSection() {
  return (
    <section id="scorecard" className="section-pad bg-white">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Diagnostic scorecard / example</span>
            <h2 className="heading-section mt-8">
              See the whole system. Prioritize the real constraint.
            </h2>
            <p className="body-copy mt-6 max-w-md">
              Scores are supported by evidence and interpreted in context.
              The goal is not to maximize every category. It is to identify the
              constraint that makes other improvements less valuable.
            </p>
            <div className="mt-9 border-l-2 border-ink pl-5">
              <span className="eyebrow">Illustrative finding</span>
              <p className="mt-3 text-sm leading-6">
                Measurement integrity is limiting confidence in acquisition
                economics. Fix attribution before increasing media investment.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ScorecardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-paper">
      <div className="section-shell">
        <div className="grid gap-8 border-t border-ink/20 pt-6 lg:grid-cols-12">
          <span className="eyebrow lg:col-span-3">How it works</span>
          <h2 className="display-lg max-w-5xl text-balance lg:col-span-9">
            From uncertainty to <span className="text-muted">clear direction in one week.</span>
          </h2>
        </div>
        <div className="mt-16">
          {processSteps.map(([number, title, copy, timing]) => (
            <article key={number} className="grid gap-4 border-t border-ink/15 py-7 sm:grid-cols-12 sm:items-start">
              <span className="font-mono text-[10px] text-muted sm:col-span-1">{number}</span>
              <h3 className="text-2xl font-medium tracking-[-0.03em] sm:col-span-3">{title}</h3>
              <p className="body-small max-w-xl sm:col-span-6">{copy}</p>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted sm:col-span-2 sm:text-right">{timing}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="section-shell">
        <div className="overflow-hidden border border-ink bg-ink text-white">
          <div className="grid lg:grid-cols-12">
            <div className="p-7 sm:p-12 lg:col-span-7 lg:p-16">
              <span className="eyebrow !text-white/45">Fixed-scope engagement</span>
              <h2 className="heading-section mt-8 !text-white">
                Growth Systems Diagnostic
              </h2>
              <p className="body-copy mt-6 max-w-lg !text-white/60">
                A senior-led strategic assessment for businesses that need clarity
                before committing more budget, headcount, or time to growth.
              </p>
              <div className="mt-10 flex items-end gap-3">
                <strong className="text-heading-1 font-semibold">$1,250</strong>
                <span className="pb-2 text-sm text-white/40">one-time</span>
              </div>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/55">
                Fully credited toward month one when an eligible Growth Engine
                engagement begins within 30 days.
              </p>
            </div>
            <div className="border-t border-white/15 bg-white p-7 text-ink sm:p-12 lg:col-span-5 lg:border-l lg:border-t-0">
              <span className="eyebrow">Included</span>
              <div className="mt-8 space-y-5">
                {[
                  "Pre-assessment intake and data review",
                  "Four-system executive scorecard",
                  "Primary constraint analysis",
                  "Prioritized 90-day roadmap",
                  "60-minute leadership readout",
                  "Complete written deliverable",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-ink/10 pb-5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-[10px] text-white">✓</span>
                    <span className="text-sm leading-5">{item}</span>
                  </div>
                ))}
              </div>
              <BookingCta className="mt-8 w-full" source="diagnostic_pricing">
                Book a Growth Diagnostic
              </BookingCta>
              <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-wider text-muted">
                Limited weekly capacity · Secure scheduling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GrowthEngineBridge() {
  return (
    <section className="section-pad bg-paper">
      <div className="section-shell">
        <div className="grid gap-12 border-t border-ink/20 pt-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">What comes next</span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="display-lg max-w-4xl text-balance">
              Clarity first. <span className="text-muted">Execution when it makes sense.</span>
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="card-system card-pad">
                <span className="eyebrow">Path 01</span>
                <h3 className="heading-card mt-8 !text-2xl">Take the roadmap</h3>
                <p className="body-small mt-3">
                  Use the diagnostic to align your team and execute internally.
                  The work is complete and the deliverables are yours.
                </p>
              </div>
              <div className="card-system-dark card-pad">
                <span className="eyebrow !text-white/45">Path 02</span>
                <h3 className="heading-card mt-8 !text-2xl">Build the Growth Engine</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  When MASM is the right execution partner, the diagnostic becomes
                  the operating brief for an ongoing growth systems engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Frequently asked</span>
            <h2 className="heading-section mt-8">The practical details.</h2>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((item, index) => (
              <details key={item.question} className="group border-t border-ink/15 py-6" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium tracking-[-0.03em]">
                  {item.question}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/20 text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="body-small mt-5 max-w-2xl pr-12">{item.answer}</p>
              </details>
            ))}
            <div className="border-t border-ink/15" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <footer className="overflow-hidden bg-ink text-white">
      <div className="section-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <span className="eyebrow !text-white/45">Stop guessing what to fix next</span>
            <h2 className="display-lg mt-8 max-w-5xl">
              Turn growth uncertainty into a clear operating decision.
            </h2>
          </div>
          <div className="lg:col-span-3">
            <BookingCta inverted className="w-full" source="diagnostic_final_cta">
              Book a Growth Diagnostic
            </BookingCta>
            <BookingCta
              type="strategy"
              variant="secondary"
              source="diagnostic_final_cta_strategy"
              className="mt-3 w-full !border-white/30 !text-white hover:!bg-white hover:!text-ink"
            >
              Book a strategy call
            </BookingCta>
            <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-wider text-white/35">
              $1,250 · Five business days
            </p>
          </div>
        </div>
        <div className="mt-24 flex flex-col gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a href={sitePath("/")}>
            <BrandLockup inverse />
          </a>
          <div className="flex flex-wrap gap-6 text-sm text-white/45">
            <a href={sitePath("/#services")} className="hover:text-white">Growth System</a>
            <a href={sitePath("/#work")} className="hover:text-white">Client Outcomes</a>
            <a href="mailto:growth@masmgrowth.com" className="button-arrow flex items-center gap-2 hover:text-white">
              Contact <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function DiagnosticLanding() {
  return (
    <>
      <DiagnosticHeader />
      <main>
        <DiagnosticHero />
        <ProblemSection />
        <AssessmentSection />
        <DeliverablesSection />
        <ScorecardSection />
        <ProcessSection />
        <PricingSection />
        <GrowthEngineBridge />
        <FaqSection />
      </main>
      <FinalCta />
    </>
  );
}
