import { BatteryCharging, Leaf, Sun, Zap } from "lucide-react";

/** Solar / renewable energy template — sky gradient, green + amber, panel illustration. */
export default function SolarPreview() {
  return (
    <div className="bg-[#f4fbf4] font-sans text-slate-700" style={{ fontSize: 16 }}>
      <header className="flex items-center justify-between bg-white px-12 py-5 shadow-sm">
        <div className="flex items-center gap-2 text-xl font-extrabold text-[#0f5132]"><Sun className="text-[#f59e0b]" /> BrightGrid&nbsp;Solar</div>
        <nav className="flex gap-8 text-sm font-medium text-slate-500"><span>Residential</span><span>Commercial</span><span>Savings</span><span>Contact</span></nav>
        <span className="rounded-full bg-[#f59e0b] px-5 py-2.5 text-sm font-bold text-white">Free Site Survey</span>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#bfe6ff] via-[#e6f6ff] to-[#f4fbf4] px-12 pb-0 pt-14">
        <div className="relative z-10 max-w-lg">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#0f5132]"><Leaf size={14} /> Clean energy for every roof</span>
          <h3 className="mt-5 text-[48px] font-extrabold leading-[1.05] text-[#0b3b26]">Power your home with the sun.</h3>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-600">Cut your monthly electricity bill with reliable rooftop solar — designed, installed and supported locally.</p>
          <div className="mt-7 flex gap-3">
            <span className="rounded-full bg-[#0f8a4f] px-7 py-3.5 text-sm font-bold text-white">Get a solar quote</span>
            <span className="rounded-full border border-[#0f8a4f] px-7 py-3.5 text-sm font-bold text-[#0f8a4f]">WhatsApp us</span>
          </div>
        </div>
        <svg viewBox="0 0 520 300" className="absolute bottom-0 right-0 w-[56%]" aria-hidden>
          <circle cx="420" cy="70" r="46" fill="#fbbf24" /><circle cx="420" cy="70" r="66" fill="#fbbf24" opacity=".25" />
          <path d="M0 300V220l90-40 70 30 90-60 80 50 110-50 80 40v110z" fill="#cfeacb" />
          <g transform="translate(120 130) skewX(-18)">
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect key={`${r}${c}`} x={c * 82} y={r * 52} width="76" height="46" rx="3" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="2" />
              ))
            )}
          </g>
          <rect x="0" y="262" width="520" height="38" fill="#a7d7a0" />
        </svg>
        <div className="h-[220px]" />
      </section>

      <section className="px-12 py-14">
        <div className="grid grid-cols-3 gap-5">
          {[
            { i: Zap, t: "Lower bills", d: "Offset a large share of your grid usage." },
            { i: BatteryCharging, t: "Storage ready", d: "Add battery backup when you need it." },
            { i: Leaf, t: "Cleaner future", d: "Cut your household's carbon footprint." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-white p-6 shadow">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#0f8a4f]/10 text-[#0f8a4f]"><Icon size={24} /></span>
              <p className="mt-4 text-lg font-bold text-[#0b3b26]">{t}</p>
              <p className="mt-1 text-sm text-slate-500">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 rounded-3xl bg-gradient-to-br from-[#0f8a4f] to-[#0b5d36] p-8 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-200">Savings estimator · sample</p>
            <p className="mt-2 text-3xl font-extrabold">See what solar could save you</p>
            <p className="mt-2 text-green-100">Share your monthly bill and we'll prepare a personalised estimate.</p>
          </div>
          <div className="space-y-3 rounded-2xl bg-white/10 p-5">
            <div className="flex items-center justify-between rounded-lg bg-white/15 px-4 py-3 text-sm"><span>Monthly bill</span><span className="font-bold">₹ ——</span></div>
            <div className="flex items-center justify-between rounded-lg bg-white/15 px-4 py-3 text-sm"><span>Roof size</span><span className="font-bold">—— sq ft</span></div>
            <span className="block rounded-lg bg-[#f59e0b] py-3 text-center text-sm font-bold text-white">Request my estimate</span>
          </div>
        </div>
      </section>
    </div>
  );
}
