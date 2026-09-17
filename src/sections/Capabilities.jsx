import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import SectionTag from "../components/SectionTag";
import { NumberTicker } from "../components/NumberTicker";
import capabilitiesBackImg from "../assets/projectshome/capabilitiesback.png";
import buildingImg from "../assets/home/project.png";
import infrastructureImg from "../assets/home/years.png";
import safetyImg from "../assets/home/team.png";
import highriseImg from "../assets/home/location.png";

gsap.registerPlugin(ScrollTrigger);

const capabilitiesData = [
  {
    id: "01",
    value: 120,
    suffix: "+",
    label: "PROJECTS COMPLETED",
    desc: "Across GCC and MENA",
    image: buildingImg,
    alt: "Building Construction Projects",
  },
  {
    id: "02",
    value: 15,
    suffix: "+",
    label: "YEARS EXPERIENCE",
    desc: "In civil & industrial works",
    image: infrastructureImg,
    alt: "Civil & Industrial Works Experience",
  },
  {
    id: "03",
    value: 450,
    suffix: "+",
    label: "TEAM MEMBERS",
    desc: "Skilled professionals",
    image: safetyImg,
    alt: "Skilled Engineering Team",
  },
  {
    id: "04",
    value: 25,
    suffix: "+",
    label: "PROJECT LOCATIONS",
    desc: "UAE and regional sites",
    image: highriseImg,
    alt: "Regional Project Locations",
  },
];

export default function Capabilities() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = containerRef.current;
      if (!el) return;

      const tag = el.querySelector(".gsap-cap-tag");
      const title = el.querySelector(".gsap-cap-title");
      const cards = el.querySelectorAll(".gsap-cap-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: 0.8, // Very smooth delay after hero section effect completes
      });

      if (tag) {
        tl.fromTo(
          tag,
          { opacity: 0, x: -50, filter: "blur(12px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 2.2, ease: "power2.out" },
          0.1
        );
      }

      if (title) {
        tl.fromTo(
          title,
          { opacity: 0, y: 50, filter: "blur(14px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 2.5, ease: "power2.out" },
          0.4
        );
      }

      if (cards && cards.length > 0) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 65, scale: 0.9, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 2.5,
            stagger: 0.35,
            ease: "power2.out",
          },
          0.8
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="relative bg-slate-50 border-b border-slate-200/80 pt-12 pb-10 sm:pt-14 sm:pb-12 md:pt-16 md:pb-14 overflow-hidden"
    >
      {/* Capabilities Backdrop Image Layer with Slow Left to Right Motion */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.img
          src={capabilitiesBackImg}
          alt="Capabilities Background"
          initial={{ scale: 1.12, x: -45, y: -25 }}
          animate={{
            x: [-45, 45, -45],
            y: [-25, -35, -25],
            scale: [1.12, 1.15, 1.12],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-full h-full object-cover object-center opacity-75 contrast-[1.08] filter brightness-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50/30 to-slate-50/50" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header Row Matching Reference Image */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
          <div className="flex flex-col">
              
              {/* Tag with SectionTag Component */}
              <div className="gsap-cap-tag mb-2">
                <SectionTag text="BY THE NUMBERS" />
              </div>

              {/* Main Headline */}
              <h2 className="gsap-cap-title font-display text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black tracking-tight text-[#000435] uppercase leading-none mb-0">
                OUR CAPABILITIES
              </h2>
            </div>
        </div>

        {/* 4 Cards Horizontal Grid matching Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {capabilitiesData.map((item, index) => (
            <div
              key={item.id}
              className="gsap-cap-card group relative h-[175px] sm:h-[195px] md:h-[210px] lg:h-[220px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-brand-gold/30 hover:border-brand-gold hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col justify-end cursor-pointer bg-slate-900"
            >
              {/* Card Image Backdrop with Slow Zoom on Hover */}
              <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center contrast-[1.1] brightness-[1.05] group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Multi-Stage Dark Navy Ambient Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000435]/80 via-[#000435]/20 via-75% to-transparent pointer-events-none z-10" />

              {/* Gold Top Border Accent Line Reveal */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-[#F5D061] to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />

              {/* Bottom Content Area */}
              <div className="relative z-20 p-3.5 sm:p-4 flex flex-col justify-end h-full drop-shadow-md">
                
                {/* Large Number Metric Ticker */}
                <div className="font-display text-[30px] sm:text-[36px] lg:text-[38px] font-black text-white tracking-tight flex items-baseline select-none mb-0.5 leading-none">
                  <NumberTicker value={item.value} delay={1.6 + index * 0.35} />
                  <span className="text-brand-gold font-extrabold ml-0.5 text-2xl sm:text-3xl lg:text-3xl">
                    {item.suffix}
                  </span>
                </div>

                {/* Card Title Label */}
                <h3
                  className="font-display text-[11px] sm:text-xs md:text-[13px] font-black tracking-wider !text-white uppercase mb-0.5 leading-snug"
                  style={{ color: "#ffffff" }}
                >
                  {item.label}
                </h3>

                {/* Description Subtitle */}
                <p
                  className="font-body text-[10px] sm:text-[11px] !text-white/90 font-medium leading-tight pr-2"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
