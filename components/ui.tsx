import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

export function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 54V10l24 24 24-24v44M18 54V31l14 14 14-14v23M28 51l4 4 4-4-4-4-4 4Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="miter"
      />
    </svg>
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
    <span className={`flex items-center ${compact ? "gap-2.5" : "gap-3.5"}`}>
      <BrandMark className={compact ? "h-8 w-8" : "h-10 w-10"} />
      <span className="block border-l border-current/20 pl-3">
        <strong className="block text-sm font-semibold tracking-[0.24em]">
          MASM
        </strong>
        <span
          className={`mt-0.5 block text-[7px] font-medium uppercase tracking-[0.32em] ${
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

type FieldBaseProps = {
  label: string;
  name: string;
  helpText?: string;
};

export function FormField({
  label,
  name,
  helpText,
  ...props
}: FieldBaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const helpId = helpText ? `${name}-help` : undefined;

  return (
    <label className="block" htmlFor={name}>
      <span className="form-label">{label}</span>
      <input
        {...props}
        id={name}
        name={name}
        className={`form-control ${props.className ?? ""}`}
        aria-describedby={helpId}
      />
      {helpText ? (
        <span id={helpId} className="form-help">
          {helpText}
        </span>
      ) : null}
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  helpText,
  ...props
}: FieldBaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const helpId = helpText ? `${name}-help` : undefined;

  return (
    <label className="block" htmlFor={name}>
      <span className="form-label">{label}</span>
      <textarea
        {...props}
        id={name}
        name={name}
        className={`form-textarea ${props.className ?? ""}`}
        aria-describedby={helpId}
      />
      {helpText ? (
        <span id={helpId} className="form-help">
          {helpText}
        </span>
      ) : null}
    </label>
  );
}
