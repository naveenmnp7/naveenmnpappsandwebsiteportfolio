import { ArtSolar, Header, Hero, SectionTitle, btn, cardStyle, pageClass, pageStyle, type Theme } from "./parts";

export default function SolarThemed({ t }: { t: Theme }) {
  return (
    <div className={pageClass(t)} style={pageStyle(t)}>
      <Header t={t} links={["Solutions", "Savings", "Projects"]} cta="Free survey" />
      <Hero t={t} eyebrow="Clean energy" secondary="See savings" art={<ArtSolar t={t} />} />
      <section className="px-12 pb-10">
        <SectionTitle>Our solutions</SectionTitle>
        <div className="mt-6 grid grid-cols-3 gap-5">
          {t.items.map(([n, d]) => (
            <div key={n} className="rounded-2xl p-6" style={cardStyle(t)}>
              <span className="block h-11 w-11 rounded-xl" style={{ background: `linear-gradient(135deg, ${t.accent2}, ${t.accent})` }} />
              <p className="mt-4 text-lg font-bold">{n}</p>
              <p className="mt-1 text-sm" style={{ color: t.muted }}>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-12 mb-12 grid grid-cols-2 items-center gap-6 rounded-3xl p-8" style={cardStyle(t)}>
        <div><p className="text-2xl font-black">Estimate your savings</p><p className="mt-1 text-sm" style={{ color: t.muted }}>Share your monthly bill — we'll prepare a plan.</p></div>
        <div className="space-y-2.5">
          <div className="rounded-lg px-4 py-3 text-sm" style={{ background: t.bg, color: t.muted }}>Monthly electricity bill</div>
          <span className="block rounded-lg py-3 text-center text-sm font-bold" style={btn(t)}>Request estimate</span>
        </div>
      </section>
    </div>
  );
}
