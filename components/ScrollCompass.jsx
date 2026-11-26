"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, ArrowUp } from "lucide-react";

export default function ScrollCompass() {
  const { scrollY, scrollYProgress } = useScroll();
  const [heading, setHeading] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Rotate compass 360 degrees as user scrolls through page
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // Calculate nautical bearing (0 to 360 deg)
      const deg = Math.round((latest * 360) % 360);
      setHeading(deg);
      setShowScrollTop(latest > 0.08);
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getCardinal = (deg) => {
    if (deg >= 337.5 || deg < 22.5) return "N";
    if (deg >= 22.5 && deg < 67.5) return "NE";
    if (deg >= 67.5 && deg < 112.5) return "E";
    if (deg >= 112.5 && deg < 157.5) return "SE";
    if (deg >= 157.5 && deg < 202.5) return "S";
    if (deg >= 202.5 && deg < 247.5) return "SW";
    if (deg >= 247.5 && deg < 292.5) return "W";
    return "NW";
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3">
      {/* Scroll to Top Trigger */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, x: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          title="Return to Helm"
          className="w-10 h-10 rounded-full bg-[#071429]/90 border border-[#C5A880]/30 hover:border-[#C5A880] text-[#C5A880] flex items-center justify-center backdrop-blur-md transition-all shadow-xl hover:scale-110"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}

      {/* Nautical Compass Rose Widget */}
      <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#071429]/80 border border-white/10 backdrop-blur-md shadow-2xl">
        {/* Rotating Compass SVG */}
        <motion.div style={{ rotate }} className="w-5 h-5 flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#C5A880]">
            <polygon points="12,1 15,10 23,12 15,14 12,23 9,14 1,12 9,10" />
            <circle cx="12" cy="12" r="2.5" fill="#071429" stroke="#C5A880" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Heading & Coordinates */}
        <div className="flex flex-col text-left">
          <span className="font-mono text-[9px] text-[#C5A880] tracking-wider font-semibold">
            {String(heading).padStart(3, "0")}° {getCardinal(heading)}
          </span>
          <span className="text-[7.5px] font-mono tracking-widest text-[#F0EBE0]/40 uppercase">
            AJMAN 25.4°N
          </span>
        </div>
      </div>
    </div>
  );
}
