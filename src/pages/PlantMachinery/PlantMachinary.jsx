import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { BiCategory } from "react-icons/bi";
import { FaTractor, FaHardHat, FaCheckCircle } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import SectionTag from "../../components/SectionTag";
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
  // Map Asphalt & Crushing sub-categories to the image
  "Asphalt Equipments": "/images/machinery/Asphalt & Crushing.png",
  "Stone Crushers": "/images/machinery/Asphalt & Crushing.png",
  // Map Hauling & Transport sub-categories to the image
  "Hauling Equipment": "/images/machinery/Hauling & Transport.png",
  "Transport": "/images/machinery/Hauling & Transport.png",
  "Quality Control Equipment": "/images/machinery/Quality Control Equipment.png",
  "Other Accessories": "/images/machinery/Other Accessories.png",
};

export default function PlantMachinary() {
  useLenis();

  const containerRef = useRef(null);
  const imgsRef = useRef([]);
  const categories = allMachineryData.flatMap((section) =>
    section.data.categories.map((cat, catIdx) => ({
      ...cat,
      sectionId: section.id,
      isFirstInSection: catIdx === 0,
      sectionTitle: section.data.title,
    })),
  );

  useEffect(() => {
    let ctx = gsap.context(() => {
      const imgs = imgsRef.current;

      // GSAP Animations for Category Info Text & Cards on Scroll
      const infoBlocks = gsap.utils.toArray(".arch__info");
      infoBlocks.forEach((block) => {
        const tag = block.querySelector(".arch__tag");
        const title = block.querySelector(".arch__title");
        const card = block.querySelector(".arch__card");
        const items = block.querySelectorAll(".arch__item");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        });

        if (tag) {
          tl.fromTo(
            tag,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
          );
        }
        if (title) {
          tl.fromTo(
            title,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.3"
          );
        }
        if (card) {
          tl.fromTo(
            card,
            { opacity: 0, y: 35, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" },
            "-=0.4"
          );
        }
        if (items && items.length > 0) {
          tl.fromTo(
            items,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: "power2.out" },
            "-=0.3"
          );
        }
      });

      ScrollTrigger.matchMedia({
        "(min-width: 769px)": function () {
          const mainTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".arch-section",
              start: "top top ",
              end: "bottom bottom",
              pin: ".arch-right-pin",
              scrub: true,
            },
          });

          gsap.set(imgs, {
            clipPath: "inset(0)",
          });

          imgs.forEach((_, index) => {
            const currentImage = imgs[index];
            const nextImage = imgs[index + 1] ? imgs[index + 1] : null;

            if (nextImage) {
              const sectionTimeline = gsap.timeline();
              // Hold phase: keep current image 100% visible while category is active
              sectionTimeline.to({}, { duration: 0.9 });
              // Transition phase: smoothly wipe away current image to reveal next image
              sectionTimeline.to(
                currentImage,
                {
                  clipPath: "inset(0px 0px 100%)",
                  duration: 0.6,
                  ease: "power1.inOut",
                },
                "+=0",
              );
              mainTimeline.add(sectionTimeline);
            }
          });
        },
        "(max-width: 768px)": function () {
          gsap.set(imgs, {
            clipPath: "inset(0)",
          });

          imgs.forEach((image) => {
            const innerTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });

            // Add a subtle scale effect for mobile 
            innerTimeline.fromTo(
              image,
              { scale: 1 },
              { scale: 1.15, ease: "none" },
            );
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-body selection:bg-[var(--brass-bright)] selection:text-white">
      <section id="overview" className="relative pt-20 h-[95dvh] overflow-hidden bg-[#070D1B]">
        {/* DESKTOP BACKGROUND HERO IMAGE WITH CINEMATIC MOVING ZOOM/PAN EFFECT */}
        <div className="hidden md:block absolute inset-0 z-0 opacity-90 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1.05, 1],
              x: [0, -20, 10, 0],
              y: [0, -10, 5, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="relative w-full h-full"
          >
            <img
              src="/images/machinery/HeroImage.png"
              alt="Excavator Hero"
              className="w-full h-full object-top object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D1B]/85 via-[#070D1B]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D1B] via-transparent to-transparent opacity-40" />
          </motion.div>
        </div>

        {/* MOBILE BACKGROUND HERO IMAGE WITH CINEMATIC MOVING ZOOM/PAN EFFECT */}
        <div className="md:hidden absolute inset-0 z-0 opacity-90 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="relative w-full h-full"
          >
            <img
              src="/images/machinery/HeroBannerMobile.png"
              alt="Excavator Hero"
              className="w-full h-full object-top object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D1B]/85 via-[#070D1B]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D1B] via-transparent to-transparent opacity-40" />
          </motion.div>
        </div>

        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[60%]"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 uppercase"
            >
              <span className="text-brand-gold drop-shadow-md"> Our</span>
              <br />
              <span className="text-brand-gold drop-shadow-md">Machinery Fleet</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-base md:text-lg text-white/80 max-w-md mb-10 font-medium leading-relaxed drop-shadow-sm"
            >
              A comprehensive range of modern equipment to deliver excellence on
              every project.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="grid grid-cols-2 gap-2 md:flex md:flex-wrap lg:flex-nowrap md:items-stretch md:gap-4"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/20 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] border border-white/60 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-darkblue text-brand-gold flex items-center justify-center font-black shadow-inner">
                  <BiCategory size={22} />
                </div>
                <div>
                  <div className="font-black text-lg text-white leading-none mb-1">
                    6
                  </div>
                  <div className="text-[9px] font-bold uppercase leading-tight text-white/80">
                    Equipment
                    <br />
                    Categories
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/20 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] border border-white/60 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]"
              >
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black shadow-inner">
                  <FaTractor size={22} />
                </div>
                <div>
                  <div className="font-black text-lg text-white leading-none mb-1">
                    190+
                  </div>
                  <div className="text-[9px] font-bold uppercase leading-tight text-white/80">
                    Total Units
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/20 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] border border-white/60 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]"
              >
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black shadow-inner">
                  <FaCheckCircle size={22} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/80 leading-tight">
                    Well
                    <br />
                    Maintained
                    <br />& Reliable
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/20 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] border border-white/60 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]"
              >
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black shadow-inner">
                  <FaHardHat size={22} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/80 leading-tight">
                    Operator
                    <br />
                    Ready
                  </div>
                </div>
              </motion.div>

              {/* Card 5 */}
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/20 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] border border-white/60 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]"
              >
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black shadow-inner">
                  <MdPrecisionManufacturing size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/80 leading-tight">
                    Modern Fleet
                    <br />
                    For Every Need
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="machinery-fleet" className=" bg-brand-white" ref={containerRef}>
        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="arch-section flex flex-col md:flex-row gap-4 md:gap-8 justify-between max-w-[1100px] 2xl:max-w-[1200px] mx-auto relative">
            <div className="arch__left contents md:block md:w-[45%] max-w-[480px]">
              {categories.map((cat, i) => (
                <div
                  id={cat.isFirstInSection ? cat.sectionId : undefined}
                  className="arch__info h-auto md:h-[100vh] flex flex-col justify-center w-full max-w-[460px] py-8 md:py-0 scroll-mt-24 md:scroll-mt-0"
                  key={i}
                  style={{ order: i * 2 }}
                >
                  <div className="w-full max-w-[360px] 2xl:max-w-[460px]">
                    {/* Eyebrow Tag using SectionTag component */}
                    <div className="arch__tag mb-3">
                      <SectionTag text={cat.sectionTitle} />
                    </div>

                    {/* Category Title */}
                    <h2 className="arch__title font-display text-2xl md:text-3xl 2xl:text-4xl font-extrabold tracking-tight text-brand-darkblue leading-tight mb-4">
                      {cat.name}
                    </h2>

                    {/* Modern Equipment Card Container */}
                    <div className="arch__card bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-brand-darkblue/10 shadow-[0_12px_32px_rgba(7,13,27,0.06)] space-y-4">
                      {cat.subcategories ? (
                        <div className="space-y-4">
                          {cat.subcategories.map((sub, sIdx) => (
                            <div key={sIdx} className="space-y-2">
                              {/* Subcategory Header */}
                              <div className="flex items-center justify-between border-l-2 border-brand-gold pl-2.5 py-0.5">
                                <h3 className="font-bold text-brand-darkblue text-xs 2xl:text-sm uppercase tracking-wider">
                                  {sub.name}
                                </h3>
                                {sub.totalUnits && (
                                  <span className="bg-brand-gold/15 text-brand-gold font-extrabold text-[10px] 2xl:text-xs px-2 py-0.5 rounded-full">
                                    {sub.totalUnits} {sub.totalUnits === 1 || sub.totalUnits === "1" ? "Unit" : "Units"}
                                  </span>
                                )}
                              </div>

                              {/* Subcategory Items */}
                              <div className="space-y-1.5 pt-1">
                                {sub.items.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="arch__item group flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 hover:bg-brand-darkblue border border-slate-100 hover:border-brand-darkblue transition-all duration-200 shadow-2xs cursor-default"
                                  >
                                    <div className="flex items-center gap-2.5 pr-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 group-hover:bg-brand-gold shrink-0 transition-colors" />
                                      <span className="text-xs 2xl:text-sm font-semibold text-brand-darkblue/90 group-hover:text-white transition-colors leading-snug">
                                        {item.model}
                                      </span>
                                    </div>
                                    {item.units && (
                                      <span className="bg-white group-hover:bg-brand-gold text-brand-darkblue group-hover:text-brand-darkblue font-bold text-[11px] px-2 py-0.5 rounded-lg shadow-2xs shrink-0 transition-colors">
                                        {item.units} {item.units === 1 || item.units === "1" ? "Unit" : "Units"}
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-1.5">
                          {cat.items &&
                            cat.items.map((item, idx) => (
                              <div
                                key={idx}
                                className="arch__item group flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 hover:bg-brand-darkblue border border-slate-100 hover:border-brand-darkblue transition-all duration-200 shadow-2xs cursor-default"
                              >
                                <div className="flex items-center gap-2.5 pr-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 group-hover:bg-brand-gold shrink-0 transition-colors" />
                                  <span className="text-xs 2xl:text-sm font-semibold text-brand-darkblue/90 group-hover:text-white transition-colors leading-snug">
                                    {item.model}
                                  </span>
                                </div>
                                {item.units && (
                                  <span className="bg-white group-hover:bg-brand-gold text-brand-darkblue group-hover:text-brand-darkblue font-bold text-[11px] px-2 py-0.5 rounded-lg shadow-2xs shrink-0 transition-colors">
                                    {item.units} {item.units === 1 || item.units === "1" ? "Unit" : "Units"}
                                  </span>
                                )}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="arch__right contents md:block flex-shrink md:h-[100vh] w-full md:max-w-[460px] 2xl:max-w-[500px] relative arch-right-pin">
              {categories.map((cat, i) => (
                <div
                  className="img-wrapper static md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 h-[220px] md:h-[340px] xl:h-[400px] 2xl:h-[500px] w-full rounded-xl overflow-hidden mb-4 md:mb-0 shadow-md"
                  style={{
                    order: i * 2 + 1,
                    zIndex: categories.length - i,
                  }}
                  key={i}
                >
                  <img
                    ref={(el) => (imgsRef.current[i] = el)}
                    src={
                      fallbackImages[cat.name] ||
                      fallbackImages["Other Equipments"]
                    }
                    alt={cat.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/30 to-transparent pointer-events-none md:hidden"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[10vh] md:h-[20vh]"></div>
        </div>
      </section>
    </div>
  );
}
