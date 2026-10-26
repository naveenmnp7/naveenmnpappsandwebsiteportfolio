import { ArrowRight, Smartphone } from "lucide-react";

/** Service sample: Website redesign — before (cluttered, old) vs after (clean, modern). */
export default function RedesignPreview() {
  return (
    <div className="bg-[#eef1f6] p-6 font-sans" style={{ fontSize: 16 }}>
      <div className="grid grid-cols-2 gap-6">
        {/* BEFORE */}
        <div>
          <span className="mb-2 inline-block rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white">BEFORE</span>
          <div className="overflow-hidden rounded-xl border-2 border-slate-400 bg-[#ffffcc] font-serif text-black" style={{ minHeight: 560 }}>
            <div className="bg-[#000080] p-2 text-center text-lg font-bold text-yellow-300">~~ WELCOME TO SHARMA TRADERS ~~</div>
            <div className="flex gap-1 bg-[#c0c0c0] p-1 text-[11px] underline"><span>Home</span>|<span>About</span>|<span>Products</span>|<span>Gallery</span>|<span>Links</span>|<span>Contact</span></div>
            <div className="grid grid-cols-[1fr_2fr] gap-2 p-2">
              <div className="space-y-1 bg-[#ccffcc] p-2 text-[11px]">{["Click here", "Click here!!", "New!!!", "Old news", "Visitors: ???"].map((t) => <p key={t} className="border border-black bg-white px-1 text-blue-700 underline">{t}</p>)}</div>
              <div className="text-[11px] leading-tight">
                <p className="font-bold text-red-600">WE ARE BEST IN CITY!!! CALL NOW!!!</p>
                <p className="mt-1">Lorem ipsum text text text text text. Our company is the company of many products and services since long time. Contact us for more information about information.</p>
                <div className="my-2 grid h-24 place-items-center bg-[#ff9999] text-[10px]">[ blurry image ]</div>
                <p className="text-[10px] text-slate-600">Best viewed in old browser · Not mobile friendly</p>
              </div>
            </div>
          </div>
        </div>
        {/* AFTER */}
        <div>
          <span className="mb-2 inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">AFTER</span>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl" style={{ minHeight: 560 }}>
            <div className="flex items-center justify-between px-5 py-3"><b className="text-[#1e3a8a]">Sharma Traders</b><span className="flex gap-3 text-[11px] font-medium text-slate-500"><span>Products</span><span>About</span><span>Contact</span></span></div>
            <div className="bg-gradient-to-br from-[#e0e7ff] to-white px-5 py-8">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#4f46e5]">Wholesale supplier</p>
              <p className="mt-2 text-[28px] font-extrabold leading-tight text-[#1e3a8a]">Quality products, delivered reliably.</p>
              <p className="mt-2 text-[12px] text-slate-500">Clear catalogue, quick quotes and WhatsApp support.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#4f46e5] px-4 py-2 text-xs font-bold text-white">Get a quote <ArrowRight size={13} /></span>
            </div>
            <div className="grid grid-cols-3 gap-3 p-5">{[0, 1, 2].map((i) => <div key={i} className="rounded-xl border border-slate-200 p-3"><div className="aspect-square rounded-lg bg-gradient-to-br from-[#c7d2fe] to-[#a5b4fc]" /><div className="mt-2 h-2 w-3/4 rounded bg-slate-200" /></div>)}</div>
            <p className="flex items-center justify-center gap-2 pb-5 text-[11px] font-semibold text-emerald-600"><Smartphone size={14} /> Mobile-friendly · Fast · Clear</p>
          </div>
        </div>
      </div>
    </div>
  );
}
