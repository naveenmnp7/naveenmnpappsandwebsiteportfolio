import { Factory, Wrench, Zap } from "lucide-react";

/** Service sample: Solar company — commercial/industrial rooftop, deep navy + yellow. */
export default function IndustrialSolarPreview() {
  return (
    <div className="bg-[#0a1630] font-sans text-slate-300" style={{ fontSize: 16 }}>
      <header className="flex items-center justify-between px-12 py-5">
        <div className="flex items-center gap-2 text-xl font-extrabold text-white"><Zap className="text-[#ffc400]" fill="#ffc400" /> SunPeak&nbsp;Energy</div>
        <nav className="flex gap-8 text-sm text-slate-400"><span>Industrial</span><span>Agriculture</span><span>Projects</span><span>Contact</span></nav>
        <span className="rounded-md bg-[#ffc400] px-5 py-2.5 text-sm font-extrabold text-[#0a1630]">Free site survey</span>
      </header>
      <section className="relative overflow-hidden px-12 pb-0 pt-10">
        <div className="absolute -right-10 -top-10 h-80 w-80 rounded-full bg-[#ffc400]/20 blur-3xl" />
        <div className="relative max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffc400]">Commercial &amp; industrial solar</p>
          <h3 className="mt-4 text-[50px] font-black leading-[1.04] text-white">Turn your rooftop into a <span className="text-[#ffc400]">power plant.</span></h3>
          <p className="mt-4 text-[17px] text-slate-400">Lower running costs for factories, schools and farms with engineered solar systems.</p>
          <span className="mt-6 inline-block rounded-md bg-[#ffc400] px-7 py-3.5 text-sm font-extrabold text-[#0a1630]">Get my savings plan</span>
        </div>
        <svg viewBox="0 0 1000 220" className="relative mt-4 w-full" aria-hidden>
          <rect x="120" y="90" width="760" height="110" fill="#14264d" />
          <path d="M100 90 220 40h560l120 50z" fill="#1c3366" />
          {Array.from({ length: 9 }).map((_, i) => <path key={i} d={`M${240 + i * 62} 48h54l12 34h-54z`} fill="#2f6bff" stroke="#9fc0ff" strokeWidth="2" />)}
          {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={170 + i * 120} y="130" width="70" height="70" fill="#0f1d3f" stroke="#2a4180" />)}
          <rect x="0" y="198" width="1000" height="22" fill="#0e1b38" />
        </svg>
      </section>
      <section className="grid grid-cols-3 gap-5 bg-[#0e1d3d] px-12 py-12">
        {[{ i: Factory, t: "Factory rooftops", d: "Cut daytime power bills." }, { i: Wrench, t: "Operation & care", d: "Cleaning and service plans." }, { i: Zap, t: "Net metering help", d: "Guidance on approvals." }].map(({ i: Icon, t, d }) => (
          <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#ffc400] text-[#0a1630]"><Icon size={24} /></span>
            <p className="mt-4 text-lg font-bold text-white">{t}</p><p className="mt-1 text-sm text-slate-400">{d}</p>
          </div>
        ))}
      </section>
      <section className="grid grid-cols-2 items-center gap-8 px-12 py-12">
        <div><p className="text-3xl font-black text-white">Estimate your savings</p><p className="mt-2 text-slate-400">Share your monthly bill and roof area — we'll prepare a plan.</p></div>
        <div className="space-y-3 rounded-2xl bg-white/[0.06] p-5">
          <div className="rounded-lg bg-[#0a1630] px-4 py-3 text-sm text-slate-400">Monthly electricity bill</div>
          <div className="rounded-lg bg-[#0a1630] px-4 py-3 text-sm text-slate-400">Available roof area</div>
          <span className="block rounded-lg bg-[#ffc400] py-3 text-center text-sm font-extrabold text-[#0a1630]">Request estimate on WhatsApp</span>
        </div>
      </section>
    </div>
  );
}
