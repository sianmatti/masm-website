import type { Metadata } from "next";
import { DiagnosticLanding } from "@/components/diagnostic-landing";

export const metadata: Metadata = {
  title: "Growth Diagnostic",
  description:
    "A senior-led strategic assessment of your growth economics, demand system, measurement, and operations, delivered with a prioritized 90-day roadmap.",
  alternates: {
    canonical: "/diagnostic",
  },
  openGraph: {
    title: "Growth Diagnostic | MASM",
    description:
      "Find the constraint limiting your next stage of growth and leave with a clear 90-day direction.",
    url: "/diagnostic",
  },
};

export default function DiagnosticPage() {
  return <DiagnosticLanding />;
}
