import { ArtBars, Band, Header, Hero, SectionTitle, btn, cardStyle, pageClass, pageStyle, type Theme } from "./parts";

export default function BusinessThemed({ t }: { t: Theme }) {
  return (
    <div className={pageClass(t)} style={pageStyle(t)}>
      <Header t={t} links={["Services", "About", "Contact"]} cta="Get in touch" />
      <Hero t={t} eyebrow="Trusted local experts" secondary="Our services" art={<ArtBars t={t} />} />
      <section className="px-12 pb-12">
        <SectionTitle>What we do</SectionTitle>
        <div className="mt-6 grid grid-cols-3 gap-5">
          {t.items.map(([n, d], i) => (
            <div key={n} className="rounded-2xl p-6" style={cardStyle(t)}>
              <span className="grid h-11 w-11 place-items-center rounded-xl text-sm font-black" style={btn(t)}>0{i + 1}</span>
              <p className="mt-4 text-lg font-bold">{n}</p>
              <p className="mt-1 text-sm" style={{ color: t.muted }}>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <Band t={t} title="Ready to talk? We reply the same day." button="Book a call" />
    </div>
  );
}
