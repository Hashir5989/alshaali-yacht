"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import InteractiveCard3D from "./InteractiveCard3D";
import { useLanguage } from "@/context/LanguageContext";

export default function BrandDivisionsSection() {
  const { isAr, t } = useLanguage();

  const brandDivisions = [
    {
      id: "asmaraty",
      name: t("asmaraty_title"),
      division: isAr ? "يخوت سوبر يخت" : "Yachts",
      tagline: t("asmaraty_tagline"),
      logoSvg: "/assets/brand-asmaraty.svg",
      href: "/#fleet",
      badge: t("asmaraty_badge"),
    },
    {
      id: "glory",
      name: t("glory_title"),
      division: isAr ? "قوارب سريعة" : "Power Boats",
      tagline: t("glory_tagline"),
      logoSvg: "/assets/brand-glory.svg",
      href: "/new-build",
      badge: t("glory_badge"),
    },
    {
      id: "warrior",
      name: t("warrior_title"),
      division: isAr ? "كونسول أوسط" : "Center Console",
      tagline: t("warrior_tagline"),
      logoSvg: "/assets/brand-warrior.svg",
      href: "/projects",
      badge: t("warrior_badge"),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5F0E5] border-b border-[#E2DDD1] relative text-[#12352D] overflow-hidden">
      {/* Ambient background light grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Heading with Animated Word Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <AnimatedTitle
            key={isAr ? "ar" : "en"}
            tagline={t("brands_tagline")}
            title={t("brands_title")}
            subtitle={t("brands_subtitle")}
            align="center"
            dark={false}
          />
        </div>

        {/* 3-Brand Cards Row with 3D Tilt, Glare & Dynamic Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto items-stretch justify-center pt-2">
          {brandDivisions.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <InteractiveCard3D className="h-full rounded-none">
                <Link
                  href={brand.href}
                  className="group flex flex-col items-center justify-between text-center cursor-pointer p-8 sm:p-10 h-full bg-white border border-[#E2DDD1] hover:border-[#C6A66B] transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#C6A66B]/15 relative overflow-hidden"
                  aria-label={isAr ? `استكشف ${brand.name}` : `Explore ${brand.name}`}
                >
                  {/* Subtle top indicator bar on hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C6A66B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Division Badge */}
                  <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#5D665F] group-hover:text-[#C6A66B] transition-colors font-mono mb-4 block">
                    {brand.badge}
                  </span>

                  {/* Logo Display with Smooth Scale & Drop Shadow */}
                  <div className="relative w-full h-28 sm:h-32 md:h-36 flex items-center justify-center my-4">
                    <div className="relative w-full h-full max-w-[220px] sm:max-w-[240px] flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2">
                      <Image
                        src={brand.logoSvg}
                        alt={`${brand.name} ${brand.division}`}
                        fill
                        sizes="(max-width: 640px) 200px, 240px"
                        className="object-contain transition-transform duration-500 drop-shadow-[0_2px_8px_rgba(18,53,45,0.06)] group-hover:drop-shadow-[0_12px_24px_rgba(198,166,107,0.3)]"
                      />
                    </div>
                  </div>

                  {/* Slogan / Name below logo */}
                  <div className="flex flex-col items-center mt-4">
                    <span className="font-sans text-xs sm:text-[13.5px] tracking-wide text-[#5D665F] group-hover:text-[#12352D] transition-colors duration-300 font-medium">
                      {brand.tagline}
                    </span>
                    
                    {/* Animated Underline Expansion */}
                    <span className="w-6 group-hover:w-16 h-[2px] bg-[#C6A66B]/30 group-hover:bg-[#C6A66B] mt-3 transition-all duration-500 ease-out" />
                  </div>
                </Link>
              </InteractiveCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
