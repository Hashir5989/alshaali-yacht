"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Newspaper,
  Calendar,
  Phone,
  ArrowRight,
  Globe,
} from "lucide-react";
import SoundAmbience from "./SoundAmbience";
import UnderConstructionModal from "./UnderConstructionModal";
import { useLanguage } from "@/context/LanguageContext";

export default function Header({ onOpenEnquiry }) {
  const { lang, toggleLang, isAr, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileBrandsExpanded, setMobileBrandsExpanded] = useState(false);
  const [mobileMoreExpanded, setMobileMoreExpanded] = useState(false);
  const [underConstructionTarget, setUnderConstructionTarget] = useState(null);

  const pathname = usePathname();
  const brandsTimeoutRef = useRef(null);
  const moreTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setBrandsDropdownOpen(false);
    setMoreDropdownOpen(false);
  }, [pathname]);

  const handleBrandsEnter = () => {
    if (brandsTimeoutRef.current) clearTimeout(brandsTimeoutRef.current);
    setMoreDropdownOpen(false);
    setBrandsDropdownOpen(true);
  };

  const handleBrandsLeave = () => {
    brandsTimeoutRef.current = setTimeout(() => {
      setBrandsDropdownOpen(false);
    }, 180);
  };

  const handleMoreEnter = () => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    setBrandsDropdownOpen(false);
    setMoreDropdownOpen(true);
  };

  const handleMoreLeave = () => {
    moreTimeoutRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 180);
  };

  const triggerUnderConstruction = (name) => {
    setBrandsDropdownOpen(false);
    setMoreDropdownOpen(false);
    setMobileMenuOpen(false);
    setUnderConstructionTarget(name);
  };

  const brandItems = [
    {
      name: isAr ? "أسمراتي" : "Asmaraty",
      division: isAr ? "يخوت سوبر يخت" : "Yachts",
      desc: isAr ? "يخوت سوبر يخت وتفصيل ملكي خاص" : "Superyachts & Custom Royal Commissions",
      badge: isAr ? "الرئيسية" : "Flagship",
    },
    {
      name: isAr ? "جلوري" : "Glory",
      division: isAr ? "قوارب سريعة" : "Power Boats",
      desc: isAr ? "قوارب سريعة وعالية الأداء في عرض البحر" : "High-Performance Cruisers & Motor Yachts",
      badge: isAr ? "أداء عالي" : "Performance",
    },
    {
      name: isAr ? "واريور" : "Warrior",
      division: isAr ? "كونسول أوسط" : "Center Console",
      desc: isAr ? "زوارق تكتيكية للرحلات وصيد البطولات" : "Tactical Tournament Offshore Craft",
      badge: isAr ? "تكتيكي" : "Tactical",
    },
  ];

  // More Submenu: News, Events & Contact Us
  const moreSubmenuItems = [
    {
      name: t("nav_news"),
      category: isAr ? "إطلاق وبيانات صحفية" : "Press & Launches",
      desc: t("nav_news_desc"),
      icon: Newspaper,
      badge: isAr ? "الأحدث" : "Latest",
    },
    {
      name: t("nav_events"),
      category: isAr ? "معارض وعروض خاصة" : "Boat Shows & Debuts",
      desc: t("nav_events_desc"),
      icon: Calendar,
      badge: isAr ? "قريباً" : "Upcoming",
    },
    {
      name: t("nav_contact"),
      category: isAr ? "الاستشارات وحوض عجمان" : "Atelier & Consultation",
      desc: t("nav_contact_desc"),
      icon: Phone,
      badge: isAr ? "مباشر" : "Direct",
    },
  ];

  const isLightHeader = scrolled || pathname !== "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isLightHeader
            ? "bg-white/95 backdrop-blur-md border-b border-[#D9E2EC] py-3.5 shadow-lg text-[#102A43]"
            : "bg-gradient-to-b from-[#082B49]/90 via-[#082B49]/40 to-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo - Navigates to Home */}
          <Link href="/" className="flex items-center group py-0.5" aria-label="Al Shaali Marine Home">
            <div className="relative h-10 sm:h-11 md:h-12 w-48 sm:w-56 md:w-60 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src={isLightHeader ? "/assets/al-shaali-logo-dark.png" : "/assets/al-shaali-logo.png"}
                alt="Al Shaali Marine"
                fill
                priority
                sizes="(max-width: 640px) 192px, 240px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            
            {/* 1. Home - Allowed to navigate normally */}
            <Link
              href="/"
              className={`font-sans text-[11px] tracking-[0.24em] uppercase py-2 relative transition-colors ${
                pathname === "/" && !brandsDropdownOpen && !moreDropdownOpen
                  ? "text-[#176B9A] font-bold"
                  : isLightHeader
                  ? "text-[#102A43]/85 hover:text-[#176B9A]"
                  : "text-white/90 hover:text-[#DCEFF7]"
              }`}
            >
              {t("nav_home")}
            </Link>

            {/* 2. About Us - Triggers Under Construction */}
            <button
              onClick={() => triggerUnderConstruction(t("nav_about"))}
              className={`font-sans text-[11px] tracking-[0.24em] uppercase py-2 relative transition-colors ${
                isLightHeader
                  ? "text-[#102A43]/85 hover:text-[#176B9A]"
                  : "text-white/90 hover:text-[#DCEFF7]"
              }`}
            >
              {t("nav_about")}
            </button>

            {/* 3. Shipyard - Triggers Under Construction */}
            <button
              onClick={() => triggerUnderConstruction(t("nav_shipyard"))}
              className={`font-sans text-[11px] tracking-[0.24em] uppercase py-2 relative transition-colors ${
                isLightHeader
                  ? "text-[#102A43]/85 hover:text-[#176B9A]"
                  : "text-white/90 hover:text-[#DCEFF7]"
              }`}
            >
              {t("nav_shipyard")}
            </button>

            {/* 4. Brands (Dropdown Menu with Transition) */}
            <div
              className="relative py-2"
              onMouseEnter={handleBrandsEnter}
              onMouseLeave={handleBrandsLeave}
            >
              <button
                type="button"
                onClick={() => setBrandsDropdownOpen((prev) => !prev)}
                className={`font-sans text-[11px] tracking-[0.24em] uppercase flex items-center gap-1.5 transition-colors ${
                  brandsDropdownOpen
                    ? "text-[#176B9A] font-bold"
                    : isLightHeader
                    ? "text-[#102A43]/85 hover:text-[#176B9A]"
                    : "text-white/90 hover:text-[#DCEFF7]"
                }`}
              >
                <span>{t("nav_brands")}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    brandsDropdownOpen ? "rotate-180 text-[#176B9A]" : ""
                  }`}
                />
              </button>

              {/* Brands Dropdown Menu */}
              <AnimatePresence>
                {brandsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-white/95 backdrop-blur-xl border border-[#D9E2EC] shadow-2xl p-3 z-50 text-[#102A43]"
                  >
                    <div className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-[#829AB1] px-3 py-2 border-b border-[#D9E2EC]/70 flex items-center justify-between">
                      <span>{t("nav_brands_title")}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#176B9A]" />
                    </div>

                    <div className="py-1">
                      {brandItems.map((brand) => (
                        <button
                          key={brand.name}
                          type="button"
                          onClick={() => triggerUnderConstruction(`${brand.name} (${brand.division})`)}
                          className={`w-full ${isAr ? "text-right" : "text-left"} group/item flex items-start gap-3 p-3 hover:bg-[#F5F8FA] transition-colors ${isAr ? "border-r-2" : "border-l-2"} border-transparent hover:border-[#176B9A]`}
                        >
                          <div className="w-8 h-8 rounded-none bg-[#082B49] text-[#DFCA9E] flex items-center justify-center flex-shrink-0 text-xs font-serif font-bold group-hover/item:bg-[#176B9A] group-hover/item:text-white transition-colors">
                            {brand.name[0]}
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between">
                              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#082B49] group-hover/item:text-[#176B9A]">
                                {brand.name}
                              </span>
                              <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#EEF3F8] text-[#176B9A] font-mono font-semibold">
                                {brand.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#486581] leading-snug mt-0.5">
                              {brand.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-[#D9E2EC]/70 px-3 pb-1">
                      <button
                        type="button"
                        onClick={() => triggerUnderConstruction(t("nav_view_all_brands"))}
                        className="w-full text-[10.5px] uppercase tracking-wider text-[#176B9A] font-bold flex items-center justify-between hover:underline pt-1"
                      >
                        <span>{t("nav_view_all_brands")}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isAr ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 5. Career - Triggers Under Construction */}
            <button
              onClick={() => triggerUnderConstruction(t("nav_career"))}
              className={`font-sans text-[11px] tracking-[0.24em] uppercase py-2 relative transition-colors ${
                isLightHeader
                  ? "text-[#102A43]/85 hover:text-[#176B9A]"
                  : "text-white/90 hover:text-[#DCEFF7]"
              }`}
            >
              {t("nav_career")}
            </button>

            {/* 6. More (Submenu with News, Events & Contact Us) */}
            <div
              className="relative py-2"
              onMouseEnter={handleMoreEnter}
              onMouseLeave={handleMoreLeave}
            >
              <button
                type="button"
                onClick={() => setMoreDropdownOpen((prev) => !prev)}
                className={`font-sans text-[11px] tracking-[0.24em] uppercase flex items-center gap-1.5 transition-colors ${
                  moreDropdownOpen
                    ? "text-[#176B9A] font-bold"
                    : isLightHeader
                    ? "text-[#102A43]/85 hover:text-[#176B9A]"
                    : "text-white/90 hover:text-[#DCEFF7]"
                }`}
              >
                <span>{t("nav_more")}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    moreDropdownOpen ? "rotate-180 text-[#176B9A]" : ""
                  }`}
                />
              </button>

              {/* More Submenu: News, Events & Contact Us */}
              <AnimatePresence>
                {moreDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className={`absolute top-full ${isAr ? "left-0" : "right-0"} mt-1 w-84 bg-white/95 backdrop-blur-xl border border-[#D9E2EC] shadow-2xl p-3 z-50 text-[#102A43]`}
                  >
                    <div className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-[#829AB1] px-3 py-2 border-b border-[#D9E2EC]/70 flex items-center justify-between">
                      <span>{t("nav_more_title")}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#176B9A]" />
                    </div>

                    <div className="py-1">
                      {moreSubmenuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.name}
                            type="button"
                            onClick={() => triggerUnderConstruction(`${item.name} (${item.category})`)}
                            className={`w-full ${isAr ? "text-right" : "text-left"} group/more flex items-start gap-3.5 p-3 hover:bg-[#F5F8FA] transition-colors ${isAr ? "border-r-2" : "border-l-2"} border-transparent hover:border-[#176B9A]`}
                          >
                            <div className="w-8 h-8 rounded-none bg-[#EEF3F8] text-[#176B9A] flex items-center justify-center flex-shrink-0 group-hover/more:bg-[#082B49] group-hover/more:text-[#DFCA9E] transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center justify-between">
                                <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#082B49] group-hover/more:text-[#176B9A] block">
                                  {item.name}
                                </span>
                                <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#EEF3F8] text-[#176B9A] font-mono font-semibold">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-[#486581] leading-snug mt-1 font-light">
                                {item.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </nav>

          {/* Right Action: Language Switcher Button (Instead of Enquiry) */}
          <div className="hidden sm:flex items-center gap-4">
            <SoundAmbience />

            {/* Language Switcher Button */}
            <button
              onClick={toggleLang}
              className={`px-4 py-2.5 text-[11px] tracking-[0.2em] uppercase font-bold transition-all rounded-none shadow-md flex items-center gap-2 group ${
                isLightHeader
                  ? "bg-[#082B49] text-white hover:bg-[#176B9A]"
                  : "bg-white text-[#082B49] hover:bg-[#DFCA9E] hover:text-[#082B49]"
              }`}
              title={isAr ? "التبديل إلى اللغة الإنجليزية" : "التبديل إلى العربية"}
            >
              <Globe className="w-4 h-4 text-[#DFCA9E] group-hover:rotate-45 transition-transform" />
              <span>{isAr ? "الإنجليزية" : "العربية"}</span>
              <span className={`text-[9px] px-1.5 py-0.5 font-mono font-semibold rounded-none ${
                isLightHeader ? "bg-white/15 text-[#DFCA9E]" : "bg-[#082B49]/10 text-[#082B49]"
              }`}>
                {isAr ? "إنجليزي" : "عربي"}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button & Mobile Language Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase border border-[#DFCA9E]/40 text-[#DFCA9E] bg-[#06182a]"
            >
              {isAr ? "إنجليزي" : "عربي"}
            </button>

            <SoundAmbience />

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`p-2 transition-colors ${
                isLightHeader ? "text-[#082B49]" : "text-white"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-[65px] left-0 right-0 z-40 bg-[#082B49]/98 backdrop-blur-2xl border-b border-[#176B9A]/40 text-[#E8D5B5] shadow-2xl lg:hidden overflow-y-auto max-h-[calc(100vh-70px)] ${isAr ? "text-right" : "text-left"}`}
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-sm tracking-[0.25em] uppercase py-2 border-b border-[#176B9A]/20 font-bold text-white hover:text-[#DFCA9E]"
              >
                {t("nav_home")}
              </Link>

              {/* About Us */}
              <button
                type="button"
                onClick={() => triggerUnderConstruction(t("nav_about"))}
                className={`${isAr ? "text-right" : "text-left"} font-sans text-sm tracking-[0.25em] uppercase py-2 border-b border-[#176B9A]/20 text-[#E8D5B5] hover:text-[#DFCA9E]`}
              >
                {t("nav_about")}
              </button>

              {/* Shipyard */}
              <button
                type="button"
                onClick={() => triggerUnderConstruction(t("nav_shipyard"))}
                className={`${isAr ? "text-right" : "text-left"} font-sans text-sm tracking-[0.25em] uppercase py-2 border-b border-[#176B9A]/20 text-[#E8D5B5] hover:text-[#DFCA9E]`}
              >
                {t("nav_shipyard")}
              </button>

              {/* Brands Accordion */}
              <div className="border-b border-[#176B9A]/20 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileBrandsExpanded((prev) => !prev)}
                  className="w-full flex items-center justify-between font-sans text-sm tracking-[0.25em] uppercase py-2 text-[#DFCA9E] font-bold"
                >
                  <span>{t("nav_brands")}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      mobileBrandsExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileBrandsExpanded && (
                  <div className={`${isAr ? "pr-4 border-r" : "pl-4 border-l"} pt-2 space-y-3 pb-2 border-[#DFCA9E]/30 mt-1`}>
                    {brandItems.map((brand) => (
                      <button
                        key={brand.name}
                        type="button"
                        onClick={() => triggerUnderConstruction(`${brand.name} (${brand.division})`)}
                        className={`block w-full ${isAr ? "text-right" : "text-left"} text-xs uppercase tracking-wider text-[#DCEFF7] hover:text-[#DFCA9E]`}
                      >
                        <span className="font-bold">{brand.name}</span> · {brand.desc}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Career */}
              <button
                type="button"
                onClick={() => triggerUnderConstruction(t("nav_career"))}
                className={`${isAr ? "text-right" : "text-left"} font-sans text-sm tracking-[0.25em] uppercase py-2 border-b border-[#176B9A]/20 text-[#E8D5B5] hover:text-[#DFCA9E]`}
              >
                {t("nav_career")}
              </button>

              {/* More (News, Events & Contact Us) Accordion */}
              <div className="border-b border-[#176B9A]/20 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileMoreExpanded((prev) => !prev)}
                  className="w-full flex items-center justify-between font-sans text-sm tracking-[0.25em] uppercase py-2 text-[#E8D5B5] hover:text-[#DFCA9E]"
                >
                  <span>{t("nav_more")}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      mobileMoreExpanded ? "rotate-180 text-[#DFCA9E]" : ""
                    }`}
                  />
                </button>

                {mobileMoreExpanded && (
                  <div className={`${isAr ? "pr-4 border-r" : "pl-4 border-l"} pt-2 space-y-3 pb-2 border-[#176B9A]/50 mt-1`}>
                    {moreSubmenuItems.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => triggerUnderConstruction(`${item.name} (${item.category})`)}
                        className={`block w-full ${isAr ? "text-right" : "text-left"} text-xs uppercase tracking-wider text-[#DCEFF7] hover:text-[#DFCA9E]`}
                      >
                        <span className="font-bold">{item.name}</span> · {item.category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Language Toggle CTA */}
              <button
                onClick={toggleLang}
                className="w-full bg-[#DFCA9E] text-[#082B49] py-3.5 text-xs font-sans tracking-[0.25em] uppercase font-bold mt-4 shadow-lg flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>{isAr ? "التبديل إلى اللغة الإنجليزية" : "التبديل إلى العربية"}</span>
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Under Construction Modal */}
      <UnderConstructionModal
        isOpen={!!underConstructionTarget}
        sectionName={underConstructionTarget || ""}
        onClose={() => setUnderConstructionTarget(null)}
        onOpenEnquiry={onOpenEnquiry}
      />
    </>
  );
}
