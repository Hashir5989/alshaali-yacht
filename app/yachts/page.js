"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, ArrowUpRight, Compass, Anchor, ArrowRight } from "lucide-react";
import { yachts, categories } from "@/data/yachts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";

function YachtCollectionContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedYachtName, setSelectedYachtName] = useState("");

  const handleOpenEnquiry = (name = "") => {
    setSelectedYachtName(name);
    setEnquiryOpen(true);
  };

  const filteredYachts = useMemo(() => {
    if (selectedCategory === "all") return yachts;
    return yachts.filter((y) => y.categorySlug === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      <main className="flex-grow pt-32 pb-24 bg-[#12352D] text-[#F5F0E5]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-12 border-b border-white/10 pb-8">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C6A66B] mb-2 font-medium">
              Al Shaali Marine · Complete Fleet
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F0E5] font-light">
              Designs Ready to be Built in Ajman.
            </h1>
            <p className="text-sm sm:text-base text-[#F5F0E5]/70 max-w-2xl mt-4 leading-relaxed font-light">
              From the flagship AS 130 tri-deck superyacht to tournament sportfish cruisers, each hull is engineered in the UAE to withstand world ocean voyages.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-[#C6A66B] text-[#12352D] font-medium"
                    : "text-[#F5F0E5]/60 hover:text-[#F5F0E5] hover:bg-white/5"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredYachts.map((yacht) => (
              <article
                key={yacht.id}
                className="group flex flex-col bg-[#062138] border border-white/10 hover:border-[#C6A66B]/50 transition-all rounded-sm overflow-hidden"
              >
                <Link href={`/yachts/${yacht.slug}`} className="relative aspect-[16/10] w-full block overflow-hidden">
                  <Image
                    src={yacht.heroImage}
                    alt={yacht.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062138] via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] tracking-wider font-mono px-2.5 py-1 bg-[#12352D]/80 backdrop-blur-md rounded-sm border border-white/10">
                    {yacht.lengthMeters} m
                  </span>
                </Link>

                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A66B] block mb-1">
                      {yacht.category}
                    </span>
                    <Link href={`/yachts/${yacht.slug}`}>
                      <h3 className="font-serif text-2xl text-[#F5F0E5] group-hover:text-[#C6A66B] transition-colors font-light">
                        {yacht.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-[#F5F0E5]/60 mt-2 line-clamp-2 leading-relaxed">
                      {yacht.tagline}
                    </p>
                  </div>

                  <dl className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center text-xs">
                    <div>
                      <dt className="text-[9px] text-[#F5F0E5]/40 uppercase tracking-widest">Beam</dt>
                      <dd className="font-mono text-[#F5F0E5] mt-0.5">{yacht.beam.split("/")[0]}</dd>
                    </div>
                    <div>
                      <dt className="text-[9px] text-[#F5F0E5]/40 uppercase tracking-widest">Speed</dt>
                      <dd className="font-mono text-[#C6A66B] mt-0.5">{yacht.maxSpeed.split(" ")[0]} kts</dd>
                    </div>
                    <div>
                      <dt className="text-[9px] text-[#F5F0E5]/40 uppercase tracking-widest">Guests</dt>
                      <dd className="font-mono text-[#F5F0E5] mt-0.5">{yacht.guestCapacity.split(" ")[0]}</dd>
                    </div>
                  </dl>

                  <div className="flex items-center justify-between pt-1">
                    <Link
                      href={`/yachts/${yacht.slug}`}
                      className="text-[11px] tracking-[0.22em] uppercase text-[#C6A66B] flex items-center gap-1.5"
                    >
                      <span>Explore Vessel</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => handleOpenEnquiry(yacht.name)}
                      className="px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase border border-white/15 text-[#F5F0E5]/80 hover:border-[#C6A66B] hover:text-[#C6A66B] transition-all rounded-sm"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      <VipEnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        preselectedYacht={selectedYachtName}
      />
    </>
  );
}

export default function YachtCollectionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#12352D]" />}>
      <YachtCollectionContent />
    </Suspense>
  );
}
