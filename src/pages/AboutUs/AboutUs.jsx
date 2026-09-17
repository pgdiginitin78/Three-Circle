import React from "react";
import { motion } from "framer-motion";
import BlueprintGrid from "./BlueprintGrid";
import { FadeUpText, WordReveal } from "./AnimatedText";
import ArchitecturalCanvas from "./ArchitecturalCanvas";
import SectionTag from "../../components/SectionTag";
import aboutBackImg from "../../assets/aboutback.png";
import leadershipImg from "../../assets/about/leadership.png";
import establishmentImg from "../../assets/about/establishment.png";
import transitionImg from "../../assets/about/transition.png";
import safetyImg from "../../assets/about/saftey.png";
import strengthImg from "../../assets/about/strength.png";
import buildingImg from "../../assets/services/building.jpg";
import infrastructureImg from "../../assets/services/infrastructure.jpg";
import bridgeImg from "../../assets/services/bridge.png";

const narrativeSections = [
  {
    num: "01",
    label: "LEADERSHIP & LEGACY",
    title: "LEADERSHIP & LEGACY",
    image: leadershipImg,
    slogan: ["EXPERIENCE", "BUILDS", "BETTER", "TOMORROW"],
    paragraphs: [
      "At the helm of 3 CIRCLES OPC P LTD is Mr. Sidharth Jaiswal, a Civil Engineer with a Diploma and a Bachelor's degree from Mumbai University. With hands-on experience in the family construction business and adept management skills developed under the mentorship of his father, Mr. Vijay Jaiswal, Mr. Sidharth Jaiswal leads the company into a new era.",
    ],
  },
  {
    num: "02",
    label: "ESTABLISHMENT & EXPERTISE",
    title: "ESTABLISHMENT & EXPERTISE",
    image: establishmentImg,
    slogan: ["FOUNDATIONAL", "ROLE IN", "NATION", "BUILDING"],
    paragraphs: [
      "Founded in 1979, Three Circles Construction Company, now 3 CIRCLES OPC P LTD, specializes in executing government construction projects. The company has played a foundational role in the development of New Bombay and has actively contributed to nation-building. Engaging in notable projects like JNPT Port, Three Circles has collaborated with prestigious multinational companies such as HYUNDAI, MITSUI, XANON VERSATOP, KLOCKNER, and many more., showcasing both technical expertise and financial stability for high-value endeavors.",
    ],
  },
  {
    num: "03",
    label: "TRANSITION & CONTINUITY",
    title: "TRANSITION & CONTINUITY",
    image: transitionImg,
    slogan: ["SUSTAINED", "GROWTH &", "UNWAVERING", "LEGACY"],
    paragraphs: [
      'In 2021, recognizing the importance of preserving its legacy, the company underwent a strategic transition to become "3 CIRCLES OPC P LTD." This private limited entity, with Mr. Vijay Jaiswal as Director and Mr. Sidharth Jaiswal as Managing Director, reflects a commitment to sustained growth and unwavering continuity in the construction industry.',
    ],
  },
];

const directors = [
  {
    name: "MR. VIJAY JAISWAL",
    role: "Director",
    image: "/directors/vijay_portrait.png",
    period: "Foundational Leadership",
    desc: "Guiding visionary direction with decades of pioneering execution across foundational government and infrastructure endeavors.",
  },
  {
    name: "MR. SIDDHARTH JAISWAL",
    role: "Managing Director",
    image: "/directors/siddharth_portrait.png",
    period: "Strategic Direction",
    desc: "Civil Engineer (Diploma & B.E. Mumbai University) spearheading strategic modernization, high-value partnerships, and sustainable growth.",
  },
];

export default function AboutUs() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary mx-auto selection:bg-brand-gold selection:text-white overflow-hidden">
      <BlueprintGrid />

      <section
        id="overview"
        className="relative pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20 min-h-[440px] sm:min-h-[480px] flex flex-col justify-center overflow-hidden"
      >
        {/* Background Image Layer with Slow Cinematic Zoom & Fade */}
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        >
          <img
            src={aboutBackImg}
            alt="About Background"
            className="w-full h-full object-cover object-center contrast-[1.05]"
          />
        </motion.div>

        <ArchitecturalCanvas />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            {/* Tag Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4"
            >
              <SectionTag text="ABOUT US" />
            </motion.div>

            {/* Main Headline Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px] font-bold tracking-tight !text-white text-text-light uppercase leading-[1.1] mt-3 sm:mt-4 mb-5 sm:mb-6 md:mb-8 max-w-full sm:max-w-xl md:max-w-2xl"
              style={{ color: "#ffffff" }}
            >
              The Evolution From Three Circles To 3 Circles OPC P LTD.
            </motion.h1>

            {/* Metric Footer Row with Staggered Slow Fade */}
            <div className="relative pt-6 sm:pt-7 md:pt-8">
              {/* Expanding Divider Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 via-white/20 to-transparent origin-left"
              />

              <div className="flex flex-wrap items-start gap-5 sm:gap-8 md:gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-gold block mb-1">
                    1979
                  </span>
                  <span
                    className="font-display text-[8px] sm:text-[9px] md:text-[10px] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] !text-white/90 uppercase"
                    style={{ color: "rgba(255, 255, 255, 0.9)" }}
                  >
                    Legacy Founded
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-gold block mb-1">
                    45+ YRS
                  </span>
                  <span
                    className="font-display text-[8px] sm:text-[9px] md:text-[10px] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] !text-white/90 uppercase"
                    style={{ color: "rgba(255, 255, 255, 0.9)" }}
                  >
                    Govt &amp; Infrastructure
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-gold block mb-1">
                    MNC Tier
                  </span>
                  <span
                    className="font-display text-[8px] sm:text-[9px] md:text-[10px] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] !text-white/90 uppercase"
                    style={{ color: "rgba(255, 255, 255, 0.9)" }}
                  >
                    Global Partnerships
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="history"
        className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-4 sm:pb-6 md:pb-8 lg:pb-10 relative z-10 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="flex flex-col">
            {narrativeSections.map((item, idx) => {
              if (item.num === "02") {
                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 45, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 1.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 my-4 sm:my-6 border-t border-brand-darkblue/[0.12] overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                      {/* LEFT COLUMN: Header, Stats, 2x2 Feature Cards Grid, Explore Link */}
                      <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between">
                        <div>
                          
                          {/* Main Headline */}
                          <motion.h3
                            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-lg sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[34px] font-extrabold tracking-tight text-brand-darkblue uppercase leading-tight mt-2 sm:mt-3 mb-4"
                          >
                            ESTABLISHMENT AND EXPERTISE
                          </motion.h3>

                          {/* Description Paragraph */}
                          <motion.div
                            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col mb-4"
                          >
                            <p className="font-body text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                              Founded in 1979, Three Circles Construction Company, now 3 CIRCLES OPC P LTD, has built a reputation for delivering world-class construction solutions. The company specializes in end-to-end project execution, from conceptualization to handover, with a strong commitment to safety, quality and innovation.
                            </p>
                            <p className="font-body text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mt-2">
                              With a skilled team and a legacy of trusted partnerships, we continue to contribute to iconic infrastructure and sustainable development across India and beyond.
                            </p>
                          </motion.div>

                          {/* 2x2 Feature Cards Grid */}
                          <motion.div
                            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mt-5 sm:mt-6"
                          >
                            
                            {/* Card 1: Highlighted Dark Navy Card */}
                            <div className="bg-[#000435] text-white rounded-xl p-3.5 sm:p-4 shadow-md border border-brand-gold/30 hover:border-brand-gold hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,4,53,0.35)] transition-all duration-500 ease-out relative overflow-hidden group flex flex-col justify-between min-h-[122px] sm:min-h-[130px] cursor-pointer">
                              {/* Subtle Background Watermark */}
                              <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 pointer-events-none transform translate-x-2 translate-y-2 group-hover:scale-110 transition-all duration-500">
                                <svg className="w-18 h-18 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11" />
                                </svg>
                              </div>

                              {/* Top Row: Icon on left, Arrow on right */}
                              <div className="flex items-center justify-between mb-2.5">
                                <div className="w-7.5 h-7.5 rounded-full bg-brand-gold text-brand-darkblue flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-white group-hover:text-brand-darkblue transition-all duration-300">
                                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                                  </svg>
                                </div>
                                <div className="w-5.5 h-5.5 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-gold group-hover:text-brand-darkblue group-hover:border-brand-gold group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300">
                                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>

                              {/* Content Section */}
                              <div>
                                <h4 className="font-display text-[11px] sm:text-xs font-black tracking-wider !text-white uppercase mb-0.5">
                                  GOVERNMENT PROJECTS
                                </h4>
                                <div className="w-3.5 group-hover:w-8 h-[1.5px] bg-brand-gold mb-1 transition-all duration-300" />
                                <p className="font-body text-[10.5px] sm:text-[11px] text-white/75 group-hover:text-white font-normal leading-relaxed transition-colors duration-300">
                                  Nation building through critical infrastructure.
                                </p>
                              </div>
                            </div>

                            {/* Card 2: Light Card */}
                            <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 sm:p-4 shadow-xs hover:border-brand-gold hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,4,53,0.08)] transition-all duration-500 ease-out relative overflow-hidden group flex flex-col justify-between min-h-[122px] sm:min-h-[130px] cursor-pointer">
                              {/* Top Row: Icon on left, Arrow on right */}
                              <div className="flex items-center justify-between mb-2.5">
                                <div className="w-7.5 h-7.5 rounded-full bg-slate-100 text-brand-darkblue flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-300">
                                  <svg className="w-3.5 h-3.5 text-brand-darkblue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 19L20 19M4 19V9M20 19V9M4 9L12 3L20 9M9 19v-5a3 3 0 016 0v5" />
                                  </svg>
                                </div>
                                <div className="w-5.5 h-5.5 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-brand-darkblue group-hover:text-white group-hover:border-brand-darkblue group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300">
                                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>

                              {/* Content Section */}
                              <div>
                                <h4 className="font-display text-[11px] sm:text-xs font-black tracking-wider text-brand-darkblue uppercase mb-0.5">
                                  ICONIC DEVELOPMENTS
                                </h4>
                                <div className="w-3.5 group-hover:w-8 h-[1.5px] bg-brand-gold mb-1 transition-all duration-300" />
                                <p className="font-body text-[10.5px] sm:text-[11px] text-slate-500 group-hover:text-slate-700 font-normal leading-relaxed transition-colors duration-300">
                                  Creating landmarks that define progress.
                                </p>
                              </div>
                            </div>

                            {/* Card 3: Light Card */}
                            <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 sm:p-4 shadow-xs hover:border-brand-gold hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,4,53,0.08)] transition-all duration-500 ease-out relative overflow-hidden group flex flex-col justify-between min-h-[122px] sm:min-h-[130px] cursor-pointer">
                              {/* Top Row: Icon on left, Arrow on right */}
                              <div className="flex items-center justify-between mb-2.5">
                                <div className="w-7.5 h-7.5 rounded-full bg-slate-100 text-brand-darkblue flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-300">
                                  <svg className="w-3.5 h-3.5 text-brand-darkblue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                                  </svg>
                                </div>
                                <div className="w-5.5 h-5.5 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-brand-darkblue group-hover:text-white group-hover:border-brand-darkblue group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300">
                                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>

                              {/* Content Section */}
                              <div>
                                <h4 className="font-display text-[11px] sm:text-xs font-black tracking-wider text-brand-darkblue uppercase mb-0.5">
                                  GLOBAL COLLABORATIONS
                                </h4>
                                <div className="w-3.5 group-hover:w-8 h-[1.5px] bg-brand-gold mb-1 transition-all duration-300" />
                                <p className="font-body text-[10.5px] sm:text-[11px] text-slate-500 group-hover:text-slate-700 font-normal leading-relaxed transition-colors duration-300">
                                  Partnering across borders for greater possibilities.
                                </p>
                              </div>
                            </div>

                            {/* Card 4: Light Card */}
                            <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 sm:p-4 shadow-xs hover:border-brand-gold hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,4,53,0.08)] transition-all duration-500 ease-out relative overflow-hidden group flex flex-col justify-between min-h-[122px] sm:min-h-[130px] cursor-pointer">
                              {/* Top Row: Icon on left, Arrow on right */}
                              <div className="flex items-center justify-between mb-2.5">
                                <div className="w-7.5 h-7.5 rounded-full bg-slate-100 text-brand-darkblue flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-300">
                                  <svg className="w-3.5 h-3.5 text-brand-darkblue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
                                  </svg>
                                </div>
                                <div className="w-5.5 h-5.5 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-brand-darkblue group-hover:text-white group-hover:border-brand-darkblue group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300">
                                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>

                              {/* Content Section */}
                              <div>
                                <h4 className="font-display text-[11px] sm:text-xs font-black tracking-wider text-brand-darkblue uppercase mb-0.5">
                                  LASTING IMPACT
                                </h4>
                                <div className="w-3.5 group-hover:w-8 h-[1.5px] bg-brand-gold mb-1 transition-all duration-300" />
                                <p className="font-body text-[10.5px] sm:text-[11px] text-slate-500 group-hover:text-slate-700 font-normal leading-relaxed transition-colors duration-300">
                                  Engineering today for a sustainable future.
                                </p>
                              </div>
                            </div>

                          </motion.div>
                        </div>
                      </div>

                      {/* RIGHT COLUMN: Hero Photo Portal with Clean Shape */}
                      <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center">
                        <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl group border border-slate-200/80 bg-slate-900">
                          {/* Image Anime Curtain Reveal Overlay */}
                          <motion.div
                            initial={{ scaleX: 1 }}
                            whileInView={{ scaleX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 bg-[#000435] z-20 origin-right pointer-events-none"
                          />
                          <motion.img
                            initial={{ scale: 1.3, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 3.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            src={item.image || establishmentImg}
                            alt="Three Circles Construction Site"
                            className="w-full h-full object-cover object-center contrast-[1.05] group-hover:scale-105 transition-transform duration-1000 ease-out"
                          />
                          
                          {/* Ambient Dark Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/70 via-transparent to-black/20 pointer-events-none z-10" />
                        </div>

                        {/* Bottom Right Geometric Gold Bar Accent */}
                        <div className="absolute -bottom-4 -right-4 z-20 hidden lg:flex flex-col gap-1.5 pointer-events-none">
                          <div className="w-20 h-3 bg-brand-gold rounded-xs shadow-md" />
                          <div className="w-12 h-2.5 bg-brand-darkblue rounded-xs ml-8 shadow-sm" />
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              }

              if (item.num === "03") {
                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 45, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 2.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-screen left-1/2 -translate-x-1/2 mt-4 sm:mt-6 mb-0 overflow-hidden bg-[#03091e] border-y border-brand-darkblue/20"
                  >
                    {/* Full Page Section Cover with transition.png Background */}
                    <div className="relative w-full min-h-[340px] sm:min-h-[370px] lg:min-h-[400px] flex items-center py-6 sm:py-8 lg:py-10">
                      
                      {/* Background Image: transition.png with ultra-slow cinematic zoom & blur reveal */}
                      <motion.img
                        src={transitionImg}
                        alt="Transition & Continuity Background"
                        initial={{ scale: 1.28, filter: "blur(10px) brightness(0.7)" }}
                        whileInView={{ scale: 1.04, filter: "blur(1.2px) brightness(0.96)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 4.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full object-cover object-center contrast-[1.1] z-0"
                      />

                      {/* Dark Vignette Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#03091e]/90 via-[#03091e]/65 to-[#03091e]/35 pointer-events-none z-10" />

                      {/* Animated Gold Ambient Spotlight Ray */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 via-transparent to-brand-darkblue/40 pointer-events-none z-10 animate-pulse" />

                      {/* Content Container aligned with site grid */}
                      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                        
                        {/* LEFT COLUMN: Title & Description */}
                        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center h-full pr-0 lg:pr-6 py-2 sm:py-3">
                          <div className="mt-1 sm:mt-2">

                            {/* Headline */}
                            <motion.h3 
                              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                              viewport={{ once: true }}
                              transition={{ duration: 2.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[34px] tracking-tight uppercase leading-[1.15] mb-4 sm:mb-5 lg:mb-6 !text-white" 
                              style={{ fontFamily: "var(--font-display, 'Outfit', sans-serif)", color: "#ffffff" }}
                            >
                              TRANSITION &amp; CONTINUITY
                            </motion.h3>

                            {/* Description */}
                            <motion.p 
                              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                              viewport={{ once: true }}
                              transition={{ duration: 2.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                              className="font-body text-xs sm:text-sm md:text-[15px] text-white/85 leading-relaxed font-normal mb-0 max-w-xl mt-3 sm:mt-4" 
                              style={{ fontFamily: "var(--font-body, 'Inter', sans-serif)" }}
                            >
                              In 2021, recognizing the importance of preserving its legacy, the company underwent a strategic transition to become <strong className="text-brand-gold font-semibold">&quot;3 CIRCLES OPC P LTD.&quot;</strong> This private limited entity, with <span className="text-white font-medium">Mr. Vijay Jaiswal</span> as Director and <span className="text-white font-medium">Mr. Sidharth Jaiswal</span> as Managing Director, reflects a commitment to sustained growth and unwavering continuity in the construction industry.
                            </motion.p>

                          </div>
                        </div>

                        {/* RIGHT COLUMN: Vertical Timeline Node Chain with Animated Connecting Line */}
                        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center gap-4 relative pl-4 lg:pl-10 border-t lg:border-t-0 lg:border-l border-white/15 pt-4 lg:pt-0">
                          
                          {/* Animated Vertical Line */}
                          <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-4 lg:left-10 top-6 bottom-6 w-[2px] bg-gradient-to-b from-brand-gold via-brand-gold/50 to-transparent origin-top z-0 hidden"
                          />

                          {/* Node 1 */}
                          <motion.div 
                            initial={{ opacity: 0, x: 35, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-start gap-3.5 relative group cursor-default"
                          >
                            <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.9)] shrink-0 mt-0.5 group-hover:scale-130 transition-transform duration-300" />
                            <div className="flex flex-col">
                              <span className="font-display text-xs sm:text-[13px] font-extrabold tracking-wider text-white uppercase group-hover:text-brand-gold transition-colors duration-300">
                                STRATEGIC TRANSITION
                              </span>
                              <span className="font-display text-[9.5px] sm:text-[10px] font-semibold tracking-wider text-white/70 uppercase mt-0.5">
                                A BOLDER DIRECTION
                              </span>
                            </div>
                          </motion.div>

                          {/* Node 2 */}
                          <motion.div 
                            initial={{ opacity: 0, x: 35, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-start gap-3.5 relative group cursor-default"
                          >
                            <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.9)] shrink-0 mt-0.5 group-hover:scale-130 transition-transform duration-300" />
                            <div className="flex flex-col">
                              <span className="font-display text-xs sm:text-[13px] font-extrabold tracking-wider text-white uppercase group-hover:text-brand-gold transition-colors duration-300">
                                STRONGER FOUNDATION
                              </span>
                              <span className="font-display text-[9.5px] sm:text-[10px] font-semibold tracking-wider text-white/70 uppercase mt-0.5">
                                BUILT ON TRUST
                              </span>
                            </div>
                          </motion.div>

                          {/* Node 3 */}
                          <motion.div 
                            initial={{ opacity: 0, x: 35, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-start gap-3.5 relative group cursor-default"
                          >
                            <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.9)] shrink-0 mt-0.5 group-hover:scale-130 transition-transform duration-300" />
                            <div className="flex flex-col">
                              <span className="font-display text-xs sm:text-[13px] font-extrabold tracking-wider text-white uppercase group-hover:text-brand-gold transition-colors duration-300">
                                CONTINUING THE LEGACY
                              </span>
                              <span className="font-display text-[9.5px] sm:text-[10px] font-semibold tracking-wider text-white/70 uppercase mt-0.5">
                                PEOPLE | PROJECTS | PURPOSE
                              </span>
                            </div>
                          </motion.div>

                          {/* Node 4 */}
                          <motion.div 
                            initial={{ opacity: 0, x: 35, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-start gap-3.5 relative group cursor-default"
                          >
                            <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.9)] shrink-0 mt-0.5 group-hover:scale-130 transition-transform duration-300" />
                            <div className="flex flex-col">
                              <span className="font-display text-xs sm:text-[13px] font-extrabold tracking-wider text-white uppercase group-hover:text-brand-gold transition-colors duration-300">
                                A BRIGHTER TOMORROW
                              </span>
                              <span className="font-display text-[9.5px] sm:text-[10px] font-semibold tracking-wider text-white/70 uppercase mt-0.5">
                                SUSTAINABLE GROWTH
                              </span>
                            </div>
                          </motion.div>

                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 45, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 1.6,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative w-full py-4 sm:py-6 md:py-7 overflow-hidden ${
                    idx > 0 ? "border-t border-brand-darkblue/[0.08]" : ""
                  }`}
                >
                  {/* Background Subtle Diagonal Stripes Accent */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_50%,rgba(212,175,55,0.03)_70%,transparent_90%)] pointer-events-none z-0" />

                  <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[200px] lg:min-h-[240px] relative z-10">

                    {/* Left Column: Image Display Banner with Image Anime Curtain Effect */}
                    <div className="md:col-span-5 lg:col-span-4 relative w-full flex items-center justify-center p-2 sm:p-3">
                      <div className="relative w-full h-[190px] sm:h-[220px] md:h-[240px] lg:h-[260px] rounded-xs overflow-hidden shadow-lg border border-brand-darkblue/10 bg-white group-hover:shadow-xl group-hover:border-brand-gold/40 transition-all duration-500 group">
                        {/* Image Anime Curtain Reveal Overlay */}
                        <motion.div
                          initial={{ scaleX: 1 }}
                          whileInView={{ scaleX: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute inset-0 bg-[#000435] z-20 origin-right pointer-events-none"
                        />
                        <motion.img
                          initial={{ scale: 1.3, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 3.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain md:object-cover contrast-[1.05] group-hover:scale-108 transition-transform duration-1000 ease-out"
                        />
                      </div>
                    </div>

                    {/* Center Column: Title, Gold Bar & Paragraphs */}
                    <div className="md:col-span-7 lg:col-span-6 p-4 sm:p-6 lg:py-3 lg:px-6 flex flex-col justify-center relative z-10">
                      <motion.h3
                        initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-brand-darkblue uppercase leading-tight mb-4 sm:mb-5"
                      >
                        {item.title}
                      </motion.h3>

                      <div className="flex flex-col gap-3">
                        <motion.p
                          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="font-body text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal max-w-2xl"
                        >
                          At the helm of <strong className="text-brand-darkblue font-semibold">&quot;3 CIRCLES OPC P LTD&quot;</strong> is <span className="text-brand-darkblue font-semibold">Mr. Sidharth Jaiswal</span>, a Civil Engineer with a Diploma and a Bachelor&apos;s degree from Mumbai University. With hands-on experience in the family construction business and adept management skills developed under the mentorship of his father, <span className="text-brand-darkblue font-semibold">Mr. Vijay Jaiswal</span>, Mr. Sidharth Jaiswal leads the company into a new era.
                        </motion.p>
                      </div>
                    </div>

                    {/* Right Column: Vertical Slogan Scribe (LG screens) */}
                    <motion.div
                      initial={{ opacity: 0, x: 25, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="hidden lg:flex lg:col-span-2 items-center justify-center p-6 border-l border-brand-darkblue/[0.07] relative z-10 bg-slate-50/40"
                    >
                      {/* Top Right Corner Line Accent */}
                      <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 right-0 w-px h-10 bg-brand-gold/40" />
                        <div className="absolute top-0 right-0 h-px w-10 bg-brand-gold/40" />
                      </div>

                      <div className="flex flex-col items-start gap-1">
                        {item.slogan.map((line, sIdx) => (
                          <span
                            key={sIdx}
                            className="font-display text-[9.5px] xl:text-[10.5px] font-black tracking-[0.25em] text-brand-darkblue/80 uppercase leading-snug"
                          >
                            {line}
                          </span>
                        ))}
                        <div className="w-8 h-[2.5px] bg-brand-gold mt-3" />
                      </div>
                    </motion.div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="leadership"
        className="pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-8 sm:pb-12 md:pb-16 bg-bg-secondary border-t border-b border-brand-darkblue/[0.08] relative z-10 overflow-hidden"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10"
          >
            <div>
              <div className="mb-2 sm:mb-3">
                <SectionTag text="Executive Leadership" />
              </div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold tracking-tight text-text-primary uppercase">
                Board of Directors
              </h2>
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-xs font-semibold text-text-secondary uppercase tracking-widest">
                3 Circles OPC P LTD • Governance
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14">
            {directors.map((director, i) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 55, filter: "blur(12px)", scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 1.8,
                  delay: i * 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white border border-brand-darkblue/[0.08] rounded-xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_60px_rgba(0,4,53,0.12)] hover:border-brand-gold/60 hover:-translate-y-2.5 transition-all duration-700 ease-out flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Modern Geometric Corner Line Accents */}
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-px h-8 sm:h-10 bg-brand-gold/40 transition-all duration-500 group-hover:h-16 sm:group-hover:h-18 group-hover:bg-brand-gold" />
                  <div className="absolute top-0 right-0 h-px w-8 sm:w-10 bg-brand-gold/40 transition-all duration-500 group-hover:w-16 sm:group-hover:w-18 group-hover:bg-brand-gold" />
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8 mb-5 sm:mb-6">
                    {/* Director Portrait with GSAP-style Scale & Blur reveal */}
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0, filter: "blur(8px)" }}
                      whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, delay: i * 0.35 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-34 xl:h-34 rounded-full p-1 bg-gradient-to-b from-brand-gold/50 via-black/10 to-transparent shadow-lg group-hover:from-brand-gold group-hover:scale-108 transition-all duration-500"
                    >
                      <div className="w-full h-full rounded-full overflow-hidden bg-bg-tertiary border border-brand-darkblue/10 relative">
                        <img
                          src={director.image}
                          alt={`${director.name} - ${director.role}`}
                          className="w-full h-full object-cover contrast-[1.05] group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                          loading="lazy"
                        />
                      </div>
                    </motion.div>

                    {/* Name, Role & Period with staggered de-blur */}
                    <motion.div
                      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: i * 0.35 + 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col text-center sm:text-left justify-center sm:pt-2 pr-4 sm:pr-6 md:pr-8"
                    >
                      <span className="font-mono text-[9px] sm:text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1 sm:mb-1.5">
                        {director.period}
                      </span>
                      <h3 className="font-display text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-extrabold text-text-primary tracking-tight uppercase whitespace-nowrap">
                        {director.name}
                      </h3>
                      <p className="font-display text-xs sm:text-sm md:text-base font-bold text-brand-gold tracking-wide uppercase mt-1">
                        {director.role}
                      </p>
                      <div className="h-0.5 w-10 sm:w-12 bg-brand-gold/60 mt-2 sm:mt-3 mx-auto sm:mx-0 group-hover:w-16 sm:group-hover:w-20 transition-all duration-300" />
                    </motion.div>
                  </div>

                  {/* Biography Paragraph with staggered de-blur */}
                  <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: i * 0.35 + 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed mb-5 sm:mb-6"
                  >
                    {director.desc}
                  </motion.p>
                </div>

                <div className="pt-5 sm:pt-6 border-t border-brand-darkblue/[0.06] flex items-center justify-between">
                  <span className="font-display text-[8px] sm:text-[9px] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-text-primary uppercase">
                    3 Circles OPC P LTD
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold group-hover:scale-150 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Safety & Quality Section */}
      <section
        id="safety"
        className="relative py-10 sm:py-14 md:py-16 lg:py-20 overflow-hidden bg-slate-950 text-white border-t border-brand-darkblue/20"
      >
        {/* Background Image Layer with Dark Overlay for readability and theme alignment */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <motion.img
            src={safetyImg}
            alt="Safety & Quality Background"
            initial={{ scale: 1.25, filter: "brightness(0.7) blur(6px)" }}
            whileInView={{ scale: 1.04, filter: "brightness(0.95) blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover object-center contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03091e]/85 via-[#03091e]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03091e]/70 via-transparent to-[#03091e]/40" />
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 sm:mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-[2.5px] bg-brand-gold" />
              <span className="font-mono text-xs sm:text-sm font-extrabold text-brand-gold uppercase tracking-[0.25em]">
                HSE &amp; GOVERNANCE
              </span>
            </div>

            <h2
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight !text-white uppercase leading-none mb-0"
              style={{ color: "#ffffff" }}
            >
              SAFETY &amp; QUALITY POLICIES
            </h2>
          </motion.div>

          {/* Cards & Overlay Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-0">
            
            {/* 2 Glass Cards Container */}
            <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-5">
              
              {/* Card 1: Safety Policy */}
              <motion.div
                initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-900/60 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 lg:p-5.5 flex flex-col justify-between shadow-xl hover:border-brand-gold hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)] hover:bg-slate-900/80 transition-all duration-700 ease-out group cursor-pointer"
              >
                <div>
                  {/* Top Shield Icon (Gold) */}
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-2.5 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-slate-950 transition-all duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                  </div>

                  {/* Card Title */}
                  <h3
                    className="font-display text-base sm:text-lg font-black !text-white uppercase tracking-wider mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    SAFETY POLICY
                  </h3>

                  {/* Paragraph Text */}
                  <p className="font-body text-xs sm:text-[12.5px] text-white/85 leading-relaxed font-normal mb-3.5">
                  We 3 Circles, our commitment is to prioritize the Safety, Health, and Welfare of all employees, workers, and clients, aiming for a Safe, Zero Accident, and Environmentally friendly workplace. We emphasize effective utilization of natural resources as a top management priority. Managers are responsible for providing a secure working environment, tools, and equipment. All employees and workers share the responsibility for HSE, focusing on prevention and continual improvement.
                  </p>
                </div>

                {/* Tag Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="inline-flex items-center bg-white text-slate-900 text-[9.5px] sm:text-[10px] font-display font-extrabold uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm hover:bg-brand-gold hover:text-slate-950 transition-colors cursor-default">
                    ZERO ACCIDENT GOAL
                  </span>
                  <span className="inline-flex items-center bg-white text-slate-900 text-[9.5px] sm:text-[10px] font-display font-extrabold uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm hover:bg-brand-gold hover:text-slate-950 transition-colors cursor-default">
                    HSE RESPONSIBILITY
                  </span>
                  <span className="inline-flex items-center bg-white text-slate-900 text-[9.5px] sm:text-[10px] font-display font-extrabold uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm hover:bg-brand-gold hover:text-slate-950 transition-colors cursor-default">
                    RESOURCE CONSERVATION
                  </span>
                </div>
              </motion.div>

              {/* Card 2: Quality Policy */}
              <motion.div
                initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-900/60 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 lg:p-5.5 flex flex-col justify-between shadow-xl hover:border-brand-gold hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)] hover:bg-slate-900/80 transition-all duration-700 ease-out group cursor-pointer"
              >
                <div>
                  {/* Top Cog Icon (Gold) */}
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-2.5 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-slate-950 transition-all duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                  </div>

                  {/* Card Title */}
                  <h3
                    className="font-display text-base sm:text-lg font-black !text-white uppercase tracking-wider mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    QUALITY POLICY
                  </h3>

                  {/* Paragraph Text */}
                  <p className="font-body text-xs sm:text-[12.5px] text-white/85 leading-relaxed font-normal mb-3.5">
                  We are dedicated to meeting customer expectations by delivering top-notch products and services promptly and within budget. We are committed to ongoing improvement in people, systems, processes, and technology to meet the current and future needs of our clients. We strive for continual quality enhancement in all our activities, embracing the latest techniques in Quality Management System and providing effective training to ensure our employees skills align with the evolving demands of our customers in the rapidly advancing technological landscape of India.
                  </p>
                </div>

                {/* Tag Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="inline-flex items-center bg-white text-slate-900 text-[9.5px] sm:text-[10px] font-display font-extrabold uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm hover:bg-brand-gold hover:text-slate-950 transition-colors cursor-default">
                    ON-TIME &amp; BUDGET
                  </span>
                  <span className="inline-flex items-center bg-white text-slate-900 text-[9.5px] sm:text-[10px] font-display font-extrabold uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm hover:bg-brand-gold hover:text-slate-950 transition-colors cursor-default">
                    QMS BEST PRACTICES
                  </span>
                  <span className="inline-flex items-center bg-white text-slate-900 text-[9.5px] sm:text-[10px] font-display font-extrabold uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm hover:bg-brand-gold hover:text-slate-950 transition-colors cursor-default">
                    SKILLS &amp; TECHNOLOGY
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Right Side Text Overlay Slogan (Under hard hat area in background image) */}
            <motion.div
              initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 xl:col-span-4 flex flex-col justify-end items-start lg:items-end text-left lg:text-right pt-4 lg:pt-0"
            >
              <div className="flex flex-col items-start lg:items-end">
                <div className="w-7 h-[2.5px] bg-brand-gold mb-2.5" />
                <p className="font-display text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-white leading-snug">
                  SAFE<br />
                  SUSTAINABLE<br />
                  RESPONSIBLE<br />
                  FOR <span className="text-brand-gold">A BRIGHTER</span><br />
                  TOMORROW
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Core Strengths Section (Matching Reference Design & Website Theme) */}
      <section
        id="strength"
        className="py-10 sm:py-14 md:py-16 relative z-10 bg-white text-brand-darkblue overflow-hidden border-t border-brand-darkblue/[0.08]"
      >
        {/* Decorative Abstract Gold Arcs Background */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none opacity-25 z-0">
          <svg className="w-full h-full text-brand-gold" viewBox="0 0 600 600" fill="none">
            <circle cx="450" cy="150" r="320" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="450" cy="150" r="240" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
          
          {/* Top Header Row (Title & Hero Capsule) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-8 sm:mb-10">
            
            {/* Left Header & Intro Column (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Top Tag */}
              <SectionTag text="CAPACITY & WORKFORCE" className="mb-3" />

              {/* Main Headline */}
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug uppercase mb-3">
                <span className="text-brand-darkblue">Our Core </span>
                Strengths
              </h2>

              {/* Paragraph Description */}
              <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl mt-2.5 sm:mt-3 mb-0">
                With over 45 years of proven execution, 3 Circles brings unmatched technical expertise, skilled manpower, and a future-ready team capable of delivering large-scale infrastructure and civil engineering projects across diverse domains.
              </p>
            </motion.div>

            {/* Right Construction Hero Portal (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="relative w-full h-[210px] sm:h-[240px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
                {/* Image Anime Curtain Reveal Overlay */}
                <motion.div
                  initial={{ scaleX: 1 }}
                  whileInView={{ scaleX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-[#000435] z-20 origin-right pointer-events-none"
                />
                <motion.img
                  initial={{ scale: 1.3, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  src={strengthImg}
                  alt="Construction Site Strengths"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
              </div>
            </motion.div>

          </div>
          {/* 4 Stat Cards Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-white to-blue-50/40 border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-brand-gold/80 hover:-translate-y-1.5 transition-all duration-500 ease-out flex items-center justify-between gap-3 group cursor-pointer"
            >
              {/* Left Pentagon/Chevron Icon Badge */}
              <div className="relative shrink-0 w-11 h-11 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-gold rounded-xl transform rotate-12 scale-95 opacity-80 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative w-11 h-11 bg-[#000435] rounded-xl flex items-center justify-center text-white shadow-md border border-white/10 group-hover:bg-brand-gold group-hover:text-brand-darkblue transition-colors duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
              </div>

              {/* Middle Content */}
              <div className="flex-1 min-w-0 pl-2.5 sm:pl-3.5">
                <h4 className="font-display text-lg sm:text-xl font-bold text-brand-darkblue uppercase tracking-tight mb-0.5">
                  45+ YRS
                </h4>
                <p className="font-display text-[9.5px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  PROVEN TRACK RECORD
                </p>
                <div className="w-6 group-hover:w-12 h-[2.5px] bg-brand-gold rounded-full transition-all duration-300" />
              </div>

              {/* Right Side Arrow */}
              <div className="flex items-center shrink-0 pl-2 border-l border-slate-200/70">
                <svg className="w-4 h-4 text-brand-gold group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden bg-gradient-to-r from-amber-50/50 via-white to-amber-50/30 border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-brand-gold/80 hover:-translate-y-1.5 transition-all duration-500 ease-out flex items-center justify-between gap-3 group cursor-pointer"
            >
              {/* Left Gold Circle + Arc Ring Icon Badge */}
              <div className="relative shrink-0 w-11 h-11 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-brand-darkblue border-r-transparent border-b-transparent transform -rotate-45 group-hover:rotate-180 transition-transform duration-700" />
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F5D061] to-[#E5B532] flex items-center justify-center text-brand-darkblue shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-brand-darkblue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>

              {/* Middle Content */}
              <div className="flex-1 min-w-0 pl-2.5 sm:pl-3.5">
                <h4 className="font-display text-lg sm:text-xl font-bold text-brand-darkblue uppercase tracking-tight mb-0.5">
                  60+
                </h4>
                <p className="font-display text-[9.5px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  FIELD &amp; TECHNICAL PERSONNEL
                </p>
                <div className="w-6 group-hover:w-12 h-[2.5px] bg-brand-gold rounded-full transition-all duration-300" />
              </div>

              {/* Right Side Arrow */}
              <div className="flex items-center shrink-0 pl-2 border-l border-slate-200/70">
                <svg className="w-4 h-4 text-brand-gold group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden bg-gradient-to-r from-slate-100/60 via-white to-blue-50/30 border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-brand-gold/80 hover:-translate-y-1.5 transition-all duration-500 ease-out flex items-center justify-between gap-3 group cursor-pointer"
            >
              {/* Left Hexagonal Navy Badge */}
              <div className="relative shrink-0 w-11 h-11 flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#000435] to-[#0A1145] rounded-xl border border-brand-gold/50 shadow-sm flex items-center justify-center text-white transform rotate-45 group-hover:rotate-[225deg] transition-transform duration-700">
                  <div className="-rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700">
                    <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Middle Content */}
              <div className="flex-1 min-w-0 pl-2.5 sm:pl-3.5">
                <h4 className="font-display text-lg sm:text-xl font-bold text-brand-darkblue uppercase tracking-tight mb-0.5">
                  14
                </h4>
                <p className="font-display text-[9.5px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  SPECIALIZED DEPARTMENTS
                </p>
                <div className="w-6 group-hover:w-12 h-[2.5px] bg-brand-gold rounded-full transition-all duration-300" />
              </div>

              {/* Right Side Arrow */}
              <div className="flex items-center shrink-0 pl-2 border-l border-slate-200/70">
                <svg className="w-4 h-4 text-brand-gold group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden bg-gradient-to-r from-amber-50/40 via-white to-amber-100/20 border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-brand-gold/80 hover:-translate-y-1.5 transition-all duration-500 ease-out flex items-center justify-between gap-3 group cursor-pointer"
            >
              {/* Left White Circle + Gold Arc Icon Badge */}
              <div className="relative shrink-0 w-11 h-11 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-brand-gold border-t-transparent border-l-transparent transform rotate-45 group-hover:rotate-225 transition-transform duration-700" />
                <div className="w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-brand-darkblue group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4.5 h-4.5 text-brand-darkblue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                    <path d="M3 20h18" />
                  </svg>
                </div>
              </div>

              {/* Middle Content */}
              <div className="flex-1 min-w-0 pl-2.5 sm:pl-3.5">
                <h4 className="font-display text-lg sm:text-xl font-bold text-brand-darkblue uppercase tracking-tight mb-0.5">
                  100%
                </h4>
                <p className="font-display text-[9.5px] sm:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  GOVERNMENT &amp; MNC TIER
                </p>
                <div className="w-6 group-hover:w-12 h-[2.5px] bg-brand-gold rounded-full transition-all duration-300" />
              </div>

              {/* Right Side Arrow */}
              <div className="flex items-center shrink-0 pl-2 border-l border-slate-200/70">
                <svg className="w-4 h-4 text-brand-gold group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}
