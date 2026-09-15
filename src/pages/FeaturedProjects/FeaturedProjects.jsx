import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTag from "../../components/SectionTag";
import { MapPin, FileText, ArrowRight } from "lucide-react";

import mialAirsideRescueImg from "../../assets/ongoing-projects/mial-airside-rescue.jpg";
import mialSecondaryFireStationImg from "../../assets/ongoing-projects/mial-secondary-fire-station.jpg";
import mialBoundaryWallImg from "../../assets/ongoing-projects/mial-boundary-wall.jpg";
import ltBoulderCrushingImg from "../../assets/ongoing-projects/lt-boulder-crushing.jpg";
import ltAggregateSandSupplyImg from "../../assets/ongoing-projects/lt-aggregate-sand-supply.jpg";

gsap.registerPlugin(ScrollTrigger);

const ongoingProjects = [
  {
    id: "01",
    total: "/05",
    client: "MUMBAI INTERNATIONAL AIRPORT LIMITED",
    clientDetail: "Mumbai International Airport Limited",
    title: "AIRSIDE FIRE FIGHTING & RESCUE STATION",
    scope:
      "All civil, interiors, MEP and Façade works for high-readiness airport emergency operations.",
    badge: "ONGOING",
    image: mialAirsideRescueImg,
    hasLink: false,
  },
  {
    id: "02",
    total: "/05",
    client: "MUMBAI INTERNATIONAL AIRPORT LIMITED",
    clientDetail: "Mumbai International Airport Limited",
    title: "SECONDARY FIRE STATION",
    scope:
      "All civil, architectural and MEP work supporting secondary airport security response zones.",
    badge: "ONGOING",
    image: mialSecondaryFireStationImg,
    hasLink: true,
  },
  {
    id: "03",
    total: "/05",
    client: "MUMBAI INTERNATIONAL AIRPORT LIMITED",
    clientDetail: "Mumbai International Airport Limited",
    title: "BOUNDARY WALL",
    scope:
      "All civil works and reinforced perimeter foundation securing airside demarcation boundaries.",
    badge: "ONGOING",
    image: mialBoundaryWallImg,
    hasLink: false,
  },
  {
    id: "04",
    total: "/05",
    client: "LARSEN & TOUBRO",
    clientDetail: "Larsen & Toubro",
    title: "CRUSHING OF BOULDERS",
    scope:
      "Crushing of supplied boulders by client into Aggregate and Sand by a 3 Stage VSI Crusher.",
    badge: "ONGOING",
    image: ltBoulderCrushingImg,
    hasLink: true,
  },
  {
    id: "05",
    total: "/05",
    client: "LARSEN & TOUBRO",
    clientDetail: "Larsen & Toubro",
    title: "SUPPLY OF AGGREGATE & SAND",
    scope:
      "Supply of high-quality aggregate and sand for construction and infrastructure projects.",
    badge: "ONGOING",
    image: ltAggregateSandSupplyImg,
    hasLink: false,
  },
];

export default function FeaturedProjects() {
  const containerRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sideTextRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Header Entrance Animation Timeline
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      if (tagRef.current) {
        headerTl.fromTo(
          tagRef.current,
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }
        );
      }

      if (titleRef.current) {
        headerTl.fromTo(
          titleRef.current,
          { opacity: 0, y: 35, rotateX: -15 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        );
      }

      if (descRef.current) {
        headerTl.fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.4"
        );
      }

      if (sideTextRef.current) {
        headerTl.fromTo(
          sideTextRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" },
          "-=0.4"
        );
      }

      // 2. Staggered Card Entrance & Parallax Animations with ScrollTrigger
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 65, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Subtle Image Parallax on Scroll inside card
        const imgEl = imagesRef.current[idx];
        if (imgEl) {
          gsap.to(imgEl, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3. Smooth 3D Interactive Mouse Physics on Card Hover
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card || window.innerWidth < 1024) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateY: (x / rect.width) * 5,
      rotateX: -(y / rect.height) * 5,
      scale: 1.01,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      id="featured-projects"
      className="relative w-full bg-bg-primary border-b border-border-color pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 overflow-hidden font-body"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 lg:mb-10">
          <div className="flex flex-col">
            <div ref={tagRef} className="mb-3">
              <SectionTag text="CURRENT DELIVERABLES" />
            </div>
            <h2
              ref={titleRef}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-primary uppercase leading-tight"
            >
              OUR ONGOING PROJECTS
            </h2>
            <p
              ref={descRef}
              className="text-xs sm:text-sm md:text-base text-text-secondary max-w-2xl leading-relaxed mt-2.5"
            >
              Building world-class structures with precision, safety and innovation across India and beyond.
            </p>
          </div>

          <div
            ref={sideTextRef}
            className="hidden md:flex items-center gap-4 pl-6 border-l border-brand-gold/30 shrink-0"
          >
            <span className="font-display text-xs font-bold tracking-[0.2em] text-text-secondary uppercase max-w-[130px] leading-snug">
              STRUCTURES THAT BUILD TOMORROW
            </span>
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-6 sm:gap-7 w-full">
          {ongoingProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="group w-full bg-white border border-brand-darkblue/[0.08] hover:border-brand-gold/50 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.12)] transition-shadow duration-500 text-left overflow-hidden will-change-transform"
              >
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-5 lg:gap-7">
                  {/* Left or Right Image Placement based on Alternating Index */}
                  {!isEven ? (
                    /* ODD ITEMS (01, 03, 05): Image on Left */
                    <>
                      {/* Exact Side Shape & Slanted Frame Container */}
                      <div className="w-full lg:w-[46%] aspect-[16/9] shrink-0 relative flex items-center justify-center py-1.5 px-1">
                        {/* Left Side Shape Structure (Translucent slanted wing) */}
                        <div 
                          className="absolute left-2.5 top-2.5 bottom-2.5 w-[24%] bg-gradient-to-r from-slate-100/90 via-slate-50/75 to-transparent border-y border-l border-brand-darkblue/10 rounded-l-xl pointer-events-none z-0 shadow-2xs"
                          style={{
                            transform: 'skewX(-10deg)',
                            transformOrigin: 'center center'
                          }}
                        />

                        {/* Right Side Shape Structure (Translucent slanted wing) */}
                        <div 
                          className="absolute right-2.5 top-2.5 bottom-2.5 w-[24%] bg-gradient-to-l from-slate-100/90 via-slate-50/75 to-transparent border-y border-r border-brand-darkblue/10 rounded-r-xl pointer-events-none z-0 shadow-2xs"
                          style={{
                            transform: 'skewX(-10deg)',
                            transformOrigin: 'center center'
                          }}
                        />

                        {/* Main Slanted Image Container with rounded corners */}
                        <div 
                          className="w-[90%] h-full relative z-10 rounded-2xl overflow-hidden shadow-lg border-2 border-white group-hover:shadow-xl transition-all duration-500"
                          style={{
                            transform: 'skewX(-10deg)',
                            transformOrigin: 'center center'
                          }}
                        >
                          {/* Un-skewed Image inside - zoomed out naturally to show full composition */}
                          <div 
                            className="w-full h-full relative overflow-hidden"
                            style={{
                              transform: 'skewX(10deg) scale(1.08)',
                              transformOrigin: 'center center'
                            }}
                          >
                            <img
                              ref={(el) => (imagesRef.current[index] = el)}
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="flex-1 flex flex-col justify-center gap-2.5 py-1">
                        {/* ONGOING Badge above text matching website theme */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold font-display text-[9px] font-extrabold tracking-widest uppercase self-start mb-0.5 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                          <span>ONGOING</span>
                        </div>

                        <span className="font-display text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] text-brand-gold uppercase">
                          {project.client}
                        </span>

                        <h3 className="font-display text-lg sm:text-xl lg:text-[22px] font-black text-text-primary uppercase leading-snug tracking-tight group-hover:text-brand-gold transition-colors">
                          {project.title}
                        </h3>

                        <div className="flex flex-col gap-2 pt-2 border-t border-brand-darkblue/[0.06] mt-1">
                          <div className="flex items-start gap-2 text-xs sm:text-sm">
                            <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                            <span className="font-semibold text-text-secondary shrink-0">Client :</span>
                            <span className="font-medium text-text-primary">{project.clientDetail}</span>
                          </div>

                          <div className="flex items-start gap-2 text-xs sm:text-sm">
                            <FileText className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                            <span className="font-semibold text-text-secondary shrink-0">Scope :</span>
                            <span className="font-normal text-text-secondary leading-relaxed">{project.scope}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="shrink-0 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-brand-darkblue/[0.08] pt-3 lg:pt-0 lg:pl-6">
                        <div className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-white transition-all duration-300 shadow-xs">
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </>
                  ) : (
                    /* EVEN ITEMS (02, 04): Content on Left, Image on Right */
                    <>
                      {/* Content Details */}
                      <div className="flex-1 flex flex-col justify-center gap-2.5 py-1 order-2 lg:order-1">
                        {/* ONGOING Badge above text matching website theme */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold font-display text-[9px] font-extrabold tracking-widest uppercase self-start mb-0.5 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                          <span>ONGOING</span>
                        </div>

                        <span className="font-display text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] text-brand-gold uppercase">
                          {project.client}
                        </span>

                        <h3 className="font-display text-lg sm:text-xl lg:text-[22px] font-black text-text-primary uppercase leading-snug tracking-tight group-hover:text-brand-gold transition-colors">
                          {project.title}
                        </h3>

                        <div className="flex flex-col gap-2 pt-2 border-t border-brand-darkblue/[0.06] mt-1">
                          <div className="flex items-start gap-2 text-xs sm:text-sm">
                            <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                            <span className="font-semibold text-text-secondary shrink-0">Client :</span>
                            <span className="font-medium text-text-primary">{project.clientDetail}</span>
                          </div>

                          <div className="flex items-start gap-2 text-xs sm:text-sm">
                            <FileText className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                            <span className="font-semibold text-text-secondary shrink-0">Scope :</span>
                            <span className="font-normal text-text-secondary leading-relaxed">{project.scope}</span>
                          </div>
                        </div>
                      </div>

                      {/* Exact Side Shape & Slanted Frame Container */}
                      <div className="w-full lg:w-[46%] aspect-[16/9] shrink-0 relative flex items-center justify-center py-1.5 px-1 order-1 lg:order-2">
                        {/* Left Side Shape Structure (Translucent slanted wing) */}
                        <div 
                          className="absolute left-2.5 top-2.5 bottom-2.5 w-[24%] bg-gradient-to-r from-slate-100/90 via-slate-50/75 to-transparent border-y border-l border-brand-darkblue/10 rounded-l-xl pointer-events-none z-0 shadow-2xs"
                          style={{
                            transform: 'skewX(-10deg)',
                            transformOrigin: 'center center'
                          }}
                        />

                        {/* Right Side Shape Structure (Translucent slanted wing) */}
                        <div 
                          className="absolute right-2.5 top-2.5 bottom-2.5 w-[24%] bg-gradient-to-l from-slate-100/90 via-slate-50/75 to-transparent border-y border-r border-brand-darkblue/10 rounded-r-xl pointer-events-none z-0 shadow-2xs"
                          style={{
                            transform: 'skewX(-10deg)',
                            transformOrigin: 'center center'
                          }}
                        />

                        {/* Main Slanted Image Container with rounded corners */}
                        <div 
                          className="w-[90%] h-full relative z-10 rounded-2xl overflow-hidden shadow-lg border-2 border-white group-hover:shadow-xl transition-all duration-500"
                          style={{
                            transform: 'skewX(-10deg)',
                            transformOrigin: 'center center'
                          }}
                        >
                          {/* Un-skewed Image inside - zoomed out naturally to show full composition */}
                          <div 
                            className="w-full h-full relative overflow-hidden"
                            style={{
                              transform: 'skewX(10deg) scale(1.08)',
                              transformOrigin: 'center center'
                            }}
                          >
                            <img
                              ref={(el) => (imagesRef.current[index] = el)}
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="shrink-0 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-brand-darkblue/[0.08] pt-3 lg:pt-0 lg:pl-6 order-3">
                        <div className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-white transition-all duration-300 shadow-xs">
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
