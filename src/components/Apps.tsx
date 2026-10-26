import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { APP_DISCLAIMER, APP_PLANS, formatPrice } from "../config/site";
import { useEnquiry } from "../hooks/useEnquiry";
import { useRotatingIndex } from "../hooks/useRotatingIndex";
import { BOOKING_APPS, CRM_APPS, STORE_APPS } from "../data/appThemes";
import { BookingScreen, CrmScreen, StoreScreen } from "./apps/screens";

/* ---------- rotating phone mockups: 3 app models x 10 concept samples ---------- */

function PhoneRotator<T>({ label, apps, brand, render, interval }: { label: string; apps: T[]; brand: (a: T) => string; render: (a: T, i: number) => ReactNode; interval: number }) {
  const { index, setIndex, setPaused, ref } = useRotatingIndex<HTMLElement>(apps.length, interval);
  const app = apps[index];
  const step = (d: number) => setIndex((index + d + apps.length) % apps.length);
  return (
    <figure ref={ref} className="mx-auto w-[220px] shrink-0 snap-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="glow-border rounded-[2rem] bg-ink-900 p-2 shadow-2xl shadow-black/60">
        <div className="relative aspect-[9/18.5] overflow-hidden rounded-[1.6rem] bg-white text-[10px]">
          <AnimatePresence initial={false}>
            <motion.div key={index} className="absolute inset-0" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.5 }}>
              {render(app, index)}
            </motion.div>
          </AnimatePresence>
          <div className="absolute left-1/2 top-1.5 z-10 h-3.5 w-16 -translate-x-1/2 rounded-full bg-black" aria-hidden />
        </div>
      </div>
      <figcaption className="mt-3 text-center">
        <p className="text-xs font-semibold text-slate-200">{label}</p>
        <div className="mt-1 flex items-center justify-center gap-1">
          <button type="button" onClick={() => step(-1)} aria-label={`Previous ${label} sample`} className="grid h-8 w-8 place-items-center rounded-lg text-slate-300 hover:bg-white/10"><ChevronLeft size={16} /></button>
          <span className="min-w-[8.5rem] text-xs text-slate-400" aria-live="off">{brand(app)} · {index + 1}/{apps.length}</span>
          <button type="button" onClick={() => step(1)} aria-label={`Next ${label} sample`} className="grid h-8 w-8 place-items-center rounded-lg text-slate-300 hover:bg-white/10"><ChevronRight size={16} /></button>
        </div>
      </figcaption>
    </figure>
  );
}

const USE_CASES = ["Booking & appointments", "CRM & telecalling", "Orders & delivery", "Inventory & billing", "Attendance & HR", "Learning & courses", "Field-staff tracking", "Something custom"];

export default function Apps() {
  const { startEnquiry } = useEnquiry();
  return (
    <section id="apps" className="section" aria-labelledby="apps-title">
      <SectionHeading
        id="apps-title"
        eyebrow="Mobile App Development"
        title="Apps that run your"
        highlight="business from a phone."
        subtitle="From a simple single-purpose app to a full business system — designed, built and handed over ready to use."
      />

      {/* concept phones */}
      <Reveal>
        <div className="-mx-5 flex snap-x gap-6 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:justify-items-center md:overflow-visible md:px-0">
          <PhoneRotator label="Booking apps" apps={BOOKING_APPS} brand={(a) => a.brand} interval={3800} render={(a, i) => <BookingScreen app={a} seed={i} />} />
          <PhoneRotator label="CRM / telecalling apps" apps={CRM_APPS} brand={(a) => a.brand} interval={4200} render={(a, i) => <CrmScreen app={a} seed={i} />} />
          <PhoneRotator label="Store / ordering apps" apps={STORE_APPS} brand={(a) => a.brand} interval={4600} render={(a) => <StoreScreen app={a} />} />
        </div>
        <p className="mt-2 text-center text-xs text-slate-500">10 concept samples in each app type — sample screens only, not real client apps.</p>
      </Reveal>

      {/* tiers */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {APP_PLANS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} className="h-full">
            <motion.article whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }} className="glass glow-border flex h-full flex-col rounded-2xl p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-violet text-white"><Smartphone size={20} /></span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-white">{p.name}</h3>
              <p className="text-sm text-slate-400">{p.tagline}</p>
              <div className="mt-5">
                <p className="text-xs uppercase tracking-widest text-slate-400">Starting at</p>
                <p className="font-display text-4xl font-extrabold text-white">{formatPrice(p.from)}{p.plus && <span className="text-2xl text-brand-cyan">+</span>}</p>
              </div>
              <ul className="mt-5 flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300"><Check size={16} className="mt-0.5 shrink-0 text-brand-cyan" /> {f}</li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => startEnquiry({ websiteType: "Mobile App", note: `I'd like a quote for a ${p.name} (starting at ${formatPrice(p.from)}${p.plus ? "+" : ""}).` })}
                className="btn-primary mt-7 w-full"
              >
                Get an App Quote
              </button>
            </motion.article>
          </Reveal>
        ))}
      </div>

      {/* use cases */}
      <Reveal className="mt-12">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">What we can build</p>
        <ul className="flex flex-wrap justify-center gap-2.5">
          {USE_CASES.map((u) => <li key={u} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">{u}</li>)}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center text-xs leading-relaxed text-slate-400">{APP_DISCLAIMER}</p>
      </Reveal>
    </section>
  );
}
