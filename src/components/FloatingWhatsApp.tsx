import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { messages, openWhatsApp } from "../lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <motion.button
      type="button"
      onClick={() => openWhatsApp(messages.general())}
      aria-label="Chat with MNP APPS on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-[90] grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,.7)] sm:bottom-7 sm:right-7"
    >
      <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30 motion-reduce:hidden" />
      <MessageCircle size={26} className="relative" fill="currentColor" strokeWidth={1.5} />
    </motion.button>
  );
}
