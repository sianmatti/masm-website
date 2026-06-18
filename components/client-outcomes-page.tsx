import { BookingCta } from "./booking-cta";
import { ArrowIcon, ButtonLink, SectionHeading } from "./ui";
import { clientOutcomes } from "@/lib/client-outcomes";

const featuredOutcome = clientOutcomes[0];
const supportingOutcomes = clientOutcomes.slice(1);

const transformationStages = [
  {
    label: "Before MASM",
    copy: featuredOutcome.problem,
  },
  {
    label: "Constraint identified",
    copy: featuredOutcome.constraint,
  },
  {
    label: "System rebuilt",
    copy: featuredOutcome.narrative,
  },
  {
    label: "Business impact",
    copy: featuredOutcome.impact,
  },
];

const judgmentCalls = [
  {
    signal: "More leads",
    verdict: "were not the answer",
    reason: "Revenue quality and payback were unclear.",
  },
  {
    signal: "More traffic",
    verdict: "was not the answer",
    reason: "Non-brand search demand was not converting consistently.",
  },
  {
    signal: "More reports",
    verdict: "were not the answer",
    reason: "Leadership needed one reliable measurement layer.",
  },
];

const method = [
  {
    title: "Diagnose the constraint",
    copy: "Separate the visible symptom from the commercial or operating constraint underneath it.",
  },
  {
    title: "Prioritize commercial impact",
    copy: "Evaluate decisions against revenue quality, margin, payback, and operating capacity.",
  },
  {
    title: "Connect the growth system",
    copy: "Bring acquisition, search, conversion, analytics, and automation into one decision model.",
  },
  {
    title: "Build execution capacity",
    copy: "Turn the diagnosis into a sequenced operating direction the business can act on.",
  },
];

function OutcomeSystemVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[31rem]"
      aria-label="Fragmented growth signals connected through one growth system"
    >
      <div className="absolute inset-[8%] rounded-full border border-ink/15" />
      <div className="absolute inset-[21%] rounded-full border border-ink/10" />
      <div className="absolute inset-[35%] grid place-items-center rounded-full bg-ink text-center text-white shadow-card">
        <div>
          <span className="block font-mono text-[8px] uppercase tracking-[0.24em] text-white/55 sm:text-[9px]">
            One operating model
          </span>
          <strong className="mt-2 block text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
            Growth System
          </strong>
        </div>
      </div>

      {[
        ["Revenue quality", "left-[1%] top-[20%]"],
        ["Search demand", "right-[0%] top-[18%]"],
        ["Decision clarity", "right-[0%] bottom-[18%]"],
        ["Operating capacity", "left-[0%] bottom-[20%]"],
      ].map(([label, position]) => (
        <span
          key={label}
          className={`absolute ${position} rounded-full border border-ink/20 bg-white px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] shadow-card sm:px-4 sm:text-[9px]`}
        >
          {label}
        </span>
      ))}

      <span className="absolute left-1/2 top-[4%] h-[31%] w-px -translate-x-1/2 bg-ink/15" />
      <span className="absolute bottom-[4%] left-1/2 h-[31%] w-px -translate-x-1/2 bg-ink/15" />
      <span className="absolute left-[4%] top-1/2 h-px w-[31%] -translate-y-1/2 bg-ink/15" />
      <span className="absolute right-[4%] top-1/2 h-px w-[31%] -translate-y-1/2 bg-ink/15" />
    </div>
  );
}

export function ClientOutcomesPage() {
  return (
    <main>
      <section className="overflow-hidden bg-paper">
        <div className="section-shell grid items-center gap-12 py-16 sm:py-20 lg:min-h-[calc(100vh-4.25rem)] lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-7">
            <span className="eyebrow">Growth Systems in Practice</span>
            <h1 className="display-xl mt-7 max-w-5xl text-balance">
              Growth problems are{" "}
              <span className="text-muted">system problems.</span>
            </h1>
            <p className="body-lead mt-8 max-w-2xl">
              Paid media, SEO, analytics, conversion, and automation do not fail
              independently. See how MASM identifies the constraint, rebuilds
              the system, and creates measurable commercial outcomes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <BookingCta source="client_outcomes_hero">
                Book a Growth Diagnostic
              </BookingCta>
              <ButtonLink href="#outcomes" variant="secondary">
                Explore the outcomes
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <OutcomeSystemVisual />
          </div>
        </div>
      </section>

      <section id="outcomes" className="border-y border-ink/15 bg-white">
        <div className="section-shell py-12 sm:py-16">
          <div className="grid gap-8 border-b border-ink/15 pb-7 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">Outcome ledger</span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                Evidence, at a glance.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                Selected anonymized engagement outcomes showing how connected
                growth systems can change commercial performance and operating
                capacity.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {clientOutcomes.flatMap((outcome) =>
              outcome.outcomes.map((metric) => (
                <article
                  key={`${outcome.id}-${metric.value}`}
                  className="border-b border-ink/15 py-8 sm:min-h-56 sm:border-r sm:px-7 sm:first:pl-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
                >
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    {outcome.type}
                  </span>
                  <strong className="mt-8 block text-5xl font-semibold tracking-[-0.07em] sm:text-6xl">
                    {metric.value}
                  </strong>
                  <span className="mt-3 block max-w-xs text-sm leading-6 text-muted">
                    {metric.label}
                  </span>
                </article>
              )),
            )}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="section-shell">
          <SectionHeading
            index="01"
            label="Featured transformation"
            title={
              <>
                Rebuilding acquisition around{" "}
                <span className="text-muted">revenue quality.</span>
              </>
            }
            description="A B2B SaaS growth system reframed around acquisition economics, measurement, and conversion quality."
          />

          <div className="mt-12 grid border border-ink/15 bg-white lg:mt-16 lg:grid-cols-12">
            <div className="p-6 sm:p-9 lg:col-span-4 lg:p-10">
              <span className="eyebrow">{featuredOutcome.type}</span>
              <p className="mt-5 font-mono text-[9px] uppercase tracking-wider text-muted">
                {featuredOutcome.engagement}
              </p>
              <div className="mt-10 grid grid-cols-2 gap-5 border-t border-ink/15 pt-7">
                {featuredOutcome.outcomes.map((metric) => (
                  <div key={metric.value}>
                    <strong className="block text-4xl font-semibold tracking-[-0.06em]">
                      {metric.value}
                    </strong>
                    <span className="mt-2 block text-xs leading-5 text-muted">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-9 border-t border-ink/15 pt-6">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                  MASM focus
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featuredOutcome.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink/15 px-3 py-1.5 text-[10px] font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-ink/15 lg:col-span-8 lg:border-l lg:border-t-0">
              {transformationStages.map((stage, index) => (
                <article
                  key={stage.label}
                  className="grid gap-5 border-b border-ink/15 p-6 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:p-8 lg:grid-cols-[4rem_12rem_1fr] lg:items-start"
                >
                  <span className="font-mono text-[10px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium tracking-[-0.03em]">
                    {stage.label}
                  </h3>
                  <p className="text-sm leading-7 text-muted">{stage.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="section-shell">
          <SectionHeading
            index="02"
            label="Supporting transformations"
            title={
              <>
                Different symptoms.{" "}
                <span className="text-muted">The same systems discipline.</span>
              </>
            }
            description="MASM evaluates the connected commercial system behind the visible channel problem."
          />

          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2">
            {supportingOutcomes.map((outcome, index) => (
              <article
                key={outcome.id}
                className={`flex flex-col border border-ink/15 p-6 sm:p-9 lg:p-10 ${
                  index === 1 ? "bg-paper" : "bg-white"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="eyebrow">{outcome.type}</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    {outcome.engagement}
                  </span>
                </div>
                <h3 className="heading-section mt-10 max-w-xl">{outcome.title}</h3>
                <div className="mt-8 grid grid-cols-2 gap-5 border-y border-ink/15 py-6">
                  {outcome.outcomes.map((metric) => (
                    <div key={metric.value}>
                      <strong className="block text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
                        {metric.value}
                      </strong>
                      <span className="mt-2 block text-xs leading-5 text-muted">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
                <dl className="mt-7 space-y-6 text-sm leading-7">
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-wider text-muted">
                      Starting constraint
                    </dt>
                    <dd className="mt-2">{outcome.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-wider text-muted">
                      Strategic diagnosis
                    </dt>
                    <dd className="mt-2">{outcome.constraint}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-wider text-muted">
                      Business impact
                    </dt>
                    <dd className="mt-2 text-muted">{outcome.impact}</dd>
                  </div>
                </dl>
                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap gap-2 border-t border-ink/15 pt-6">
                    {outcome.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-ink/15 px-3 py-1.5 text-[10px] font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-ink text-white">
        <div className="section-shell">
          <SectionHeading
            index="03"
            label="Strategic judgment"
            title={
              <>
                More activity is not always{" "}
                <span className="text-white/40">the answer.</span>
              </>
            }
            description="Premium growth work begins by refusing to optimize the wrong problem."
            light
          />

          <div className="mt-12 border-t border-white/20 lg:mt-16">
            {judgmentCalls.map((item, index) => (
              <article
                key={item.signal}
                className="grid gap-4 border-b border-white/20 py-7 sm:grid-cols-12 sm:items-center sm:py-9"
              >
                <span className="font-mono text-[10px] text-white/35 sm:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-medium tracking-[-0.04em] sm:col-span-4 sm:text-3xl">
                  {item.signal}
                </h3>
                <p className="text-base text-white/75 sm:col-span-3">
                  {item.verdict}
                </p>
                <p className="text-sm leading-6 text-white/45 sm:col-span-4">
                  {item.reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="section-shell">
          <SectionHeading
            index="04"
            label="MASM method"
            title={
              <>
                From visible symptom to{" "}
                <span className="text-muted">operating direction.</span>
              </>
            }
            description="A repeatable way to move from disconnected growth activity to a more accountable system."
          />

          <div className="mt-12 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {method.map((step, index) => (
              <article
                key={step.title}
                className="min-h-64 border-b border-r border-ink/15 bg-white p-6 sm:p-8"
              >
                <span className="font-mono text-[10px] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-12 text-xl font-medium tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted">{step.copy}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-4xl border-t border-ink/15 pt-5 font-mono text-[9px] uppercase leading-5 tracking-wider text-muted">
            Client names are withheld by agreement. Outcomes vary by company,
            market, execution, and starting point. Selected results reflect
            specific engagement circumstances and do not guarantee equivalent
            outcomes.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-shell py-16 sm:py-20 lg:py-24">
          <div className="grid items-end gap-10 border-t border-ink/20 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="eyebrow">Find the constraint</span>
              <h2 className="display-lg mt-6 max-w-5xl text-balance">
                Your growth system already has a constraint.{" "}
                <span className="text-muted">
                  The question is whether you can see it.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="mb-6 text-sm leading-6 text-muted">
                Start with a focused strategic assessment of the economics,
                decisions, and operating connections shaping your growth.
              </p>
              <BookingCta
                className="w-full"
                source="client_outcomes_final"
              >
                Book a Growth Diagnostic
              </BookingCta>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
