"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Compass, Maximize2, Shield, Check, Layers } from "lucide-react";
import { yachts } from "@/data/yachts";
import AnimatedTitle from "./AnimatedTitle";

export default function SuperyachtSpotlight({ onOpenEnquiry, onSelectYacht }) {
  const as130 = yachts.find((y) => y.id === "as-130") || yachts[0];
  const as100 = yachts.find((y) => y.id === "as-100") || yachts[1];

  const [activeTab, setActiveTab] = useState("as-130");
  const activeYacht = activeTab === "as-130" ? as130 : as100;

  return (
    <section id="superyachts" className="py-24 sm:py-32 bg-white border-b border-[#D9E2EC] relative overflow-hidden text-[#102A43]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <AnimatedTitle
            tagline="Shipyard Flagships &nbsp;·&nbsp; Superyacht Division"
            title="Crafted Without Equal."
            subtitle="The pinnacle of Emirati composite naval architecture, hand-finished in Ajman for world oceans."
          />

          {/* Model Switcher Tabs - Blue & White */}
          <div className="flex items-center gap-2 p-1.5 bg-[#F5F8FA] border border-[#D9E2EC] rounded-none self-start md:self-end shadow-sm">
            <button
              onClick={() => setActiveTab("as-130")}
              className={`px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-all font-semibold ${
                activeTab === "as-130"
                  ? "bg-[#082B49] text-white shadow-md"
                  : "text-[#486581] hover:text-[#082B49]"
              }`}
            >
              AS 130 Tri-Deck (40m)
            </button>
            <button
              onClick={() => setActiveTab("as-100")}
              className={`px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-all font-semibold ${
                activeTab === "as-100"
                  ? "bg-[#082B49] text-white shadow-md"
                  : "text-[#486581] hover:text-[#082B49]"
              }`}
            >
              AS 100 Pilothouse (30m)
            </button>
          </div>
        </div>

        {/* Feature Hero Card with smooth AnimatePresence transition */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#082B49] border border-[#D9E2EC] overflow-hidden rounded-none group mb-12 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYacht.id}
              initial={{ opacity: 0.3, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
            >
              <Image
                src={activeYacht.heroImage}
                alt={activeYacht.name}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071429] via-[#071429]/25 to-black/30 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Bottom Overlay Label */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
            <div>
              <p className="font-sans text-[10.5px] tracking-[0.3em] uppercase text-[#DCEFF7] mb-1 font-bold">
                {activeYacht.lengthMeters}m ({activeYacht.lengthFeet}ft) &nbsp;·&nbsp; {activeYacht.category} &nbsp;·&nbsp; New Build Slot
              </p>
              <h3 className="font-serif text-3xl sm:text-5xl text-white font-light">
                {activeYacht.name}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onSelectYacht && onSelectYacht(activeYacht)}
                className="btn-white-outline !py-2.5 !px-5 self-start sm:self-auto flex items-center gap-2 rounded-none"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#DCEFF7]" />
                <span>Architectural Dossier</span>
              </button>
            </div>
          </div>
        </div>

        {/* Story Grid & Technical Specs - High Contrast Blue & White */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-[#102A43]">
          {/* Story Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h4 className="font-serif text-2xl sm:text-3xl text-[#082B49] font-normal leading-snug">
              {activeYacht.tagline}
            </h4>

            <p className="text-base sm:text-lg text-[#102A43] leading-relaxed font-normal">
              {activeYacht.overview}
            </p>
            <p className="text-sm text-[#486581] leading-relaxed font-normal">
              {activeYacht.description}
            </p>

            {/* Key Appointments Checklist */}
            <div className="pt-4 border-t border-[#D9E2EC]">
              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#176B9A] block mb-3 font-bold">
                Distinguishing Innovations
              </span>
              <ul className="space-y-2.5">
                {activeYacht.features?.slice(0, 4).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#102A43]">
                    <Check className="w-4 h-4 text-[#176B9A] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(activeYacht.name)}
                className="btn-ocean"
              >
                Enquire about {activeYacht.name}
              </button>
              <Link href={`/projects/${activeYacht.slug}`} className="btn-ocean-outline flex items-center gap-2">
                <span>View Full Model Dossier</span>
                <ArrowUpRight className="w-4 h-4 text-[#176B9A]" />
              </Link>
            </div>
          </div>

          {/* Technical Specs DL List (5 cols) - Crisp Ice Blue Surface */}
          <div className="lg:col-span-5 bg-[#F5F8FA] border border-[#D9E2EC] p-6 sm:p-8 rounded-none shadow-md">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#176B9A] mb-6 font-bold">
              Blueprint Specifications
            </p>

            <dl className="divide-y divide-[#D9E2EC] text-xs sm:text-sm">
              <div className="py-3 flex justify-between">
                <dt className="text-[#829AB1] uppercase tracking-widest text-[10.5px] font-bold">Length Overall</dt>
                <dd className="font-mono text-[#082B49] font-semibold">{activeYacht.lengthMeters} m ({activeYacht.lengthFeet} ft)</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#829AB1] uppercase tracking-widest text-[10.5px] font-bold">Beam</dt>
                <dd className="font-mono text-[#082B49] font-semibold">{activeYacht.beam}</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#829AB1] uppercase tracking-widest text-[10.5px] font-bold">Draft</dt>
                <dd className="font-mono text-[#082B49] font-semibold">{activeYacht.draft}</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#829AB1] uppercase tracking-widest text-[10.5px] font-bold">Guests / Cabins</dt>
                <dd className="font-mono text-[#082B49] font-semibold">{activeYacht.guestCapacity}</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#829AB1] uppercase tracking-widest text-[10.5px] font-bold">Gross Tonnage</dt>
                <dd className="font-mono text-[#082B49] font-semibold">{activeYacht.grossTonnage}</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#829AB1] uppercase tracking-widest text-[10.5px] font-bold">Cruising Range</dt>
                <dd className="font-mono text-[#176B9A] font-bold">{activeYacht.range}</dd>
              </div>
              <div className="py-3 flex justify-between">
                <dt className="text-[#829AB1] uppercase tracking-widest text-[10.5px] font-bold">Top Velocity</dt>
                <dd className="font-mono text-[#176B9A] font-bold">{activeYacht.maxSpeed}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
