import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTransition } from "../components/PageTransition";
import MagneticButton from "../components/MagneticButton";
import { ArrowRight } from "../components/Icons";
import HeroScrollSequence from "../components/HeroScrollSequence";

const titleLines = ["Building What", "Moves The Future"];

export default function Hero() {
  const { navigateTo } = useTransition();
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tag = containerRef.current?.querySelector(".gsap-hero-tag");
      const titleLinesEl = containerRef.current?.querySelectorAll(".gsap-hero-title-line");
      const desc = containerRef.current?.querySelector(".gsap-hero-desc");
      const buttons = containerRef.current?.querySelectorAll(".gsap-hero-btn");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        tag,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.4, delay: 0.3 }
      )
        .fromTo(
          titleLinesEl,
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
          buttons,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.2 },
          "-=1.0"
        );
    }, containerRef);

    return () => {
      ctx.revert();
      const el = heroRef.current;
      if (el) {
        const pinSpacer = el.closest(".pin-spacer");
        if (pinSpacer) {
          pinSpacer.remove();
        }
        el.remove();
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-darkblue"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <HeroScrollSequence triggerRef={heroRef} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darkblue/50 via-brand-darkblue/20 to-transparent w-full md:w-[60%] lg:w-[45%] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkblue/10 via-transparent to-brand-darkblue/25 z-10" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-4 relative z-10">
        <div
          ref={containerRef}
          className="flex flex-col items-start max-w-2xl lg:max-w-4xl mt-2 sm:mt-4"
        >
          <span
            className="gsap-hero-tag inline-block font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.35em] text-brand-gold uppercase mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            3 Circles • Engineering • Infrastructure • Mining
          </span>

          <h1 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-white uppercase mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            {titleLines.map((line, index) => (
              <span key={index} className="block overflow-hidden whitespace-nowrap">
                <span
                  className={`gsap-hero-title-line inline-block ${index === titleLines.length - 1 ? "shimmer-text" : "text-white"}`}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="gsap-hero-desc text-xs sm:text-sm md:text-base text-white max-w-[500px] leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          >
            Integrated civil construction, infrastructure, mining, crushing and
            excavation solutions engineered for scale.
          </p>

          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
          >
            <div className="gsap-hero-btn w-full sm:w-auto">
              <MagneticButton
                className="group font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] py-3.5 px-7 bg-brand-gold text-brand-darkblue border border-brand-gold rounded-full hover:bg-white hover:border-white hover:text-brand-darkblue transition-all duration-300 text-center shadow-xl cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={() => navigateTo("/", "services")}
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </div>
            <div className="gsap-hero-btn w-full sm:w-auto">
              <MagneticButton
                className="group font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] py-3.5 px-7 bg-white/95 backdrop-blur-md text-brand-darkblue border border-white rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-brand-darkblue transition-all duration-300 text-center shadow-xl cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={() => navigateTo("/", "projects")}
              >
                <span>VIEW OUR PROJECTS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
