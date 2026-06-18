export type ClientOutcome = {
  id: string;
  type: string;
  engagement: string;
  title: string;
  problem: string;
  constraint: string;
  focus: string[];
  narrative: string;
  impact: string;
  outcomes: Array<{
    value: string;
    label: string;
    context?: string;
  }>;
};

export const clientOutcomes: ClientOutcome[] = [
  {
    id: "b2b-saas",
    type: "B2B SaaS company",
    engagement: "Growth Diagnostic → Growth Engine",
    title: "Rebuilding acquisition around revenue quality.",
    problem:
      "The business had functioning acquisition channels and regular performance reporting, but leadership could not clearly determine which activity created commercially valuable pipeline.",
    constraint:
      "The constraint was not lead volume. It was knowing which acquisition created durable revenue.",
    focus: ["Acquisition economics", "Measurement", "Conversion optimization"],
    narrative:
      "MASM reframed the problem from generating more leads to understanding acquisition economics. The engagement connected channel performance, measurement, and conversion around revenue quality and payback.",
    impact:
      "The resulting growth model improved pipeline efficiency while reducing customer acquisition cost. Leadership gained a clearer way to evaluate acquisition based on durable revenue rather than lead volume alone.",
    outcomes: [
      { value: "2.7×", label: "pipeline efficiency" },
      { value: "−31%", label: "customer acquisition cost" },
    ],
  },
  {
    id: "consumer-search",
    type: "Consumer business",
    engagement: "Organic Growth System",
    title: "Turning search demand into a compounding revenue channel.",
    problem:
      "The business had existing organic traffic, but lacked a reliable connection between non-brand search visibility, search intent, conversion, and revenue.",
    constraint:
      "Search became commercially useful when demand capture and conversion were managed as one system.",
    focus: ["Technical SEO", "Content system", "Conversion"],
    narrative:
      "MASM treated SEO, content, and conversion as one commercial system rather than measuring organic growth primarily through traffic.",
    impact:
      "The strategic result was not merely more traffic. Organic search became a measurable acquisition channel connected to commercial performance.",
    outcomes: [
      { value: "+184%", label: "non-brand revenue" },
      { value: "8 months", label: "measurement period" },
    ],
  },
  {
    id: "marketplace-analytics",
    type: "Marketplace business",
    engagement: "Analytics and Automation System",
    title: "Creating one source of truth for growth decisions.",
    problem:
      "The leadership team relied on fragmented reports across multiple platforms. Reporting required substantial manual effort and produced inconsistent interpretations of growth performance.",
    constraint:
      "The business did not need more reports. It needed a reliable measurement layer connecting data, definitions, and recurring decisions.",
    focus: ["Analytics architecture", "Automation", "Reporting"],
    narrative:
      "MASM designed a shared measurement layer connecting reporting, analytics, and automation into a more reliable operating rhythm.",
    impact:
      "The system reduced reporting drag, recovered operating capacity, and gave leadership a more dependable view for growth decisions.",
    outcomes: [
      { value: "14 hrs", label: "saved every week" },
      { value: "99.4%", label: "reporting accuracy" },
    ],
  },
];
