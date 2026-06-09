import { ButtonLink } from "./ui";

function SystemGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      <div className="absolute inset-[5%] rounded-full border border-ink/15" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-ink/30 animate-slow-spin" />
      <div className="absolute inset-[31%] rounded-full border border-ink/20" />
      <div className="absolute inset-[39%] grid place-items-center rounded-full bg-ink text-white shadow-2xl">
        <div className="text-center">
          <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
            Growth OS
          </span>
          <span className="mt-2 block text-2xl font-medium tracking-[-0.06em]">MASM</span>
        </div>
      </div>
      {[
        ["PERFORMANCE", "left-[3%] top-[46%]"],
        ["SEO", "right-[9%] top-[13%]"],
        ["ANALYTICS", "right-0 top-[58%]"],
        ["AUTOMATION", "bottom-[5%] left-[29%]"],
      ].map(([label, position]) => (
        <div
          key={label}
          className={`absolute ${position} flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-3 py-2 shadow-card`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          <span className="font-mono text-[8px] tracking-[0.12em]">{label}</span>
        </div>
      ))}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 500">
        <path d="M250 54v145M414 165 301 221M435 296l-134-34M300 430l-35-131M75 250h126" stroke="#0a0a0a" strokeOpacity=".16" strokeDasharray="3 5" />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="grid-field relative overflow-hidden pb-16 pt-36 sm:pt-44 lg:min-h-[900px] lg:pb-24">
      <div className="absolute inset-x-0 top-20 h-px bg-ink/10" />
      <div className="section-shell">
        <div className="mb-12 flex items-center gap-3">
          <span className="flex h-2 w-2 items-center justify-center rounded-full bg-ink">
            <span className="h-2 w-2 animate-ping rounded-full bg-ink" />
          </span>
          <span className="eyebrow">Growth systems consultancy</span>
          <span className="hidden h-px w-20 bg-ink/20 sm:block" />
          <span className="hidden font-mono text-[10px] text-muted sm:block">
            NEW YORK / MANILA / GLOBAL
          </span>
        </div>

        <h1 className="display-xl max-w-[1300px] font-medium text-balance">
          Growth, <span className="text-muted">engineered.</span>
        </h1>

        <div className="mt-12 grid items-end gap-12 lg:grid-cols-12 lg:mt-6">
          <div className="lg:col-span-5 lg:pb-8">
            <p className="max-w-lg text-lg leading-8 tracking-[-0.02em] text-muted sm:text-xl">
              Your growth channels should compound, not compete. We build the
              system that makes performance, search, data, and automation work
              as one.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/diagnostic">Explore the Growth Diagnostic</ButtonLink>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-ink/20 px-5 text-sm font-medium transition-colors hover:border-ink"
              >
                Explore capabilities
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <SystemGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
