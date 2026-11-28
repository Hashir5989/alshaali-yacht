"use client";

import { motion } from "framer-motion";

export default function AnimatedTitle({
  tagline,
  title,
  subtitle,
  align = "left",
  dark = false, // true when placed on dark navy background, false for light/white backgrounds
  className = "",
}) {
  const words = title ? title.split(" ") : [];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const wordAnimation = {
    hidden: { y: "115%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const alignmentClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-end items-end"
      : "text-start items-start";

  return (
    <div className={`flex flex-col ${alignmentClass} ${className}`}>
      {/* Tagline / Eyebrow */}
      {tagline && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B] animate-pulse" />
          <span className="font-sans text-[11px] tracking-[0.32em] uppercase font-bold text-[#C6A66B]">
            {tagline}
          </span>
        </motion.div>
      )}

      {/* Sliced Word Heading - Light Golden on Blue backgrounds, Deep Navy on White */}
      <motion.h2
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className={`font-serif text-3xl sm:text-5xl md:text-6xl font-light leading-[1.08] flex flex-wrap gap-x-[0.28em] gap-y-1 ${
          dark ? "text-[#F5F0E5]" : "text-[#12352D]"
        }`}
      >
        {words.map((word, index) => (
          <span key={index} className="overflow-hidden inline-block py-0.5">
            <motion.span variants={wordAnimation} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>

      {/* Subtitle / Descriptive Body */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`text-xs sm:text-sm mt-4 max-w-xl leading-relaxed font-normal ${
            dark ? "text-[#F5F0E5]/85" : "text-[#5D665F]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
