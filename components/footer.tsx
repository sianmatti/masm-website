import { ArrowIcon, BrandLockup } from "./ui";
import { BookingCta } from "./booking-cta";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-white">
      <div className="section-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <span className="eyebrow !text-white/45">Ready when you are</span>
            <h2 className="display-lg mt-8 max-w-5xl">
              Build a growth system that gets smarter every quarter.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-3">
            <BookingCta inverted className="w-full" source="homepage_footer">
              Book a Diagnostic
            </BookingCta>
            <BookingCta
              type="strategy"
              variant="secondary"
              source="homepage_footer_strategy"
              className="w-full !border-white/30 !text-white hover:!bg-white hover:!text-ink"
            >
              Book a strategy call
            </BookingCta>
            <p className="text-center text-xs leading-5 text-white/45">
              No generic sales pitch. Start with the business constraint.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-white/20 pt-8 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandLockup inverse />
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
              Performance, SEO, analytics, and automation engineered as one.
            </p>
          </div>
          <div className="lg:col-span-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/35">Navigate</span>
            <div className="mt-4 space-y-3">
              {[
                ["Diagnostic", "#diagnostic"],
                ["Growth System", "#services"],
                ["Client Outcomes", "#work"],
                ["Why MASM", "#approach"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="block text-sm text-white/65 hover:text-white">
                  {label}
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
      <div className="select-none whitespace-nowrap text-center text-[22vw] font-semibold leading-[0.72] tracking-[-0.075em] text-white/[0.04]">
        MASM
      </div>
    </footer>
  );
}
