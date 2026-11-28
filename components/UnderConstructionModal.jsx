"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Compass,
  Anchor,
  Wrench,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function UnderConstructionModal({
  isOpen,
  onClose,
  sectionName = "This Section",
  onOpenEnquiry,
}) {
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06182a]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-[#082B49] border border-[#DFCA9E]/40 text-[#E8D5B5] shadow-2xl p-8 sm:p-10 overflow-hidden z-10"
        >
          {/* Ambient Corner Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#176B9A]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DFCA9E]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-10 h-10 rounded-full border border-[#DFCA9E]/30 bg-[#06182a]/80 text-[#E8D5B5] hover:text-[#082B49] hover:bg-[#DFCA9E] hover:border-[#DFCA9E] transition-all flex items-center justify-center group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          </button>

          {/* Top Insignia Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#DFCA9E] animate-ping" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#DFCA9E] font-bold">
              Digital Shipyard Atelier · Commissioning Notice
            </span>
          </div>

          {/* Icon Crest */}
          <div className="w-16 h-16 rounded-full border border-[#DFCA9E]/50 bg-gradient-to-br from-[#082B49] to-[#04111d] flex items-center justify-center text-[#DFCA9E] mb-6 shadow-lg shadow-[#DFCA9E]/10">
            <Compass className="w-8 h-8 text-[#DFCA9E] animate-spin" style={{ animationDuration: "25s" }} />
          </div>

          {/* Headline */}
          <h3 className="font-serif text-3xl sm:text-4xl text-[#E8D5B5] font-light leading-snug mb-3">
            <span className="text-[#DFCA9E] font-normal">{sectionName}</span> Is Currently Under Construction.
          </h3>

          {/* Description */}
          <p className="text-sm text-[#DCEFF7]/80 leading-relaxed font-light mb-8">
            Our digital shipyard team is currently handcrafting the bespoke <strong className="text-[#DFCA9E] font-medium">{sectionName}</strong> experience to Al Shaali Marine’s exacting architectural standards. This exclusive portal section will premiere shortly.
          </p>

          {/* Highlights / Status */}
          <div className="p-4 bg-[#06182a]/90 border border-[#DFCA9E]/20 mb-8 space-y-2.5 text-xs text-[#E8D5B5]/90">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#DFCA9E] flex-shrink-0" />
              <span>Full 2026 fleet catalog and models are active on the main homepage.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#DFCA9E] flex-shrink-0" />
              <span>Ajman Drydock & refit consultation desks remain fully operational.</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                if (onOpenEnquiry) onOpenEnquiry(sectionName);
              }}
              className="w-full sm:w-auto flex-1 bg-[#DFCA9E] text-[#082B49] hover:bg-[#E8D5B5] py-3.5 px-6 text-xs font-sans tracking-[0.2em] uppercase font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Contact Shipyard</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto flex-1 border border-[#DFCA9E]/40 text-[#E8D5B5] hover:bg-[#06182a] py-3.5 px-6 text-xs font-sans tracking-[0.2em] uppercase font-semibold transition-all text-center"
            >
              Explore Homepage
            </button>
          </div>

          {/* Subtle Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#DFCA9E] to-transparent opacity-50" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
