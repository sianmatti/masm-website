import { SectionHeading } from "./ui";

const steps = [
  {
    number: "01",
    title: "Consultation",
    copy: "Clarify the business context, current growth constraint, and whether MASM is the right fit.",
    duration: "30 minutes",
  },
  {
    number: "02",
    title: "Growth Diagnostic",
    copy: "Assess the system and turn fragmented signals into a prioritized 90-day direction.",
    duration: "5 business days",
  },
  {
    number: "03",
    title: "Decision & Proposal",
    copy: "Review the evidence, agree on priorities, and define the right execution model when there is a fit.",
    duration: "Leadership readout",
  },
  {
    number: "04",
    title: "Growth Engine",
    copy: "MASM helps implement, operate, and improve the highest-value parts of the growth system.",
    duration: "$2.5k–$5k+ / month",
  },
];

export function Process() {
  return (
    <section className="section-pad bg-white">
      <div className="section-shell">
        <SectionHeading
          index="04"
          label="Process"
          title={<>A clear path from first conversation to <span className="text-muted">compounding growth.</span></>}
        />
        <div className="mt-12 grid border-l border-t border-line sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group flex min-h-[290px] flex-col justify-between border-b border-r border-line p-6 transition-colors hover:bg-paper sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted">{step.number}</span>
                <span className="h-2 w-2 rounded-full border border-ink transition-colors group-hover:bg-ink" />
              </div>
              <div className="mt-14">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted">{step.duration}</span>
                <h3 className="heading-card mt-4">{step.title}</h3>
                <p className="body-small mt-4">{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
          The Diagnostic creates the evidence base. A Growth Engine proposal is
          made only when ongoing execution is the commercially sensible next step.
        </p>
      </div>
    </section>
  );
}
