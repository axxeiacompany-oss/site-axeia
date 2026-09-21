export type LanguageCode = 'pt-pt' | 'en' | 'es' | 'fr';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  flag: string;
  shortLabel: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  badge: string;
}

export interface Pillar {
  number: string;
  title: string;
  headline: string;
  description: string;
  metric: string;
  metricLabel: string;
  highlight: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'websites' | 'landing-pages' | 'ecommerce' | 'branding' | 'ia' | 'internacional';
  categoryLabel: string;
  client: string;
  year: string;
  country: string;
  image: string;
  description: string;
  results: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  technologies: string[];
  accentColor: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
  duration: string;
}

export interface AudienceCard {
  id: string;
  title: string;
  tag: string;
  description: string;
  benefit: string;
  icon: string;
}

export interface TechModule {
  id: string;
  title: string;
  benefit: string;
  description: string;
  badge: string;
  icon: string;
}

export interface WorldNode {
  id: string;
  name: string;
  country: string;
  x: number; // Percentage on map 0-100
  y: number; // Percentage on map 0-100
  latency: string;
  hubType: string;
  markets: string;
}

export interface Translations {
  nav: {
    services: string;
    difference: string;
    portfolio: string;
    process: string;
    international: string;
    technology: string;
    ctaButton: string;
    availableBadge: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    presenceTag: string;
    metrics: {
      satisfaction: string;
      speed: string;
      global: string;
    };
  };
  whatWeDo: {
    sectionTag: string;
    title: string;
    subtitle: string;
    cards: ServiceCard[];
  };
  difference: {
    sectionTag: string;
    title: string;
    subtitle: string;
    pillars: Pillar[];
  };
  portfolio: {
    sectionTag: string;
    title: string;
    subtitle: string;
    allCategories: string;
    categories: {
      id: string;
      name: string;
    }[];
    viewProject: string;
    items: PortfolioItem[];
  };
  process: {
    sectionTag: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  international: {
    sectionTag: string;
    title: string;
    description: string;
    quote: string;
    badge: string;
    activeNodesLabel: string;
    latencyLabel: string;
    complianceLabel: string;
    complianceDesc: string;
  };
  audience: {
    sectionTag: string;
    title: string;
    subtitle: string;
    cards: AudienceCard[];
  };
  technology: {
    sectionTag: string;
    title: string;
    subtitle: string;
    modules: TechModule[];
  };
  finalCta: {
    headline: string;
    subheadline: string;
    primaryButton: string;
    secondaryButton: string;
    regionBadge: string;
  };
  footer: {
    tagline: string;
    companyLinks: string;
    servicesLinks: string;
    legalLinks: string;
    languagesTitle: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  modal: {
    title: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    projectTypeLabel: string;
    types: { id: string; label: string; desc: string }[];
    budgetLabel: string;
    budgets: string[];
    timelineLabel: string;
    timelines: string[];
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    whatsappButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    closeButton: string;
  };
}
