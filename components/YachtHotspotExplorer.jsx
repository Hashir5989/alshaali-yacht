"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Sparkles, X, ArrowUpRight, ShieldCheck, ChevronRight, Layers } from "lucide-react";
import AnimatedTitle from "./AnimatedTitle";

const hotspots = [
  {
    id: "sundeck",
    name: "Panoramic Sky Lounge & Jacuzzi",
    deck: "Sun Deck (Upper Level)",
    x: 32, // percentage from left
    y: 28, // percentage from top
    specs: "65 sqm Deck · Counter-Current Jets · Teak Wet Bar",
    desc: "An expansive sun deck featuring an infinity hydromassage jacuzzi, teak cocktail bar, and shaded lounge elevated high above the horizon.",
    image: "/media/yachts/ea4e54_83a915963c634974b8dc5230db38168a_mv2.jpg",
  },
  {
    id: "bridge",
    name: "Integrated Glass Bridge Avionics",
    deck: "Wheelhouse (Raised Pilothouse)",
    x: 48,
    y: 35,
    specs: "Furuno 3D Radar · FLIR Thermal · Dynamic Positioning",
    desc: "State-of-the-art integrated navigation station with full electronic redundancy, dual gyro-stabilizer controls, and captain's observation settee.",
    image: "/media/yachts/neon-78-m-superyacht-front-view.jpg",
  },
  {
    id: "master",
    name: "Full-Beam Owner's Penthouse Suite",
    deck: "Main Deck (Forward)",
    x: 62,
    y: 45,
    specs: "8.2m Full Beam · Dual Balconies · Calacatta Marble",
    desc: "A private residential sanctuary with 180° forward panoramic glazing, dual hydraulic fold-out sea balconies, and master bath hand-finished in Italian marble.",
    image: "/media/yachts/august-87-m-superyacht-owners-suite.jpg",
  },
  {
    id: "beachclub",
    name: "Stern Beach Club & Sea Terrace",
    deck: "Lower Deck (Aft Waterline)",
    x: 16,
    y: 62,
    specs: "Hydraulic Platform · Tender Garage · Rain Shower",
    desc: "Transformable transom door opening into a sea-level beach club with direct ocean bathing platform, seabob lockers, and wellness spa.",
    image: "/media/yachts/ciappaira-65-m-superyacht-aft-deck-and-pool.jpg",
  },
  {
    id: "engine",
    name: "Twin CAT C32 Acert Propulsion Room",
    deck: "Central Machinery Space",
    x: 35,
    y: 72,
    specs: "3,850 Total HP · 23.0 Knots · Lloyd's Soundproofing",
    desc: "Acoustically isolated engine room engineered for whisper-quiet nocturnal cruising, paired with dual 80 kW sound-shielded Kohler marine generators.",
    image: "/media/yachts/sweet-maryi-52m-refit.jpeg",
  },
  {
    id: "foredeck",
    name: "Observation Foredeck & Helipad",
    deck: "Foredeck (Bow)",
    x: 82,
    y: 54,
    specs: "Touch-and-Go Ready · Sunken Settee · Hidden Gear",
    desc: "Flush teak bow deck engineered for touch-and-go helicopter arrivals, private sunset dining, and secluded open-sea observation.",
    image: "/media/yachts/stardom-bow.jpg",
  },
];

const angles = [
  { id: "profile", name: "Starboard Profile", image: "/media/yachts/ciappaira-65-m-superyacht-design.jpg" },
  { id: "stern", name: "Beach Club Aft", image: "/media/yachts/ciappaira-65-m-superyacht-aft-deck-and-pool.jpg" },
  { id: "aerial", name: "Upper Sun Deck", image: "/media/yachts/ea4e54_83a915963c634974b8dc5230db38168a_mv2.jpg" },
];

export default function YachtHotspotExplorer({ onOpenEnquiry }) {
  const [activeHotspot, setActiveHotspot] = useState(hotspots[0]);
  const [activeAngle, setActiveAngle] = useState(angles[0]);

  return (
    <section id="hotspots" className="py-24 sm:py-32 bg-[#082B49] border-b border-[#176B9A]/30 relative overflow-hidden text-white">
      {/* Background Ambience */}
      <div className="absolute -top-40 left-1/3 w-[700px] h-[700px] bg-[#176B9A]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <AnimatedTitle
            tagline="Interactive Vessel Architecture"
            title="Explore the AS 130 Tri-Deck"
            subtitle="Click or tap any interactive telemetry beacon across the hull to inspect architectural decks, propulsion systems, and master appointments."
            dark={true}
          />

          {/* Perspective Angle Switcher */}
          <div className="flex items-center gap-2 p-1.5 bg-white/10 border border-white/20 rounded-none self-start md:self-end shadow-xl">
            {angles.map((ang) => (
              <button
                key={ang.id}
                onClick={() => setActiveAngle(ang)}
                className={`px-4 py-2 text-[10.5px] tracking-[0.2em] uppercase transition-all font-semibold rounded-none ${
                  activeAngle.id === ang.id
                    ? "bg-[#176B9A] text-white shadow-md"
                    : "text-[#DCEFF7] hover:text-white"
                }`}
              >
                {ang.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Vessel Hotspot Viewport (8 cols) */}
          <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#091A36] border border-white/15 rounded-sm overflow-hidden shadow-2xl group">
            {/* Base Yacht Visual */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAngle.id}
                initial={{ opacity: 0.4, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.4 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeAngle.image}
                  alt="Al Shaali Marine AS 130 Interactive Explorer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 68vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071429]/90 via-transparent to-black/20 pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Interactive Hotspot Beacons (Visible only on Starboard Profile view) */}
            {activeAngle.id === "profile" && (
              <div className="absolute inset-0 z-20 pointer-events-auto">
                {hotspots.map((h) => {
                  const isSelected = activeHotspot.id === h.id;
                  return (
                    <div
                      key={h.id}
                      style={{ left: `${h.x}%`, top: `${h.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                      <button
                        onClick={() => setActiveHotspot(h)}
                        title={h.name}
                        className="relative group/btn p-3 focus:outline-none"
                      >
                        {/* Outer Pulsing Radar Ring */}
                        <span
                          className={`absolute inset-0 rounded-full transition-transform duration-500 ${
                            isSelected
                              ? "bg-[#C5A880]/30 animate-ping scale-150"
                              : "bg-[#C5A880]/15 group-hover/btn:scale-125"
                          }`}
                        />

                        {/* Mid Halo */}
                        <span
                          className={`relative flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-300 ${
                            isSelected
                              ? "border-[#E2C896] bg-[#C5A880] text-[#071429] shadow-[0_0_15px_#C5A880]"
                              : "border-[#C5A880]/70 bg-[#071429]/90 text-[#C5A880] group-hover/btn:border-[#C5A880]"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        </span>

                        {/* Floating Hotspot Micro-Label */}
                        <span
                          className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-7 whitespace-nowrap px-2 py-0.5 rounded-sm bg-[#071429]/90 border border-white/10 text-[9px] font-mono tracking-wider transition-all duration-200 pointer-events-none ${
                            isSelected
                              ? "text-[#C5A880] border-[#C5A880]/40 opacity-100"
                              : "text-[#F0EBE0]/60 opacity-0 group-hover/btn:opacity-100"
                          }`}
                        >
                          {h.deck}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Bottom HUD Bar on image */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 p-3 bg-[#071429]/85 backdrop-blur-md border border-white/10 rounded-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
                <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-mono">
                  ACTIVE DECK: {activeHotspot.deck}
                </span>
              </div>
              <span className="text-[10px] text-[#F0EBE0]/60 font-mono">
                FLAGSHIP AS 130 · 39.8M TRI-DECK COMPOSITE
              </span>
            </div>
          </div>

          {/* Active Hotspot Architectural Spec Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#091A36] border border-white/10 p-6 rounded-sm shadow-2xl flex flex-col justify-between min-h-[440px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHotspot.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                {/* Hotspot Image Thumbnail */}
                <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-white/10 bg-[#071429]">
                  <Image
                    src={activeHotspot.image}
                    alt={activeHotspot.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091A36] via-transparent to-transparent opacity-60" />
                </div>

                <div>
                  <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#C5A880] block mb-1 font-medium">
                    {activeHotspot.deck}
                  </span>
                  <h3 className="font-serif text-2xl text-[#F0EBE0] font-light leading-snug">
                    {activeHotspot.name}
                  </h3>
                </div>

                <div className="p-3 bg-[#071429]/80 border border-white/5 rounded-sm">
                  <span className="text-[9.5px] uppercase tracking-widest text-[#C5A880] block mb-0.5 font-mono">
                    Key Telemetry & Capacity
                  </span>
                  <span className="text-xs text-[#F0EBE0] font-mono font-medium block">
                    {activeHotspot.specs}
                  </span>
                </div>

                <p className="text-xs text-[#F0EBE0]/75 leading-relaxed font-light">
                  {activeHotspot.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Action CTA */}
            <div className="pt-6 border-t border-white/10 mt-6 space-y-2">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(`AS 130 - ${activeHotspot.name}`)}
                className="btn-gold w-full text-center py-3 text-[11px]"
              >
                Commission This Custom Layout
              </button>
              <div className="flex items-center justify-between text-[10px] text-[#F0EBE0]/40 font-mono pt-1">
                <span>TASNEEF & LLOYD&apos;S CLASSIFIED</span>
                <span>AJMAN YARD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
