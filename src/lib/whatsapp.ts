import { SITE } from "../config/site";

export const isWhatsAppConfigured = () => /^\d{8,15}$/.test(SITE.whatsappNumber);

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

/**
 * Opens a prefilled WhatsApp chat. If the number is still the placeholder,
 * we tell the site owner instead of opening a chat with a wrong number.
 */
export function openWhatsApp(message: string): boolean {
  if (!isWhatsAppConfigured()) {
    window.alert(
      "WhatsApp number not set yet.\n\nOpen src/config/site.ts and replace whatsappNumber (digits only, with country code, e.g. 919876543210)."
    );
    return false;
  }
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  return true;
}

export const messages = {
  general: () => `Hi MNP APPS! I'd like to know more about your website services.`,
  offer: () =>
    `Hi MNP APPS! I'm interested in the ₹4,999 Business Website offer (up to 5 pages). Please share the next steps.`,
  plan: (name: string, price: string) =>
    `Hi MNP APPS! I'd like a quote for the "${name}" plan (${price}). Please share the details.`,
  template: (name: string) =>
    `Hi MNP APPS! I like the "${name}" template and want to customize it for my business.`,
  service: (name: string) => `Hi MNP APPS! I'm interested in: ${name}. Could you share details and pricing?`,
  project: () => `Hi MNP APPS! I'd like to start my website project.`,
};
