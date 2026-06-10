import { sitePath } from "@/lib/site";
import { SiteHeader } from "./site-header";

const navItems = [
  { label: "Growth System", href: "#services" },
  { label: "Why MASM", href: "#approach" },
  { label: "Client Outcomes", href: "#work" },
];

export function Header() {
  return <SiteHeader navItems={navItems} ctaHref={sitePath("/diagnostic/")} ctaLabel="View the diagnostic" />;
}
