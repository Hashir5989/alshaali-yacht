"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { yachts } from "@/data/yachts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck } from "lucide-react";

export default function ProjectDetailPage({ params }) {
  // Support slug match by yacht slug or id
  const yacht = yachts.find((y) => y.slug === params.slug || y.id === params.slug);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(yacht?.heroImage);

  if (!yacht) {
    notFound();
  }

  // Find previous and next projects
  const currentIndex = yachts.findIndex((y) => y.id === yacht.id);
  const prevYacht = yachts[(currentIndex - 1 + yachts.length) % yachts.length];
  const nextYacht = yachts[(currentIndex + 1) % yachts.length];

  return (
    <>
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24 bg-[#12352D] text-[#F5F0E5]">
        {/* Hero matching Astra Nord ciappaira.html */}
        <div className="relative min-h-[72vh] flex items-end overflow-hidden border-b border-white/10">
          <Image
            src={activeImage || yacht.heroImage}
            alt={yacht.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12352D] via-[#12352D]/40 to-black/30 pointer-events-none" />

          <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12 pb-16 w-full">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#C6A66B] mb-6 hover:text-[#E2C896] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Projects &nbsp;·&nbsp; {yacht.category} &nbsp;·&nbsp; {yacht.lengthMeters} m</span>
            </Link>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F5F0E5] font-light">
              {yacht.name}
            </h1>
            <p className="text-base sm:text-lg text-[#F5F0E5]/80 mt-3 max-w-xl font-light">
              {yacht.tagline}
            </p>
          </div>
        </div>

        {/* Gallery Flow matching Astra Nord */}
        {yacht.gallery && yacht.gallery.length > 0 && (
          <div className="border-b border-white/10 bg-[#062138]/60 py-4">
            <div className="max-w-[1360px] mx-auto px-6 lg:px-12 flex gap-3 overflow-x-auto">
              {yacht.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img.url)}
                  className={`relative w-28 h-16 rounded-sm overflow-hidden border transition-all flex-shrink-0 ${
                    activeImage === img.url ? "border-[#C6A66B] scale-105" : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img.url} alt={img.title} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Story Grid & Specs matching Astra Nord */}
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F0E5] font-light">
                Architectural Story
              </h2>
              <p className="text-base sm:text-lg text-[#F5F0E5]/90 leading-relaxed font-light">
                {yacht.overview}
              </p>
              <p className="text-sm text-[#F5F0E5]/70 leading-relaxed">
                {yacht.description}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-[#F5F0E5]/60">
                <span className="font-sans text-[10.5px] tracking-[0.25em] uppercase text-[#C6A66B]">Design:</span>
                <span>{yacht.navalArchitect}</span>
                <span>·</span>
                <span className="font-sans text-[10.5px] tracking-[0.25em] uppercase text-[#C6A66B]">Built by:</span>
                <span>Al Shaali Marine Shipyard, Ajman</span>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button onClick={() => setEnquiryOpen(true)} className="btn-gold">
                  Enquire about {yacht.name}
                </button>
                <Link href="/#configurator" className="btn-outline-gold">
                  Open Configurator
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#062138] border border-white/10 p-6 sm:p-8 rounded-sm">
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C6A66B] mb-6 font-medium">
                Specifications
              </p>

              <dl className="divide-y divide-white/10 text-xs sm:text-sm">
                <div className="py-3 flex justify-between">
                  <dt className="text-[#F5F0E5]/50 uppercase tracking-widest text-[10.5px]">Length</dt>
                  <dd className="font-mono text-[#F5F0E5] font-medium">{yacht.lengthMeters} m ({yacht.lengthFeet} ft)</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-[#F5F0E5]/50 uppercase tracking-widest text-[10.5px]">Beam</dt>
                  <dd className="font-mono text-[#F5F0E5] font-medium">{yacht.beam}</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-[#F5F0E5]/50 uppercase tracking-widest text-[10.5px]">Draught</dt>
                  <dd className="font-mono text-[#F5F0E5] font-medium">{yacht.draft}</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-[#F5F0E5]/50 uppercase tracking-widest text-[10.5px]">Guests</dt>
                  <dd className="font-mono text-[#F5F0E5] font-medium">{yacht.guestCapacity}</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-[#F5F0E5]/50 uppercase tracking-widest text-[10.5px]">Gross Tonnage</dt>
                  <dd className="font-mono text-[#F5F0E5] font-medium">{yacht.grossTonnage}</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-[#F5F0E5]/50 uppercase tracking-widest text-[10.5px]">Propulsion</dt>
                  <dd className="font-mono text-[#C6A66B] font-medium text-right text-xs max-w-[200px]">{yacht.engines}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Project Navigation matching Astra Nord */}
          <nav className="border-t border-white/10 pt-10 flex items-center justify-between">
            <Link href={`/projects/${prevYacht.slug}`} className="group">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#C6A66B] block mb-1">Previous</span>
              <span className="font-serif text-xl sm:text-2xl text-[#F5F0E5] group-hover:text-[#C6A66B] transition-colors">{prevYacht.name}</span>
            </Link>

            <Link href={`/projects/${nextYacht.slug}`} className="group text-right">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#C6A66B] block mb-1">Next</span>
              <span className="font-serif text-xl sm:text-2xl text-[#F5F0E5] group-hover:text-[#C6A66B] transition-colors">{nextYacht.name}</span>
            </Link>
          </nav>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />

      <VipEnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} preselectedYacht={yacht.name} />
    </>
  );
}
