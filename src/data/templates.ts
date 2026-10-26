import { PRICES } from "../config/site";
import type { PreviewKey } from "../components/previews";

export interface Template {
  id: PreviewKey;
  number: string;
  name: string;
  description: string;
  startingPrice: number;
  websiteType: string;
  url: string;
  tags: string[];
}

export const TEMPLATES: Template[] = [
  { id: "business", number: "01", name: "Business Website", description: "A clean, trustworthy corporate site with services, strong calls-to-action and lead capture.", startingPrice: PRICES.businessOffer, websiteType: "Business Website", url: "northwind-partners.com", tags: ["Corporate", "Services"] },
  { id: "restaurant", number: "02", name: "Restaurant Website", description: "An elegant dining site with food visuals, menu, location map and a reservation button.", startingPrice: PRICES.businessOffer, websiteType: "Restaurant Website", url: "ember-and-oak.com", tags: ["Menu", "Reservations"] },
  { id: "solar", number: "03", name: "Solar Company Website", description: "A renewable-energy site with solar visuals, savings messaging and enquiry buttons.", startingPrice: PRICES.businessOffer, websiteType: "Solar Company Website", url: "brightgrid-solar.com", tags: ["Energy", "Lead gen"] },
  { id: "realestate", number: "04", name: "Real Estate Website", description: "Premium property listings, luxury home cards and one-tap property enquiries.", startingPrice: PRICES.professional, websiteType: "Real Estate Website", url: "aura-estates.com", tags: ["Listings", "Enquiry"] },
  { id: "portfolio", number: "05", name: "Personal Portfolio", description: "A bold creative portfolio with project cards, about section and contact details.", startingPrice: PRICES.starter, websiteType: "Portfolio Website", url: "alexray.studio", tags: ["Creative", "Showcase"] },
  { id: "ecommerce", number: "06", name: "E-commerce Website", description: "A modern online store with product cards, cart and shopping buttons.", startingPrice: PRICES.ecommerceFrom, websiteType: "E-commerce Website", url: "shoply-store.com", tags: ["Store", "Cart"] },
];
