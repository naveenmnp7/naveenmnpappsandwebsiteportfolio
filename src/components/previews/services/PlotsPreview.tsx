import { Check, MapPin, Phone } from "lucide-react";

/** Service sample: Real estate — open plots / layout venture with plot map, white + green. */
export default function PlotsPreview() {
  const cells = Array.from({ length: 24 }, (_, i) => ({ n: i + 1, s: i % 7 === 3 ? "sold" : i % 5 === 1 ? "hold" : "free" }));
  const color = { free: "#d9f3df", hold: "#fdeab5", sold: "#e5e7eb" } as const;
  return (
    <div className="bg-white font-sans text-slate-700" style={{ fontSize: 16 }}>
      <header className="flex items-center justify-between px-12 py-5">
        <div className="flex items-center gap-2 text-xl font-extrabold text-[#14532d]"><MapPin className="text-[#16a34a]" /> Green&nbsp;Valley&nbsp;Layouts</div>
        <nav className="flex gap-8 text-sm text-slate-500"><span>Layout</span><span>Amenities</span><span>Location</span><span>Contact</span></nav>
        <span className="flex items-center gap-2 rounded-lg bg-[#16a34a] px-5 py-2.5 text-sm font-bold text-white"><Phone size={15} /> Book site visit</span>
      </header>
      <section className="grid grid-cols-[1fr_1.1fr] items-center gap-8 bg-gradient-to-br from-[#ecfdf0] to-white px-12 py-12">
        <div>
          <span className="rounded-full bg-[#16a34a]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#15803d]">DTCP-style open plots · sample</span>
          <h3 className="mt-4 text-[46px] font-black leading-[1.05] text-[#14532d]">Own a plot in a growing neighbourhood.</h3>
          <p className="mt-4 text-[17px] text-slate-500">Clear layout, wide roads and easy access — choose your plot online and visit with our team.</p>
          <ul className="mt-5 space-y-2 text-sm">
            {["Clear title documents", "40 ft & 30 ft roads", "Water & drainage planned", "Easy bank-loan guidance"].map((t) => <li key={t} className="flex items-center gap-2"><Check size={16} className="text-[#16a34a]" />{t}</li>)}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-600">Layout map · tap a plot</span>
            <span className="flex gap-3"><i className="not-italic text-[#15803d]">■ Available</i><i className="not-italic text-[#b7791f]">■ Hold</i><i className="not-italic text-slate-400">■ Sold</i></span>
          </div>
          <div className="grid grid-cols-6 gap-2 rounded-2xl bg-[#f4f6f4] p-3">
            {cells.map((c) => (
              <div key={c.n} className="grid aspect-[4/3] place-items-center rounded-md text-xs font-bold text-slate-600" style={{ background: color[c.s as keyof typeof color] }}>{c.n}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-5 px-12 py-12">
        {["Park & play area", "Street lights", "Avenue plantation"].map((t) => (
          <div key={t} className="rounded-2xl border border-slate-200 p-6"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#16a34a]/10 text-[#16a34a]"><Check size={22} /></span><p className="mt-3 font-bold text-[#14532d]">{t}</p></div>
        ))}
      </section>
    </div>
  );
}
