import { ArtFrames, Band, Header, Hero, SectionTitle, pageClass, pageStyle, type Theme } from "./parts";

export default function PortfolioThemed({ t }: { t: Theme }) {
  return (
    <div className={pageClass(t)} style={pageStyle(t)}>
      <Header t={t} links={["Work", "About", "Contact"]} cta="Hire me" />
      <Hero t={t} eyebrow="Portfolio" secondary="See my work" art={<ArtFrames t={t} />} />
      <section className="px-12 pb-12">
        <SectionTitle>Selected work</SectionTitle>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {t.items.map(([n], i) => (
            <div key={n} className="relative h-44 overflow-hidden rounded-2xl" style={{ background: `linear-gradient(${120 + i * 50}deg, ${t.accent}, ${t.accent2})` }}>
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/25" />
              <p className="absolute bottom-4 left-4 text-lg font-black" style={{ color: t.onAccent }}>{n}</p>
            </div>
          ))}
        </div>
      </section>
      <Band t={t} title="Let's work together." button="Get in touch" />
    </div>
  );
}
