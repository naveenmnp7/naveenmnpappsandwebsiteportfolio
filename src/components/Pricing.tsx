import { motion } from "framer-motion";
import { Check, FileText } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { PLANS, PRICING_DISCLAIMER, formatPrice } from "../config/site";
import { useEnquiry } from "../hooks/useEnquiry";

export default function Pricing() {
  const { startEnquiry } = useEnquiry();
  return (
    <section id="pricing" className="section" aria-labelledby="pricing-title">
      <SectionHeading
        id="pricing-title"
        eyebrow="Pricing Plans"
        title="Simple, transparent"
        highlight="website pricing."
        subtitle="Pick the plan that fits your business. Every plan starts with a quick conversation so you know exactly what you're getting."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} className="h-full">
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`relative flex h-full flex-col rounded-2xl p-6 ${p.highlight ? "glow-border bg-gradient-to-b from-brand-blue/20 via-ink-800/80 to-ink-900/80 shadow-[0_0_60px_-10px_rgba(42,123,255,0.55)] xl:-mt-4 xl:pb-10" : "glass"}`}
            >
              {p.highlight && (
                <motion.span aria-hidden className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-brand-cyan/40 to-brand-violet/40 blur-xl" animate={{ opacity: [0.35, 0.8, 0.35] }} transition={{ duration: 4, repeat: Infinity }} />
              )}
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-4 py-1 text-[11px] font-extrabold tracking-[0.15em] text-amber-950 shadow-lg">
                  {p.badge}
                </span>
              )}
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">{p.name}</h3>

              <div className="mt-4 min-h-[88px]">
                {p.priceLabel && <p className="text-xs uppercase tracking-widest text-slate-400">{p.priceLabel}</p>}
                {p.regularPrice && <p className="text-sm text-slate-500 line-through">Regular {formatPrice(p.regularPrice)}</p>}
                <p className="font-display text-4xl font-extrabold text-white">{formatPrice(p.price)}</p>
                {p.regularPrice && <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">Offer price</p>}
              </div>

              <ul className="mt-5 flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-cyan" /> {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() =>
                  startEnquiry({
                    websiteType: p.id === "ecommerce" ? "E-commerce Website" : p.id === "starter" ? "Landing Page" : "Business Website",
                    note: `I'd like a quote for the "${p.name}" plan (${p.priceLabel ? p.priceLabel + " " : ""}${formatPrice(p.price)}).`,
                  })
                }
                className={`mt-7 w-full ${p.highlight ? "btn-primary" : "btn-ghost"}`}
              >
                <FileText size={16} /> Get a Quote
              </button>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center text-xs leading-relaxed text-slate-400">
          {PRICING_DISCLAIMER}
        </p>
      </Reveal>
    </section>
  );
}
