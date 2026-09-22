import React from "react";
import { motion } from "framer-motion";
import SectionTag from "../../components/SectionTag";

const leftAlliances = [
  {
    name: "Ketan Constructions Limited",
    role: "Partner for Turnkey Infrastructure & Civil Engineering",
    icon: (
      // Tower Crane & High-Rise Building Construction
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Ground */}
        <line x1="6" y1="58" x2="58" y2="58" strokeWidth="3" />
        {/* Building Blocks */}
        <rect x="12" y="32" width="16" height="26" rx="1.5" fill="currentColor" fillOpacity="0.14" />
        <line x1="16" y1="38" x2="18" y2="38" />
        <line x1="22" y1="38" x2="24" y2="38" />
        <line x1="16" y1="44" x2="18" y2="44" />
        <line x1="22" y1="44" x2="24" y2="44" />
        <line x1="16" y1="50" x2="18" y2="50" />
        <line x1="22" y1="50" x2="24" y2="50" />
        {/* Crane Tower Mast */}
        <line x1="38" y1="58" x2="38" y2="12" strokeWidth="2.6" />
        <line x1="33" y1="58" x2="43" y2="58" strokeWidth="2" />
        {/* Lattice Truss Braces */}
        <line x1="38" y1="20" x2="44" y2="26" />
        <line x1="38" y1="32" x2="44" y2="38" />
        <line x1="38" y1="44" x2="44" y2="50" />
        {/* Horizontal Jib Arm */}
        <line x1="16" y1="12" x2="56" y2="12" strokeWidth="2.6" />
        {/* Counter-jib Weight */}
        <rect x="50" y="8" width="6" height="8" rx="1" fill="currentColor" />
        {/* Crane Tower Peak & Cables */}
        <polygon points="38,4 32,12 44,12" fill="currentColor" fillOpacity="0.3" />
        <line x1="38" y1="4" x2="20" y2="12" />
        <line x1="38" y1="4" x2="52" y2="12" />
        {/* Trolley & Hoisting Cable */}
        <rect x="25" y="11" width="4" height="3" fill="currentColor" />
        <line x1="27" y1="14" x2="27" y2="26" strokeDasharray="2.5 1.5" />
        <path d="M25 26h4l-2 4a2 2 0 1 1-3-2" strokeWidth="2" />
        <rect x="22" y="30" width="8" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    name: "Tridel Technologies",
    role: "Partner for Marine Infrastructure & Environmental Solutions",
    icon: (
      // Tech Circuit Cog & Environmental Marine Node
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Gear Teeth & Ring */}
        <circle cx="28" cy="34" r="9" fill="currentColor" fillOpacity="0.18" strokeWidth="2.5" />
        <path d="M28 16v4M28 48v4M10 34h4M42 34h4M15 21l3 3M38 44l3 3M15 47l3-3M38 21l3-3" strokeWidth="2.5" />
        <circle cx="28" cy="34" r="4.5" fill="currentColor" />
        {/* Digital Connectivity Circuits */}
        <path d="M44 22h8v6" />
        <circle cx="52" cy="28" r="2.5" fill="currentColor" />
        <path d="M44 44h8v-6" />
        <circle cx="52" cy="38" r="2.5" fill="currentColor" />
        <path d="M12 24h-4v6" />
        <circle cx="8" cy="30" r="2" fill="currentColor" />
        {/* Environmental Marine Water Wave */}
        <path d="M24 10c4 0 8 4 8 8s-8 9-8 9-8-5-8-9 4-8 8-8z" fill="currentColor" fillOpacity="0.3" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    name: "Radius Equipments",
    role: "Partner for Construction Equipment & Crushing Solutions",
    icon: (
      // Hydraulic Excavator & Heavy Earthmoving Machinery
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Continuous Track Base */}
        <rect x="8" y="44" width="34" height="10" rx="5" fill="currentColor" fillOpacity="0.2" strokeWidth="2.4" />
        <circle cx="14" cy="49" r="2.5" fill="currentColor" />
        <circle cx="25" cy="49" r="2.5" fill="currentColor" />
        <circle cx="36" cy="49" r="2.5" fill="currentColor" />
        {/* Heavy Cabin Body */}
        <path d="M12 44V31h14l8 6v7H12z" fill="currentColor" fillOpacity="0.25" strokeWidth="2.2" />
        <rect x="22" y="33" width="8" height="6" rx="1" fill="white" fillOpacity="0.85" />
        {/* Articulated Hydraulic Boom */}
        <line x1="30" y1="36" x2="44" y2="18" strokeWidth="3.2" />
        <circle cx="44" cy="18" r="2" fill="currentColor" />
        {/* Stick Arm */}
        <line x1="44" y1="18" x2="53" y2="33" strokeWidth="3" />
        <circle cx="53" cy="33" r="2" fill="currentColor" />
        {/* Heavy Bucket with Teeth */}
        <path d="M53 33l6 2-2 8-8-2z" fill="currentColor" strokeWidth="2" />
        <path d="M57 43l2 3M54 42l1 3M51 41l1 3" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    name: "3 CIIRCLES OPC P LTD",
    role: "Partner for Building Construction, Civil Works & Infrastructure",
    icon: (
      // Architectural Building & Construction Landmark
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Ground */}
        <line x1="6" y1="58" x2="58" y2="58" strokeWidth="3" />
        {/* Primary Landmark Building */}
        <rect x="14" y="24" width="22" height="34" rx="2" fill="currentColor" fillOpacity="0.2" strokeWidth="2.4" />
        {/* Structural Windows Grid */}
        <rect x="18" y="29" width="4" height="4" rx="0.5" fill="currentColor" />
        <rect x="25" y="29" width="4" height="4" rx="0.5" fill="currentColor" />
        <rect x="18" y="36" width="4" height="4" rx="0.5" fill="currentColor" />
        <rect x="25" y="36" width="4" height="4" rx="0.5" fill="currentColor" />
        <rect x="18" y="43" width="4" height="4" rx="0.5" fill="currentColor" />
        <rect x="25" y="43" width="4" height="4" rx="0.5" fill="currentColor" />
        {/* Entrance Arch */}
        <path d="M22 58v-6h6v6" fill="white" />
        {/* Modern Tower Spire & Crane */}
        <polygon points="40,58 40,30 50,20 50,58" fill="currentColor" fillOpacity="0.12" strokeWidth="2.2" />
        <line x1="50" y1="20" x2="50" y2="8" strokeWidth="2.2" />
        <circle cx="50" cy="8" r="1.5" fill="currentColor" />
        <line x1="30" y1="12" x2="46" y2="12" strokeWidth="2" strokeDasharray="2 2" />
        <line x1="36" y1="12" x2="36" y2="24" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const rightAlliances = [
  {
    name: "SF Marina",
    role: "Partner for Floating Concrete & Marine Structures",
    icon: (
      // Marine Vessel & Floating Concrete Pontoons
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Water Waves */}
        <path d="M6 52c4-2 8-2 12 0s8 2 12 0 8-2 12 0 8 2 12 0" strokeWidth="2.5" />
        <path d="M10 58c4-2 8-2 12 0s8 2 12 0 8-2 12 0" strokeWidth="2" strokeOpacity="0.5" />
        {/* Ship Hull */}
        <path d="M10 44l6 6h32l8-12H16l-3 4H8z" fill="currentColor" fillOpacity="0.16" strokeWidth="2.4" />
        {/* Bridge / Superstructure */}
        <rect x="20" y="30" width="16" height="10" rx="1" fill="currentColor" fillOpacity="0.25" />
        <rect x="24" y="24" width="8" height="6" rx="1" />
        {/* Floating Modules */}
        <rect x="40" y="32" width="10" height="6" rx="0.5" fill="currentColor" />
        {/* Deck Crane Arm */}
        <line x1="28" y1="24" x2="38" y2="14" strokeWidth="2.5" />
        <line x1="38" y1="14" x2="42" y2="22" />
        <circle cx="38" cy="14" r="2" fill="currentColor" />
        {/* Mast */}
        <line x1="28" y1="24" x2="28" y2="12" />
        <line x1="24" y1="15" x2="32" y2="15" />
      </svg>
    ),
  },
  {
    name: "Lombardi Engineering",
    role: "Partner for Engineering Consultancy & Design Services",
    icon: (
      // Safety Hard Hat & Engineering Cog
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Gear Cog Lower Half */}
        <path d="M16 42a18 18 0 0 0 32 0" strokeWidth="2.5" />
        <path d="M18 42l-4 3M24 48l-2 5M32 50v5M40 48l2 5M46 42l4 3" strokeWidth="2.2" />
        {/* Engineer Hard Hat Dome */}
        <path d="M16 36c0-9 7-16 16-16s16 7 16 16H16z" fill="currentColor" fillOpacity="0.22" strokeWidth="2.5" />
        {/* Hard Hat Brim */}
        <path d="M12 36h40c2 0 3 1.5 2 3l-2 2H12l-2-2c-1-1.5 0-3 2-3z" fill="currentColor" />
        {/* Helmet Ribs */}
        <path d="M30 20v16M34 20v16" strokeWidth="1.8" stroke="white" />
        <path d="M24 23v13M40 23v13" strokeWidth="1.8" stroke="white" />
      </svg>
    ),
  },
  {
    name: "SBD Infra-Tech Pvt. Ltd.",
    role: "Partner for Roads, Bridges & Infrastructure Development",
    icon: (
      // Cable-Stayed Suspension Bridge & Highway Road
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Waterline */}
        <line x1="4" y1="56" x2="60" y2="56" strokeWidth="2.2" />
        {/* Highway Deck */}
        <path d="M4 42h56l-6 10H10L4 42z" fill="currentColor" fillOpacity="0.2" strokeWidth="2.2" />
        <line x1="20" y1="46" x2="44" y2="46" strokeDasharray="3 2" strokeWidth="1.6" stroke="white" />
        {/* Main Pylon */}
        <polygon points="32,8 35,42 29,42" fill="currentColor" fillOpacity="0.4" strokeWidth="2.2" />
        <circle cx="32" cy="9" r="2" fill="currentColor" />
        {/* Cable Stays Left */}
        <line x1="32" y1="14" x2="14" y2="42" strokeWidth="1.5" />
        <line x1="32" y1="22" x2="20" y2="42" strokeWidth="1.5" />
        <line x1="32" y1="30" x2="26" y2="42" strokeWidth="1.5" />
        {/* Cable Stays Right */}
        <line x1="32" y1="14" x2="50" y2="42" strokeWidth="1.5" />
        <line x1="32" y1="22" x2="44" y2="42" strokeWidth="1.5" />
        <line x1="32" y1="30" x2="38" y2="42" strokeWidth="1.5" />
        {/* Foundation Pier */}
        <rect x="29" y="52" width="6" height="4" fill="currentColor" />
      </svg>
    ),
  },
];


export default function StrategicAlliances() {
  return (
    <section
      id="alliances"
      className="relative py-12 sm:py-14 md:py-16 bg-[#faf9f6] border-t border-brand-darkblue/[0.08] overflow-hidden"
    >
      {/* Halftone Dot Matrix Pattern in Top-Right Corner (Exact slide aesthetic) */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:16px_16px] rounded-full blur-[0.3px] opacity-70 pointer-events-none -z-0 transform translate-x-1/4 -translate-y-1/4" />

      {/* Subtle Warm Amber Ambient Backdrop Glow */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header matching Website Theme */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-12"
        >
          {/* Eyebrow Section Tag */}
          <div className="-mb-1 sm:-mb-2">
            <SectionTag text="STRATEGIC COLLABORATION" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-10">
            <div>
              {/* Main Headline matching website theme */}
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-medium tracking-tight uppercase leading-tight m-0">
                <span className="text-brand-darkblue">Strategic </span>
                Alliances
              </h2>
            </div>

            {/* Paragraph in Right Corner matching website paragraph theme */}
            <div className="max-w-md lg:max-w-xl">
              <p className="font-body text-xs sm:text-sm md:text-[14px] text-text-secondary leading-relaxed font-normal text-left m-0">
                Partnering with premier national and multinational specialists across turnkey civil engineering, marine infrastructure, specialized heavy machinery, and engineering design consultancy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2-Column Partner Layout (Matching the presentation slide) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-4 sm:gap-y-5">
          
          {/* Left Column (4 items) */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {leftAlliances.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.6, delay: 0.15 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative group cursor-pointer"
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  {/* Icon Card Box */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-white shadow-[0_6px_20px_rgba(1,6,52,0.05)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-brand-gold/40 group-hover:shadow-[0_10px_25px_rgba(212,175,55,0.18)] transition-all duration-300">
                    {partner.icon}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm sm:text-base font-bold text-brand-darkblue uppercase tracking-tight group-hover:text-brand-gold transition-colors duration-200 leading-snug">
                      {partner.name}
                    </h3>
                    <p className="font-body text-[11.5px] sm:text-xs text-text-secondary font-normal leading-relaxed mt-0.5">
                      {partner.role}
                    </p>
                  </div>
                </div>

                {/* Infographic Connector Line & End Dot (from slide) */}
                <div className="flex items-center pt-2 sm:pt-2.5">
                  <div className="flex-1 h-[1px] bg-slate-200/90 group-hover:bg-brand-gold/40 transition-colors duration-300" />
                  <span className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_6px_rgba(212,175,55,0.6)] group-hover:scale-130 transition-transform duration-300 shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column (3 items) */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {rightAlliances.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.6, delay: 0.25 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative group cursor-pointer"
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  {/* Icon Card Box */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-white shadow-[0_6px_20px_rgba(1,6,52,0.05)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-brand-gold/40 group-hover:shadow-[0_10px_25px_rgba(212,175,55,0.18)] transition-all duration-300">
                    {partner.icon}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm sm:text-base font-bold text-brand-darkblue uppercase tracking-tight group-hover:text-brand-gold transition-colors duration-200 leading-snug">
                      {partner.name}
                    </h3>
                    <p className="font-body text-[11.5px] sm:text-xs text-text-secondary font-normal leading-relaxed mt-0.5">
                      {partner.role}
                    </p>
                  </div>
                </div>

                {/* Infographic Connector Line & End Dot (from slide) */}
                <div className="flex items-center pt-2 sm:pt-2.5">
                  <div className="flex-1 h-[1px] bg-slate-200/90 group-hover:bg-brand-gold/40 transition-colors duration-300" />
                  <span className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_6px_rgba(212,175,55,0.6)] group-hover:scale-130 transition-transform duration-300 shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
