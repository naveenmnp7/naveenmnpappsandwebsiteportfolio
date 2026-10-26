import Reveal from "./Reveal";

interface Props {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  id?: string;
}

export default function SectionHeading({ eyebrow, title, highlight, subtitle, align = "center", id }: Props) {
  return (
    <Reveal className={`mb-12 md:mb-16 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" aria-hidden />
        {eyebrow}
      </span>
      <h2 id={id} className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
