import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Gauge, MessageCircle, Search, Sparkles } from "lucide-react";
import BrowserFrame from "./ui/BrowserFrame";
import ScaledPreview from "./previews/ScaledPreview";
import { PREVIEWS } from "./previews";
import { TEMPLATES } from "../data/templates";
import { useEnquiry } from "../hooks/useEnquiry";
import { useRotatingIndex } from "../hooks/useRotatingIndex";

const ease = [0.22, 1, 0.36, 1] as const;

function PhoneScreen() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0b1b3d] to-[#050d22] p-3 text-[7px] text-white">
      <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-black/60" />
      <div className="flex items-center justify-between">
        <b className="text-[9px]">Brew&nbsp;&amp;&nbsp;Co.</b>
        <span className="h-1 w-4 rounded bg-white/50" />
      </div>
      <div className="mt-3 rounded-xl bg-gradient-to-br from-brand-cyan via-brand-blue to-brand-violet p-3">
        <p className="text-[10px] font-bold leading-tight">Fresh coffee,<br />local roasters</p>
        <span className="mt-2 inline-block rounded-full bg-white px-2 py-0.5 text-[6px] font-bold text-ink-900">Order now</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg bg-white/10 p-2">
            <div className="h-9 rounded-md bg-gradient-to-br from-white/25 to-white/5" />
            <div className="mt-1.5 h-1 w-3/4 rounded bg-white/50" />
            <div className="mt-1 h-1 w-1/2 rounded bg-white/25" />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-3 bottom-3 grid h-7 place-items-center rounded-full bg-[#25d366] text-[7px] font-bold">Chat on WhatsApp</div>
    </div>
  );
}

function FloatChip({ icon: Icon, label, className, delay }: { icon: typeof Gauge; label: string; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{ opacity: { delay: 1 + delay, duration: 0.5 }, scale: { delay: 1 + delay, duration: 0.5 }, y: { delay: 1.5 + delay, duration: 5 + delay, repeat: Infinity, ease: "easeInOut" } }}
      className={`glass absolute z-20 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-semibold text-white ${className}`}
    >
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand-cyan to-brand-violet"><Icon size={14} /></span>
      {label}
    </motion.div>
  );
}

export default function Hero() {
  const { startEnquiry } = useEnquiry();
  const { index, setIndex, setPaused, ref } = useRotatingIndex(TEMPLATES.length, 4500);
  const current = TEMPLATES[index];
  const CurrentPreview = PREVIEWS[current.id];
  return (
    <section id="home" className="relative isolate overflow-hidden pt-[72px]" aria-labelledby="hero-title">
      {/* animated gradient orbs + glowing lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 h-[420px] w-[420px] animate-drift rounded-full bg-brand-blue/25 blur-[110px]" />
        <div className="absolute right-0 top-0 h-[480px] w-[480px] animate-drift rounded-full bg-brand-violet/25 blur-[120px] [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] animate-drift rounded-full bg-brand-cyan/15 blur-[100px] [animation-delay:-3s]" />
        <svg className="absolute inset-0 h-full w-full opacity-60" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <defs>
            <linearGradient id="line" x1="0" x2="1"><stop offset="0" stopColor="#00c3ff" stopOpacity="0" /><stop offset=".5" stopColor="#2a7bff" /><stop offset="1" stopColor="#7c5cff" stopOpacity="0" /></linearGradient>
          </defs>
          <path d="M-50 640C300 520 520 720 860 560S1260 380 1500 470" fill="none" stroke="url(#line)" strokeWidth="1.2" />
          <path d="M-50 700C340 600 560 780 900 640S1280 470 1500 540" fill="none" stroke="url(#line)" strokeWidth=".8" opacity=".6" />
        </svg>
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-24 lg:pt-20">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-cyan"
          >
            <Sparkles size={13} /> Creative Web Development Agency
          </motion.span>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-6 font-display text-[2.4rem] font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]"
          >
            We build websites that <span className="text-gradient">grow your business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Premium websites. Modern designs. Affordable pricing. Let's turn your business into a powerful online brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#portfolio" className="btn-primary group">
              Explore Our Work <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button type="button" className="btn-ghost" onClick={() => startEnquiry({})}>
              Get Your Website
            </button>
          </motion.div>
        </div>

        {/* 3D-style monitor + phone */}
        <div className="relative mx-auto w-full max-w-[560px] [perspective:1400px]">
          <FloatChip icon={Gauge} label="Fast loading" className="-left-2 top-6 sm:-left-8" delay={0} />
          <FloatChip icon={Search} label="SEO-friendly" className="right-0 top-0 sm:-right-4" delay={0.6} />
          <FloatChip icon={MessageCircle} label="WhatsApp ready" className="-bottom-2 left-4 sm:left-0" delay={1.2} />

          <motion.div
            initial={{ opacity: 0, rotateY: -28, x: 40 }}
            animate={{ opacity: 1, rotateY: -14, x: 0, y: [0, -12, 0] }}
            transition={{ opacity: { duration: 0.9, delay: 0.3 }, rotateY: { duration: 1.1, delay: 0.3, ease }, x: { duration: 1.1, delay: 0.3, ease }, y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 } }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-blue/30 via-brand-violet/20 to-transparent blur-2xl" />
            <div
              ref={ref}
              className="glow-border rounded-2xl p-[3px]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <BrowserFrame url={current.url} aspect="aspect-[16/10]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={current.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease }}
                  >
                    <ScaledPreview><CurrentPreview /></ScaledPreview>
                  </motion.div>
                </AnimatePresence>
              </BrowserFrame>
            </div>
            {/* monitor stand */}
            <div className="mx-auto h-6 w-24 bg-gradient-to-b from-slate-600 to-slate-800 [clip-path:polygon(15%_0,85%_0,100%_100%,0_100%)]" />
            <div className="mx-auto h-2 w-44 rounded-full bg-slate-700" />
          </motion.div>

          <div className="mt-5 flex items-center justify-center gap-1" role="group" aria-label="Choose a sample website to preview">
            {TEMPLATES.map((t, n) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setIndex(n)}
                aria-label={`Show ${t.name} sample`}
                aria-current={n === index}
                className="grid h-6 place-items-center px-1"
              >
                <span className={`block h-1.5 rounded-full transition-all duration-300 ${n === index ? "w-7 bg-brand-cyan" : "w-1.5 bg-white/25 hover:bg-white/50"}`} />
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 8 }}
            animate={{ opacity: 1, y: [0, -14, 0], rotate: 6 }}
            transition={{ opacity: { duration: 0.8, delay: 0.7 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.6 }, rotate: { duration: 1, delay: 0.7 } }}
            className="absolute -bottom-6 -right-1 z-10 w-[30%] min-w-[110px] sm:-right-8"
          >
            <div className="glow-border rounded-[1.6rem] bg-ink-900 p-1.5 shadow-2xl shadow-black/60">
              <div className="relative aspect-[9/19] overflow-hidden rounded-[1.25rem]"><PhoneScreen /></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
