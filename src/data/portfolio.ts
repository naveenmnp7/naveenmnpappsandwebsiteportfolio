import type { PreviewKey } from "../components/previews";

export type Category = "All" | "Restaurant" | "Solar" | "Real Estate" | "Business" | "E-commerce" | "Portfolio";

export interface Project {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  preview: PreviewKey;
  url: string;
  blurb: string;
}

/** All projects are fictional concept designs — labelled as such in the UI. */
export const PROJECTS: Project[] = [
  { id: "p1", title: "Ember & Oak", category: "Restaurant", preview: "restaurant", url: "ember-and-oak.com", blurb: "Dining brand with menu & reservations." },
  { id: "p2", title: "BrightGrid Solar", category: "Solar", preview: "solar", url: "brightgrid-solar.com", blurb: "Lead-focused renewable-energy site." },
  { id: "p3", title: "Aura Estates", category: "Real Estate", preview: "realestate", url: "aura-estates.com", blurb: "Luxury listings with enquiry flow." },
  { id: "p4", title: "Northwind Partners", category: "Business", preview: "business", url: "northwind-partners.com", blurb: "Corporate services website." },
  { id: "p5", title: "Shoply Store", category: "E-commerce", preview: "ecommerce", url: "shoply-store.com", blurb: "Online shop with product catalogue." },
  { id: "p6", title: "Alex Ray Studio", category: "Portfolio", preview: "portfolio", url: "alexray.studio", blurb: "Creative personal portfolio." },
];

export const CATEGORIES: Category[] = ["All", "Restaurant", "Solar", "Real Estate", "Business", "E-commerce", "Portfolio"];
