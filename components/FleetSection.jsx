"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Gauge, Anchor, Users, Sparkles } from "lucide-react";
import { yachts, categories } from "@/data/yachts";
import InteractiveCard3D from "./InteractiveCard3D";
import AnimatedTitle from "./AnimatedTitle";

export default function FleetSection({ onSelectYacht, onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredYachts =
    activeCategory === "all"
      ? yachts
      : yachts.filter((y) => y.categorySlug === activeCategory);

  return (
    <section id="fleet" className="py-24 sm:py-32 bg-white border-b border-[#D9E2EC] relative text-[#102A43]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Head with Sliced Animated Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <AnimatedTitle
            tagline="Al Shaali Marine Shipyard Portfolio"
            title="The 2026 Fleet Collection"
            subtitle="Handcrafted in our 45,000 sqm Ajman shipyards, every Al Shaali Marine vessel represents four decades of continuous composite engineering excellence."
            dark={false}
          />
        </div>

        {/* Filter Category Tabs - Blue & White Corporate Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#D9E2EC]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase transition-all whitespace-nowrap flex items-center gap-2.5 border font-semibold ${
                activeCategory === cat.id
                  ? "bg-[#082B49] text-white border-[#082B49] shadow-md"
                  : "bg-white text-[#486581] border-[#D9E2EC] hover:border-[#176B9A] hover:text-[#082B49] hover:bg-[#EEF7FB]"
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[9.5px] ${activeCategory === cat.id ? "text-[#DCEFF7]" : "text-[#176B9A]"}`}>
                0{cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Fleet Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredYachts.map((yacht, index) => (
              <motion.div
                key={yacht.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <InteractiveCard3D className="h-full">
                  <article className="group h-full flex flex-col bg-white border border-[#D9E2EC] hover:border-[#176B9A] transition-all duration-500 rounded-none overflow-hidden shadow-sm hover:shadow-xl">
                    {/* Image Frame with hover zoom */}
                    <div
                      onClick={() => onSelectYacht && onSelectYacht(yacht)}
                      className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer bg-[#082B49]"
                    >
                      <Image
                        src={yacht.heroImage}
                        alt={yacht.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/70 via-transparent to-black/20" />

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/95 backdrop-blur-md border border-[#D9E2EC] shadow-sm">
                        <span className="text-[9.5px] tracking-[0.25em] uppercase text-[#082B49] font-bold">
                          {yacht.status}
                        </span>
                      </div>

                      {/* Length Badge */}
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#082B49]/90 backdrop-blur-md border border-white/20 shadow-sm">
                        <span className="text-[10px] tracking-widest text-[#DCEFF7] font-mono font-medium">
                          {yacht.lengthMeters} M &nbsp;·&nbsp; {yacht.lengthFeet} FT
                        </span>
                      </div>
                    </div>

                    {/* Card Content - Deep Navy & Ocean Blue */}
                    <div className="p-7 flex flex-col flex-grow justify-between gap-5 bg-white">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#176B9A] font-bold">
                            {yacht.category}
                          </p>
                          <span className="text-[10px] text-[#829AB1] font-mono tracking-wider">
                            BUILD #{yacht.deliveryYear}
                          </span>
                        </div>
                        <h3
                          onClick={() => onSelectYacht && onSelectYacht(yacht)}
                          className="font-serif text-2xl sm:text-[26px] text-[#082B49] group-hover:text-[#176B9A] transition-colors cursor-pointer font-normal tracking-wide"
                        >
                          {yacht.name}
                        </h3>
                        <p className="text-xs text-[#486581] mt-2.5 line-clamp-2 leading-relaxed font-normal">
                          {yacht.tagline}
                        </p>
                      </div>

                      {/* Spec Quick Pills - Crisp Ice Blue Tint Background */}
                      <div className="grid grid-cols-3 gap-2 py-3.5 border-y border-[#D9E2EC] text-center bg-[#F5F8FA]">
                        <div className="px-1 border-r border-[#D9E2EC]">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#829AB1] block mb-0.5 font-bold">BEAM</span>
                          <span className="font-mono text-[#082B49] text-[11px] font-semibold">{yacht.beam.split("/")[0].trim()}</span>
                        </div>
                        <div className="px-1 border-r border-[#D9E2EC]">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#829AB1] block mb-0.5 font-bold">MAX SPEED</span>
                          <span className="font-mono text-[#176B9A] text-[11px] font-bold">{yacht.maxSpeed.split(" ")[0]} KTS</span>
                        </div>
                        <div className="px-1">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#829AB1] block mb-0.5 font-bold">GUESTS</span>
                          <span className="font-mono text-[#082B49] text-[11px] font-semibold">{yacht.guestCapacity.split(" ")[0]}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => onSelectYacht && onSelectYacht(yacht)}
                          className="text-[11px] tracking-[0.24em] uppercase text-[#082B49] hover:text-[#176B9A] flex items-center gap-2 transition-colors font-bold group/btn"
                        >
                          <span>Explore Specs</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#176B9A] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>

                        <button
                          onClick={() => onOpenEnquiry && onOpenEnquiry(yacht.name)}
                          className="px-4 py-2 text-[10px] tracking-[0.24em] uppercase bg-[#082B49] text-white hover:bg-[#176B9A] transition-all font-semibold"
                        >
                          Enquire
                        </button>
                      </div>
                    </div>
                  </article>
                </InteractiveCard3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
