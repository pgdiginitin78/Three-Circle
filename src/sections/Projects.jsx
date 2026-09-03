import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { landmarkProjects, completedContracts } from "../data/completedProjectsData";

function SvgLocation() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-1 text-[#D4AF37] shrink-0"
    >
      <path
        d="M12 21C16 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 8 17 12 21Z"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="3" fill="#D4AF37" />
    </svg>
  );
}

function SvgArrowUpRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("landmark");

  return (
    <section
      id="projects"
      className="relative w-full bg-white border-b border-black/[0.06] text-[#111111] py-16 sm:py-24 lg:py-28 overflow-hidden font-body"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        
        <motion.div
          className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="font-display text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-[#B8860B] uppercase">
                Executed Track Record
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111111] uppercase leading-tight m-0">
              Completed <span className="text-[#D4AF37]">Projects.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center p-1 bg-[#FAFAFA] border border-black/[0.08] rounded-full">
              <button
                onClick={() => setActiveTab("landmark")}
                className={`px-4 py-2 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "landmark"
                    ? "bg-[#111111] text-white shadow-sm"
                    : "text-[#666666] hover:text-[#111111]"
                }`}
              >
                Landmark Works (6)
              </button>
              <button
                onClick={() => setActiveTab("infrastructure")}
                className={`px-4 py-2 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "infrastructure"
                    ? "bg-[#111111] text-white shadow-sm"
                    : "text-[#666666] hover:text-[#111111]"
                }`}
              >
                Infrastructure Directory (24)
              </button>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#111111] font-display text-xs font-extrabold uppercase tracking-wider hover:bg-[#111111] hover:text-white transition-all duration-300 shadow-sm group"
            >
              <span>View All</span>
              <SvgArrowUpRight />
            </Link>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "landmark" ? (
            <motion.div
              key="landmark-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left"
            >
              {landmarkProjects.map((project, index) => (
                <motion.div
                  key={project.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex flex-col bg-[#FAFAFA] border border-black/[0.08] rounded-2xl overflow-hidden hover:border-[#D4AF37]/60 hover:shadow-[0_16px_40px_rgba(212,175,55,0.12)] transition-all duration-300"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      <span className="font-mono text-xs font-bold text-[#D4AF37] tracking-wider">
                        {project.num}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-black/[0.08]">
                      <span className="font-mono text-[10px] font-bold text-[#111111] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-1 text-xs text-[#777777] font-medium mb-2">
                        <SvgLocation />
                        <span>{project.location}</span>
                      </div>

                      <h3 className="font-display text-base sm:text-lg font-bold uppercase text-[#111111] leading-snug tracking-tight group-hover:text-[#D4AF37] transition-colors m-0">
                        {project.title}
                      </h3>
                    </div>

                    <div className="pt-3 border-t border-black/[0.06]">
                      <span className="text-[11px] font-mono text-[#888888] uppercase block mb-1">
                        Scope of Work:
                      </span>
                      <p className="text-xs sm:text-sm text-[#555552] leading-relaxed m-0">
                        {project.scope}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="infrastructure-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left"
            >
              {completedContracts.slice(0, 6).map((contract, index) => (
                <motion.div
                  key={contract.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                  className="group bg-white border border-black/[0.08] rounded-xl p-4 sm:p-5 flex flex-col justify-between gap-3 hover:border-[#D4AF37]/60 hover:shadow-[0_12px_32px_rgba(212,175,55,0.12)] transition-all duration-300"
                >
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-display text-[11px] font-extrabold text-[#D4AF37] tracking-wider uppercase leading-snug">
                        {contract.client}
                      </span>
                      <div className="flex flex-wrap items-center justify-end gap-1 shrink-0">
                        <span className="font-mono text-[9px] font-bold bg-[#D4AF37]/10 text-[#B8860B] border border-[#D4AF37]/25 px-2 py-0.5 rounded">
                          {contract.category}
                        </span>
                        {contract.code && (
                          <span className="font-mono text-[9px] font-medium bg-[#FAFAFA] border border-black/[0.08] text-[#666666] px-1.5 py-0.5 rounded">
                            {contract.code}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="font-display text-sm font-bold text-[#111111] leading-snug group-hover:text-[#D4AF37] transition-colors m-0">
                      {contract.title}
                    </h3>

                    <div className="flex items-start gap-1 text-xs text-[#555552] leading-tight">
                      <SvgLocation />
                      <span className="font-normal">{contract.location}</span>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-black/[0.06] flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] text-[#777777] font-medium">Valuation:</span>
                      <span className="font-mono text-xs font-bold text-[#B8860B] bg-[#D4AF37]/10 px-2 py-0.5 rounded">
                        {contract.value}
                      </span>
                    </div>

                    <div className="flex items-start justify-between text-xs gap-2">
                      <span className="text-[11px] text-[#777777] font-medium shrink-0">Authority:</span>
                      <span className="font-medium text-[#222222] text-[11px] text-right leading-tight">
                        {contract.authority}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-14 sm:mt-18 bg-[#111111] text-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-left"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-[#D4AF37] uppercase block mb-1">
              National Infrastructure & Maritime Works
            </span>
            <h4 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white m-0">
              Over 24+ Government & Corporate Infrastructure Works Delivered
            </h4>
          </div>

          <Link
            to="/projects"
            className="shrink-0 px-7 py-3.5 rounded-full bg-[#D4AF37] text-[#111111] font-display text-xs font-extrabold uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-lg"
          >
            Explore Complete Directory
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
