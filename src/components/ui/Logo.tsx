const BASE = import.meta.env.BASE_URL; // "/" locally, "/<repo>/" on GitHub Pages

interface Props {
  variant?: "inline" | "full";
  className?: string;
  priority?: boolean;
}

/**
 * Uses the supplied MNP APPS logo artwork (public/logo-*.webp).
 *  - "inline": the MNP mark + live "MNP APPS" wordmark (navbar)
 *  - "full":   the complete original lockup (footer, previews)
 */
export default function Logo({ variant = "inline", className = "", priority = false }: Props) {
  if (variant === "full") {
    return (
      <picture>
        <source srcSet={`${BASE}logo-full.webp`} type="image/webp" />
        <img
          src={`${BASE}logo-full.png`}
          alt="MNP APPS logo"
          width={967}
          height={559}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`h-auto select-none ${className}`}
        />
      </picture>
    );
  }
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <picture>
        <source srcSet={`${BASE}logo-mark.webp`} type="image/webp" />
        <img
          src={`${BASE}logo-mark.png`}
          alt=""
          width={731}
          height={349}
          loading="eager"
          decoding="async"
          className="h-7 w-auto select-none sm:h-8"
        />
      </picture>
      <span className="font-display text-lg font-extrabold leading-none tracking-tight text-white sm:text-xl">
        MNP <span className="font-medium text-slate-300">APPS</span>
      </span>
      <span className="sr-only">MNP APPS — home</span>
    </span>
  );
}
