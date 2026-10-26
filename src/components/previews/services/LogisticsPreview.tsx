import { ArrowRight, MapPin, Package, Truck, Warehouse } from "lucide-react";

/** Service sample: Business website — logistics company, charcoal + orange. */
export default function LogisticsPreview() {
  const items = [
    { icon: Truck, t: "Freight Transport", d: "Reliable full and part-load movement." },
    { icon: Warehouse, t: "Warehousing", d: "Secure storage close to your market." },
    { icon: Package, t: "Last-Mile Delivery", d: "Doorstep delivery with proof." },
    { icon: MapPin, t: "Live Tracking", d: "Know where every shipment is." },
  ];
  return (
    <div className="bg-[#16181d] font-sans text-slate-300" style={{ fontSize: 16 }}>
      <header className="flex items-center justify-between px-12 py-5">
        <div className="flex items-center gap-2 text-xl font-extrabold text-white"><Truck className="text-[#ff7a1a]" /> VERTEX&nbsp;LOGISTICS</div>
        <nav className="flex gap-8 text-sm text-slate-400"><span>Services</span><span>Coverage</span><span>Track</span><span>Contact</span></nav>
        <span className="rounded-md bg-[#ff7a1a] px-5 py-2.5 text-sm font-bold text-white">Request a quote</span>
      </header>
      <section className="relative grid grid-cols-[1.1fr_1fr] items-center gap-6 px-12 pb-16 pt-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff7a1a]">Moving business forward</p>
          <h3 className="mt-4 text-[52px] font-black leading-[1.02] text-white">Cargo that arrives <span className="text-[#ff7a1a]">on time.</span></h3>
          <p className="mt-4 max-w-md text-[17px] text-slate-400">Dependable transport and warehousing for growing manufacturers and traders.</p>
          <div className="mt-7 flex gap-3">
            <span className="flex items-center gap-2 rounded-md bg-[#ff7a1a] px-6 py-3 text-sm font-bold text-white">Get a quote <ArrowRight size={16} /></span>
            <span className="rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-white">Track shipment</span>
          </div>
        </div>
        <svg viewBox="0 0 420 300" className="w-full" aria-hidden>
          <path d="M20 240 Q120 120 210 170 T400 60" stroke="#ff7a1a" strokeWidth="3" strokeDasharray="8 8" fill="none" />
          {[[20, 240], [210, 170], [400, 60]].map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="12" fill="#ff7a1a" /><circle cx={x} cy={y} r="22" fill="#ff7a1a" opacity=".2" /></g>)}
          <g transform="translate(120 190)">
            <rect width="120" height="54" rx="6" fill="#2a2e37" /><rect x="120" y="14" width="50" height="40" rx="6" fill="#ff7a1a" />
            <rect x="128" y="22" width="26" height="14" rx="3" fill="#16181d" /><circle cx="30" cy="58" r="12" fill="#0d0e11" /><circle cx="140" cy="58" r="12" fill="#0d0e11" />
          </g>
        </svg>
      </section>
      <section className="grid grid-cols-4 gap-5 px-12 pb-14">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-2xl border border-white/10 bg-[#1f2229] p-6">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#ff7a1a]/15 text-[#ff7a1a]"><Icon size={22} /></span>
            <p className="mt-4 font-bold text-white">{t}</p><p className="mt-1 text-sm text-slate-400">{d}</p>
          </div>
        ))}
      </section>
      <section className="mx-12 mb-14 grid grid-cols-[1fr_1fr] items-center gap-8 rounded-3xl bg-[#ff7a1a] p-9">
        <div><p className="text-3xl font-black text-white">Need a transport quote?</p><p className="mt-2 text-white/85">Tell us your route and load — we'll reply on WhatsApp.</p></div>
        <div className="space-y-3">
          {["Pickup city", "Delivery city"].map((l) => <div key={l} className="rounded-lg bg-white/95 px-4 py-3 text-sm text-slate-500">{l}</div>)}
          <span className="block rounded-lg bg-[#16181d] py-3 text-center text-sm font-bold text-white">Send enquiry</span>
        </div>
      </section>
    </div>
  );
}
