import { ShoppingBag } from "lucide-react";
import { ArtShop, Header, Hero, SectionTitle, btn, cardStyle, pageClass, pageStyle, type Theme } from "./parts";

export default function EcommerceThemed({ t }: { t: Theme }) {
  return (
    <div className={pageClass(t)} style={pageStyle(t)}>
      <Header t={t} links={["Shop", "New", "Offers"]} cta="Cart" />
      <Hero t={t} eyebrow="New collection" secondary="View offers" art={<ArtShop t={t} />} />
      <section className="px-12 pb-12">
        <SectionTitle>Trending now</SectionTitle>
        <div className="mt-6 grid grid-cols-3 gap-5">
          {t.items.map(([n, p], i) => (
            <article key={n} className="rounded-2xl p-3" style={cardStyle(t)}>
              <div className="grid aspect-square place-items-center rounded-xl" style={{ background: `linear-gradient(${135 + i * 40}deg, ${t.accent2}99, ${t.accent})` }}>
                <ShoppingBag size={46} style={{ color: t.onAccent }} />
              </div>
              <p className="mt-3 font-bold">{n}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-extrabold" style={{ color: t.accent }}>{p}</span>
                <span className="rounded-full px-4 py-1.5 text-xs font-bold" style={btn(t)}>Add to cart</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
