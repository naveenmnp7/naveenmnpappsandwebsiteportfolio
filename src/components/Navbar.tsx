import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Smartphone, X } from "lucide-react";
import Logo from "./ui/Logo";
import { NAV_LINKS } from "../config/site";
import { useEnquiry } from "../hooks/useEnquiry";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const { startEnquiry } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Close the mobile menu on Escape and lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl" : "bg-transparent"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black">
        Skip to content
      </a>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" aria-label="MNP APPS home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-white ${active === l.href ? "text-white" : "text-slate-400"}`}
            >
              {l.label}
              {active === l.href && <motion.span layoutId="nav-dot" className="mx-auto mt-0.5 block h-0.5 w-5 rounded-full bg-brand-cyan" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#apps" className="btn-ghost !px-4 !py-2.5" aria-label="Get an app — jump to the mobile apps section">
            <Smartphone size={16} /> Get App
          </a>
          <button type="button" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex" onClick={() => startEnquiry({})}>
            Get Your Website
          </button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden xl:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pb-6 pt-2 sm:px-8">
              {NAV_LINKS.map((l, i) => (
                <motion.li key={l.href} initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 }}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${active === l.href ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5"}`}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-3">
                <button
                  type="button"
                  className="btn-primary w-full"
                  onClick={() => {
                    setOpen(false);
                    startEnquiry({});
                  }}
                >
                  Get Your Website
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
