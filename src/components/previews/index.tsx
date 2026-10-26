import type { ComponentType } from "react";
import BusinessPreview from "./BusinessPreview";
import RestaurantPreview from "./RestaurantPreview";
import SolarPreview from "./SolarPreview";
import RealEstatePreview from "./RealEstatePreview";
import PortfolioPreview from "./PortfolioPreview";
import EcommercePreview from "./EcommercePreview";
import LogisticsPreview from "./services/LogisticsPreview";
import BiryaniPreview from "./services/BiryaniPreview";
import IndustrialSolarPreview from "./services/IndustrialSolarPreview";
import PlotsPreview from "./services/PlotsPreview";
import SareePreview from "./services/SareePreview";
import PhotographerPreview from "./services/PhotographerPreview";
import LandingPreview from "./services/LandingPreview";
import RedesignPreview from "./services/RedesignPreview";

export type PreviewKey =
  | "business" | "restaurant" | "solar" | "realestate" | "portfolio" | "ecommerce"
  // service samples (shown from the Services section)
  | "svc-business" | "svc-restaurant" | "svc-solar" | "svc-realestate"
  | "svc-ecommerce" | "svc-portfolio" | "svc-landing" | "svc-redesign";

export const PREVIEWS: Record<PreviewKey, ComponentType> = {
  business: BusinessPreview,
  restaurant: RestaurantPreview,
  solar: SolarPreview,
  realestate: RealEstatePreview,
  portfolio: PortfolioPreview,
  ecommerce: EcommercePreview,
  "svc-business": LogisticsPreview,
  "svc-restaurant": BiryaniPreview,
  "svc-solar": IndustrialSolarPreview,
  "svc-realestate": PlotsPreview,
  "svc-ecommerce": SareePreview,
  "svc-portfolio": PhotographerPreview,
  "svc-landing": LandingPreview,
  "svc-redesign": RedesignPreview,
};
