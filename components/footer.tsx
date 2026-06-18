import { growthDiagnosticEmailUrl } from "@/lib/contact";
import { sitePath } from "@/lib/site";
import { ArrowIcon, BrandLockup } from "./ui";
import { BookingCta } from "./booking-cta";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-white">
      <div className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <span className="eyebrow !text-white/45">Ready when you are</span>
            <h2 className="display-lg mt-6 max-w-5xl">
              Ready to find the constraint limiting profitable growth?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
              Start with a focused fit review. If the Diagnostic is the right
              next step, MASM will confirm scope, materials, and timing before
              the engagement begins.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-3">
            <BookingCta inverted className="w-full" source="homepage_footer">
              Book a Growth Diagnostic
            </BookingCta>
            <a
              href={growthDiagnosticEmailUrl}
              className="button-secondary w-full !border-white/30 !text-white hover:!bg-white hover:!text-ink"
            >
              Email us <ArrowIcon />
            </a>
            <p className="text-center text-xs leading-5 text-white/45">
              No generic sales pitch. Start with the business constraint.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/20 pt-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-12">
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
                ["Diagnostic", sitePath("/#diagnostic")],
                ["Growth System", sitePath("/#services")],
                ["Client Outcomes", sitePath("/work/")],
                ["Why MASM", sitePath("/#approach")],
              ].map(([label, href]) => (
                <a key={label} href={href} className="block text-sm text-white/65 hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/35">Connect</span>
            <div className="mt-4 flex flex-col items-start gap-3">
              <a href="mailto:info@masmgrowth.com" className="button-arrow inline-flex w-fit max-w-full items-center gap-2 text-left text-sm text-white/65 hover:text-white">
                <span>Email us</span>
                <ArrowIcon className="h-4 w-4 shrink-0" />
              </a>
              <BookingCta
                variant="secondary"
                source="homepage_footer_fit"
                className="!min-h-0 !w-fit !max-w-full !justify-start !border-0 !px-0 !py-0 !text-left !text-sm !text-white/65 hover:!bg-transparent hover:!text-white [&>svg]:hidden"
              >
                <span>
                  Book a Growth{" "}
                  <span className="inline-flex items-center gap-2 whitespace-nowrap">
                    Diagnostic
                    <ArrowIcon className="h-4 w-4 shrink-0" />
                  </span>
                </span>
              </BookingCta>
            </div>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/35">Operating globally</span>
            <p className="mt-4 text-sm text-white/65">New York / Manila / Remote</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 font-mono text-[9px] uppercase tracking-wider text-white/30 sm:flex-row sm:justify-between">
          <span>© 2026 MASM Growth Systems</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href={sitePath("/privacy/")} className="transition-colors hover:text-white/60">
              Privacy Policy
            </a>
            <a href={sitePath("/terms/")} className="transition-colors hover:text-white/60">
              Terms of Use
            </a>
            <span>Growth, engineered.</span>
          </span>
        </div>
      </div>
      <div className="select-none whitespace-nowrap text-center text-[22vw] font-semibold leading-[0.72] tracking-[-0.075em] text-white/[0.04]">
        MASM
      </div>
    </footer>
  );
}
