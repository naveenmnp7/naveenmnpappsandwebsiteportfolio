import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export interface EnquiryPrefill {
  websiteType?: string;
  note?: string;
  nonce: number;
}

interface Ctx {
  prefill: EnquiryPrefill | null;
  /** Scrolls to the contact form and pre-selects the service / plan. */
  startEnquiry: (opts: { websiteType?: string; note?: string }) => void;
}

const EnquiryContext = createContext<Ctx | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [prefill, setPrefill] = useState<EnquiryPrefill | null>(null);

  const startEnquiry = useCallback((opts: { websiteType?: string; note?: string }) => {
    setPrefill({ ...opts, nonce: Date.now() });
    const el = document.getElementById("contact");
    if (el) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      window.setTimeout(() => document.getElementById("enquiry-name")?.focus({ preventScroll: true }), reduce ? 50 : 700);
    }
  }, []);

  const value = useMemo(() => ({ prefill, startEnquiry }), [prefill, startEnquiry]);
  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}
