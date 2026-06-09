import { ArrowIcon, SectionHeading } from "./ui";

const cases = [
  {
    type: "B2B SaaS / Growth system",
    title: "Rebuilding acquisition around revenue quality.",
    result: "2.7×",
    label: "pipeline efficiency",
    secondary: "−31% CAC",
    theme: "bg-[#e8e8e3]",
  },
  {
    type: "Consumer / Organic search",
    title: "Turning search demand into a compounding channel.",
    result: "+184%",
    label: "non-brand revenue",
    secondary: "8 months",
    theme: "bg-[#d8d8d2]",
  },
  {
    type: "Marketplace / Analytics",
    title: "Creating one source of truth for growth decisions.",
    result: "14 hrs",
    label: "saved every week",
    secondary: "99.4% accuracy",
    theme: "bg-[#c5c5be]",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="bg-paper py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          index="04"
          label="Selected outcomes"
          title={<>Proof, measured in <span className="text-muted">business impact.</span></>}
          description="Representative engagements across SaaS, consumer, and marketplace businesses."
        />
        <div className="mt-16 space-y-4">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className={`card-lift group grid min-h-[320px] overflow-hidden border border-ink/15 ${item.theme} lg:grid-cols-12`}
            >
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-muted">0{index + 1}</span>
                  <span className="eyebrow">{item.type}</span>
                </div>
                <h3 className="mt-16 max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-5xl">
                  {item.title}
                </h3>
              </div>
              <div className="relative flex min-h-[250px] flex-col justify-between border-t border-ink/15 p-7 sm:p-10 lg:col-span-5 lg:border-l lg:border-t-0">
                <div className="absolute right-8 top-8 grid h-10 w-10 place-items-center rounded-full border border-ink/20 transition-colors group-hover:bg-ink group-hover:text-white">
                  <ArrowIcon className="h-4 w-4 -rotate-45" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted">Primary impact</span>
                <div className="mt-16">
                  <strong className="block text-6xl font-medium tracking-[-0.08em] sm:text-7xl">{item.result}</strong>
                  <span className="mt-2 block text-sm text-muted">{item.label}</span>
                </div>
                <span className="mt-8 border-t border-ink/15 pt-4 font-mono text-[10px]">{item.secondary}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 font-mono text-[9px] uppercase tracking-wider text-muted">
          Client names withheld by agreement. Results vary by company, market, and starting point.
        </p>
      </div>
    </section>
  );
}
