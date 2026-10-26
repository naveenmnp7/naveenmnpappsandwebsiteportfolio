import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { PRICES, formatPrice } from "../config/site";

const FAQS = [
  { q: "How much does a website cost?", a: `Our plans start at ${formatPrice(PRICES.starter)} for a single-page Starter website. The Business Website is currently offered at ${formatPrice(PRICES.businessOffer)} (regular price ${formatPrice(PRICES.businessRegular)}), the Professional Website is ${formatPrice(PRICES.professional)}, and E-commerce starts at ${formatPrice(PRICES.ecommerceFrom)}. You'll receive a clear written quotation before we begin.` },
  { q: `What is included in the ${formatPrice(PRICES.businessOffer)} offer?`, a: "Professional website design, a mobile-responsive layout, up to 5 pages, a WhatsApp enquiry button, Google Maps location integration, a contact form, basic on-page SEO setup, social media links, one design revision round and website deployment assistance. Domain, hosting and third-party tool fees are not included unless listed in your final quotation." },
  { q: "Can I customize a website template?", a: "Yes. Every template is a starting point — we adapt the colours, layout, content, images and features to match your business and brand." },
  { q: "Will my website work on mobile phones?", a: "Absolutely. We build mobile-first, then scale up, so your site looks and works great on phones, tablets and desktops." },
  { q: "Can you integrate WhatsApp?", a: "Yes. We add WhatsApp enquiry buttons that open a chat with a prefilled message, so customers can contact you in one tap." },
  { q: "Can you create a website for my restaurant or solar company?", a: "Yes — restaurants and solar companies are two of our dedicated specialities, with templates built around menus and reservations or around savings messaging and lead enquiries. We also build for real estate, e-commerce, portfolios and more." },
  { q: "Do I need to purchase a domain?", a: "To have your own web address (like yourbusiness.com) you need a domain, which is registered with a domain registrar and renewed yearly. Domain and hosting fees are paid to those providers and are not included unless stated in your quotation. We can guide you through choosing and connecting them." },
  { q: "How long will it take to complete my website?", a: "It depends on the plan and how quickly content and feedback are shared. Simple sites can often be ready in a few days; larger sites and stores take longer. We'll give you a realistic timeline in your quotation." },
  { q: "Can I request changes after the design is completed?", a: "Yes. The plans that include a revision round (such as the Business Website) cover one round of design changes. Additional changes can be quoted separately." },
  { q: "Do you provide website maintenance?", a: "We can provide ongoing support and updates on request. Maintenance is not automatically included in the website price, so we'll agree the scope and cost with you separately." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section max-w-4xl" aria-labelledby="faq-title">
      <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions?" highlight="We've got answers." />
      <div className="space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={Math.min(i, 5) * 0.04}>
              <div className={`glass overflow-hidden rounded-2xl transition-colors ${isOpen ? "border-brand-cyan/40" : ""}`}>
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold text-white sm:px-6 sm:py-5"
                  >
                    <span>{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-brand-cyan">
                      <Plus size={16} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400 sm:px-6 sm:text-[15px]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
