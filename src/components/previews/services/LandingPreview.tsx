import { Check, Dumbbell, Phone } from "lucide-react";

/** Service sample: Landing page — single-purpose lead-capture page for a fitness programme. */
export default function LandingPreview() {
  return (
    <div className="bg-[#0f0a1f] font-sans text-slate-300" style={{ fontSize: 16 }}>
      <header className="flex items-center justify-between px-12 py-5">
        <div className="flex items-center gap-2 text-xl font-black text-white"><Dumbbell className="text-[#b6ff3b]" /> FitStart</div>
        <span className="flex items-center gap-2 text-sm font-semibold text-[#b6ff3b]"><Phone size={15} /> Call to join</span>
      </header>
      <section className="grid grid-cols-[1.15fr_1fr] items-center gap-10 px-12 pb-14 pt-6">
        <div>
          <span className="rounded-full bg-[#b6ff3b]/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#b6ff3b]">New batch starting soon</span>
          <h3 className="mt-5 text-[54px] font-black leading-[1.02] text-white">Get fit in <span className="bg-gradient-to-r from-[#b6ff3b] to-[#35e0c0] bg-clip-text text-transparent">30 days.</span></h3>
          <p className="mt-4 max-w-md text-[17px] text-slate-400">A guided routine you can follow at home or in the gym, with a coach on WhatsApp.</p>
          <ul className="mt-6 space-y-3">{["Daily workout plan", "Simple diet guidance", "Weekly coach check-in"].map((t) => <li key={t} className="flex items-center gap-3 text-white"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#b6ff3b] text-[#0f0a1f]"><Check size={14} strokeWidth={3} /></span>{t}</li>)}</ul>
        </div>
        <div className="rounded-3xl bg-white p-7 shadow-2xl">
          <p className="text-2xl font-black text-[#0f0a1f]">Reserve your spot</p>
          <p className="mt-1 text-sm text-slate-500">We'll call you back with details.</p>
          <div className="mt-5 space-y-3">{["Your name", "Phone number", "Your goal"].map((l) => <div key={l} className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-400">{l}</div>)}
            <span className="block rounded-xl bg-[#0f0a1f] py-3.5 text-center text-sm font-bold text-[#b6ff3b]">Join the programme →</span></div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-5 border-t border-white/10 px-12 py-10">
        {[["1", "Register", "Fill the short form."], ["2", "Get your plan", "Receive a plan on WhatsApp."], ["3", "Start training", "Follow it and check in weekly."]].map(([n, t, d]) => (
          <div key={n} className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#b6ff3b] font-black text-[#0f0a1f]">{n}</span><div><p className="font-bold text-white">{t}</p><p className="text-sm text-slate-400">{d}</p></div></div>
        ))}
      </section>
    </div>
  );
}
