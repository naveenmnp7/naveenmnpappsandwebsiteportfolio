import { Bell, Calendar, ClipboardList, Home, PhoneCall, Search, ShoppingBag, User } from "lucide-react";
import type { BookingApp, CrmApp, StoreApp } from "../../data/appThemes";

const LEADS = ["Ravi Kumar", "Anitha Rao", "Suresh B.", "Lakshmi D.", "Mahesh P.", "Divya S.", "Kiran T.", "Sowmya R."];
const STATUS: [string, string, string][] = [
  ["Follow-up", "#fef3c7", "#b45309"],
  ["Interested", "#d1fae5", "#047857"],
  ["New lead", "#e0f2fe", "#0369a1"],
  ["Call back", "#ede9fe", "#6d28d9"],
];

export function BookingScreen({ app, seed }: { app: BookingApp; seed: number }) {
  const slots = ["10:00", "11:30", "1:00", "3:30", "5:00", "6:30"];
  const pick = seed % slots.length;
  return (
    <div className="flex h-full flex-col pt-7" style={{ background: app.tint, color: "#1f2937" }}>
      <div className="px-3 pb-2"><p className="text-[9px] opacity-60">Book your visit</p><p className="text-sm font-extrabold">{app.brand}</p></div>
      <div className="flex gap-1.5 px-3">
        {["Mon", "Tue", "Wed", "Thu"].map((d, i) => (
          <div key={d} className="flex-1 rounded-lg bg-white py-1.5 text-center" style={i === 1 ? { background: app.accent, color: "#fff" } : undefined}><p className="text-[8px]">{d}</p><p className="font-bold">{12 + i}</p></div>
        ))}
      </div>
      <p className="px-3 pb-1 pt-3 font-bold">Choose a time</p>
      <div className="grid grid-cols-3 gap-1.5 px-3">
        {slots.map((t, i) => <div key={t} className="rounded-lg bg-white py-2 text-center font-semibold" style={i === pick ? { background: app.accent, color: "#fff" } : undefined}>{t}</div>)}
      </div>
      <p className="px-3 pb-1 pt-3 font-bold">Service</p>
      <div className="mx-3 rounded-xl bg-white p-2.5"><p className="font-bold">{app.service}</p><p className="opacity-60">{app.length}</p></div>
      <div className="mt-auto p-3"><div className="rounded-xl py-2.5 text-center font-bold text-white" style={{ background: app.accent }}>Confirm booking</div></div>
    </div>
  );
}

export function CrmScreen({ app, seed }: { app: CrmApp; seed: number }) {
  const rows = [0, 1, 2, 3].map((i) => ({ n: LEADS[(seed + i) % LEADS.length], s: STATUS[(seed + i * 2) % STATUS.length] }));
  return (
    <div className="flex h-full flex-col bg-[#f1f5f9] pt-7 text-slate-800">
      <div className="px-3 pb-4 pt-2 text-white" style={{ background: app.accent }}>
        <p className="text-[9px] opacity-80">{app.brand}</p><p className="text-sm font-extrabold">{app.title}</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/25"><div className="h-full w-2/5 rounded-full bg-white" /></div>
      </div>
      <div className="space-y-1.5 p-2.5">
        {rows.map((r) => (
          <div key={r.n} className="flex items-center gap-2 rounded-xl bg-white p-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-200 font-bold">{r.n[0]}</span>
            <div className="min-w-0 flex-1"><p className="truncate font-bold">{r.n}</p><span className="rounded-full px-1.5 py-0.5 text-[8px] font-semibold" style={{ background: r.s[1], color: r.s[2] }}>{r.s[0]}</span></div>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#22c55e] text-white"><PhoneCall size={12} /></span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-around border-t bg-white py-2 text-slate-400"><ClipboardList size={16} style={{ color: app.accent }} /><Calendar size={16} /><User size={16} /></div>
    </div>
  );
}

export function StoreScreen({ app }: { app: StoreApp }) {
  return (
    <div className="flex h-full flex-col bg-white pt-7 text-slate-800">
      <div className="flex items-center gap-1.5 px-3 pb-2"><div className="flex flex-1 items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1.5 text-slate-400"><Search size={11} /> Search {app.brand}</div><Bell size={14} /></div>
      <div className="mx-3 rounded-xl p-3 text-white" style={{ background: `linear-gradient(120deg, ${app.accent}, ${app.accent}aa)` }}><p className="text-[8px] opacity-80">{app.brand}</p><p className="text-sm font-extrabold leading-tight">{app.banner}</p></div>
      <p className="px-3 pb-1 pt-3 font-bold">Popular</p>
      <div className="grid grid-cols-2 gap-2 px-3">
        {app.products.map(([n, p], i) => (
          <div key={n} className="rounded-xl border border-slate-100 p-1.5">
            <div className="aspect-square rounded-lg" style={{ background: `linear-gradient(${135 + i * 60}deg, ${app.accent}33, ${app.accent}99)` }} />
            <p className="mt-1 truncate font-bold">{n}</p><p className="font-extrabold" style={{ color: app.accent }}>{p}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-around border-t py-2 text-slate-400"><Home size={16} style={{ color: app.accent }} /><Search size={16} /><ShoppingBag size={16} /><User size={16} /></div>
    </div>
  );
}
