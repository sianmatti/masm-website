export const platformCategories = [
  "Acquisition",
  "Measurement",
  "Web and commerce",
  "CRM and operations",
  "Automation and AI",
] as const;

export type PlatformCategory = (typeof platformCategories)[number];

export type Platform = {
  name: string;
  category: PlatformCategory;
  logoPath?: string;
  logoTreatment?: "monochrome" | "brand-color";
  assetSource: "Official brand asset" | "Simple Icons" | "Text-only fallback";
  brandSource: string;
  relationship: "used";
  featured: boolean;
};

export const platforms: Platform[] = [
  {
    name: "Google Ads",
    category: "Acquisition",
    logoPath: "/platforms/google-ads.svg",
    assetSource: "Simple Icons",
    brandSource: "https://ads.google.com/home/",
    relationship: "used",
    featured: true,
  },
  {
    name: "Meta Ads",
    category: "Acquisition",
    logoPath: "/platforms/meta.svg",
    assetSource: "Simple Icons",
    brandSource: "https://www.meta.com/",
    relationship: "used",
    featured: true,
  },
  {
    name: "LinkedIn Ads",
    category: "Acquisition",
    assetSource: "Text-only fallback",
    brandSource: "https://brand.linkedin.com/downloads",
    relationship: "used",
    featured: false,
  },
  {
    name: "Google Analytics 4",
    category: "Measurement",
    logoPath: "/platforms/google-analytics.svg",
    assetSource: "Simple Icons",
    brandSource: "https://marketingplatform.google.com/about/analytics/",
    relationship: "used",
    featured: true,
  },
  {
    name: "Google Tag Manager",
    category: "Measurement",
    logoPath: "/platforms/google-tag-manager.svg",
    assetSource: "Simple Icons",
    brandSource: "https://tagmanager.google.com/",
    relationship: "used",
    featured: true,
  },
  {
    name: "Google Search Console",
    category: "Measurement",
    logoPath: "/platforms/google-search-console.svg",
    assetSource: "Simple Icons",
    brandSource: "https://search.google.com/search-console",
    relationship: "used",
    featured: true,
  },
  {
    name: "Vercel",
    category: "Web and commerce",
    logoPath: "/platforms/vercel.svg",
    assetSource: "Simple Icons",
    brandSource: "https://vercel.com/geist/brands",
    relationship: "used",
    featured: true,
  },
  {
    name: "GitHub",
    category: "Web and commerce",
    logoPath: "/platforms/github.svg",
    assetSource: "Simple Icons",
    brandSource: "https://github.com/logos",
    relationship: "used",
    featured: true,
  },
  {
    name: "Shopify",
    category: "Web and commerce",
    logoPath: "/platforms/shopify.svg",
    assetSource: "Simple Icons",
    brandSource: "https://www.shopify.com/brand-assets",
    relationship: "used",
    featured: true,
  },
  {
    name: "WordPress",
    category: "Web and commerce",
    logoPath: "/platforms/wordpress.svg",
    assetSource: "Simple Icons",
    brandSource: "https://wordpress.org/about/logos/",
    relationship: "used",
    featured: false,
  },
  {
    name: "Cloudflare",
    category: "Web and commerce",
    logoPath: "/platforms/cloudflare.svg",
    assetSource: "Simple Icons",
    brandSource: "https://www.cloudflare.com/logo/",
    relationship: "used",
    featured: false,
  },
  {
    name: "HubSpot",
    category: "CRM and operations",
    logoPath: "/platforms/hubspot.svg",
    assetSource: "Simple Icons",
    brandSource: "https://www.hubspot.com/style-guide",
    relationship: "used",
    featured: true,
  },
  {
    name: "Salesforce",
    category: "CRM and operations",
    logoPath: "/platforms/salesforce.svg",
    logoTreatment: "brand-color",
    assetSource: "Official brand asset",
    brandSource:
      "https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-no-type-logo.svg",
    relationship: "used",
    featured: true,
  },
  {
    name: "Make",
    category: "Automation and AI",
    logoPath: "/platforms/make.svg",
    assetSource: "Simple Icons",
    brandSource: "https://www.make.com/en/press",
    relationship: "used",
    featured: true,
  },
  {
    name: "Zapier",
    category: "Automation and AI",
    logoPath: "/platforms/zapier.svg",
    assetSource: "Simple Icons",
    brandSource: "https://zapier.com/brand",
    relationship: "used",
    featured: false,
  },
  {
    name: "OpenAI",
    category: "Automation and AI",
    logoPath: "/platforms/openai.svg",
    assetSource: "Official brand asset",
    brandSource:
      "https://images.ctfassets.net/kftzwdyauwt9/3hUGLn3ypllZ0oa01qOYVq/28e8188e6f11b84c3e876569d492734f/Blossom_Light.svg",
    relationship: "used",
    featured: true,
  },
  {
    name: "Claude",
    category: "Automation and AI",
    logoPath: "/platforms/claude.svg",
    assetSource: "Simple Icons",
    brandSource: "https://claude.ai/",
    relationship: "used",
    featured: true,
  },
];
