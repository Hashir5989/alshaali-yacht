"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";
import { yachts } from "@/data/yachts";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedYacht, setSelectedYacht] = useState("");

  const handleEnquire = (name) => {
    setSelectedYacht(name);
    setEnquiryOpen(true);
  };

  return (
    <>
      <Header onOpenEnquiry={() => handleEnquire("General Project Inquiry")} />

      <main className="flex-grow pt-28 pb-24 bg-[#082B49] text-[#E8D5B5]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          {/* Header matching Astra Nord projects.html */}
          <div className="py-12 border-b border-white/10 mb-16">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#DFCA9E] mb-2 font-medium">
              Al Shaali Marine &nbsp;·&nbsp; Projects
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#E8D5B5] font-light max-w-3xl leading-[1.08]">
              Designs Ready to be Built at Al Shaali Marine.
            </h1>
            <p className="text-sm sm:text-base text-[#E8D5B5]/70 max-w-2xl mt-4 leading-relaxed font-light">
              Al Shaali Marine Class designs, engineered by our Ajman naval architecture studio and international partners, each waiting for an owner to make it their own.
            </p>
          </div>

          {/* List of Projects matching Astra Nord article style */}
          <div className="space-y-16">
            {yachts.map((yacht, idx) => (
              <article
                key={yacht.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16 border-b border-white/10 group"
              >
                {/* Image Frame (7 cols) */}
                <Link
                  href={`/yachts/${yacht.slug}`}
                  className="lg:col-span-7 relative aspect-[16/10] w-full rounded-sm overflow-hidden block bg-[#062138]"
                >
                  <Image
                    src={yacht.heroImage}
                    alt={yacht.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B49] via-transparent to-transparent opacity-60" />
                </Link>

                {/* Details (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="font-sans text-[10.5px] tracking-[0.25em] uppercase text-[#DFCA9E] block mb-1">
                      {yacht.category} &nbsp;·&nbsp; {yacht.lengthMeters} m ({yacht.lengthFeet} ft)
                    </span>
                    <Link href={`/yachts/${yacht.slug}`}>
                      <h2 className="font-serif text-3xl sm:text-4xl text-[#E8D5B5] group-hover:text-[#DFCA9E] transition-colors font-light">
                        {yacht.name}
                      </h2>
                    </Link>
                    <p className="text-sm text-[#E8D5B5]/70 mt-3 leading-relaxed font-light">
                      {yacht.tagline}
                    </p>
                  </div>

                  {/* Specs DL */}
                  <dl className="grid grid-cols-2 gap-3 py-4 border-y border-white/10 text-xs">
                    <div>
                      <dt className="text-[#E8D5B5]/40 uppercase tracking-widest text-[9.5px]">Length</dt>
                      <dd className="font-mono text-[#E8D5B5] mt-0.5">{yacht.lengthMeters} m</dd>
                    </div>
                    <div>
                      <dt className="text-[#E8D5B5]/40 uppercase tracking-widest text-[9.5px]">Beam</dt>
                      <dd className="font-mono text-[#E8D5B5] mt-0.5">{yacht.beam.split("/")[0]}</dd>
                    </div>
                    <div>
                      <dt className="text-[#E8D5B5]/40 uppercase tracking-widest text-[9.5px]">Guests</dt>
                      <dd className="font-mono text-[#E8D5B5] mt-0.5">{yacht.guestCapacity}</dd>
                    </div>
                    <div>
                      <dt className="text-[#E8D5B5]/40 uppercase tracking-widest text-[9.5px]">Top Speed</dt>
                      <dd className="font-mono text-[#DFCA9E] mt-0.5">{yacht.maxSpeed}</dd>
                    </div>
                  </dl>

                  <div className="flex items-center gap-6">
                    <Link
                      href={`/yachts/${yacht.slug}`}
                      className="text-[11px] tracking-[0.22em] uppercase text-[#DFCA9E] hover:text-[#E2C896] inline-flex items-center gap-1.5 transition-colors font-medium"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => handleEnquire(yacht.name)}
                      className="px-4 py-2 text-[10.5px] tracking-[0.2em] uppercase border border-white/15 text-[#E8D5B5]/80 hover:border-[#DFCA9E] hover:text-[#DFCA9E] transition-all rounded-sm"
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

      <Footer onOpenEnquiry={() => handleEnquire("General Project Inquiry")} />

      <VipEnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} preselectedYacht={selectedYacht} />
    </>
  );
}
