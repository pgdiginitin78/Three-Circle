import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useTransition } from "../components/PageTransition";
import MagneticButton from "../components/MagneticButton";
import { ArrowRight } from "../components/Icons";
import HeroScrollSequence from "../components/HeroScrollSequence";

const titleLines = [
  { text: "Building What" },
  { text: "Moves The ", highlight: "Future" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const lineVariants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const { navigateTo } = useTransition();
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center overflow-hidden pt-32 pb-24 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 bg-brand-darkblue"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <HeroScrollSequence triggerRef={heroRef} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darkblue/75 via-brand-darkblue/30 to-transparent w-full md:w-[70%] lg:w-[52%] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkblue/20 via-transparent to-brand-darkblue/40 z-10" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-4 relative z-10">
        <motion.div
          className="flex flex-col items-start max-w-2xl lg:max-w-3xl pt-2 pb-6 md:pb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.35em] text-brand-gold uppercase mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            variants={itemVariants}
          >
            3 Circles • Engineering • Infrastructure • Mining
          </motion.span>

          <h1 className="font-display text-[21px] sm:text-[27px] md:text-[34px] lg:text-[43px] font-extrabold leading-[1.2] tracking-tight text-white uppercase mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] flex flex-col gap-2 sm:gap-2 md:gap-2">
            {titleLines.map((lineObj, index) => (
              <span key={index} className="block overflow-hidden whitespace-nowrap">
                <motion.span
                  className="inline-block text-white"
                  variants={lineVariants}
                >
                  {lineObj.text}
                  {lineObj.highlight && (
                    <span className="shimmer-text">{lineObj.highlight}</span>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="text-xs sm:text-sm md:text-base text-white max-w-[500px] leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            variants={itemVariants}
          >
            Integrated civil construction, infrastructure, mining, crushing and
            excavation solutions engineered for scale.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            variants={itemVariants}
          >
            <MagneticButton
              className="uiverse-btn uiverse-btn-gold group font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] py-3.5 px-7 rounded-full text-center shadow-xl flex items-center justify-center gap-2"
              onClick={() => navigateTo("/", "services")}
            >
              <span className="flex items-center justify-center gap-2 w-full">
                <span>EXPLORE OUR SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </MagneticButton>
            <MagneticButton
              className="uiverse-btn uiverse-btn-white group font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] py-3.5 px-7 backdrop-blur-md rounded-full text-center shadow-xl flex items-center justify-center gap-2"
              onClick={() => navigateTo("/", "projects")}
            >
              <span className="flex items-center justify-center gap-2 w-full">
                <span>VIEW OUR PROJECTS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
