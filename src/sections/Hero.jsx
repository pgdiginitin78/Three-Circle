import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTransition } from "../components/PageTransition";
import MagneticButton from "../components/MagneticButton";
import { ArrowRight } from "../components/Icons";
import heroBg from "../assets/HeroImage.avif";

const titleLines = ["Building What", "Moves The", "Future"];

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

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
    >
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
        style={{ y: bgY, scale: bgScale, opacity: heroOpacity }}
      >
        <motion.img
          src={heroBg}
          alt="Dubai Skyline Architecture"
          animate={{
            scale: [1.02, 1.08, 1.02],
            x: [0, -18, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full object-cover object-[85%_center] lg:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-transparent w-full md:w-[78%] lg:w-[62%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/75" />
      </motion.div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-4 relative z-10">
        <motion.div
          className="flex flex-col items-start max-w-2xl lg:max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.35em] text-accent-gold uppercase mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            variants={itemVariants}
          >
            3 Circles • Engineering • Infrastructure • Mining
          </motion.span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-6xl font-extrabold leading-[0.96] tracking-tight text-white uppercase mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            {titleLines.map((line, index) => (
              <span key={index} className="block overflow-hidden">
                <motion.span
                  className={`inline-block ${index === 2 ? "shimmer-text" : "text-white"}`}
                  variants={lineVariants}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="text-xs sm:text-sm md:text-base text-zinc-100/90 max-w-[500px] leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
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
              className="group font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] py-3.5 px-7 bg-accent-gold text-[#111111] border border-accent-gold rounded-full hover:bg-white hover:border-white hover:text-[#111111] transition-all duration-300 text-center shadow-xl cursor-pointer flex items-center justify-center gap-2"
              onClick={() => navigateTo("/", "services")}
            >
              <span>EXPLORE OUR SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              className="group font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] py-3.5 px-7 bg-white/95 backdrop-blur-md text-[#111111] border border-white rounded-full hover:bg-accent-gold hover:border-accent-gold hover:text-[#111111] transition-all duration-300 text-center shadow-xl cursor-pointer flex items-center justify-center gap-2"
              onClick={() => navigateTo("/", "projects")}
            >
              <span>VIEW OUR PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
