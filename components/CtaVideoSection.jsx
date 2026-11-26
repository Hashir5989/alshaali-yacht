"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, PhoneCall, Shield } from "lucide-react";
import { companyInfo } from "@/data/yachts";

export default function CtaVideoSection({ onOpenEnquiry }) {
  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#082B49] overflow-hidden flex items-center justify-center text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/media/yachts/calm-sea.png"
          className="w-full h-full object-cover"
        >
          <source src="/media/hero-yacht.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#082B49]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082B49] via-transparent to-[#082B49]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-[#DFCA9E] mb-4 font-bold">
            Private Commission & Drydock Inquiries
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#E8D5B5] font-light mb-6">
            Come and talk to us in Ajman or Dubai.
          </h2>

          <p className="text-sm sm:text-base text-[#E8D5B5]/90 leading-relaxed mb-10 max-w-xl mx-auto font-light">
            Our master naval architects and shipyard directors are available for private consultations at our Ajman headquarters or at Dubai Harbour Marina.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="bg-[#E8D5B5] text-[#082B49] hover:bg-[#DFCA9E] transition-all font-semibold uppercase tracking-wider py-4 px-8 text-xs shadow-2xl rounded-none w-full sm:w-auto"
            >
              Request Private Consultation
            </button>
            <a
              href="tel:+97167422222"
              className="btn-white-outline w-full sm:w-auto !py-3.5 !px-8 text-xs flex items-center justify-center gap-2 rounded-none !text-[#E8D5B5] !border-[#E8D5B5]/50 hover:!bg-[#E8D5B5] hover:!text-[#082B49]"
            >
              <PhoneCall className="w-4 h-4 text-[#DFCA9E]" />
              <span>+971 6 742 2222</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#F0EBE0]/40">
            <Shield className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Discretion assured · Confidential client registration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
