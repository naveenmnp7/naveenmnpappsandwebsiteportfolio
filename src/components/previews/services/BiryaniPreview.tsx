import { Bike, Clock, Flame, MessageCircle, Star } from "lucide-react";

const Bowl = ({ a, b }: { a: string; b: string }) => (
  <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden>
    <ellipse cx="80" cy="104" rx="56" ry="8" fill="#000" opacity=".15" />
    <path d="M20 54h120c0 36-26 52-60 52S20 90 20 54z" fill="#7a2a12" />
    <ellipse cx="80" cy="54" rx="60" ry="16" fill={a} />
    {[[50, 50], [72, 44], [96, 50], [112, 56], [64, 58], [88, 58]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="7" fill={i % 2 ? b : "#f2d58a"} />)}
    <path d="M66 36c-6-10 6-14 0-24M88 34c-6-10 6-14 0-24" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".6" fill="none" />
  </svg>
);

/** Service sample: Restaurant — Indian biryani house with WhatsApp ordering, cream + chilli red. */
export default function BiryaniPreview() {
  const dishes = [
    { n: "Chicken Dum Biryani", p: "₹280", a: "#e8a33d", b: "#b8481f" },
    { n: "Mutton Biryani", p: "₹380", a: "#d98a2b", b: "#7a2a12" },
    { n: "Paneer Biryani", p: "₹240", a: "#f0c04a", b: "#4f8a3a" },
  ];
  return (
    <div className="bg-[#fff6e5] font-sans text-[#4a2a14]" style={{ fontSize: 16 }}>
      <div className="bg-[#b3261e] py-2 text-center text-xs font-semibold tracking-wide text-white">Order on WhatsApp · Home delivery available</div>
      <header className="flex items-center justify-between px-12 py-5">
        <div className="flex items-center gap-2 text-2xl font-black text-[#b3261e]"><Flame /> Spice Route</div>
        <nav className="flex gap-8 text-sm font-semibold"><span>Menu</span><span>Combos</span><span>Find us</span></nav>
        <span className="flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-bold text-white"><MessageCircle size={16} /> Order now</span>
      </header>
      <section className="grid grid-cols-2 items-center gap-6 px-12 pb-12 pt-4">
        <div>
          <span className="rounded-full bg-[#b3261e]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#b3261e]">Biryani House</span>
          <h3 className="mt-4 text-[54px] font-black leading-[1.03] text-[#3a1b0c]">Slow-cooked. <span className="text-[#b3261e]">Dum-sealed.</span></h3>
          <p className="mt-4 max-w-md text-[17px] text-[#7a5a44]">Fragrant basmati, fresh masala and the family recipe — hot at your door.</p>
          <div className="mt-6 flex gap-3">
            <span className="rounded-full bg-[#b3261e] px-7 py-3 text-sm font-bold text-white">See menu</span>
            <span className="flex items-center gap-2 rounded-full border-2 border-[#b3261e] px-6 py-3 text-sm font-bold text-[#b3261e]"><Bike size={16} /> Delivery</span>
          </div>
        </div>
        <div className="mx-auto aspect-square w-[78%] rounded-full bg-gradient-to-br from-[#ffd36b] to-[#f19a3e] p-8"><Bowl a="#e8a33d" b="#b8481f" /></div>
      </section>
      <section className="px-12 pb-12">
        <h4 className="text-3xl font-black text-[#3a1b0c]">Customer favourites</h4>
        <div className="mt-6 grid grid-cols-3 gap-5">
          {dishes.map((d) => (
            <div key={d.n} className="rounded-3xl bg-white p-4 shadow-md">
              <div className="aspect-[4/3] rounded-2xl bg-[#fff1d6] p-3"><Bowl a={d.a} b={d.b} /></div>
              <p className="mt-3 font-extrabold">{d.n}</p>
              <div className="mt-1 flex items-center gap-0.5 text-[#f0a500]">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={13} fill="currentColor" />)}</div>
              <div className="mt-2 flex items-center justify-between"><span className="text-lg font-black text-[#b3261e]">{d.p}</span><span className="rounded-full bg-[#b3261e] px-4 py-1.5 text-xs font-bold text-white">Add</span></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-12 mb-12 flex items-center justify-between rounded-3xl bg-[#3a1b0c] px-9 py-7 text-[#fbe7c3]">
        <p className="flex items-center gap-3"><Clock size={20} className="text-[#ffc14a]" /> Open daily · 11:00 AM – 11:00 PM</p>
        <span className="rounded-full bg-[#25d366] px-6 py-2.5 text-sm font-bold text-white">WhatsApp to order</span>
      </section>
    </div>
  );
}
