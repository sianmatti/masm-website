"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { calendlyEmbedUrl, calendlyUrl } from "@/lib/calendly";
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
  children = "Book a Diagnostic",
  className = "",
  inverted = false,
  source = "website",
  type = "diagnostic",
  variant = "primary",
}: BookingCtaProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  const closeCalendly = () => setIsOpen(false);

  const openCalendly = () => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const url = new URL(calendlyUrl);
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
        ref={triggerRef}
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

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center overscroll-none bg-ink/80 p-3 backdrop-blur-sm sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-label={
                type === "strategy"
                  ? "Book a strategy call"
                  : "Book a Diagnostic"
              }
              onClick={(event) => {
                if (event.currentTarget === event.target) closeCalendly();
              }}
            >
              <div
                className="relative h-[min(820px,90vh)] w-full max-w-5xl overflow-hidden border border-white/20 bg-paper shadow-modal"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative z-20 flex h-14 items-center justify-between border-b border-ink/15 bg-white px-5">
                  <div>
                    <span className="eyebrow">
                      {type === "strategy"
                        ? "MASM strategy call"
                        : "Growth Diagnostic"}
                    </span>
                    <span className="ml-3 hidden text-xs text-muted sm:inline">
                      Choose a time that works for you
                    </span>
                  </div>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={closeCalendly}
                    className="relative z-20 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-white text-xl leading-none transition-colors hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    aria-label="Close booking window"
                  >
                    ×
                  </button>
                </div>
                <iframe
                  title={
                    type === "strategy"
                      ? "Schedule a MASM strategy call"
                      : "Schedule a Growth Diagnostic"
                  }
                  src={calendlyEmbedUrl()}
                  className="relative z-0 block h-[calc(100%-3.5rem)] w-full"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
