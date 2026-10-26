/**
 * ============================================================
 *  MNP APPS — SINGLE SOURCE OF TRUTH
 *  Edit this file to change the WhatsApp number, prices, plans,
 *  contact details and social links. Nothing else needs touching.
 * ============================================================
 */

/**
 * ★ YOUR PHONE NUMBER — change it here ONCE.
 * Digits only, country code first (India = 91). It is used for the call button,
 * the displayed number AND WhatsApp, so all three always stay in sync.
 */
const PHONE = "918790529335";

/** "918790529335" -> "+91 87905 29335" */
const displayPhone = (n: string) => `+${n.slice(0, 2)} ${n.slice(2, 7)} ${n.slice(7)}`;

export const SITE = {
  name: "MNP APPS",
  tagline: "Creative Web Development Agency",
  description:
    "We design and build premium, mobile-responsive websites for restaurants, solar companies, real estate, e-commerce and growing small businesses.",

  /**
   * WhatsApp number (international format, digits only). Defaults to the same
   * number as PHONE above. To use a different WhatsApp number later, replace
   * `PHONE` here with a string such as "919876543210".
   */
  whatsappNumber: PHONE,

  /**
   * Optional: a form-delivery endpoint (e.g. Formspree "https://formspree.io/f/xxxxxx").
   * If empty, the contact form sends the enquiry through WhatsApp instead and
   * never shows a fake "success" message.
   */
  formEndpoint: "",

  contact: {
    email: "mnpapps.in@gmail.com",
    phone: PHONE, // used for the tel: call link
    phoneDisplay: displayPhone(PHONE),
    location: "India · Working with clients worldwide", // edit as needed
    hours: "Mon – Sat, 10:00 AM – 7:00 PM IST", // edit as needed
  },

  /** Leave "" to hide a link. Only add verified MNP APPS profiles here. */
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },

  /**
   * Genuine offer deadline as an ISO date (e.g. "2026-12-31T23:59:59+05:30").
   * Leave null to show the offer WITHOUT any countdown or "ends today" claim.
   */
  offerEndsAt: null as string | null,
} as const;

export const CURRENCY = "₹";

export const formatPrice = (n: number) => `${CURRENCY}${n.toLocaleString("en-IN")}`;

/** Prices — edit here only. */
export const PRICES = {
  starter: 2999,
  businessRegular: 9999,
  businessOffer: 4999,
  professional: 9999,
  ecommerceFrom: 14999,
} as const;

export const PRICING_DISCLAIMER =
  "Domain registration, hosting, premium third-party tools, payment-gateway fees and other external service charges are not included unless specifically listed in your final written quotation. Prices shown are agency-provided promotional pricing.";

export interface Plan {
  id: string;
  name: string;
  price: number;
  priceLabel?: string; // e.g. "Starting at"
  regularPrice?: number;
  badge?: string;
  highlight?: boolean;
  features: string[];
}

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter Website",
    price: PRICES.starter,
    features: [
      "Single-page website",
      "Responsive design",
      "Business introduction",
      "Services section",
      "Contact section",
      "WhatsApp button",
      "Basic SEO structure",
    ],
  },
  {
    id: "business",
    name: "Business Website",
    price: PRICES.businessOffer,
    regularPrice: PRICES.businessRegular,
    badge: "BEST VALUE",
    highlight: true,
    features: [
      "Up to 5 pages",
      "Premium modern UI",
      "Responsive design",
      "About and services pages",
      "Contact form",
      "WhatsApp integration",
      "Google Maps integration",
      "Basic SEO setup",
      "One revision round",
    ],
  },
  {
    id: "professional",
    name: "Professional Website",
    price: PRICES.professional,
    features: [
      "Up to 8 pages",
      "Advanced UI design",
      "Premium animations",
      "Project or portfolio gallery",
      "Lead generation forms",
      "WhatsApp integration",
      "SEO-friendly structure",
      "Additional customization",
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce Website",
    price: PRICES.ecommerceFrom,
    priceLabel: "Starting at",
    features: [
      "Product catalogue",
      "Shopping cart",
      "Checkout integration",
      "Payment gateway integration support",
      "Order management features",
      "Responsive design",
      "Product management setup",
    ],
  },
];

export const OFFER_FEATURES = [
  "Professional website design",
  "Mobile-responsive layout",
  "Up to 5 website pages",
  "WhatsApp enquiry button",
  "Google Maps location integration",
  "Contact form",
  "Basic on-page SEO setup",
  "Social media links",
  "One design revision round",
  "Website deployment assistance",
];

/** Options used by the contact form dropdowns and the enquiry flow. */
export const WEBSITE_TYPES = [
  "Business Website",
  "Restaurant Website",
  "Solar Company Website",
  "Real Estate Website",
  "E-commerce Website",
  "Portfolio Website",
  "Landing Page",
  "Website Redesign",
  "Not sure yet",
] as const;

export const BUDGETS = [
  "Under ₹5,000",
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹20,000",
  "₹20,000+",
  "Not sure yet",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Templates", href: "#templates" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;
