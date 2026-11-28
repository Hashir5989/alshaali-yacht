"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-[#12352D] text-[#F5F0E5]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C6A66B] mb-2 font-medium">
            Al Shaali Marine &nbsp;·&nbsp; Privacy Policy
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#F5F0E5] font-light mb-8">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-sm text-[#F5F0E5]/80 leading-relaxed font-light">
            <p>
              Al Shaali Marine LLC is committed to protecting the privacy of our sovereign patrons, clients, brokers, and visitors. This policy outlines how information gathered through this portal is handled in full compliance with United Arab Emirates data protection regulations.
            </p>
            <h2 className="font-serif text-2xl text-[#F5F0E5] pt-4">Data Collection and Use</h2>
            <p>
              When submitting an enquiry, requesting a vessel specification, or subscribing to The Logbook, we collect contact information solely for direct communication and shipyard appointments. Your information is never sold or transferred to external third parties.
            </p>
            <h2 className="font-serif text-2xl text-[#F5F0E5] pt-4">Confidentiality and NDAs</h2>
            <p>
              Custom superyacht commissions and drydock refits frequently require non-disclosure agreements. We uphold strict institutional privacy regarding ownership, technical specifications, and delivery dates.
            </p>
            <h2 className="font-serif text-2xl text-[#F5F0E5] pt-4">Contact</h2>
            <p>
              Inquiries regarding privacy or data deletion may be directed to our headquarters at <a href="mailto:privacy@alshaalimarine.com" className="text-[#C6A66B] underline">privacy@alshaalimarine.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
