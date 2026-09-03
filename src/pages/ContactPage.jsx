import React, { useState } from "react";
import { motion } from "framer-motion";
import BlueprintGrid from "./AboutUs/BlueprintGrid";
import { FadeUpText } from "./AboutUs/AnimatedText";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRight,
} from "../components/Icons";

const requirementOptions = [
  { value: "building", label: "Building Construction & Infrastructure" },
  { value: "mining", label: "Mining, Crushing & Aggregate Supply" },
  { value: "excavation", label: "Bulk Earthworks & Excavation" },
  { value: "civil", label: "Civil Engineering & Structural Works" },
  { value: "other", label: "General Inquiry / Partnership" },
];

const contactCards = [
  {
    icon: MapPinIcon,
    label: "Corporate Office",
    title: "Headquarters",
    details: "Mumbai, Maharashtra, India / Dubai, United Arab Emirates",
  },
  {
    icon: MailIcon,
    label: "Direct Email",
    title: "info@3circles.in",
    details: "Our engineering and commercial team responds within 24 hours.",
    href: "mailto:info@3circles.in",
  },
  {
    icon: PhoneIcon,
    label: "Telephone & Hotline",
    title: "+91 22 0000 0000 / +971 4 000 0000",
    details: "Mon – Sat, 9:00 AM – 6:30 PM (IST / GST)",
    href: "tel:+912200000000",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirement: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section className="relative min-h-screen bg-[#FAFAFA] text-[#111111] pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 overflow-hidden font-body selection:bg-[#D4AF37] selection:text-white">
      {/* Background blueprint subtle mesh */}
      <BlueprintGrid className="opacity-40" />

      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        {/* Page Header Section */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20 text-left">
          <FadeUpText>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="font-display text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-[#B8860B] uppercase">
                Direct Inquiries & Tenders
              </span>
            </div>
          </FadeUpText>

          <FadeUpText delay={0.08}>
            <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight uppercase leading-[1.06] mb-4">
              Start A <span className="text-[#D4AF37]">Conversation.</span>
            </h1>
          </FadeUpText>

          <FadeUpText delay={0.14}>
            <p className="font-body text-sm sm:text-base md:text-lg text-[#555552] leading-relaxed max-w-2xl">
              Connect directly with 3 Circles for EPC delivery, civil
              construction, aggregate supply, and turnkey infrastructure
              projects.
            </p>
          </FadeUpText>
        </div>

        {/* Main Content Grid: Contact Details Left + Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* Left Column: Direct Info Cards & Reachout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-white border border-black/[0.08] rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col gap-6">
              <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#111111] border-b border-black/[0.06] pb-4">
                Corporate Contacts
              </h2>

              <div className="flex flex-col gap-6">
                {contactCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#B8860B] shrink-0 mt-0.5 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-display text-[10px] sm:text-[11px] font-bold tracking-wider text-[#B8860B] uppercase">
                          {card.label}
                        </span>
                        {card.href ? (
                          <a
                            href={card.href}
                            className="font-display text-sm sm:text-base font-bold text-[#111111] hover:text-[#D4AF37] transition-colors leading-snug my-0.5"
                          >
                            {card.title}
                          </a>
                        ) : (
                          <span className="font-display text-sm sm:text-base font-bold text-[#111111] leading-snug my-0.5">
                            {card.title}
                          </span>
                        )}
                        <p className="font-body text-xs text-[#666666] leading-relaxed">
                          {card.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="bg-gradient-to-br from-[#111111] to-[#1c1c1c] text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col gap-2">
              <span className="font-display text-[10px] font-extrabold tracking-[0.2em] text-[#D4AF37] uppercase">
                Execution Readiness
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                Fast-Track Commercial Response
              </h3>
              <p className="font-body text-xs text-white/75 leading-relaxed">
                Our estimation & project engineering departments provide
                itemized BOQ analysis and technical deployment timelines.
              </p>
            </div>
          </motion.div>

          {/* Right Column: High-Visibility Luxury Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 bg-white border border-black/[0.08] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.05)] text-left relative"
          >
            {/* Header in Card */}
            <div className="mb-8 border-b border-black/[0.06] pb-5">
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#111111]">
                Project Consultation Form
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#666666] mt-1">
                Fill in the details below to submit your project requirement
                directly to our team.
              </p>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-4 bg-[#D4AF37]/15 border border-[#D4AF37] rounded-xl text-center"
              >
                <h4 className="font-display text-sm font-bold text-[#111111] uppercase tracking-wide">
                  Thank You for Reaching Out
                </h4>
                <p className="font-body text-xs text-[#555552] mt-1">
                  Your inquiry has been received. A representative from 3
                  Circles will connect with you shortly.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-display text-xs font-bold text-[#222222] uppercase tracking-wide"
                  >
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#FAFAFA] border border-black/[0.12] rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-[#999999] focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="company"
                    className="font-display text-xs font-bold text-[#222222] uppercase tracking-wide"
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Larsen & Toubro / MIAL"
                    className="w-full bg-[#FAFAFA] border border-black/[0.12] rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-[#999999] focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-display text-xs font-bold text-[#222222] uppercase tracking-wide"
                  >
                    Email Address <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full bg-[#FAFAFA] border border-black/[0.12] rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-[#999999] focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="font-display text-xs font-bold text-[#222222] uppercase tracking-wide"
                  >
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98000 00000"
                    className="w-full bg-[#FAFAFA] border border-black/[0.12] rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-[#999999] focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Requirement Selector */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="requirement"
                  className="font-display text-xs font-bold text-[#222222] uppercase tracking-wide"
                >
                  Project Requirement / Sector{" "}
                  <span className="text-[#D4AF37]">*</span>
                </label>
                <select
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAFAFA] border border-black/[0.12] rounded-xl px-4 py-3 text-sm text-[#111111] focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-200 cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400 bg-white">
                    Select your project sector...
                  </option>
                  {requirementOptions.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="bg-white text-[#111111] py-1"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-display text-xs font-bold text-[#222222] uppercase tracking-wide"
                >
                  Message / Project Scope{" "}
                  <span className="text-[#D4AF37]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Provide brief details about location, scope of work, approximate quantity or project timeline..."
                  className="w-full bg-[#FAFAFA] border border-black/[0.12] rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-[#999999] focus:bg-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-display text-xs font-extrabold tracking-[0.2em] py-4 px-8 bg-[#111111] text-white hover:bg-[#D4AF37] hover:text-[#111111] rounded-full transition-all duration-300 shadow-md uppercase cursor-pointer group"
                >
                  <span>SEND INQUIRY</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
