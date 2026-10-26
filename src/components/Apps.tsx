import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Bell, Calendar, Check, ClipboardList, Home, PhoneCall, Search, ShoppingBag, Smartphone, User } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { APP_DISCLAIMER, APP_PLANS, formatPrice } from "../config/site";
import { useEnquiry } from "../hooks/useEnquiry";

/* ---------- phone mockups (concept designs, drawn in code) ---------- */

function Phone({ label, children }: { label: string; children: ReactNode }) {
  return (
    <figure className="mx-auto w-[220px] shrink-0 snap-center">
      <div className="glow-border rounded-[2rem] bg-ink-900 p-2 shadow-2xl shadow-black/60">
        <div className="relative aspect-[9/18.5] overflow-hidden rounded-[1.6rem] bg-white text-[10px]">
          <div className="absolute left-1/2 top-1.5 z-10 h-3.5 w-16 -translate-x-1/2 rounded-full bg-black" aria-hidden />
          {children}
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs font-medium text-slate-400">{label}</figcaption>
    </figure>
  );
}

function BookingScreen() {
  const slots = ["10:00", "11:30", "1:00", "3:30", "5:00", "6:30"];
  return (
    <div className="flex h-full flex-col bg-[#fdf2f8] pt-7 text-[#4a1d3a]">
      <div className="px-3 pb-2"><p className="text-[9px] text-[#9d6b88]">Book your visit</p><p className="text-sm font-extrabold">Glow Salon</p></div>
      <div className="flex gap-1.5 px-3">{["Mon", "Tue", "Wed", "Thu"].map((d, i) => <div key={d} className={`flex-1 rounded-lg py-1.5 text-center ${i === 1 ? "bg-[#db2777] text-white" : "bg-white"}`}><p className="text-[8px]">{d}</p><p className="font-bold">{12 + i}</p></div>)}</div>
      <p className="px-3 pb-1 pt-3 font-bold">Choose a time</p>
      <div className="grid grid-cols-3 gap-1.5 px-3">{slots.map((t, i) => <div key={t} className={`rounded-lg py-2 text-center font-semibold ${i === 2 ? "bg-[#db2777] text-white" : "bg-white"}`}>{t}</div>)}</div>
      <p className="px-3 pb-1 pt-3 font-bold">Service</p>
      <div className="mx-3 rounded-xl bg-white p-2.5"><p className="font-bold">Hair spa</p><p className="text-[#9d6b88]">45 min</p></div>
      <div className="mt-auto p-3"><div className="rounded-xl bg-[#db2777] py-2.5 text-center font-bold text-white">Confirm booking</div></div>
    </div>
  );
}

function CrmScreen() {
  const rows = [{ n: "Ravi Kumar", s: "Follow-up", c: "bg-amber-100 text-amber-700" }, { n: "Anitha Rao", s: "Interested", c: "bg-emerald-100 text-emerald-700" }, { n: "Suresh B.", s: "New lead", c: "bg-sky-100 text-sky-700" }, { n: "Lakshmi D.", s: "Call back", c: "bg-violet-100 text-violet-700" }];
  return (
    <div className="flex h-full flex-col bg-[#f1f5f9] pt-7 text-slate-800">
      <div className="bg-[#1d4ed8] px-3 pb-4 pt-2 text-white"><p className="text-[9px] opacity-80">Today</p><p className="text-sm font-extrabold">My calls</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/25"><div className="h-full w-2/5 rounded-full bg-white" /></div></div>
      <div className="space-y-1.5 p-2.5">
        {rows.map((r) => (
          <div key={r.n} className="flex items-center gap-2 rounded-xl bg-white p-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-200 font-bold">{r.n[0]}</span>
            <div className="min-w-0 flex-1"><p className="truncate font-bold">{r.n}</p><span className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${r.c}`}>{r.s}</span></div>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#22c55e] text-white"><PhoneCall size={12} /></span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-around border-t bg-white py-2 text-slate-400"><ClipboardList size={16} className="text-[#1d4ed8]" /><Calendar size={16} /><User size={16} /></div>
    </div>
  );
}

function StoreScreen() {
  const cards = [{ n: "Everyday Tote", p: "₹899", c: "from-[#fde68a] to-[#f59e0b]" }, { n: "Canvas Shoes", p: "₹1,499", c: "from-[#bae6fd] to-[#38bdf8]" }];
  return (
    <div className="flex h-full flex-col bg-white pt-7 text-slate-800">
      <div className="flex items-center gap-1.5 px-3 pb-2"><div className="flex flex-1 items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1.5 text-slate-400"><Search size={11} /> Search</div><Bell size={14} /></div>
      <div className="mx-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#ec4899] p-3 text-white"><p className="text-[8px] opacity-80">New season</p><p className="text-sm font-extrabold leading-tight">Up to 30% off</p></div>
      <p className="px-3 pb-1 pt-3 font-bold">Popular</p>
      <div className="grid grid-cols-2 gap-2 px-3">{cards.map((c) => <div key={c.n} className="rounded-xl border border-slate-100 p-1.5"><div className={`aspect-square rounded-lg bg-gradient-to-br ${c.c}`} /><p className="mt-1 font-bold">{c.n}</p><p className="font-extrabold text-[#7c3aed]">{c.p}</p></div>)}</div>
      <div className="mt-auto flex justify-around border-t py-2 text-slate-400"><Home size={16} className="text-[#7c3aed]" /><Search size={16} /><ShoppingBag size={16} /><User size={16} /></div>
    </div>
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
          <Phone label="Booking app — concept"><BookingScreen /></Phone>
          <Phone label="CRM / telecalling app — concept"><CrmScreen /></Phone>
          <Phone label="Store app — concept"><StoreScreen /></Phone>
        </div>
        <p className="mt-2 text-center text-xs text-slate-500">Sample screens shown are concept designs, not real client apps.</p>
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
