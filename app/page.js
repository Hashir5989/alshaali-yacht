"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CinematicHeroExperience from "@/components/CinematicHeroExperience";
import BrandDivisionsSection from "@/components/BrandDivisionsSection";
import AboutUsHomeSection from "@/components/AboutUsHomeSection";
import ShipyardRefitSection from "@/components/ShipyardRefitSection";
import ChairmanSection from "@/components/ChairmanSection";
import StatementSection from "@/components/StatementSection";
import FleetSection from "@/components/FleetSection";
import SuperyachtSpotlight from "@/components/SuperyachtSpotlight";
import YachtHotspotExplorer from "@/components/YachtHotspotExplorer";
import InteractiveFleetComparator from "@/components/InteractiveFleetComparator";
import YachtConfigurator from "@/components/YachtConfigurator";
import HeritageSection from "@/components/HeritageSection";

import JournalHomeSection from "@/components/JournalHomeSection";
import TestimonialCarouselSection from "@/components/TestimonialCarouselSection";
import CtaVideoSection from "@/components/CtaVideoSection";
import Footer from "@/components/Footer";
import VipEnquiryModal from "@/components/VipEnquiryModal";
import YachtDetailModal from "@/components/YachtDetailModal";

export default function HomePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [preselectedYacht, setPreselectedYacht] = useState("");
  const [selectedYachtDetail, setSelectedYachtDetail] = useState(null);

  const handleOpenEnquiry = (yachtName = "") => {
    setPreselectedYacht(yachtName);
    setEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
    setPreselectedYacht("");
  };

  const handleOpenYachtDetail = (yacht) => {
    setSelectedYachtDetail(yacht);
  };

  const handleCloseYachtDetail = () => {
    setSelectedYachtDetail(null);
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

        {/* 8. Complete 2026 Fleet Collection with 3D Interactive Perspective Cards */}
        <FleetSection
          onSelectYacht={handleOpenYachtDetail}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 3. Shipbuilding Statement & Animated Counting Metrics */}
        <StatementSection />

        {/* 4. Flagship Superyacht Spotlight (AS 130 & AS 100 Blueprint Spec Sheets) */}
        <SuperyachtSpotlight
          onOpenEnquiry={handleOpenEnquiry}
          onSelectYacht={handleOpenYachtDetail}
        />

        {/* 5. Interactive Yacht Hotspot Deck Inspection (Tri-Deck AS 130 Architectural Exploration) */}
        <YachtHotspotExplorer onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Dual-Vessel Interactive Fleet Specification Comparator */}
        <InteractiveFleetComparator onOpenEnquiry={handleOpenEnquiry} />

        {/* 7. Interactive Atelier Yacht Configurator (Liveries, Teak, Interior Moods) */}
        <YachtConfigurator onOpenEnquiry={handleOpenEnquiry} />

        {/* 8. 45-Year Heritage Milestone Journey (1979 - 2026) */}
        <HeritageSection />

        {/* 9. Atmospheric Video CTA & Direct Commission Booking */}
        <CtaVideoSection onOpenEnquiry={handleOpenEnquiry} />
      </main>

      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Interactive VIP Consultation Drawer */}
      <VipEnquiryModal
        isOpen={enquiryOpen}
        onClose={handleCloseEnquiry}
        preselectedYacht={preselectedYacht}
      />

      {/* Interactive Yacht Architectural Dossier Modal */}
      <YachtDetailModal
        isOpen={!!selectedYachtDetail}
        yacht={selectedYachtDetail}
        onClose={handleCloseYachtDetail}
        onOpenEnquiry={handleOpenEnquiry}
      />
    </>
  );
}
