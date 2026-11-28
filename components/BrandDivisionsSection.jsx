"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const brandDivisions = [
  {
    id: "asmaraty",
    name: "Asmaraty",
    division: "Yachts",
    tagline: "Life of Superyacht Luxury",
    description: "Bespoke composite & steel tri-deck superyachts engineered for transoceanic voyages.",
    logoSvg: "/assets/brand-asmaraty.svg",
    href: "/#fleet",
    accentColor: "#DFCA9E",
    badge: "Superyachts",
  },
  {
    id: "glory",
    name: "Glory",
    division: "Power Boats",
    tagline: "Power & Offshore Performance",
    description: "High-velocity offshore cruisers blending twin-step hull dynamics with Arabian luxury.",
    logoSvg: "/assets/brand-glory.svg",
    href: "/new-build",
    accentColor: "#B89C65",
    badge: "Powerboats",
  },
  {
    id: "warrior",
    name: "Warrior",
    division: "Center Console",
    tagline: "Tactical Center Consoles",
    description: "Multi-outboard sportfishing and offshore tactical craft built for unyielding seas.",
    logoSvg: "/assets/brand-warrior.svg",
    href: "/projects",
    accentColor: "#176B9A",
    badge: "Center Consoles",
  },
  {
    id: "sysc",
    name: "SYSC",
    division: "Marine Services",
    tagline: "Shipyard & Yacht Services",
    description: "45,000 sqm drydock, MTU engineering, refit mastery, and lifecycle vessel management.",
    logoSvg: "/assets/brand-sysc.svg",
    logoImage: "/assets/brand-sysc.webp",
    href: "/refit",
    accentColor: "#082B49",
    badge: "Refit & Care",
  },
];

export default function BrandDivisionsSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-white border-b border-[#D9E2EC] overflow-hidden text-[#102A43]">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#176B9A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading & Introductory Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 mb-3.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#176B9A] animate-pulse" />
            <span className="font-sans text-[11px] tracking-[0.32em] uppercase font-bold text-[#176B9A]">
              Al Shaali Marine Group Divisions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#082B49] tracking-tight leading-[1.15] mb-5"
          >
            ENGINEERED FOR DISTINCTION
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-[#486581] leading-relaxed font-normal"
          >
            Our shipyard group encompasses four specialized, world-class brands engineered for every maritime calling — 
            from bespoke transoceanic superyachts and high-performance offshore powerboats, to tactical center consoles 
            and comprehensive refit care.
          </motion.p>
        </div>

        {/* 4 Brand Logos Grid with Interactive Hover Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {brandDivisions.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={brand.href}
                className="group relative flex flex-col items-center justify-between p-8 sm:p-10 bg-white border border-[#D9E2EC] hover:border-[#176B9A] transition-all duration-500 rounded-none shadow-sm hover:shadow-xl hover:-translate-y-2 h-full text-center overflow-hidden"
              >
                {/* Top Subtle Division Pill */}
                <div className="w-full flex items-center justify-between mb-6">
                  <span className="font-sans text-[9px] tracking-[0.25em] uppercase font-bold text-[#176B9A] bg-[#EEF7FB] px-2.5 py-1">
                    {brand.badge}
                  </span>
                  <div className="w-7 h-7 rounded-full border border-[#D9E2EC] group-hover:border-[#082B49] group-hover:bg-[#082B49] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#486581] group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Ambient Soft Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#DCEFF7]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Brand Logo Container with Magnetic Scale Animation */}
                <div className="relative w-full h-32 sm:h-36 flex items-center justify-center my-4 transition-transform duration-500 ease-out group-hover:scale-110">
                  {brand.id === "sysc" && brand.logoImage ? (
                    <div className="relative w-44 h-28 flex items-center justify-center">
                      <Image
                        src={brand.logoImage}
                        alt="SYSC Shipyard & Yacht Services"
                        width={200}
                        height={128}
                        className="object-contain max-h-24 w-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center p-2">
                      <Image
                        src={brand.logoSvg}
                        alt={`${brand.name} ${brand.division}`}
                        fill
                        sizes="(max-width: 640px) 240px, 200px"
                        className="object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>

                {/* Slogan / Descriptor under logo */}
                <div className="mt-6 pt-5 border-t border-[#D9E2EC] w-full flex flex-col items-center">
                  <span className="font-serif text-base sm:text-lg font-light text-[#082B49] group-hover:text-[#176B9A] transition-colors duration-300 leading-snug">
                    {brand.tagline}
                  </span>
                  <p className="text-[11px] text-[#486581] mt-2 leading-relaxed max-w-[220px] font-normal">
                    {brand.description}
                  </p>
                  
                  {/* Interactive Explore Link Indicator */}
                  <span className="font-sans text-[10px] tracking-[0.22em] uppercase font-bold text-[#176B9A] mt-4 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-all">
                    <span>Explore Fleet</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>

                {/* Active Bottom Edge Accent Line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                  style={{ backgroundColor: brand.accentColor }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
