"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight, Check, Sparkles, Shield, ArrowUpRight } from "lucide-react";
import { yachts } from "@/data/yachts";
import AnimatedTitle from "./AnimatedTitle";

export default function InteractiveFleetComparator({ onOpenEnquiry }) {
  const [vesselA, setVesselA] = useState(yachts[0]); // AS 130
  const [vesselB, setVesselB] = useState(yachts[1]); // AS 100

  // Metrics to compare
  const metrics = [
    {
      label: "Length Overall",
      valA: yacht => yacht.lengthMeters,
      displayA: yacht => `${yacht.lengthMeters} m (${yacht.lengthFeet} ft)`,
      unit: "m",
      max: 42,
    },
    {
      label: "Top Speed",
      valA: yacht => parseFloat(yacht.maxSpeed),
      displayA: yacht => yacht.maxSpeed,
      unit: "knots",
      max: 50,
    },
    {
      label: "Cruising Range",
      valA: yacht => parseFloat(yacht.range.replace(/[^0-9]/g, "")),
      displayA: yacht => yacht.range,
      unit: "NM",
      max: 2500,
    },
    {
      label: "Gross Tonnage",
      valA: yacht => parseFloat(yacht.grossTonnage.replace(/[^0-9]/g, "")) || 50,
      displayA: yacht => yacht.grossTonnage,
      unit: "GT",
      max: 420,
    },
    {
      label: "Fuel Capacity",
      valA: yacht => parseFloat(yacht.fuelCapacity.replace(/[^0-9]/g, "")),
      displayA: yacht => yacht.fuelCapacity,
      unit: "L",
      max: 35000,
    },
  ];

  return (
    <section id="comparator" className="py-24 sm:py-32 bg-white border-b border-[#E2DDD1] relative overflow-hidden text-[#12352D]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <AnimatedTitle
            tagline="Shipyard Analysis & Decision Atelier"
            title="Interactive Fleet Comparison"
            subtitle="Compare naval engineering dimensions, top velocities, and transatlantic cruising ranges side by side across our fleet."
            dark={false}
          />
        </div>

        {/* Vessel Selector Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Vessel A Selector */}
          <div className="bg-[#F5F8FA] border border-[#E2DDD1] p-5 rounded-none">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A66B] block mb-2 font-mono font-bold">
              VESSEL ATELIER 01
            </span>
            <select
              value={vesselA.id}
              onChange={(e) => setVesselA(yachts.find((y) => y.id === e.target.value) || yachts[0])}
              className="w-full bg-white border border-[#E2DDD1] px-4 py-3 text-base font-serif text-[#12352D] focus:border-[#C6A66B] focus:outline-none transition-colors rounded-none shadow-sm"
            >
              {yachts.map((y) => (
                <option key={y.id} value={y.id}>
                  {y.name} — {y.lengthMeters}m ({y.category})
                </option>
              ))}
            </select>
          </div>

          {/* Vessel B Selector */}
          <div className="bg-[#0A211B] border border-white/15 p-5 rounded-sm">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A66B] block mb-2 font-mono">
              VESSEL ATELIER 02
            </span>
            <select
              value={vesselB.id}
              onChange={(e) => setVesselB(yachts.find((y) => y.id === e.target.value) || yachts[1])}
              className="w-full bg-[#0A211B] border border-white/10 px-4 py-3 text-base font-serif text-[#F0EBE0] focus:border-[#C6A66B] focus:outline-none transition-colors rounded-sm"
            >
              {yachts.map((y) => (
                <option key={y.id} value={y.id}>
                  {y.name} — {y.lengthMeters}m ({y.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Visual Cards Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card A */}
          <div className="bg-[#0A211B] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
            <div className="relative aspect-[16/10] w-full bg-[#0A211B]">
              <Image src={vesselA.heroImage} alt={vesselA.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A211B] via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-mono tracking-wider text-[#C6A66B] uppercase">
                {vesselA.category} · {vesselA.deliveryYear}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-3xl text-[#F0EBE0] font-light">{vesselA.name}</h3>
              <p className="text-xs text-[#F0EBE0]/65 mt-1 font-light leading-relaxed">{vesselA.tagline}</p>
              <p className="text-xs font-mono text-[#C6A66B] mt-3">Engines: {vesselA.engines}</p>
            </div>
          </div>

          {/* Card B */}
          <div className="bg-[#0A211B] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
            <div className="relative aspect-[16/10] w-full bg-[#0A211B]">
              <Image src={vesselB.heroImage} alt={vesselB.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A211B] via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-mono tracking-wider text-[#C6A66B] uppercase">
                {vesselB.category} · {vesselB.deliveryYear}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-3xl text-[#F0EBE0] font-light">{vesselB.name}</h3>
              <p className="text-xs text-[#F0EBE0]/65 mt-1 font-light leading-relaxed">{vesselB.tagline}</p>
              <p className="text-xs font-mono text-[#C6A66B] mt-3">Engines: {vesselB.engines}</p>
            </div>
          </div>
        </div>

        {/* Comparative Metrics Interactive Bar Graph */}
        <div className="bg-[#0A211B] border border-white/10 p-6 sm:p-10 rounded-sm shadow-2xl">
          <h4 className="font-serif text-2xl text-[#F0EBE0] font-light mb-8 flex items-center justify-between">
            <span>Comparative Naval Dimensions</span>
            <span className="text-xs font-mono text-[#C6A66B] tracking-wider uppercase">
              {vesselA.name} vs {vesselB.name}
            </span>
          </h4>

          <div className="space-y-6">
            {metrics.map((m, idx) => {
              const numA = m.valA(vesselA);
              const numB = m.valA(vesselB);
              const pctA = Math.min(100, Math.max(10, (numA / m.max) * 100));
              const pctB = Math.min(100, Math.max(10, (numB / m.max) * 100));

              return (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#C6A66B] font-semibold">{m.displayA(vesselA)}</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#F0EBE0]/50 font-medium">
                      {m.label}
                    </span>
                    <span className="font-mono text-[#F0EBE0] font-semibold">{m.displayA(vesselB)}</span>
                  </div>

                  {/* Dual Bar */}
                  <div className="grid grid-cols-2 gap-2 h-2.5">
                    {/* Left bar (Vessel A) aligned to right */}
                    <div className="bg-[#0A211B] rounded-sm overflow-hidden flex justify-end">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pctA}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full bg-gradient-to-l from-[#C6A66B] to-[#E2C896] rounded-sm"
                      />
                    </div>

                    {/* Right bar (Vessel B) aligned to left */}
                    <div className="bg-[#0A211B] rounded-sm overflow-hidden flex justify-start">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pctB}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-white/70 to-[#8A9AB5] rounded-sm"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Footer */}
          <div className="pt-8 border-t border-white/10 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#F0EBE0]/60 font-light">
              Differential calculations verified under full load naval conditions.
            </div>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry(`Comparison: ${vesselA.name} vs ${vesselB.name}`)}
              className="btn-gold !py-3 !px-6 text-xs w-full sm:w-auto"
            >
              Request Comparative Build Dossier
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
