import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import BrowserFrame from "./ui/BrowserFrame";
import ScaledPreview from "./previews/ScaledPreview";
import PreviewModal from "./PreviewModal";
import { CATEGORIES, type Category } from "../data/portfolio";
import { CATEGORY_ORDER, CATEGORY_TITLE, SAMPLES, type CategoryKey } from "../data/samples";
import { useEnquiry } from "../hooks/useEnquiry";
import { useRotatingIndex } from "../hooks/useRotatingIndex";

const ease = [0.22, 1, 0.36, 1] as const;

/** One card per category: its browser window keeps cycling through that category's 10 concepts. */
function CategoryCard({ cat, order, onOpen, onViewAll }: { cat: CategoryKey; order: number; onOpen: (i: number) => void; onViewAll: () => void }) {
  const list = SAMPLES[cat];
  const { index, setPaused, ref } = useRotatingIndex(list.length, 4200 + order * 350);
  const cur = list[index];
  const Cur = cur.Component;

  return (
    <article ref={ref} className="glass group overflow-hidden rounded-2xl p-3" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* mouse convenience only — keyboard users use the buttons below */}
      <div onClick={() => onOpen(index)} className="relative block w-full cursor-pointer overflow-hidden rounded-xl">
        <BrowserFrame url={cur.url} aspect="aspect-[16/11]">
          <AnimatePresence initial={false}>
            <motion.div key={cur.id} className="absolute inset-0" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease }}>
              <ScaledPreview><Cur /></ScaledPreview>
            </motion.div>
          </AnimatePresence>
        </BrowserFrame>
        <span className="absolute inset-0 grid place-items-center bg-ink-950/0 opacity-0 transition-all group-hover:bg-ink-950/50 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900"><Maximize2 size={15} /> View concept</span>
        </span>
      </div>

      <div className="px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold text-white">{CATEGORY_TITLE[cat]}</h3>
            <p className="truncate text-sm text-slate-400" aria-live="off">{cur.name} · {index + 1}/{list.length}</p>
          </div>
          <span className="shrink-0 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">Concept Design</span>
        </div>
        <div className="mt-3 flex items-center gap-4">
          <button type="button" onClick={() => onOpen(index)} className="text-sm font-semibold text-brand-cyan hover:text-white" aria-label={`Open ${cur.name} concept`}>View concept →</button>
          <button type="button" onClick={onViewAll} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-300 hover:text-white">
            All {list.length} designs <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [cat, setCat] = useState<Category>("All");
  const [active, setActive] = useState<{ cat: CategoryKey; index: number } | null>(null);
  const { startEnquiry } = useEnquiry();

  const activeList = active ? SAMPLES[active.cat] : null;
  const activeSample = active && activeList ? activeList[active.index] : null;
  const step = (d: number) => setActive((a) => (a ? { ...a, index: (a.index + d + SAMPLES[a.cat].length) % SAMPLES[a.cat].length } : a));

  return (
    <section id="portfolio" className="section" aria-labelledby="portfolio-title">
      <SectionHeading
        id="portfolio-title"
        eyebrow="Portfolio"
        title="Concept projects that show"
        highlight="what's possible."
        subtitle="Ten concept designs in every category. These are fictional demos created by MNP APPS to show our style — not real client work."
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

      {cat === "All" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_ORDER.map((c, i) => (
            <CategoryCard key={c} cat={c} order={i} onOpen={(index) => setActive({ cat: c, index })} onViewAll={() => setCat(c)} />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLES[cat].map((s, i) => {
            const C = s.Component;
            return (
              <article key={s.id} className="glass group overflow-hidden rounded-2xl p-3">
                <div onClick={() => setActive({ cat, index: i })} className="relative block w-full cursor-pointer overflow-hidden rounded-xl">
                  <BrowserFrame url={s.url} aspect="aspect-[16/11]"><ScaledPreview><C /></ScaledPreview></BrowserFrame>
                  <span className="absolute inset-0 grid place-items-center bg-ink-950/0 opacity-0 transition-all group-hover:bg-ink-950/50 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900"><Maximize2 size={15} /> View concept</span>
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3 px-2 pb-2 pt-4">
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-lg font-bold text-white">{s.name}</h3>
                    <p className="text-sm text-slate-400">Concept {i + 1} of {SAMPLES[cat].length}</p>
                    <button type="button" onClick={() => setActive({ cat, index: i })} className="mt-1 text-sm font-semibold text-brand-cyan hover:text-white" aria-label={`View ${s.name} concept`}>View concept →</button>
                  </div>
                  <span className="shrink-0 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">Concept Design</span>
                </div>
              </article>
            );
          })}
        </div>
      )}

      <PreviewModal
        open={!!active}
        Preview={activeSample?.Component ?? null}
        title={activeSample ? `${activeSample.name} — Concept Design` : ""}
        url={activeSample?.url ?? ""}
        nav={active && activeList ? { label: `${active.index + 1} / ${activeList.length}`, onPrev: () => step(-1), onNext: () => step(1) } : undefined}
        onClose={() => setActive(null)}
        onCustomize={() => {
          const a = activeSample;
          setActive(null);
          window.setTimeout(() => startEnquiry({ note: `I like the "${a?.name}" concept and want something similar.` }), 60);
        }}
      />
    </section>
  );
}
