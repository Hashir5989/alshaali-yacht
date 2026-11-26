"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, Users, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function YachtCard({ yacht, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col bg-white border border-[#E8E3DA] overflow-hidden hover:border-[#B89C76]/60 transition-all duration-700 hover:shadow-[0_16px_40px_rgba(184,156,118,0.08)]"
    >
      {/* Image Container */}
      <Link
        href={`/yachts/${yacht.slug}`}
        className="relative aspect-[16/10] overflow-hidden block bg-[#F4F1EA]"
      >
        <Image
          src={yacht.heroImage}
          alt={yacht.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Status / Category Overlays */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
          <span className="bg-[#FAF9F5]/95 backdrop-blur-md px-3 py-1 text-[10px] font-sans font-semibold uppercase tracking-widest text-[#1A252C] border border-[#E8E3DA] shadow-sm">
            {yacht.category}
          </span>
          {yacht.status && (
            <span className="bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-sans font-medium uppercase tracking-widest text-[#B89C76] border border-[#B89C76]/30 shadow-sm">
              {yacht.status}
            </span>
          )}
        </div>

        {/* Length badge */}
        <div className="absolute bottom-4 right-4 z-10">
          <span className="bg-[#FAF9F5]/95 backdrop-blur-md text-[#1A252C] text-xs font-sans tracking-wider px-3 py-1 border border-[#E8E3DA] shadow-sm font-medium">
            {yacht.lengthMeters}m / {yacht.lengthFeet}ft
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-2">
          <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#B89C76] font-medium block">
            {yacht.model}
          </span>
          <Link href={`/yachts/${yacht.slug}`} className="block">
            <h3 className="font-serif text-2xl font-light text-[#1A252C] group-hover:text-[#B89C76] transition-colors duration-300 leading-snug">
              {yacht.name}
            </h3>
          </Link>
          <p className="font-sans text-xs text-[#767A7D] line-clamp-2 leading-relaxed pt-1 font-light">
            {yacht.tagline || yacht.overview}
          </p>
        </div>

        {/* Key Technical Highlights */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-[#E8E3DA] text-[#1A252C]">
          <div className="space-y-1">
            <span className="text-[10px] font-sans uppercase tracking-wider text-[#767A7D] flex items-center gap-1">
              <Compass className="w-3 h-3 text-[#B89C76]" /> Beam
            </span>
            <span className="text-xs font-sans font-medium block truncate">
              {yacht.beam ? yacht.beam.split("/")[0].trim() : "N/A"}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-sans uppercase tracking-wider text-[#767A7D] flex items-center gap-1">
              <Users className="w-3 h-3 text-[#B89C76]" /> Guests
            </span>
            <span className="text-xs font-sans font-medium block truncate">
              {yacht.guestCapacity}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-sans uppercase tracking-wider text-[#777B7D] flex items-center gap-1">
              <Gauge className="w-3 h-3 text-[#B89C76]" /> Max Speed
            </span>
            <span className="text-xs font-sans font-medium block truncate">
              {yacht.maxSpeed}
            </span>
          </div>
        </div>

        {/* Bottom CTA & Price */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="text-[10px] uppercase font-sans tracking-wider text-[#767A7D] block">
              Investment
            </span>
            <span className="font-serif text-lg text-[#1A252C] font-normal">
              {yacht.price}
            </span>
          </div>

          <Link
            href={`/yachts/${yacht.slug}`}
            className="inline-flex items-center text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#1A252C] group-hover:text-[#B89C76] transition-colors"
          >
            <span>Discover</span>
            <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
