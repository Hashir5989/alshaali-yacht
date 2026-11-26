"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    } else {
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer");
      setIsHovered(!!target);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Star Reticle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        animate={{
          x: mousePosition.x - (isHovered ? 16 : 8),
          y: mousePosition.y - (isHovered ? 16 : 8),
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      >
        <svg
          viewBox="0 0 24 24"
          className={`transition-colors duration-200 ${
            isHovered ? "w-8 h-8 fill-[#E2C896] stroke-[#C5A880]" : "w-4 h-4 fill-[#C5A880]"
          }`}
        >
          <path d="M12 0 L14 9 L23 11 L14 13 L12 22 L10 13 L1 11 L10 9 Z" />
        </svg>
      </motion.div>

      {/* Trailing Soft Halo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border border-[#C5A880]/30"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? "rgba(226, 200, 150, 0.6)" : "rgba(197, 168, 128, 0.25)",
        }}
        transition={{ type: "spring", damping: 22, stiffness: 180, mass: 0.4 }}
        style={{ width: 40, height: 40 }}
      />
    </>
  );
}
