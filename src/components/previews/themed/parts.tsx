import type { CSSProperties, ReactNode } from "react";

/** A "theme" turns one layout into many different-looking sample sites. */
export interface Theme {
  name: string;
  url: string;
  headline: string;
  sub: string;
  cta: string;
  bg: string;
  fg: string;
  muted: string;
  accent: string;
  accent2: string;
  surface: string;
  onAccent: string;
  serif: boolean;
  layout: "split" | "center";
  items: [string, string][];
}

export const pageStyle = (t: Theme): CSSProperties => ({ background: t.bg, color: t.fg, fontSize: 16 });
export const pageClass = (t: Theme) => (t.serif ? "font-serif" : "font-sans");
export const cardStyle = (t: Theme): CSSProperties => ({ background: t.surface, border: `1px solid ${t.muted}33` });
export const btn = (t: Theme): CSSProperties => ({ background: t.accent, color: t.onAccent });

export function Header({ t, links, cta }: { t: Theme; links: string[]; cta: string }) {
  return (
    <header className="flex items-center justify-between px-12 py-5">
      <div className="flex items-center gap-2.5 text-xl font-extrabold" style={{ color: t.fg }}>
        <span className="grid h-8 w-8 place-items-center rounded-lg text-sm font-black" style={btn(t)}>{t.name[0]}</span>
        {t.name}
      </div>
      <nav className="flex gap-7 text-sm" style={{ color: t.muted }}>{links.map((l) => <span key={l}>{l}</span>)}</nav>
      <span className="rounded-lg px-5 py-2.5 text-sm font-bold" style={btn(t)}>{cta}</span>
    </header>
  );
}

export function Hero({ t, eyebrow, secondary, art }: { t: Theme; eyebrow: string; secondary: string; art: ReactNode }) {
  const split = t.layout === "split";
  return (
    <section className={split ? "grid grid-cols-2 items-center gap-8 px-12 pb-14 pt-6" : "px-12 pb-12 pt-6 text-center"}>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: t.accent }}>{eyebrow}</p>
        <h3 className={`mt-4 font-black leading-[1.04] ${split ? "text-[50px]" : "mx-auto max-w-3xl text-[56px]"}`}>{t.headline}</h3>
        <p className={`mt-4 text-[17px] ${split ? "max-w-md" : "mx-auto max-w-xl"}`} style={{ color: t.muted }}>{t.sub}</p>
        <div className={`mt-7 flex gap-3 ${split ? "" : "justify-center"}`}>
          <span className="rounded-lg px-7 py-3.5 text-sm font-bold" style={btn(t)}>{t.cta}</span>
          <span className="rounded-lg px-7 py-3.5 text-sm font-semibold" style={{ border: `1px solid ${t.muted}66` }}>{secondary}</span>
        </div>
      </div>
      <div className={split ? "" : "mx-auto mt-8 w-[58%]"}>{art}</div>
    </section>
  );
}

export const SectionTitle = ({ children }: { children: ReactNode }) => <h4 className="text-3xl font-black">{children}</h4>;

export function Band({ t, title, button }: { t: Theme; title: string; button: string }) {
  return (
    <section className="mx-12 mb-12 flex items-center justify-between gap-6 rounded-3xl px-9 py-7" style={btn(t)}>
      <p className="text-2xl font-black">{title}</p>
      <span className="shrink-0 rounded-full px-6 py-2.5 text-sm font-bold" style={{ background: t.onAccent, color: t.accent }}>{button}</span>
    </section>
  );
}

/* ---- hero illustrations, drawn with the theme's own colours ---- */
export const ArtPlate = ({ t }: { t: Theme }) => (
  <svg viewBox="0 0 400 320" className="w-full" aria-hidden>
    <ellipse cx="200" cy="292" rx="140" ry="16" fill="#000" opacity=".25" />
    <circle cx="200" cy="160" r="132" fill={t.surface} stroke={t.accent} strokeWidth="6" />
    <circle cx="200" cy="160" r="92" fill={t.accent} />
    {[[165, 140], [215, 130], [190, 185], [235, 175], [160, 180]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="14" fill={i % 2 ? t.accent2 : t.surface} />)}
    <path d="M170 60c-8-14 8-18 0-34M205 56c-8-14 8-18 0-34" stroke={t.muted} strokeWidth="4" strokeLinecap="round" fill="none" opacity=".7" />
  </svg>
);
export const ArtBars = ({ t }: { t: Theme }) => (
  <svg viewBox="0 0 420 300" className="w-full" aria-hidden>
    <rect x="20" y="30" width="380" height="240" rx="20" fill={t.surface} stroke={`${t.muted}55`} />
    <rect x="44" y="54" width="140" height="12" rx="6" fill={t.accent} />
    <rect x="44" y="76" width="90" height="8" rx="4" fill={t.muted} opacity=".4" />
    {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={50 + i * 46} y={246 - (50 + i * 24)} width="30" height={50 + i * 24} rx="7" fill={i % 2 ? t.accent2 : t.accent} />)}
    <circle cx="340" cy="100" r="34" fill="none" stroke={`${t.muted}55`} strokeWidth="12" />
    <path d="M340 66a34 34 0 0 1 32 46" fill="none" stroke={t.accent} strokeWidth="12" strokeLinecap="round" />
  </svg>
);
export const ArtSolar = ({ t }: { t: Theme }) => (
  <svg viewBox="0 0 420 300" className="w-full" aria-hidden>
    <circle cx="330" cy="70" r="40" fill={t.accent2} /><circle cx="330" cy="70" r="62" fill={t.accent2} opacity=".25" />
    <g transform="translate(60 120) skewX(-18)">
      {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => <rect key={`${r}${c}`} x={c * 84} y={r * 52} width="78" height="46" rx="3" fill={t.accent} stroke={t.surface} strokeWidth="3" opacity={0.75 + r * 0.1} />))}
    </g>
    <rect x="0" y="276" width="420" height="24" fill={t.surface} />
  </svg>
);
export const ArtHouse = ({ t }: { t: Theme }) => (
  <svg viewBox="0 0 420 300" className="w-full" aria-hidden>
    <rect x="60" y="130" width="240" height="140" fill={t.surface} stroke={`${t.muted}55`} />
    <rect x="260" y="90" width="100" height="180" fill={t.accent2} />
    <path d="M40 132 180 52l140 80z" fill={t.accent} />
    {[90, 150, 210].map((x) => <rect key={x} x={x} y="160" width="38" height="46" rx="3" fill={t.accent2} opacity=".7" />)}
    <rect x="160" y="222" width="34" height="48" fill={t.fg} opacity=".7" />
    {[110, 150, 190].map((y) => <rect key={y} x="278" y={y} width="64" height="22" rx="3" fill={t.surface} opacity=".8" />)}
    <rect x="0" y="268" width="420" height="32" fill={t.accent} opacity=".25" />
  </svg>
);
export const ArtShop = ({ t }: { t: Theme }) => (
  <svg viewBox="0 0 420 300" className="w-full" aria-hidden>
    <rect x="70" y="110" width="180" height="150" rx="16" fill={t.accent} />
    <path d="M110 120c0-54 100-54 100 0" stroke={t.fg} strokeWidth="9" fill="none" opacity=".8" />
    <rect x="240" y="150" width="120" height="110" rx="14" fill={t.accent2} />
    <path d="M240 190h120M300 150v110" stroke={t.surface} strokeWidth="8" />
    <circle cx="110" cy="70" r="22" fill={t.accent2} opacity=".7" /><circle cx="360" cy="86" r="14" fill={t.accent} opacity=".6" />
  </svg>
);
export const ArtFrames = ({ t }: { t: Theme }) => (
  <svg viewBox="0 0 420 300" className="w-full" aria-hidden>
    <rect x="40" y="70" width="170" height="200" rx="18" fill={t.accent} transform="rotate(-8 125 170)" />
    <rect x="150" y="40" width="170" height="200" rx="18" fill={t.accent2} transform="rotate(5 235 140)" />
    <rect x="220" y="90" width="150" height="180" rx="18" fill={t.surface} stroke={t.accent} strokeWidth="5" />
    <circle cx="295" cy="150" r="30" fill={t.accent} opacity=".85" />
    <rect x="245" y="200" width="100" height="10" rx="5" fill={t.muted} opacity=".5" />
  </svg>
);
