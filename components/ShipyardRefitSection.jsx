"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Wrench, ShieldCheck, Anchor, Compass, ArrowRight } from "lucide-react";

export default function ShipyardRefitSection({ onOpenEnquiry }) {
  const capabilities = [
    {
      title: "200-Tonne Travel Lift Haul-Out",
      desc: "Accommodating motor yachts and superyachts up to 55 metres directly into our Ajman drydocks.",
      icon: Anchor,
    },
    {
      title: "Climate-Controlled Alexseal Paint Sheds",
      desc: "Dust-free, humidity-regulated spray environments producing mirror-finish superyacht topcoats.",
      icon: Wrench,
    },
    {
      title: "TASNEEF & Lloyd's Survey Classification",
      desc: "Full statutory survey renewal, thickness testing, naval architecture recertification, and sea trials.",
      icon: ShieldCheck,
    },
    {
      title: "First-Grade Burmese Teak Decking",
      desc: "In-house joinery artisans laying continuous quarter-sawn Burmese teak with vacuum bonding.",
      icon: Compass,
    },
  ];

  return (
    <section id="shipyard" className="py-24 sm:py-32 bg-white border-b border-[#D9E2EC] relative overflow-hidden text-[#102A43]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Head with Catching Title & Paragraph */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#176B9A] animate-pulse" />
              <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#176B9A] font-bold">
                45,000 SQM Shipbuilding & Drydock Atelier
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#082B49] font-light leading-[1.08]">
              Where Master Shipwrights Bring Dreams to Water.
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#486581] max-w-md leading-relaxed font-normal">
            Spanning over 45,000 square metres on the Arabian Gulf, our Ajman drydocks unite 45 years of composite shipbuilding innovation, high-tonnage haul-outs, and bespoke refit engineering.
          </p>
        </div>

        {/* Feature Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Images Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] w-full rounded-none overflow-hidden border border-[#D9E2EC] shadow-md">
              <Image
                src="/media/yachts/sweet-maryi-52m-yacht-refit-athens.png"
                alt="Al Shaali Marine Drydocks Ajman"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.25em] uppercase text-white font-bold bg-[#082B49]/80 px-2.5 py-1">
                Ajman Drydock Haul-out
              </span>
            </div>

            <div className="relative aspect-[4/5] w-full rounded-none overflow-hidden border border-[#D9E2EC] shadow-md mt-8">
              <Image
                src="/media/yachts/sweet-maryi-52m-refit.jpeg"
                alt="Superyacht Refit & Redocking"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.25em] uppercase text-white font-bold bg-[#082B49]/80 px-2.5 py-1">
                Hull Re-engineering
              </span>
            </div>
          </div>

          {/* Details & Capabilities (5 cols) - Deep Navy & Readable Blue Typography */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-[#102A43]">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#082B49] font-normal leading-snug">
              Every season counts. We ensure your vessel is back at sea without delay.
            </h3>

            <p className="text-sm sm:text-base text-[#486581] leading-relaxed font-normal">
              Whether conducting routine annual maintenance, complete engine repowering with MTU or Caterpillar certified technicians, or an ambitious multi-deck interior reconstruction, Al Shaali Marine delivers unyielding German-grade engineering with Emirati hospitality.
            </p>

            <div className="space-y-4 pt-2">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4 bg-[#F5F8FA] border border-[#D9E2EC] rounded-none">
                    <Icon className="w-5 h-5 text-[#176B9A] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[#082B49] font-bold">{item.title}</h4>
                      <p className="text-xs text-[#486581] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/refit"
                className="inline-flex items-center gap-3 bg-[#082B49] text-white hover:bg-[#176B9A] px-7 py-4 font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md group"
              >
                <span>Explore Shipyard & Drydocks</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#DCEFF7]" />
              </Link>
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry("Shipyard Refit Slot")}
                className="inline-flex items-center gap-2 border border-[#082B49] text-[#082B49] hover:bg-[#082B49] hover:text-white px-6 py-4 font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300"
              >
                <span>Reserve Drydock Slot</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
