"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CinematicHeroExperience from "@/components/CinematicHeroExperience";
import BrandDivisionsSection from "@/components/BrandDivisionsSection";
import AboutUsHomeSection from "@/components/AboutUsHomeSection";
import ShipyardRefitSection from "@/components/ShipyardRefitSection";
import ChairmanSection from "@/components/ChairmanSection";
import JournalHomeSection from "@/components/JournalHomeSection";
import TestimonialCarouselSection from "@/components/TestimonialCarouselSection";
import CtaVideoSection from "@/components/CtaVideoSection";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";

export default function HomePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [preselectedYacht, setPreselectedYacht] = useState("");

  const handleOpenEnquiry = (yachtName = "") => {
    setPreselectedYacht(yachtName);
    setEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
    setPreselectedYacht("");
  };

  return (
    <>
      <Header onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-grow">
        {/* 1. Immersive Cinematic Hero with Mouse Depth, Video, Ajman Telemetry & Sound Ambience */}
        <CinematicHeroExperience onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. Specialized Brand Divisions (Asmaraty, Glory, Warrior) */}
        <BrandDivisionsSection />

        {/* 3. About Us & Four Decades of Arabian Shipbuilding Mastery */}
        <AboutUsHomeSection />

        {/* 4. Ajman Shipyard & Drydock Atelier Facilities */}
        <ShipyardRefitSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Chairman's Vision & Leadership Message */}
        <ChairmanSection />

        {/* 6. Latest News & Shipyard Dispatches */}
        <JournalHomeSection />

        {/* 7. Words from Our Owners & Captains Testimonial Carousel */}
        <TestimonialCarouselSection />

        {/* 8. Private Commission & Drydock Inquiries (Ajman & Dubai Consultation) */}
        <CtaVideoSection onOpenEnquiry={handleOpenEnquiry} />
      </main>

      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Interactive VIP Consultation Drawer */}
      <VipEnquiryModal
        isOpen={enquiryOpen}
        onClose={handleCloseEnquiry}
        preselectedYacht={preselectedYacht}
      />
    </>
  );
}
