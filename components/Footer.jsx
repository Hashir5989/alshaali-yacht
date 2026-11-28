"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import UnderConstructionModal from "./UnderConstructionModal";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer({ onOpenEnquiry }) {
  const { isAr, t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [underConstructionTarget, setUnderConstructionTarget] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  const triggerUnderConstruction = (name) => {
    setUnderConstructionTarget(name);
  };

  return (
    <>
      <footer className="relative bg-[#0A211B] border-t border-[#C6A66B]/20 text-[#F5F0E5] pt-20 pb-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

          {/* Newsletter Section */}
          <div className="border-b border-[#C6A66B]/15 pb-16 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <p className="font-sans text-[11px] tracking-[0.34em] uppercase text-[#C6A66B] mb-2 font-semibold">
                  {t("footer_newsletter_tagline")}
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F0E5] font-light mb-3">
                  {t("footer_newsletter_title")}
                </h3>
                <p className="text-[#F5F0E5]/85 text-xs sm:text-sm max-w-md leading-relaxed font-light">
                  {t("footer_newsletter_desc")}
                </p>
              </div>

              <div className="lg:col-span-6">
                {subscribed ? (
                  <div className="flex items-center gap-3 p-4 bg-white/10 border border-[#C6A66B]/40 rounded-none text-sm text-[#C6A66B]">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>{t("footer_newsletter_success")}</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("footer_newsletter_placeholder")}
                      className="flex-grow bg-white/10 border border-[#C6A66B]/25 px-5 py-3.5 text-sm text-[#F5F0E5] placeholder:text-[#F5F0E5]/40 focus:border-[#C6A66B] focus:outline-none transition-colors rounded-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#C6A66B] text-[#12352D] hover:bg-[#D4B87E] flex-shrink-0 flex items-center justify-center gap-2 py-3.5 px-6 rounded-none font-semibold uppercase tracking-wider text-xs transition-colors"
                    >
                      <span>{t("footer_newsletter_btn")}</span>
                      <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
                    </button>
                  </form>
                )}
                <p className="text-[10px] text-[#C6A66B]/80 mt-3 flex items-center gap-2 font-light">
                  <Shield className="w-3 h-3 text-[#C6A66B]" />
                  <span>{t("footer_newsletter_privacy")}</span>
                </p>
              </div>
            </div>
          </div>

          {/* 4-Column Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">

            {/* Brand Col (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link href="/" className="inline-block" aria-label="Al Shaali Marine Home">
                <div className="relative h-11 w-52 sm:w-56">
                  <Image
                    src="/assets/al-shaali-logo-gold.png"
                    alt="Al Shaali Marine"
                    fill
                    sizes="220px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p className="text-sm text-[#F5F0E5]/85 leading-relaxed max-w-sm font-light">
                {t("footer_brand_desc")}
              </p>
              <p className="text-xs text-[#C6A66B] font-mono tracking-widest mt-2 font-semibold">
                {t("footer_est")}
              </p>
            </div>

            {/* Navigation Col 1: Main Menu (3 cols) */}
            <div className={`lg:col-span-3 flex flex-col gap-3 ${isAr ? "items-start text-right" : "items-start text-left"}`}>
              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#C6A66B] mb-2 font-bold">
                {t("footer_col_nav")}
              </p>
              <Link href="/" className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors">
                {t("nav_home")}
              </Link>
              <button
                type="button"
                onClick={() => triggerUnderConstruction(t("nav_about"))}
                className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors"
              >
                {t("nav_about")}
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction(t("nav_shipyard"))}
                className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors"
              >
                {t("nav_shipyard")}
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction(t("nav_career"))}
                className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors flex items-center gap-2"
              >
                <span>{t("nav_career")}</span>
                <span className="text-[9px] uppercase px-1.5 py-0.5 bg-[#C6A66B]/20 text-[#C6A66B] font-mono">{t("footer_hiring")}</span>
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction(t("nav_news"))}
                className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors"
              >
                {t("nav_news")}
              </button>
            </div>

            {/* Navigation Col 2: Brand Divisions (3 cols) */}
            <div className={`lg:col-span-3 flex flex-col gap-3 ${isAr ? "items-start text-right" : "items-start text-left"}`}>
              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#C6A66B] mb-2 font-bold">
                {t("footer_col_brands")}
              </p>
              <button
                type="button"
                onClick={() => triggerUnderConstruction(`${t("asmaraty_title")} (${t("asmaraty_division")})`)}
                className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors"
              >
                {t("asmaraty_title")} ({t("asmaraty_division")})
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction(`${t("glory_title")} (${t("glory_division")})`)}
                className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors"
              >
                {t("glory_title")} ({t("glory_division")})
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction(`${t("warrior_title")} (${t("warrior_division")})`)}
                className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors"
              >
                {t("warrior_title")} ({t("warrior_division")})
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction(t("chairman_title"))}
                className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors"
              >
                {t("chairman_title")}
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction(t("testimonials_title"))}
                className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors"
              >
                {t("testimonials_title")}
              </button>
            </div>

            {/* Navigation Col 3: Contact & Legal (2 cols) */}
            <div className={`lg:col-span-2 flex flex-col gap-3 ${isAr ? "items-start text-right" : "items-start text-left"}`}>
              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#C6A66B] mb-2 font-bold">
                {t("footer_col_contact")}
              </p>
              <a href="mailto:sales@alshaalimarine.com" className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors" dir="ltr">
                sales@alshaalimarine.com
              </a>
              <a href="tel:+97167422222" className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors" dir="ltr">
                +971 6 742 2222
              </a>
              <button
                type="button"
                onClick={() => triggerUnderConstruction(t("nav_contact"))}
                className="text-sm text-[#F5F0E5]/75 hover:text-[#C6A66B] transition-colors"
              >
                {t("footer_write_us")}
              </button>
              <div className="pt-2 border-t border-[#C6A66B]/15 flex flex-col gap-2 w-full">
                <button
                  type="button"
                  onClick={() => triggerUnderConstruction(t("footer_impressum"))}
                  className="text-xs text-[#F5F0E5]/60 hover:text-[#C6A66B] transition-colors"
                >
                  {t("footer_impressum")}
                </button>
                <button
                  type="button"
                  onClick={() => triggerUnderConstruction(t("footer_privacy"))}
                  className="text-xs text-[#F5F0E5]/60 hover:text-[#C6A66B] transition-colors"
                >
                  {t("footer_privacy")}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#C6A66B]/15 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F0E5]/50 gap-4">
            <p>{t("footer_rights")}</p>
            <p className="tracking-widest uppercase text-[10px] text-[#C6A66B]">
              {t("footer_locations")}
            </p>
          </div>

          {/* Environmental Statement Note */}
          <p className="text-[11px] text-[#F5F0E5]/35 mt-6 max-w-2xl leading-relaxed italic">
            {t("footer_env")}
          </p>
        </div>
      </footer>

      {/* Under Construction Modal for Footer Links */}
      <UnderConstructionModal
        isOpen={!!underConstructionTarget}
        sectionName={underConstructionTarget || ""}
        onClose={() => setUnderConstructionTarget(null)}
        onOpenEnquiry={onOpenEnquiry}
      />
    </>
  );
}
