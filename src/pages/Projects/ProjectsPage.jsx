import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  completedContracts,
  landmarkProjects,
} from "../../data/completedProjectsData";
import projectHeroVideo from "../../assets/completed-projects/projecthero.mp4";
import SectionTag from "../../components/SectionTag";
import { ArrowRight } from "../../components/Icons";

gsap.registerPlugin(ScrollTrigger);

const TOKENS = {
  "--ink": "#0F172A",
  "--paper": "#FFFFFF",
  "--brass": "var(--color-brand-gold)",
  "--brass-bright": "var(--color-brand-gold)",
  "--steel": "#0F172A",
  "--line": "rgba(21,20,15,0.12)",
  "--line-soft": "rgba(21,20,15,0.07)",
};

const STATS = [
  { numericValue: 24, prefix: "", suffix: "+", label: "Executed contracts" },
  { numericValue: 10000, prefix: "₹", suffix: "+ L", label: "Contract valuation", isFormatted: true },
  { numericValue: 6, prefix: "", suffix: "+", label: "Landmark works" },
  { numericValue: 100, prefix: "", suffix: "%", label: "Quality & safety" },
];

function StatCounter({ numericValue, isFormatted }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 35,
    stiffness: 80,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const val = Math.round(latest);
        ref.current.textContent = isFormatted
          ? val.toLocaleString("en-IN")
          : val.toString();
      }
    });
    return () => unsubscribe();
  }, [springValue, isFormatted]);

  return <span ref={ref} className="tabular-nums">0</span>;
}

function IconPin({ className = "" }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
    >
      <path
        d="M12 21C16 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 8 17 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconMark({ className = "" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M3 21H21M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21M9 9H10M9 13H10M9 17H10M14 9H15M14 13H15M14 17H15"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function useSmoothScroll() {
  const prefersReduced = useReducedMotion();
  useEffect(() => {
    if (prefersReduced) return undefined;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [prefersReduced]);
}

function Hero({ reduced }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      const tag = containerRef.current?.querySelector(".gsap-proj-tag");
      const titleLines = containerRef.current?.querySelectorAll(".gsap-proj-title-line");
      const desc = containerRef.current?.querySelector(".gsap-proj-desc");
      const stats = containerRef.current?.querySelector(".gsap-proj-stats");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        tag,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.4, delay: 0.3 }
      )
        .fromTo(
          titleLines,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.6,
            stagger: 0.35,
            ease: "power4.out",
          },
          "-=1.0"
        )
        .fromTo(
          desc,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.4 },
          "-=1.1"
        )
        .fromTo(
          stats,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.4 },
          "-=1.0"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="all-projects" className="relative overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={projectHeroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0F172A]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/60 via-[#0F172A]/25 to-transparent w-full md:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/15 via-transparent to-[#0F172A]/35" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25] z-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-soft) 1px,transparent 1px),linear-gradient(90deg,var(--line-soft) 1px,transparent 1px)",
          backgroundSize: "clamp(32px,4vw,72px) clamp(32px,4vw,72px)",
        }}
      />

      <div ref={containerRef} className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col px-5 pb-[clamp(2.5rem,6vw,5rem)] pt-[clamp(7.5rem,16vw,11rem)] sm:px-8 md:px-12 lg:px-16">
        <div className="gsap-proj-tag">
          <SectionTag text="Civil & infrastructure contracting — India" />
        </div>

        <h1 className="mt-4 mb-6 font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-white uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] max-w-4xl">
          <span className="block overflow-hidden whitespace-nowrap">
            <span className="gsap-proj-title-line inline-block text-white">
              ENGINEERING THE ARTERIES
            </span>
          </span>
          <span className="block overflow-hidden whitespace-nowrap">
            <span className="gsap-proj-title-line inline-block shimmer-text">
              OF INDIA&apos;S GROWTH
            </span>
          </span>
        </h1>

        <p className="gsap-proj-desc mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white/90 max-w-[550px] leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mb-2 sm:mb-4">
          Highways, maritime docks, heavy industrial plants and civic works,
          delivered to a single standard from survey to handover.
        </p>

        <div className="gsap-proj-stats mt-[clamp(1.75rem,3.5vw,3rem)] grid grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-10 gap-y-6 border-t border-[var(--line)] pt-[clamp(1.25rem,2.5vw,2rem)] sm:grid-cols-4 max-w-4xl">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className="font-display text-[clamp(1.5rem,2.5vw,2.4rem)] font-bold tracking-tight"
                style={{ color: "#FFFFFF" }}
              >
                {stat.prefix}
                <StatCounter numericValue={stat.numericValue} isFormatted={stat.isFormatted} />
                {stat.suffix}
              </span>
              <span className="font-mono text-[clamp(0.68rem,0.8vw,0.78rem)] text-[rgba(245,242,234,0.5)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LandmarkRow({ project, index }) {
  const reversed = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 gap-6 border-t border-[var(--line)] py-[clamp(2rem,4vw,3.5rem)] first:border-t-0 md:grid-cols-12 md:gap-10"
    >
      <div
        className={`md:col-span-7 ${reversed ? "md:order-2" : "md:order-1"}`}
      >
        <div className="relative aspect-[16/10] w-full  bg-[var(--line-soft)]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div
        className={`flex flex-col justify-center gap-3 md:col-span-5 ${reversed ? "md:order-1" : "md:order-2"
          }`}
      >
        <span className="font-mono text-[clamp(0.68rem,0.75vw,0.8rem)] text-[var(--brass)]">
          {`No. ${String(project.num).padStart(2, "0")}`}
        </span>
        <h3 className="font-display text-[clamp(1.3rem,2vw,1.9rem)] font-bold leading-snug text-[var(--ink)]">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-[clamp(0.8rem,0.9vw,0.9rem)] text-[var(--steel)]">
          <IconPin className="text-[var(--brass)]" />
          <span>{project.location}</span>
        </div>
        <p className="mt-1 max-w-[42ch] font-body text-[clamp(0.85rem,0.95vw,0.98rem)] leading-relaxed text-[rgba(21,20,15,0.7)]">
          {project.scope}
        </p>
      </div>
    </motion.div>
  );
}

import alibaugBeachHouseImg from "../../assets/completed-projects/alibaug-beach-house.jpg";
import anantUniversityImg from "../../assets/completed-projects/anant-university-ahmedabad.jpg";
import cprrAggregateImg from "../../assets/completed-projects/cprr-aggregate-tiruvallur.jpg";
import dfccCorridorImg from "../../assets/completed-projects/dfcc-corridor-virar.jpg";
import maltFactoryImg from "../../assets/completed-projects/malt-factory-dahanu.jpg";
import maneckjiCooperImg from "../../assets/completed-projects/maneckji-cooper-school-juhu.jpg";
import renewalRailImg from "../../assets/completed-projects/RenewalofRail.png";
import asphaltingRoadImg from "../../assets/completed-projects/AsphaltingofRoad.png";
import replacement25Img from "../../assets/completed-projects/Replacementof25.png";
import emergencyMonsoonImg from "../../assets/completed-projects/EmergenceMonsoon.png";
import devOfOpenImg from "../../assets/completed-projects/DevOfopen.png";
import shirodaImg from "../../assets/completed-projects/Shiroda.png";
import mazagonDockImg from "../../assets/completed-projects/mazagon-dock.jpg";
import cwcLogisticImg from "../../assets/completed-projects/cwc-logistic-park.jpg";

const FALLBACK_IMAGES = [
  renewalRailImg, asphaltingRoadImg, replacement25Img, emergencyMonsoonImg,
  devOfOpenImg, shirodaImg, dfccCorridorImg, cprrAggregateImg, mazagonDockImg,
  cwcLogisticImg, maltFactoryImg, alibaugBeachHouseImg, anantUniversityImg, maneckjiCooperImg
];

function ExecutedContractsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const halfLength = Math.ceil(completedContracts.length / 2);
  const leftColumnItems = completedContracts.slice(0, halfLength);
  const rightColumnItems = completedContracts.slice(halfLength);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = sectionRef.current;
      if (!el) return;

      const container = el.querySelector(".gsap-executed-container");
      const cards = el.querySelectorAll(".gsap-timeline-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      if (container) {
        tl.fromTo(
          container,
          { opacity: 0, y: 50, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 2.0, ease: "power2.out" }
        );
      }

      if (cards && cards.length > 0) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=1.6"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="completed-projects" className="bg-[#FAFBFD] pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-16 md:pb-20 border-t border-[var(--line)] font-body relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1700px] px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        
        {/* HEADER TOP ROW */}
        <div className="gsap-executed-container flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-8">
          <div>
            <SectionTag text="OUR WORK" className="mb-2" />
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-darkblue uppercase leading-tight mt-1">
              Executed contracts
            </h2>
            <p className="mt-2 max-w-xl font-body text-sm sm:text-base text-slate-500 leading-relaxed">
              Every contract on record, filed by scope of work.
            </p>
          </div>
        </div>

        {/* MAIN 2-COLUMN GOLDEN TIMELINE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-3.5 mb-8 sm:mb-10 relative z-10">

          {/* LEFT COLUMN */}
          <div className="relative flex flex-col gap-3">
            {/* Vertical Golden Timeline Track Line */}
            <div className="absolute left-[7px] top-6 bottom-6 w-[2px] bg-brand-gold/70 pointer-events-none z-0" />

            {leftColumnItems.map((contract, idx) => (
              <TimelineCard
                key={contract.id}
                contract={contract}
                index={idx}
              />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex flex-col gap-3">
            {/* Vertical Golden Timeline Track Line */}
            {rightColumnItems.length > 0 && (
              <div className="absolute left-[7px] top-6 bottom-6 w-[2px] bg-brand-gold/70 pointer-events-none z-0" />
            )}

            {rightColumnItems.map((contract, idx) => (
              <TimelineCard
                key={contract.id}
                contract={contract}
                index={halfLength + idx}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function TimelineCard({ contract, index }) {
  // Full project code (e.g., "MAZAGON DOCK LTD · 200507")
  const displayCode = contract.code || contract.client;

  const imageSrc = contract.image || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];

  return (
    <div className="gsap-timeline-card relative flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer">
      {/* Golden Node Ring on Timeline Line */}
      <div className="w-4 h-4 rounded-full border-2 border-brand-gold bg-white flex items-center justify-center shrink-0 z-10 shadow-xs group-hover:scale-125 transition-transform">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
      </div>

      {/* Main Row Content (Clean Row without Card Box) */}
      <div className="flex-1 min-w-0 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl hover:bg-amber-50/20 transition-all duration-300 flex items-center justify-between gap-3 sm:gap-4 border-b border-slate-200/70">
        
        {/* Left Thumbnail Image */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-slate-200/80 bg-slate-100 shadow-xs relative">
          <img
            src={imageSrc}
            alt={contract.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="font-mono text-[11px] sm:text-xs font-bold text-brand-gold tracking-wider uppercase truncate mb-0.5">
            {displayCode}
          </div>

          <h4 className="font-display font-bold text-xs sm:text-sm text-[#0F172A] leading-snug group-hover:text-brand-gold transition-colors line-clamp-2">
            {contract.title}
          </h4>

          <div className="flex flex-col gap-0.5 mt-1">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium truncate">
              <IconPin className="text-brand-gold shrink-0 w-3.5 h-3.5" />
              <span className="truncate">{contract.location}</span>
            </div>

            {contract.authority && (
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium truncate">
                <IconBuilding className="text-brand-gold shrink-0 w-3.5 h-3.5" />
                <span className="truncate">{contract.authority}</span>
              </div>
            )}
          </div>
        </div>

        {/* Category Pill on Far Right */}
        <div className="hidden sm:block shrink-0">
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 font-body text-[10px] font-bold text-slate-600 group-hover:bg-amber-100/60 group-hover:text-amber-900 group-hover:border-brand-gold/60 transition-colors shadow-xs">
            {contract.category || "Marine & Docks"}
          </span>
        </div>
      </div>
    </div>
  );
}

function IconBuilding({ className = "w-3.5 h-3.5 text-brand-gold shrink-0" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v8" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function IconGear({ className = "w-3.5 h-3.5 text-brand-gold shrink-0" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function LandmarkWorksSection() {
  const [activeIndex, setActiveIndex] = useState(4); // Default to Malt-Factory (05) as shown in reference design
  const sectionRef = useRef(null);

  const activeProject = landmarkProjects[activeIndex] || landmarkProjects[0];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = sectionRef.current;
      if (!el) return;

      const header = el.querySelector(".gsap-landmark-header");
      const featured = el.querySelector(".gsap-landmark-featured");
      const sideCards = el.querySelectorAll(".gsap-landmark-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      if (header) {
        tl.fromTo(
          header,
          { opacity: 0, y: 45, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 2.2, ease: "power2.out" }
        );
      }

      if (featured) {
        tl.fromTo(
          featured,
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 2.2, ease: "power2.out" },
          "-=1.6"
        );
      }

      if (sideCards && sideCards.length > 0) {
        tl.fromTo(
          sideCards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.8,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=1.8"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="ongoing-projects" className="bg-[#FAFBFD] pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-14 md:pb-16 border-t border-[var(--line)] font-body">
      <div className="mx-auto w-full max-w-[1700px] px-6 sm:px-8 md:px-12 lg:px-16">
        {/* TOP HEADER ROW */}
        <div className="gsap-landmark-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-8">
          <div>
            <SectionTag text="OUR PROJECTS" className="mb-2" />
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-darkblue uppercase leading-tight mt-1">
              Landmark works
            </h2>
            <p className="mt-2 max-w-2xl font-body text-sm sm:text-base text-slate-500 leading-relaxed">
              A selection of contracts that shaped how people and freight move across the region.
            </p>
          </div>
        </div>

        {/* MAIN GRID SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* LEFT FEATURED CARD */}
          <div className="gsap-landmark-featured lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-3xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between h-full group">
              {/* TOP HALF: FEATURED IMAGE */}
              <div className="relative w-full h-[300px] sm:h-[360px] md:h-[410px] lg:h-[440px] rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-md bg-brand-gold text-brand-darkblue font-display text-[10px] sm:text-xs font-extrabold tracking-wider uppercase shadow-sm">
                  FEATURED PROJECT
                </div>

                {/* Background Image with Slow Cinematic Anime Camera Motion */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.num}
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="w-full h-full overflow-hidden relative"
                  >
                    <motion.img
                      animate={{
                        scale: [1.12, 1.02, 1.08],
                        x: [0, -12, 0],
                        y: [0, -8, 0]
                      }}
                      transition={{
                        duration: 16,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror"
                      }}
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-115"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none z-10" />
              </div>

              {/* BOTTOM HALF: INFORMATION BLOCK */}
              <div className="mt-4 px-1 py-1 flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.num}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs sm:text-sm font-extrabold text-brand-gold">
                        {activeProject.num}
                      </span>
                      <span className="w-5 h-[2px] bg-brand-gold" />
                    </div>
                    
                    <h3 className="font-display font-extrabold text-base sm:text-lg md:text-xl text-[#0F172A] leading-snug uppercase tracking-tight mb-3">
                      {activeProject.title}
                    </h3>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600">
                        <IconPin className="text-brand-gold shrink-0 w-4 h-4" />
                        <span>{activeProject.location}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600">
                        <IconGear className="text-brand-gold shrink-0 w-4 h-4" />
                        <span>{activeProject.scope}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: STACKED CARDS */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {landmarkProjects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={project.num}
                  onClick={() => setActiveIndex(index)}
                  className={`gsap-landmark-card group flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer bg-white ${
                    isActive
                      ? "border-2 border-brand-gold bg-amber-50/30 shadow-md"
                      : "border-slate-200/80 hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  <div className="w-24 sm:w-28 h-16 sm:h-18 rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-xs relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-mono text-xs font-extrabold text-brand-gold">
                        {project.num}
                      </span>
                      <span className="w-4 h-[2px] bg-brand-gold" />
                    </div>

                    <h4 className="font-display font-extrabold text-xs sm:text-sm text-[#0F172A] leading-snug uppercase group-hover:text-brand-gold transition-colors line-clamp-1">
                      {project.title}
                    </h4>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1 font-medium">
                      <IconPin className="text-brand-gold shrink-0 w-3.5 h-3.5" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1 font-body">
                      {project.scope}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const reduced = useReducedMotion();

  return (
    <div
      style={TOKENS}
      className="min-h-screen bg-[var(--paper)] font-body text-[var(--ink)]"
    >
      <Hero reduced={reduced} />

      <LandmarkWorksSection />

      <ExecutedContractsSection />
    </div>
  );
}
