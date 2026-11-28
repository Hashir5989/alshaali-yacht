"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ChairmanSection() {
  return (
    <section id="chairman-vision" className="py-24 sm:py-32 bg-[#082B49] border-b border-[#176B9A]/30 relative overflow-hidden text-[#E8D5B5]">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-[#176B9A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-[500px] h-[500px] bg-[#DFCA9E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Chairman Portrait with Architectural Luxury Framing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden border border-[#DFCA9E]/30 bg-[#06182a] shadow-2xl">
              <Image
                src="/assets/chairman-mohammed-alshaali.webp"
                alt="Mohammed Alshaali - Chairman"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top filter grayscale contrast-110"
              />
              {/* Subtle Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/90 via-transparent to-transparent pointer-events-none" />

              {/* Inset Name Plate at Bottom of Frame */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#082B49]/95 backdrop-blur-md border border-[#DFCA9E]/30 py-3 px-4 flex items-center justify-between">
                <div>
                  <span className="font-sans text-[11px] tracking-[0.25em] uppercase font-bold text-[#E8D5B5] block">
                    Mohammed Alshaali
                  </span>
                  <span className="font-sans text-[8.5px] tracking-[0.3em] uppercase text-[#DFCA9E] block mt-0.5 font-semibold">
                    Chairman
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#DFCA9E] animate-pulse" />
              </div>
            </div>

            {/* Offset Gold Accent Frame */}
            <div className="absolute -bottom-4 -left-4 w-full max-w-md h-full border border-[#DFCA9E]/20 -z-10 pointer-events-none hidden sm:block" />
          </motion.div>

          {/* Right Column: Inspiring Quote & Word of the Chairman */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Header Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] animate-pulse" />
              <span className="font-sans text-[11px] tracking-[0.35em] uppercase font-bold text-[#DFCA9E]">
                Chairman’s Vision · Leadership Message
              </span>
            </div>

            {/* Decorative Quote Icon */}
            <div className="mb-6">
              <Quote className="w-12 h-12 text-[#DFCA9E]/40 rotate-180" />
            </div>

            {/* Chairman's Exact Quote */}
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#E8D5B5] font-light leading-[1.32] tracking-wide mb-8 italic">
              “Gulf Craft was built on a vision to create world-class yachts with passion, innovation, and dedication. Every vessel we craft carries that legacy, shaping the future of yachting with every wave.”
            </blockquote>

            {/* Chairman Credentials */}
            <div className="pt-6 border-t border-[#DFCA9E]/25 flex flex-col gap-1">
              <span className="font-sans text-sm sm:text-base font-bold tracking-[0.3em] uppercase text-[#DFCA9E]">
                MOHAMMED ALSHAALI
              </span>
              <span className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#DCEFF7] font-semibold">
                CHAIRMAN
              </span>
              <p className="text-xs text-[#E8D5B5]/70 mt-3 max-w-lg leading-relaxed font-light">
                Pioneering Arabian maritime manufacturing and steering world-renowned superyacht craftsmanship for over four decades.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
