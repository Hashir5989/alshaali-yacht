"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Compass, Shield, Anchor } from "lucide-react";

export default function HeroSection({ onOpenEnquiry }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Subtle Parallax on Background Media
  const videoY = useTransform(scrollY, [0, 800], [0, 160]);
  const videoScale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const textY = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  // Live UAE GST Time Ticker
  const [uaeTime, setUaeTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // UAE is UTC+4
      const options = {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setUaeTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const headlineWords1 = ["Pioneers", "of", "the", "Gulf."];
  const headlineWords2 = ["Masters", "of", "the", "Deep."];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-stretch bg-[#071429] overflow-hidden"
    >
      {/* Background Video with Smooth Parallax & Astra Nord Maritime Mask */}
      <motion.div
        style={{ y: videoY, scale: videoScale }}
        className="absolute inset-0 left-0 md:left-[22%] z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/media/yachts/ea4e54_76f5e127f2b94afeb48cce9d48a57fb6f000.jpg"
          className="w-full h-full object-cover object-center will-change-transform"
        >
          <source src="/media/hero-yacht.mp4" type="video/mp4" />
        </video>

        {/* Dual-axis maritime gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071429] via-[#071429]/85 to-transparent w-full md:w-3/4 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071429] via-transparent to-[#071429]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[#071429]/20 pointer-events-none" />
      </motion.div>

      {/* Main Inner Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 w-full max-w-[1360px] mx-auto px-6 lg:px-12 pt-36 pb-16 flex flex-col justify-between"
      >
        {/* Top Eyebrow Tag & Live Ajman Shipyard Status */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#C5A880] font-medium">
              Al Shaali Marine &nbsp;·&nbsp; Emirati Shipyard &nbsp;·&nbsp; Est. 1979
            </p>
          </div>

          {/* Live Maritime Ticker Badge */}
          <div className="hidden sm:flex items-center gap-3 px-3 py-1 rounded-full bg-[#091A36]/80 border border-white/10 backdrop-blur-md text-[10px] font-mono text-[#F0EBE0]/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>AJMAN YARD: {uaeTime ? `${uaeTime} GST` : "UTC+4"}</span>
            <span className="text-[#C5A880]">·</span>
            <span>SEA: 0.4M CALM</span>
          </div>
        </motion.div>

        {/* Lead Headline & Body */}
        <div className="my-auto max-w-2xl py-12">
          {/* Staggered Sliced Headline */}
          <div className="overflow-hidden mb-2">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-[#F0EBE0] font-light leading-[1.02] tracking-[-0.01em]">
              <span className="inline-block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  Pioneers of the Gulf.
                </motion.span>
              </span>
              <br />
              <span className="inline-block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block italic text-[#C5A880]"
                >
                  Masters of the Deep.
                </motion.span>
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="font-sans text-sm sm:text-base md:text-[17px] text-[#F0EBE0]/80 leading-relaxed max-w-xl mb-8 font-light"
          >
            A yacht is thousands of decisions, made over years, by master shipwrights who have to trust one another. Here in Ajman, every hull answers to four decades of continuous Emirati shipbuilding mastery.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#fleet" className="btn-gold group flex items-center gap-2">
              <span>Explore 2026 Fleet</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#configurator" className="btn-outline-gold flex items-center gap-2 group">
              <span>Configure AS 130 Flagship</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* 2-Column Split Pillars matching Astra Nord */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8"
        >
          <a
            href="#superyachts"
            className="group flex flex-col justify-between p-4 -m-4 rounded-sm hover:bg-white/[0.03] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#C5A880] group-hover:text-[#E2C896] flex items-center gap-2">
                01 &nbsp;·&nbsp; Superyacht New Build
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A880] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <p className="text-xs sm:text-sm text-[#F0EBE0]/70 leading-relaxed font-light">
              Flagship AS 130 tri-deck and AS 100 composite motor yachts built in Ajman — crafted to the vision of your naval architects, or to ours.
            </p>
          </a>

          <a
            href="#shipyard"
            className="group flex flex-col justify-between p-4 -m-4 rounded-sm hover:bg-white/[0.03] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#C5A880] group-hover:text-[#E2C896] flex items-center gap-2">
                02 &nbsp;·&nbsp; Ajman Drydock Refit
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A880] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <p className="text-xs sm:text-sm text-[#F0EBE0]/70 leading-relaxed font-light">
              We return your vessel to sea in flawless condition for the upcoming Mediterranean or Gulf season. 200-tonne lift capacity, managed from survey to sea trial.
            </p>
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Prompt */}
      <a
        href="#statement"
        className="hidden md:flex absolute bottom-8 right-12 z-20 items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#F0EBE0]/40 hover:text-[#C5A880] transition-colors"
      >
        <span>Scroll Down</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
