/**
 * Type definitions for the public homepage content model.
 * Runtime source of truth: `content/homepage-content.js`
 * Future CMS: admin panel reads/writes the same shape via API.
 */

export type SectionId =
  | "hero"
  | "modules"
  | "why"
  | "sectors"
  | "industries"
  | "howItWorks"
  | "security"
  | "pricing"
  | "pilot"
  | "faq"
  | "cta"
  | "whatsappCta"
  | "news"
  | "video"
  | "contact";

export interface HomepageSectionVisibility {
  showHero: boolean;
  showModules: boolean;
  showWhy: boolean;
  showSectors: boolean;
  showIndustries: boolean;
  showHowItWorks: boolean;
  showSecurity: boolean;
  showPricing: boolean;
  showPilot: boolean;
  showFaq: boolean;
  showCta: boolean;
  showWhatsappCta: boolean;
  showNews: boolean;
  showVideo: boolean;
  showContact: boolean;
}

export interface HomepageSeo {
  title: string;
  description: string;
  ogImage?: string | null;
}

export interface HomepageCta {
  label: string;
  href: string;
  variant: "gold" | "outline" | "ghost";
  external?: boolean;
}

export interface HomepageNavLink {
  id: string;
  label: string;
  href: string;
  section: string;
}

export interface HomepageBrand {
  monogram: string;
  name: string;
  accent: string;
  ariaLabel: string;
}

export interface HomepageHeroMockupKpi {
  label: string;
  value: number | string;
  animate?: boolean;
  variant?: "gold" | "default" | "emerald";
}

export interface HomepageHeroMockup {
  mode: "composed" | "image";
  image?: string | null;
  imageAlt?: string;
  sidebarNav: string[];
  kpis: HomepageHeroMockupKpi[];
  chartLabel: string;
  chartBars: number[];
  mobile: {
    title: string;
    statLabel: string;
    statValue: string;
    bars: number[];
  };
}

export interface HomepageHero {
  eyebrow: string;
  headlineBefore: string;
  headlineHighlight: string;
  subtitle: string;
  ctas: HomepageCta[];
  trustBadges: { icon: string; label: string }[];
  mockup: HomepageHeroMockup;
}

export interface HomepageModuleCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HomepageBenefitCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HomepagePricingPlan {
  id: string;
  name: string;
  price: number | null;
  currency?: "USD";
  periodLabel?: string;
  customLabel?: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  cta: HomepageCta;
}

export interface HomepagePricingAddonItem {
  label: string;
  price: string;
}

export interface HomepagePricingAddons {
  title: string;
  items: HomepagePricingAddonItem[];
}

export interface HomepageNewsItem {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  coverImage?: string | null;
  href?: string;
}

export interface HomepageFooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface HomepageContactDetails {
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
}

export interface HomepageMedia {
  logoDark?: string | null;
  logoLight?: string | null;
  logoMonogram?: string | null;
  heroMockupImage?: string | null;
  whyEmblemImage?: string | null;
  ogImage?: string | null;
}

export interface HomepageMarketSettings {
  primaryCountry: string;
  primaryCountryNameAr: string;
  cityAr: string;
}

export interface HomepageSettings {
  erpLoginUrl: string;
  whatsappNumber: string;
  copyrightYear: number;
  copyrightText: string;
  market?: HomepageMarketSettings;
}

export interface PublicHomepageContent {
  version: string;
  settings: HomepageSettings;
  seo: HomepageSeo;
  brand: HomepageBrand;
  nav: HomepageNavLink[];
  headerCtas: HomepageCta[];
  sectionOrder: SectionId[];
  sections: HomepageSectionVisibility;
  hero: HomepageHero;
  modules: {
    title: string;
    subtitle: string;
    items: HomepageModuleCard[];
    footerCta: HomepageCta;
  };
  why: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    emblemText: string;
    items: HomepageBenefitCard[];
  };
  sectors: {
    title: string;
    subtitle: string;
    items: string[];
  };
  industries: {
    title: string;
    items: { id: string; icon: string; title: string }[];
  };
  howItWorks: {
    title: string;
    steps: { id: string; title: string }[];
  };
  security: {
    title: string;
    points: { id: string; icon: string; text: string }[];
  };
  pilot: {
    title: string;
    text: string;
    cta: HomepageCta;
  };
  faq: {
    title: string;
    items: { id: string; question: string; answer: string }[];
  };
  whatsappCta: {
    title: string;
    text: string;
    buttonLabel: string;
    message: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    note: string;
    currencyNote?: string;
    plans: HomepagePricingPlan[];
    addons?: HomepagePricingAddons;
  };
  cta: {
    title: string;
    text: string;
    buttons: HomepageCta[];
  };
  news: {
    title: string;
    subtitle: string;
    items: HomepageNewsItem[];
  };
  video: {
    title: string;
    placeholder: string;
    url?: string | null;
    thumbnail?: string | null;
  };
  contact: {
    title: string;
    subtitle: string;
    submitLabel: string;
    activityOptions: string[];
    userCountOptions: { label: string; value: string }[];
    fields: { id: string; label: string; type: string; required: boolean }[];
  };
  footer: {
    description: string;
    columns: HomepageFooterColumn[];
    contact: HomepageContactDetails;
    social: { id: string; label: string; href: string }[];
    platformLoginLabel: string;
  };
  media: HomepageMedia;
}
