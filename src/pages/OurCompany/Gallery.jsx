import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import SectionTag from "../../components/SectionTag";
import SEO from "../../components/SEO";
import galleryHeroImg from "../../assets/galleryhero.png";

// Project assets from src/assets/Gallery
import airsideImg from "../../assets/Gallery/Airside.jpeg";
import secondaryFireImg from "../../assets/Gallery/Secondary Fire.jpeg";
import boundaryWallImg from "../../assets/Gallery/Boundary Wall.jpeg";
import national1Img from "../../assets/Gallery/national1.jpeg";
import national2Img from "../../assets/Gallery/national2.jpeg";
import national3Img from "../../assets/Gallery/national3.jpeg";
import maneckji1Img from "../../assets/Gallery/MANECKJI1.jpeg";
import maneckji2Img from "../../assets/Gallery/MANECKJI2.jpeg";
import maneckji3Img from "../../assets/Gallery/MANECKJI3.jpeg";
import anant1Img from "../../assets/Gallery/ANANT NATIONAL1.jpeg";
import anant2Img from "../../assets/Gallery/ANANT NATIONAL2.jpeg";
import anant3Img from "../../assets/Gallery/ANANT NATIONAL3.jpeg";
import dfcc1Img from "../../assets/Gallery/DFCC1.jpeg";
import dfcc2Img from "../../assets/Gallery/DFCC2.jpeg";
import dfcc3Img from "../../assets/Gallery/DFCC3.jpeg";
import chennai1Img from "../../assets/Gallery/CHENNAI1.jpeg";
import chennai2Img from "../../assets/Gallery/CHENNAI2.jpeg";
import chennai3Img from "../../assets/Gallery/CHENNAI3.jpeg";
import deep1Img from "../../assets/Gallery/DEEP1.png";
import deep2Img from "../../assets/Gallery/DEEP2.png";
import deep3Img from "../../assets/Gallery/DEEP3.png";
import beach1Img from "../../assets/Gallery/Beach1.jpeg";
import beach2Img from "../../assets/Gallery/Beach2.jpeg";
import beach3Img from "../../assets/Gallery/Beach3.jpeg";
import beach4Img from "../../assets/Gallery/Beach4.jpeg";
import malt1Img from "../../assets/Gallery/Malt1.jpeg";
import malt2Img from "../../assets/Gallery/Malt2.jpeg";
import malt3Img from "../../assets/Gallery/Malt3.jpeg";
import malt4Img from "../../assets/Gallery/Malt4.jpeg";
import malt5Img from "../../assets/Gallery/Malt5.jpeg";
import malt6Img from "../../assets/Gallery/Malt6.jpeg";

const GALLERY_PROJECTS = [
  {
    id: "mial",
    title: "Mumbai International Airport Limited",
    tag: "EXISTING PROJECTS IMAGES",
    items: [
      {
        id: "airside",
        title: "Airside Rescue and Firefighting Station",
        image: airsideImg,
      },
      {
        id: "secondary-fire",
        title: "Secondary Fire Station",
        image: secondaryFireImg,
      },
      {
        id: "boundary-wall",
        title: "Boundary Wall",
        image: boundaryWallImg,
        fit: "contain",
      },
    ],
  },
  {
    id: "nhsrcl",
    title: "National High Speed Rail Corporation Limited",
    items: [
      {
        id: "national-3",
       
        image: national3Img,
      },
      {
        id: "national-2",
        
        image: national2Img,
      },
      {
        id: "national-1",
       
        image: national1Img,
      },
    ],
  },
  {
    id: "maneckji-cooper",
    title: "Maneckji Cooper School Juhu Mumbai",
    items: [
      {
        id: "maneckji-1",
       
        image: maneckji1Img,
      },
      {
        id: "maneckji-2",
        
        image: maneckji2Img,
      },
      {
        id: "maneckji-3",
        
        image: maneckji3Img,
      },
    ],
  },
  {
    id: "anant-university",
    title: "Anant National University In Ahmedabad",
    items: [
      {
        id: "anant-1",
       
        image: anant1Img,
      },
      {
        id: "anant-2",
        
        image: anant2Img,
      },
      {
        id: "anant-3",
        
        image: anant3Img,
      },
    ],
  },
  {
    id: "dfcc-corridor",
    title: "DFCC Corridor CTP-11",
    items: [
      {
        id: "dfcc-1",
       
        image: dfcc1Img,
      },
      {
        id: "dfcc-2",
        image: dfcc2Img,
      },
      {
        id: "dfcc-3",
        image: dfcc3Img,
      },
    ],
  },
  {
    id: "cprr",
    title: "Chennai Peripheral Ring Road Tamil Nadu",
    items: [
      {
        id: "chennai-1",
        image: chennai1Img,
      },
      {
        id: "chennai-2",
        image: chennai2Img,
      },
      {
        id: "chennai-3",
        image: chennai3Img,
      },
    ],
  },
  {
    id: "deep-excavation",
    title: "Deep Excavation Project, Mumbai",
    items: [
      {
        id: "deep-1",
        title: "Nighttime Deep Pit & Long-Arm Excavation",
        image: deep1Img,
      },
      {
        id: "deep-2",
        title: "Removing Excavator Using Crane",
        image: deep2Img,
      },
      {
        id: "deep-3",
        title: "DExcavation And Muck Disposal",
        image: deep3Img,
      },
    ],
  },
  {
    id: "beach-house-alibaug",
    title: "Beach House Project, Alibaug",
    items: [
      {
        id: "beach-1",
       
        image: beach1Img,
      },
      {
        id: "beach-2",
          
        image: beach2Img,
      },
      {
        id: "beach-3",
      
        image: beach3Img,
      },
      {
        id: "beach-4",
        
        image: beach4Img,
      },
    ],
  },
  {
    id: "malt-plant-dahanu",
    title: "Malt Plant, Dahanu",
    items: [
      {
        id: "malt-1",
       
        image: malt1Img,
        fit: "contain",
      },
      {
        id: "malt-2",
        image: malt2Img,
      },
      {
        id: "malt-3",
        image: malt3Img,
      },
      {
        id: "malt-4",
        image: malt4Img,
      },
      {
        id: "malt-5",
        image: malt5Img,
      },
      {
        id: "malt-6",
        image: malt6Img,
      },
    ],
  },
];

export default function Gallery() {
  useLenis();
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] selection:bg-brand-gold selection:text-brand-darkblue">
      <SEO
        title="Project & Fleet Gallery"
        description="Visual archive of 3 Ciircles heavy infrastructure projects, airport works at MIAL, deep excavations, structural engineering, and fleet operations."
        keywords="3 Ciircles gallery, infrastructure project photos, construction site gallery, airport works photos, deep excavation pictures"
        canonical="/our-company/gallery"
      />
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[86vh] sm:min-h-[92vh] md:min-h-[96vh] lg:min-h-[100vh] flex flex-col justify-center pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 md:pb-24 bg-[#010634] text-white overflow-hidden">
        {/* Hero Background Image with Cinematic Pan/Zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img
              src={galleryHeroImg}
              alt="Project & Fleet Gallery Visual Archive"
              className="w-full h-full object-cover object-[center_30%]"
            />
          </motion.div>

          {/* Theme Gradients matching website brand-darkblue with reduced overlay opacity */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darkblue/70 via-brand-darkblue/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/50 via-transparent to-brand-darkblue/15" />

          {/* Subtle architectural grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Ambient radial gold lighting glow */}
          <div className="absolute -top-40 right-1/4 w-[650px] h-[650px] bg-brand-gold/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-40 left-10 w-[550px] h-[550px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="mb-4">
              <SectionTag
                text="OUR COMPANY • VISUAL ARCHIVE"
                lineColor="bg-brand-gold"
                textColor="text-brand-gold"
              />
            </div>

            <h1 className="font-display text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight uppercase mb-0 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] whitespace-normal sm:whitespace-nowrap">
              <span className="text-white">PROJECT &amp; FLEET </span>
              <span className="shimmer-text">GALLERY.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. PROJECT WISE GALLERY SECTION: MUMBAI INTERNATIONAL AIRPORT LIMITED (Light Theme) */}
      <section className="relative pt-10 sm:pt-14 md:pt-16 pb-20 sm:pb-28 md:pb-32 px-6 md:px-12 bg-[#FAF9F6] text-[#0F172A] overflow-hidden border-t border-brand-gold/30">
        {/* Subtle background ambient lighting */}
        <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-[#f0eee9] rounded-full blur-[140px] pointer-events-none opacity-80" />
        <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(1, 6, 52, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(1, 6, 52, 0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto space-y-10 sm:space-y-14">
          {GALLERY_PROJECTS.map((project, pIdx) => (
            <div key={project.id} className={pIdx > 0 ? "pt-8 sm:pt-10 border-t border-slate-200/70" : ""}>
              {/* Section Header: Left-aligned Section Tag and Heading */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="text-left max-w-6xl mx-auto mb-6 sm:mb-8"
              >
                {project.tag && (
                  <div className="mb-3">
                    <SectionTag
                      text={project.tag}
                      lineColor="bg-brand-gold"
                      textColor="text-brand-gold"
                    />
                  </div>
                )}

                <h2 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide text-brand-darkblue uppercase leading-snug">
                  {project.title}
                </h2>
              </motion.div>

              {/* Images in One Line, Small Size, No Outer Card, Clean Image + Heading */}
              <div className="max-w-6xl mx-auto">
                <div
                  className={`grid gap-6 ${
                    project.items.length === 4
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
                      : "grid-cols-1 md:grid-cols-3 lg:gap-8"
                  }`}
                >
                  {project.items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 32, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 1.0,
                        delay: idx * 0.16,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      onClick={() => setSelectedImage({ ...item, projectTitle: project.title })}
                      className="group cursor-pointer flex flex-col items-center"
                    >
                      {/* Clean Direct Image Presentation (Properly fitted, no outer card) */}
                      <div
                        className={`relative w-full ${
                          project.items.length === 4
                            ? "aspect-[4/3]"
                            : "aspect-[16/10]"
                        } rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-700 ease-out ${
                          item.fit === "contain"
                            ? "bg-white border border-slate-200/90 p-1.5 sm:p-2 flex items-center justify-center"
                            : "bg-slate-100"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title || "Project visual"}
                          className={`w-full h-full transition-transform duration-1000 ease-out ${
                            item.fit === "contain"
                              ? "object-contain group-hover:scale-[1.02]"
                              : "w-full h-full object-cover group-hover:scale-105"
                          }`}
                        />
                      </div>

                      {/* Heading directly below image */}
                      {item.title && (
                        <h3 className="font-display text-xs sm:text-sm md:text-[14px] lg:text-[15px] font-bold text-brand-darkblue tracking-wide uppercase mt-3 text-center group-hover:text-brand-gold transition-colors duration-500 leading-snug">
                          {item.title}
                        </h3>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LIGHTBOX / FULLSCREEN PREVIEW MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
          >
            {/* Top-Right Screen Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close Preview"
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[100002] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-brand-gold hover:text-brand-darkblue text-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border border-white/25 shadow-2xl backdrop-blur-md group"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-90 duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Top Bar: Title & Tags */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl flex items-center justify-between text-white pb-3 mb-2 border-b border-white/15 pr-14"
            >
              <div>
                <span className="bg-brand-gold text-brand-darkblue font-display text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full mr-3">
                  {selectedImage.projectTitle || "Project Archive"}
                </span>
                <span className="font-display text-sm sm:text-base font-bold text-white uppercase">
                  {selectedImage.title}
                </span>
              </div>
            </div>

            {/* Main Stage: Display Image */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl flex items-center justify-center my-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-h-[76vh] w-auto max-w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white p-2.5 sm:p-3 flex items-center justify-center"
              >
                {/* Image Frame Top-Right Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  aria-label="Close Image"
                  className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/75 hover:bg-brand-gold hover:text-brand-darkblue text-white flex items-center justify-center transition-all cursor-pointer shadow-lg border border-white/30"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[72vh] w-auto object-contain select-none"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
