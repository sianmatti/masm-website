import { ArrowIcon, SectionHeading } from "./ui";

const services = [
  {
    number: "01",
    title: "Strategy & Economics",
    description:
      "Align growth priorities to commercial reality so investment follows margin, payback, and the highest-value constraint.",
    tags: ["Growth strategy", "Unit economics", "Business optimization"],
    visual: <BarVisual />,
  },
  {
    number: "02",
    title: "Acquisition",
    description:
      "Build paid and organic demand systems that improve revenue quality, conversion, and durable market visibility.",
    tags: ["Performance marketing", "SEO", "CRO"],
    visual: <SearchVisual />,
  },
  {
    number: "03",
    title: "Growth Intelligence",
    description:
      "Create decision-grade measurement that shows what happened, why it happened, and where to allocate resources next.",
    tags: ["Attribution", "Dashboards", "Forecasting"],
    visual: <LineVisual />,
  },
  {
    number: "04",
    title: "AI Automation",
    description:
      "Connect data, lifecycle, and operating workflows to remove manual drag and create scalable execution capacity.",
    tags: ["AI workflows", "Lifecycle", "Operating leverage"],
    visual: <NodeVisual />,
  },
];

function BarVisual() {
  return (
    <div className="flex h-24 items-end gap-2" aria-hidden="true">
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
    <div className="relative h-24 overflow-hidden border border-ink/15 bg-white p-3" aria-hidden="true">
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
    <svg className="h-24 w-full" viewBox="0 0 300 120" fill="none" aria-hidden="true">
      {[20, 50, 80, 110].map((y) => (
        <path key={y} d={`M0 ${y}h300`} stroke="#000000" strokeOpacity=".1" />
      ))}
      <path d="m0 103 38-9 35 5 42-30 38 8 47-45 45 11 55-32 40 4" stroke="#000000" strokeWidth="2" />
      <path d="m0 103 38-9 35 5 42-30 38 8 47-45 45 11 55-32 40 4" stroke="#000" strokeOpacity=".18" strokeWidth="8" />
    </svg>
  );
}

function NodeVisual() {
  return (
    <div className="relative h-24" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 128">
        <path d="M45 64h75m30 0h75m-75 0v-37m0 37v37" stroke="#000000" strokeOpacity=".25" strokeDasharray="3 3" />
      </svg>
      {[
        ["IN", "left-[4%] top-[34%]"],
        ["AI", "left-[42%] top-[34%]"],
        ["OUT", "right-[4%] top-[34%]"],
        ["CRM", "left-[42%] top-0"],
        ["OPS", "bottom-0 left-[42%]"],
      ].map(([label, position]) => (
        <span
          key={label}
          className={`absolute ${position} grid h-8 w-8 place-items-center border border-ink bg-paper font-mono text-[7px]`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="section-shell">
        <SectionHeading
          index="01"
          label="The Growth System"
          title={<>Four connected systems. <span className="text-muted">One commercial outcome.</span></>}
          description="MASM does not sell disconnected channel retainers. We connect strategy, acquisition, intelligence, and automation around profitable growth."
        />
        <div className="mt-10 border border-ink/15 bg-paper p-5 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-6">
          <p className="max-w-3xl text-sm leading-6 text-muted">
            Each system informs the next, so decisions, demand generation,
            reporting, and automation operate from the same commercial model.
          </p>
          <div className="mt-4 flex items-center sm:mt-0" aria-hidden="true">
            {services.map((service, index) => (
              <div key={service.number} className="flex items-center">
                <span className="h-2 w-2 rounded-full border border-ink bg-white" />
                {index < services.length - 1 ? <span className="h-px w-7 bg-ink/25 sm:w-9" /> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid border-l border-t border-line md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group min-h-[390px] border-b border-r border-line bg-white p-6 transition-colors hover:bg-paper sm:p-8 lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-muted">{service.number}</span>
                <ArrowIcon className="h-5 w-5 -rotate-45 transition-transform group-hover:rotate-0" />
              </div>
              <div className="mt-8 border-b border-ink/15 pb-6">{service.visual}</div>
              <h3 className="heading-card mt-6">{service.title}</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-muted">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
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
