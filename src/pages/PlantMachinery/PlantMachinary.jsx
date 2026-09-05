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
  // Map Asphalt & Crushing sub-categories to the image
  "Asphalt Equipments": "/images/machinery/Asphalt & Crushing.png",
  "Asphalt Equipments": "/images/machinery/Asphalt Equipments.png",
  "Stone Crushers": "/images/machinery/Asphalt & Crushing.png",
  // Map Hauling & Transport sub-categories to the image
  "Hauling Equipment": "/images/machinery/Hauling & Transport.png",
  "Transport": "/images/machinery/Hauling & Transport.png",
  "Quality Control Equipment": "/images/machinery/Quality Control Equipment.png",
  "Other Accessories": "/images/machinery/Other Accessories.png",
};

export default function PlantMachinary() {
  useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerRef = useRef(null);
  const imgsRef = useRef([]);
  const categories = allMachineryData.flatMap((section) =>
    section.data.categories.map((cat) => ({
      ...cat,
      sectionTitle: section.data.title,
    })),
  );

  useEffect(() => {
    let ctx = gsap.context(() => {
      const imgs = imgsRef.current;

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

            const sectionTimeline = gsap.timeline();

            if (nextImage) {
              sectionTimeline.to(
                currentImage,
                {
                  clipPath: "inset(0px 0px 100%)",
                  duration: 1.5,
                  ease: "none",
                },
                0,
              );
            }

            mainTimeline.add(sectionTimeline);
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
      <section className=" relative pt-14 lg:pt-44 pb-16 lg:pb-24 overflow-hidden">
        <div className="hidden md:block absolute inset-0 z-0 md:flex justify-end">
          <div className="relative w-full h-full">
            <img
              src="/images/machinery/HeroImage.png"
              alt="Excavator Hero"
              className="w-full h-full object-top "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-darkblue/45 via-brand-white/10 to-transparent " />
          </div>
        </div>
        <div className="md:hidden absolute inset-0 z-0 ">
          <div className="relative w-full h-full">
            <img
              src="/images/machinery/HeroBannerMobile.png"
              alt="Excavator Hero"
              className="w-full h-full object-top "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-darkblue/45 via-brand-white/10 to-transparent " />
          </div>
        </div>

        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[60%] pt-8"
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl   leading-tight mb-4 uppercase">
              <span className="text-brand-gold"> Our</span>
              <br />
              <span className="text-brand-gold">Machinery Fleet</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-md mb-10 font-medium leading-relaxed">
              A comprehensive range of modern equipment to deliver excellence on
              every project.
            </p>

            <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap lg:flex-nowrap md:items-stretch md:gap-4">
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-darkblue text-brand-gold flex items-center justify-center font-black">
                  <BiCategory size={22} />
                </div>
                <div>
                  <div className="font-black text-lg text-white/70 leading-none mb-1">
                    6
                  </div>
                  <div className="text-[9px] font-bold uppercase leading-tight text-white/70">
                    Equipment
                    <br />
                    Categories
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]">
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black">
                  <FaTractor size={22} />
                </div>
                <div>
                  <div className="font-black text-lg text-white/70 leading-none mb-1">
                    190+
                  </div>
                  <div className="text-[9px] font-bold uppercase leading-tight text-white/70">
                    Total Units
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]">
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black">
                  <FaCheckCircle size={22} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/70 leading-tight">
                    Well
                    <br />
                    Maintained
                    <br />& Reliable
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]">
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black">
                  <FaHardHat size={22} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/70 leading-tight">
                    Operator
                    <br />
                    Ready
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 md:flex-1 md:min-w-[180px]">
                <div className="w-10 h-10 shrink-0 bg-brand-darkblue rounded-lg text-brand-gold flex items-center justify-center font-black">
                  <MdPrecisionManufacturing size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/70 leading-tight">
                    Modern Fleet
                    <br />
                    For Every Need
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className=" bg-brand-white" ref={containerRef}>
        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="arch-section flex flex-col md:flex-row gap-4 md:gap-8 justify-between max-w-[1100px] 2xl:max-w-[1200px] mx-auto relative">
            <div className="arch__left contents md:block md:min-w-[250px] 2xl:max-w-[350px]">
              {categories.map((cat, i) => (
                <div
                  className="arch__info h-auto md:h-[100vh] flex flex-col justify-center max-w-[320px] 2xl:max-w-[450px] py-8 md:py-0"
                  key={i}
                  style={{ order: i * 2 }}
                >
                  <div className="w-full">
                    <p className="text-brand-gold text-[10px] 2xl:text-sm  uppercase font-bold tracking-wider mb-1">
                      {cat.sectionTitle}
                    </p>
                    <h2 className="font-display text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-extrabold tracking-tight text-brand-darkblue leading-tight mb-2">
                      {cat.name}
                    </h2>
                    <div className="bg-brand-gold/10 border border-brand-gold/20 rounded p-2 mb-3 inline-block w-max">
                      <span className="font-bold text-brand-gold uppercase text-[10px] tracking-wider">
                        Total: {cat.totalUnits}
                      </span>
                    </div>

                    {cat.subcategories ? (
                      <div className="space-y-3 ">
                        {cat.subcategories.map((sub, sIdx) => (
                          <div key={sIdx}>
                            <h3 className="font-bold text-brand-darkblue text-[9px] uppercase mb-1">
                              {sub.name}{" "}
                              <span className="text-brand-gold ml-1">
                                ({sub.totalUnits})
                              </span>
                            </h3>
                            <ul className="space-y-1">
                              {sub.items.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex justify-between items-start text-[11px] border-b border-brand-darkblue/5 pb-1 last:border-0"
                                >
                                  <span className="font-medium text-brand-darkblue/80 pr-2">
                                    {item.model}
                                  </span>
                                  <span className="font-bold text-brand-darkblue shrink-0">
                                    {item.units}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-1">
                        {cat.items &&
                          cat.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex justify-between items-start text-[11px] 2xl:text-sm  border-b border-brand-darkblue/5 pb-1 last:border-0"
                            >
                              <span className="font-medium text-brand-darkblue/80 pr-2">
                                {item.model}
                              </span>
                              <span className="font-bold text-brand-darkblue shrink-0">
                                {item.units}
                              </span>
                            </li>
                          ))}
                      </ul>
                    )}
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
