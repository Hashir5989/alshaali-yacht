"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CurtainPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if previously loaded in this session to keep experience smooth
    const hasLoaded = sessionStorage.getItem("asm_loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("asm_loaded", "true");
          }, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] } }}
          className="fixed inset-0 z-[99999] bg-[#071429] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle background radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,58,107,0.35)_0%,transparent_70%)]" />

          {/* Central Logo & Emblem */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Official Al Shaali Marine Crest & Logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="relative w-64 sm:w-80 h-20 sm:h-24 mb-6"
            >
              <Image
                src="/assets/al-shaali-logo-gold.png"
                alt="Al Shaali Marine"
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-contain drop-shadow-[0_0_30px_rgba(223,202,158,0.4)]"
              />
            </motion.div>

            {/* Typography */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-sans text-[11px] tracking-[0.35em] uppercase text-[#C5A880] mb-2 font-medium"
            >
              Al Shaali Marine · Est. 1979 · Ajman, UAE
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-3xl md:text-4xl text-[#F0EBE0] font-light tracking-wide mb-8"
            >
              الشعالي مارين
            </motion.h2>

            {/* Progress bar and counter */}
            <div className="w-56 flex flex-col items-center">
              <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-3">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#C5A880] to-[#E2C896]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-sans text-[10px] tracking-[0.25em] text-[#F0EBE0]/50 uppercase">
                Preparing Shipyard · {progress}%
              </span>
            </div>
          </div>

          {/* Bottom Coordinates */}
          <div className="absolute bottom-10 font-sans text-[10px] tracking-[0.3em] text-[#F0EBE0]/30 uppercase">
            25.4052° N, 55.4418° E &nbsp;·&nbsp; Arabian Gulf
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
