"use client";

import { useEffect, useState } from "react";
import { calendlyEmbedUrl, calendlyUrl, strategyCallUrl } from "@/lib/calendly";
import { ArrowIcon } from "./ui";

type BookingCtaProps = {
  children?: React.ReactNode;
  className?: string;
  inverted?: boolean;
  source?: string;
  type?: "diagnostic" | "strategy";
  variant?: "primary" | "secondary";
};

export function BookingCta({
  children = "Book a diagnostic call",
  className = "",
  inverted = false,
  source = "website",
  type = "diagnostic",
  variant = "primary",
}: BookingCtaProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const openCalendly = () => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const bookingUrl = type === "strategy" ? strategyCallUrl : calendlyUrl;
    const url = new URL(bookingUrl);
    url.searchParams.set("utm_source", "masm_website");
    url.searchParams.set("utm_campaign", source);

    if (isMobile) {
      window.open(url.toString(), "_blank", "noopener,noreferrer");
      return;
    }

    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openCalendly}
        className={`${
          inverted
            ? "button-inverse"
            : variant === "secondary"
              ? "button-secondary"
              : "button-primary"
        } ${className}`}
        data-booking-source={source}
      >
        {children}
        <ArrowIcon />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] hidden items-center justify-center bg-ink/80 p-6 backdrop-blur-sm md:flex"
          role="dialog"
          aria-modal="true"
          aria-label={type === "strategy" ? "Book a strategy call" : "Book a Growth Diagnostic consultation"}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setIsOpen(false);
          }}
        >
          <div className="relative h-[min(820px,90vh)] w-full max-w-5xl overflow-hidden border border-white/20 bg-paper shadow-modal">
            <div className="flex h-14 items-center justify-between border-b border-ink/15 bg-white px-5">
              <div>
                <span className="eyebrow">
                  {type === "strategy" ? "MASM strategy call" : "Growth Diagnostic consultation"}
                </span>
                <span className="ml-3 hidden text-xs text-muted sm:inline">
                  Choose a time that works for you
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full border border-line text-lg transition-colors hover:bg-ink hover:text-white"
                aria-label="Close booking window"
              >
                ×
              </button>
            </div>
            <iframe
              title={type === "strategy" ? "Schedule a MASM strategy call" : "Schedule a Growth Diagnostic consultation"}
              src={calendlyEmbedUrl(type === "strategy" ? strategyCallUrl : calendlyUrl)}
              className="h-[calc(100%-3.5rem)] w-full"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
