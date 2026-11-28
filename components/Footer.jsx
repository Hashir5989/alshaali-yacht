"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/yachts";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import UnderConstructionModal from "./UnderConstructionModal";

export default function Footer({ onOpenEnquiry }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [underConstructionTarget, setUnderConstructionTarget] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  const triggerUnderConstruction = (name) => {
    setUnderConstructionTarget(name);
  };

  return (
    <>
      <footer className="relative bg-[#082B49] border-t border-[#176B9A]/30 text-white pt-20 pb-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          {/* Newsletter Section */}
          <div className="border-b border-white/15 pb-16 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <p className="font-sans text-[11px] tracking-[0.34em] uppercase text-[#DFCA9E] mb-2 font-semibold">
                  The Logbook &nbsp;·&nbsp; Corporate Communications
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#E8D5B5] font-light mb-3">
                  Dispatches from the Ajman Shipyard.
                </h3>
                <p className="text-[#E8D5B5]/85 text-xs sm:text-sm max-w-md leading-relaxed font-light">
                  Occasional announcements on new flagship superyacht builds, international boat show debuts, and marine engineering milestones.
                </p>
              </div>

              <div className="lg:col-span-6">
                {subscribed ? (
                  <div className="flex items-center gap-3 p-4 bg-white/10 border border-[#DFCA9E]/40 rounded-none text-sm text-[#DFCA9E]">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>You are subscribed to The Logbook. We welcome you aboard.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-grow bg-white/10 border border-white/20 px-5 py-3.5 text-sm text-[#E8D5B5] placeholder:text-[#E8D5B5]/40 focus:border-[#DFCA9E] focus:outline-none transition-colors rounded-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#DFCA9E] text-[#082B49] hover:bg-[#E8D5B5] flex-shrink-0 flex items-center justify-center gap-2 py-3.5 px-6 rounded-none font-semibold uppercase tracking-wider text-xs transition-colors"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
                <p className="text-[10px] text-[#DFCA9E]/70 mt-3 flex items-center gap-2 font-light">
                  <Shield className="w-3 h-3 text-[#DFCA9E]" />
                  <span>Strictly private. You can unsubscribe at any time.</span>
                </p>
              </div>
            </div>
          </div>

          {/* 4-Column Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
            
            {/* Brand Col (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link href="/" className="inline-block" aria-label="Al Shaali Marine Home">
                <div className="relative h-11 w-52 sm:w-56">
                  <Image
                    src="/assets/al-shaali-logo-gold.png"
                    alt="Al Shaali Marine"
                    fill
                    sizes="220px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p className="text-sm text-[#E8D5B5]/85 leading-relaxed max-w-sm font-light">
                Pioneers of Arabian marine mastery since 1979. Over four decades of continuous shipbuilding excellence in Ajman, United Arab Emirates.
              </p>
              <p className="text-xs text-[#DFCA9E] font-mono tracking-widest mt-2 font-semibold">
                ESTABLISHED 1979 · AJMAN, UAE
              </p>
            </div>

            {/* Navigation Col 1: Main Menu (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-3 items-start">
              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#DFCA9E] mb-2 font-bold">
                Navigation
              </p>
              <Link href="/" className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors">
                Home
              </Link>
              <button
                type="button"
                onClick={() => triggerUnderConstruction("About Us")}
                className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors text-left"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction("Shipyard & Drydocks")}
                className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors text-left"
              >
                Shipyard & Drydocks
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction("Careers & Recruitment")}
                className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors flex items-center gap-2 text-left"
              >
                <span>Career</span>
                <span className="text-[9px] uppercase px-1.5 py-0.5 bg-[#DFCA9E]/20 text-[#DFCA9E] font-mono">Hiring</span>
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction("The Logbook & Dispatches")}
                className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors text-left"
              >
                The Logbook & Dispatches
              </button>
            </div>

            {/* Navigation Col 2: Brand Divisions (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-3 items-start">
              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#DFCA9E] mb-2 font-bold">
                Brand Divisions
              </p>
              <button
                type="button"
                onClick={() => triggerUnderConstruction("Asmaraty Superyachts")}
                className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors text-left"
              >
                Asmaraty Yachts (Superyachts)
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction("Glory Power Boats")}
                className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors text-left"
              >
                Glory Power Boats
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction("Warrior Center Consoles")}
                className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors text-left"
              >
                Warrior Center Consoles
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction("Founder & Chairman Vision")}
                className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors text-left"
              >
                Founder & Chairman Vision
              </button>
              <button
                type="button"
                onClick={() => triggerUnderConstruction("Owner Testimonials")}
                className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors text-left"
              >
                Owner Testimonials
              </button>
            </div>

            {/* Navigation Col 3: Contact & Legal (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-3 items-start">
              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#DFCA9E] mb-2 font-bold">
                Contact & Atelier
              </p>
              <a href="mailto:sales@alshaalimarine.com" className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors">
                sales@alshaalimarine.com
              </a>
              <a href="tel:+97167422222" className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors">
                +971 6 742 2222
              </a>
              <button
                type="button"
                onClick={() => triggerUnderConstruction("Atelier Consultation Desk")}
                className="text-sm text-[#E8D5B5]/75 hover:text-[#DFCA9E] transition-colors text-left"
              >
                Write to us
              </button>
              <div className="pt-2 border-t border-white/10 flex flex-col gap-2 w-full">
                <button
                  type="button"
                  onClick={() => triggerUnderConstruction("Impressum")}
                  className="text-xs text-[#E8D5B5]/60 hover:text-[#DFCA9E] transition-colors text-left"
                >
                  Impressum
                </button>
                <button
                  type="button"
                  onClick={() => triggerUnderConstruction("Privacy Policy")}
                  className="text-xs text-[#E8D5B5]/60 hover:text-[#DFCA9E] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8D5B5]/50 gap-4">
            <p>© {new Date().getFullYear()} Al Shaali Marine. All rights reserved.</p>
            <p className="tracking-widest uppercase text-[10px] text-[#DFCA9E]">
              Ajman &nbsp;—&nbsp; Dubai &nbsp;—&nbsp; Abu Dhabi
            </p>
          </div>

          {/* Environmental Statement Note */}
          <p className="text-[11px] text-[#E8D5B5]/35 mt-6 max-w-2xl leading-relaxed italic">
            Dark by intention: our website is designed in deep maritime tones, so your display draws less energy, reflecting the calm waters of the Arabian Gulf. The same environmental respect and marine stewardship guides every vessel we construct.
          </p>
        </div>
      </footer>

      {/* Under Construction Modal for Footer Links */}
      <UnderConstructionModal
        isOpen={!!underConstructionTarget}
        sectionName={underConstructionTarget || ""}
        onClose={() => setUnderConstructionTarget(null)}
        onOpenEnquiry={onOpenEnquiry}
      />
    </>
  );
}
