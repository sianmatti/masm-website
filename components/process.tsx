import { SectionHeading } from "./ui";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    copy: "Map the system, find the constraints, and quantify the opportunity.",
    duration: "Week 1–2",
  },
  {
    number: "02",
    title: "Design",
    copy: "Build the strategy, measurement model, and prioritized operating plan.",
    duration: "Week 2–3",
  },
  {
    number: "03",
    title: "Deploy",
    copy: "Launch, connect, and improve the highest-impact parts of the system.",
    duration: "Week 3+",
  },
  {
    number: "04",
    title: "Compound",
    copy: "Turn learnings into repeatable loops that make every next move smarter.",
    duration: "Ongoing",
  },
];

export function Process() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          index="03"
          label="Process"
          title={<>From fragmented activity to <span className="text-muted">compounding growth.</span></>}
        />
        <div className="mt-16 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group min-h-[350px] border-b border-r border-line p-6 transition-colors hover:bg-paper sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted">{step.number}</span>
                <span className="h-2 w-2 rounded-full border border-ink transition-colors group-hover:bg-ink" />
              </div>
              <div className="mt-24">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted">{step.duration}</span>
                <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em]">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
