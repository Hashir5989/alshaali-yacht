"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { shipyardMilestones } from "@/data/yachts";
import { ArrowRight, Calendar, Compass, Award } from "lucide-react";

export default function HeritageSection() {
  const [selectedMilestone, setSelectedMilestone] = useState(shipyardMilestones[0]);

  const milestoneImages = {
    "1979": "/media/yachts/an-owner-at-ease-on-the-aft-deck-mediterranean-coast-behind.png",
    "1992": "/media/yachts/stardom-101-m-superyacht-design.jpg",
    "2008": "/media/yachts/neon-78-m-superyacht-design.jpg",
    "2018": "/media/yachts/sweet-maryi-52m-yacht-refit-athens.png",
    "2026": "/media/yachts/ciappaira-65-m-superyacht-design.jpg",
  };

  return (
    <section id="heritage" className="py-24 sm:py-32 bg-[#082B49] border-b border-[#176B9A]/30 relative overflow-hidden text-[#E8D5B5]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E]" />
              <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#DFCA9E] font-bold">
                Shipyard Heritage &nbsp;·&nbsp; 1979 to 2026
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#E8D5B5] font-light">
              Forty-Five Years at Sea.
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#E8D5B5]/85 max-w-sm leading-relaxed font-normal">
            From handcrafted wooden dhow inspirations in 1979 to transatlantic composite superyachts today, explore the defining moments of our journey.
          </p>
        </div>

        {/* Interactive Timeline Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {shipyardMilestones.map((milestone) => (
            <button
              key={milestone.year}
              onClick={() => setSelectedMilestone(milestone)}
              className={`p-4 text-left transition-all rounded-sm border ${
                selectedMilestone.year === milestone.year
                  ? "bg-[#091A36] border-[#C5A880] shadow-xl"
                  : "bg-[#091A36]/40 border-white/5 hover:border-white/20 text-[#F0EBE0]/50"
              }`}
            >
              <span className={`font-serif text-2xl sm:text-3xl block ${selectedMilestone.year === milestone.year ? "text-[#C5A880]" : "text-[#F0EBE0]/50"}`}>
                {milestone.year}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase block mt-1 line-clamp-1 font-medium">
                {milestone.title}
              </span>
            </button>
          ))}
        </div>

        {/* Milestone Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#091A36] border border-white/10 p-6 sm:p-10 rounded-sm">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C5A880] font-mono">
                Historical Milestone · {selectedMilestone.year}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#F0EBE0] font-light">
              {selectedMilestone.title}
            </h3>

            <p className="text-sm sm:text-base text-[#F0EBE0]/80 leading-relaxed font-light">
              {selectedMilestone.description}
            </p>

            <div className="pt-4 flex items-center gap-6 text-xs text-[#F0EBE0]/50">
              <span className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Ajman, United Arab Emirates</span>
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Emirati Shipbuilding Standard</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-white/10">
            <Image
              src={milestoneImages[selectedMilestone.year] || "/media/yachts/ciappaira-65-m-superyacht-design.jpg"}
              alt={selectedMilestone.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091A36]/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
