import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Home, LayoutTemplate, RefreshCcw, ShoppingCart, Sun, User, UtensilsCrossed } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { useEnquiry } from "../hooks/useEnquiry";

const SERVICES = [
  { icon: Building2, title: "Business Website Development", type: "Business Website", desc: "Professional company websites that build trust and bring in enquiries." },
  { icon: UtensilsCrossed, title: "Restaurant Website Design", type: "Restaurant Website", desc: "Mouth-watering menus, location maps and easy table reservations." },
  { icon: Sun, title: "Solar Company Websites", type: "Solar Company Website", desc: "Showcase installations and savings, and capture solar leads 24/7." },
  { icon: Home, title: "Real Estate Websites", type: "Real Estate Website", desc: "Elegant property listings with fast, direct enquiry buttons." },
  { icon: ShoppingCart, title: "E-commerce Websites", type: "E-commerce Website", desc: "Online stores with product catalogues, cart and checkout support." },
  { icon: User, title: "Portfolio Websites", type: "Portfolio Website", desc: "Stand out with a creative portfolio that shows your best work." },
  { icon: LayoutTemplate, title: "Landing Page Development", type: "Landing Page", desc: "Focused, high-converting pages for campaigns and product launches." },
  { icon: RefreshCcw, title: "Website Redesign", type: "Website Redesign", desc: "Modernise an outdated site with a faster, cleaner, mobile-first look." },
];

export default function Services() {
  const { startEnquiry } = useEnquiry();
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <SectionHeading
        id="services-title"
        eyebrow="Our Services"
        title="Websites built for"
        highlight="every kind of business."
        subtitle="From a single landing page to a full online store — premium design with practical features that help you get customers."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 0.07}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="glass glow-border group relative flex h-full flex-col rounded-2xl p-6"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/0 via-brand-violet/0 to-brand-cyan/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-blue/10 group-hover:to-brand-violet/10 group-hover:opacity-100" aria-hidden />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 text-brand-cyan ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <s.icon size={22} />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-bold leading-snug text-white">{s.title}</h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              <button
                type="button"
                onClick={() => startEnquiry({ websiteType: s.type, note: `I'm interested in: ${s.title}.` })}
                className="relative mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
                aria-label={`Learn more about ${s.title}`}
              >
                Learn More <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
