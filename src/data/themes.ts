import type { Theme } from "../components/previews/themed/parts";

type Palette = [bg: string, fg: string, muted: string, accent: string, accent2: string, surface: string];
type Opts = { serif?: boolean; onAccent?: string };

/** Compact builder: every sample site is a layout + a palette + some copy. */
const th = (
  name: string, url: string, headline: string, sub: string, cta: string,
  p: Palette, layout: Theme["layout"], items: Theme["items"], o: Opts = {}
): Theme => ({
  name, url, headline, sub, cta,
  bg: p[0], fg: p[1], muted: p[2], accent: p[3], accent2: p[4], surface: p[5],
  layout, items, serif: !!o.serif, onAccent: o.onAccent ?? "#ffffff",
});

export const RESTAURANT_THEMES: Theme[] = [
  th("Tiffin Tales", "tiffin-tales.in", "Breakfast like home.", "Crisp dosas, soft idlis and fresh chutneys from 7 AM.", "Order now",
    ["#fffbea", "#3b2a10", "#8a6d3b", "#d97706", "#65a30d", "#ffffff"], "split", [["Ghee Podi Idli", "₹90"], ["Masala Dosa", "₹110"], ["Pesarattu", "₹100"]]),
  th("Pizza Forno", "pizza-forno.in", "Fired hot. Stretched thin.", "Wood-fired pizzas made with fresh dough every day.", "Order pizza",
    ["#1a0f0a", "#fff1e6", "#c9a58c", "#ef4444", "#facc15", "#2a1812"], "center", [["Margherita", "₹299"], ["Farmhouse", "₹399"], ["Garlic Bread", "₹149"]]),
  th("Chai & Co.", "chai-and-co.in", "Slow mornings, strong chai.", "A cosy café for coffee, bun maska and long conversations.", "Visit us",
    ["#f5efe6", "#3a2e25", "#8b7355", "#8b5e34", "#d4a373", "#fffaf3"], "split", [["Filter Coffee", "₹60"], ["Irani Chai", "₹40"], ["Bun Maska", "₹70"]], { serif: true }),
  th("Dragon Wok", "dragon-wok.in", "Wok-fired, fast and fiery.", "Indo-Chinese favourites cooked on a roaring flame.", "Order now",
    ["#0f172a", "#fef3c7", "#94a3b8", "#dc2626", "#f59e0b", "#1e293b"], "center", [["Hakka Noodles", "₹180"], ["Manchurian", "₹170"], ["Fried Rice", "₹190"]]),
  th("Sweet Bloom Bakery", "sweet-bloom.in", "Baked fresh every morning.", "Cakes, croissants and brownies made in small batches.", "Order a cake",
    ["#fff1f2", "#4c1d2f", "#9f6b7c", "#e11d48", "#fb7185", "#ffffff"], "split", [["Red Velvet Slice", "₹140"], ["Croissant", "₹90"], ["Brownie", "₹110"]], { serif: true }),
  th("Burger Barn", "burger-barn.in", "Stacked high. No shortcuts.", "Juicy burgers, loaded fries and thick shakes.", "Order now",
    ["#111111", "#ffffff", "#a3a3a3", "#f59e0b", "#ef4444", "#1f1f1f"], "split", [["Classic Burger", "₹199"], ["Peri Fries", "₹120"], ["Chocolate Shake", "₹150"]], { onAccent: "#111111" }),
  th("Green Bowl", "green-bowl.in", "Eat well, feel light.", "Fresh bowls, smoothies and salads made to order.", "Build a bowl",
    ["#f0fdf4", "#14532d", "#4d7c5a", "#16a34a", "#a3e635", "#ffffff"], "center", [["Quinoa Bowl", "₹260"], ["Berry Smoothie", "₹150"], ["Sprout Salad", "₹180"]]),
  th("Royal Mughlai", "royal-mughlai.in", "A feast fit for royalty.", "Rich gravies, tandoor breads and traditional desserts.", "Reserve a table",
    ["#1c1917", "#fde68a", "#d6b97a", "#b45309", "#fbbf24", "#292524"], "center", [["Butter Chicken", "₹360"], ["Garlic Naan", "₹60"], ["Gulab Jamun", "₹90"]], { serif: true }),
];

export const BUSINESS_THEMES: Theme[] = [
  th("Apex Accounting", "apex-accounting.in", "Numbers handled. Stress gone.", "Tax, GST and bookkeeping for small businesses.", "Talk to us",
    ["#f8fafc", "#0f172a", "#64748b", "#0369a1", "#38bdf8", "#ffffff"], "split", [["GST & Tax Filing", "Accurate, on-time returns."], ["Bookkeeping", "Clean monthly books."], ["Business Advisory", "Plan with confidence."]]),
  th("BuildRight", "buildright.in", "We build it right.", "Homes and commercial spaces delivered with care.", "Get an estimate",
    ["#111827", "#ffffff", "#9ca3af", "#f59e0b", "#fbbf24", "#1f2937"], "split", [["Residential", "Homes built to last."], ["Commercial", "Shops and offices."], ["Interior Fit-outs", "Ready-to-use spaces."]], { onAccent: "#111827" }),
  th("Nova IT Solutions", "nova-it.in", "Technology that just works.", "Web, cloud and security services for growing teams.", "Book a demo",
    ["#0b1020", "#e0e7ff", "#94a3b8", "#6366f1", "#22d3ee", "#151b30"], "center", [["Web Development", "Fast, modern websites."], ["Cloud Support", "Reliable hosting setup."], ["Cyber Security", "Keep your data safe."]]),
  th("LegalEase", "legalease.in", "Clear advice. Calm outcomes.", "Property, company and contract law made simple.", "Book a consult",
    ["#fffbf5", "#1c1917", "#78716c", "#7c2d12", "#d6a35c", "#ffffff"], "split", [["Property Law", "Titles, sale and disputes."], ["Company Registration", "Start right, stay compliant."], ["Contracts", "Drafted and reviewed."]], { serif: true }),
  th("BrightPath Academy", "brightpath.in", "Learn smarter. Score higher.", "Coaching with small batches and caring mentors.", "Join a batch",
    ["#fff7ed", "#431407", "#9a3412", "#ea580c", "#fdba74", "#ffffff"], "center", [["Foundation Batch", "Strong basics, step by step."], ["Exam Prep", "Focused practice and tests."], ["Doubt Classes", "Ask until you get it."]]),
  th("CareFirst Clinic", "carefirst.in", "Caring for you, first.", "Friendly doctors and simple online appointments.", "Book appointment",
    ["#f0fdfa", "#134e4a", "#5b8a85", "#0d9488", "#5eead4", "#ffffff"], "split", [["General Care", "Everyday health needs."], ["Diagnostics", "Tests with quick reports."], ["Online Consults", "Talk from home."]]),
  th("Stellar Interiors", "stellar-interiors.in", "Spaces you'll love coming home to.", "Thoughtful interior design from concept to handover.", "Free consultation",
    ["#faf5ff", "#3b0764", "#7e5aa0", "#9333ea", "#d8b4fe", "#ffffff"], "center", [["Living Spaces", "Warm and welcoming."], ["Modular Kitchens", "Smart and stylish."], ["Office Design", "Productive spaces."]], { serif: true }),
  th("AgroFresh Traders", "agrofresh.in", "Farm-fresh, delivered in bulk.", "Reliable fruit and vegetable supply for shops and hotels.", "Get a price list",
    ["#f7fee7", "#365314", "#65822f", "#65a30d", "#bef264", "#ffffff"], "split", [["Fresh Produce", "Picked and packed daily."], ["Bulk Supply", "Steady volumes."], ["Cold Storage", "Keeps it fresh."]]),
];

export const SOLAR_THEMES: Theme[] = [
  th("SolarNest Homes", "solarnest.in", "Let your roof pay you back.", "Rooftop solar for homes, designed and installed locally.", "Get a quote",
    ["#fffbeb", "#422006", "#92400e", "#f59e0b", "#fde68a", "#ffffff"], "split", [["Home Rooftop", "Cut your monthly bill."], ["Net Metering", "Help with approvals."], ["Service Support", "We stay after install."]], { onAccent: "#422006" }),
  th("Surya Shakti", "surya-shakti.in", "Power from the sun, for every home.", "Solar systems and water heaters with honest guidance.", "Free site visit",
    ["#fff7ed", "#431407", "#9a3412", "#ea580c", "#fdba74", "#ffffff"], "split", [["Residential Solar", "Right-sized systems."], ["Solar Water Heaters", "Hot water, no bill."], ["Service Plans", "Yearly care visits."]]),
  th("GreenWatt Farms", "greenwatt.in", "Run your farm on sunshine.", "Solar pumps and farm power without the diesel.", "Talk to an expert",
    ["#f0fdf4", "#14532d", "#4d7c5a", "#16a34a", "#86efac", "#ffffff"], "center", [["Solar Pumps", "Daytime irrigation."], ["Farm Fencing", "Solar-powered safety."], ["Subsidy Guidance", "We explain the process."]]),
  th("VoltEdge Commercial", "voltedge.in", "Lower the cost of doing business.", "Rooftop plants for factories, schools and warehouses.", "Request a plan",
    ["#0f172a", "#e2e8f0", "#94a3b8", "#38bdf8", "#facc15", "#1e293b"], "split", [["Rooftop Plants", "Engineered for your load."], ["Open Access", "Guidance and design."], ["O&M Support", "Monitoring and cleaning."]], { onAccent: "#0f172a" }),
  th("EcoSpark Energy", "ecospark.in", "Smart solar with battery backup.", "Hybrid systems that keep the lights on.", "Get started",
    ["#ecfeff", "#164e63", "#4b8294", "#0891b2", "#67e8f9", "#ffffff"], "center", [["Hybrid Systems", "Solar plus storage."], ["Battery Backup", "Power during cuts."], ["Monitoring App", "Track daily output."]]),
  th("SunCart Lights", "suncart.in", "Light up streets, save on power.", "Solar street and garden lights for communities.", "Request quote",
    ["#1c1917", "#fef3c7", "#d6b97a", "#facc15", "#fb923c", "#292524"], "split", [["Street Lights", "Dusk-to-dawn."], ["Garden Lights", "Soft and efficient."], ["Smart Controllers", "Automatic timing."]], { onAccent: "#1c1917" }),
  th("Aarav Solar Services", "aarav-solar.in", "Keep your panels performing.", "Cleaning, repairs and yearly maintenance.", "Book service",
    ["#eff6ff", "#1e3a8a", "#5b78c4", "#2563eb", "#93c5fd", "#ffffff"], "center", [["Panel Cleaning", "Regular, safe cleaning."], ["Inverter Repair", "Quick diagnosis."], ["Annual Care", "Plans that fit."]]),
  th("Helio Rooftops", "helio-rooftops.in", "Solar for apartments and societies.", "Shared rooftop systems with transparent planning.", "Talk to us",
    ["#fdf4ff", "#4a044e", "#9d5aa6", "#c026d3", "#f0abfc", "#ffffff"], "split", [["Apartment Solar", "Common-area power."], ["Society Projects", "From survey to install."], ["EMI Guidance", "Understand your options."]]),
];

export const REALESTATE_THEMES: Theme[] = [
  th("Skyline Apartments", "skyline-apartments.in", "Live above the city.", "Modern apartments with views and amenities.", "Book a visit",
    ["#0b1220", "#e5edff", "#8ea3c7", "#3b82f6", "#93c5fd", "#131c30"], "split", [["2 BHK Sky Residence", "₹58 L"], ["3 BHK Corner Unit", "₹82 L"], ["Penthouse", "₹1.9 Cr"]]),
  th("Heritage Villas", "heritage-villas.in", "Villas with timeless character.", "Spacious courtyard and garden homes.", "Plan a visit",
    ["#fffbf0", "#3f2d12", "#8a7345", "#a16207", "#facc15", "#ffffff"], "center", [["Courtyard Villa", "₹1.6 Cr"], ["Garden Villa", "₹2.1 Cr"], ["Duplex Villa", "₹1.3 Cr"]], { serif: true }),
  th("Urban Nest Rentals", "urban-nest.in", "Find a rental you'll love.", "Verified homes for professionals and families.", "Search rentals",
    ["#f8fafc", "#0f172a", "#64748b", "#0ea5e9", "#7dd3fc", "#ffffff"], "split", [["Studio Apartment", "₹14k/mo"], ["1 BHK Flat", "₹22k/mo"], ["2 BHK Flat", "₹32k/mo"]]),
  th("Farm Escape Plots", "farm-escape.in", "Your own piece of green.", "Farm plots and weekend villas near the city.", "See plots",
    ["#f7fee7", "#365314", "#65822f", "#65a30d", "#bef264", "#ffffff"], "split", [["Farm Plot A", "₹18 L"], ["Farm Plot B", "₹26 L"], ["Farm Villa", "₹95 L"]]),
  th("Metro Commercial", "metro-commercial.in", "Space for your business to grow.", "Shops, offices and co-working in prime areas.", "Enquire now",
    ["#18181b", "#fafafa", "#a1a1aa", "#f97316", "#fdba74", "#27272a"], "center", [["Retail Shop", "₹75 L"], ["Office Floor", "₹2.4 Cr"], ["Co-working Seats", "₹9k/mo"]], { onAccent: "#18181b" }),
  th("Lakeside Residences", "lakeside-residences.in", "Wake up to the water.", "Premium homes beside a calm lake.", "Book a tour",
    ["#ecfeff", "#083344", "#4b8294", "#0e7490", "#67e8f9", "#ffffff"], "center", [["3 BHK Lake View", "₹1.1 Cr"], ["4 BHK Villa", "₹1.8 Cr"], ["Premium Plot", "₹65 L"]]),
  th("Trusted Homes Realty", "trusted-homes.in", "Honest advice. Right home.", "Resale and ready-to-move homes with clear paperwork.", "Talk to an agent",
    ["#fff1f2", "#4c0519", "#9f4b5c", "#be123c", "#fda4af", "#ffffff"], "split", [["Ready 2 BHK", "₹64 L"], ["Resale 3 BHK", "₹88 L"], ["Builder Floor", "₹72 L"]]),
  th("NextGen Smart Homes", "nextgen-homes.in", "Homes that think ahead.", "Smart-home ready apartments with modern design.", "Book a demo",
    ["#0f0a1f", "#ede9fe", "#a78bfa", "#8b5cf6", "#22d3ee", "#1b1433"], "center", [["Smart 2 BHK", "₹71 L"], ["Smart 3 BHK", "₹99 L"], ["Studio Loft", "₹49 L"]]),
];

export const ECOMMERCE_THEMES: Theme[] = [
  th("Urban Kicks", "urban-kicks.in", "Step out in style.", "Fresh sneakers and streetwear, delivered fast.", "Shop sneakers",
    ["#0a0a0a", "#ffffff", "#a3a3a3", "#a3e635", "#22d3ee", "#171717"], "split", [["Street Runner", "₹2,999"], ["Retro High", "₹3,499"], ["Comfort Slides", "₹899"]], { onAccent: "#0a0a0a" }),
  th("Glow Beauty", "glow-beauty.in", "Skin that glows.", "Skincare and makeup you can trust.", "Shop now",
    ["#fff1f2", "#500724", "#9f4b6c", "#db2777", "#f9a8d4", "#ffffff"], "center", [["Vitamin C Serum", "₹599"], ["Lip Tint", "₹299"], ["Sunscreen", "₹449"]], { serif: true }),
  th("FreshBasket", "freshbasket.in", "Groceries at your doorstep.", "Fresh vegetables, fruits and dairy daily.", "Start shopping",
    ["#f0fdf4", "#14532d", "#4d7c5a", "#16a34a", "#bbf7d0", "#ffffff"], "split", [["Veggie Box", "₹349"], ["Fruit Combo", "₹299"], ["Dairy Pack", "₹199"]]),
  th("Gadget Galaxy", "gadget-galaxy.in", "Tech for everyday life.", "Smart gadgets and accessories at fair prices.", "Shop gadgets",
    ["#0b1020", "#e0e7ff", "#94a3b8", "#3b82f6", "#a78bfa", "#151b30"], "center", [["Wireless Earbuds", "₹1,499"], ["Smart Watch", "₹2,999"], ["Power Bank", "₹999"]]),
  th("Kidz Corner", "kidz-corner.in", "Play, learn, smile.", "Toys and activity kits that spark imagination.", "Shop toys",
    ["#fffbeb", "#422006", "#92400e", "#f97316", "#fde047", "#ffffff"], "split", [["Building Blocks", "₹799"], ["Soft Toy", "₹499"], ["Art Kit", "₹399"]]),
  th("Leaf & Loom Home", "leaf-and-loom.in", "Make your home feel like you.", "Handcrafted décor and soft furnishings.", "Explore décor",
    ["#faf7f2", "#3a2f26", "#8a7a68", "#a16207", "#d6b88a", "#ffffff"], "center", [["Cotton Throw", "₹1,299"], ["Ceramic Vase", "₹899"], ["Wall Art", "₹1,799"]], { serif: true }),
  th("BookNest", "booknest.in", "Stories worth turning pages for.", "Bestsellers, study guides and kids' books.", "Browse books",
    ["#eff6ff", "#1e3a8a", "#5b78c4", "#1d4ed8", "#bfdbfe", "#ffffff"], "split", [["Bestseller Novel", "₹349"], ["Study Guide", "₹499"], ["Kids Stories", "₹249"]]),
  th("Gold Charm Jewels", "goldcharm.in", "Jewellery made to be admired.", "Elegant gold-plated pieces for every occasion.", "Shop jewellery",
    ["#1a1410", "#fdecc8", "#c9ab70", "#d4a017", "#f5d78a", "#261d15"], "split", [["Gold Plated Necklace", "₹1,999"], ["Jhumka Earrings", "₹799"], ["Bangle Set", "₹1,299"]], { serif: true, onAccent: "#1a1410" }),
];

export const PORTFOLIO_THEMES: Theme[] = [
  th("Rohan Verma", "rohanverma.film", "Stories told in motion.", "Wedding films, travel reels and brand videos.", "Book a shoot",
    ["#09090b", "#fafafa", "#a1a1aa", "#f43f5e", "#fb7185", "#18181b"], "split", [["Wedding Film", ""], ["Travel Reel", ""], ["Brand Ad", ""]]),
  th("Studio Pixel", "studiopixel.design", "Design with a bold point of view.", "Branding, packaging and social media design.", "Start a project",
    ["#fefce8", "#1c1917", "#78716c", "#eab308", "#a3e635", "#ffffff"], "center", [["Brand Identity", ""], ["Packaging", ""], ["Social Kit", ""]], { onAccent: "#1c1917" }),
  th("Dr. Anjali Rao", "dranjalirao.in", "Compassionate care, clearly explained.", "Experienced doctor with online consultations.", "Book consult",
    ["#f0f9ff", "#0c4a6e", "#4f7f9c", "#0284c7", "#7dd3fc", "#ffffff"], "split", [["About", ""], ["Clinic", ""], ["Online Consult", ""]]),
  th("Karthik Dev", "karthikdev.in", "I build apps people actually use.", "Freelance developer for web and mobile projects.", "Hire me",
    ["#0d1117", "#e6edf3", "#8b949e", "#2ea043", "#58a6ff", "#161b22"], "split", [["Booking App", ""], ["CRM Dashboard", ""], ["Landing Pages", ""]]),
  th("Sneha Interiors", "sneha-interiors.in", "Rooms with personality.", "Interior stylist for homes and small studios.", "See projects",
    ["#fdf2f8", "#500724", "#9f4b6c", "#be185d", "#f9a8d4", "#ffffff"], "center", [["Living Room", ""], ["Kitchen", ""], ["Studio", ""]], { serif: true }),
  th("Chef Arjun", "chefarjun.in", "Food that tells a story.", "Private dining, tasting menus and cooking workshops.", "Book a table",
    ["#fff7ed", "#431407", "#9a3412", "#c2410c", "#fdba74", "#ffffff"], "center", [["Tasting Menu", ""], ["Private Dining", ""], ["Workshops", ""]]),
  th("Fit with Priya", "fitwithpriya.in", "Strong body, calm mind.", "Personal training, yoga and nutrition coaching.", "Start today",
    ["#f7fee7", "#1a2e05", "#4d7c0f", "#84cc16", "#bef264", "#ffffff"], "split", [["Weight Loss", ""], ["Strength", ""], ["Yoga", ""]], { onAccent: "#1a2e05" }),
  th("Tara Music", "taramusic.in", "Music for every moment.", "Live shows, studio sessions and music lessons.", "Book Tara",
    ["#1e1b4b", "#e0e7ff", "#a5b4fc", "#f472b6", "#818cf8", "#2e2a6b"], "center", [["Live Shows", ""], ["Studio Sessions", ""], ["Lessons", ""]], { onAccent: "#1e1b4b" }),
];
