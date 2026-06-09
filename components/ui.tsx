import type { ReactNode } from "react";

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

export function PlusIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  inverted?: boolean;
  className?: string;
};

export function ButtonLink({
  children,
  href,
  inverted = false,
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`button-arrow inline-flex h-12 items-center justify-center gap-3 rounded-full border px-5 text-sm font-medium transition-colors ${
        inverted
          ? "border-white/20 bg-white text-ink hover:bg-white/90"
          : "border-ink bg-ink text-white hover:bg-neutral-800"
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
        <h2 className="display-lg max-w-5xl font-medium text-balance">{title}</h2>
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
