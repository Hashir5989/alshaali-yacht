"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function CinematicHeroExperience({ onOpenEnquiry }) {
  const containerRef = useRef(null);

  // Track scroll inside this hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out scroll progress for buttery luxury feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // 1. Initial State: Fullscreen full-bleed media (left: 0%, no dark mask)
  // When scrolling down: Media transitions gracefully to the right side (0% -> 26%),
  // and the dark gradient mask smoothly blends in (opacity: 0 -> 1)
  const mediaLeft = useTransform(smoothProgress, [0.05, 0.45], ["0%", "26%"]);
  const maskOpacity = useTransform(smoothProgress, [0.08, 0.42], [0, 1]);
  const videoScale = useTransform(smoothProgress, [0, 0.7], [1.06, 1.0]);

  // 2. Scroll cue fades out immediately upon scrolling
  const cueOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const cueY = useTransform(smoothProgress, [0, 0.12], [0, 20]);

  // 3. Typographic Storytelling Reveals during the scroll
  // Eyebrow label reveals first
  const labelOpacity = useTransform(smoothProgress, [0.2, 0.35], [0, 1]);
  const labelY = useTransform(smoothProgress, [0.2, 0.35], [20, 0]);

  // Headline staggered slide up
  const headlineLine1Y = useTransform(smoothProgress, [0.28, 0.46], ["115%", "0%"]);
  const headlineLine2Y = useTransform(smoothProgress, [0.34, 0.52], ["115%", "0%"]);

  // Body narrative & CTAs
  const bodyOpacity = useTransform(smoothProgress, [0.42, 0.58], [0, 1]);
  const bodyY = useTransform(smoothProgress, [0.42, 0.58], [24, 0]);

  const ctaOpacity = useTransform(smoothProgress, [0.5, 0.65], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.5, 0.65], [20, 0]);

  return (
    <div ref={containerRef} className="relative h-[240vh] bg-[#082B49]">
      {/* Sticky Fullscreen Viewport pinned during scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* Full-Bleed Yacht Video / Media Layer */}
        <motion.div
          style={{
            left: mediaLeft,
          }}
          className="absolute inset-y-0 right-0 z-0 will-change-transform pointer-events-none"
        >
          <motion.div
            style={{ scale: videoScale }}
            className="w-full h-full relative"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/media/yachts/ea4e54_76f5e127f2b94afeb48cce9d48a57fb6f000.jpg"
              className="w-full h-full object-cover object-left md:object-center"
            >
              <source src="/media/hero-yacht.mp4" type="video/mp4" />
            </video>

            {/* Smooth Deep Navy Gradient Mask — blends seamlessly with #082B49 */}
            <motion.div
              style={{ opacity: maskOpacity }}
              className="absolute inset-0 pointer-events-none"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, #082B49 0%, rgba(8,43,73,0.95) 16%, rgba(8,43,73,0.6) 38%, rgba(8,43,73,0) 64%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8,43,73,0.55) 0%, transparent 22%, transparent 75%, rgba(8,43,73,0.75) 100%)",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Minimal Animated Scroll Cue at bottom center */}
        <motion.div
          style={{ opacity: cueOpacity, y: cueY }}
          className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 flex flex-col items-center gap-3 pointer-events-none text-center"
        >
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#E8D5B5] font-medium">
            Scroll to Explore
          </span>
          <div className="w-[1.5px] h-11 bg-gradient-to-b from-[#DFCA9E] via-[#E8D5B5] to-transparent animate-pulse" />
        </motion.div>

        {/* Storytelling Text Content — pinned in view and reveals cleanly as user scrolls */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-14 h-full flex flex-col justify-between">
          
          {/* Eyebrow Label - Light Golden */}
          <motion.div
            style={{ opacity: labelOpacity, y: labelY }}
            className="flex items-center gap-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E]" />
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.38em] uppercase text-[#DFCA9E] font-semibold">
              Al Shaali Marine Group &nbsp;·&nbsp; Gulf Yacht Manufacturer &nbsp;·&nbsp; Est. 1979
            </p>
          </motion.div>

          {/* Lead Headline & Body - Light Golden Typography on Blue */}
          <div className="my-auto max-w-3xl py-6">
            {/* Staggered Sliced Headline */}
            <div className="overflow-hidden mb-4">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-[#E8D5B5] font-light leading-[1.02] tracking-[-0.015em]">
                <span className="inline-block overflow-hidden pb-1">
                  <motion.span
                    style={{ y: headlineLine1Y }}
                    className="inline-block"
                  >
                    Pioneers of the Gulf.
                  </motion.span>
                </span>
                <br />
                <span className="inline-block overflow-hidden pb-2">
                  <motion.span
                    style={{ y: headlineLine2Y }}
                    className="inline-block italic text-[#DFCA9E] font-normal"
                  >
                    Masters of the Deep.
                  </motion.span>
                </span>
              </h1>
            </div>

            <motion.p
              style={{ opacity: bodyOpacity, y: bodyY }}
              className="font-sans text-sm sm:text-base md:text-[17px] text-[#E8D5B5]/90 leading-relaxed max-w-2xl mb-8 font-light"
            >
              A luxury yacht is thousands of decisions, sculpted over years by master shipwrights who have to trust one another. Here in Ajman, every hull answers to four decades of continuous Emirati composite shipbuilding mastery.
            </motion.p>

            {/* Interactive CTAs */}
            <motion.div
              style={{ opacity: ctaOpacity, y: ctaY }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#fleet" className="btn-ocean group flex items-center gap-2 !bg-[#E8D5B5] !text-[#082B49] !border-[#E8D5B5] hover:!bg-[#DFCA9E]">
                <span>Explore 2026 Fleet</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#082B49]" />
              </a>
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry("Flagship Consultation")}
                className="btn-white-outline flex items-center gap-2 group !border-[#E8D5B5]/60 !text-[#E8D5B5] hover:!bg-[#E8D5B5] hover:!text-[#082B49]"
              >
                <span>Commission Inquiry</span>
                <ArrowUpRight className="w-4 h-4 text-[#E8D5B5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>



        </div>
      </div>
    </div>
  );
}
