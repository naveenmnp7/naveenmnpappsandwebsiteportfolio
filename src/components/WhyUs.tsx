import { motion } from "framer-motion";
import { BadgeIndianRupee, Gauge, HeartHandshake, MessageCircle, Search, Smartphone, Sparkles, Eye } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const ITEMS = [
  { icon: Sparkles, title: "Modern and Premium Designs", desc: "Clean, current layouts that make your brand look established." },
  { icon: Smartphone, title: "Mobile-First Development", desc: "Built for phones first, then scaled up for tablets and desktops." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Agency-quality websites at prices small businesses can afford." },
  { icon: Gauge, title: "Fast and Responsive Websites", desc: "Lightweight code and optimized images for quick loading." },
  { icon: MessageCircle, title: "WhatsApp Business Integration", desc: "Let customers message you in one tap from any page." },
  { icon: Search, title: "SEO-Friendly Structure", desc: "Semantic markup and clean metadata so search engines understand you." },
  { icon: HeartHandshake, title: "Personalized Support", desc: "Talk directly with the people building your website." },
  { icon: Eye, title: "Transparent Pricing", desc: "You'll know what's included — and what isn't — before we start." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section" aria-labelledby="why-title">
      <SectionHeading id="why-title" eyebrow="Why Choose Us" title="A web partner that" highlight="works for your growth." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={(i % 4) * 0.07}>
            <motion.div whileHover="hover" initial="rest" className="glass group h-full rounded-2xl p-6 transition-colors hover:border-brand-cyan/40">
              <motion.span
                variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: [0, -10, 10, 0], scale: 1.12 } }}
                transition={{ duration: 0.5 }}
                className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-violet text-white shadow-lg shadow-brand-blue/30"
              >
                <it.icon size={22} />
              </motion.span>
              <h3 className="mt-5 font-display text-base font-bold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{it.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
