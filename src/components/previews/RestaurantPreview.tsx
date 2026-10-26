import { CalendarCheck, Clock, MapPin, Phone } from "lucide-react";

/** Restaurant template — warm dark, gold serif, illustrated plate. */
export default function RestaurantPreview() {
  const menu = [
    { n: "Saffron Risotto", d: "Arborio rice, saffron, parmesan", p: "₹420" },
    { n: "Charred Paneer Tikka", d: "Smoked spices, mint chutney", p: "₹360" },
    { n: "Slow-Cooked Lamb Curry", d: "House masala, fresh naan", p: "₹540" },
    { n: "Molten Chocolate Dome", d: "Warm centre, vanilla cream", p: "₹290" },
  ];
  return (
    <div className="bg-[#140d09] font-sans text-[#e9d9c6]" style={{ fontSize: 16 }}>
      <header className="flex items-center justify-between px-12 py-6">
        <div className="font-serif text-2xl font-bold tracking-wide text-[#d9a441]">Ember &amp; Oak</div>
        <nav className="flex gap-8 text-sm uppercase tracking-[0.18em] text-[#bfa88c]">
          <span>Menu</span><span>Story</span><span>Visit</span>
        </nav>
        <span className="flex items-center gap-2 rounded-full border border-[#d9a441] px-5 py-2 text-sm font-semibold text-[#d9a441]"><CalendarCheck size={15} /> Reserve a table</span>
      </header>

      <section className="relative grid grid-cols-2 items-center gap-6 px-12 pb-20 pt-8">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#d9a441]/10 blur-3xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d9a441]">Fine dining · Your City</p>
          <h3 className="mt-4 font-serif text-[58px] font-bold leading-[1.02] text-[#fbefdc]">Flavours worth <em className="text-[#d9a441]">lingering</em> over.</h3>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[#bfa88c]">Seasonal ingredients, wood-fired technique and an evening you'll want to repeat.</p>
          <div className="mt-8 flex gap-3">
            <span className="rounded-full bg-[#d9a441] px-7 py-3 text-sm font-bold text-[#140d09]">Book your table</span>
            <span className="rounded-full border border-[#d9a441]/40 px-7 py-3 text-sm font-semibold text-[#e9d9c6]">View menu</span>
          </div>
        </div>
        <svg viewBox="0 0 400 360" className="relative w-full" aria-hidden>
          <defs>
            <radialGradient id="plate" cx="50%" cy="45%"><stop offset="0" stopColor="#fff7ea" /><stop offset="1" stopColor="#d8c3a5" /></radialGradient>
            <radialGradient id="sauce" cx="40%" cy="35%"><stop offset="0" stopColor="#f0a23a" /><stop offset="1" stopColor="#a9500d" /></radialGradient>
          </defs>
          <ellipse cx="200" cy="300" rx="150" ry="22" fill="#000" opacity=".4" />
          <circle cx="200" cy="170" r="140" fill="url(#plate)" />
          <circle cx="200" cy="170" r="104" fill="none" stroke="#c9ae88" strokeWidth="2" />
          <circle cx="200" cy="170" r="70" fill="url(#sauce)" />
          {[[170, 150], [215, 140], [195, 190], [230, 180], [165, 190]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="13" fill={i % 2 ? "#5b8a3a" : "#e4b25f"} />
          ))}
          <path d="M120 110c20-30 70-40 100-30" stroke="#5b8a3a" strokeWidth="6" strokeLinecap="round" fill="none" />
        </svg>
      </section>

      <section className="px-12 pb-16">
        <h4 className="text-center font-serif text-4xl text-[#fbefdc]">Signature menu</h4>
        <p className="mt-2 text-center text-xs uppercase tracking-[0.3em] text-[#d9a441]">Sample dishes</p>
        <div className="mt-10 grid grid-cols-2 gap-x-14 gap-y-7">
          {menu.map((m) => (
            <div key={m.n}>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-xl text-[#fbefdc]">{m.n}</span>
                <span className="flex-1 border-b border-dotted border-[#6b5844]" />
                <span className="font-semibold text-[#d9a441]">{m.p}</span>
              </div>
              <p className="mt-1 text-sm text-[#a58f75]">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-12 mb-14 grid grid-cols-2 gap-6 rounded-3xl border border-[#3a2a1c] bg-[#1b120c] p-8">
        <div className="space-y-4">
          <h4 className="font-serif text-3xl text-[#fbefdc]">Find us</h4>
          <p className="flex items-center gap-3"><MapPin size={18} className="text-[#d9a441]" /> 12 Garden Street, Your City</p>
          <p className="flex items-center gap-3"><Clock size={18} className="text-[#d9a441]" /> Daily · 12:00 PM – 11:00 PM</p>
          <p className="flex items-center gap-3"><Phone size={18} className="text-[#d9a441]" /> +91 00000 00000</p>
          <span className="inline-block rounded-full bg-[#d9a441] px-6 py-2.5 text-sm font-bold text-[#140d09]">Reserve now</span>
        </div>
        <svg viewBox="0 0 300 180" className="w-full rounded-2xl" aria-hidden>
          <rect width="300" height="180" fill="#241912" />
          {[30, 70, 110, 150].map((y) => <path key={y} d={`M0 ${y}H300`} stroke="#3a2a1c" strokeWidth="6" />)}
          {[50, 120, 190, 250].map((x) => <path key={x} d={`M${x} 0V180`} stroke="#3a2a1c" strokeWidth="6" />)}
          <path d="M20 160 150 90 280 20" stroke="#d9a441" strokeWidth="3" strokeDasharray="6 6" fill="none" />
          <circle cx="150" cy="90" r="14" fill="#d9a441" /><circle cx="150" cy="90" r="5" fill="#140d09" />
        </svg>
      </section>
    </div>
  );
}
