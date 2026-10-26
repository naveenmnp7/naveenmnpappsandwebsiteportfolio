import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BadgePercent, Check, Info, MessageCircle } from "lucide-react";
import Reveal from "./ui/Reveal";
import { OFFER_FEATURES, PRICES, PRICING_DISCLAIMER, SITE, formatPrice } from "../config/site";
import { messages, openWhatsApp } from "../lib/whatsapp";

/** Only renders a countdown when a genuine deadline is configured in site.ts. */
function Countdown({ endsAt }: { endsAt: string }) {
  const [left, setLeft] = useState(() => new Date(endsAt).getTime() - Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setLeft(new Date(endsAt).getTime() - Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [endsAt]);
  if (Number.isNaN(left) || left <= 0) return null;
  const d = Math.floor(left / 86400000);
  const h = Math.floor((left % 86400000) / 3600000);
  const m = Math.floor((left % 3600000) / 60000);
  const s = Math.floor((left % 60000) / 1000);
  return (
    <p className="mt-4 text-sm font-semibold text-amber-300" role="timer" aria-label="Time left on offer">
      Offer ends in {d}d {h}h {m}m {s}s
    </p>
  );
}

export default function Offer() {
  const showCountdown = SITE.offerEndsAt && new Date(SITE.offerEndsAt).getTime() > Date.now();
  return (
    <section id="offer" className="relative isolate overflow-hidden py-20 md:py-28" aria-labelledby="offer-title">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a2a8a] via-[#3a1fb5] to-[#6d28d9]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,195,255,.35),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(124,92,255,.5),transparent_45%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-950 shadow-lg shadow-amber-500/30">
            <BadgePercent size={14} /> Limited-Time Offer
          </span>
          <h2 id="offer-title" className="mt-6 font-display text-3xl font-extrabold uppercase leading-[1.08] text-white sm:text-4xl md:text-5xl">
            Your business deserves a better website.
          </h2>
          <p className="mt-4 max-w-md text-lg text-blue-100/90">Launch your professional business website at an introductory price.</p>
          {showCountdown && <Countdown endsAt={SITE.offerEndsAt!} />}

          <div className="mt-8 flex gap-3 rounded-2xl border border-white/15 bg-black/20 p-4 text-sm leading-relaxed text-blue-100/90 backdrop-blur">
            <Info size={18} className="mt-0.5 shrink-0 text-amber-300" aria-hidden />
            <p><strong className="text-white">What's not included: </strong>{PRICING_DISCLAIMER}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <motion.div aria-hidden className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-brand-cyan via-brand-violet to-pink-500 opacity-70 blur-xl" animate={{ opacity: [0.45, 0.8, 0.45] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
            <div className="relative rounded-[1.75rem] border border-white/20 bg-ink-950/90 p-7 backdrop-blur-xl sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Regular price</p>
              <p className="font-display text-xl font-semibold text-slate-500 line-through decoration-2" aria-label={`Regular price ${formatPrice(PRICES.businessRegular)}`}>
                {formatPrice(PRICES.businessRegular)}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">Today offer</p>
              <p className="font-display text-6xl font-extrabold leading-none text-white sm:text-7xl">
                <span className="text-gradient">{formatPrice(PRICES.businessOffer)}</span>
              </p>
              <p className="mt-2 text-xs text-slate-500">Agency-provided promotional pricing · one-time project fee</p>

              <ul className="mt-6 grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
                {OFFER_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-400"><Check size={13} strokeWidth={3} /></span>
                    {f}
                  </li>
                ))}
              </ul>

              <button type="button" onClick={() => openWhatsApp(messages.offer())} className="btn-primary mt-8 w-full !py-4 text-base uppercase tracking-wide">
                <MessageCircle size={18} /> Claim your {formatPrice(PRICES.businessOffer)} offer
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">Opens WhatsApp with a prefilled message. No payment taken on this site.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
