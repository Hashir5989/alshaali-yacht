"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import AnimatedTitle from "./AnimatedTitle";
import InteractiveCard3D from "./InteractiveCard3D";
import { useLanguage } from "@/context/LanguageContext";

export default function ChairmanSection() {
  const { isAr, t } = useLanguage();
  const [activeLeaderId, setActiveLeaderId] = useState("abdullah");

  const leaders = [
    {
      id: "abdullah",
      name: t("abdullah_name"),
      role: t("abdullah_role"),
      tabTitle: isAr ? "عبد الله (المؤسس)" : "Abdullah (Founder)",
      tagline: t("abdullah_tagline"),
      quote: t("abdullah_quote"),
      bio: t("abdullah_bio"),
      image: "/assets/abdullah-al-shaali.webp",
      colorMode: "object-cover object-top",
    },
    {
      id: "mohammed",
      name: t("mohammed_name"),
      role: t("mohammed_role"),
      tabTitle: isAr ? "محمد (رئيس المجلس)" : "Mohammed (Chairman)",
      tagline: t("mohammed_tagline"),
      quote: t("mohammed_quote"),
      bio: t("mohammed_bio"),
      image: "/assets/chairman-mohammed-alshaali.webp",
      colorMode: "object-cover object-top filter grayscale contrast-110",
    },
  ];

  const currentLeader = leaders.find((l) => l.id === activeLeaderId) || leaders[0];

  return (
    <section id="chairman-vision" className="py-24 sm:py-32 bg-[#12352D] border-b border-[#C6A66B]/20 relative overflow-hidden text-[#F5F0E5]">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[650px] h-[650px] bg-[#C6A66B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-[550px] h-[550px] bg-[#0A211B]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Executive Leadership Switcher / Persona Tabs with Animated Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#C6A66B]/20">
          <div>
            <AnimatedTitle
              key={isAr ? "ar" : "en"}
              tagline={t("chairman_tagline")}
              title={t("chairman_title")}
              dark={true}
            />
          </div>

          {/* Interactive Persona Selector Buttons with Hover Glow */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0A211B]/90 backdrop-blur-md rounded-full border border-[#C6A66B]/30 shadow-inner self-start sm:self-auto">
            {leaders.map((leader) => {
              const isActive = leader.id === activeLeaderId;
              return (
                <button
                  key={leader.id}
                  onClick={() => setActiveLeaderId(leader.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#C6A66B] text-[#12352D] font-bold shadow-lg shadow-[#C6A66B]/20 scale-[1.02]"
                      : "text-[#F5F0E5]/75 hover:text-[#C6A66B] hover:bg-[#12352D]"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#12352D]" : "bg-transparent border border-[#C6A66B]/50"}`} />
                  {leader.tabTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Leader Card with Framer Motion AnimatePresence & 3D Tilt */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLeader.id}-${isAr ? 'ar' : 'en'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left Column: Portrait with 3D Tilt, Architectural Frame & Nameplate */}
            <div className="lg:col-span-5 relative">
              <InteractiveCard3D className="w-full max-w-md mx-auto">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#C6A66B]/40 bg-[#0A211B] shadow-2xl group">
                  <Image
                    src={currentLeader.image}
                    alt={`${currentLeader.name} - ${currentLeader.role}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className={`${currentLeader.colorMode} transition-transform duration-700 group-hover:scale-106`}
                  />
                  
                  {/* Subtle Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A211B]/95 via-transparent to-transparent pointer-events-none" />

                  {/* Inset Name Plate at Bottom of Frame */}
                  <div className="absolute bottom-5 left-5 right-5 bg-[#0A211B]/95 backdrop-blur-md border border-[#C6A66B]/40 py-3.5 px-4 flex items-center justify-between shadow-lg group-hover:border-[#C6A66B] transition-colors">
                    <div>
                      <span className="font-sans text-[12px] tracking-[0.25em] uppercase font-bold text-[#F5F0E5] block">
                        {currentLeader.name}
                      </span>
                      <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#C6A66B] block mt-0.5 font-semibold">
                        {currentLeader.role}
                      </span>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C6A66B] animate-pulse" />
                  </div>
                </div>
              </InteractiveCard3D>

              {/* Offset Gold Accent Frame */}
              <div className={`absolute -bottom-4 ${isAr ? "-right-4" : "-left-4"} w-full max-w-md h-full border border-[#C6A66B]/25 -z-10 pointer-events-none hidden sm:block`} />
            </div>

            {/* Right Column: Inspiring Dialogue & Credentials */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Header Eyebrow */}
              <div className="inline-flex items-center gap-2.5 mb-6">
                <Sparkles className="w-4 h-4 text-[#C6A66B] animate-pulse" />
                <span className="font-sans text-[11px] tracking-[0.35em] uppercase font-bold text-[#C6A66B]">
                  {currentLeader.tagline}
                </span>
              </div>

              {/* Decorative Quote Icon with Subtle Float Motion */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6"
              >
                <Quote className="w-12 h-12 text-[#C6A66B]/40 rotate-180" />
              </motion.div>

              {/* Leader's Bespoke Quote */}
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F5F0E5] font-light leading-[1.4] tracking-wide mb-8 italic">
                “{currentLeader.quote.replace(/^“|”$/g, "")}”
              </blockquote>

              {/* Credentials & Biography */}
              <div className="pt-6 border-t border-[#C6A66B]/25 flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-[#C6A66B]">
                    {currentLeader.name}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#C6A66B]/15 text-[#C6A66B] border border-[#C6A66B]/30 uppercase tracking-widest font-semibold">
                    {currentLeader.role}
                  </span>
                </div>
                <p className="text-sm text-[#F5F0E5]/80 mt-3 max-w-xl leading-relaxed font-light">
                  {currentLeader.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
