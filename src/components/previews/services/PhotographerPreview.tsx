import { Camera, Instagram, Mail } from "lucide-react";

const Shot = ({ k }: { k: number }) => {
  const sky = ["#fbd3a0", "#a8d8f0", "#f7b2c0", "#c8e6c9", "#d6c6f5", "#ffe08a"][k % 6];
  const hill = ["#7b4b2a", "#2f5d7c", "#8a3a58", "#2f6b3f", "#4b3a82", "#a8741a"][k % 6];
  return (
    <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
      <rect width="200" height="160" fill={sky} />
      <circle cx={50 + (k % 3) * 45} cy="48" r="20" fill="#fff" opacity=".8" />
      <path d={`M0 160V${100 - (k % 3) * 8}l60-40 50 36 40-26 50 30v60z`} fill={hill} />
      <path d="M0 160V132l70-14 60 16 70-14v40z" fill="#000" opacity=".18" />
    </svg>
  );
};

/** Service sample: Portfolio — photographer, minimal editorial black & white with warm accents. */
export default function PhotographerPreview() {
  return (
    <div className="bg-white font-sans text-neutral-700" style={{ fontSize: 16 }}>
      <header className="flex items-center justify-between px-12 py-6">
        <div className="flex items-center gap-2 font-serif text-2xl font-bold text-black"><Camera size={22} /> Meera Rao</div>
        <nav className="flex gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500"><span>Weddings</span><span>Portraits</span><span>About</span><span>Contact</span></nav>
      </header>
      <section className="px-12 pb-10 pt-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[#c2410c]">Photography studio</p>
        <h3 className="mx-auto mt-4 max-w-3xl font-serif text-[64px] font-bold leading-[1.02] text-black">Moments, kept <em className="text-[#c2410c]">beautifully.</em></h3>
        <p className="mx-auto mt-4 max-w-xl text-neutral-500">Weddings, portraits and events — natural light, honest emotion.</p>
      </section>
      <section className="grid grid-cols-4 gap-3 px-12 pb-12">
        <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl"><div className="aspect-square"><Shot k={0} /></div></div>
        {[1, 2, 3, 4].map((k) => <div key={k} className="overflow-hidden rounded-2xl"><div className="aspect-[4/3]"><Shot k={k} /></div></div>)}
        <div className="col-span-4 grid grid-cols-4 gap-3">{[5, 2, 4, 1].map((k) => <div key={k} className="overflow-hidden rounded-2xl"><div className="aspect-[4/3]"><Shot k={k} /></div></div>)}</div>
      </section>
      <section className="mx-12 mb-12 grid grid-cols-2 items-center gap-6 rounded-3xl bg-neutral-950 p-9 text-white">
        <div><p className="font-serif text-4xl font-bold">Let's plan your shoot.</p><p className="mt-2 text-neutral-400">Tell me the date and occasion.</p></div>
        <div className="space-y-3 text-sm"><p className="flex items-center gap-3"><Mail size={17} className="text-[#fb923c]" /> hello@yourstudio.com</p><p className="flex items-center gap-3"><Instagram size={17} className="text-[#fb923c]" /> @yourstudio</p><span className="inline-block rounded-full bg-white px-6 py-2.5 font-bold text-black">Check availability</span></div>
      </section>
    </div>
  );
}
