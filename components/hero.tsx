import { ButtonLink } from "./ui";
import { sitePath } from "@/lib/site";

function SystemGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[420px]" aria-hidden="true">
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
    <section className="grid-field relative overflow-hidden pb-12 pt-14 sm:pb-16 sm:pt-16 lg:pb-14 lg:pt-16">
      <div className="section-shell">
        <div className="mb-8 flex items-center gap-3 sm:mb-10">
          <span className="flex h-2 w-2 items-center justify-center rounded-full bg-ink">
            <span className="h-2 w-2 animate-ping rounded-full bg-ink" />
          </span>
          <span className="eyebrow">Growth systems consultancy</span>
          <span className="hidden h-px w-20 bg-ink/20 sm:block" />
          <span className="hidden font-mono text-[10px] text-muted sm:block">
            NEW YORK / MANILA / GLOBAL
          </span>
        </div>

        <h1 className="max-w-[1200px] text-[clamp(3.6rem,7.7vw,7.4rem)] font-medium leading-[0.88] tracking-[-0.075em] text-balance">
          Growth, <span className="text-muted">engineered.</span>
        </h1>

        <div className="mt-10 grid items-center gap-10 lg:mt-5 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="max-w-lg text-lg leading-8 tracking-[-0.02em] text-muted sm:text-xl">
              Your growth channels should compound, not compete. We build the
              system that makes performance, search, data, and automation work
              as one.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={sitePath("/diagnostic/")}>Explore the Growth Diagnostic</ButtonLink>
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-full border border-ink/20 px-5 text-sm font-medium transition-colors hover:border-ink"
              >
                See client outcomes
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <SystemGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
