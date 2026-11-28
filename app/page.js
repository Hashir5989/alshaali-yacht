"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CinematicHeroExperience from "@/components/CinematicHeroExperience";
import BrandDivisionsSection from "@/components/BrandDivisionsSection";
import StatementSection from "@/components/StatementSection";
import FleetSection from "@/components/FleetSection";
import SuperyachtSpotlight from "@/components/SuperyachtSpotlight";
import YachtHotspotExplorer from "@/components/YachtHotspotExplorer";
import InteractiveFleetComparator from "@/components/InteractiveFleetComparator";
import YachtConfigurator from "@/components/YachtConfigurator";
import ShipyardRefitSection from "@/components/ShipyardRefitSection";
import HeritageSection from "@/components/HeritageSection";
import JournalHomeSection from "@/components/JournalHomeSection";
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

        {/* 2. Specialized Brand Divisions (Asmaraty, Glory, Warrior, SYSC) */}
        <BrandDivisionsSection />

        {/* 3. Complete 2026 Fleet Collection with 3D Interactive Perspective Cards */}
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

        {/* 8. Ajman Drydocks & Shipyard Refit Engineering */}
        <ShipyardRefitSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 9. 45-Year Heritage Milestone Journey (1979 - 2026) */}
        <HeritageSection />

        {/* 10. The Logbook: Latest Dispatches & News from the Yard */}
        <JournalHomeSection />

        {/* 11. Atmospheric Video CTA & Direct Commission Booking */}
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
