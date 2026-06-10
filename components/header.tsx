import { SiteHeader } from "./site-header";

const navItems = [
  { label: "Growth Diagnostic", href: "#diagnostic" },
  { label: "Growth System", href: "#services" },
  { label: "Client Outcomes", href: "#work" },
  { label: "Why MASM", href: "#approach" },
];

export function Header() {
  return <SiteHeader navItems={navItems} ctaLabel="Book a Diagnostic" bookingCta />;
}
