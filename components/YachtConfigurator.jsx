"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, ShieldCheck, Compass, Sparkles, Layers, Anchor, Check, ArrowRight } from "lucide-react";

const hullOptions = [
  {
    id: "pearl",
    name: "Arabian Pearl",
    colorHex: "#EDE8DF",
    overlayGradient: "linear-gradient(135deg, rgba(237,232,223,0.15) 0%, rgba(255,255,255,0.05) 100%)",
    accent: "#FAF8F5",
    description: "Multi-layered pearlescent finish catching the shimmering desert light of the Arabian Gulf.",
  },
  {
    id: "navy",
    name: "Midnight Gulf Navy",
    colorHex: "#0D2245",
    overlayGradient: "linear-gradient(135deg, rgba(13,34,69,0.55) 0%, rgba(7,20,41,0.65) 100%)",
    accent: "#1E3B68",
    description: "Deep oceanic midnight blue with subtle metallic flakes reflecting deep-water horizons.",
  },
  {
    id: "champagne",
    name: "Dubai Champagne Gold",
    colorHex: "#C6A66B",
    overlayGradient: "linear-gradient(135deg, rgba(197,168,128,0.4) 0%, rgba(143,114,70,0.5) 100%)",
    accent: "#E2C896",
    description: "Warm champagne bronze celebrating the gilded maritime heritage of the Emirates.",
  },
  {
    id: "obsidian",
    name: "Obsidian Titanium",
    colorHex: "#1E252D",
    overlayGradient: "linear-gradient(135deg, rgba(30,37,45,0.6) 0%, rgba(10,14,18,0.7) 100%)",
    accent: "#384350",
    description: "Stealth matte metallic charcoal favored for sovereign escort and low-profile voyaging.",
  },
  {
    id: "aegean",
    name: "Aegean Azure",
    colorHex: "#18457D",
    overlayGradient: "linear-gradient(135deg, rgba(24,69,125,0.5) 0%, rgba(10,32,64,0.65) 100%)",
    accent: "#2D68B3",
    description: "Vibrant sapphire blue recalling Mediterranean summers and the open waters of the Greek isles.",
  },
];

const deckOptions = [
  { id: "teak", name: "Burmese Royal Teak", desc: "First-grade aged natural golden teak with black seam caulking" },
  { id: "silver", name: "Nordic Bleached Oak", desc: "Contemporary weathered silver aesthetic with grey flex caulking" },
  { id: "carbon", name: "Carbon Sport Weave", desc: "Weight-saving aerospace composite with matte non-skid coat" },
];

const interiorMoods = [
  {
    id: "heritage",
    name: "Emirati Heritage",
    woods: "Desert Burl Walnut & Calacatta Gold",
    desc: "Opulent Arabic joinery, hand-carved mashrabiya brass latticework, and backlit onyx walls.",
  },
  {
    id: "monaco",
    name: "Riviera Contemporary",
    woods: "Fluted Italian Sycamore & Travertine",
    desc: "Light-filled coastal architecture, soft cream leather upholstery, and brushed bronze metals.",
  },
  {
    id: "nordic",
    name: "Minimalist Serenity",
    woods: "Matte White Ash & Basalt Stone",
    desc: "Restful Japanese-Scandinavian lines with acoustic felt panels and organic woven linens.",
  },
];

const perspectives = [
  { id: "sea", name: "Profile at Sea", image: "/media/yachts/ciappaira-65-m-superyacht-design.jpg" },
  { id: "stern", name: "Beach Club & Pool", image: "/media/yachts/ciappaira-65-m-superyacht-aft-deck-and-pool.jpg" },
  { id: "deck", name: "Upper Sun Deck", image: "/media/yachts/ea4e54_83a915963c634974b8dc5230db38168a_mv2.jpg" },
];

export default function YachtConfigurator({ onOpenEnquiry }) {
  const [selectedHull, setSelectedHull] = useState(hullOptions[0]);
  const [selectedDeck, setSelectedDeck] = useState(deckOptions[0]);
  const [selectedInterior, setSelectedInterior] = useState(interiorMoods[0]);
  const [selectedView, setSelectedView] = useState(perspectives[0]);

  return (
    <section id="configurator" className="relative py-24 sm:py-32 bg-[#12352D] border-t border-[#C6A66B]/30 overflow-hidden text-white">
      {/* Background radial atmosphere */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C6A66B]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
              <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#F5F0E5] font-bold">
                Atelier · Interactive Specification
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light">
              Tailor Your Flagship AS 130
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#F5F0E5]/80 max-w-md leading-relaxed font-normal">
            Every yacht leaving our Ajman drydocks is an individual masterpiece. Explore bespoke hull finishes, deck materials, and salon interior atmospheres below.
          </p>
        </div>

        {/* Configurator Main Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* Main Interactive Yacht Visualizer Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0A211B] border border-white/15 overflow-hidden rounded-sm group shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedView.id}
                  initial={{ opacity: 0.4, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={selectedView.image}
                    alt="Al Shaali Marine AS 130 Visualizer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />

                  {/* Dynamic Color Grading Tint reflecting chosen livery */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay transition-all duration-700"
                    style={{ background: selectedHull.overlayGradient }}
                  />

                  {/* Gradient shadow edges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A211B] via-transparent to-black/30 pointer-events-none" />

                  {/* Waterline Glow Accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transition-colors duration-500"
                    style={{ backgroundColor: selectedHull.colorHex }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Angle Switcher Pills */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                {perspectives.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setSelectedView(view)}
                    className={`px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase transition-all rounded-sm backdrop-blur-md ${
                      selectedView.id === view.id
                        ? "bg-[#C6A66B] text-[#0A211B] font-semibold shadow-lg"
                        : "bg-[#0A211B]/70 text-[#F0EBE0]/80 border border-white/10 hover:border-white/30"
                    }`}
                  >
                    {view.name}
                  </button>
                ))}
              </div>

              {/* Active Selection Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-[#0A211B]/80 backdrop-blur-md border border-white/10 rounded-sm">
                <div>
                  <span className="text-[9px] tracking-[0.25em] text-[#C6A66B] uppercase block">Selected Livery</span>
                  <span className="font-serif text-lg text-[#F0EBE0]">{selectedHull.name}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#F0EBE0]/70">
                  <span><strong>Deck:</strong> {selectedDeck.name}</span>
                  <span className="hidden sm:inline">·</span>
                  <span className="hidden sm:inline"><strong>Interior:</strong> {selectedInterior.name}</span>
                </div>
              </div>
            </div>

            {/* Quick Specs Readout Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0A211B]/60 border border-white/10 p-4 rounded-sm text-center">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#F0EBE0]/50 block">LOA / Beam</span>
                <span className="font-serif text-lg text-[#F0EBE0]">39.8m · 8.2m</span>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#F0EBE0]/50 block">Cruising Speed</span>
                <span className="font-serif text-lg text-[#C6A66B]">17.5 Knots</span>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#F0EBE0]/50 block">Guest Staterooms</span>
                <span className="font-serif text-lg text-[#F0EBE0]">6 Cabins (12 Guests)</span>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#F0EBE0]/50 block">Shipyard Slot</span>
                <span className="font-serif text-lg text-[#C6A66B]">Late 2026 Ready</span>
              </div>
            </div>
          </div>

          {/* Controls & Configuration Options (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 bg-[#0A211B] border border-white/10 p-6 rounded-sm">
            {/* Control 1: Exterior Hull Color */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[10.5px] tracking-[0.25em] uppercase text-[#C6A66B] font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                  01. Exterior Hull Livery
                </label>
                <span className="text-[11px] text-[#F0EBE0]/60">{selectedHull.name}</span>
              </div>

              <div className="grid grid-cols-5 gap-2.5 mb-3">
                {hullOptions.map((hull) => (
                  <button
                    key={hull.id}
                    onClick={() => setSelectedHull(hull)}
                    title={hull.name}
                    className={`relative aspect-square rounded-full transition-all flex items-center justify-center ${
                      selectedHull.id === hull.id
                        ? "ring-2 ring-[#C6A66B] ring-offset-2 ring-offset-[#0A211B] scale-110"
                        : "opacity-75 hover:opacity-100 hover:scale-105"
                    }`}
                    style={{ backgroundColor: hull.colorHex }}
                  >
                    {selectedHull.id === hull.id && (
                      <Check className={`w-3.5 h-3.5 ${hull.id === "pearl" ? "text-black" : "text-[#C6A66B]"}`} />
                    )}
                  </button>
                ))}
              </div>
              <p className="text-xs text-[#F0EBE0]/60 leading-relaxed italic">
                {selectedHull.description}
              </p>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            {/* Control 2: Decking Finishes */}
            <div>
              <label className="text-[10.5px] tracking-[0.25em] uppercase text-[#C6A66B] font-medium flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                02. Decking & Walkways
              </label>

              <div className="space-y-2">
                {deckOptions.map((deck) => (
                  <button
                    key={deck.id}
                    onClick={() => setSelectedDeck(deck)}
                    className={`w-full text-left p-3 rounded-sm transition-all border ${
                      selectedDeck.id === deck.id
                        ? "bg-[#0D2347] border-[#C6A66B] text-[#F0EBE0]"
                        : "bg-[#0A211B]/60 border-white/5 text-[#F0EBE0]/60 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">{deck.name}</span>
                      {selectedDeck.id === deck.id && <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />}
                    </div>
                    <span className="text-[10.5px] text-[#F0EBE0]/40 block mt-0.5">{deck.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            {/* Control 3: Interior Mood */}
            <div>
              <label className="text-[10.5px] tracking-[0.25em] uppercase text-[#C6A66B] font-medium flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                03. Salon & Suite Ambiance
              </label>

              <div className="space-y-2">
                {interiorMoods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedInterior(mood)}
                    className={`w-full text-left p-3 rounded-sm transition-all border ${
                      selectedInterior.id === mood.id
                        ? "bg-[#0D2347] border-[#C6A66B] text-[#F0EBE0]"
                        : "bg-[#0A211B]/60 border-white/5 text-[#F0EBE0]/60 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">{mood.name}</span>
                      {selectedInterior.id === mood.id && <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />}
                    </div>
                    <span className="text-[10px] text-[#C6A66B]/80 block font-mono mt-0.5">{mood.woods}</span>
                    <span className="text-[10.5px] text-[#F0EBE0]/40 block mt-0.5 leading-snug">{mood.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Commission CTA */}
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry(`AS 130 (${selectedHull.name} / ${selectedDeck.name})`)}
              className="btn-gold w-full mt-2 flex items-center justify-center gap-2 py-3.5 shadow-xl"
            >
              <span>Commission This Specification</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
