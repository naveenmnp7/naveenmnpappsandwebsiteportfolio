import { CATEGORY_ORDER, type CategoryKey } from "./samples";

export type Category = "All" | CategoryKey;
export const CATEGORIES: Category[] = ["All", ...CATEGORY_ORDER];
