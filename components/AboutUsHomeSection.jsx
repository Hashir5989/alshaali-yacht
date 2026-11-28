"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Anchor, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutUsHomeSection() {
  return (
    <section id="about-us" className="py-24 sm:py-32 bg-[#082B49] border-b border-[#176B9A]/30 relative overflow-hidden text-[#E8D5B5]">
      {/* Decorative ambient maritime glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#176B9A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#DFCA9E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Storytelling, Attractive Heading & Lead Paragraphs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline / Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#DFCA9E] animate-pulse" />
              <span className="font-sans text-[11px] tracking-[0.34em] uppercase font-bold text-[#DFCA9E]">
                About Al Shaali Marine · Est. 1979 · Ajman, UAE
              </span>
            </motion.div>

            {/* Main Attractive Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-light text-[#E8D5B5] tracking-tight leading-[1.12] mb-6"
            >
              Crafting Arabian Maritime Mastery for Over Four Decades.
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base text-[#E8D5B5]/90 leading-relaxed font-light mb-5"
            >
              Founded in 1979 in the historic maritime Emirate of Ajman, Al Shaali Marine stands as a pioneer of Arabian composite shipbuilding. What began as an ambitious pursuit of engineering vessels capable of mastering the demanding waters of the Arabian Gulf has expanded into a world-class 45,000 sqm shipyard group.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xs sm:text-sm text-[#DCEFF7]/80 leading-relaxed font-normal mb-8"
            >
              From custom tri-deck superyachts to offshore high-speed cruisers and tactical patrol vessels, every hull embodies rigorous composite laminating standards, Lloyd’s-compliant naval architecture, and Emirati hospitality. With over 1,200 vessels navigating global seas, our legacy is built on unyielding integrity.
            </motion.p>

            {/* 3 Pillar Value Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-[#176B9A]/30"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none bg-[#176B9A]/20 border border-[#DFCA9E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Compass className="w-4 h-4 text-[#DFCA9E]" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] uppercase tracking-wider text-[#DFCA9E] font-bold">In-House Design</h4>
                  <p className="text-[11px] text-[#E8D5B5]/70 mt-0.5">Naval architecture & CFD hull modeling</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none bg-[#176B9A]/20 border border-[#DFCA9E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Anchor className="w-4 h-4 text-[#DFCA9E]" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] uppercase tracking-wider text-[#DFCA9E] font-bold">1,200+ Hulls</h4>
                  <p className="text-[11px] text-[#E8D5B5]/70 mt-0.5">Delivered to owners across 32 nations</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none bg-[#176B9A]/20 border border-[#DFCA9E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#DFCA9E]" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] uppercase tracking-wider text-[#DFCA9E] font-bold">45,000 sqm Yard</h4>
                  <p className="text-[11px] text-[#E8D5B5]/70 mt-0.5">Ajman drydock, refit & climate halls</p>
                </div>
              </div>
            </motion.div>

            {/* Read More Button Link */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[#DFCA9E] text-[#082B49] hover:bg-[#E8D5B5] px-7 py-3.5 font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md group"
              >
                <span>Discover Our Heritage & Shipyard</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Architectural Photography Frame & Heritage Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Majestic Superyacht Lifestyle Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#176B9A]/40 shadow-2xl bg-[#061B2E]">
              <Image
                src="/media/yachts/an-owner-at-ease-on-the-aft-deck-mediterranean-coast-behind.png"
                alt="Al Shaali Marine Superyacht Owner on Aft Deck"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/80 via-transparent to-black/20" />

              {/* Floating Top Heritage Milestone Badge */}
              <div className="absolute top-6 left-6 bg-[#082B49]/90 backdrop-blur-md border border-[#DFCA9E]/40 px-4 py-2.5 shadow-lg">
                <span className="font-serif text-2xl text-[#DFCA9E] block font-light leading-none">1979</span>
                <span className="font-sans text-[8.5px] tracking-[0.28em] uppercase text-[#DCEFF7] block mt-1 font-bold">
                  Pioneering Est. Date
                </span>
              </div>

              {/* Bottom Inscription Box */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#082B49]/90 backdrop-blur-md border border-[#176B9A]/50 p-5 shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-serif text-lg text-[#E8D5B5] font-light leading-tight">
                      Handcrafted in Ajman, UAE
                    </p>
                    <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#DFCA9E] mt-1 font-semibold">
                      Lloyd's Register Compliant Superyachts
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#DFCA9E]/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#DFCA9E] text-xs font-mono font-bold">45Y</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Offset Gold Frame Accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#DFCA9E]/20 -z-10 pointer-events-none hidden sm:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
