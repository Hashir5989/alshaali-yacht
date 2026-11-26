"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-[#082B49] text-[#E8D5B5]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#DFCA9E] mb-2 font-medium">
            Al Shaali Marine &nbsp;·&nbsp; Corporate Details
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#E8D5B5] font-light mb-8">
            Impressum
          </h1>
          <div className="space-y-6 text-sm text-[#E8D5B5]/80 leading-relaxed font-light">
            <div>
              <strong className="block text-[#E8D5B5] text-base mb-1">Company:</strong>
              <p>Al Shaali Marine LLC (الشعالي مارين)</p>
              <p>Commercial Registration: Ajman Chamber of Commerce</p>
              <p>Founding Year: 1979</p>
            </div>
            <div>
              <strong className="block text-[#E8D5B5] text-base mb-1">Shipyard Headquarters:</strong>
              <p>Al Rashidiya Industrial Zone, Port of Ajman</p>
              <p>PO Box 244, Ajman, United Arab Emirates</p>
            </div>
            <div>
              <strong className="block text-[#E8D5B5] text-base mb-1">Contact:</strong>
              <p>Telephone: +971 6 742 2222</p>
              <p>Email: info@alshaalimarine.com / sales@alshaalimarine.com</p>
            </div>
            <div>
              <strong className="block text-[#E8D5B5] text-base mb-1">Governing Law:</strong>
              <p>Jurisdiction of the Courts of the Emirate of Ajman and Federal Laws of the United Arab Emirates.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
