import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { BiCategory } from "react-icons/bi";
import { FaTractor, FaHardHat, FaCheckCircle } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { allMachineryData } from "../../data/plantMachineryData";

const fallbackImages = {
  "Hydraulic Excavators": "/images/machinery/HeroBannerMobile.png",
  "Bull Dozers": "/images/machinery/Bull Dozers.png",
  "Vibro Rollers": "/images/machinery/VIBRO ROLLERS.png",
  "Motor Graders": "/images/machinery/Motor Graders.png",
  "Road Roller (Static)": "/images/machinery/Road Roller.png",
  "Loading Equipment": "/images/machinery/Loading Equipment.png",
  "Cranes & Hoists": "/images/machinery/Cranes & Hoists.png",
  "Surveying Instruments": "/images/machinery/Surveying Instruments.png",
  "Other Equipments": "/images/machinery/Welding Generator.png",
  "Concrete Equipment": "/images/machinery/Concrete Equipment.png",
  "Concrete Tools & Plants": "/images/machinery/Concrete Tools & Plants.png",
  "Asphalt Equipments": "/images/machinery/Asphalt Equipments.png",
  "Stone Crushers": "/images/machinery/Asphalt & Crushing.png",
  "Hauling Equipment": "/images/machinery/Hauling & Transport.png",
  "Transport": "/images/machinery/Hauling & Transport.png",
  "Quality Control Equipment": "/images/machinery/Quality Control Equipment.png",
  "Other Accessories": "/images/machinery/Other Accessories.png",
};

export default function PlantMachinary() {
  useLenis();

  const containerRef = useRef(null);
  const wrappersRef = useRef([]);
  const pinRef = useRef(null);

  const categories = allMachineryData.flatMap((section) =>
    section.data.categories.map((cat, catIdx) => ({
      ...cat,
      sectionTitle: section.data.title,
      sectionId: catIdx === 0 ? section.id : null,
    })),
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const wrappers = wrappersRef.current.filter(Boolean);
      if (!wrappers.length || !pinRef.current) return;

      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // DESKTOP: sticky right panel + clipPath wipe
        mm.add("(min-width: 769px)", () => {
          // Make all wrappers fully visible before animation
          gsap.set(wrappers, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 });

          const mainTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".arch-section",
              start: "top top",
              end: "bottom bottom",
              pin: pinRef.current,
              scrub: 1,
            },
          });

          wrappers.forEach((wrapper, index) => {
            if (wrappers[index + 1]) {
              mainTimeline.to(wrapper, {
                clipPath: "inset(0% 0% 100% 0%)",
                duration: 1,
                ease: "none",
              });
            }
          });

          return () => ScrollTrigger.getAll().forEach((t) => t.kill());
        });

        // MOBILE: per-image parallax scale
        mm.add("(max-width: 768px)", () => {
          gsap.set(wrappers, { clipPath: "none", opacity: 1 });
          wrappers.forEach((wrapper) => {
            const img = wrapper.querySelector("img");
            if (!img) return;
            gsap.fromTo(
              img,
              { scale: 1 },
              {
                scale: 1.12,
                ease: "none",
                scrollTrigger: {
                  trigger: wrapper,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          });
        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-body selection:bg-[var(--brass-bright)] selection:text-white">
      {/* Hero */}
      <section id="overview" className="relative pt-14 lg:pt-44 pb-16 lg:pb-24 overflow-hidden">
        <div className="hidden md:block absolute inset-0 z-0 md:flex justify-end">
          <div className="relative w-full h-full">
            <img src="/images/machinery/HeroImage.png" alt="Excavator Hero" className="w-full h-full object-top" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-darkblue/45 via-brand-white/10 to-transparent" />
          </div>
        </div>
        <div className="md:hidden absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img src="/images/machinery/HeroBannerMobile.png" alt="Excavator Hero" className="w-full h-full object-top" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-darkblue/45 via-brand-white/10 to-transparent" />
          </div>
        </div>

        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[60%] pt-8"
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 uppercase">
              <span className="text-brand-gold">Our</span>
              <br />
              <span className="text-brand-gold">Machinery Fleet</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-md mb-10 font-medium leading-relaxed">
              A comprehensive range of modern equipment to deliver excellence on every project.
            </p>

            <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap lg:flex-nowrap md:items-stretch md:gap-4">
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-darkblue text-brand-gold flex items-center justify-center font-black"><BiCategory size={22} /></div>
                <div>
                  <div className="font-black text-lg text-white/70 leading-none mb-1">6</div>
                  <div className="text-[9px] font-bold uppercase leading-tight text-white/70">Equipment<br />Categories</div>
                </div>
              </div>
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]">
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black"><FaTractor size={22} /></div>
                <div>
                  <div className="font-black text-lg text-white/70 leading-none mb-1">190+</div>
                  <div className="text-[9px] font-bold uppercase leading-tight text-white/70">Total Units</div>
                </div>
              </div>
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]">
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black"><FaCheckCircle size={22} /></div>
                <div><div className="text-[10px] font-bold text-white/70 leading-tight">Well<br />Maintained<br />& Reliable</div></div>
              </div>
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]">
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black"><FaHardHat size={22} /></div>
                <div><div className="text-[10px] font-bold text-white/70 leading-tight">Operator<br />Ready</div></div>
              </div>
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]">
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black"><MdPrecisionManufacturing size={24} /></div>
                <div><div className="text-[10px] font-bold text-white/70 leading-tight">Modern Fleet<br />For Every Need</div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll Section */}
      <section className="bg-brand-white" ref={containerRef}>
        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="arch-section flex flex-col md:flex-row gap-4 md:gap-8 justify-between max-w-[1100px] 2xl:max-w-[1200px] mx-auto relative">

            {/* Left: text panel */}
            <div className="arch__left w-full md:w-auto md:min-w-[250px] 2xl:max-w-[350px]">
              {categories.map((cat, i) => (
                <div
                  id={cat.sectionId || undefined}
                  className="arch__info h-auto md:h-[100vh] flex flex-col justify-center w-full md:max-w-[320px] 2xl:max-w-[450px] py-8 md:py-0"
                  key={i}
                >
                  <div className="w-full">
                    <p className="text-brand-gold text-[10px] 2xl:text-sm uppercase font-bold tracking-wider mb-1">
                      {cat.sectionTitle}
                    </p>
                    <h2 className="font-display text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-extrabold tracking-tight text-brand-darkblue leading-tight mb-2">
                      {cat.name}
                    </h2>



                    {/* Mobile image inline between text blocks */}
                    <div
                      className="md:hidden h-[220px] w-full rounded-xl overflow-hidden shadow-md mb-4 relative"
                    >
                      <img
                        src={fallbackImages[cat.name] || fallbackImages["Other Equipments"]}
                        alt={cat.name}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/30 to-transparent pointer-events-none" />
                    </div>

                    {cat.subcategories ? (
                      <div className="space-y-4">
                        {cat.subcategories.map((sub, sIdx) => (
                          <div key={sIdx}>
                            <h3 className="font-bold text-brand-darkblue text-[9px] uppercase mb-2 tracking-wider">
                              {sub.name} <span className="text-brand-gold ml-1">({sub.totalUnits})</span>
                            </h3>
                            <div className="bg-[#f4f5f7] rounded-2xl p-3 space-y-2">
                              {sub.items.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center justify-between bg-white rounded-xl px-3 py-2.5 shadow-sm"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                                    <span className="font-medium text-brand-darkblue text-[11px] leading-snug">{item.model}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-[#f4f5f7] rounded-2xl p-3 space-y-2">
                        {cat.items && cat.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between bg-white rounded-xl px-3 py-2.5 shadow-sm"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                              <span className="font-medium text-brand-darkblue text-[11px] leading-snug">{item.model}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: sticky image panel (desktop only) */}
            <div
              ref={pinRef}
              className="arch__right hidden md:flex flex-shrink-0 items-center w-full max-w-[460px] 2xl:max-w-[500px] self-start sticky top-0 h-screen"
            >
              {/* Image stack — all stacked at center, clipPath wipes them away on scroll */}
              <div className="relative w-full h-[340px] xl:h-[400px] 2xl:h-[500px]">
                {categories.map((cat, i) => (
                  <div
                    ref={(el) => (wrappersRef.current[i] = el)}
                    className="img-wrapper absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-md"
                    style={{
                      zIndex: categories.length - i,
                      clipPath: "inset(0% 0% 0% 0%)",
                    }}
                    key={i}
                  >
                    <img
                      src={fallbackImages[cat.name] || fallbackImages["Other Equipments"]}
                      alt={cat.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-[10vh] md:h-[20vh]"></div>
        </div>
      </section>
    </div>
  );
}