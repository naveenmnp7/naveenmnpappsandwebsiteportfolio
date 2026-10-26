/** 3 app models × 10 concept samples each. Sample content only. */

export interface BookingApp { brand: string; accent: string; tint: string; service: string; length: string }
export interface CrmApp { brand: string; accent: string; title: string }
export interface StoreApp { brand: string; accent: string; banner: string; products: [string, string][] }

export const BOOKING_APPS: BookingApp[] = [
  { brand: "Glow Salon", accent: "#db2777", tint: "#fdf2f8", service: "Hair spa", length: "45 min" },
  { brand: "CityCare Clinic", accent: "#0d9488", tint: "#f0fdfa", service: "Consultation", length: "20 min" },
  { brand: "IronFit Gym", accent: "#f97316", tint: "#fff7ed", service: "Trial session", length: "60 min" },
  { brand: "Zen Spa", accent: "#7c3aed", tint: "#faf5ff", service: "Aroma massage", length: "60 min" },
  { brand: "Turf Arena", accent: "#16a34a", tint: "#f0fdf4", service: "Football turf", length: "1 hour" },
  { brand: "Shine Car Wash", accent: "#0284c7", tint: "#f0f9ff", service: "Full wash", length: "40 min" },
  { brand: "TutorPoint", accent: "#ca8a04", tint: "#fefce8", service: "Maths class", length: "1 hour" },
  { brand: "Paws Vet Care", accent: "#ea580c", tint: "#fff7ed", service: "Pet check-up", length: "30 min" },
  { brand: "Yoga Dawn", accent: "#059669", tint: "#ecfdf5", service: "Morning flow", length: "50 min" },
  { brand: "Lens Studio", accent: "#475569", tint: "#f8fafc", service: "Portrait shoot", length: "90 min" },
];

export const CRM_APPS: CrmApp[] = [
  { brand: "HomeFinder CRM", accent: "#1d4ed8", title: "Site visits" },
  { brand: "InsureSure", accent: "#0891b2", title: "Renewals" },
  { brand: "Coaching Leads", accent: "#7c3aed", title: "Admissions" },
  { brand: "Solar Leads", accent: "#d97706", title: "Surveys" },
  { brand: "LoanDesk", accent: "#059669", title: "Loan leads" },
  { brand: "TravelCRM", accent: "#e11d48", title: "Trip enquiries" },
  { brand: "PharmaRep", accent: "#0d9488", title: "Doctor visits" },
  { brand: "FieldForce", accent: "#475569", title: "Today's visits" },
  { brand: "Telecall Pro", accent: "#2563eb", title: "My calls" },
  { brand: "EduConnect", accent: "#ea580c", title: "Follow-ups" },
];

export const STORE_APPS: StoreApp[] = [
  { brand: "FreshMart", accent: "#16a34a", banner: "Fresh in 30 min", products: [["Tomatoes 1kg", "₹40"], ["Milk 1L", "₹62"]] },
  { brand: "MediQuick", accent: "#0ea5e9", banner: "Free delivery", products: [["Pain relief", "₹30"], ["Vitamin C", "₹120"]] },
  { brand: "StyleHub", accent: "#ec4899", banner: "Up to 30% off", products: [["Kurta Set", "₹899"], ["Sneakers", "₹1,499"]] },
  { brand: "Sweet Crumbs", accent: "#e11d48", banner: "Fresh bakes daily", products: [["Cake 500g", "₹450"], ["Cookies", "₹120"]] },
  { brand: "Gadget Zone", accent: "#2563eb", banner: "New arrivals", products: [["Earbuds", "₹1,299"], ["Charger", "₹499"]] },
  { brand: "BookNest", accent: "#7c3aed", banner: "Back to school", products: [["Notebook Set", "₹199"], ["Novel", "₹349"]] },
  { brand: "Petal Bloom", accent: "#db2777", banner: "Fresh flowers", products: [["Rose Bouquet", "₹499"], ["Orchid", "₹699"]] },
  { brand: "Paws Mart", accent: "#f97316", banner: "Pet essentials", products: [["Dog Food 3kg", "₹799"], ["Chew Toy", "₹199"]] },
  { brand: "HomeNest", accent: "#a16207", banner: "Home décor", products: [["Cushion Set", "₹599"], ["Table Lamp", "₹899"]] },
  { brand: "GoldCharm", accent: "#b45309", banner: "Festive picks", products: [["Necklace", "₹1,999"], ["Earrings", "₹799"]] },
];
