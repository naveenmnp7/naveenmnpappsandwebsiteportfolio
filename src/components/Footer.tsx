import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./ui/Logo";
import { SITE } from "../config/site";

const QUICK = [
  { l: "Home", h: "#home" }, { l: "Templates", h: "#templates" }, { l: "Process", h: "#process" }, { l: "FAQ", h: "#faq" },
];
const SERVICES = [
  { l: "Business Websites", h: "#services" }, { l: "Restaurant Websites", h: "#services" }, { l: "Solar Company Websites", h: "#services" },
  { l: "Real Estate Websites", h: "#services" }, { l: "E-commerce Websites", h: "#services" },
];
const SOCIALS = [
  { name: "Instagram", icon: Instagram, href: SITE.social.instagram },
  { name: "Facebook", icon: Facebook, href: SITE.social.facebook },
  { name: "LinkedIn", icon: Linkedin, href: SITE.social.linkedin },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950/80" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="full" className="w-44" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{SITE.description}</p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map(({ name, icon: Icon, href }) =>
                href ? (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`MNP APPS on ${name}`} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-brand-cyan/60 hover:text-white">
                    <Icon size={17} />
                  </a>
                ) : (
                  // Editable placeholder: add the verified URL in src/config/site.ts to activate
                  <span key={name} role="img" aria-label={`${name} profile coming soon`} title={`${name} link coming soon`} className="grid h-10 w-10 cursor-not-allowed place-items-center rounded-xl border border-dashed border-white/10 text-slate-600">
                    <Icon size={17} />
                  </span>
                )
              )}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK.map((l) => <li key={l.l}><a className="text-slate-400 transition hover:text-brand-cyan" href={l.h}>{l.l}</a></li>)}
              <li><a className="text-slate-400 transition hover:text-brand-cyan" href="#pricing">Pricing</a></li>
              <li><a className="text-slate-400 transition hover:text-brand-cyan" href="#portfolio">Portfolio</a></li>
              <li><a className="text-slate-400 transition hover:text-brand-cyan" href="#contact">Contact</a></li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((l) => <li key={l.l}><a className="text-slate-400 transition hover:text-brand-cyan" href={l.h}>{l.l}</a></li>)}
            </ul>
          </nav>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5"><Mail size={15} className="text-brand-cyan" /> <a className="transition hover:text-brand-cyan" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a></li>
              <li className="flex items-center gap-2.5"><Phone size={15} className="text-brand-cyan" /> <a className="transition hover:text-brand-cyan" href={`tel:+${SITE.contact.phone}`}>{SITE.contact.phoneDisplay}</a></li>
              <li className="flex items-center gap-2.5"><MapPin size={15} className="text-brand-cyan" /> {SITE.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Portfolio projects shown are fictional concept designs.</p>
        </div>
      </div>
    </footer>
  );
}
