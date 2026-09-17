import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  FaGlobe,
  FaShieldAlt,
  FaTools,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaHardHat,
  FaCogs,
  FaTruck,
  FaAward,
  FaBuilding,
  FaUserTie,
  FaChartLine,
  FaHandshake
} from "react-icons/fa";
import { MdPrecisionManufacturing, MdEngineering, MdOutlineCleanHands } from "react-icons/md";
import { BiCategory, BiBuildingHouse } from "react-icons/bi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTransition } from "../../components/PageTransition";
import SectionTag from "../../components/SectionTag";
import lexuraaHeroImg from "../../assets/lexuraahero.png";
import lexurabackImg from "../../assets/lexuraback.png";
import svcBuildingImg from "../../assets/services/building.jpg";
import svcInfraImg from "../../assets/services/infrastructure.jpg";
import svcEarthImg from "../../assets/services/earthmoving.png";
import svcMiningImg from "../../assets/services/mining.jpg";
import regionalBgImg from "../../assets/services/highrise.png";

gsap.registerPlugin(ScrollTrigger);

export default function Lexura() {
  useLenis();
  const { navigateTo } = useTransition();
  const pageRef = useRef(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".lexuraa-fade-up",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".lexuraa-fade-trigger",
            start: "top 85%",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: "civil",
      number: "01",
      category: "Civil & Building Works",
      title: "Structure, Built From the Ground Up",
      icon: <BiBuildingHouse className="w-8 h-8 text-brand-gold" />,
      image: svcBuildingImg,
      desc: "Lexuraa is positioned to undertake civil and building requirements across commercial, institutional, industrial, and high-rise developments.",
      points: [
        "RCC & Structural Works (Formwork, Reinforcement, Concrete)",
        "MEP Coordination alongside primary civil execution",
        "Interior & Architectural Finishing",
        "Cladding & External Façade Building Envelope",
        "High-Rise Construction & Vertical Developments",
      ],
      parentProof: "Documented building portfolio includes civil, interior, MEP, architectural and façade scopes across institutional and airport projects.",
    },
    {
      id: "infra",
      number: "02",
      category: "Infrastructure",
      title: "Infrastructure Designed Around Movement",
      icon: <MdEngineering className="w-8 h-8 text-brand-gold" />,
      image: svcInfraImg,
      desc: "Infrastructure projects demand coordination across terrain, materials, equipment, people, and schedule. Lexuraa encompasses civil works for transportation and public development.",
      points: [
        "Road Construction (New arterial roads, improvements & strengthening)",
        "Highway Works & Expressway Development",
        "Bridge & Overpass Construction (Structural & allied civil works)",
        "Stormwater Drainage Infrastructure",
        "Utility Works & Pipeline Networks",
      ],
      parentProof: "3 Circles portfolio records completed works involving NHAI, PWD, MSRDC, and CIDCO across highways, state roads, overbridges, and drainage.",
    },
    {
      id: "earth",
      number: "03",
      category: "Earthworks",
      title: "Before Something Can Be Built, The Ground Must Be Ready",
      icon: <FaHardHat className="w-8 h-8 text-brand-gold" />,
      image: svcEarthImg,
      desc: "Addressing the foundational stages of construction through excavation and site-development activities with extreme precision.",
      points: [
        "Site Clearing & Site Preparation",
        "Grading & Levelling (Elevations, slopes & profiles)",
        "Bulk Excavation (Large-scale soil & rock removal)",
        "Deep Excavation for foundations & sub-structures",
        "Controlled Earth Movement & Muck Disposal",
      ],
      parentProof: "Parent company's documented capabilities include site clearing, grading, earth moving, deep excavation, and bulk muck disposal.",
    },
    {
      id: "mining",
      number: "04",
      category: "Mining & Crushing",
      title: "Turning Raw Material Into Project-Ready Aggregates",
      icon: <MdPrecisionManufacturing className="w-8 h-8 text-brand-gold" />,
      image: svcMiningImg,
      desc: "Addressing material processing from extraction through crushing and onward bulk transportation.",
      points: [
        "Rock Extraction & Material Recovery",
        "Controlled Drilling & Blasting Operations",
        "Multi-Stage Stone Crushing (Primary & Secondary)",
        "VSI Processing for Manufactured Crushed Sand",
        "Aggregate Material Handling & Site Logistics",
      ],
      parentProof: "350 TPH VSI stone crushing plant, 300 TPH 3-stage plant, and 150 TPH 2-stage plant owned by parent enterprise.",
    },
  ];


  const equipmentStats = [
    { count: "20", label: "Hydraulic Excavators", sub: "Earthmoving" },
    { count: "8", label: "Bulldozers", sub: "Earthmoving" },
    { count: "9", label: "Vibro Rollers", sub: "Compaction" },
    { count: "7", label: "Motor Graders", sub: "Grading" },
    { count: "33+", label: "Concrete Units", sub: "Batching & Mixers" },
    { count: "76", label: "Hauling Units", sub: "Dumpers & Trailers" },
  ];

  const legacyProjects = [
    { title: "Mumbai International Airport Ltd.", desc: "Airside Fire Fighting & Rescue Station, Secondary Fire Station & Boundary Wall", tag: "Aviation Infrastructure" },
    { title: "National High Speed Rail Corp. (NHSRCL)", desc: "Bullet Train Corridor Civil & Foundation Infrastructure", tag: "High Speed Rail" },
    { title: "Mazagon Dock Shipbuilders Limited", desc: "Naval Dockyard Capital Works & Marine Civil Infrastructure", tag: "Marine & Defence" },
    { title: "Chennai Peripheral Ring Road", desc: "Expressway Earthworks, Sub-base & Paving Works", tag: "Highways" },
    { title: "DFCC Corridor CTP-11", desc: "Dedicated Freight Corridor Heavy Rail & Civil Infrastructure", tag: "Freight Corridor" },
    { title: "Maneckji Cooper School (Mumbai)", desc: "Institutional Civil & Structural Construction (Best Quality Award)", tag: "Institutional" },
    { title: "Anant National University (Ahmedabad)", desc: "Educational Campus Buildings & Architectural Scope", tag: "Institutional" },
  ];

  const pillars = [
    { title: "HERITAGE", text: "Parent company established in 1979 with over 45+ years of operational history." },
    { title: "KNOWLEDGE", text: "Deep experience accumulated across airports, dockyards, expressways, and high-rises." },
    { title: "BREADTH", text: "Comprehensive capabilities spanning construction, infrastructure, excavation, and crushing." },
    { title: "RESOURCES", text: "Direct access to 100+ owned heavy machinery units and technical engineering repository." },
    { title: "FOCUS", text: "A business built specifically around the UAE and GCC project ecosystem." },
    { title: "AMBITION", text: "A long-term regional platform designed to grow across the Middle East." },
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-body selection:bg-[var(--brass-bright)] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#070D1B] text-white">
        {/* Background Image with Cinematic Pan/Zoom */}
        <div className="absolute inset-0 z-0 opacity-85 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.08, 1.03, 1],
              x: [0, -15, 10, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            <img
              src={lexuraaHeroImg}
              alt="Lexuraa Hero Infrastructure"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070D1B]/80 via-[#070D1B]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D1B]/60 via-transparent to-transparent opacity-50" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl pt-2 md:pt-4 lg:pt-5"
          >
            <SectionTag text="THE STORY MOVES FORWARD · UAE EXPANSION" className="mb-6" />

            <h1 className="font-display tracking-tight uppercase mb-6 flex flex-col gap-1 text-left drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF3C4] to-brand-gold drop-shadow-[0_2px_12px_rgba(229,195,88,0.3)]">
                LEXURAA
              </span>
              <span className="block text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white/95 leading-[1.2] tracking-normal">
                A New Name For A <span className="shimmer-text">New Horizon</span>
              </span>
            </h1>

            <p className="font-body text-base sm:text-lg md:text-xl text-white/85 font-normal leading-relaxed mt-6 md:mt-8 mb-8 max-w-3xl">
              <strong>Lexuraa</strong> is the UAE expansion of the <strong>3 Circles</strong> enterprise, established to bring decades of construction, heavy civil, and infrastructure expertise into one of the world's most dynamic development markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE IDEA BEHIND LEXURAA */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <SectionTag text="THE IDEA BEHIND LEXURAA" className="mb-3" />
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-brand-darkblue uppercase mb-6">
              <span className="block mb-2">Experience Is The Foundation.</span>
              <span className="block">The Region Is The Opportunity.</span>
            </h2>
            <p className="font-body text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
              Lexuraa has been created around a simple principle: <strong className="font-semibold text-brand-darkblue">experience should create capability, not constrain ambition.</strong>
            </p>
            <p className="font-body text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              The company draws upon the immense technical knowledge accumulated through the 3 Circles journey while developing its own regional identity, relationships, and operating capabilities specifically tailored for the Middle East market.
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              {[
                { title: "ESTABLISHED PARENTAGE", desc: "A proven construction & engineering background." },
                { title: "REGIONAL FOCUS", desc: "A business built specifically for the UAE market." },
                { title: "INDEPENDENT IDENTITY", desc: "A distinct brand with its own future direction." },
                { title: "LONG-TERM AMBITION", desc: "A platform designed to grow across the GCC." },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-display text-xs font-bold text-brand-gold uppercase mb-1">{item.title}</div>
                  <div className="text-slate-700 text-xs font-medium">{item.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-brand-darkblue text-white shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
              <div className="font-display text-xs font-bold tracking-widest uppercase text-brand-gold mb-3">
                Core Philosophy
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold uppercase mb-6 !text-white">
                <span className="block mb-1">"Building an organisation that understands</span>
                <span className="block mb-1">commercial realities & earns its position</span>
                <span className="block">through dependable performance."</span>
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Our objective in the UAE is to respond to project requirements with agility, maintain transparent collaboration, and deliver uncompromised execution from site clearance to structural completion.
              </p>
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/90">
                <span className="text-brand-gold font-bold">OPERATING MANDATE:</span> Built on documented legacy, engineered for GCC speed.
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* 3. WHAT WE DO - SERVICE PORTFOLIO */}
      <section className="py-8 md:py-12 bg-[#F4F6FA] px-6 md:px-12 lg:px-16 lexuraa-fade-trigger relative overflow-hidden">

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #010634 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <SectionTag
              text="Full-Spectrum Capabilities"
              className="mb-2 justify-center"
              lineColor="bg-brand-gold"
              textColor="text-brand-gold"
            />
            <h2 className="font-display text-xl sm:text-2xl md:text-[1.65rem] font-bold leading-tight tracking-tight uppercase text-brand-darkblue whitespace-nowrap">
              From Site Preparation To Structural Delivery
            </h2>
            <p className="font-body text-sm sm:text-base text-slate-500 leading-relaxed mt-4 max-w-2xl mx-auto font-normal">
              Lexuraa's service portfolio is designed around the principal stages and requirements of construction and infrastructure projects in the UAE.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {services.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, boxShadow: "0 24px 48px rgba(1,6,52,0.12)" }}
                className={`bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden flex flex-col sm:flex-row group transition-all duration-300 ${idx >= 2 ? "mt-6" : ""}`}
              >
                {/* Left — Text Content */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between min-w-0">
                  {/* Number + Icon + Category */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-brand-darkblue flex items-center justify-center shrink-0">
                        {React.cloneElement(item.icon, { className: "w-5 h-5 text-white" })}
                      </div>
                      <span className="font-display text-[9px] font-extrabold tracking-[0.25em] text-brand-gold uppercase">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-extrabold uppercase tracking-tight text-brand-darkblue leading-snug mb-2 mt-2">
                      {item.title}
                    </h3>

                    <div className="space-y-1 mb-3">
                      {item.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                          <FaCheckCircle className="w-3 h-3 text-brand-gold shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Details */}
                  <div className="flex items-center gap-2 text-brand-darkblue font-display text-[9px] font-extrabold uppercase tracking-[0.2em] group/link cursor-pointer mt-auto pt-2 border-t border-slate-100">
                    <span className="group-hover/link:text-brand-gold transition-colors duration-200">View Details</span>
                    <div className="w-7 h-7 rounded-full border border-brand-darkblue group-hover/link:border-brand-gold group-hover/link:bg-brand-gold flex items-center justify-center transition-all duration-200">
                      <FaArrowRight className="w-2.5 h-2.5 group-hover/link:text-white transition-colors duration-200" />
                    </div>
                  </div>
                </div>

                {/* Right — Image */}
                <div className="sm:w-40 md:w-48 shrink-0 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    initial={{ scale: 1.15, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Tagline */}
          <motion.div
            className="mt-14 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            
          </motion.div>

        </div>
      </section>






      {/* 6. UAE PRIORITIES & PARTNERSHIPS */}
      <section className="relative overflow-hidden bg-brand-darkblue text-white">

        {/* Background image — right side */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] z-0 pointer-events-none">
          <img
            src={regionalBgImg}
            alt="UAE Skyline"
            className="w-full h-full object-cover object-center"
          />
          {/* Smooth fade from solid navy on left to clear image */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darkblue via-brand-darkblue/20 via-25% to-transparent" />
          {/* Subtle bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/15 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-10 pb-12 md:pb-16">

          {/* Left content */}
          <motion.div
            className="max-w-2xl lg:max-w-3xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Tag */}
            <SectionTag
              text="Regional Strategy"
              className="mb-5"
              lineColor="bg-brand-gold"
              textColor="text-brand-gold"
            />

            {/* Heading */}
            <h2
              className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight uppercase text-white !text-white mb-5 whitespace-nowrap"
              style={{ color: "#FFFFFF" }}
            >
              The Next Chapter Begins
            </h2>

            {/* Paragraph */}
            <p className="font-body text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mt-2.5 sm:mt-3.5 mb-8 sm:mb-10 font-normal max-w-xl">
              The UAE's construction landscape is defined by ambitious development, sophisticated infrastructure, and strong demand for capable project partners. Lexuraa enters with the intent to build a meaningful regional presence.
            </p>

            {/* 4 pillars grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              {[
                { num: "01", icon: <FaHandshake className="w-6 h-6 text-brand-gold" />, title: "Local Relationships", desc: "Building strong connections across developers, consultants & supply ecosystems." },
                { num: "02", icon: <FaAward className="w-6 h-6 text-brand-gold" />, title: "Regional Knowledge", desc: "Deep understanding of local RTA, municipality & UAE engineering standards." },
                { num: "03", icon: <FaChartLine className="w-6 h-6 text-brand-gold" />, title: "Capability Development", desc: "Building localized resources & plant assets for sustained operations." },
               
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg border border-brand-gold/30 bg-brand-gold/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  {/* Title */}
                  <div>
                    <span className="font-display text-xs font-extrabold text-white uppercase tracking-tight">
                      {item.title}
                    </span>
                  </div>
                  {/* Desc */}
                  <p
                    className="font-body text-xs text-white/75 leading-relaxed font-normal"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Bottom tagline */}
            <motion.div
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="h-[1px] w-10 bg-brand-gold" />
              <span className="font-display text-[9px] font-extrabold tracking-[0.35em] text-white/60 uppercase">
                Building A Stronger Tomorrow
              </span>
            </motion.div>

          </motion.div>
        </div>
      </section>


    
   

      {/* 7. THE JOURNEY CONTINUES */}
      <section className="relative overflow-hidden bg-white text-slate-900 border-t border-slate-200/80">

        {/* Panoramic Dubai Skyline Background Image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] xl:w-[60%] z-0 pointer-events-none">
          <img
            src={lexurabackImg}
            alt="Dubai Skyline - The Journey Continues"
            className="w-full h-full object-cover object-center lg:object-right"
          />
          {/* Left soft fade to pure white for crisp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-35% to-transparent" />
          {/* Subtle bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-9 md:pb-10">

          {/* Top Row: Tag on left, People / Projects / Progress on right */}
          <div className="flex items-start justify-between gap-6 mb-0 pt-2.5 sm:pt-3">
            {/* Tag */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-8 h-[2px] bg-brand-gold inline-block" />
              <span className="font-display text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-brand-gold">
                The Journey Continues
              </span>
            </motion.div>

            {/* Top Right: People / Projects / Progress accent */}
            <motion.div
              className="hidden lg:flex items-center gap-3 pr-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-[2px] h-9 bg-brand-gold" />
              <div className="flex flex-col text-[10px] font-extrabold font-display uppercase tracking-[0.3em] text-brand-darkblue leading-snug">
                <span>People</span>
                <span>Projects</span>
                <span>Progress</span>
              </div>
            </motion.div>
          </div>

          {/* Main Heading */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display text-lg sm:text-xl md:text-2xl lg:text-[2.05rem] font-extrabold uppercase tracking-tight leading-tight mt-0.5 sm:mt-0 mb-3">
              <span className="text-brand-darkblue block mb-1.5 sm:mb-2">Built On Experience.</span>
              Open To What's Next.
            </h2>

            {/* Paragraph */}
            <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6 sm:mb-8">
              A construction legacy began in India. Decades of projects shaped the experience. That experience now moves into a new market. Lexuraa is the next chapter.
            </p>
          </motion.div>

          {/* Bottom Info & CTA Bar */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pt-4 border-t border-slate-200/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {/* Contact details */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0 border border-brand-gold/25">
                  <FaMapMarkerAlt className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <div className="font-display text-[11px] font-black uppercase tracking-wider text-brand-darkblue">
                    UAE Office Location
                  </div>
                  <div className="font-body text-xs text-slate-500 font-normal mt-0.5">
                    Dubai, United Arab Emirates
                  </div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block w-[1px] h-8 bg-slate-200" />

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0 border border-brand-gold/25">
                  <FaEnvelope className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <div className="font-display text-[11px] font-black uppercase tracking-wider text-brand-darkblue">
                    Official Email
                  </div>
                  <div className="font-body text-xs text-slate-500 font-normal mt-0.5">
                    info@lexuraa.com | lexuraa@threecircle.in
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => navigateTo("/contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-2.5 sm:py-3 rounded-full bg-brand-gold hover:bg-[#c99516] text-brand-darkblue font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group shrink-0 self-start lg:self-auto"
            >
              <span>Visit our Site</span>
              <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
