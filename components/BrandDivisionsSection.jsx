"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const brandDivisions = [
  {
    id: "asmaraty",
    name: "Asmaraty",
    division: "Yachts",
    tagline: "Life of Superyacht Luxury",
    logoSvg: "/assets/brand-asmaraty.svg",
    href: "/#fleet",
  },
  {
    id: "glory",
    name: "Glory",
    division: "Power Boats",
    tagline: "Power & Offshore Performance",
    logoSvg: "/assets/brand-glory.svg",
    href: "/new-build",
  },
  {
    id: "warrior",
    name: "Warrior",
    division: "Center Console",
    tagline: "Tactical Center Consoles",
    logoSvg: "/assets/brand-warrior.svg",
    href: "/projects",
  },
  {
    id: "sysc",
    name: "SYSC",
    division: "Marine Services",
    tagline: "Care For Life · Marine Services",
    logoImage: "/assets/brand-sysc.webp",
    logoSvg: "/assets/brand-sysc.svg",
    href: "/refit",
  },
];

export default function BrandDivisionsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#D9E2EC]/70 relative text-[#102A43]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Heading & Introductory Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#176B9A] animate-pulse" />
            <span className="font-sans text-[10.5px] tracking-[0.34em] uppercase font-bold text-[#176B9A]">
              Al Shaali Marine Group Divisions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#082B49] tracking-tight leading-[1.15] mb-4"
          >
            ENGINEERED FOR DISTINCTION
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-[#486581] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Our fleet encompasses four specialized, world-class brands engineered for every maritime calling — 
            delivering bespoke luxury superyachts, dynamic offshore powerboats, tactical center consoles, and comprehensive shipyard care.
          </motion.p>
        </div>

        {/* Clean, Borderless Brand Logos Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 items-end justify-center pt-2">
          {brandDivisions.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={brand.href}
                className="group flex flex-col items-center justify-between text-center cursor-pointer p-2 sm:p-4 transition-all duration-300"
                aria-label={`Explore ${brand.name}`}
              >
                {/* Logo Display (Medium-Big Size with Smooth Hover Lift & Scale) */}
                <div className="relative w-full h-24 sm:h-28 md:h-32 flex items-center justify-center mb-6">
                  <div className="relative w-full h-full max-w-[210px] sm:max-w-[230px] flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2">
                    {brand.id === "sysc" && brand.logoImage ? (
                      <Image
                        src={brand.logoImage}
                        alt={`${brand.name} ${brand.division}`}
                        width={200}
                        height={128}
                        className="object-contain max-h-24 sm:max-h-28 w-auto transition-transform duration-500 drop-shadow-[0_2px_8px_rgba(8,43,73,0.06)] group-hover:drop-shadow-[0_8px_16px_rgba(23,107,154,0.18)]"
                      />
                    ) : (
                      <Image
                        src={brand.logoSvg}
                        alt={`${brand.name} ${brand.division}`}
                        fill
                        sizes="(max-width: 640px) 180px, 240px"
                        className="object-contain transition-transform duration-500 drop-shadow-[0_2px_8px_rgba(8,43,73,0.06)] group-hover:drop-shadow-[0_8px_16px_rgba(23,107,154,0.18)]"
                      />
                    )}
                  </div>
                </div>

                {/* Slogan / Name below logo (Exact reference style) */}
                <div className="flex flex-col items-center">
                  <span className="font-sans text-xs sm:text-[13px] tracking-wide text-[#627D98] group-hover:text-[#082B49] transition-colors duration-300 font-medium">
                    {brand.tagline}
                  </span>
                  
                  {/* Subtle Expanding Underline on Hover */}
                  <span className="w-0 group-hover:w-8 h-[1.5px] bg-[#176B9A] mt-2 transition-all duration-400 ease-out" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
