"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function UnderConstructionModal({
  isOpen,
  onClose,
  sectionName = "This Section",
  onOpenEnquiry,
}) {
  const { isAr, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" dir={isAr ? "rtl" : "ltr"}>
        {/* Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A211B]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-[#0A211B] border border-[#C6A66B]/40 text-[#F5F0E5] shadow-2xl p-8 sm:p-10 overflow-hidden z-10"
        >
          {/* Ambient Corner Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#12352D]/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C6A66B]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className={`absolute top-5 ${isAr ? "left-5" : "right-5"} w-10 h-10 rounded-full border border-[#C6A66B]/30 bg-[#0D2721]/80 text-[#F5F0E5] hover:text-[#12352D] hover:bg-[#C6A66B] hover:border-[#C6A66B] transition-all flex items-center justify-center group`}
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          </button>

          {/* Top Insignia Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C6A66B] animate-ping" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#C6A66B] font-bold">
              {t("modal_badge")}
            </span>
          </div>

          {/* Icon Crest */}
          <div className="w-16 h-16 rounded-full border border-[#C6A66B]/50 bg-gradient-to-br from-[#12352D] to-[#0A211B] flex items-center justify-center text-[#C6A66B] mb-6 shadow-lg shadow-[#C6A66B]/10">
            <Compass className="w-8 h-8 text-[#C6A66B] animate-spin" style={{ animationDuration: "25s" }} />
          </div>

          {/* Headline */}
          <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F0E5] font-light leading-snug mb-3">
            <span className="text-[#C6A66B] font-normal">{sectionName}</span> {t("modal_title_suffix")}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#F5F0E5]/80 leading-relaxed font-light mb-8">
            {t("modal_desc_prefix")} <strong className="text-[#C6A66B] font-medium">{sectionName}</strong> {t("modal_desc_suffix")}
          </p>

          {/* Highlights / Status */}
          <div className="p-4 bg-[#0D2721]/90 border border-[#C6A66B]/20 mb-8 space-y-2.5 text-xs text-[#F5F0E5]/90">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C6A66B] flex-shrink-0" />
              <span>{t("modal_check1")}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C6A66B] flex-shrink-0" />
              <span>{t("modal_check2")}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                if (onOpenEnquiry) onOpenEnquiry(sectionName);
              }}
              className="w-full sm:w-auto flex-1 bg-[#C6A66B] text-[#12352D] hover:bg-[#D4B87E] py-3.5 px-6 text-xs font-sans tracking-[0.2em] uppercase font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{t("modal_btn_contact")}</span>
              <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto flex-1 border border-[#C6A66B]/40 text-[#F5F0E5] hover:bg-[#0D2721] py-3.5 px-6 text-xs font-sans tracking-[0.2em] uppercase font-semibold transition-all text-center"
            >
              {t("modal_btn_explore")}
            </button>
          </div>

          {/* Subtle Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C6A66B] to-transparent opacity-50" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
