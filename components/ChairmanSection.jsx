"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const LEADERS = [
  {
    id: "abdullah",
    name: "ABDULLAH AL SHAALI",
    role: "FOUNDER & CHAIRMAN",
    tagline: "FOUNDER’S VISION · ENDURING HERITAGE",
    quote:
      "When we laid our first keel in 1979, our ambition was to show the world the true depth of Arabian maritime mastery. We do not simply engineer yachts; we sculpt living legends that honor the sea with uncompromising elegance, daring innovation, and enduring strength.",
    bio: "Pioneered modern luxury yacht construction in the Arabian Gulf, establishing Al Shaali Marine as a distinguished international symbol of bespoke naval craftsmanship for more than four decades.",
    image: "/assets/abdullah-al-shaali.webp",
    colorMode: "object-cover object-top",
  },
  {
    id: "mohammed",
    name: "MOHAMMED ALSHAALI",
    role: "CHAIRMAN",
    tagline: "CHAIRMAN’S VISION · LEADERSHIP MESSAGE",
    quote:
      "Gulf Craft was built on a vision to create world-class yachts with passion, innovation, and dedication. Every vessel we craft carries that legacy, shaping the future of yachting with every wave.",
    bio: "Pioneering Arabian maritime manufacturing and steering world-renowned superyacht craftsmanship for over four decades across global waters.",
    image: "/assets/chairman-mohammed-alshaali.webp",
    colorMode: "object-cover object-top filter grayscale contrast-110",
  },
];

export default function ChairmanSection() {
  const [activeLeaderId, setActiveLeaderId] = useState("abdullah");
  const currentLeader = LEADERS.find((l) => l.id === activeLeaderId) || LEADERS[0];

  return (
    <section id="chairman-vision" className="py-24 sm:py-32 bg-[#082B49] border-b border-[#176B9A]/30 relative overflow-hidden text-[#E8D5B5]">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[650px] h-[650px] bg-[#176B9A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-[550px] h-[550px] bg-[#DFCA9E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Executive Leadership Switcher / Persona Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12 mb-12 border-b border-[#DFCA9E]/20">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] animate-pulse" />
              <span className="font-sans text-[11px] tracking-[0.35em] uppercase font-bold text-[#DFCA9E]">
                Visionary Leadership & Heritage
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#E8D5B5] tracking-wide">
              Words of the Founders & Chairmen
            </h2>
          </div>

          {/* Interactive Persona Selector Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#06182a]/90 backdrop-blur-md rounded-full border border-[#DFCA9E]/30 shadow-inner">
            {LEADERS.map((leader) => {
              const isActive = leader.id === activeLeaderId;
              return (
                <button
                  key={leader.id}
                  onClick={() => setActiveLeaderId(leader.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#DFCA9E] text-[#082B49] font-bold shadow-lg shadow-[#DFCA9E]/20"
                      : "text-[#E8D5B5]/70 hover:text-[#DFCA9E] hover:bg-[#176B9A]/20"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#082B49]" : "bg-transparent border border-[#DFCA9E]/50"}`} />
                  {leader.name.split(" ")[0]} ({leader.role.includes("FOUNDER") ? "Founder" : "Chairman"})
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Leader Card with Framer Motion AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLeader.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left Column: Portrait with Architectural Frame & Nameplate */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden border border-[#DFCA9E]/40 bg-[#06182a] shadow-2xl group">
                <Image
                  src={currentLeader.image}
                  alt={`${currentLeader.name} - ${currentLeader.role}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className={`${currentLeader.colorMode} transition-transform duration-700 group-hover:scale-105`}
                />
                
                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/95 via-transparent to-transparent pointer-events-none" />

                {/* Inset Name Plate at Bottom of Frame */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#082B49]/95 backdrop-blur-md border border-[#DFCA9E]/40 py-3.5 px-4 flex items-center justify-between shadow-lg">
                  <div>
                    <span className="font-sans text-[12px] tracking-[0.25em] uppercase font-bold text-[#E8D5B5] block">
                      {currentLeader.name}
                    </span>
                    <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#DFCA9E] block mt-0.5 font-semibold">
                      {currentLeader.role}
                    </span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DFCA9E] animate-pulse" />
                </div>
              </div>

              {/* Offset Gold Accent Frame */}
              <div className="absolute -bottom-4 -left-4 w-full max-w-md h-full border border-[#DFCA9E]/25 -z-10 pointer-events-none hidden sm:block" />
            </div>

            {/* Right Column: Inspiring Dialogue & Credentials */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Header Eyebrow */}
              <div className="inline-flex items-center gap-2.5 mb-6">
                <Sparkles className="w-4 h-4 text-[#DFCA9E]" />
                <span className="font-sans text-[11px] tracking-[0.35em] uppercase font-bold text-[#DFCA9E]">
                  {currentLeader.tagline}
                </span>
              </div>

              {/* Decorative Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-[#DFCA9E]/40 rotate-180" />
              </div>

              {/* Leader's Bespoke Quote */}
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#E8D5B5] font-light leading-[1.38] tracking-wide mb-8 italic">
                “{currentLeader.quote.replace(/^“|”$/g, "")}”
              </blockquote>

              {/* Credentials & Biography */}
              <div className="pt-6 border-t border-[#DFCA9E]/25 flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-sm sm:text-base font-bold tracking-[0.3em] uppercase text-[#DFCA9E]">
                    {currentLeader.name}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#DFCA9E]/15 text-[#DFCA9E] border border-[#DFCA9E]/30 uppercase tracking-widest font-semibold">
                    {currentLeader.role}
                  </span>
                </div>
                <p className="text-sm text-[#E8D5B5]/80 mt-3 max-w-xl leading-relaxed font-light">
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
