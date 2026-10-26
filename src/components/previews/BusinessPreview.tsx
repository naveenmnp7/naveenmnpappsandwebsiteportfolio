import { BarChart3, Briefcase, ShieldCheck, Users, ArrowRight } from "lucide-react";

/** Corporate / business template — light, navy + teal, split hero. */
export default function BusinessPreview() {
  const services = [
    { icon: Briefcase, t: "Consulting", d: "Clear strategy for growing teams." },
    { icon: BarChart3, t: "Analytics", d: "Decisions backed by your data." },
    { icon: Users, t: "Team Training", d: "Practical workshops for staff." },
    { icon: ShieldCheck, t: "Compliance", d: "Stay audit-ready all year." },
  ];
  return (
    <div className="bg-white font-sans text-slate-700" style={{ fontSize: 16 }}>
      <header className="flex items-center justify-between px-12 py-5">
        <div className="flex items-center gap-2 text-xl font-bold text-[#0b2a4a]">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0b2a4a] text-white">N</span> Northwind&nbsp;Partners
        </div>
        <nav className="flex gap-8 text-sm font-medium text-slate-500">
          <span>Home</span><span>Services</span><span>About</span><span>Contact</span>
        </nav>
        <span className="rounded-lg bg-[#0ea5a4] px-5 py-2.5 text-sm font-semibold text-white">Get a Quote</span>
      </header>

      <section className="grid grid-cols-2 items-center gap-10 bg-gradient-to-br from-[#eaf6f6] to-white px-12 py-16">
        <div>
          <span className="rounded-full bg-[#0ea5a4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#0b7f7e]">Business Solutions</span>
          <h3 className="mt-5 text-[46px] font-extrabold leading-[1.05] text-[#0b2a4a]">Grow your company with confidence.</h3>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-slate-500">Practical, people-first services that help small and mid-sized businesses plan, scale and succeed.</p>
          <div className="mt-8 flex gap-3">
            <span className="flex items-center gap-2 rounded-lg bg-[#0b2a4a] px-6 py-3 text-sm font-semibold text-white">Book a consultation <ArrowRight size={16} /></span>
            <span className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700">Our services</span>
          </div>
        </div>
        <svg viewBox="0 0 420 320" className="w-full" aria-hidden>
          <rect x="30" y="40" width="360" height="240" rx="18" fill="#0b2a4a" />
          <rect x="52" y="64" width="150" height="14" rx="7" fill="#0ea5a4" />
          <rect x="52" y="90" width="100" height="8" rx="4" fill="#ffffff22" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={60 + i * 48} y={250 - (40 + i * 22)} width="28" height={40 + i * 22} rx="6" fill={i === 5 ? "#0ea5a4" : "#3b82f6"} opacity={i === 5 ? 1 : 0.5 + i * 0.08} />
          ))}
          <circle cx="335" cy="95" r="34" fill="none" stroke="#ffffff22" strokeWidth="12" />
          <path d="M335 61a34 34 0 0 1 30 50" fill="none" stroke="#0ea5a4" strokeWidth="12" strokeLinecap="round" />
        </svg>
      </section>

      <section className="px-12 py-14">
        <h4 className="text-center text-3xl font-bold text-[#0b2a4a]">What we do</h4>
        <div className="mt-8 grid grid-cols-4 gap-5">
          {services.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#0ea5a4]/10 text-[#0b7f7e]"><Icon size={22} /></span>
              <p className="mt-4 text-lg font-bold text-[#0b2a4a]">{t}</p>
              <p className="mt-1 text-sm text-slate-500">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-12 mb-14 flex items-center justify-between rounded-3xl bg-[#0b2a4a] px-10 py-10">
        <div>
          <p className="text-2xl font-bold text-white">Ready to talk about your goals?</p>
          <p className="mt-1 text-slate-300">Message us on WhatsApp or send an enquiry.</p>
        </div>
        <span className="rounded-lg bg-[#0ea5a4] px-6 py-3 font-semibold text-white">Contact us</span>
      </section>
      <footer className="border-t border-slate-200 px-12 py-6 text-center text-xs text-slate-400">© Northwind Partners — sample template</footer>
    </div>
  );
}
