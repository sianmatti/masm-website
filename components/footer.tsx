import { ArrowIcon, ButtonLink } from "./ui";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-white">
      <div className="section-shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <span className="eyebrow !text-white/45">Ready when you are</span>
            <h2 className="mt-8 max-w-5xl text-5xl font-medium leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              Build a growth system that gets smarter every quarter.
            </h2>
          </div>
          <div className="flex items-end lg:col-span-3">
            <ButtonLink href="/diagnostic" inverted className="w-full sm:w-auto lg:w-full">
              Book a diagnostic
            </ButtonLink>
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-white/20 pt-8 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 grid-cols-2 gap-[2px]">
                <i className="bg-white" />
                <i className="border border-white" />
                <i className="border border-white" />
                <i className="bg-white" />
              </span>
              <span className="text-sm font-semibold">MASM Growth Systems</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
              Performance, SEO, analytics, and automation engineered as one.
            </p>
          </div>
          <div className="lg:col-span-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/35">Navigate</span>
            <div className="mt-4 space-y-3">
              {["Services", "Approach", "Work"].map((item) => (
                <a key={item} href={`#${item === "Approach" ? "approach" : item.toLowerCase()}`} className="block text-sm text-white/65 hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/35">Connect</span>
            <a href="mailto:growth@masmgrowth.com" className="button-arrow mt-4 flex items-center gap-2 text-sm text-white/65 hover:text-white">
              Email us <ArrowIcon />
            </a>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/35">Operating globally</span>
            <p className="mt-4 text-sm text-white/65">New York / Manila / Remote</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 font-mono text-[9px] uppercase tracking-wider text-white/30 sm:flex-row sm:justify-between">
          <span>© 2026 MASM Growth Systems</span>
          <span>Growth, engineered.</span>
        </div>
      </div>
      <div className="select-none whitespace-nowrap text-center text-[22vw] font-medium leading-[0.72] tracking-[-0.09em] text-white/[0.04]">
        MASM
      </div>
    </footer>
  );
}
