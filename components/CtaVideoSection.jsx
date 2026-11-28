"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaVideoSection({ onOpenEnquiry }) {
  const { isAr, t } = useLanguage();

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#12352D] overflow-hidden flex items-center justify-center text-[#F5F0E5]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/media/yachts/calm-sea.png"
          className="w-full h-full object-cover"
        >
          <source src="/media/hero-yacht.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#12352D]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12352D] via-transparent to-[#12352D]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          key={isAr ? "ar" : "en"}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-[#C6A66B] mb-4 font-bold">
            {t("cta_tagline")}
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F0E5] font-light mb-6">
            {t("cta_title")}
          </h2>

          <p className="text-sm sm:text-base text-[#F5F0E5]/90 leading-relaxed mb-10 max-w-xl mx-auto font-light">
            {t("cta_subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="bg-[#C6A66B] text-[#12352D] hover:bg-[#D4B87E] transition-all font-semibold uppercase tracking-wider py-4 px-8 text-xs shadow-2xl rounded-none w-full sm:w-auto"
            >
              {t("cta_btn_consult")}
            </button>
            <a
              href="tel:+97167422222"
              className="btn-white-outline w-full sm:w-auto !py-3.5 !px-8 text-xs flex items-center justify-center gap-2 rounded-none !text-[#F5F0E5] !border-[#C6A66B]/50 hover:!bg-[#C6A66B] hover:!text-[#12352D]"
            >
              <PhoneCall className="w-4 h-4 text-[#C6A66B]" />
              <span dir="ltr">+971 6 742 2222</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
