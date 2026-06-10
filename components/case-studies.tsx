import { ArrowIcon, SectionHeading } from "./ui";

const cases = [
  {
    type: "B2B SaaS / Growth system",
    title: "Rebuilding acquisition around revenue quality.",
    context:
      "Before MASM: acquisition reporting was channel-led, with limited visibility into lead quality and payback.",
    result: "2.7×",
    label: "pipeline efficiency",
    secondary: "−31% CAC",
    scope: "Acquisition economics · Measurement · CRO",
    theme: "bg-white",
  },
  {
    type: "Consumer / Organic search",
    title: "Turning search demand into a compounding channel.",
    context:
      "Before MASM: organic traffic existed, but non-brand search was not translating into consistent revenue.",
    result: "+184%",
    label: "non-brand revenue",
    secondary: "8 months",
    scope: "Technical SEO · Content system · Conversion",
    theme: "bg-paper",
  },
  {
    type: "Marketplace / Analytics",
    title: "Creating one source of truth for growth decisions.",
    context:
      "Before MASM: leadership relied on fragmented reports across platforms, creating slow and inconsistent growth decisions.",
    result: "14 hrs",
    label: "saved every week",
    secondary: "99.4% accuracy",
    scope: "Analytics architecture · Automation · Reporting",
    theme: "bg-white",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="section-pad bg-paper">
      <div className="section-shell">
        <SectionHeading
          index="02"
          label="Selected outcomes"
          title={<>Proof, measured in <span className="text-muted">business impact.</span></>}
          description="Anonymized engagement outcomes showing how connected growth systems change commercial performance."
        />
        <div className="mt-12 space-y-4 sm:mt-14">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className={`card-lift group grid overflow-hidden border border-ink/15 ${item.theme} md:grid-cols-12`}
            >
              <div className="flex flex-col justify-between p-7 sm:p-9 md:col-span-7 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-muted">0{index + 1}</span>
                  <span className="eyebrow">{item.type}</span>
                </div>
                <h3 className="mt-10 max-w-2xl text-[clamp(1.75rem,3.2vw,3rem)] font-medium leading-[1.08] tracking-[-0.04em] sm:mt-12">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl border-l border-ink/25 pl-4 text-sm leading-6 text-muted">
                  {item.context}
                </p>
                <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.12em] text-muted">
                  Scope: {item.scope}
                </p>
              </div>
              <div className="relative flex min-h-[230px] flex-col justify-between border-t border-ink/15 bg-paper/60 p-7 sm:p-9 md:col-span-5 md:border-l md:border-t-0 lg:p-10">
                <div className="absolute right-7 top-7 grid h-9 w-9 place-items-center rounded-full border border-ink/20 transition-colors group-hover:bg-ink group-hover:text-white">
                  <ArrowIcon className="h-4 w-4 -rotate-45" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted">Primary impact</span>
                <div className="mt-12">
                  <strong className="block text-6xl font-semibold tracking-[-0.08em] sm:text-7xl">{item.result}</strong>
                  <span className="mt-2 block text-sm text-muted">{item.label}</span>
                </div>
                <span className="mt-7 border-t border-ink/15 pt-4 font-mono text-[10px] uppercase tracking-wider">
                  Secondary impact · {item.secondary}
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 font-mono text-[9px] uppercase tracking-wider text-muted">
          Client names are withheld by agreement. Outcomes vary by company, market, and starting point.
        </p>
      </div>
    </section>
  );
}
