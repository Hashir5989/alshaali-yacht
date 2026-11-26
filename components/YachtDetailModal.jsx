"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, Download, Share2, Compass, ShieldCheck } from "lucide-react";

export default function YachtDetailModal({ yacht, isOpen, onClose, onOpenEnquiry }) {
  if (!yacht || !isOpen) return null;

  const [activeImage, setActiveImage] = useState(yacht.heroImage);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99990] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#071429]/90 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl bg-[#091A36] border border-white/15 rounded-sm shadow-2xl text-[#F0EBE0] max-h-[92vh] flex flex-col overflow-hidden my-auto"
        >
          {/* Header Bar */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#071429]">
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
                {yacht.category} &nbsp;·&nbsp; {yacht.lengthMeters}m ({yacht.lengthFeet}ft)
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F0EBE0] font-light">
                {yacht.name}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-white/50 hover:text-[#C5A880] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Scrollable */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Main Visual Display */}
            <div className="space-y-3">
              <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#071429] border border-white/10">
                <Image
                  src={activeImage}
                  alt={yacht.name}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>

              {/* Gallery Thumbnails */}
              {yacht.gallery && yacht.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {yacht.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(img.url)}
                      className={`relative w-20 h-14 flex-shrink-0 rounded-sm overflow-hidden border transition-all ${
                        activeImage === img.url ? "border-[#C5A880] scale-105" : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img.url} alt={img.title} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Overview & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-serif text-2xl text-[#F0EBE0] font-light">
                  Architectural Concept & Purpose
                </h3>
                <p className="text-sm text-[#F0EBE0]/80 leading-relaxed font-light">
                  {yacht.overview}
                </p>
                <p className="text-xs text-[#F0EBE0]/65 leading-relaxed">
                  {yacht.description}
                </p>

                {yacht.features && (
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-[11px] tracking-[0.25em] uppercase text-[#C5A880] mb-3">
                      Master Key Features
                    </h4>
                    <ul className="space-y-2">
                      {yacht.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F0EBE0]/75">
                          <Check className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Complete Blueprint Specifications */}
              <div className="lg:col-span-5 bg-[#071429] border border-white/10 p-5 rounded-sm">
                <h4 className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#C5A880] mb-4 font-medium">
                  Technical Specifications
                </h4>

                <dl className="divide-y divide-white/10 text-xs">
                  {yacht.specifications?.map((spec, i) => (
                    <div key={i} className="py-2.5 flex justify-between gap-4">
                      <dt className="text-[#F0EBE0]/50 tracking-wider uppercase text-[10px]">{spec.label}</dt>
                      <dd className="font-mono text-[#F0EBE0] text-right font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-[#071429] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#F0EBE0]/50">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Full Lloyd&apos;s / TASNEEF Certification</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  if (onOpenEnquiry) onOpenEnquiry(yacht.name);
                }}
                className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Commission {yacht.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
