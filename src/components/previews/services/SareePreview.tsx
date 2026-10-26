import { useState } from "react";
import { Heart, Search, ShoppingBag, Truck } from "lucide-react";

const Saree = ({ a, b }: { a: string; b: string }) => (
  <svg viewBox="0 0 120 150" className="h-full w-full" aria-hidden>
    <path d="M30 10h60l14 130H16z" fill={a} />
    <path d="M30 10h60l-8 40H38z" fill={b} opacity=".85" />
    {[40, 60, 80, 100, 118].map((y) => <path key={y} d={`M${24 - (y - 40) / 20} ${y}h${72 + (y - 40) / 10}`} stroke={b} strokeWidth="5" opacity=".7" />)}
    <path d="M16 140h88" stroke="#f5d06b" strokeWidth="6" />
  </svg>
);

/** Service sample: E-commerce — saree & silks boutique, maroon + gold, working add-to-cart counter. */
export default function SareePreview() {
  const [cart, setCart] = useState(0);
  const items = [
    { n: "Kanchi Silk Saree", p: "₹7,499", a: "#a3123a", b: "#f5c542" },
    { n: "Pochampally Ikat", p: "₹3,299", a: "#1d4e89", b: "#f2a65a" },
    { n: "Cotton Handloom", p: "₹1,799", a: "#2f7d5b", b: "#f4e3b1" },
    { n: "Banarasi Georgette", p: "₹5,199", a: "#6a2c91", b: "#f1c40f" },
  ];
  return (
    <div className="bg-[#fffaf2] font-sans text-[#4a1d2a]" style={{ fontSize: 16 }}>
      <div className="flex items-center justify-center gap-2 bg-[#7a1230] py-2 text-xs font-semibold text-[#f5d06b]"><Truck size={14} /> Cash on delivery · Free shipping across India</div>
      <header className="flex items-center justify-between px-12 py-5">
        <div className="font-serif text-3xl font-bold text-[#7a1230]">Zari <span className="text-[#c79a2b]">&amp;</span> Co.</div>
        <div className="flex w-[320px] items-center gap-2 rounded-full border border-[#e6d3b0] bg-white px-4 py-2.5 text-sm text-slate-400"><Search size={16} /> Search sarees</div>
        <div className="flex items-center gap-5 text-[#7a1230]"><Heart size={20} /><span className="relative"><ShoppingBag size={22} /><b className="absolute -right-2.5 -top-2.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#c79a2b] px-1 text-[11px] text-white">{cart}</b></span></div>
      </header>
      <section className="mx-12 grid grid-cols-2 items-center overflow-hidden rounded-3xl bg-gradient-to-r from-[#7a1230] to-[#a3123a]">
        <div className="p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5d06b]">Festive collection</p>
          <h3 className="mt-3 font-serif text-[46px] font-bold leading-[1.05] text-white">Woven with tradition.</h3>
          <p className="mt-3 text-[#f6dfe3]">Handpicked silks and handlooms, delivered to your door.</p>
          <span className="mt-6 inline-block rounded-full bg-[#f5d06b] px-7 py-3 text-sm font-bold text-[#5a0d24]">Shop sarees</span>
        </div>
        <div className="flex h-full items-end justify-center gap-3 p-6">{["#f5c542", "#2f7d5b", "#1d4e89"].map((c) => <div key={c} className="h-44 w-24"><Saree a={c} b="#fff3c4" /></div>)}</div>
      </section>
      <section className="px-12 py-12">
        <div className="mb-6 flex items-end justify-between"><h4 className="font-serif text-3xl font-bold text-[#7a1230]">New arrivals</h4><span className="text-sm font-semibold text-[#c79a2b]">View all →</span></div>
        <div className="grid grid-cols-4 gap-5">
          {items.map((it) => (
            <article key={it.n} className="rounded-2xl border border-[#eedfc2] bg-white p-3">
              <div className="aspect-[4/5] rounded-xl bg-[#fbf1dc] p-4"><Saree a={it.a} b={it.b} /></div>
              <p className="mt-3 font-bold">{it.n}</p>
              <div className="mt-2 flex items-center justify-between"><span className="font-extrabold text-[#7a1230]">{it.p}</span>
                <button type="button" onClick={() => setCart((c) => c + 1)} className="rounded-full bg-[#7a1230] px-4 py-2 text-xs font-bold text-white hover:bg-[#5a0d24]">Add to cart</button></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
