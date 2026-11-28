"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Wrench, ShieldCheck, Anchor, Compass } from "lucide-react";
import AnimatedTitle from "./AnimatedTitle";
import InteractiveCard3D from "./InteractiveCard3D";
import { useLanguage } from "@/context/LanguageContext";

export default function ShipyardRefitSection({ onOpenEnquiry }) {
  const { isAr, t } = useLanguage();

  const capabilities = [
    {
      title: t("shipyard_cap1_title"),
      desc: t("shipyard_cap1_desc"),
      icon: Anchor,
    },
    {
      title: t("shipyard_cap2_title"),
      desc: t("shipyard_cap2_desc"),
      icon: Wrench,
    },
    {
      title: t("shipyard_cap3_title"),
      desc: t("shipyard_cap3_desc"),
      icon: ShieldCheck,
    },
    {
      title: t("shipyard_cap4_title"),
      desc: t("shipyard_cap4_desc"),
      icon: Compass,
    },
  ];

  return (
    <section id="shipyard" className="py-24 sm:py-32 bg-white border-b border-[#D9E2EC] relative overflow-hidden text-[#102A43]">
      {/* Background subtle nautical contour */}
      <div className="absolute inset-0 bg-[radial-gradient(#176B9A_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Head with Animated Word Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <AnimatedTitle
              key={isAr ? "ar" : "en"}
              tagline={t("shipyard_tagline")}
              title={t("shipyard_title")}
              dark={false}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-[#486581] max-w-md leading-relaxed font-normal"
          >
            {t("shipyard_subtitle")}
          </motion.p>
        </div>

        {/* Feature Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Images Grid (7 cols) with 3D Tilt Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <InteractiveCard3D className="w-full">
                <div className="relative aspect-[4/5] w-full rounded-none overflow-hidden border border-[#D9E2EC] shadow-md group">
                  <Image
                    src="/media/yachts/sweet-maryi-52m-yacht-refit-athens.png"
                    alt={t("shipyard_badge_1")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/80 via-transparent to-transparent" />
                  <span className={`absolute bottom-4 ${isAr ? "right-4 border-r-2" : "left-4 border-l-2"} text-[10px] tracking-[0.25em] uppercase text-white font-bold bg-[#082B49]/90 px-3 py-1.5 shadow-sm border-[#DFCA9E]`}>
                    {t("shipyard_badge_1")}
                  </span>
                </div>
              </InteractiveCard3D>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="sm:mt-8"
            >
              <InteractiveCard3D className="w-full">
                <div className="relative aspect-[4/5] w-full rounded-none overflow-hidden border border-[#D9E2EC] shadow-md group">
                  <Image
                    src="/media/yachts/sweet-maryi-52m-refit.jpeg"
                    alt={t("shipyard_badge_2")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/80 via-transparent to-transparent" />
                  <span className={`absolute bottom-4 ${isAr ? "right-4 border-r-2" : "left-4 border-l-2"} text-[10px] tracking-[0.25em] uppercase text-white font-bold bg-[#082B49]/90 px-3 py-1.5 shadow-sm border-[#176B9A]`}>
                    {t("shipyard_badge_2")}
                  </span>
                </div>
              </InteractiveCard3D>
            </motion.div>
          </div>

          {/* Details & Capabilities (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-[#102A43]">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl sm:text-4xl text-[#082B49] font-normal leading-snug"
            >
              {t("shipyard_feature_title")}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-[#486581] leading-relaxed font-normal"
            >
              {t("shipyard_feature_desc")}
            </motion.p>

            {/* Staggered Capabilities with Micro Hover */}
            <div className="space-y-3.5 pt-2">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isAr ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: isAr ? -6 : 6, backgroundColor: "#EEF3F8" }}
                    className="flex gap-4 p-4 bg-[#F5F8FA] border border-[#D9E2EC] rounded-none transition-all duration-200 cursor-default"
                  >
                    <Icon className="w-5 h-5 text-[#176B9A] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[#082B49] font-bold">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#486581] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons with Dynamic Lift */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/refit"
                className="inline-flex items-center gap-3 bg-[#082B49] text-white hover:bg-[#176B9A] px-7 py-4 font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                <span>{t("shipyard_cta_explore")}</span>
                <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#DCEFF7] ${isAr ? "rotate-90" : ""}`} />
              </Link>
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(isAr ? "حجز موعد بالحوض الجاف" : "Shipyard Refit Slot")}
                className="inline-flex items-center gap-2 border border-[#082B49] text-[#082B49] hover:bg-[#082B49] hover:text-white px-6 py-4 font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>{t("shipyard_cta_reserve")}</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
