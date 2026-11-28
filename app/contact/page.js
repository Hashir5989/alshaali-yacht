"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";
import { companyInfo } from "@/data/yachts";

export default function ContactPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const offices = [
    {
      city: "Ajman Shipyard & Drydock",
      role: "Global Headquarters & Manufacturing Shipyard",
      address: "Al Rashidiya Industrial Zone, Port of Ajman, United Arab Emirates",
      phone: "+971 6 742 2222",
      email: "sales@alshaalimarine.com",
      hours: "08:00 - 18:00 GST (Sunday - Friday)",
      coords: "25.4052° N, 55.4418° E",
      image: "/media/yachts/sweet-maryi-52m-yacht-refit-athens.png",
    },
    {
      city: "Dubai Harbour Marina",
      role: "Client Consultation & Sea Trials Suite",
      address: "Dubai Harbour Marina, Pier 4, Dubai, United Arab Emirates",
      phone: "+971 50 481 9999",
      email: "dubai@alshaalimarine.com",
      hours: "10:00 - 20:00 GST (Daily by Appointment)",
      coords: "25.0911° N, 55.1437° E",
      image: "/media/yachts/ciappaira-65-m-superyacht-design.jpg",
    },
    {
      city: "Abu Dhabi",
      role: "Yas Marina Private Representative",
      address: "Yas Marina, Building 1, Yas Island, Abu Dhabi, UAE",
      phone: "+971 2 642 8888",
      email: "abudhabi@alshaalimarine.com",
      hours: "By Private Appointment",
      coords: "24.4672° N, 54.6068° E",
      image: "/media/yachts/neon-78-m-superyacht-design.jpg",
    },
  ];

  return (
    <>
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-grow pt-28 pb-24 bg-[#12352D] text-[#F5F0E5]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="py-12 border-b border-white/10 mb-16">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C6A66B] mb-2 font-medium">
              Al Shaali Marine &nbsp;·&nbsp; Connect with the Shipyard
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F0E5] font-light">
              Come and Talk to Us.
            </h1>
            <p className="text-sm sm:text-base text-[#F5F0E5]/70 max-w-xl mt-4 leading-relaxed font-light">
              Whether you are commissioning a new AS 130 superyacht, acquiring an express sportfish cruiser, or reserving a drydock slot, we invite you to consult directly with our naval architects.
            </p>
          </div>

          {/* Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-[#062138] border border-white/10 p-6 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden mb-6 border border-white/5">
                    <Image src={office.image} alt={office.city} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062138] via-transparent to-transparent" />
                  </div>

                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A66B] block mb-1">
                    {office.role}
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F0E5] font-light mb-3">
                    {office.city}
                  </h3>
                  <p className="text-xs text-[#F5F0E5]/65 leading-relaxed mb-4">
                    {office.address}
                  </p>

                  <div className="space-y-2 text-xs border-t border-white/10 pt-4 text-[#F5F0E5]/80">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C6A66B]" />
                      <a href={`tel:${office.phone}`} className="hover:text-[#C6A66B] transition-colors">{office.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#C6A66B]" />
                      <a href={`mailto:${office.email}`} className="hover:text-[#C6A66B] transition-colors">{office.email}</a>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="btn-outline-gold !py-2.5 text-[10.5px] mt-6 w-full text-center"
                >
                  Schedule Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />

      <VipEnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
}
