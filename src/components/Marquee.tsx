const WORDS = ["DESIGN", "DEVELOP", "LAUNCH", "GROW"];

export default function Marquee() {
  // Duplicate the track so the -50% translate loops seamlessly
  const track = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-5" role="presentation">
      <p className="sr-only">Design, Develop, Launch, Grow</p>
      <div aria-hidden className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-10">
            {track.map((w, i) => (
              <span key={`${dup}-${i}`} className="flex items-center gap-10 font-display text-2xl font-extrabold tracking-[0.2em] sm:text-3xl">
                <span className={i % 2 ? "text-gradient" : "text-white/80"}>{w}</span>
                <span className="text-brand-cyan">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}
