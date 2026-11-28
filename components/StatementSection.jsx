"use client";

import { motion } from "framer-motion";
import CountingNumber from "./CountingNumber";

export default function StatementSection() {
  return (
    <section id="statement" className="py-24 sm:py-32 bg-[#12352D] border-y border-[#C6A66B]/30 relative overflow-hidden text-[#F5F0E5]">
      {/* Decorative subtle maritime watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[550px] h-[550px] rounded-full border border-[#C6A66B]/10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] tracking-[0.38em] uppercase text-[#C6A66B] mb-6 font-bold"
          >
            Arabian Shipbuilding Heritage &nbsp;·&nbsp; Established 1979 &nbsp;·&nbsp; Ajman, UAE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#F5F0E5] font-light leading-[1.22] mb-14 tracking-[-0.01em]"
          >
            Al Shaali Marine was founded in 1979 in Ajman by visionary Emirati shipwrights. Over four decades of composite mastery, delivering over 1,200 luxury yachts and commercial vessels that sail the seas from Dubai to Monaco. We stand behind every build ourselves.
          </motion.h2>

          {/* 4 Stats Grid with Animated Counter Numbers - Light Golden Accent */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 pt-12 border-t border-[#F5F0E5]/20">
            <div className="px-2">
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#C6A66B] block font-light">
                <CountingNumber value={45} suffix="+" />
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] text-[#F5F0E5]/85 uppercase block mt-2 font-bold">
                Years of Excellence
              </span>
            </div>
            <div className="px-2">
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F0E5] block font-light">
                <CountingNumber value={1200} suffix="+" />
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] text-[#F5F0E5]/85 uppercase block mt-2 font-bold">
                Vessels Delivered
              </span>
            </div>
            <div className="px-2">
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#C6A66B] block font-light">
                <CountingNumber value={45} suffix="k m²" />
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] text-[#F5F0E5]/85 uppercase block mt-2 font-bold">
                Ajman Shipyards
              </span>
            </div>
            <div className="px-2">
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F0E5] block font-light">
                <CountingNumber value={32} suffix=" Nations" />
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] text-[#F5F0E5]/85 uppercase block mt-2 font-bold">
                Global Footprint
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
