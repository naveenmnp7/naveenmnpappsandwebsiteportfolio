import { ArrowRight, FileText, LayoutTemplate, PackageCheck } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { useEnquiry } from "../hooks/useEnquiry";

const STEPS = [
  { icon: LayoutTemplate, n: "STEP 1", t: "Select a Website Template.", d: "Browse the designs above and choose the one closest to your vision." },
  { icon: FileText, n: "STEP 2", t: "Share Your Business Information.", d: "Send your logo, content and preferences — we guide you on what's needed." },
  { icon: PackageCheck, n: "STEP 3", t: "Receive Your Customized Website.", d: "We build, refine and hand over your finished, mobile-ready website." },
];

export default function HowItWorks() {
  const { startEnquiry } = useEnquiry();
  return (
    <section id="how-it-works" className="section" aria-labelledby="how-title">
      <SectionHeading id="how-title" eyebrow="How It Works" title="Three simple steps to" highlight="your new website." />
      <div className="grid gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="glass glow-border relative h-full rounded-2xl p-7">
              <span className="absolute right-5 top-4 font-display text-6xl font-extrabold text-white/[0.04]" aria-hidden>{i + 1}</span>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-violet text-white shadow-lg shadow-brand-blue/30"><s.icon size={24} /></span>
              <p className="mt-6 font-display text-xs font-bold tracking-[0.25em] text-brand-cyan">{s.n}</p>
              <h3 className="mt-1 font-display text-xl font-bold text-white">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12 text-center">
        <button type="button" onClick={() => startEnquiry({ note: "I'd like to start my website project." })} className="btn-primary group !px-8 !py-4 uppercase tracking-wide">
          Start your website project <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
        </button>
      </Reveal>
    </section>
  );
}
