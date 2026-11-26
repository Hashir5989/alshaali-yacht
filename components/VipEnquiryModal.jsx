"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, FileDown, Shield, Send, PhoneCall } from "lucide-react";
import { companyInfo } from "@/data/yachts";

export default function VipEnquiryModal({ isOpen, onClose, preselectedYacht = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    yachtInterest: preselectedYacht || "AS 130 Superyacht",
    enquiryType: "New Build Commission",
    deliveryTimeline: "2026/2027 Season",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99990] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#071429]/85 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl bg-[#091A36] border border-white/15 rounded-sm p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] text-[#F0EBE0] my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-[#C5A880] transition-colors p-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10 px-4">
                <div className="w-16 h-16 rounded-full border border-[#C5A880] flex items-center justify-center mx-auto mb-6 text-[#C5A880]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C5A880] mb-2">
                  Commission Inquiry Received
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F0EBE0] mb-4">
                  Thank You, {formData.name || "Esteemed Guest"}
                </h3>
                <p className="text-[#F0EBE0]/70 max-w-md mx-auto text-sm leading-relaxed mb-8">
                  Your private dossier has been dispatched to the Managing Director and Chief Naval Architect at Al Shaali Marine. A confidential consultation will follow within 12 hours.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#brochure"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Downloading Al Shaali Marine 2026 Fleet Compendium (PDF)...");
                    }}
                    className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Fleet Dossier (PDF)</span>
                  </a>
                  <button onClick={handleReset} className="btn-outline-gold w-full sm:w-auto">
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                    <p className="font-sans text-[10.5px] tracking-[0.3em] uppercase text-[#C5A880]">
                      Confidential Advisory · Ajman Shipyard
                    </p>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F0EBE0]">
                    Request Private Consultation
                  </h3>
                  <p className="text-[#F0EBE0]/60 text-xs sm:text-sm mt-2">
                    Engage with our naval architects to commission a bespoke superyacht or schedule a private shipyard walk-through.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-[#F0EBE0]/60 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="His Excellency / Sir / Madam"
                        className="w-full bg-[#071429] border border-white/10 px-4 py-3 text-sm text-[#F0EBE0] placeholder:text-white/20 focus:border-[#C5A880] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-[#F0EBE0]/60 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@familyoffice.ae"
                        className="w-full bg-[#071429] border border-white/10 px-4 py-3 text-sm text-[#F0EBE0] placeholder:text-white/20 focus:border-[#C5A880] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-[#F0EBE0]/60 mb-1.5">
                        Telephone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full bg-[#071429] border border-white/10 px-4 py-3 text-sm text-[#F0EBE0] placeholder:text-white/20 focus:border-[#C5A880] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-[#F0EBE0]/60 mb-1.5">
                        Vessel of Interest
                      </label>
                      <select
                        value={formData.yachtInterest}
                        onChange={(e) => setFormData({ ...formData, yachtInterest: e.target.value })}
                        className="w-full bg-[#071429] border border-white/10 px-4 py-3 text-sm text-[#F0EBE0] focus:border-[#C5A880] focus:outline-none transition-colors"
                      >
                        <option value="AS 130 Superyacht">AS 130 Tri-Deck Superyacht (40m / 130ft)</option>
                        <option value="AS 100 Superyacht">AS 100 Mega Yacht (30m / 100ft)</option>
                        <option value="AS 88 Flybridge">AS 88 Flybridge Cruiser (27m / 88ft)</option>
                        <option value="AS 68 Flybridge">AS 68 Mediterranean Cruiser (21m / 68ft)</option>
                        <option value="Warrior 43">Warrior 43 High Performance Cruiser</option>
                        <option value="Shark 36">Shark 36 Offshore Tournament Sportfish</option>
                        <option value="Dolphin 33">Dolphin 33 Centre Console Dayboat</option>
                        <option value="Shipyard Refit">Ajman Drydock Custom Refit / Overhaul</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-[#F0EBE0]/60 mb-1.5">
                      Private Advisory Requirements & Desired Berthing
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify bespoke layout modifications, engine options, or drydock haul-out dates..."
                      className="w-full bg-[#071429] border border-white/10 px-4 py-3 text-sm text-[#F0EBE0] placeholder:text-white/20 focus:border-[#C5A880] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[10px] text-[#F0EBE0]/40">
                      <Shield className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>NDAs & Non-Disclosure Strictly Respected</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span>Transmitting Dossier...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Private Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
