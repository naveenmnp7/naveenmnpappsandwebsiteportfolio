import { MapPin } from "lucide-react";
import { ArtHouse, Header, Hero, SectionTitle, btn, cardStyle, pageClass, pageStyle, type Theme } from "./parts";

export default function RealEstateThemed({ t }: { t: Theme }) {
  return (
    <div className={pageClass(t)} style={pageStyle(t)}>
      <Header t={t} links={["Buy", "Rent", "Agents"]} cta="Book a visit" />
      <Hero t={t} eyebrow="Featured properties" secondary="Browse listings" art={<ArtHouse t={t} />} />
      <section className="px-12 pb-12">
        <div className="flex items-end justify-between"><SectionTitle>Sample listings</SectionTitle><span className="text-sm" style={{ color: t.accent }}>Prices are examples</span></div>
        <div className="mt-6 grid grid-cols-3 gap-5">
          {t.items.map(([n, p]) => (
            <article key={n} className="overflow-hidden rounded-2xl" style={cardStyle(t)}>
              <div className="aspect-[5/3]" style={{ background: `linear-gradient(135deg, ${t.accent2}66, ${t.accent}aa)` }}><ArtHouse t={t} /></div>
              <div className="p-5">
                <p className="text-xl font-black" style={{ color: t.accent }}>{p}</p>
                <p className="mt-0.5 font-semibold">{n}</p>
                <p className="mt-1 flex items-center gap-1 text-sm" style={{ color: t.muted }}><MapPin size={14} /> Prime location</p>
                <span className="mt-4 block rounded-lg py-2.5 text-center text-sm font-bold" style={btn(t)}>Enquire</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
