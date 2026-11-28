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
      {/* Central Nautical Navigation Compass Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        animate={{
          x: mousePosition.x - (isHovered ? 16 : 10),
          y: mousePosition.y - (isHovered ? 16 : 10),
          scale: isHovered ? 1.25 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: "spring", damping: 28, stiffness: 350, mass: 0.1 }}
      >
        <svg
          viewBox="0 0 32 32"
          className={`transition-all duration-300 ${
            isHovered
              ? "w-8 h-8 drop-shadow-[0_0_8px_rgba(198,166,107,0.7)]"
              : "w-5 h-5 drop-shadow-[0_0_4px_rgba(18,53,45,0.35)]"
          }`}
          fill="none"
        >
          {/* Compass Outer Ring */}
          <circle
            cx="16"
            cy="16"
            r="13"
            stroke={isHovered ? "#C6A66B" : "#12352D"}
            strokeWidth={isHovered ? "1.5" : "1.2"}
            strokeDasharray={isHovered ? "none" : "2 2"}
            className="transition-colors duration-300"
          />

          {/* Cardinal Navigation Ticks */}
          <line x1="16" y1="1" x2="16" y2="4" stroke={isHovered ? "#C6A66B" : "#12352D"} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="28" x2="16" y2="31" stroke={isHovered ? "#C6A66B" : "#12352D"} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="1" y1="16" x2="4" y2="16" stroke={isHovered ? "#C6A66B" : "#12352D"} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="28" y1="16" x2="31" y2="16" stroke={isHovered ? "#C6A66B" : "#12352D"} strokeWidth="1.5" strokeLinecap="round" />

          {/* Navigational Needle (N-S Diamond) */}
          <polygon
            points="16,6 18.5,16 16,14.5 13.5,16"
            fill={isHovered ? "#C6A66B" : "#1A493E"}
            className="transition-colors duration-300"
          />
          <polygon
            points="16,26 18.5,16 16,17.5 13.5,16"
            fill={isHovered ? "#F5F0E5" : "#12352D"}
            className="transition-colors duration-300"
          />

          {/* Pivot Jewel */}
          <circle cx="16" cy="16" r="2" fill={isHovered ? "#FFFFFF" : "#C6A66B"} />
        </svg>
      </motion.div>

      {/* Trailing Soft Maritime Navigation Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border"
        animate={{
          x: mousePosition.x - 22,
          y: mousePosition.y - 22,
          scale: isHovered ? 1.4 : 1,
          borderColor: isHovered ? "rgba(198, 166, 107, 0.55)" : "rgba(18, 53, 45, 0.28)",
          backgroundColor: isHovered ? "rgba(198, 166, 107, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", damping: 24, stiffness: 200, mass: 0.35 }}
        style={{ width: 44, height: 44 }}
      />
    </>
  );
}
