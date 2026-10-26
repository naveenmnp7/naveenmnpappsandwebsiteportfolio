import { Github, Instagram, Mail, Phone } from "lucide-react";

/** Personal portfolio template — bold editorial type, lime + magenta on black. */
export default function PortfolioPreview() {
  const projects = [
    { t: "Brand Identity", c: "Branding", bg: "from-[#d7ff3f] to-[#7bd30f]" },
    { t: "Mobile App UI", c: "Product design", bg: "from-[#ff3d9a] to-[#8b2bff]" },
    { t: "Campaign Site", c: "Web", bg: "from-[#34e1ff] to-[#2a6bff]" },
    { t: "Photo Series", c: "Photography", bg: "from-[#ffb347] to-[#ff5f6d]" },
  ];
  return (
    <div className="bg-[#0a0a0a] font-sans text-neutral-300" style={{ fontSize: 16 }}>
      <header className="flex items-center justify-between px-12 py-6">
        <div className="text-xl font-black tracking-tight text-white">ALEX<span className="text-[#d7ff3f]">.</span>RAY</div>
        <nav className="flex gap-8 text-sm font-medium text-neutral-400"><span>Work</span><span>About</span><span>Contact</span></nav>
        <span className="rounded-full bg-[#d7ff3f] px-5 py-2 text-sm font-bold text-black">Hire me</span>
      </header>

      <section className="px-12 pb-12 pt-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#ff3d9a]">Designer · Developer · Storyteller</p>
        <h3 className="mt-4 text-[84px] font-black leading-[0.95] tracking-tighter text-white">
          I make ideas <span className="bg-gradient-to-r from-[#d7ff3f] to-[#ff3d9a] bg-clip-text text-transparent">look inevitable.</span>
        </h3>
        <p className="mt-6 max-w-xl text-lg text-neutral-400">Independent creative helping founders and small brands turn rough ideas into polished digital experiences.</p>
      </section>

      <section className="px-12 pb-14">
        <div className="mb-5 flex items-end justify-between">
          <h4 className="text-3xl font-black text-white">Selected work</h4>
          <span className="text-sm text-neutral-500">Sample projects</span>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div key={p.t} className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.bg} ${i % 3 === 0 ? "h-60" : "h-48"}`}>
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/25" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                <p className="text-xl font-black text-white">{p.t}</p>
                <p className="text-sm text-white/80">{p.c}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-12 mb-14 grid grid-cols-2 items-center gap-6 rounded-3xl border border-neutral-800 bg-neutral-900 p-9">
        <div>
          <h4 className="text-4xl font-black text-white">Let's work together.</h4>
          <p className="mt-2 text-neutral-400">Tell me about your project — I reply within a couple of days.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="flex items-center gap-3"><Mail size={17} className="text-[#d7ff3f]" /> hello@yourname.com</p>
          <p className="flex items-center gap-3"><Phone size={17} className="text-[#d7ff3f]" /> +91 00000 00000</p>
          <p className="flex items-center gap-3"><Instagram size={17} className="text-[#d7ff3f]" /> @yourhandle</p>
          <p className="flex items-center gap-3"><Github size={17} className="text-[#d7ff3f]" /> github.com/yourname</p>
        </div>
      </section>
    </div>
  );
}
