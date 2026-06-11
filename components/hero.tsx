import { BookingCta } from "./booking-cta";

function SystemGraphic() {
  const inputs = ["Performance", "SEO", "Analytics", "Automation"];
  const outputs = ["Cleaner decisions", "Better payback", "Scalable execution"];

  return (
    <div
      className="relative mx-auto grid h-[260px] w-full max-w-[390px] grid-cols-[1fr_112px_1fr] items-center gap-3"
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 390 260">
        <path d="M112 54h54M112 103h54M112 152h54M112 201h54M224 78h54M224 130h54M224 182h54" stroke="#000" strokeOpacity=".18" strokeDasharray="3 5" />
      </svg>
      <div className="relative z-10 space-y-3">
        <span className="block font-mono text-[8px] font-medium uppercase tracking-[0.14em] text-muted">
          Fragmented inputs
        </span>
        {inputs.map((label) => (
          <div key={label} className="border border-ink/15 bg-white px-3 py-2 text-[10px] font-medium">
            {label}
          </div>
        ))}
      </div>
      <div className="relative z-10 grid aspect-square place-items-center rounded-full bg-ink px-3 text-center text-white shadow-card">
        <div>
          <span className="block text-[8px] font-semibold uppercase tracking-[0.16em]">
            MASM Growth OS
          </span>
          <span className="mx-auto my-3 block h-px w-10 bg-white/25" />
          <span className="block text-[8px] leading-4 text-white/65">
            Strategy<br />Economics<br />Operating model
          </span>
        </div>
      </div>
      <div className="relative z-10 space-y-3">
        <span className="block font-mono text-[8px] font-medium uppercase tracking-[0.14em] text-muted">
          Commercial outputs
        </span>
        {outputs.map((label) => (
          <div key={label} className="border border-ink/15 bg-paper px-3 py-3 text-[10px] font-medium">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="grid-field relative overflow-hidden pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-11">
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
              MASM helps growth-stage companies align acquisition, SEO,
              analytics, AI automation, and business optimization into one
              operating model — so spend, decisions, and execution compound
              instead of competing.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <BookingCta source="homepage_hero">
                Book a Growth Diagnostic
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
              Not sure where to start? Book a strategy call first.
            </p>
            <p className="mt-5 max-w-xl border-l-2 border-ink pl-4 text-sm leading-6 text-muted">
              For founders and growth leaders spending across multiple channels
              but still lacking one clear view of what is working, what is
              wasting money, and what to fix next.
            </p>
          </div>
          <div className="hidden sm:block md:col-span-5 lg:col-span-5">
            <SystemGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
