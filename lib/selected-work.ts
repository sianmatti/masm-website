export type SelectedWorkProject = {
  id: string;
  name: string;
  mark?: string;
  descriptor: string;
  year: string;
  summary: string;
  scope: string[];
  result?: {
    value: string;
    label: string;
    note?: string;
  };
  proof:
    | "marketplace"
    | "publisher"
    | "hotel"
    | "booking"
    | "campaign"
    | "commerce"
    | "website"
    | "learning"
    | "communications"
    | "content-system"
    | "creative";
  public: boolean;
};

export const featuredWork: SelectedWorkProject[] = [
  {
    id: "contractors-in-ph",
    name: "Contractors In PH",
    mark: "CIP",
    descriptor: "Brand and contractor marketplace platform",
    year: "2026",
    summary:
      "Built a new marketplace brand and the platform infrastructure for provider discovery, onboarding, service matching, dashboards, and future mobile expansion.",
    scope: [
      "Brand identity",
      "Full-stack platform",
      "Provider onboarding",
      "Marketplace database",
      "SEO",
    ],
    result: {
      value: "1,000+",
      label: "contractor and service-provider records organized",
    },
    proof: "marketplace",
    public: true,
  },
  {
    id: "publishing-growth-operation",
    name: "Independent Publishing Company",
    descriptor: "Brand and digital growth operation",
    year: "2022–2023",
    summary:
      "Created the brand foundation and connected website, social presence, paid acquisition, lead capture, CRM routing, and sales follow-up into one operating system.",
    scope: [
      "Brand identity",
      "Website",
      "Paid media",
      "Lead capture",
      "CRM integration",
    ],
    result: {
      value: "$120K+",
      label: "revenue contribution within three months",
      note: "3,000+ leads generated",
    },
    proof: "publisher",
    public: false,
  },
  {
    id: "sixtyfifth-hotel",
    name: "SixtyFifth Hotel",
    mark: "SH",
    descriptor: "Hospitality growth system",
    year: "2025",
    summary:
      "Combined a new hotel website, acquisition strategy, Google and Meta advertising, remarketing, and measurement around direct-booking growth.",
    scope: [
      "Growth strategy",
      "Website",
      "Google Ads",
      "Meta Ads",
      "GA4",
    ],
    result: {
      value: "+20%",
      label: "increase in direct bookings",
      note: "30% reduction in CPC",
    },
    proof: "hotel",
    public: true,
  },
  {
    id: "adlaw-bcd",
    name: "ADLAW BCD",
    mark: "AB",
    descriptor: "Website and booking operations",
    year: "2026",
    summary:
      "Turned a manual appointment process into a structured customer booking experience with artist selection, live availability, confirmations, and an internal dashboard.",
    scope: [
      "Website design",
      "Booking system",
      "Confirmations",
      "Internal dashboard",
      "Analytics",
    ],
    result: {
      value: "Near full",
      label: "booking capacity during most months",
      note: "Client-reported outcome",
    },
    proof: "booking",
    public: true,
  },
];

export const supportingWork: SelectedWorkProject[] = [
  {
    id: "splash-park-bacolod",
    name: "Splash Park Bacolod",
    mark: "SPB",
    descriptor: "Content strategy and Meta advertising",
    year: "2026",
    summary:
      "Coordinated the organic content calendar, campaign creative, Meta advertising, audience measurement, and structured retargeting around event attendance.",
    scope: [
      "Content calendar",
      "Campaign creative",
      "Meta Ads",
      "Meta Pixel",
      "Retargeting",
    ],
    result: {
      value: "+35%",
      label: "increase in event turnout",
    },
    proof: "campaign",
    public: true,
  },
  {
    id: "emf-commerce-brand",
    name: "Confidential US Commerce Brand",
    descriptor: "Paid-media and promotional strategy",
    year: "2026",
    summary:
      "Repaired Google measurement and aligned promotional strategy, paid acquisition, offer positioning, and landing-page recommendations for a Memorial Day campaign.",
    scope: [
      "Tracking repair",
      "Google Ads",
      "Promotion strategy",
      "Landing-page direction",
      "Reporting",
    ],
    result: {
      value: "$42K",
      label: "total revenue during a one-month promotion",
      note: "Collective revenue attribution across Google Ads, Meta, Shopify, and partner channels.",
    },
    proof: "commerce",
    public: false,
  },
  {
    id: "ydcc",
    name: "YDCC Distribution Division",
    mark: "YDCC",
    descriptor: "Corporate website design and development",
    year: "2025",
    summary:
      "Translated a complex construction supply operation into a structured corporate website covering products, operations, credentials, delivery commitments, and departmental contacts.",
    scope: [
      "Information architecture",
      "Page design",
      "Development",
      "Copywriting",
      "SEO foundations",
    ],
    proof: "website",
    public: true,
  },
  {
    id: "enrichly",
    name: "Enrichly",
    mark: "E",
    descriptor: "Educational game and course development",
    year: "2024",
    summary:
      "Collaborated across product, education, design, and development teams to translate learning objectives into interactive games, original illustrations, educational activities, and structured course experiences for families and youth-focused organizations.",
    scope: [
      "Educational games",
      "Game interfaces",
      "Illustration",
      "Course creation",
      "Product collaboration",
    ],
    proof: "learning",
    public: true,
  },
  {
    id: "spa-alhambra",
    name: "Spa Alhambra",
    mark: "SA",
    descriptor: "Integrated marketing communications",
    year: "2022",
    summary:
      "Developed a coordinated communications framework connecting market research, positioning, campaign messaging, social creative, Meta-focused distribution, and email.",
    scope: [
      "IMC planning",
      "Market research",
      "Messaging",
      "Graphic design",
      "Email campaigns",
    ],
    proof: "communications",
    public: true,
  },
  {
    id: "health-food-beverage-content",
    name: "Confidential US Health, Food & Beverage Marketing Agency",
    descriptor: "Integrated content and campaign execution",
    year: "2026",
    summary:
      "Created a coordinated monthly marketing system for a US agency serving health, food, and beverage brands—connecting content planning, email and social copywriting, email graphics, branded social assets, and paid-social creative across client campaigns.",
    scope: [
      "Monthly content planning",
      "Email copy and graphics",
      "Social copywriting",
      "Organic social creative",
      "Paid-social ad assets",
      "Brand consistency",
    ],
    result: {
      value: "Coordinated",
      label: "monthly content and campaign execution",
      note: "Supporting engagement, lead-generation activity, and brand consistency.",
    },
    proof: "content-system",
    public: false,
  },
  {
    id: "oral-care-creative",
    name: "Confidential US Oral-Care Brand",
    descriptor: "Campaign copy and paid-social creative",
    year: "2025–2026",
    summary:
      "Produced recurring campaign copy and visual creative that translated technical product information into accessible consumer messaging for organic and paid channels.",
    scope: [
      "Campaign copy",
      "Social creative",
      "Paid-ad creative",
      "Product education",
      "Asset production",
    ],
    proof: "creative",
    public: false,
  },
];
