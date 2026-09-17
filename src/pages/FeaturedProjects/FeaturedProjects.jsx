import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import SectionTag from "../../components/SectionTag";

import mialAirsideRescueImg from "../../assets/ongoing-projects/mial-airside-rescue.jpg";
import mialSecondaryFireStationImg from "../../assets/ongoing-projects/mial-secondary-fire-station.jpg";
import mialBoundaryWallImg from "../../assets/ongoing-projects/mial-boundary-wall.jpg";
import ltBoulderCrushingImg from "../../assets/ongoing-projects/lt-boulder-crushing.jpg";
import ltAggregateSandSupplyImg from "../../assets/ongoing-projects/lt-aggregate-sand-supply.jpg";

gsap.registerPlugin(ScrollTrigger);

const ongoingProjects = [
  {
    id: "01",
    client: "MUMBAI INTERNATIONAL AIRPORT LIMITED",
    clientDetail: "Mumbai International Airport Limited",
    title: "AIRSIDE FIRE FIGHTING & RESCUE STATION",
    scope: "All civil, interiors, MEP and Façade works for high-readiness airport emergency operations.",
    badge: "ONGOING",
    image: mialAirsideRescueImg,
  },
  {
    id: "02",
    client: "MUMBAI INTERNATIONAL AIRPORT LIMITED",
    clientDetail: "Mumbai International Airport Limited",
    title: "SECONDARY FIRE STATION",
    scope: "All civil, architectural and MEP work supporting secondary airport security response zones.",
    badge: "ONGOING",
    image: mialSecondaryFireStationImg,
  },
  {
    id: "03",
    client: "MUMBAI INTERNATIONAL AIRPORT LIMITED",
    clientDetail: "Mumbai International Airport Limited",
    title: "BOUNDARY WALL",
    scope: "All civil works and reinforced perimeter foundation securing airside demarcation boundaries.",
    badge: "ONGOING",
    image: mialBoundaryWallImg,
  },
  {
    id: "04",
    client: "LARSEN & TOUBRO",
    clientDetail: "Larsen & Toubro",
    title: "CRUSHING OF BOULDERS",
    scope: "Crushing of supplied boulders by client into Aggregate and Sand by a 3 Stage VSI Crusher.",
    badge: "ONGOING",
    image: ltBoulderCrushingImg,
  },
  {
    id: "05",
    client: "LARSEN & TOUBRO",
    clientDetail: "Larsen & Toubro",
    title: "SUPPLY OF AGGREGATE & SAND",
    scope: "Supply of high-quality aggregate and sand for construction and infrastructure projects.",
    badge: "ONGOING",
    image: ltAggregateSandSupplyImg,
  },
];

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const total = ongoingProjects.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Automatic slide transition every 8 seconds for relaxed viewing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 8000);
    return () => clearInterval(timer);
  }, [total]);

  // Entrance animation for header
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 40, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 2.2,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Touch & Swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Calculate circular offset (-2, -1, 0, 1, 2)
  const getOffset = (index) => {
    let diff = index - currentIndex;
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;
    return diff;
  };

  return (
    <section
      ref={sectionRef}
      id="featured-projects"
      className="relative w-full bg-slate-50/50 border-b border-slate-200/70 pt-14 sm:pt-17 lg:pt-20 pb-8 sm:pb-11 lg:pb-13 overflow-hidden font-body"
    >
      {/* Background Soft Curved Ambient Lighting Shapes matching reference image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-slate-200/40 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative z-10">
        
        {/* Top Header Section Left Aligned matching other sections */}
        <div className="w-full flex flex-col items-start mb-6 sm:mb-8">
          
          {/* Main Header Content */}
          <div ref={headerRef} className="flex flex-col items-start text-left max-w-3xl">
            
            {/* SectionTag Component */}
            <div className="mb-2.5">
              <SectionTag text="PROJECT SHOWCASE" />
            </div>

            {/* Main Title: OUR ONGOING PROJECTS */}
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-extrabold tracking-tight text-brand-darkblue uppercase leading-none mt-1 mb-2.5">
              OUR ONGOING PROJECTS
            </h2>

            {/* Subtitle */}
            <p className="font-body text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              Building world-class structures with precision, safety and innovation across India and beyond.
            </p>
          </div>
        </div>

        {/* 3D Coverflow Slider Component matching reference image exactly without clipping */}
        <div
          className="relative w-full max-w-[1300px] mx-auto my-2 sm:my-3 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows positioned on edges */}
          <button
            onClick={handlePrev}
            className="absolute left-1 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-slate-100 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-slate-100 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Slider Track with explicit vertical height matching landscape cards */}
          <div className="relative w-full h-[200px] xs:h-[220px] sm:h-[290px] md:h-[340px] lg:h-[380px] flex items-center justify-center overflow-visible">
            {ongoingProjects.map((project, index) => {
              const offset = getOffset(index);
              const isActive = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              const isVisible = isActive || isLeft || isRight;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={project.id}
                  onClick={() => {
                    if (isLeft) handlePrev();
                    if (isRight) handleNext();
                  }}
                  initial={false}
                  animate={{
                    x: offset === 0 ? "0%" : offset === -1 ? "-68%" : "68%",
                    scale: isActive ? 1 : 0.88,
                    opacity: isActive ? 1 : 0.65,
                    zIndex: isActive ? 20 : 10,
                    filter: isActive ? "blur(0px)" : "blur(1.2px)",
                  }}
                  transition={{
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`absolute w-[82%] sm:w-[72%] md:w-[60%] lg:w-[52%] max-w-[640px] aspect-[16/9.5] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl transition-all duration-500 ${
                    isActive ? "cursor-default shadow-slate-900/12" : "cursor-pointer hover:opacity-85"
                  }`}
                >
                  {/* Full High-Res Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center contrast-[1.04] brightness-[1.02] transition-transform duration-1000 ease-out group-hover:scale-108"
                  />

                  {/* Dark gradient overlay at bottom for crystal-clear text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 via-55% to-transparent pointer-events-none z-10" />

                  {/* Rich Text Overlay matching Second Image Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                        transition={{ duration: 1.0, delay: 0.2, ease: "power2.out" }}
                        className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5 z-20 max-w-[90%] sm:max-w-[420px] text-left flex flex-col gap-0.5 sm:gap-1"
                      >
                        {/* Gold Client Subtitle */}
                        <span className="font-display text-[8.5px] sm:text-[9.5px] md:text-[10px] font-extrabold tracking-[0.16em] text-brand-gold uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                          {project.client}
                        </span>

                        {/* Main Project Title */}
                        <h3
                          className="font-display text-[11px] sm:text-sm md:text-lg font-black !text-white uppercase tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                          style={{ color: "#ffffff" }}
                        >
                          {project.title}
                        </h3>

                        {/* Client & Scope Details matching second image */}
                        <div className="flex flex-col gap-0.5 pt-0.5 border-t border-white/20 mt-0.5">
                          {/* Client Detail */}
                          <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10.5px] md:text-xs font-medium text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-gold shrink-0 fill-brand-gold/30" />
                            <span className="font-semibold text-brand-gold shrink-0">Client :</span>
                            <span className="truncate text-white">{project.clientDetail}</span>
                          </div>

                          {/* Scope Detail */}
                          <div className="flex items-start gap-1.5 text-[8.5px] sm:text-[9.5px] md:text-[11px] font-normal text-white/85 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] line-clamp-2">
                            <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-gold shrink-0 mt-0.5" />
                            <span className="font-semibold text-brand-gold shrink-0">Scope :</span>
                            <span className="leading-tight text-white/90">{project.scope}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
