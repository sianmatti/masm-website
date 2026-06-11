import type { ReactNode } from "react";
import { sitePath } from "@/lib/site";

export function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      className={className}
      src={sitePath("/masm-mark.svg")}
      alt="MASM Growth Systems"
      width="48"
      height="48"
    />
  );
}

export function BrandLockup({
  inverse = false,
  compact = false,
}: {
  inverse?: boolean;
  compact?: boolean;
}) {
  return (
    <span className={`flex items-center ${compact ? "gap-2 sm:gap-3" : "gap-3.5"}`}>
      <BrandMark className={compact ? "h-9 w-9 shrink-0 sm:h-10 sm:w-10" : "h-12 w-12 shrink-0"} />
      <span className={`${compact ? "hidden min-[430px]:block" : "block"} border-l border-current/20 ${compact ? "pl-3" : "pl-3.5"}`}>
        <strong className={`block font-semibold leading-none ${compact ? "text-[13px] tracking-[0.2em] sm:text-sm sm:tracking-[0.24em]" : "text-base tracking-[0.24em]"}`}>
          MASM
        </strong>
        <span
          className={`mt-1 block font-medium uppercase leading-none ${compact ? "text-[7px] tracking-[0.28em] sm:tracking-[0.32em]" : "text-[7px] tracking-[0.32em]"} ${
            inverse ? "text-white/55" : "text-muted"
          }`}
        >
          Growth Systems
        </span>
      </span>
    </span>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  inverted?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  children,
  href,
  inverted = false,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${
        inverted
          ? "button-inverse"
          : variant === "secondary"
            ? "button-secondary"
            : "button-primary"
      } ${className}`}
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  light = false,
}: {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div
      className={`grid gap-7 border-t pt-5 lg:grid-cols-12 ${
        light ? "border-white/20" : "border-ink/20"
      }`}
    >
      <div className="flex items-start gap-4 lg:col-span-3">
        <span className={`font-mono text-[10px] ${light ? "text-white/40" : "text-muted"}`}>
          {index}
        </span>
        <span className={`eyebrow ${light ? "!text-white/60" : ""}`}>{label}</span>
      </div>
      <div className="lg:col-span-9">
        <h2 className="display-lg max-w-5xl text-balance">{title}</h2>
        {description ? (
          <p
            className={`mt-7 max-w-xl text-base leading-7 ${
              light ? "text-white/55" : "text-muted"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
