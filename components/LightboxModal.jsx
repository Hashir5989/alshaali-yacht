"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function LightboxModal({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onNext,
  onPrev,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#0E1820]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      >
        {/* Top Controls */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white z-20">
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase font-sans tracking-widest text-[#B49A76]">
              {currentImage.type || "Yacht Gallery"} • {currentIndex + 1} of {images.length}
            </span>
            <h4 className="font-serif text-lg font-light">
              {currentImage.title || "Vessel Gallery"}
            </h4>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Active Image */}
        <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] flex items-center justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full"
          >
            <Image
              src={currentImage.url}
              alt={currentImage.title || "Yacht Image"}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </motion.div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
