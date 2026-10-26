import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { AlertCircle, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Reveal from "./ui/Reveal";
import { BUDGETS, SITE, WEBSITE_TYPES } from "../config/site";
import { useEnquiry } from "../hooks/useEnquiry";
import { messages, openWhatsApp } from "../lib/whatsapp";
import { validateEnquiry, type EnquiryErrors, type EnquiryValues } from "../lib/validation";

const EMPTY: EnquiryValues = { name: "", business: "", phone: "", websiteType: "", budget: "", message: "" };

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" } // only when a real endpoint accepted the enquiry
  | { kind: "whatsapp" } // WhatsApp opened — user still has to press Send there
  | { kind: "error"; text: string };

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-200">{label}</label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
          <AlertCircle size={13} /> {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const { prefill } = useEnquiry();
  const [values, setValues] = useState<EnquiryValues>(EMPTY);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  // Apply the service / plan chosen elsewhere on the page
  useEffect(() => {
    if (!prefill) return;
    setValues((v) => ({
      ...v,
      websiteType: prefill.websiteType ?? v.websiteType,
      message: prefill.note ? (v.message.includes(prefill.note) ? v.message : prefill.note) : v.message,
    }));
    setErrors({});
    setStatus({ kind: "idle" });
  }, [prefill]);

  const set = (k: keyof EnquiryValues) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const compose = (v: EnquiryValues) =>
    [
      `Hi MNP APPS! New website enquiry:`,
      `• Name: ${v.name.trim()}`,
      `• Business: ${v.business.trim()}`,
      `• Phone: ${v.phone.trim()}`,
      `• Website type: ${v.websiteType}`,
      `• Budget: ${v.budget}`,
      `• Details: ${v.message.trim()}`,
    ].join("\n");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validateEnquiry(values);
    setErrors(errs);
    const firstKey = Object.keys(errs)[0];
    if (firstKey) {
      document.getElementById(firstKey === "name" ? "enquiry-name" : `enquiry-${firstKey}`)?.focus();
      return;
    }

    if (SITE.formEndpoint) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus({ kind: "sent" });
        setValues(EMPTY);
      } catch {
        setStatus({ kind: "error", text: "We couldn't send your enquiry just now. Please try again, or message us on WhatsApp." });
      }
      return;
    }

    // No delivery service configured → hand the enquiry over via WhatsApp (never fake a success).
    const opened = openWhatsApp(compose(values));
    setStatus(opened ? { kind: "whatsapp" } : { kind: "error", text: "WhatsApp isn't configured yet. The site owner needs to add a number in src/config/site.ts." });
  }

  const describe = (k: keyof EnquiryValues) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `enquiry-${k === "name" ? "name" : k}-error` } : {});

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">Contact</span>
          <h2 id="contact-title" className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
            Let's build <span className="text-gradient">something amazing.</span>
          </h2>
          <p className="mt-4 max-w-md text-lg text-slate-400">Tell us about your business. We'll help you choose the right website.</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-brand-cyan"><Mail size={18} /></span> <a className="hover:text-brand-cyan" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a></li>
            <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-brand-cyan"><Phone size={18} /></span> <a className="hover:text-brand-cyan" href={`tel:+${SITE.contact.phone}`}>{SITE.contact.phoneDisplay}</a></li>
            <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-brand-cyan"><MapPin size={18} /></span> {SITE.contact.location}</li>
            <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-brand-cyan"><Clock size={18} /></span> {SITE.contact.hours}</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => openWhatsApp(messages.general())} className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-6 py-3.5 text-sm font-bold text-[#04301a] transition hover:brightness-110 active:scale-[0.97]">
              <MessageCircle size={18} /> Chat on WhatsApp
            </button>
            <a href={`tel:+${SITE.contact.phone}`} className="btn-ghost">
              <Phone size={17} /> Call {SITE.contact.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="glass glow-border space-y-4 rounded-3xl p-6 sm:p-8" aria-label="Website enquiry form">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="enquiry-name" label="Your name" error={errors.name}>
                <input id="enquiry-name" className="field" autoComplete="name" value={values.name} onChange={set("name")} placeholder="Full name" {...describe("name")} />
              </Field>
              <Field id="enquiry-business" label="Business name" error={errors.business}>
                <input id="enquiry-business" className="field" autoComplete="organization" value={values.business} onChange={set("business")} placeholder="Your business" {...describe("business")} />
              </Field>
            </div>
            <Field id="enquiry-phone" label="Phone number" error={errors.phone}>
              <input id="enquiry-phone" type="tel" inputMode="tel" className="field" autoComplete="tel" value={values.phone} onChange={set("phone")} placeholder="+91 98765 43210" {...describe("phone")} />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="enquiry-websiteType" label="Website type" error={errors.websiteType}>
                <select id="enquiry-websiteType" className="field" value={values.websiteType} onChange={set("websiteType")} {...describe("websiteType")}>
                  <option value="">Select type…</option>
                  {WEBSITE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </Field>
              <Field id="enquiry-budget" label="Budget" error={errors.budget}>
                <select id="enquiry-budget" className="field" value={values.budget} onChange={set("budget")} {...describe("budget")}>
                  <option value="">Select budget…</option>
                  {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </Field>
            </div>
            <Field id="enquiry-message" label="Project description" error={errors.message}>
              <textarea id="enquiry-message" rows={4} maxLength={1000} className="field resize-y" value={values.message} onChange={set("message")} placeholder="What does your business do, and what do you need?" {...describe("message")} />
            </Field>

            <button type="submit" disabled={status.kind === "sending"} className="btn-primary w-full !py-4 disabled:opacity-60">
              <Send size={16} /> {status.kind === "sending" ? "Sending…" : "Submit Enquiry"}
            </button>

            <div aria-live="polite" className="min-h-[1.5rem]">
              {status.kind === "sent" && (
                <p className="flex items-start gap-2 rounded-xl bg-emerald-400/10 p-3 text-sm text-emerald-300"><CheckCircle2 size={18} className="mt-0.5 shrink-0" /> Thank you — your enquiry has been sent. We'll get back to you soon.</p>
              )}
              {status.kind === "whatsapp" && (
                <p className="flex items-start gap-2 rounded-xl bg-brand-blue/10 p-3 text-sm text-blue-200"><MessageCircle size={18} className="mt-0.5 shrink-0" /> WhatsApp opened with your enquiry. Press <strong>Send</strong> there to deliver it to us.</p>
              )}
              {status.kind === "error" && (
                <p className="flex items-start gap-2 rounded-xl bg-rose-400/10 p-3 text-sm text-rose-300"><AlertCircle size={18} className="mt-0.5 shrink-0" /> {status.text}</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
