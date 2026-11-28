"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Anchor, ShieldCheck, ArrowRight } from "lucide-react";
import AnimatedTitle from "./AnimatedTitle";
import InteractiveCard3D from "./InteractiveCard3D";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUsHomeSection() {
  const { isAr, t } = useLanguage();

  const pillars = [
    {
      icon: Compass,
      title: t("about_pillar1_title"),
      desc: t("about_pillar1_desc"),
    },
    {
      icon: Anchor,
      title: t("about_pillar2_title"),
      desc: t("about_pillar2_desc"),
    },
    {
      icon: ShieldCheck,
      title: t("about_pillar3_title"),
      desc: t("about_pillar3_desc"),
    },
  ];

  return (
    <section id="about-us" className="py-24 sm:py-32 bg-[#082B49] border-b border-[#176B9A]/30 relative overflow-hidden text-[#E8D5B5]">
      {/* Decorative ambient maritime glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#176B9A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#DFCA9E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Storytelling, Attractive Heading & Lead Paragraphs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Animated Title Component (Dark Mode) */}
            <div className="mb-6">
              <AnimatedTitle
                key={isAr ? "ar" : "en"}
                tagline={t("about_tagline")}
                title={t("about_title")}
                dark={true}
              />
            </div>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-sm sm:text-base text-[#E8D5B5]/90 leading-relaxed font-light mb-5"
            >
              {t("about_p1")}
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-xs sm:text-sm text-[#DCEFF7]/80 leading-relaxed font-normal mb-8"
            >
              {t("about_p2")}
            </motion.p>

            {/* 3 Pillar Value Highlights with Micro-Interactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-[#176B9A]/30"
            >
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3 p-3 rounded-none bg-[#06182a]/50 border border-[#DFCA9E]/15 hover:border-[#DFCA9E]/50 transition-all cursor-default"
                >
                  <div className="w-8 h-8 rounded-none bg-[#176B9A]/20 border border-[#DFCA9E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <pillar.icon className="w-4 h-4 text-[#DFCA9E]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-[11px] uppercase tracking-wider text-[#DFCA9E] font-bold">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-[#E8D5B5]/70 mt-0.5 leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Button Link */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#DFCA9E] text-[#082B49] hover:bg-[#E8D5B5] px-7 py-3.5 font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md group hover:shadow-xl hover:shadow-[#DFCA9E]/20"
              >
                <span>{t("about_cta")}</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isAr ? "rotate-180 group-hover:-translate-x-1.5" : "group-hover:translate-x-1.5"}`} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Architectural Photography with 3D Tilt & Specular Glare */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <InteractiveCard3D className="w-full">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#DFCA9E]/30 shadow-2xl bg-[#061B2E] group">
                <Image
                  src="/media/yachts/about-crafting-mastery.jpg"
                  alt={isAr ? "الشعالي مارين - صناعة الريادة البحرية لأربعة عقود" : "Al Shaali Marine - Crafting Arabian Maritime Mastery for Over Four Decades"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/90 via-transparent to-black/20" />

                {/* Floating Top Heritage Milestone Badge */}
                <div className={`absolute top-6 ${isAr ? "right-6" : "left-6"} bg-[#082B49]/95 backdrop-blur-md border border-[#DFCA9E]/40 px-4 py-2.5 shadow-lg group-hover:border-[#DFCA9E] transition-colors`}>
                  <span className="font-serif text-2xl text-[#DFCA9E] block font-light leading-none">{isAr ? "١٩٧٩" : "1979"}</span>
                  <span className="font-sans text-[8.5px] tracking-[0.28em] uppercase text-[#DCEFF7] block mt-1 font-bold">
                    {isAr ? "عام التأسيس والريادة" : "Pioneering Est. Date"}
                  </span>
                </div>

                {/* Bottom Inscription Box */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#082B49]/95 backdrop-blur-md border border-[#176B9A]/50 p-5 shadow-xl group-hover:border-[#DFCA9E]/50 transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-serif text-lg text-[#E8D5B5] font-light leading-tight">
                        {isAr ? "صُنعت يدوياً في عجمان، الإمارات" : "Handcrafted in Ajman, UAE"}
                      </p>
                      <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#DFCA9E] mt-1 font-semibold">
                        {isAr ? "يخوت مطابقة لمعايير لويدز ريجستر" : "Lloyd's Register Compliant Superyachts"}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[#DFCA9E]/40 flex items-center justify-center flex-shrink-0 bg-[#06182a]">
                      <span className="text-[#DFCA9E] text-xs font-mono font-bold">{isAr ? "٤٥ عاماً" : "45Y"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </InteractiveCard3D>

            {/* Decorative Offset Gold Frame Accent */}
            <div className={`absolute -bottom-4 ${isAr ? "-left-4" : "-right-4"} w-full h-full border border-[#DFCA9E]/20 -z-10 pointer-events-none hidden sm:block`} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
