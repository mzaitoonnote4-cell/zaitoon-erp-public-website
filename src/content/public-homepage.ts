/**
 * Type definitions for the public homepage content model.
 * Runtime source of truth: `content/homepage-content.js`
 * Future CMS: admin panel reads/writes the same shape via API.
 */

export type SectionId =
  | "hero"
  | "interactiveProductTour"
  | "whyNow"
  | "whatYouGain"
  | "intelligenceStrip"
  | "beforeAfter"
  | "commandCenter"
  | "modules"
  | "productTeaser"
  | "systemFlow"
  | "ownerView"
  | "why"
  | "sectors"
  | "industries"
  | "gettingStarted"
  | "productDepth"
  | "howItWorks"
  | "security"
  | "trustSecurityTeaser"
  | "pricing"
  | "pilotUrgencyCta"
  | "pilot"
  | "platformUpdates"
  | "roadmapTeaser"
  | "businessAnswersTeaser"
  | "faq"
  | "cta"
  | "whatsappCta"
  | "news"
  | "video"
  | "contact";

export interface HomepageSectionVisibility {
  showHero: boolean;
  showInteractiveProductTour: boolean;
  showWhyNow: boolean;
  showWhatYouGain: boolean;
  showIntelligenceStrip: boolean;
  showBeforeAfter: boolean;
  showCommandCenter: boolean;
  showModules: boolean;
  showProductTeaser: boolean;
  showSystemFlow: boolean;
  showOwnerView: boolean;
  showWhy: boolean;
  showSectors: boolean;
  showIndustries: boolean;
  showGettingStarted: boolean;
  showProductDepth: boolean;
  showHowItWorks: boolean;
  showSecurity: boolean;
  showTrustSecurityTeaser: boolean;
  showPricing: boolean;
  showPilotUrgencyCTA: boolean;
  showPilot: boolean;
  showPlatformUpdates: boolean;
  showRoadmapTeaser: boolean;
  showBusinessAnswersTeaser: boolean;
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

export interface HomepageHeroDataChip {
  label: string;
  position: "top-start" | "top-end" | "bottom-start" | "bottom-end";
}

export interface HomepageHero {
  eyebrow: string;
  headlineBefore: string;
  headlineHighlight: string;
  subtitle: string;
  ctas: HomepageCta[];
  trustBadges: { icon: string; label: string }[];
  dataChips?: HomepageHeroDataChip[];
  mockup: HomepageHeroMockup;
}

export interface HomepageModuleCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  hoverHint?: string;
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
  suitableFor?: { label: string; items: string[] };
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
  emailLabel?: string;
  whatsappLabel?: string;
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

export interface HomepageUiStrings {
  openMenu: string;
  mainNav: string;
  modeToggle: string;
  langToggle: string;
  langAr: string;
  langEn: string;
  trustAria: string;
  platformStatusAria: string;
  teaserLive: string;
  teaserTablist: string;
  tourTablist: string;
  tourWorkflowAria: string;
  selectActivity: string;
  selectUsers: string;
  footerContact: string;
  counterZero: string;
  cmdSales: string;
  cmdInventory: string;
  cmdCollection: string;
  cmdUpdated: string;
  ownerCashFlow: string;
  ownerClear: string;
  ownerStockAlerts: string;
  ownerAlertsCount: string;
  ownerSalesToday: string;
  permFullAria: string;
  permViewAria: string;
  permLockAria: string;
  afterZaErpSuffix: string;
  whatsappForm: {
    title: string;
    name: string;
    company: string;
    phone: string;
    activity: string;
    users: string;
    message: string;
  };
}

export type HomepageLocaleCode = "ar" | "en";

export interface HomepageLocaleBundle extends Partial<PublicHomepageContent> {
  settings?: Partial<HomepageSettings>;
  ui?: HomepageUiStrings;
}

export interface PublicHomepageContentBase {
  version: string;
  settings: Omit<HomepageSettings, "copyrightText"> & { copyrightText?: string };
  sectionOrder: SectionId[];
  sections: HomepageSectionVisibility;
  media: HomepageMedia;
  locales: Record<HomepageLocaleCode, HomepageLocaleBundle>;
}

export interface PublicHomepageContent {
  version: string;
  lang?: HomepageLocaleCode;
  settings: HomepageSettings;
  seo: HomepageSeo;
  ui?: HomepageUiStrings;
  brand: HomepageBrand;
  nav: HomepageNavLink[];
  headerCtas: HomepageCta[];
  sectionOrder: SectionId[];
  sections: HomepageSectionVisibility;
  hero: HomepageHero;
  whyNow?: {
    title: string;
    text: string;
    cards: { icon: string; title: string }[];
  };
  interactiveProductTour?: {
    title: string;
    subtitle: string;
    labels: {
      challenge: string;
      helps: string;
      result: string;
    };
    workflowDefault: string[];
    businessTypes: {
      id: string;
      label: string;
      scenario: {
        challenge: string;
        helps: string;
        result: string;
      };
      workflow?: string[];
    }[];
    cta: {
      text: string;
      button: HomepageCta;
    };
  };
  whatYouGain?: {
    title: string;
    subtitle?: string;
    cards: { icon: string; title: string }[];
  };
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
    subtitle?: string;
    categories?: { id: string; label: string }[];
    items: {
      id: string;
      icon: string;
      title: string;
      description?: string;
      category?: string;
      visible?: boolean;
    }[];
    cta?: {
      text: string;
      button: HomepageCta;
    };
  };
  gettingStarted?: {
    title: string;
    subtitle?: string;
    steps: { id: string; title: string; description?: string }[];
    cta?: {
      text: string;
      button: HomepageCta;
    };
  };
  intelligenceStrip?: {
    label: string;
    items: string[];
  };
  beforeAfter?: {
    title: string;
    before: { label: string; items: string[] };
    after: { label: string; items: string[] };
  };
  commandCenter?: {
    title: string;
    text: string;
    hubLabel: string;
    nodes: { id: string; label: string; position: string }[];
  };
  productTeaser?: {
    title: string;
    subtitle?: string;
    tabs: {
      id: string;
      label: string;
      headline: string;
      description: string;
      highlights: string[];
    }[];
  };
  ownerView?: {
    title: string;
    points: string[];
    cta: HomepageCta;
  };
  pilotUrgencyCta?: {
    title: string;
    text: string;
    note: string;
    buttons: HomepageCta[];
  };
  systemFlow?: {
    title: string;
    subtitle: string;
    nodes: { id: string; label: string }[];
  };
  productDepth?: {
    title: string;
    items: { id: string; icon: string; title: string }[];
  };
  howItWorks: {
    title: string;
    steps: { id: string; title: string }[];
  };
  security: {
    title: string;
    matrixTitle?: string;
    showMatrix?: boolean;
    points: { id: string; icon: string; text: string }[];
    matrix?: {
      columns: string[];
      rows: { role: string; access: ("full" | "view" | "lock")[] }[];
    };
  };
  trustSecurity?: {
    title: string;
    text: string;
    button: HomepageCta;
  };
  businessAnswers?: {
    title: string;
    text: string;
    button: HomepageCta;
  };
  pilot: {
    title: string;
    subtitle?: string;
    text?: string;
    valueCards?: { id: string; title: string; description: string }[];
    whatYouGet?: { title: string; items: string[] };
    whoItFits?: { title: string; items: string[] };
    cta?: {
      text: string;
      button: HomepageCta;
    };
  };
  faq: {
    title: string;
    subtitle?: string;
    categories?: { id: string; label: string }[];
    items: {
      id: string;
      question: string;
      answer: string;
      category?: string;
      visible?: boolean;
    }[];
    cta?: {
      title?: string;
      text: string;
      button?: HomepageCta;
      buttonLabel?: string;
      message?: string;
    };
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
    pilotPlansNote?: string;
    pilotTrustNote?: string;
    subscriptionTrustNote?: string;
    currencyNote?: string;
    helper?: {
      title: string;
      text: string;
      button: HomepageCta;
    };
    cta?: {
      text: string;
      button: HomepageCta;
    };
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
    submitHelper?: string;
    privacyNote?: string;
    emailOption?: {
      label: string;
      address: string;
    };
    emailMessage?: {
      subject: string;
      greeting?: string;
      intro?: string;
      sectionTitle?: string;
      bulletPrefix?: string;
      name: string;
      phone: string;
      company: string;
      businessType: string;
      users: string;
      branches: string;
      problem: string;
      notes: string;
      outro?: string;
      emptyValue?: string;
    };
    businessTypeOptions?: string[];
    problemOptions?: string[];
    branchOptions?: { value: string; label: string }[];
    userCountOptions: { label: string; value: string }[];
    placeholders?: {
      businessType?: string;
      users?: string;
      problem?: string;
      branches?: string;
    };
    validation?: {
      nameRequired?: string;
      phoneRequired?: string;
      businessTypeRequired?: string;
      problemRequired?: string;
    };
    whatsappMessage?: {
      intro: string;
      name: string;
      company: string;
      businessType: string;
      users: string;
      branches: string;
      problem: string;
      notes: string;
    };
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
