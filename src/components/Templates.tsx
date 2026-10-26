import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Palette } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import BrowserFrame from "./ui/BrowserFrame";
import ScaledPreview from "./previews/ScaledPreview";
import PreviewModal from "./PreviewModal";
import { PREVIEWS } from "./previews";
import { TEMPLATES, type Template } from "../data/templates";
import { formatPrice } from "../config/site";
import { useEnquiry } from "../hooks/useEnquiry";

export default function Templates() {
  const [active, setActive] = useState<Template | null>(null);
  const { startEnquiry } = useEnquiry();

  const customize = useCallback(
    (t: Template) => {
      setActive(null);
      // wait a tick so the modal's scroll lock is released before scrolling
      window.setTimeout(() => startEnquiry({ websiteType: t.websiteType, note: `I'd like to customize the "${t.name}" template.` }), 60);
    },
    [startEnquiry]
  );

  return (
    <section id="templates" className="section" aria-labelledby="templates-title">
      <SectionHeading
        id="templates-title"
        eyebrow="Website Design Templates"
        title="Pick a design."
        highlight="We make it yours."
        subtitle="Six professionally designed starting points. Open any live preview, then we customize it with your branding, content and photos."
      />

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {TEMPLATES.map((t, i) => {
          const Preview = PREVIEWS[t.id];
          return (
            <Reveal key={t.id} delay={(i % 3) * 0.08}>
              <motion.article whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }} className="glass glow-border group flex h-full flex-col rounded-2xl p-4">
                {/* Mouse convenience only — keyboard & screen-reader users use the "Live Demo" button below */}
                <div onClick={() => setActive(t)} className="relative block w-full cursor-pointer overflow-hidden rounded-xl text-left">
                  <BrowserFrame url={t.url} aspect="aspect-[16/11]">
                    <ScaledPreview><Preview /></ScaledPreview>
                  </BrowserFrame>
                  <span className="absolute inset-0 grid place-items-center bg-ink-950/0 opacity-0 transition-all duration-300 group-hover:bg-ink-950/50 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900"><Eye size={16} /> Open preview</span>
                  </span>
                </div>

                <div className="mt-5 flex flex-1 flex-col px-1">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold tracking-[0.2em] text-brand-cyan">TEMPLATE {t.number}</span>
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-slate-400">Sample design</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">{t.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{t.description}</p>
                  <p className="mt-4 text-sm text-slate-400">
                    Starting at <span className="font-display text-xl font-extrabold text-white">{formatPrice(t.startingPrice)}</span>
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <button type="button" className="btn-ghost !px-3 !py-3" onClick={() => setActive(t)}>
                      <Eye size={15} /> Live Demo
                    </button>
                    <button type="button" className="btn-primary !px-3 !py-3" onClick={() => customize(t)}>
                      <Palette size={15} /> Customize
                    </button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>

      <PreviewModal
        open={!!active}
        previewKey={active?.id ?? null}
        title={active ? `${active.name} — Template ${active.number}` : ""}
        url={active?.url ?? ""}
        onClose={() => setActive(null)}
        onCustomize={() => active && customize(active)}
      />
    </section>
  );
}
