import { SectionHeading } from "./ui";

const principles = [
  {
    metric: "01",
    title: "Operators, not observers",
    copy: "Senior practitioners stay close to the work, from strategy through execution.",
  },
  {
    metric: "02",
    title: "Built around economics",
    copy: "Every decision maps back to margin, payback, velocity, and enterprise value.",
  },
  {
    metric: "03",
    title: "Systems over tactics",
    copy: "We solve for the whole growth engine, not another isolated channel optimization.",
  },
];

export function WhyMasm() {
  return (
    <section id="approach" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="dot-field absolute inset-0 opacity-20" />
      <div className="section-shell relative">
        <SectionHeading
          index="02"
          label="Why MASM"
          title={<>Your agency optimizes channels. <span className="text-white/40">We optimize the system.</span></>}
          light
        />
        <div className="mt-20 grid lg:grid-cols-12">
          <div className="border-y border-white/20 py-10 lg:col-span-4 lg:border-r lg:pr-12">
            <p className="max-w-sm text-xl leading-8 tracking-[-0.03em] text-white/70">
              Growth breaks when strategy, execution, and measurement live in
              separate rooms. MASM puts them on one operating model.
            </p>
            <div className="mt-16 flex items-end gap-3">
              <span className="text-7xl font-medium tracking-[-0.08em]">1</span>
              <span className="pb-2 text-sm text-white/45">integrated system</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            {principles.map((principle) => (
              <div
                key={principle.metric}
                className="group grid gap-4 border-b border-white/20 py-8 transition-colors hover:bg-white/[0.03] sm:grid-cols-12 sm:px-8"
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
