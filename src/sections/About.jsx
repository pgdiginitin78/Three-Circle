import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTag from "../components/SectionTag";
import aboutImg from '../assets/aboutsection.png';

gsap.registerPlugin(ScrollTrigger);

const capabilitiesData = [
  {
    title: "BUILDING INDUSTRY",
    icon: (
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7 text-brand-darkblue"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 10L30 15V40H18V10Z" strokeWidth="2.2" />
        <path d="M30 20L38 24V40H30" />
        <path d="M10 26L18 22V40H10V26Z" />
        <line x1="22" y1="18" x2="26" y2="19.5" />
        <line x1="22" y1="23" x2="26" y2="24.5" />
        <line x1="22" y1="28" x2="26" y2="29.5" />
        <line x1="22" y1="33" x2="26" y2="34.5" />
        <line x1="33" y1="27" x2="35" y2="28" />
        <line x1="33" y1="32" x2="35" y2="33" />
        <line x1="13" y1="30" x2="15" y2="29" />
        <line x1="13" y1="34" x2="15" y2="33" />
        <line x1="6" y1="40" x2="42" y2="40" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    title: "MINING & CRUSHING",
    icon: (
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7 text-brand-darkblue"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 32L34 14" strokeWidth="2.5" />
        <circle cx="10" cy="32" r="3" strokeWidth="2" />
        <circle cx="34" cy="14" r="3" strokeWidth="2" />
        <path d="M12 34L36 16" />
        <path d="M18 26L22 40" />
        <path d="M28 18.5L34 40" />
        <path d="M28 40C30 32 38 32 44 40H28Z" fill="currentColor" fillOpacity="0.1" />
        <circle cx="37" cy="22" r="1" fill="currentColor" />
        <circle cx="35" cy="26" r="1.2" fill="currentColor" />
        <circle cx="38" cy="28" r="1" fill="currentColor" />
        <line x1="6" y1="40" x2="44" y2="40" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    title: "INFRASTRUCTURE",
    icon: (
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7 text-brand-darkblue"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="16" y1="14" x2="16" y2="28" strokeWidth="2.5" />
        <line x1="32" y1="14" x2="32" y2="28" strokeWidth="2.5" />
        <line x1="16" y1="18" x2="32" y2="18" />
        <path d="M6 28Q16 16 32 16Q42 28 42 28" strokeWidth="2" />
        <line x1="11" y1="23" x2="11" y2="28" />
        <line x1="21" y1="18" x2="21" y2="28" />
        <line x1="27" y1="18" x2="27" y2="28" />
        <line x1="37" y1="23" x2="37" y2="28" />
        <line x1="4" y1="28" x2="44" y2="28" strokeWidth="2.5" />
        <path d="M18 40L22 32" />
        <path d="M30 40L26 32" />
        <line x1="24" y1="33" x2="24" y2="35" strokeDasharray="1 1" />
        <line x1="24" y1="37" x2="24" y2="39" strokeDasharray="1 1" />
      </svg>
    ),
  },
  {
    title: "EXCAVATION",
    icon: (
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7 text-brand-darkblue"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="32" width="22" height="7" rx="3.5" strokeWidth="2" />
        <circle cx="12" cy="35.5" r="1.5" fill="currentColor" />
        <circle cx="19" cy="35.5" r="1.5" fill="currentColor" />
        <circle cx="26" cy="35.5" r="1.5" fill="currentColor" />
        <path d="M10 32V24H22V32" />
        <path d="M15 24V27H21V24" />
        <path d="M22 26L32 14L40 24" strokeWidth="2.5" />
        <circle cx="22" cy="26" r="1.5" fill="currentColor" />
        <circle cx="32" cy="14" r="1.5" fill="currentColor" />
        <circle cx="40" cy="24" r="1.5" fill="currentColor" />
        <path d="M40 24L44 28L39 31L36 27Z" fill="currentColor" fillOpacity="0.2" />
        <line x1="4" y1="39" x2="44" y2="39" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = containerRef.current;
      if (!el) return;

      const imgBox = el.querySelector(".gsap-about-img");
      const tag = el.querySelector(".gsap-about-tag");
      const title = el.querySelector(".gsap-about-title");
      const desc = el.querySelector(".gsap-about-desc");
      const caps = el.querySelectorAll(".gsap-about-cap");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: 0.5,
      });

      if (imgBox) {
        tl.fromTo(
          imgBox,
          { opacity: 0, x: -70, filter: "blur(18px)", scale: 0.92 },
          { opacity: 1, x: 0, filter: "blur(0px)", scale: 1, duration: 3.0, ease: "power2.out" },
          0.1
        );
      }

      if (tag) {
        tl.fromTo(
          tag,
          { opacity: 0, y: 35, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 2.2, ease: "power2.out" },
          0.4
        );
      }

      if (title) {
        tl.fromTo(
          title,
          { opacity: 0, y: 45, filter: "blur(16px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 2.8, ease: "power2.out" },
          0.7
        );
      }

      if (desc) {
        tl.fromTo(
          desc,
          { opacity: 0, y: 35, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 2.5, ease: "power2.out" },
          1.2
        );
      }

      if (caps && caps.length > 0) {
        tl.fromTo(
          caps,
          { opacity: 0, y: 45, scale: 0.85, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 2.6,
            stagger: 0.35,
            ease: "power2.out",
          },
          1.6
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative pt-12 pb-6 md:pt-16 md:pb-8 bg-white border-b border-border-color overflow-hidden"
    >
      {/* Decorative concentric background watermark */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none opacity-30 z-0">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-brand-darkblue/10">
          <circle cx="160" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="160" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="160" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="160" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">

          {/* Left Column: Image Banner */}
          <div className="gsap-about-img lg:col-span-5 relative w-full h-[260px] xs:h-[290px] sm:h-[340px] lg:h-[380px] mt-2.5 sm:mt-3 lg:mt-4 rounded-xs overflow-hidden shadow-2xl group border border-brand-darkblue/10">
            <motion.img
              src={aboutImg}
              alt="Civil Engineering Infrastructure"
              style={{ y: imgY }}
              className="w-full h-[115%] object-cover contrast-[1.05] group-hover:scale-105 transition-transform duration-1000 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none z-10" />

            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col items-start">
              <div className="w-8 h-[3px] bg-brand-gold mb-3" />
              <p className="font-display text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/95 uppercase leading-relaxed max-w-[220px]">
                Infrastructure
                <br />
                For A Brighter
                <br />
                Tomorrow
              </p>
              <div className="w-12 h-[3px] bg-brand-gold mt-3" />
            </div>
          </div>

          {/* Right Column: Content Area */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-3 sm:pt-4 lg:pt-5 pb-2 sm:pb-4">

            {/* Section Tag */}
            <div className="gsap-about-tag mb-4 mt-2 sm:mt-3">
              <SectionTag text="ABOUT US" />
            </div>

            {/* Main Headline */}
            <h2 className="gsap-about-title font-display text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-bold tracking-tight uppercase mb-6 leading-tight sm:whitespace-nowrap">
              <span className="text-brand-darkblue">Engineering </span>
              <span className="text-brand-gold">With Purpose.</span>
            </h2>

            {/* Description Paragraph */}
            <p className="gsap-about-desc font-body text-xs sm:text-sm md:text-[14px] text-text-secondary leading-relaxed mb-5 sm:mb-6 max-w-xl">
              3 Circles delivers precision civil engineering and industrial
              services. We provide fully integrated, large-scale capabilities
              designed to support major development projects across building
              construction, mining and crushing operations, public
              infrastructure, and heavy excavation.
            </p>

            {/* 4 Capabilities Grid Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 mt-1 sm:mt-2 pt-3 pb-2 sm:pt-4 sm:pb-2 border-y border-brand-darkblue/10 -mb-4 sm:-mb-5">
              {capabilitiesData.map((cap, index) => (
                <div
                  key={cap.title}
                  className={`gsap-about-cap flex flex-col items-center text-center px-3 sm:px-5 ${index < capabilitiesData.length - 1 ? "sm:border-r sm:border-brand-darkblue/10" : ""
                    }`}
                >
                  <div className="relative w-[54px] h-[54px] sm:w-[66px] sm:h-[66px] flex items-center justify-center mb-3 group hover:scale-105 transition-all duration-300">
                    <motion.svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 100 100"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="2.5"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="2.8"
                        strokeDasharray="216.77 289"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay: index * 0.5,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.svg>

                    <div className="w-[84%] h-[84%] rounded-full bg-white flex items-center justify-center shadow-xs border border-gray-100/60 z-10">
                      {cap.icon}
                    </div>
                  </div>

                  <span className="font-display text-[11px] sm:text-xs font-extrabold tracking-wider text-brand-darkblue uppercase leading-snug">
                    {cap.title}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

