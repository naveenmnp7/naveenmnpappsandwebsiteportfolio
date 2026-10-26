import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import BrowserFrame from "./ui/BrowserFrame";
import ScaledPreview from "./previews/ScaledPreview";
import { PREVIEWS } from "./previews";
import { CATEGORIES, PROJECTS, type Category } from "../data/portfolio";
import { Maximize2 } from "lucide-react";
import PreviewModal from "./PreviewModal";
import { useEnquiry } from "../hooks/useEnquiry";
import type { Project } from "../data/portfolio";

export default function Portfolio() {
  const [cat, setCat] = useState<Category>("All");
  const [active, setActive] = useState<Project | null>(null);
  const { startEnquiry } = useEnquiry();
  const list = PROJECTS.filter((p) => cat === "All" || p.category === cat);

  return (
    <section id="portfolio" className="section" aria-labelledby="portfolio-title">
      <SectionHeading
        id="portfolio-title"
        eyebrow="Portfolio"
        title="Concept projects that show"
        highlight="what's possible."
        subtitle="These are fictional concept designs created by MNP APPS to demonstrate our style — not real client work."
      />

      <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${cat === c ? "border-transparent bg-gradient-to-r from-brand-cyan to-brand-violet text-white shadow-lg shadow-brand-blue/30" : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-brand-cyan/50 hover:text-white"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => {
            const Preview = PREVIEWS[p.preview];
            return (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="glass group overflow-hidden rounded-2xl p-3"
              >
                <div onClick={() => setActive(p)} className="relative block w-full cursor-pointer overflow-hidden rounded-xl">
                  <BrowserFrame url={p.url} aspect="aspect-[16/11]">
                    <ScaledPreview><Preview /></ScaledPreview>
                  </BrowserFrame>
                  <span className="absolute inset-0 grid place-items-center bg-ink-950/0 opacity-0 transition-all group-hover:bg-ink-950/55 group-hover:opacity-100 group-focus-within:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900"><Maximize2 size={15} /> View concept</span>
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3 px-2 pb-2 pt-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                    <p className="text-sm text-slate-400">{p.blurb}</p>
                    <button type="button" onClick={() => setActive(p)} className="mt-2 text-sm font-semibold text-brand-cyan hover:text-white" aria-label={`View ${p.title} concept preview`}>
                      View concept →
                    </button>
                  </div>
                  <span className="shrink-0 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">Concept Design</span>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <PreviewModal
        open={!!active}
        previewKey={active?.preview ?? null}
        title={active ? `${active.title} — Concept Design` : ""}
        url={active?.url ?? ""}
        onClose={() => setActive(null)}
        onCustomize={() => {
          const a = active;
          setActive(null);
          window.setTimeout(() => startEnquiry({ note: `I like the "${a?.title}" concept and want something similar.` }), 60);
        }}
      />
    </section>
  );
}
