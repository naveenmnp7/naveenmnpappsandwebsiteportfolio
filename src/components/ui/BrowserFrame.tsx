import type { ReactNode } from "react";

interface Props {
  url?: string;
  children: ReactNode;
  className?: string;
  /** Aspect ratio class for the viewport, e.g. "aspect-[16/10]" */
  aspect?: string;
}

/** Lightweight browser chrome used around every website preview. */
export default function BrowserFrame({ url = "yourbusiness.com", children, className = "", aspect = "aspect-[16/10]" }: Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/50 ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-ink-800 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto flex h-5 w-3/5 items-center justify-center truncate rounded-md bg-white/[0.06] px-3 text-[10px] text-slate-400">
          {url}
        </span>
      </div>
      <div className={`relative w-full overflow-hidden ${aspect}`}>{children}</div>
    </div>
  );
}
