"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Award, Shield, Anchor, Check, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";
import { leadershipTeam, clientTestimonials } from "@/data/team";
import { companyInfo, shipyardMilestones } from "@/data/yachts";

export default function AboutPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24 bg-[#082B49] text-[#E8D5B5]">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden border-b border-white/10">
          <Image
            src="/media/yachts/an-owner-at-ease-on-the-aft-deck-mediterranean-coast-behind.png"
            alt="Al Shaali Marine Heritage"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082B49] via-[#082B49]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082B49] via-transparent to-black/30" />

          <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12 py-16">
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-[#DFCA9E] mb-3 font-medium">
              Al Shaali Marine &nbsp;·&nbsp; Established 1979 &nbsp;·&nbsp; Ajman, UAE
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#E8D5B5] font-light max-w-3xl leading-[1.05]">
              Four Decades of Arabian Maritime Mastery.
            </h1>
            <p className="text-base sm:text-lg text-[#E8D5B5]/80 mt-6 max-w-xl leading-relaxed font-light">
              Founded in 1979 in the Emirate of Ajman, Al Shaali Marine has grown from a visionary local boatyard to one of the most respected superyacht shipyards in the Middle East.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 border-b border-white/10 bg-[#062138]">
          <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#DFCA9E] font-medium">
                  The Foundry of Gulf Shipbuilding
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#E8D5B5] font-light leading-snug">
                  From traditional maritime heritage to transatlantic superyachts.
                </h2>
                <p className="text-sm sm:text-base text-[#E8D5B5]/80 leading-relaxed font-light">
                  Long before the Arabian Gulf became a global yachting destination, Dr. Tariq Al Shaali recognized the immense potential of modern fiberglass composite boatbuilding. In 1979, he founded Al Shaali Marine in Ajman.
                </p>
                <p className="text-sm text-[#E8D5B5]/70 leading-relaxed">
                  Over the ensuing 45 years, the yard expanded to cover 45,000 square metres, delivering more than 1,200 vessels ranging from offshore patrol craft and high-performance express cruisers to the flagship AS 100 and AS 130 tri-deck superyachts.
                </p>

                <div className="pt-4 flex items-center gap-6 text-xs text-[#E8D5B5]/60">
                  <div>
                    <span className="font-serif text-3xl text-[#DFCA9E] block">1,200+</span>
                    <span className="text-[10px] tracking-widest uppercase">Hulls Built</span>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div>
                    <span className="font-serif text-3xl text-[#E8D5B5] block">45,000 m²</span>
                    <span className="text-[10px] tracking-widest uppercase">Shipyard Footprint</span>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div>
                    <span className="font-serif text-3xl text-[#DFCA9E] block">200 T</span>
                    <span className="text-[10px] tracking-widest uppercase">Travel Lift</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10">
                  <Image src="/media/yachts/ciappaira-65-m-superyacht-aft-deck-and-pool.jpg" alt="Aft Pool" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 mt-8">
                  <Image src="/media/yachts/stardom-101-m-superyacht-design.jpg" alt="Superyacht Design" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 border-b border-white/10 bg-[#082B49]">
          <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
            <div className="mb-14">
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#DFCA9E] mb-2 font-medium">
                Shipyard Leadership
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#E8D5B5] font-light">
                Custodians of the Craft.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipTeam.map((member, idx) => (
                <div key={idx} className="bg-[#062138] border border-white/10 p-5 rounded-sm flex flex-col justify-between">
                  <div className="relative aspect-[4/4.5] w-full mb-4 rounded-sm overflow-hidden bg-[#082B49]">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#E8D5B5] font-light">{member.name}</h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#DFCA9E] mt-0.5">{member.role}</p>
                    <p className="text-xs text-[#E8D5B5]/65 mt-2 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />

      <VipEnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
}
