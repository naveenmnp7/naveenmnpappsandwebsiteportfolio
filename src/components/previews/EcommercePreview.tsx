import { useState } from "react";
import { Heart, Search, ShoppingBag, Star } from "lucide-react";

type Kind = "watch" | "bag" | "shoe" | "bottle";

const Product = ({ kind, c }: { kind: Kind; c: string }) => (
  <svg viewBox="0 0 160 140" className="h-full w-full" aria-hidden>
    {kind === "watch" && (
      <g>
        <rect x="62" y="6" width="36" height="128" rx="10" fill={c} opacity=".35" />
        <circle cx="80" cy="70" r="36" fill="#fff" stroke={c} strokeWidth="8" />
        <path d="M80 70V48M80 70l16 8" stroke="#222" strokeWidth="4" strokeLinecap="round" />
      </g>
    )}
    {kind === "bag" && (
      <g>
        <path d="M54 52c0-34 52-34 52 0" stroke={c} strokeWidth="8" fill="none" />
        <rect x="30" y="50" width="100" height="76" rx="14" fill={c} />
        <rect x="68" y="76" width="24" height="14" rx="4" fill="#fff" opacity=".8" />
      </g>
    )}
    {kind === "shoe" && (
      <g>
        <path d="M18 98c0-20 12-28 28-34l26-30 14 20c20 4 44 12 56 26v22H18z" fill={c} />
        <rect x="18" y="104" width="124" height="14" rx="7" fill="#fff" />
        <path d="M70 60l8 14M86 66l8 14" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      </g>
    )}
    {kind === "bottle" && (
      <g>
        <rect x="64" y="8" width="32" height="22" rx="5" fill="#333" />
        <rect x="52" y="28" width="56" height="104" rx="18" fill={c} />
        <rect x="60" y="62" width="40" height="28" rx="6" fill="#fff" opacity=".85" />
      </g>
    )}
  </svg>
);

/** E-commerce template — clean light store with an interactive cart counter. */
export default function EcommercePreview() {
  const [cart, setCart] = useState(0);
  const items: { n: string; p: string; k: Kind; c: string; bg: string }[] = [
    { n: "Classic Watch", p: "₹2,499", k: "watch", c: "#6d5dfc", bg: "#eeebff" },
    { n: "Everyday Tote", p: "₹1,799", k: "bag", c: "#f97316", bg: "#fff1e6" },
    { n: "Runner Sneaker", p: "₹3,299", k: "shoe", c: "#0ea5e9", bg: "#e5f6ff" },
    { n: "Steel Bottle", p: "₹899", k: "bottle", c: "#10b981", bg: "#e4f8f0" },
  ];
  return (
    <div className="bg-white font-sans text-slate-700" style={{ fontSize: 16 }}>
      <div className="bg-[#111827] py-2 text-center text-xs font-medium tracking-wide text-white">Free delivery on orders above ₹999 — sample banner</div>
      <header className="flex items-center justify-between px-12 py-5">
        <div className="text-2xl font-black tracking-tight text-[#111827]">shop<span className="text-[#6d5dfc]">ly</span></div>
        <div className="flex w-[340px] items-center gap-2 rounded-full bg-slate-100 px-4 py-2.5 text-sm text-slate-400"><Search size={16} /> Search products</div>
        <div className="flex items-center gap-5 text-slate-700">
          <Heart size={20} />
          <span className="relative"><ShoppingBag size={22} />
            <b className="absolute -right-2.5 -top-2.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#6d5dfc] px-1 text-[11px] text-white">{cart}</b>
          </span>
        </div>
      </header>

      <section className="mx-12 grid grid-cols-2 items-center overflow-hidden rounded-3xl bg-gradient-to-r from-[#eeebff] to-[#fde8f1]">
        <div className="p-10">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#6d5dfc]">NEW SEASON</span>
          <h3 className="mt-4 text-[44px] font-black leading-[1.05] text-[#111827]">Style that fits your everyday.</h3>
          <p className="mt-3 text-slate-500">Curated essentials with easy checkout and simple returns.</p>
          <span className="mt-6 inline-block rounded-full bg-[#111827] px-7 py-3 text-sm font-bold text-white">Shop collection</span>
        </div>
        <div className="grid h-full grid-cols-2 gap-3 p-6">
          <div className="rounded-2xl bg-white/70 p-3"><Product kind="shoe" c="#6d5dfc" /></div>
          <div className="rounded-2xl bg-white/70 p-3"><Product kind="bag" c="#ec4899" /></div>
        </div>
      </section>

      <section className="px-12 py-12">
        <div className="mb-6 flex items-end justify-between">
          <h4 className="text-3xl font-black text-[#111827]">Trending now</h4>
          <span className="text-sm font-semibold text-[#6d5dfc]">View all →</span>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {items.map((it) => (
            <article key={it.n} className="rounded-2xl border border-slate-200 p-3">
              <div className="aspect-square rounded-xl p-5" style={{ background: it.bg }}><Product kind={it.k} c={it.c} /></div>
              <p className="mt-3 font-bold text-[#111827]">{it.n}</p>
              <div className="mt-0.5 flex items-center gap-1 text-amber-400">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={13} fill="currentColor" />)}</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-extrabold text-[#111827]">{it.p}</span>
                <button
                  type="button"
                  onClick={() => setCart((c) => c + 1)}
                  className="rounded-full bg-[#6d5dfc] px-4 py-2 text-xs font-bold text-white hover:bg-[#5b4be0]"
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
