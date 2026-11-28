import "./globals.css";
import CurtainPreloader from "@/components/CurtainPreloader";
import CustomCursor from "@/components/CustomCursor";
import OceanAtmosphereCanvas from "@/components/OceanAtmosphereCanvas";
import ScrollCompass from "@/components/ScrollCompass";
import PageTransitionManager from "@/components/PageTransitionManager";

export const viewport = {
  themeColor: "#082B49",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Al Shaali Marine | Luxury Superyachts & Shipyard UAE · Est. 1979",
  description:
    "Official Al Shaali Marine shipyard group portal. Pioneers of Arabian luxury superyachts, AS 130 tri-deck builds, offshore cruisers, and Ajman drydock refits since 1979.",
  keywords:
    "Al Shaali Marine, AS Marine, superyachts UAE, Dubai yacht builder, Ajman shipyard, AS 130, AS 100, luxury yachts, yacht refit UAE",
  icons: {
    icon: [
      { url: "/assets/favicon.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-[#102A43] antialiased selection:bg-[#176B9A] selection:text-white flex flex-col min-h-screen relative font-sans">
        {/* Preloader & Reticle Cursor */}
        <CurtainPreloader />
        <CustomCursor />

        {/* Shimmering Maritime Atmosphere Canvas */}
        <OceanAtmosphereCanvas />

        {/* Live Scroll Compass Rose Instrument */}
        <ScrollCompass />

        {/* Cinematic Luxury Page-to-Page Transition Manager */}
        <PageTransitionManager>
          {children}
        </PageTransitionManager>
      </body>
    </html>
  );
}
