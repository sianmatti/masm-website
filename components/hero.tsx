import { BookingCta } from "./booking-cta";

function SystemGraphic() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[270px] sm:max-w-[300px] lg:max-w-[330px]"
      aria-hidden="true"
    >
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
        ["PERFORMANCE", "-left-[4%] top-[46%]"],
        ["SEO", "right-[7%] top-[11%]"],
        ["ANALYTICS", "-right-[4%] top-[58%]"],
        ["AUTOMATION", "bottom-[3%] left-[27%]"],
      ].map(([label, position]) => (
        <div
          key={label}
          className={`absolute ${position} flex items-center gap-2 rounded-full border border-line bg-white px-2.5 py-1.5 shadow-card sm:px-3 sm:py-2`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          <span className="text-[7px] font-medium tracking-[0.12em] sm:text-[8px]">{label}</span>
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
    <section className="grid-field relative overflow-hidden pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
      <div className="section-shell">
        <div className="mb-7 flex items-center gap-3 sm:mb-8">
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

        <div className="mt-8 grid items-center gap-10 md:grid-cols-12 md:gap-6 lg:mt-7 lg:gap-10">
          <div className="md:col-span-7 lg:col-span-7">
            <p className="body-lead max-w-lg">
              MASM connects strategy, acquisition, analytics, AI automation,
              and business optimization into one operating model for
              profitable growth.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
            <p className="mt-5 max-w-xl border-l-2 border-ink pl-4 text-sm leading-6 text-muted">
              Built for founders and growth leaders who are investing across
              multiple channels but lack one clear operating model.
            </p>
          </div>
          <div className="md:col-span-5 lg:col-span-5">
            <SystemGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
