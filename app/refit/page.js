"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";
import { ChevronDown, Check } from "lucide-react";

export default function RefitPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Survey",
      desc: "We see the yacht as she is, with her captain and crew, before anything is promised.",
      items: [
        "Hull, coatings and composite structure, with ultrasound thickness gauging where required",
        "Machinery and generators: running hours, service history, and open defect resolution",
        "Class and flag compliance: TASNEEF, Lloyd's, and RINA survey renewal requirements",
        "Captain and chief engineer's defect lists integrated into the scope from day one",
      ],
    },
    {
      num: "02",
      title: "Plan",
      desc: "One written plan and drydock agreement before the vessel arrives at Ajman.",
      items: [
        "Itemized scope of work with detailed engineering specifications for every trade",
        "200-tonne haul-out slot, drydock schedule, and critical path milestones",
        "Long-lead machinery parts and Awlgrip / Alexseal paint batches ordered early",
        "Continuous transparent reporting directly to the owner and representative",
      ],
    },
    {
      num: "03",
      title: "Return to Sea",
      desc: "Handed back in peak condition ready for the season, with our shipyard standing by you.",
      items: [
        "Rigorous commissioning and load testing of every mechanical and electrical system",
        "Full sea trials conducted in the Arabian Gulf alongside captain and crew",
        "Class surveys closed out with statutory certificates renewed",
        "Crew familiarization training with newly installed avionics and gear",
      ],
    },
  ];

  const deliveredRefits = [
    {
      name: "Ocean Dreamwalker III",
      meta: "50 m (164 ft) · Ajman Drydocks · Delivered",
      image: "/media/yachts/ocean-dreamwalker-iii.jpg",
    },
    {
      name: "Sweet Maryi",
      meta: "52 m (171 ft) · Full Exterior & Interior Refit · Delivered",
      image: "/media/yachts/sweet-maryi-52m-yacht-refit-athens.png",
    },
  ];

  const faqs = [
    {
      q: "Where does Al Shaali Marine carry out superyacht refits?",
      a: "At our dedicated 45,000 sqm direct seafront drydock facility in Ajman, United Arab Emirates, equipped with a 200-tonne marine travel lift and climate-controlled enclosed sheds.",
    },
    {
      q: "Can the interior and exterior living areas be redesigned during refit?",
      a: "Yes. Our in-house joinery, upholstery, and naval engineering teams routinely reconfigure main salons, install sun deck jacuzzis, replace Burmese teak decking, and upgrade audio-visual systems.",
    },
    {
      q: "What if the technical scope changes during haul-out?",
      a: "We calculate the exact cost and schedule impact of any unforeseen scope before work is executed. Nothing is added or altered without the written consent of the owner or captain.",
    },
    {
      q: "Can a refit transition my private yacht to full commercial charter status?",
      a: "Yes. We regularly survey yachts against the UAE Commercial Yacht Code and Red Ensign Group Large Yacht Code (REG Yacht Code), securing flag-state commercial passenger certification.",
    },
    {
      q: "How does the shipyard protect the environment during blasting and painting?",
      a: "All sandblasting and Alexseal spraying are executed within enclosed, filtered negative-pressure containment. Bilge water, waste oils, and anti-fouling runoff are processed through compliant waste management under UAE environmental laws.",
    },
  ];

  return (
    <>
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24 bg-[#12352D] text-[#F5F0E5]">
        {/* Hero Section matching Astra Nord refit.html */}
        <section className="relative min-h-[75vh] flex items-stretch bg-[#12352D] overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 left-0 md:left-[26%] z-0">
            <Image
              src="/media/yachts/sweet-maryi-52m-refit.jpeg"
              alt="Al Shaali Marine Refit"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12352D] via-[#12352D]/80 to-transparent w-full md:w-3/4" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12352D] via-transparent to-black/30" />
          </div>

          <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12 py-20 flex flex-col justify-between w-full">
            <div className="my-auto max-w-xl">
              <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-[#C6A66B] mb-3 font-medium">
                Al Shaali Marine &nbsp;·&nbsp; Shipyard Refit & Modernization
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F5F0E5] font-light leading-[1.05] mb-6">
                The yacht you know,<br />ready for what comes next.
              </h1>
              <p className="text-sm sm:text-base text-[#F5F0E5]/80 leading-relaxed font-light">
                Superyacht refits up to 55 metres at our Ajman Drydocks, serving the Arabian Gulf, Red Sea, and Mediterranean.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10 max-w-2xl">
              <div>
                <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#C6A66B] block mb-1">
                  One Point of Responsibility
                </span>
                <p className="text-xs text-[#F5F0E5]/70">
                  From initial underwater survey to final sea trial and handover.
                </p>
              </div>
              <div>
                <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#C6A66B] block mb-1">
                  In-House Marine Trades
                </span>
                <p className="text-xs text-[#F5F0E5]/70">
                  Certified mechanics, Awlgrip painters, composite laminators, and master teak carpenters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Step Process matching Astra Nord */}
        <section className="py-24 border-b border-white/10 bg-[#062138]">
          <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
            <p className="text-base sm:text-lg text-[#F5F0E5]/90 max-w-2xl font-light mb-12">
              We work directly for the owner, with the captain at the table from the first survey to the last sea trial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="bg-[#12352D] border border-white/10 p-6 rounded-sm flex flex-col justify-between">
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#C6A66B] mb-2 font-medium">
                      <b>{step.num}</b> &nbsp;·&nbsp; {step.title}
                    </p>
                    <p className="text-xs text-[#F5F0E5]/75 mb-6 font-light leading-relaxed">
                      {step.desc}
                    </p>
                    <ul className="space-y-2.5 border-t border-white/10 pt-4 text-xs text-[#F5F0E5]/65">
                      {step.items.map((it, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#C6A66B] font-bold">·</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivered Refits Showcase matching Astra Nord */}
        <section className="py-24 border-b border-white/10 bg-[#12352D]">
          <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
            <div className="mb-10">
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C6A66B] mb-2 font-medium">
                Proven Track Record
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F0E5] font-light">
                Delivered Refit Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deliveredRefits.map((rf, idx) => (
                <div key={idx} className="bg-[#062138] border border-white/10 rounded-sm overflow-hidden group">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image src={rf.image} alt={rf.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062138] via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-[#F5F0E5] font-light">{rf.name}</h3>
                    <p className="text-xs text-[#C6A66B] uppercase tracking-wider mt-1">{rf.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Refit FAQs */}
        <section className="py-24 border-b border-white/10 bg-[#062138]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C6A66B] mb-2 font-medium">
              Refit Governance
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F0E5] font-light mb-12">
              Superyacht Refit, Answered.
            </h2>

            <div className="divide-y divide-white/10">
              {faqs.map((faq, i) => (
                <details key={i} className="py-6 group cursor-pointer">
                  <summary className="flex items-center justify-between text-lg sm:text-xl font-serif text-[#F5F0E5] group-hover:text-[#C6A66B] transition-colors list-none">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-[#C6A66B] transition-transform duration-300 group-open:rotate-180 flex-shrink-0 ml-4" />
                  </summary>
                  <p className="text-xs sm:text-sm text-[#F5F0E5]/70 mt-4 leading-relaxed font-light pr-8">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 bg-[#12352D] text-center">
          <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F0E5] font-light mb-6">
              Reserve your upcoming drydock slot.
            </h2>
            <button onClick={() => setEnquiryOpen(true)} className="btn-gold !py-3.5 !px-8 text-xs">
              Enquire About Refit
            </button>
          </div>
        </section>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />

      <VipEnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} preselectedYacht="Shipyard Refit Slot" />
    </>
  );
}
