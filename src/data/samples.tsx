import type { ComponentType } from "react";
import { PREVIEWS, type PreviewKey } from "../components/previews";
import type { Theme } from "../components/previews/themed/parts";
import RestaurantThemed from "../components/previews/themed/RestaurantThemed";
import BusinessThemed from "../components/previews/themed/BusinessThemed";
import SolarThemed from "../components/previews/themed/SolarThemed";
import RealEstateThemed from "../components/previews/themed/RealEstateThemed";
import EcommerceThemed from "../components/previews/themed/EcommerceThemed";
import PortfolioThemed from "../components/previews/themed/PortfolioThemed";
import { BUSINESS_THEMES, ECOMMERCE_THEMES, PORTFOLIO_THEMES, REALESTATE_THEMES, RESTAURANT_THEMES, SOLAR_THEMES } from "./themes";

export type CategoryKey = "Restaurant" | "Solar" | "Real Estate" | "Business" | "E-commerce" | "Portfolio";

export interface Sample {
  id: string;
  name: string;
  url: string;
  Component: ComponentType;
}

const hand = (key: PreviewKey, name: string, url: string): Sample => ({ id: key, name, url, Component: PREVIEWS[key] });
const themed = (Layout: ComponentType<{ t: Theme }>, themes: Theme[], prefix: string): Sample[] =>
  themes.map((t, i) => ({ id: `${prefix}-${i}`, name: t.name, url: t.url, Component: () => <Layout t={t} /> }));

/** 10 concept designs per category: 2 hand-built + 8 themed. */
export const SAMPLES: Record<CategoryKey, Sample[]> = {
  Restaurant: [hand("restaurant", "Ember & Oak", "ember-and-oak.com"), hand("svc-restaurant", "Spice Route Biryani House", "spice-route-biryani.in"), ...themed(RestaurantThemed, RESTAURANT_THEMES, "rest")],
  Solar: [hand("solar", "BrightGrid Solar", "brightgrid-solar.com"), hand("svc-solar", "SunPeak Industrial Solar", "sunpeak-energy.in"), ...themed(SolarThemed, SOLAR_THEMES, "solar")],
  "Real Estate": [hand("realestate", "Aura Estates", "aura-estates.com"), hand("svc-realestate", "Green Valley Layouts", "greenvalley-layouts.in"), ...themed(RealEstateThemed, REALESTATE_THEMES, "re")],
  Business: [hand("business", "Northwind Partners", "northwind-partners.com"), hand("svc-business", "Vertex Logistics", "vertex-logistics.in"), ...themed(BusinessThemed, BUSINESS_THEMES, "biz")],
  "E-commerce": [hand("ecommerce", "Shoply Store", "shoply-store.com"), hand("svc-ecommerce", "Zari & Co Sarees", "zari-and-co.in"), ...themed(EcommerceThemed, ECOMMERCE_THEMES, "shop")],
  Portfolio: [hand("portfolio", "Alex Ray Studio", "alexray.studio"), hand("svc-portfolio", "Meera Rao Photography", "meerarao.photo"), ...themed(PortfolioThemed, PORTFOLIO_THEMES, "port")],
};

export const CATEGORY_ORDER: CategoryKey[] = ["Restaurant", "Solar", "Real Estate", "Business", "E-commerce", "Portfolio"];

export const CATEGORY_TITLE: Record<CategoryKey, string> = {
  Restaurant: "Restaurant Websites",
  Solar: "Solar Company Websites",
  "Real Estate": "Real Estate Websites",
  Business: "Business Websites",
  "E-commerce": "E-commerce Websites",
  Portfolio: "Portfolio Websites",
};
