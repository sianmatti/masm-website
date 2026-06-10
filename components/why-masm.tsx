import { SectionHeading } from "./ui";

const principles = [
  {
    metric: "01",
    title: "Senior operators stay involved",
    copy: "Strategy is not handed off after the sale. Senior practitioners remain close to decisions and execution.",
  },
  {
    metric: "02",
    title: "One accountable growth model",
    copy: "Paid, organic, data, and automation priorities are managed against the same commercial objectives.",
  },
  {
    metric: "03",
    title: "Built to create operating leverage",
    copy: "The goal is a more capable business, not permanent dependence on a growing list of agency deliverables.",
  },
];

export function WhyMasm() {
  return (
    <section id="approach" className="section-pad relative overflow-hidden bg-ink text-white">
      <div className="dot-field absolute inset-0 opacity-20" />
      <div className="section-shell relative">
        <SectionHeading
          index="03"
          label="Why MASM"
          title={<>Traditional agencies optimize activity. <span className="text-white/40">MASM optimizes the business system.</span></>}
          light
        />
        <div className="mt-14 grid lg:mt-16 lg:grid-cols-12">
          <div className="border-y border-white/20 py-9 lg:col-span-4 lg:border-r lg:pr-12">
            <p className="body-lead max-w-sm !text-white/70">
              MASM combines consulting discipline with hands-on execution.
              Leadership gets one view of the constraint, the priorities, and
              the economics behind every recommendation.
            </p>
            <div className="mt-12 flex items-end gap-3">
              <span className="text-6xl font-medium tracking-[-0.08em] sm:text-7xl">1</span>
              <span className="pb-2 text-sm text-white/45">accountable growth system</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            {principles.map((principle) => (
              <div
                key={principle.metric}
                className="group grid gap-4 border-b border-white/20 py-7 transition-colors hover:bg-white/[0.03] sm:grid-cols-12 sm:px-8"
              >
                <span className="font-mono text-[10px] text-white/35 sm:col-span-1">{principle.metric}</span>
                <h3 className="text-xl tracking-[-0.03em] sm:col-span-5">{principle.title}</h3>
                <p className="max-w-sm text-sm leading-6 text-white/50 sm:col-span-6">{principle.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
