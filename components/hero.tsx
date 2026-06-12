import { growthDiagnosticEmailUrl } from "@/lib/contact";
import { BookingCta } from "./booking-cta";
import { ButtonLink } from "./ui";

function SystemGraphic() {
  return (
    <figure className="mx-auto w-full max-w-[200px] sm:max-w-[280px] lg:max-w-[340px]">
      <div className="relative aspect-square w-full" aria-hidden="true">
        <div className="absolute inset-[5%] rounded-full border border-ink/15" />
        <div className="absolute inset-[18%] animate-slow-spin rounded-full border border-dashed border-ink/25" />
        <div className="absolute inset-[31%] rounded-full border border-ink/20" />
        <div className="absolute left-1/2 top-1/2 z-10 grid h-[35%] w-[35%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink px-3 text-center text-white shadow-card">
          <div className="flex flex-col items-center justify-center">
            <span className="block whitespace-nowrap text-[6px] font-medium uppercase leading-none tracking-[0.14em] text-white/70 sm:text-[8px] sm:tracking-[0.15em]">
              Growth OS
            </span>
            <span className="my-2 block h-px w-6 bg-white/30 sm:my-2.5 sm:w-8" />
            <strong className="block whitespace-nowrap text-sm font-semibold leading-none tracking-[-0.04em] sm:text-lg">
              MASM
            </strong>
          </div>
        </div>
        {[
          ["SEO", "right-[72%] top-[43%]"],
          ["Performance", "right-[9%] top-[10%]"],
          ["Analytics", "left-[72%] top-[59%]"],
          ["Automation", "bottom-[4%] left-[26%]"],
        ].map(([label, position]) => (
          <div
            key={label}
            className={`absolute ${position} z-20 flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/95 px-2.5 py-1.5 shadow-card backdrop-blur-sm sm:gap-2 sm:px-3 sm:py-2`}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
            <span className="whitespace-nowrap text-[7px] font-medium uppercase tracking-[0.08em] sm:text-[9px] sm:tracking-[0.1em]">
              {label}
            </span>
          </div>
        ))}
      </div>
      <figcaption className="mx-auto mt-2.5 max-w-[210px] text-center text-[9px] leading-[1.55] text-ink/45 sm:mt-3 sm:max-w-[250px] sm:text-[10px] sm:leading-[1.6]">
        Fragmented growth inputs organized into one operating system.
      </figcaption>
    </figure>
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

        <div className="mt-8 grid items-center gap-6 md:grid-cols-12 md:gap-6 lg:mt-7 lg:gap-10">
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
              <ButtonLink href={growthDiagnosticEmailUrl} variant="secondary">
                Email us
              </ButtonLink>
            </div>
            <p className="mt-4 text-xs leading-5 text-muted">
              Start with a focused strategy call to confirm whether the Growth
              Diagnostic is the right next step.
            </p>
            <p className="mt-5 max-w-xl border-l-2 border-ink pl-4 text-sm leading-6 text-muted">
              For founders and growth leaders spending across multiple channels
              but still lacking one clear view of what is working, what is
              wasting money, and what to fix next.
            </p>
          </div>
          <div className="mt-1 md:col-span-5 md:mt-0 lg:col-span-5">
            <SystemGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
