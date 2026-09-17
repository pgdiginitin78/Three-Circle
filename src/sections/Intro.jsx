import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = containerRef.current;
      if (!el) return;

      const bgImg = el.querySelector(".gsap-exp-bg-img");
      const tag = el.querySelector(".gsap-exp-tag");
      const tagline = el.querySelector(".gsap-exp-tagline");
      const titleLines = el.querySelectorAll(".gsap-exp-title");
      const desc = el.querySelector(".gsap-exp-desc");
      const items = el.querySelectorAll(".gsap-exp-item");

      // Smooth Parallax Scroll Effect on Background Image
      if (bgImg) {
        gsap.to(bgImg, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // Ultra-Slow Cinematic GSAP Entrance Animation Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: 0.4,
      });

      if (tag) {
        tl.fromTo(
          tag,
          { opacity: 0, x: -50, filter: "blur(12px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 2.4, ease: "power2.out" },
          0.1
        );
      }

      if (tagline) {
        tl.fromTo(
          tagline,
          { opacity: 0, x: 50, filter: "blur(12px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 2.4, ease: "power2.out" },
          0.1
        );
      }

      if (titleLines && titleLines.length > 0) {
        tl.fromTo(
          titleLines,
          { opacity: 0, y: 55, filter: "blur(16px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 2.8,
            stagger: 0.4,
            ease: "power2.out",
          },
          0.5
        );
      }

      if (desc) {
        tl.fromTo(
          desc,
          { opacity: 0, y: 45, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 2.5, ease: "power2.out" },
          1.0
        );
      }

      if (items && items.length > 0) {
        tl.fromTo(
          items,
          { opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 2.6,
            stagger: 0.35,
            ease: "power2.out",
          },
          1.4
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="intro"
      className="relative w-full min-h-[440px] lg:min-h-[480px] bg-[#010634] text-white overflow-hidden py-9 lg:py-12 flex flex-col justify-between border-b border-brand-darkblue/20"
    >
      {/* BACKGROUND IMAGE WITH SLOW CONTINUOUS MOTION & PARALLAX EFFECT */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=85"
          alt="Engineering site construction"
          className="gsap-exp-bg-img w-full h-[120%] -top-[10%] relative object-cover object-center sm:object-right opacity-75 contrast-[1.08] filter brightness-[1.02]"
          animate={{
            scale: [1.08, 1.18, 1.08],
            x: [-25, 25, -25],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        {/* SOFTENED GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#010634]/82 via-[#010634]/45 via-65% to-[#010634]/15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010634]/75 via-transparent to-[#010634]/25 pointer-events-none" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex-1 flex flex-col justify-between gap-7 lg:gap-8">
        
        {/* TOP ROW: INDEX + SECTION TAG & TOP RIGHT TAGLINE */}
        <div className="flex items-start justify-between w-full pt-4 sm:pt-5">
          {/* LEFT: 02 & OUR EXPERTISE */}
          <div className="flex items-center gap-6">
          
            <div className="gsap-exp-tag flex items-center gap-2.5">
              <span className="w-7 h-[2px] bg-[#D4AF37]" />
              <span className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
                OUR EXPERTISE
              </span>
            </div>
          </div>

          {/* RIGHT: PEOPLE | PROCESS | PROGRESS */}
          <div className="gsap-exp-tagline hidden sm:flex flex-col items-end text-right">
            <span className="font-display text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.32em] text-white/90 leading-tight">
              PEOPLE
            </span>
            <span className="font-display text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.32em] text-white/90 leading-tight my-0.5">
              PROCESS
            </span>
            <span className="font-display text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.32em] text-white/90 leading-tight mb-1.5">
              PROGRESS
            </span>
            <span className="w-10 h-[2px] bg-[#D4AF37]" />
          </div>
        </div>

        {/* MIDDLE: MAIN HEADLINE & SUBTEXT */}
        <div className="max-w-3xl my-auto py-1 -mt-8 sm:-mt-12">
          <h2 className="font-display uppercase tracking-tight text-white mb-8 sm:mb-10">
            <span className="gsap-exp-title block text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight">
              BUILT FOR COMPLEX PROJECTS.
            </span>
            <span className="gsap-exp-title block text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight mt-1 sm:mt-1.5">
              ENGINEERED FOR RESULTS.
            </span>
          </h2>

          <p className="gsap-exp-desc font-display text-sm sm:text-base md:text-[17px] font-medium text-white/85 leading-relaxed tracking-wide max-w-3xl">
            3 Circles delivers integrated civil and infrastructure capabilities across building construction, mining and crushing, infrastructure development, and heavy earthwork excavation.
          </p>
        </div>

        {/* BOTTOM ROW: 4 CAPABILITY COLUMNS WITH DIVIDERS & GOLD OUTLINE ICONS */}
        <div className="w-full pt-4.5 border-t border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            
            {/* ITEM 1 */}
            <div className="gsap-exp-item flex items-center gap-2.5 sm:gap-3 md:pr-4 lg:pr-6 md:border-r border-white/15">
              <div className="shrink-0 text-[#D4AF37]">
                <svg width="28" height="28" className="sm:w-8 sm:h-8" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="8" width="12" height="24" rx="1" />
                  <rect x="20" y="4" width="12" height="28" rx="1" />
                  <line x1="8" y1="13" x2="12" y2="13" />
                  <line x1="8" y1="18" x2="12" y2="18" />
                  <line x1="8" y1="23" x2="12" y2="23" />
                  <line x1="24" y1="9" x2="28" y2="9" />
                  <line x1="24" y1="14" x2="28" y2="14" />
                  <line x1="24" y1="19" x2="28" y2="19" />
                  <line x1="24" y1="24" x2="28" y2="24" />
                </svg>
              </div>
              <span className="font-display text-[10px] sm:text-[11.5px] lg:text-xs font-extrabold uppercase tracking-wider text-white sm:whitespace-nowrap leading-tight">
                BUILDING CONSTRUCTION
              </span>
            </div>

            {/* ITEM 2 */}
            <div className="gsap-exp-item flex items-center gap-2.5 sm:gap-3 md:px-4 lg:px-6 md:border-r border-white/15">
              <div className="shrink-0 text-[#D4AF37]">
                <svg width="28" height="28" className="sm:w-8 sm:h-8" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 28L14 10L20 20L25 14L32 28H4Z" />
                  <circle cx="14" cy="8" r="1.5" fill="#D4AF37" />
                  <path d="M12 28L18 18L24 28" />
                </svg>
              </div>
              <span className="font-display text-[10px] sm:text-[11.5px] lg:text-xs font-extrabold uppercase tracking-wider text-white sm:whitespace-nowrap leading-tight">
                MINING & CRUSHING
              </span>
            </div>

            {/* ITEM 3 */}
            <div className="gsap-exp-item flex items-center gap-2.5 sm:gap-3 md:px-4 lg:px-6 md:border-r border-white/15">
              <div className="shrink-0 text-[#D4AF37]">
                <svg width="28" height="28" className="sm:w-8 sm:h-8" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 24H33" />
                  <path d="M6 24V14L18 8L30 14V24" />
                  <path d="M12 24V11" />
                  <path d="M24 24V11" />
                  <line x1="3" y1="24" x2="18" y2="8" />
                  <line x1="33" y1="24" x2="18" y2="8" />
                </svg>
              </div>
              <span className="font-display text-[10px] sm:text-[11.5px] lg:text-xs font-extrabold uppercase tracking-wider text-white sm:whitespace-nowrap leading-tight">
                INFRASTRUCTURE
              </span>
            </div>

            {/* ITEM 4 */}
            <div className="gsap-exp-item flex items-center gap-2.5 sm:gap-3 md:pl-4 lg:pl-6">
              <div className="shrink-0 text-[#D4AF37]">
                <svg width="28" height="28" className="sm:w-8 sm:h-8" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="22" width="16" height="6" rx="3" />
                  <path d="M12 22V14L20 8L28 14L24 20" />
                  <circle cx="28" cy="14" r="2" fill="#D4AF37" />
                </svg>
              </div>
              <span className="font-display text-[10px] sm:text-[11.5px] lg:text-xs font-extrabold uppercase tracking-wider text-white sm:whitespace-nowrap leading-tight">
                HEAVY EXCAVATION
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
