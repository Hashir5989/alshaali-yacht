"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Anchor,
  ShieldCheck,
  Compass,
  Award,
} from "lucide-react";
import AnimatedTitle from "./AnimatedTitle";
import InteractiveCard3D from "./InteractiveCard3D";

const TESTIMONIALS = [
  {
    id: 1,
    clientType: "Private Owner Commission",
    vessel: "AS 130 Tri-Deck Superyacht",
    location: "Dubai & Mediterranean",
    rating: 5,
    icon: Anchor,
    message:
      "Taking delivery of our custom AS 130 was an unforgettable milestone. The naval architecture, acoustic insulation at cruising speeds, and the level of bespoke wood joinery executed at the Ajman atelier rival the most prestigious European yards. Al Shaali Marine has truly redefined Arabian luxury on the world stage.",
    highlight: "Unrivaled Acoustic Comfort & Joinery",
  },
  {
    id: 2,
    clientType: "Master Mariner & Fleet Captain",
    vessel: "AS 100 Raised Pilothouse",
    location: "Monaco & French Riviera",
    rating: 5,
    icon: Compass,
    message:
      "Having skippered superyachts across the Atlantic and Aegean for over 25 years, the seaworthiness and structural rigidity of the Al Shaali hull in rough seas is simply exceptional. Fuel efficiency at 18 knots and intuitive helm ergonomics make her an absolute pleasure to command.",
    highlight: "Exceptional Seakeeping in Heavy Seas",
  },
  {
    id: 3,
    clientType: "Offshore Angler & Owner",
    vessel: "Warrior 43 High-Performance",
    location: "Red Sea & Arabian Gulf",
    rating: 5,
    icon: Award,
    message:
      "The Warrior series gives me the thrill of race-honed performance without sacrificing an ounce of luxury craftsmanship. Whether sprinting out for offshore sportfishing at 50 knots or entertaining family on weekend island crossings, she performs flawlessly every single voyage.",
    highlight: "Pure Adrenaline with Superyacht Finish",
  },
  {
    id: 4,
    clientType: "Luxury Charter Fleet Management",
    vessel: "Glory 85 Motor Yacht Fleet",
    location: "Athens & Porto Cervo",
    rating: 5,
    icon: ShieldCheck,
    message:
      "Our ultra-high-net-worth charter guests consistently request Al Shaali yachts for their peerless panoramic beach clubs and whisper-quiet stability at anchor. From bespoke styling to factory shipyard support, their excellence is remarkable.",
    highlight: "Most Requested Charter Vessels in the Med",
  },
  {
    id: 5,
    clientType: "Private Family Commission",
    vessel: "Glory 75 Flybridge",
    location: "Abu Dhabi & Arabian Gulf",
    rating: 5,
    icon: Anchor,
    message:
      "What impressed me most was the personalized atelier experience. The engineering team and master craftsmen accommodated every bespoke interior request, delivering a handcrafted masterpiece that our family cherishes on every sunset voyage.",
    highlight: "True Bespoke Tailoring & Family Heritage",
  },
];

const AUTOPLAY_DURATION_MS = 4500; // Automatic moving every 4.5 seconds

export default function TestimonialCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Continuous automatic slideshow (automatically moves every 4.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DURATION_MS);
    return () => clearInterval(timer);
  }, [nextSlide, currentIndex]);

  const current = TESTIMONIALS[currentIndex];
  const IconComponent = current.icon;

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 bg-[#082B49] border-b border-[#176B9A]/30 relative overflow-hidden text-[#E8D5B5]"
    >
      {/* Decorative ambient radial lighting */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#176B9A]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] bg-[#DFCA9E]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle compass nautical watermark with slow continuous rotation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute right-12 top-1/2 -translate-y-1/2 opacity-[0.035] pointer-events-none hidden lg:block"
      >
        <Compass className="w-[500px] h-[500px] text-white" strokeWidth={0.5} />
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header with Animated Word Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <AnimatedTitle
              tagline="Owner Feedback · Verified Commissions"
              title="Words from Our Owners & Captains."
              subtitle="Authentic reflections from discerning yacht owners, master mariners, and charter directors who navigate our vessels across global waters."
              dark={true}
            />
          </div>

          {/* Navigation Controls (Desktop) & Automatic Slide Indicator */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="flex items-center gap-2 mr-3 px-3 py-1.5 rounded-full bg-[#06182a] border border-[#DFCA9E]/20 text-[10px] font-mono tracking-widest text-[#DFCA9E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] animate-ping" />
              <span>AUTO PLAYING</span>
              <span className="text-[#E8D5B5]/60 ml-1">0{currentIndex + 1} / 0{TESTIMONIALS.length}</span>
            </div>

            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-11 h-11 rounded-full border border-[#DFCA9E]/30 bg-[#06182a]/80 backdrop-blur-sm text-[#E8D5B5] hover:text-[#082B49] hover:bg-[#DFCA9E] hover:border-[#DFCA9E] transition-all flex items-center justify-center group shadow-md"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-11 h-11 rounded-full border border-[#DFCA9E]/30 bg-[#06182a]/80 backdrop-blur-sm text-[#E8D5B5] hover:text-[#082B49] hover:bg-[#DFCA9E] hover:border-[#DFCA9E] transition-all flex items-center justify-center group shadow-md"
            >
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Card Presentation with 3D Tilt */}
        <InteractiveCard3D className="w-full">
          <div className="relative min-h-[400px] sm:min-h-[360px] bg-[#06182a]/90 backdrop-blur-md border border-[#DFCA9E]/30 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden group">
            
            {/* Automatic Slide Countdown Progress Bar at Top */}
            <motion.div
              key={currentIndex}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: AUTOPLAY_DURATION_MS / 1000, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#176B9A] via-[#DFCA9E] to-[#176B9A] origin-left z-20"
            />

            {/* Large Quote Backdrop */}
            <div className="absolute top-6 right-8 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
              <Quote className="w-32 h-32 text-[#DFCA9E]" />
            </div>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col justify-between h-full relative z-10"
              >
                <div>
                  {/* Top Row: Stars & Vessel Highlight Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-1.5">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#DFCA9E] text-[#DFCA9E]"
                        />
                      ))}
                      <span className="ml-2 text-xs font-mono tracking-widest text-[#DFCA9E] font-semibold">
                        VERIFIED COMMISSION
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176B9A]/30 border border-[#176B9A]/50 text-xs text-[#DCEFF7] font-sans">
                      <Anchor className="w-3.5 h-3.5 text-[#DFCA9E]" />
                      <span className="font-medium">{current.vessel}</span>
                    </div>
                  </div>

                  {/* Testimonial Quote Message */}
                  <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#E8D5B5] font-light leading-relaxed sm:leading-[1.45] tracking-wide mb-10 italic">
                    “{current.message}”
                  </blockquote>
                </div>

                {/* Bottom Row: Vessel Attribution & Role (No personal names) */}
                <div className="pt-8 border-t border-[#DFCA9E]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    {/* Shipyard Maritime Emblem */}
                    <div className="w-13 h-13 rounded-full border border-[#DFCA9E]/50 bg-gradient-to-br from-[#082B49] to-[#04111d] flex items-center justify-center text-[#DFCA9E] shadow-inner p-3 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6 text-[#DFCA9E]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-[#DFCA9E]">
                          {current.clientType}
                        </span>
                        <ShieldCheck className="w-4 h-4 text-[#DFCA9E]" />
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#DCEFF7]/80 font-sans mt-0.5">
                        <span className="text-[#E8D5B5] font-semibold">{current.vessel}</span>
                        <span>·</span>
                        <span className="text-[#DFCA9E]/90">{current.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className="hidden lg:block text-right">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCA9E]/80 block font-mono">
                      Vessel Milestone
                    </span>
                    <span className="text-sm font-serif text-[#E8D5B5] italic">
                      {current.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Offset Outer Accent Line */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#DFCA9E] to-transparent w-full opacity-60" />
          </div>
        </InteractiveCard3D>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-8 h-2 bg-[#DFCA9E]"
                  : "w-2 h-2 bg-[#DFCA9E]/30 hover:bg-[#DFCA9E]/60"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
