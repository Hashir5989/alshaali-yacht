"use client";

import { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

export default function ContactForm({ presetYacht = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: presetYacht || "General Inquiry",
    timeframe: "Immediate / Next 6 Months",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "A valid private email is required";
    }
    if (!formData.phone.trim()) newErrors.phone = "Contact telephone is required";
    if (!formData.message.trim()) newErrors.message = "Please include your message or inquiry notes";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate luxury concierge dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "General Inquiry",
        timeframe: "Immediate / Next 6 Months",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="bg-white p-8 sm:p-10 lg:p-12 border border-[#E8E5DF] shadow-sm">
      {isSuccess ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 bg-[#FAF9F6] border border-[#B49A76] rounded-full mx-auto flex items-center justify-center text-[#B49A76]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-3xl font-light text-[#17232B]">
            Inquiry Dispatched to Private Office
          </h3>
          <p className="font-sans text-sm text-[#777B7D] max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. A Senior Client Advisor from our Monaco Private Client Office will review your details with strict confidentiality and contact you within four business hours.
          </p>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="mt-6 inline-flex font-sans text-xs uppercase tracking-widest text-[#B49A76] hover:text-[#17232B] font-semibold underline underline-offset-4"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#B49A76] font-semibold">
              Private Client Register
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#17232B]">
              Confidential Yacht Consultation
            </h3>
            <p className="font-sans text-xs text-[#777B7D]">
              All inquiries are managed under strict nondisclosure protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-xs font-sans uppercase tracking-wider text-[#17232B] font-medium">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Lord / Lady / Mr / Ms..."
                className={`w-full bg-[#FAF9F6] border ${
                  errors.name ? "border-red-400" : "border-[#E8E5DF]"
                } px-4 py-3 text-xs font-sans text-[#17232B] focus:outline-none focus:border-[#B49A76] transition-colors`}
              />
              {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-xs font-sans uppercase tracking-wider text-[#17232B] font-medium">
                Confidential Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="client@domaine.com"
                className={`w-full bg-[#FAF9F6] border ${
                  errors.email ? "border-red-400" : "border-[#E8E5DF]"
                } px-4 py-3 text-xs font-sans text-[#17232B] focus:outline-none focus:border-[#B49A76] transition-colors`}
              />
              {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="space-y-2">
              <label className="block text-xs font-sans uppercase tracking-wider text-[#17232B] font-medium">
                Telephone & Dial Code *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+377 ... / +44 ... / +1 ..."
                className={`w-full bg-[#FAF9F6] border ${
                  errors.phone ? "border-red-400" : "border-[#E8E5DF]"
                } px-4 py-3 text-xs font-sans text-[#17232B] focus:outline-none focus:border-[#B49A76] transition-colors`}
              />
              {errors.phone && <p className="text-[11px] text-red-500">{errors.phone}</p>}
            </div>

            {/* Vessel of Interest */}
            <div className="space-y-2">
              <label className="block text-xs font-sans uppercase tracking-wider text-[#17232B] font-medium">
                Vessel of Interest
              </label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full bg-[#FAF9F6] border border-[#E8E5DF] px-4 py-3 text-xs font-sans text-[#17232B] focus:outline-none focus:border-[#B49A76] transition-colors cursor-pointer"
              >
                <option value="General Inquiry">General Advisory Inquiry</option>
                <option value="Aurelia Ocean Luxury 85">Aurelia Ocean Luxury 85 (85m)</option>
                <option value="Aurelia Solaria 72">Aurelia Solaria 72 (72m)</option>
                <option value="Aurelia Grand Sport 55">Aurelia Grand Sport 55 (55m)</option>
                <option value="Aurelia Magellan 92 Explorer">Aurelia Magellan 92 Explorer (92m)</option>
                <option value="Aurelia Elysium 68 Flybridge">Aurelia Elysium 68 Flybridge (68m)</option>
                <option value="Aurelia Thalassa 110">Aurelia Thalassa 110 (110m)</option>
                <option value="Custom New Build Commission">Custom New Build Commission</option>
              </select>
            </div>
          </div>

          {/* Timeframe */}
          <div className="space-y-2">
            <label className="block text-xs font-sans uppercase tracking-wider text-[#17232B] font-medium">
              Acquisition Horizon
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Immediate / Next 6 Months",
                "Within 12-24 Months",
                "Future Build Reservation",
              ].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setFormData({ ...formData, timeframe: opt })}
                  className={`text-[11px] font-sans px-3 py-2.5 border transition-all text-left ${
                    formData.timeframe === opt
                      ? "border-[#B49A76] bg-[#FAF9F6] text-[#17232B] font-medium"
                      : "border-[#E8E5DF] text-[#777B7D] hover:border-[#17232B]"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-xs font-sans uppercase tracking-wider text-[#17232B] font-medium">
              Specific Requirements or Requested Meeting Location *
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please describe your cruising aspirations, preferred meeting location (Monaco, London, Fort Lauderdale, or onboard), or specific customization questions..."
              className={`w-full bg-[#FAF9F6] border ${
                errors.message ? "border-red-400" : "border-[#E8E5DF]"
              } px-4 py-3 text-xs font-sans text-[#17232B] focus:outline-none focus:border-[#B49A76] transition-colors resize-none`}
            />
            {errors.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#17232B] text-white hover:bg-[#B49A76] py-4 text-xs font-sans uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#B49A76]" />
                  <span>Connecting with Monaco Desk...</span>
                </>
              ) : (
                <>
                  <span>Dispatch Confidential Inquiry</span>
                  <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
