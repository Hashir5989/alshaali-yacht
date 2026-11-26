"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-[#082B49] text-[#E8D5B5]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#DFCA9E] mb-2 font-medium">
            Al Shaali Marine &nbsp;·&nbsp; Legal Disclaimer
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#E8D5B5] font-light mb-8">
            Disclaimer
          </h1>
          <div className="space-y-6 text-sm text-[#E8D5B5]/80 leading-relaxed font-light">
            <p>
              The technical data, computer-generated visual renderings, speeds, range figures, and interior specifications presented on this website are for conceptual and illustrative purposes only.
            </p>
            <p>
              Actual vessel performance, dimensions, and capacities are finalized pursuant to binding contractual agreements, naval architecture engineering sign-offs, and final Lloyd&apos;s or TASNEEF sea trial certifications.
            </p>
            <p>
              Al Shaali Marine LLC reserves the right to modify specifications, engineering details, and finishes without prior notification as part of our continuous naval research and technological development.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
