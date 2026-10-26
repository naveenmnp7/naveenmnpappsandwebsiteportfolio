import { useEffect, useRef, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Palette, X } from "lucide-react";
import BrowserFrame from "./ui/BrowserFrame";
import ScaledPreview from "./previews/ScaledPreview";
import { PREVIEWS, type PreviewKey } from "./previews";

interface Nav {
  /** e.g. "3 / 10" */
  label: string;
  onPrev: () => void;
  onNext: () => void;
}

interface Props {
  open: boolean;
  /** Either a registered preview key... */
  previewKey?: PreviewKey | null;
  /** ...or a component to render directly. */
  Preview?: ComponentType | null;
  title: string;
  url: string;
  onClose: () => void;
  onCustomize: () => void;
  nav?: Nav;
}

/** Accessible modal that shows a full, scrollable local preview of a sample site. */
export default function PreviewModal({ open, previewKey, Preview, title, url, onClose, onCustomize, nav }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<Element | null>(null);
  // Keep the latest callbacks in refs so the effect below only runs when the modal opens/closes.
  const onCloseRef = useRef(onClose);
  const navRef = useRef(nav);
  onCloseRef.current = onClose;
  navRef.current = nav;

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
      if (e.key === "ArrowRight" && navRef.current && !(e.target instanceof HTMLInputElement)) navRef.current.onNext();
      if (e.key === "ArrowLeft" && navRef.current && !(e.target instanceof HTMLInputElement)) navRef.current.onPrev();
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      (lastFocus.current as HTMLElement | null)?.focus?.();
    };
  }, [open]);

  const Content = Preview ?? (previewKey ? PREVIEWS[previewKey] : null);

  return (
    <AnimatePresence>
      {open && Content && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} live preview`}
            initial={{ scale: 0.94, y: 24, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.96, y: 12, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass glow-border flex max-h-full w-full max-w-5xl flex-col gap-4 overflow-hidden rounded-2xl bg-ink-900/95 p-4 sm:p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                <p className="text-xs text-slate-400">Interactive sample preview — scroll to explore. Sample content only; yours will carry your branding.</p>
              </div>
              <div className="flex items-center gap-2">
                {nav && (
                  <div className="flex items-center gap-1 rounded-xl border border-white/15 px-1">
                    <button type="button" onClick={nav.onPrev} aria-label="Previous sample" className="grid h-10 w-10 place-items-center rounded-lg text-white hover:bg-white/10"><ChevronLeft size={18} /></button>
                    <span className="min-w-[3.5rem] text-center text-xs font-semibold text-slate-300" aria-live="polite">{nav.label}</span>
                    <button type="button" onClick={nav.onNext} aria-label="Next sample" className="grid h-10 w-10 place-items-center rounded-lg text-white hover:bg-white/10"><ChevronRight size={18} /></button>
                  </div>
                )}
                <button type="button" className="btn-primary !px-4 !py-2.5" onClick={onCustomize}>
                  <Palette size={15} /> Customize This Design
                </button>
                <button ref={closeRef} type="button" onClick={onClose} aria-label="Close preview" className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-white hover:bg-white/10">
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-hidden rounded-xl">
              <BrowserFrame url={url} aspect="h-[62vh] sm:h-[68vh]" className="h-full">
                <ScaledPreview key={url} scroll><Content /></ScaledPreview>
              </BrowserFrame>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
