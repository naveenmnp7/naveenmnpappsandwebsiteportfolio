export interface EnquiryValues {
  name: string;
  business: string;
  phone: string;
  websiteType: string;
  budget: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

export function validateEnquiry(v: EnquiryValues): EnquiryErrors {
  const e: EnquiryErrors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name (at least 2 characters).";
  if (v.business.trim().length < 2) e.business = "Please enter your business name.";
  const digits = v.phone.replace(/[\s()-]/g, "");
  if (!/^\+?\d{10,14}$/.test(digits)) e.phone = "Enter a valid phone number (10–14 digits, country code optional).";
  if (!v.websiteType) e.websiteType = "Please choose a website type.";
  if (!v.budget) e.budget = "Please choose a budget range.";
  if (v.message.trim().length < 10) e.message = "Tell us a little more (at least 10 characters).";
  if (v.message.length > 1000) e.message = "Please keep the description under 1000 characters.";
  return e;
}
