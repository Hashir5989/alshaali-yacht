"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function NewBuildPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Define",
      desc: "Vision, requirements, naval architecture and build path, established together.",
      image: "/media/yachts/ultra2-top-view.jpg",
    },
    {
      num: "02",
      title: "Build",
      desc: "Ajman shipyard facilities, skilled master shipwrights, one uncompromised standard.",
      image: "/media/yachts/ultra2-front-view.jpg",
    },
    {
      num: "03",
      title: "Deliver",
      desc: "Sea trials in the Arabian Gulf, turnkey handover, and a yard that stays beside you.",
      image: "/media/yachts/august-owner-s-terrace.jpg",
    },
  ];

  const faqs = [
    {
      q: "Where does Al Shaali Marine build superyachts?",
      a: "In the Emirate of Ajman, United Arab Emirates, along our direct deepwater seafront shipyard spanning over 45,000 square metres.",
    },
    {
      q: "What size of vessels does Al Shaali Marine build?",
      a: "Our portfolio ranges from 33-foot high-performance coastal cruisers to 130-foot (40-metre) tri-deck composite superyachts, with custom naval architecture available across all classes.",
    },
    {
      q: "Can I bring my own external yacht designer?",
      a: "Yes. We collaborate seamlessly with international naval design studios from Monaco, London, and Milan. The design you agree with us is the design we build, with complete fidelity.",
    },
    {
      q: "And if I do not have an appointed designer?",
      a: "Our in-house naval architecture and interior atelier handles the complete conception, scale modelling, computational fluid dynamics (CFD), and interior joinery under a single unified contract.",
    },
    {
      q: "What hull materials and composite technologies are used?",
      a: "We specialize in vacuum-assisted resin infusion GRP, Kevlar reinforcements, and marine-grade aerospace sandwich cores engineered to withstand extreme Gulf heat (50°C+) and heavy open-ocean seas.",
    },
    {
      q: "What documentation does the owner receive upon delivery?",
      a: "Comprehensive as-built 3D drawings, Lloyd's or TASNEEF classification certificates, machinery manuals, crew handover dossiers, and dedicated aftersales support for the seasons ahead.",
    },
  ];

  return (
    <>
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-24 pb-0 bg-white text-[#102A43]">
        {/* 1. Hero Section (Deep Navy Blue #082B49) */}
        <section className="relative min-h-[75vh] flex items-stretch bg-[#082B49] overflow-hidden border-b border-[#176B9A]/30 text-white">
          <div className="absolute inset-0 left-0 md:left-[26%] z-0">
            <Image
              src="/media/yachts/stardom-bow.jpg"
              alt="Al Shaali Marine New Build Superyacht"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#082B49] via-[#082B49]/85 to-transparent w-full md:w-3/4" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082B49] via-transparent to-black/30" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-20 flex flex-col justify-between w-full">
            <div className="my-auto max-w-xl">
              <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-[#DCEFF7] mb-3 font-bold">
                Al Shaali Marine &nbsp;·&nbsp; New Build Atelier
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-light leading-[1.05] mb-6">
                Bring your vision.<br />We build the vessel.
              </h1>
              <p className="text-sm sm:text-base text-[#DCEFF7]/90 leading-relaxed font-light">
                For each build we bring together the naval team, the Ajman shipyard facility, and world-class marine suppliers, answering for all of them as one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/20 max-w-2xl">
              <div>
                <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#DCEFF7] block mb-1 font-bold">
                  Measure Three Times
                </span>
                <p className="text-xs text-[#DCEFF7]/80 leading-relaxed">
                  One transparent master plan and build schedule, agreed before lamination begins.
                </p>
              </div>
              <div>
                <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#DCEFF7] block mb-1 font-bold">
                  Cut Once
                </span>
                <p className="text-xs text-[#DCEFF7]/80 leading-relaxed">
                  What we agree with the owner is what we build. No compromises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Three-Step Process (Pure White Section #FFFFFF) */}
        <section className="py-24 border-b border-[#D9E2EC] bg-white text-[#102A43]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="bg-[#F5F8FA] border border-[#D9E2EC] p-7 rounded-none flex flex-col justify-between shadow-sm hover:border-[#176B9A] transition-colors">
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#176B9A] mb-4 font-bold">
                      <b>{step.num}</b> &nbsp;·&nbsp; {step.title}
                    </p>
                    <div className="relative aspect-[4/3] w-full rounded-none overflow-hidden mb-5 border border-[#D9E2EC]">
                      <Image src={step.image} alt={step.title} fill className="object-cover" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#486581] leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FAQ Section (Ice-Blue Tint Background #EEF7FB) */}
        <section className="py-24 border-b border-[#D9E2EC] bg-[#EEF7FB] text-[#102A43]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#176B9A] mb-2 font-bold">
              Questions Owners Ask
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#082B49] font-light mb-12">
              Superyacht New Build, Answered.
            </h2>

            <div className="divide-y divide-[#D9E2EC]">
              {faqs.map((faq, i) => (
                <details key={i} className="py-6 group cursor-pointer">
                  <summary className="flex items-center justify-between text-lg sm:text-xl font-serif text-[#082B49] group-hover:text-[#176B9A] transition-colors list-none font-normal">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-[#176B9A] transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4" />
                  </summary>
                  <p className="text-xs sm:text-sm text-[#486581] mt-4 leading-relaxed font-normal pr-8">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Action Banner (Deep Navy Blue #082B49) */}
        <section className="relative py-20 bg-[#082B49] text-center border-t border-[#176B9A]/30 text-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light mb-6">
              Let&apos;s talk about your build.
            </h2>
            <button onClick={() => setEnquiryOpen(true)} className="bg-white text-[#082B49] hover:bg-[#DCEFF7] font-semibold uppercase tracking-wider py-3.5 px-8 text-xs transition-all shadow-lg rounded-none">
              Enquire About New Build
            </button>
          </div>
        </section>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />

      <VipEnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} preselectedYacht="New Build Commission" />
    </>
  );
}
