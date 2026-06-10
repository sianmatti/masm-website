"use client";

import { useEffect, useState } from "react";
import { sitePath } from "@/lib/site";
import { BookingCta } from "./booking-cta";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
  ctaHref?: string;
  ctaLabel?: string;
  bookingCta?: boolean;
};

function BrandMark() {
  return (
    <span className="grid h-8 w-8 grid-cols-2 gap-[2px]" aria-hidden="true">
      <i className="bg-current" />
      <i className="border border-current" />
      <i className="border border-current" />
      <i className="bg-current" />
    </span>
  );
}

export function SiteHeader({
  navItems,
  ctaHref = sitePath("/diagnostic/"),
  ctaLabel = "View the diagnostic",
  bookingCta = false,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur-xl">
      <div className="section-shell flex h-[72px] items-center justify-between">
        <a href={sitePath("/")} className="flex items-center gap-3" aria-label="MASM homepage">
          <BrandMark />
          <span className="text-sm font-semibold tracking-[-0.03em]">
            MASM<span className="text-muted">/GS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {bookingCta ? (
            <BookingCta className="!h-10 !px-4" source="sticky_header">
              <span className="hidden sm:inline">{ctaLabel}</span>
              <span className="sm:hidden">Book a call</span>
            </BookingCta>
          ) : (
            <a
              href={ctaHref}
              className="button-arrow inline-flex h-10 items-center justify-center gap-2 rounded-full border border-ink bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              <span className="hidden sm:inline">{ctaLabel}</span>
              <span className="sm:hidden">Diagnostic</span>
              <span aria-hidden="true">→</span>
            </a>
          )}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="relative h-4 w-4">
              <i className={`absolute left-0 top-1 h-px w-4 bg-ink transition-transform ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
              <i className={`absolute bottom-1 left-0 h-px w-4 bg-ink transition-transform ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-ink/10 bg-paper transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="section-shell py-5" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-ink/10 py-4 text-lg font-medium tracking-[-0.03em]"
            >
              <span>{item.label}</span>
              <span className="font-mono text-[9px] text-muted">0{index + 1}</span>
            </a>
          ))}
          <div className="pt-5">
            {bookingCta ? (
              <BookingCta className="w-full" source="mobile_menu">
                {ctaLabel}
              </BookingCta>
            ) : (
              <a
                href={ctaHref}
                onClick={() => setMenuOpen(false)}
                className="button-arrow inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-ink bg-ink px-5 text-sm font-medium text-white"
              >
                {ctaLabel} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
