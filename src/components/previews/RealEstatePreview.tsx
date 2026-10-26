import { Bath, BedDouble, MapPin, Maximize } from "lucide-react";

const House = ({ hue }: { hue: number }) => (
  <svg viewBox="0 0 300 180" className="h-full w-full" aria-hidden>
    <defs>
      <linearGradient id={`sky${hue}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={`hsl(${hue} 60% 78%)`} /><stop offset="1" stopColor={`hsl(${hue} 55% 92%)`} />
      </linearGradient>
    </defs>
    <rect width="300" height="180" fill={`url(#sky${hue})`} />
    <rect y="140" width="300" height="40" fill="#8fb68a" />
    <rect x="60" y="70" width="180" height="75" fill="#f6f1e8" />
    <rect x="40" y="95" width="80" height="50" fill="#e9e1d2" />
    <path d="M50 72 150 28l100 44z" fill="#2f3e52" />
    {[80, 130, 180].map((x) => <rect key={x} x={x} y="92" width="30" height="34" fill="#9ec5e8" stroke="#fff" strokeWidth="3" />)}
    <rect x="140" y="112" width="22" height="33" fill="#7a5c3e" />
  </svg>
);

/** Real-estate template — slate + champagne gold, listing cards with illustrated homes. */
export default function RealEstatePreview() {
  const listings = [
    { t: "Skyline Villa", loc: "Prime Hills", p: "₹ 2.45 Cr", bd: 4, ba: 4, sq: "3,200", hue: 205 },
    { t: "Garden Residence", loc: "Green Park", p: "₹ 1.35 Cr", bd: 3, ba: 3, sq: "2,150", hue: 150 },
    { t: "Lakeview Penthouse", loc: "Lake District", p: "₹ 3.10 Cr", bd: 4, ba: 5, sq: "3,800", hue: 28 },
  ];
  return (
    <div className="bg-[#0f1621] font-sans text-slate-300" style={{ fontSize: 16 }}>
      <header className="flex items-center justify-between px-12 py-5">
        <div className="text-xl font-bold tracking-wide text-white">AURA<span className="text-[#c9a96a]">·</span>ESTATES</div>
        <nav className="flex gap-8 text-sm text-slate-400"><span>Buy</span><span>Rent</span><span>Sell</span><span>Agents</span></nav>
        <span className="rounded-md bg-[#c9a96a] px-5 py-2.5 text-sm font-bold text-[#0f1621]">Book a viewing</span>
      </header>

      <section className="relative px-12 pb-14 pt-12">
        <div className="absolute inset-x-0 top-0 h-[380px] bg-gradient-to-b from-[#1c2a3d] to-transparent" />
        <div className="relative max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#c9a96a]">Luxury properties</p>
          <h3 className="mt-4 text-[50px] font-bold leading-[1.05] text-white">Find a home that feels like you.</h3>
          <p className="mt-4 text-[17px] text-slate-400">Handpicked homes, transparent guidance and a team that stays with you until the keys are in your hand.</p>
        </div>
        <div className="relative mt-8 grid grid-cols-4 gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur">
          {["Location", "Property type", "Budget"].map((l) => (
            <div key={l} className="rounded-lg bg-[#0f1621]/80 px-4 py-3 text-sm text-slate-500">{l}</div>
          ))}
          <span className="grid place-items-center rounded-lg bg-[#c9a96a] text-sm font-bold text-[#0f1621]">Search</span>
        </div>
      </section>

      <section className="px-12 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <h4 className="text-3xl font-bold text-white">Featured listings</h4>
          <span className="text-sm text-[#c9a96a]">Sample properties</span>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {listings.map((l) => (
            <article key={l.t} className="overflow-hidden rounded-2xl border border-white/10 bg-[#161f2e]">
              <div className="aspect-[5/3]"><House hue={l.hue} /></div>
              <div className="p-5">
                <p className="text-xl font-bold text-white">{l.p}</p>
                <p className="mt-0.5 font-semibold text-slate-200">{l.t}</p>
                <p className="mt-1 flex items-center gap-1 text-sm text-slate-500"><MapPin size={14} /> {l.loc}</p>
                <div className="mt-4 flex gap-4 border-t border-white/10 pt-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5"><BedDouble size={15} /> {l.bd}</span>
                  <span className="flex items-center gap-1.5"><Bath size={15} /> {l.ba}</span>
                  <span className="flex items-center gap-1.5"><Maximize size={15} /> {l.sq} sq ft</span>
                </div>
                <span className="mt-4 block rounded-lg border border-[#c9a96a]/60 py-2.5 text-center text-sm font-semibold text-[#c9a96a]">Enquire about this property</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
