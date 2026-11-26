"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { yachts } from "@/data/yachts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck, Download, Share2 } from "lucide-react";

export default function YachtDetailPage({ params }) {
  const yacht = yachts.find((y) => y.slug === params.slug);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(yacht?.heroImage);

  if (!yacht) {
    notFound();
  }

  return (
    <>
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24 bg-[#082B49] text-[#E8D5B5]">
        {/* Hero Section matching Astra Nord Project Page */}
        <div className="relative min-h-[70vh] flex items-end overflow-hidden border-b border-white/10">
          <Image
            src={activeImage || yacht.heroImage}
            alt={yacht.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082B49] via-[#082B49]/40 to-black/30 pointer-events-none" />

          <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12 pb-16 w-full">
            <Link
              href="/#fleet"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#DFCA9E] mb-6 hover:text-[#E2C896] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Fleet</span>
            </Link>

            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#DFCA9E] mb-2 font-medium">
              Al Shaali Marine &nbsp;·&nbsp; {yacht.category} &nbsp;·&nbsp; {yacht.lengthMeters} m ({yacht.lengthFeet} ft)
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#E8D5B5] font-light">
              {yacht.name}
            </h1>
            <p className="text-base sm:text-lg text-[#E8D5B5]/80 mt-3 max-w-xl font-light">
              {yacht.tagline}
            </p>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {yacht.gallery && yacht.gallery.length > 1 && (
          <div className="border-b border-white/10 bg-[#062138]/60 py-4">
            <div className="max-w-[1360px] mx-auto px-6 lg:px-12 flex gap-3 overflow-x-auto">
              {yacht.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img.url)}
                  className={`relative w-28 h-16 rounded-sm overflow-hidden border transition-all flex-shrink-0 ${
                    activeImage === img.url ? "border-[#DFCA9E] scale-105" : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img.url} alt={img.title} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content & Specs Grid */}
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Story & Description */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#E8D5B5] font-light">
                Architectural Concept
              </h2>
              <p className="text-base sm:text-lg text-[#E8D5B5]/90 leading-relaxed font-light">
                {yacht.overview}
              </p>
              <p className="text-sm text-[#E8D5B5]/70 leading-relaxed">
                {yacht.description}
              </p>

              {/* Master Features */}
              {yacht.features && (
                <div className="pt-6 border-t border-white/10">
                  <h3 className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#DFCA9E] mb-4 font-medium">
                    Master Specifications & Appointments
                  </h3>
                  <ul className="space-y-3">
                    {yacht.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#E8D5B5]/80">
                        <Check className="w-4 h-4 text-[#DFCA9E] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Commission Actions */}
              <div className="pt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="btn-gold"
                >
                  Commission {yacht.name}
                </button>
                <Link href="/#configurator" className="btn-outline-gold">
                  Configure AS 130
                </Link>
              </div>
            </div>

            {/* Specifications Card */}
            <div className="lg:col-span-5 bg-[#062138] border border-white/10 p-6 sm:p-8 rounded-sm">
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#DFCA9E] mb-6 font-medium">
                Vessel Dossier
              </p>

              <dl className="divide-y divide-white/10 text-xs sm:text-sm">
                {yacht.specifications?.map((spec, i) => (
                  <div key={i} className="py-3 flex justify-between gap-4">
                    <dt className="text-[#E8D5B5]/50 tracking-wider uppercase text-[10.5px]">{spec.label}</dt>
                    <dd className="font-mono text-[#E8D5B5] text-right font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#E8D5B5]/50">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFCA9E]" />
                  <span>Lloyd&apos;s & TASNEEF Ready</span>
                </span>
                <span className="text-[#DFCA9E] font-mono">Ajman Shipyard</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />

      <VipEnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        preselectedYacht={yacht.name}
      />
    </>
  );
}
