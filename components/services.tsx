import { ArrowIcon, SectionHeading } from "./ui";

const services = [
  {
    number: "01",
    title: "Performance",
    description:
      "Paid acquisition systems designed around contribution margin, not platform vanity metrics.",
    tags: ["Paid social", "Paid search", "CRO"],
    visual: <BarVisual />,
  },
  {
    number: "02",
    title: "Organic Search",
    description:
      "Technical and editorial SEO that turns demand capture into a durable compounding asset.",
    tags: ["Technical SEO", "Content", "Authority"],
    visual: <SearchVisual />,
  },
  {
    number: "03",
    title: "Analytics",
    description:
      "Decision-grade measurement that tells your team what happened, why, and what to do next.",
    tags: ["Attribution", "Dashboards", "Forecasting"],
    visual: <LineVisual />,
  },
  {
    number: "04",
    title: "Automation",
    description:
      "Connected workflows that move data, trigger actions, and remove costly manual operations.",
    tags: ["Lifecycle", "AI workflows", "RevOps"],
    visual: <NodeVisual />,
  },
];

function BarVisual() {
  return (
    <div className="flex h-32 items-end gap-2" aria-hidden="true">
      {[24, 40, 34, 55, 49, 76, 68, 94].map((height, index) => (
        <span
          key={index}
          className="flex-1 bg-ink"
          style={{ height: `${height}%`, opacity: 0.2 + index * 0.1 }}
        />
      ))}
    </div>
  );
}

function SearchVisual() {
  return (
    <div className="relative h-32 overflow-hidden border border-ink/15 bg-white p-3" aria-hidden="true">
      <div className="flex h-7 items-center gap-2 border-b border-ink/10">
        <span className="h-2.5 w-2.5 rounded-full border border-ink" />
        <span className="h-1.5 w-24 bg-ink/15" />
      </div>
      <div className="mt-4 space-y-3">
        <span className="block h-2 w-3/4 bg-ink" />
        <span className="block h-1.5 w-full bg-ink/15" />
        <span className="block h-1.5 w-5/6 bg-ink/15" />
        <span className="block h-2 w-1/2 bg-ink/60" />
      </div>
    </div>
  );
}

function LineVisual() {
  return (
    <svg className="h-32 w-full" viewBox="0 0 300 120" fill="none" aria-hidden="true">
      {[20, 50, 80, 110].map((y) => (
        <path key={y} d={`M0 ${y}h300`} stroke="#0a0a0a" strokeOpacity=".1" />
      ))}
      <path d="m0 103 38-9 35 5 42-30 38 8 47-45 45 11 55-32 40 4" stroke="#0a0a0a" strokeWidth="2" />
      <path d="m0 103 38-9 35 5 42-30 38 8 47-45 45 11 55-32 40 4V120H0Z" fill="url(#fade)" />
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="120">
          <stop stopColor="#0a0a0a" stopOpacity=".14" />
          <stop offset="1" stopColor="#0a0a0a" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function NodeVisual() {
  return (
    <div className="relative h-32" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 128">
        <path d="M45 64h75m30 0h75m-75 0v-37m0 37v37" stroke="#0a0a0a" strokeOpacity=".25" strokeDasharray="3 3" />
      </svg>
      {[
        "left-[4%] top-[39%]",
        "left-[42%] top-[39%]",
        "right-[4%] top-[39%]",
        "left-[42%] top-0",
        "bottom-0 left-[42%]",
      ].map((position, index) => (
        <span
          key={position}
          className={`absolute ${position} grid h-8 w-8 place-items-center border border-ink bg-paper font-mono text-[9px]`}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          index="01"
          label="Capabilities"
          title={<>Four disciplines. <span className="text-muted">One growth system.</span></>}
          description="We connect the parts most teams manage in isolation, so every channel gets smarter and more efficient over time."
        />
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="card-lift group min-h-[470px] border border-line bg-paper p-6 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-muted">{service.number}</span>
                <ArrowIcon className="h-5 w-5 -rotate-45 transition-transform group-hover:rotate-0" />
              </div>
              <div className="mt-12 border-b border-ink/15 pb-8">{service.visual}</div>
              <h3 className="mt-7 text-3xl font-medium tracking-[-0.05em]">{service.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted">{service.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-ink/15 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
