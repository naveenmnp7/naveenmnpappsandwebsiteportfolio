import { ArtPlate, Band, Header, Hero, SectionTitle, btn, cardStyle, pageClass, pageStyle, type Theme } from "./parts";

export default function RestaurantThemed({ t }: { t: Theme }) {
  return (
    <div className={pageClass(t)} style={pageStyle(t)}>
      <Header t={t} links={["Menu", "Story", "Visit"]} cta="Reserve" />
      <Hero t={t} eyebrow="Now serving" secondary="View menu" art={<ArtPlate t={t} />} />
      <section className="px-12 pb-12">
        <SectionTitle>Popular picks</SectionTitle>
        <div className="mt-6 grid grid-cols-3 gap-5">
          {t.items.map(([n, p]) => (
            <div key={n} className="rounded-2xl p-4" style={cardStyle(t)}>
              <div className="aspect-[4/3] rounded-xl" style={{ background: `radial-gradient(circle at 35% 35%, ${t.accent2}, ${t.accent})` }} />
              <p className="mt-3 font-bold">{n}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-extrabold" style={{ color: t.accent }}>{p}</span>
                <span className="rounded-full px-3 py-1 text-xs font-bold" style={btn(t)}>Order</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Band t={t} title="Hungry? Book a table or order on WhatsApp." button="Reserve now" />
    </div>
  );
}
