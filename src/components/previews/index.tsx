import type { ComponentType } from "react";
import BusinessPreview from "./BusinessPreview";
import RestaurantPreview from "./RestaurantPreview";
import SolarPreview from "./SolarPreview";
import RealEstatePreview from "./RealEstatePreview";
import PortfolioPreview from "./PortfolioPreview";
import EcommercePreview from "./EcommercePreview";

export type PreviewKey = "business" | "restaurant" | "solar" | "realestate" | "portfolio" | "ecommerce";

export const PREVIEWS: Record<PreviewKey, ComponentType> = {
  business: BusinessPreview,
  restaurant: RestaurantPreview,
  solar: SolarPreview,
  realestate: RealEstatePreview,
  portfolio: PortfolioPreview,
  ecommerce: EcommercePreview,
};
