import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTag from "../components/SectionTag";
import { landmarkProjects, completedContracts } from "../data/completedProjectsData";

gsap.registerPlugin(ScrollTrigger);

function SvgLocation() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-1 text-brand-gold shrink-0"
    >
      <path
        d="M12 21C16 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 8 17 12 21Z"
        stroke="var(--color-brand-gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="3" fill="var(--color-brand-gold)" />
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

function SvgCoins() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#B8860B] shrink-0"
    >
      <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M5 6v5c0 1.38 3.134 2.5 7 2.5s7-1.12 7-2.5V6" stroke="currentColor" strokeWidth="2" />
      <path d="M5 11v5c0 1.38 3.134 2.5 7 2.5s7-1.12 7-2.5v-5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SvgUser() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#B8860B] shrink-0"
    >
      <path
        d="M19 21C19 18.2386 15.866 16 12 16C8.13401 16 5 18.2386 5 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SvgArrowRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("landmark");
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = containerRef.current;
      if (!el) return;

      const tag = el.querySelector(".gsap-projects-tag");
      const title = el.querySelector(".gsap-projects-title");
      const tabs = el.querySelector(".gsap-projects-tabs");
      const cards = el.querySelectorAll(".gsap-projects-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      if (tag) {
        tl.fromTo(
          tag,
          { opacity: 0, y: 30, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.8, ease: "power2.out" }
        );
      }

      if (title) {
        tl.fromTo(
          title,
          { opacity: 0, y: 35, filter: "blur(14px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 2.2, ease: "power2.out" },
          "-=1.4"
        );
      }

      if (tabs) {
        tl.fromTo(
          tabs,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.8, ease: "power2.out" },
          "-=1.4"
        );
      }

      if (cards && cards.length > 0) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 45, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.8,
            stagger: 0.25,
            ease: "power2.out",
          },
          "-=1.2"
        );
      }

      const cardImgs = el.querySelectorAll(".gsap-projects-img");
      if (cardImgs && cardImgs.length > 0) {
        tl.fromTo(
          cardImgs,
          { scale: 1.28, opacity: 0.7, filter: "blur(4px)" },
          {
            scale: 1.0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 2.4,
            stagger: 0.25,
            ease: "power2.out",
          },
          "-=1.8"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full bg-white border-b border-brand-darkblue/[0.06] text-brand-darkblue pt-8 pb-8 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14 overflow-hidden font-body"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        
        <div className="mb-8 sm:mb-12 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 text-left">
          <div>
            <div className="gsap-projects-tag mb-3 sm:mb-5">
              <SectionTag text="Executed Track Record" />
            </div>
            <h2 className="gsap-projects-title font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-brand-darkblue uppercase leading-tight m-0">
              Completed Projects
            </h2>
          </div>

          <div className="gsap-projects-tabs flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="flex items-center p-1 bg-brand-white border border-brand-darkblue/[0.08] rounded-full max-w-full overflow-x-auto">
              <button
                onClick={() => setActiveTab("landmark")}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  activeTab === "landmark"
                    ? "bg-brand-darkblue text-white shadow-sm"
                    : "text-brand-darkblue/70 hover:text-brand-darkblue"
                }`}
              >
                Landmark Works (6)
              </button>
              <button
                onClick={() => setActiveTab("infrastructure")}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  activeTab === "infrastructure"
                    ? "bg-brand-darkblue text-white shadow-sm"
                    : "text-brand-darkblue/70 hover:text-brand-darkblue"
                }`}
              >
                Infrastructure Directory (24)
              </button>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-brand-gold text-brand-darkblue font-display text-[11px] sm:text-xs font-extrabold uppercase tracking-wider hover:bg-brand-darkblue hover:text-white transition-all duration-300 shadow-sm group whitespace-nowrap"
            >
              <span>View All</span>
              <SvgArrowUpRight />
            </Link>
          </div>
        </div>

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
                  className="gsap-projects-card group flex flex-col bg-brand-white border border-brand-darkblue/[0.08] rounded-2xl overflow-hidden hover:border-brand-gold/60 hover:shadow-[0_16px_40px_rgba(212,175,55,0.12)] transition-all duration-300"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="gsap-projects-img w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-brand-darkblue/[0.08]">
                      <span className="font-mono text-[10px] font-bold text-brand-darkblue uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-1 text-xs text-brand-darkblue/70 font-medium mb-2">
                        <SvgLocation />
                        <span>{project.location}</span>
                      </div>

                      <h3 className="font-display text-base sm:text-lg font-bold uppercase text-brand-darkblue leading-snug tracking-tight group-hover:text-brand-gold transition-colors m-0">
                        {project.title}
                      </h3>
                    </div>

                    <div className="pt-3 border-t border-brand-darkblue/[0.06]">
                      <span className="text-[11px] font-mono text-brand-darkblue/70 uppercase block mb-1">
                        Scope of Work:
                      </span>
                      <p className="text-xs sm:text-sm text-brand-darkblue/70 leading-relaxed m-0">
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left"
            >
              {completedContracts.slice(0, 6).map((contract, index) => (
                <motion.div
                  key={contract.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                  className="gsap-projects-card group flex flex-col bg-white border border-brand-darkblue/[0.08] rounded-2xl overflow-hidden hover:border-brand-gold/60 hover:shadow-[0_16px_40px_rgba(212,175,55,0.12)] transition-all duration-300"
                >
                  {contract.image && (
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 border-b border-brand-darkblue/[0.04]">
                      <img
                        src={contract.image}
                        alt={contract.title}
                        className="gsap-projects-img w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display text-[11px] font-bold bg-transparent text-[#B8860B] border border-amber-300/80 px-3 py-1 rounded-md tracking-wider">
                          {contract.category}
                        </span>
                        {contract.code && (
                          <span className="font-mono text-[11px] font-semibold bg-[#F0F4F8] text-[#5A6E85] border border-slate-200/60 px-2.5 py-1 rounded-md">
                            {contract.code}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-sm sm:text-base font-semibold text-brand-darkblue leading-snug tracking-tight group-hover:text-brand-gold transition-colors line-clamp-2 m-0 min-h-[2.5rem] flex items-center">
                        {contract.title}
                      </h3>

                      <div className="flex items-center gap-1 text-xs text-brand-darkblue/70 font-medium">
                        <SvgLocation />
                        <span className="truncate">{contract.location}</span>
                      </div>
                    </div>

                    <div className="pt-3.5 border-t border-brand-darkblue/[0.08] flex items-center justify-between gap-1.5">
                      {/* Temporarily hidden Valuation section */}
                      {/* 
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-7 h-7 rounded-md bg-transparent border border-amber-300/80 flex items-center justify-center shrink-0">
                          <SvgCoins />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold leading-none mb-0.5">
                            Valuation
                          </span>
                          <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 truncate">
                            {contract.value}
                          </span>
                        </div>
                      </div>

                      <div className="w-[1px] h-7 bg-slate-200/80 shrink-0 mx-0.5" />
                      */}

                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <div className="w-7 h-7 rounded-md bg-transparent border border-amber-300/80 flex items-center justify-center shrink-0">
                          <SvgUser />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold leading-none mb-0.5">
                            Authority
                          </span>
                          <span
                            className="font-display text-[11px] font-bold text-[#0B3C73] leading-tight line-clamp-2"
                            title={contract.authority}
                          >
                            {contract.authority}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

       

      </div>
    </section>
  );
}
