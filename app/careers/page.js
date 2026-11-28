"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";
import AnimatedTitle from "@/components/AnimatedTitle";
import InteractiveCard3D from "@/components/InteractiveCard3D";
import { motion } from "framer-motion";
import {
  Anchor,
  Compass,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

const POSITIONS = [
  {
    id: "naval-architect",
    title: "Senior Naval Architect & Hydrodynamics Lead",
    department: "Design & Engineering",
    type: "Full-Time · Ajman Atelier",
    location: "Ajman Shipyard, UAE",
    description:
      "Lead CFD analysis, hull modeling, structural weight optimization, and Lloyd's Register compliance calculations for our upcoming 40m+ Asmaraty superyacht line.",
    requirements: ["B.Sc or M.Sc in Naval Architecture", "7+ years composite superyacht design experience", "Mastery of Maxsurf, Rhino 3D & CFD suites"],
  },
  {
    id: "composite-engineer",
    title: "Master Composite Laminating & Infusion Specialist",
    department: "Shipyard Production",
    type: "Full-Time · Climate Hall",
    location: "Ajman Shipyard, UAE",
    description:
      "Supervise vacuum-assisted resin transfer molding (VARTM), sandwich core placement, and carbon fiber reinforcement schedules on high-tonnage yacht hulls.",
    requirements: ["Deep expertise in epoxy infusion & vinylester composites", "5+ years marine yard fabrication", "Quality inspection & Lloyd's laminate testing"],
  },
  {
    id: "marine-electrician",
    title: "Marine Electrical & Automation Systems Engineer",
    department: "Technical Systems",
    type: "Full-Time · Fitting Drydock",
    location: "Ajman Shipyard, UAE",
    description:
      "Integration of CZone glass bridge systems, lithium-ion battery energy storage banks, dual generator paralleling, and marine HVAC automation.",
    requirements: ["Marine Electrical Engineering degree or licensed certification", "Superyacht 24V DC / 400V AC 3-phase switchboard expertise"],
  },
  {
    id: "joinery-artisan",
    title: "Master Joinery Craftsman & Teak Deck Specialist",
    department: "Luxury Interior Atelier",
    type: "Full-Time · Wood Atelier",
    location: "Ajman Shipyard, UAE",
    description:
      "Precision fabrication of high-gloss bookmatched veneers, continuous quarter-sawn Burmese teak margin boards, and bespoke architectural salon cabinetry.",
    requirements: ["Excellence in fine maritime wood joinery", "Handcrafting luxury yacht interiors to European standards"],
  },
];

export default function CareersPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleApply = (roleTitle) => {
    setSelectedRole(`Career Application: ${roleTitle}`);
    setEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#12352D]">
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 bg-[#12352D] text-[#F5F0E5] overflow-hidden border-b border-[#C6A66B]/30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C6A66B]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-24 left-0 w-[500px] h-[500px] bg-[#C6A66B]/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#0A211B] border border-[#C6A66B]/30 text-xs font-sans tracking-[0.25em] uppercase text-[#C6A66B] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A66B] animate-pulse" />
              <span>Careers at Al Shaali Marine · Est. 1979</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5F0E5] font-light tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
              Join the Master Shipwrights Shaping the Arabian Sea.
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#F5F0E5]/80 max-w-2xl mx-auto leading-relaxed font-light">
              For over four decades, our 45,000 sqm shipyard in Ajman has united naval architects, composite innovators, and master joinery artisans. Discover your next career defining luxury yacht craftsmanship.
            </p>
          </div>
        </section>

        {/* Core Values / Why Join */}
        <section className="py-20 bg-[#F5F8FA] border-b border-[#E2DDD1]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Anchor,
                  title: "45-Year Legacy",
                  desc: "Work on award-winning superyachts and high-performance craft recognized worldwide.",
                },
                {
                  icon: Wrench,
                  title: "World-Class Infrastructure",
                  desc: "45,000 sqm drydocks, 200-tonne travel lifts, and climate-controlled vacuum infusion halls.",
                },
                {
                  icon: Compass,
                  title: "Global Collaboration",
                  desc: "Partner with international naval architects, Lloyd's inspectors, and royal commissions.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 border border-[#E2DDD1] shadow-sm flex flex-col gap-3">
                  <div className="w-12 h-12 bg-[#12352D] text-[#C6A66B] flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-[#12352D] font-normal mt-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5D665F] leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Open Positions */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-16">
              <AnimatedTitle
                tagline="Open Opportunities · Ajman Shipyard"
                title="Available Career Opportunities."
                subtitle="Explore our active engineering, shipyard fabrication, and management openings."
                dark={false}
              />
            </div>

            <div className="space-y-6">
              {POSITIONS.map((role) => (
                <InteractiveCard3D key={role.id} className="w-full">
                  <div className="p-8 sm:p-10 bg-white border border-[#E2DDD1] hover:border-[#C6A66B] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group">
                    <div className="max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3 mb-3 text-xs">
                        <span className="px-3 py-1 bg-[#C6A66B]/10 text-[#C6A66B] font-mono uppercase tracking-wider font-bold">
                          {role.department}
                        </span>
                        <span className="flex items-center gap-1 text-[#5D665F] font-sans">
                          <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1 text-[#5D665F] font-sans">
                          <Clock className="w-3.5 h-3.5 text-[#5D665F]" />
                          {role.type}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl text-[#12352D] font-normal group-hover:text-[#C6A66B] transition-colors mb-3">
                        {role.title}
                      </h3>

                      <p className="text-sm text-[#5D665F] leading-relaxed font-light mb-4">
                        {role.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {role.requirements.map((req, rIdx) => (
                          <span key={rIdx} className="text-[11px] text-[#5D665F] bg-[#F5F8FA] px-2.5 py-1 border border-[#E2DDD1]">
                            ✓ {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <button
                        onClick={() => handleApply(role.title)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#12352D] text-white hover:bg-[#C6A66B] px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-md group-hover:shadow-lg"
                      >
                        <span>Apply For Position</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </InteractiveCard3D>
              ))}
            </div>

            {/* Speculative Application Banner */}
            <div className="mt-16 p-8 sm:p-12 bg-[#12352D] text-[#F5F0E5] border border-[#C6A66B]/40 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#F5F0E5] font-light mb-2">
                  Don't see your specific discipline?
                </h4>
                <p className="text-sm text-[#F5F0E5]/80 max-w-xl font-light leading-relaxed">
                  We are continuously seeking passionate marine craftsmen, composite technicians, and project managers. Submit a speculative CV directly to our shipyard HR department.
                </p>
              </div>

              <button
                onClick={() => handleApply("Speculative Shipyard Application")}
                className="inline-flex items-center gap-3 bg-[#C6A66B] text-[#12352D] hover:bg-[#F5F0E5] px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-md flex-shrink-0"
              >
                <span>Send Speculative CV</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />

      <VipEnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        preselectedYacht={selectedRole}
      />
    </div>
  );
}
