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
import SEO from "../../components/SEO";
import lexuraaHeroImg from "../../assets/lexuraahero.png";
import lexuraaLogo from "../../assets/lexuraa_logo.jpg";
import lexurabackImg from "../../assets/lexuraback.png";
import lexuraaBannerRef from "../../assets/lexuraa_banner_ref.png";
import svcBuildingImg from "../../assets/services/building.jpg";
import svcInfraImg from "../../assets/services/infrastructure.jpg";
import svcEarthImg from "../../assets/services/earthmoving.png";
import svcMiningImg from "../../assets/services/mining.jpg";
import regionalBgImg from "../../assets/lexurabackground.png";
import uaeHeroBg from "../../assets/uae_hero_bg.jpg";

gsap.registerPlugin(ScrollTrigger);

// Custom hook to cleanly extract transparent logo from white-background JPG
function useTransparentLogo(imgSrc) {
  const [processedSrc, setProcessedSrc] = useState(imgSrc);

  useEffect(() => {
    if (!imgSrc) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imgSrc;
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;

        for (let y = 0; y < canvas.height; y++) {
          for (let x = 0; x < canvas.width; x++) {
            const idx = (y * canvas.width + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            const minC = Math.min(r, g, b);

            if (minC > 240) {
              data[idx + 3] = 0; // Pure white background transparent
            } else {
              if (minC > 200) {
                const factor = (minC - 200) / (240 - 200);
                data[idx + 3] = Math.round(255 * (1 - factor));
              }
              if (data[idx + 3] > 15) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
              }
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);

        if (maxX > minX && maxY > minY) {
          const pad = 12;
          const cropX = Math.max(0, minX - pad);
          const cropY = Math.max(0, minY - pad);
          const cropW = Math.min(canvas.width - cropX, (maxX - minX) + pad * 2);
          const cropH = Math.min(canvas.height - cropY, (maxY - minY) + pad * 2);

          const cropCanvas = document.createElement("canvas");
          cropCanvas.width = cropW;
          cropCanvas.height = cropH;
          const cropCtx = cropCanvas.getContext("2d");
          cropCtx.drawImage(canvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
          setProcessedSrc(cropCanvas.toDataURL("image/png"));
        } else {
          setProcessedSrc(canvas.toDataURL("image/png"));
        }
      } catch (e) {
        console.error("Transparent logo error:", e);
      }
    };
  }, [imgSrc]);

  return processedSrc;
}

export default function Lexura() {
  useLenis();
  const { navigateTo } = useTransition();
  const pageRef = useRef(null);
  const [activeTab, setActiveTab] = useState("all");
  const logoSrc = useTransparentLogo(lexuraaLogo);

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
      parentProof: "3 Ciircles portfolio records completed works involving NHAI, PWD, MSRDC, and CIDCO across highways, state roads, overbridges, and drainage.",
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
    { title: "HERITAGE", text: "Parent company established in 1975 with over 45+ years of operational history." },
    { title: "KNOWLEDGE", text: "Deep experience accumulated across airports, dockyards, expressways, and high-rises." },
    { title: "BREADTH", text: "Comprehensive capabilities spanning construction, infrastructure, excavation, and crushing." },
    { title: "RESOURCES", text: "Direct access to 100+ owned heavy machinery units and technical engineering repository." },
    { title: "FOCUS", text: "A business built specifically around the UAE and GCC project ecosystem." },
    { title: "AMBITION", text: "A long-term regional platform designed to grow across the Middle East." },
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-body selection:bg-[var(--brass-bright)] selection:text-white">
      <SEO
        title="Lexuraa General Contracting LLC | UAE Operations"
        description="Lexuraa General Contracting LLC, the international UAE subsidiary of 3 Ciircles, delivering civil engineering, infrastructure, and commercial excellence in Dubai and Abu Dhabi."
        keywords="Lexuraa General Contracting LLC, 3 Ciircles UAE, Dubai civil contractor, Abu Dhabi infrastructure, UAE contracting, Gulf engineering"
        canonical="/our-company/lexura"
      />
      {/* 1. HERO SECTION (Left-aligned, reduced logo, website hero theme) */}
      <section className="relative min-h-[92vh] sm:min-h-[96vh] md:min-h-screen lg:min-h-[102vh] flex items-center justify-start overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img
              src={lexuraaHeroImg}
              alt="Lexuraa Dubai Skyline"
              className="w-full h-full object-cover object-[center_35%]"
            />
          </motion.div>
          {/* Deep Cinematic Gradient Overlay for Left-Aligned Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060402]/95 via-[#060402]/75 to-transparent w-full md:w-[75%] lg:w-[62%] z-1" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060402]/85 via-transparent to-[#060402]/30 z-1" />
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col items-start justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start max-w-3xl"
          >
            {/* Lexuraa Golden Logo (Reduced compact size) */}
            <div className="relative mb-4 sm:mb-5">
              <div className="absolute -inset-4 bg-brand-gold/20 rounded-full blur-xl pointer-events-none opacity-60" />
              <img
                src={logoSrc}
                alt="Lexuraa Eagle Emblem"
                className="relative h-11 sm:h-12 md:h-14 lg:h-16 w-auto object-contain drop-shadow-[0_4px_16px_rgba(212,175,55,0.35)]"
              />
            </div>

            {/* — A — Eyebrow Motif */}
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <span className="h-[2px] w-8 sm:w-12 bg-brand-gold" />
              <span className="font-display text-xs sm:text-sm md:text-base font-extrabold tracking-[0.35em] text-brand-gold uppercase">
                A
              </span>
              <span className="h-[2px] w-8 sm:w-12 bg-brand-gold" />
            </div>

            {/* Main Headline matching website hero theme */}
            <h1 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-[50px] font-medium tracking-tight uppercase leading-[1.08] mb-5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              <span className="block text-brand-gold">LEGACY</span>
              <span className="block text-white mt-1">BUILT TO LAST</span>
            </h1>

            {/* Pillars: PEOPLE | PROJECTS | PROGRESS | TOGETHER */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-white/90">
              <span className="font-display text-[10.5px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white">
                PEOPLE
              </span>
              <span className="text-brand-gold select-none font-bold">|</span>
              <span className="font-display text-[10.5px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white">
                PROJECTS
              </span>
              <span className="text-brand-gold select-none font-bold">|</span>
              <span className="font-display text-[10.5px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white">
                PROGRESS
              </span>
              <span className="text-brand-gold select-none font-bold">|</span>
              <span className="font-display text-[10.5px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white">
                TOGETHER
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE IDEA BEHIND LEXURAA (Exact Reference Image Design) */}
      <section className="relative bg-[#FAF8F5] border-y border-[#E7DFD4] overflow-hidden text-brand-darkblue">
        <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-12 pb-6 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start">

              {/* Top Tag */}
              <motion.div
                className="flex items-center gap-3.5 mb-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.0 }}
              >
                <div className="w-10 h-[2.5px] bg-[#9C7A45] rounded-full" />
                <span className="font-display text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#9C7A45] uppercase">
                  THE IDEA BEHIND LEXURAA
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                className="font-display text-2xl sm:text-3xl md:text-[32px] lg:text-[34px] xl:text-[36px] font-semibold text-[#684323] tracking-tight mb-3 uppercase whitespace-nowrap"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              >
                <span className="block mb-1">LEXURAA</span>
                <span className="block">INFRA CONTRACTING LLC</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                className="font-body text-[11px] sm:text-xs md:text-[13px] font-semibold tracking-[0.22em] text-[#9E7B50] uppercase mt-3 sm:mt-4 mb-3 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
              >
                BUILT ON LEGACY. DRIVEN BY THE FUTURE.
              </motion.p>

              {/* Paragraph 1 */}
              <motion.p
                className="font-body text-xs sm:text-sm md:text-[14.5px] text-[#554F49] leading-[1.75] max-w-xl mb-4 sm:mb-5 font-normal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              >
                LEXURAA is a next-generation infrastructure contracting company, combining decades of industry experience with modern technology, global outlook and a commitment to deliver lasting value.
              </motion.p>

              {/* Paragraph 2 */}
              <motion.p
                className="font-body text-xs sm:text-sm md:text-[14.5px] text-[#554F49] leading-[1.75] max-w-xl mb-4 sm:mb-5 font-normal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.52 }}
              >
                The establishment of LEXURAA marks an important transition from a legacy built over generations to a platform designed for the generations ahead.
              </motion.p>

              {/* Three Horizontal Pillars */}
              <motion.div
                className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xl w-full pt-2 pb-3 sm:pb-4 border-y border-[#E5DACB]/80"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              >
                {/* Pillar 1: Strong Foundation */}
                <div className="flex flex-col items-center text-center px-1 sm:px-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 mb-2 text-[#AF8B51] flex items-center justify-center">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="1" />
                      <path d="M9 22V18h6v4" />
                      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[11px] sm:text-xs md:text-[12.5px] font-bold text-[#3B291D] uppercase tracking-wide leading-tight mb-1">
                    STRONG<br />FOUNDATION
                  </h3>
                  <p className="font-body text-[10px] sm:text-[11px] text-[#7A7067] leading-snug">
                    From Generations<br />of Experience
                  </p>
                </div>

                {/* Pillar 2: Modern Approach */}
                <div className="flex flex-col items-center text-center px-1 sm:px-2 border-x border-[#DDD0C0]">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 mb-2 text-[#AF8B51] flex items-center justify-center">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2z" />
                      <path d="M5 13a7 7 0 0 1 14 0" />
                      <path d="M12 6v7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[11px] sm:text-xs md:text-[12.5px] font-bold text-[#3B291D] uppercase tracking-wide leading-tight mb-1">
                    MODERN<br />APPROACH
                  </h3>
                  <p className="font-body text-[10px] sm:text-[11px] text-[#7A7067] leading-snug">
                    Driven by<br />Innovation
                  </p>
                </div>

                {/* Pillar 3: A Brighter Tomorrow */}
                <div className="flex flex-col items-center text-center px-1 sm:px-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 mb-2 text-[#AF8B51] flex items-center justify-center">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[11px] sm:text-xs md:text-[12.5px] font-bold text-[#3B291D] uppercase tracking-wide leading-tight mb-1">
                    A BRIGHTER<br />TOMORROW
                  </h3>
                  <p className="font-body text-[10px] sm:text-[11px] text-[#7A7067] leading-snug">
                    Building Sustainable<br />Communities
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Right Image Column — visible on all screens */}
            <motion.div
              className="lg:col-span-6 xl:col-span-6 w-full"
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <div className="w-full rounded-2xl overflow-hidden border border-[#DDD0C0] shadow-lg relative aspect-[4/3]">
                <img
                  src={lexuraaBannerRef}
                  alt="Lexuraa Infra Contracting LLC Dubai"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center center" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 3. WHAT WE DO - SERVICE PORTFOLIO */}
      <section id="services" className="py-10 md:py-14 bg-[#FAF8F5] border-b border-[#E7DFD4] px-6 md:px-12 lg:px-16 relative overflow-hidden">

        {/* Subtle warm dot pattern */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #9C7A45 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* Header */}
          <motion.div
            className="max-w-2xl mb-10"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tag — matching THE IDEA BEHIND LEXURAA style */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-[2.5px] bg-[#9C7A45] rounded-full" />
              <span className="font-display text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#9C7A45] uppercase">
                Full-Spectrum Capabilities
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-[30px] lg:text-[34px] font-medium text-[#684323] tracking-tight uppercase mb-3">
              <span className="block mb-2">From Site Preparation To</span>
              <span className="block">Structural Delivery</span>
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-[14px] text-[#554F49] leading-[1.75] max-w-xl font-normal">
              Lexuraa's service portfolio is designed around the principal stages and requirements of construction and infrastructure projects in the UAE.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {services.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 1.5, delay: 0.1 + idx * 0.25, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(156,122,69,0.13)" }}
                className="bg-[#FDFBF8] rounded-2xl border border-[#E5DACB] overflow-hidden flex flex-col sm:flex-row group transition-all duration-500 shadow-sm"
              >
                {/* Left — Text Content */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between min-w-0">
                  {/* Icon + Category */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#684323] flex items-center justify-center shrink-0">
                        {React.cloneElement(item.icon, { className: "w-5 h-5 text-[#D4AF37]" })}
                      </div>
                      <span className="font-display text-[10px] font-extrabold tracking-[0.28em] text-[#9C7A45] uppercase">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xs sm:text-sm font-semibold uppercase tracking-tight text-[#3B291D] leading-snug mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.title}
                    </h3>

                    <div className="space-y-1.5 mb-4">
                      {item.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-[#554F49]">
                          <FaCheckCircle className="w-3 h-3 text-[#9C7A45] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer link */}
                  <div className="flex items-center gap-2 text-[#684323] font-display text-[9px] font-extrabold uppercase tracking-[0.2em] group/link cursor-pointer mt-auto pt-3 border-t border-[#E5DACB]">
                    <span className="group-hover/link:text-[#9C7A45] transition-colors duration-200">View Details</span>
                    <div className="w-7 h-7 rounded-full border border-[#9C7A45]/50 group-hover/link:border-[#9C7A45] group-hover/link:bg-[#9C7A45] flex items-center justify-center transition-all duration-200">
                      <FaArrowRight className="w-2.5 h-2.5 text-[#9C7A45] group-hover/link:text-white transition-colors duration-200" />
                    </div>
                  </div>
                </div>

                {/* Right — Image */}
                <div className="sm:w-44 md:w-52 shrink-0 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>






      {/* 6. UAE PRIORITIES & PARTNERSHIPS */}
      <section className="relative overflow-hidden bg-[#FAF8F5] border-y border-[#E7DFD4]">
        <div className="max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[360px]">

          {/* LEFT — Text Content */}
          <motion.div
            className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-12 sm:pt-14 lg:pt-16 pb-8 lg:pb-10"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tag */}
            <motion.div
              className="flex items-center gap-3.5 mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.0 }}
            >
              <div className="w-10 h-[2px] bg-[#9C7A45] rounded-full" />
              <span className="font-display text-[11px] sm:text-xs font-bold tracking-[0.28em] text-[#9C7A45] uppercase">
                Regional Strategy
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="font-display text-2xl sm:text-3xl md:text-[30px] lg:text-[34px] font-semibold leading-tight tracking-tight uppercase text-brand-darkblue mb-5 whitespace-nowrap"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            >
              The Next Chapter Begins
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              className="font-body text-xs sm:text-sm text-[#554F49] leading-[1.78] mb-8 max-w-md font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
            >
              The UAE's construction landscape is defined by ambitious development, sophisticated infrastructure, and strong demand for capable project partners. Lexuraa enters with the intent to build a meaningful regional presence.
            </motion.p>

            {/* 3 Pillars */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
            >
              {[
                { icon: <FaHandshake className="w-5 h-5 text-[#9C7A45]" />, title: "Local Relationships", desc: "Building strong connections across developers, consultants & supply ecosystems." },
                { icon: <FaAward className="w-5 h-5 text-[#9C7A45]" />, title: "Regional Knowledge", desc: "Deep understanding of local RTA, municipality & UAE engineering standards." },
                { icon: <FaChartLine className="w-5 h-5 text-[#9C7A45]" />, title: "Capability Development", desc: "Building localized resources & plant assets for sustained operations." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col gap-2.5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 + idx * 0.15 }}
                >
                  <div className="w-9 h-9 rounded-lg border border-[#DDD0C0] bg-[#F5EFE6] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-display text-[10.5px] font-extrabold text-brand-darkblue uppercase tracking-wide leading-tight">
                    {item.title}
                  </span>
                  <p className="font-body text-[11px] text-[#7A7067] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom tagline */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >
              <div className="h-[1.5px] w-10 bg-[#9C7A45] rounded-full" />
              <span className="font-display text-[10px] font-bold tracking-[0.3em] text-[#9C7A45] uppercase">
                Building A Stronger Tomorrow
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Full Image */}
          <motion.div
            className="relative w-full h-80 lg:h-auto overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <img
              src={regionalBgImg}
              alt="UAE Skyline — Regional Strategy"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft left-edge blend into bg */}
            <div className="absolute inset-y-0 left-0 w-16 lg:w-24 bg-gradient-to-r from-[#FAF8F5] to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </section>





      {/* 7. THE JOURNEY CONTINUES */}
      <section className="relative overflow-hidden bg-white border-t border-[#E7DFD4] pt-12 sm:pt-14 lg:pt-16 pb-8 lg:pb-10">
        {/* Background UAE Skyline Image — Watermark on White */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={uaeHeroBg}
            alt="UAE Dubai Skyline"
            className="w-full h-full object-cover object-center opacity-[0.18]"
          />
        </div>

        <div className="relative z-10 max-w-[860px] mx-auto px-8 sm:px-12 lg:px-16 text-center">

          {/* Tag */}
          <motion.div
            className="flex items-center justify-center gap-3.5 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.0 }}
          >
            <div className="w-10 h-[2px] bg-[#9C7A45] rounded-full" />
            <span className="font-display text-[11px] sm:text-xs font-bold tracking-[0.28em] text-[#9C7A45] uppercase">
              The Journey Continues
            </span>
            <div className="w-10 h-[2px] bg-[#9C7A45] rounded-full" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-display text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-semibold tracking-tight uppercase text-brand-darkblue mb-3.5 leading-[1.15]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          >
            <span className="block mb-1">Built On Experience.</span>
            Open To What's Next.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="font-body text-xs sm:text-sm text-[#554F49] leading-[1.78] mb-6 max-w-lg mx-auto font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          >
            A construction legacy began in India. Decades of projects shaped the experience. That experience now moves into a new market. Lexuraa is the next chapter.
          </motion.p>

          {/* Contact Info + CTA Bar */}
          <motion.div
            className="max-w-[680px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 pt-5 border-t border-[#E5DACB]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
          >
            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#F5EFE6] border border-[#DDD0C0] flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#9C7A45]" />
              </div>
              <div className="text-left">
                <div className="font-display text-[10.5px] font-extrabold uppercase tracking-wider text-brand-darkblue">
                  UAE Office Location
                </div>
                <div className="font-body text-[11px] text-[#7A7067] font-normal mt-0.5">
                  Dubai, United Arab Emirates
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#F5EFE6] border border-[#DDD0C0] flex items-center justify-center shrink-0">
                <FaEnvelope className="w-3.5 h-3.5 text-[#9C7A45]" />
              </div>
              <div className="text-left">
                <div className="font-display text-[10.5px] font-extrabold uppercase tracking-wider text-brand-darkblue">
                  Official Email
                </div>
                <div className="font-body text-[11px] text-[#7A7067] font-normal mt-0.5">
                  info@lexuraa.com
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => window.open("https://lexuraa.com", "_blank")}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#674424] hover:bg-[#523419] text-white font-display font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group shrink-0 self-start sm:self-auto"
            >
              <span>Visit Our Site</span>
              <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
