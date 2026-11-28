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
} from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sheikh Rashid Al-Nuaimi",
    title: "Private Owner",
    vessel: "AS 130 Tri-Deck Superyacht",
    location: "Dubai & Mediterranean",
    rating: 5,
    initials: "RN",
    message:
      "Taking delivery of our custom AS 130 was an unforgettable milestone. The naval architecture, acoustic insulation at cruising speeds, and the level of bespoke wood joinery executed at the Ajman atelier rival the most prestigious European yards. Al Shaali Marine has truly redefined Arabian luxury on the world stage.",
    highlight: "Unrivaled Acoustic Comfort & Joinery",
  },
  {
    id: 2,
    name: "Captain Marcus Lindqvist",
    title: "Master Mariner & Yacht Captain",
    vessel: "AS 100 Raised Pilothouse",
    location: "Monaco & French Riviera",
    rating: 5,
    initials: "ML",
    message:
      "Having skippered superyachts across the Atlantic and Aegean for over 25 years, the seaworthiness and structural rigidity of the Al Shaali hull in rough seas is simply exceptional. Fuel efficiency at 18 knots and the intuitive helm ergonomics make her an absolute pleasure to command.",
    highlight: "Exceptional Seakeeping in Heavy Seas",
  },
  {
    id: 3,
    name: "Tariq Al-Ghamdi",
    title: "Owner & Maritime Enthusiast",
    vessel: "Warrior 43 High-Performance",
    location: "Jeddah & Red Sea",
    rating: 5,
    initials: "TG",
    message:
      "The Warrior series gives me the thrill of race-honed performance without sacrificing an ounce of luxury craftsmanship. Whether sprinting out for offshore sportfishing at 50 knots or entertaining family on weekend island crossings, she performs flawlessly every single voyage.",
    highlight: "Pure Adrenaline with Superyacht Finish",
  },
  {
    id: 4,
    name: "Elena Rostova",
    title: "Luxury Charter Fleet Director",
    vessel: "Glory 85 Motor Yacht Fleet",
    location: "Athens & Porto Cervo",
    rating: 5,
    initials: "ER",
    message:
      "Our ultra-high-net-worth charter guests consistently request Al Shaali yachts for their peerless panoramic beach clubs and whisper-quiet stability at anchor. From bespoke styling to factory shipyard support, their excellence is remarkable.",
    highlight: "Most Requested Charter Vessels in the Med",
  },
  {
    id: 5,
    name: "Hamad Al-Maktoum",
    title: "Collector & Private Client",
    vessel: "Glory 75 Flybridge",
    location: "Abu Dhabi & Arabian Gulf",
    rating: 5,
    initials: "HM",
    message:
      "What impressed me most was the personalized atelier experience. The engineering team and master craftsmen accommodated every bespoke interior request, delivering a handcrafted masterpiece that our family cherishes on every sunset voyage.",
    highlight: "True Bespoke Tailoring & Family Heritage",
  },
];

export default function TestimonialCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Automatic slideshow (every 7 seconds, pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const current = TESTIMONIALS[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 bg-[#082B49] border-b border-[#176B9A]/30 relative overflow-hidden text-[#E8D5B5]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative ambient radial lighting */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#176B9A]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] bg-[#DFCA9E]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle compass nautical watermark */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
        <Compass className="w-[500px] h-[500px] text-white" strokeWidth={0.5} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] animate-pulse" />
              <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-[#DFCA9E] font-bold">
                Owner Testimonials · Global Reputation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#E8D5B5] font-light tracking-tight">
              Words from Our Owners & Captains
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#DCEFF7]/80 max-w-2xl font-light leading-relaxed">
              Discover unfiltered feedback from discerning yacht owners, master mariners, and charter directors who navigate our vessels worldwide.
            </p>
          </div>

          {/* Navigation Controls (Desktop) */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="font-mono text-xs text-[#DFCA9E] tracking-[0.2em] mr-2">
              0{currentIndex + 1} &nbsp;/&nbsp; 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-full border border-[#DFCA9E]/30 bg-[#06182a]/80 backdrop-blur-sm text-[#E8D5B5] hover:text-[#082B49] hover:bg-[#DFCA9E] hover:border-[#DFCA9E] transition-all flex items-center justify-center group shadow-md"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-full border border-[#DFCA9E]/30 bg-[#06182a]/80 backdrop-blur-sm text-[#E8D5B5] hover:text-[#082B49] hover:bg-[#DFCA9E] hover:border-[#DFCA9E] transition-all flex items-center justify-center group shadow-md"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Card Presentation */}
        <div className="relative min-h-[420px] sm:min-h-[380px] bg-[#06182a]/85 backdrop-blur-md border border-[#DFCA9E]/25 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          
          {/* Large Quote Backdrop */}
          <div className="absolute top-6 right-8 opacity-10 pointer-events-none">
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

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#176B9A]/30 border border-[#176B9A]/50 text-xs text-[#DCEFF7] font-sans">
                    <Anchor className="w-3.5 h-3.5 text-[#DFCA9E]" />
                    <span>{current.vessel}</span>
                  </div>
                </div>

                {/* Testimonial Quote Message */}
                <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#E8D5B5] font-light leading-relaxed sm:leading-[1.45] tracking-wide mb-10 italic">
                  “{current.message}”
                </blockquote>
              </div>

              {/* Bottom Row: Owner Details & Credentials */}
              <div className="pt-8 border-t border-[#DFCA9E]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  {/* Monogram Crest Avatar */}
                  <div className="w-14 h-14 rounded-full border border-[#DFCA9E]/50 bg-gradient-to-br from-[#082B49] to-[#04111d] flex items-center justify-center text-[#DFCA9E] font-serif text-lg font-bold shadow-inner">
                    {current.initials}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-base sm:text-lg font-bold tracking-[0.15em] uppercase text-[#E8D5B5]">
                        {current.name}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-[#DFCA9E]" />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#DCEFF7]/75 font-sans mt-0.5">
                      <span>{current.title}</span>
                      <span>·</span>
                      <span className="text-[#DFCA9E]">{current.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="hidden lg:block text-right">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCA9E]/80 block font-mono">
                    Owner Highlight
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

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
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
