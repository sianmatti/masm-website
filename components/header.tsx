import { SiteHeader } from "./site-header";
import { sitePath } from "@/lib/site";

const navItems = [
  { label: "Growth Diagnostic", href: sitePath("/#diagnostic") },
  { label: "Growth System", href: sitePath("/#services") },
  { label: "Client Outcomes", href: sitePath("/work/") },
  { label: "Why MASM", href: sitePath("/#approach") },
];

export function Header() {
  return <SiteHeader navItems={navItems} ctaLabel="Book a Growth Diagnostic" bookingCta />;
}
