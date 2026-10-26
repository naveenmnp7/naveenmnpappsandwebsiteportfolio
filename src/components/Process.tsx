import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ClipboardList, Code2, LayoutPanelTop, Palette, Rocket, ShieldCheck } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const STEPS = [
  { n: "01", icon: ClipboardList, t: "Discuss Your Requirements" },
  { n: "02", icon: Palette, t: "Choose Your Design" },
  { n: "03", icon: LayoutPanelTop, t: "Approve the Layout" },
  { n: "04", icon: Code2, t: "Website Development" },
  { n: "05", icon: ShieldCheck, t: "Testing and Optimization" },
  { n: "06", icon: Rocket, t: "Launch Your Website" },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <SectionHeading id="process-title" eyebrow="Our Working Process" title="From first chat to" highlight="launch day." subtitle="A clear six-step journey so you always know what happens next." />

      <div ref={ref} className="relative">
        {/* Horizontal progress rail (desktop) */}
        <div aria-hidden className="absolute left-[8%] right-[8%] top-7 hidden h-0.5 rounded-full bg-white/10 lg:block">
          <motion.div className="h-full origin-left rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet shadow-[0_0_14px_rgba(0,195,255,.8)]" style={{ scaleX: progress }} />
        </div>
        {/* Vertical rail (mobile) */}
        <div aria-hidden className="absolute bottom-6 left-7 top-6 w-0.5 rounded-full bg-white/10 lg:hidden">
          <motion.div className="h-full origin-top rounded-full bg-gradient-to-b from-brand-cyan to-brand-violet" style={{ scaleY: progress }} />
        </div>

        <ol className="relative grid gap-8 lg:grid-cols-6 lg:gap-4">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="relative flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
            >
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-brand-cyan/40 bg-ink-900 text-brand-cyan shadow-[0_0_24px_-4px_rgba(0,195,255,.6)]">
                <s.icon size={22} />
              </span>
              <div className="lg:mt-5">
                <span className="font-display text-xs font-bold tracking-[0.25em] text-brand-violet">{s.n}</span>
                <h3 className="mt-1 font-display text-base font-bold leading-snug text-white">{s.t}</h3>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
