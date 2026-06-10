import { BookingCta } from "./booking-cta";

function SystemGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[420px]" aria-hidden="true">
      <div className="absolute inset-[5%] rounded-full border border-ink/15" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-ink/30 animate-slow-spin" />
      <div className="absolute inset-[31%] rounded-full border border-ink/20" />
      <div className="absolute inset-[39%] grid place-items-center rounded-full bg-ink text-white shadow-card">
        <div className="text-center">
          <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-white/45">
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
          className={`absolute ${position} flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-2 shadow-card`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          <span className="text-[8px] font-medium tracking-[0.12em]">{label}</span>
        </div>
      ))}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 500">
        <path d="M250 54v145M414 165 301 221M435 296l-134-34M300 430l-35-131M75 250h126" stroke="#000000" strokeOpacity=".16" strokeDasharray="3 5" />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="grid-field relative overflow-hidden py-section-sm">
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

        <h1 className="display-xl max-w-[1280px] text-balance">
          Turn fragmented growth activity into one{" "}
          <span className="text-muted">scalable operating system.</span>
        </h1>

        <div className="mt-10 grid items-center gap-10 lg:mt-5 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="body-lead max-w-lg">
              MASM connects strategy, acquisition, analytics, AI automation,
              and business optimization into one operating model for
              profitable growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookingCta source="homepage_hero">
                Book a Diagnostic
              </BookingCta>
              <BookingCta
                source="homepage_hero_strategy"
                type="strategy"
                variant="secondary"
              >
                Book a strategy call
              </BookingCta>
            </div>
            <p className="mt-4 text-xs leading-5 text-muted">
              Start with a focused consultation. If there is a fit, MASM will
              recommend the right next step.
            </p>
            <p className="mt-6 border-l-2 border-ink pl-4 text-sm leading-6 text-muted">
              Built for founders and growth leaders who are investing across
              multiple channels but lack one clear operating model.
            </p>
          </div>
          <div className="lg:col-span-6">
            <SystemGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
