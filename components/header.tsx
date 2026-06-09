import { ButtonLink } from "./ui";
import { sitePath } from "@/lib/site";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="section-shell flex h-20 items-center justify-between border-b border-ink/15">
        <a href="#" className="flex items-center gap-3" aria-label="MASM home">
          <span className="grid h-8 w-8 grid-cols-2 gap-[2px]">
            <i className="bg-ink" />
            <i className="border border-ink" />
            <i className="border border-ink" />
            <i className="bg-ink" />
          </span>
          <span className="text-sm font-semibold tracking-[-0.03em]">
            MASM<span className="text-muted">/GS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
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

        <ButtonLink href={sitePath("/diagnostic/")} className="!h-10 !px-4">
          Book a diagnostic
        </ButtonLink>
      </div>
    </header>
  );
}
