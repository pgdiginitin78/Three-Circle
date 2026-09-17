import React from "react";
import { motion } from "framer-motion";
import { FadeUpText } from "../pages/AboutUs/AnimatedText";
import SpotlightCard from "../components/SpotlightCard";
import SectionTag from "../components/SectionTag";
import { ArrowRight } from "../components/Icons";

import buildingImg from "../assets/services/building.jpg";
import miningImg from "../assets/services/mining.jpg";
import infrastructureImg from "../assets/services/infrastructure.jpg";
import excavationImg from "../assets/services/excavation.jpg";

const servicesData = [
  {
    num: "01",
    title: "BUILDING INDUSTRY",
    subtitle: "Commercial & Highrise Civil Structures",
    items: [
      "RCC Works & Framework",
      "MEP Engineering & Systems",
      "Cladding & Architectural Facades",
    ],
    image: buildingImg,
  },
  {
    num: "02",
    title: "MINING & CRUSHING",
    subtitle: "Aggregate Extraction & Processing",
    items: [
      "Quarry Extraction, Drilling & Blasting",
      "Crushing Plants & Material Sorting",
      "Bulk Transportation & Material Handling",
    ],
    image: miningImg,
  },
  {
    num: "03",
    title: "INFRASTRUCTURE",
    subtitle: "Public & Regional Transportation Works",
    items: [
      "Bridge & Overpass Construction",
      "Roads & Highway Network Development",
      "Highrise Deep Foundation Systems",
    ],
    image: infrastructureImg,
  },
  {
    num: "04",
    title: "EXCAVATION",
    subtitle: "Heavy Earthworks & Land Development",
    items: [
      "Site Clearing & Preparation",
      "Precision Grading & Levelling",
      "Bulk Earth Moving & Safe Disposal",
    ],
    image: excavationImg,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-bg-primary border-b border-border-color pt-8 md:pt-12 pb-14 md:pb-20 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex flex-col gap-4 mb-10 md:mb-14">
          <div>
            <FadeUpText>
              <div className="mb-4 sm:mb-5">
                <SectionTag text="Comprehensive Expertise" />
              </div>
            </FadeUpText>
            <FadeUpText delay={0.05}>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary uppercase">
                Our Core Services
              </h2>
            </FadeUpText>
            <FadeUpText delay={0.1}>
              <p className="text-xs sm:text-sm md:text-base text-text-secondary max-w-3xl leading-relaxed mt-3.5 sm:mt-4">
                Integrated engineering and heavy industrial capabilities
                delivered with precision across the UAE and GCC.
              </p>
            </FadeUpText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <SpotlightCard className="h-full flex flex-col bg-white border border-brand-darkblue/[0.07] rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-500 group">
                <motion.div
                  initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2.8,
                    delay: index * 0.3,
                    ease: [0.25, 1, 0.35, 1],
                  }}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-bg-tertiary"
                >
                  {/* Animated Gold Inner Border */}
                  <div className="absolute inset-0 border border-brand-gold/30 m-3 pointer-events-none z-20 transition-all duration-500 group-hover:m-2 group-hover:border-brand-gold/70 group-hover:scale-[0.98] rounded-sm" />
                  
                  {/* Gloss Shine Sweep Animation on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

                  {/* Animated Image with Hover Scale */}
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    initial={{ scale: 1.35 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 3.2,
                      delay: index * 0.3,
                      ease: [0.25, 1, 0.35, 1],
                    }}
                    className="w-full h-full object-cover contrast-[1.05] group-hover:scale-110 group-hover:contrast-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/35 to-transparent z-10" />

                  {/* Text Container with Elevation Animation */}
                  <div className="absolute bottom-3.5 left-4 right-4 z-20 transform transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    <span className="font-display text-[8px] font-bold tracking-[0.2em] !text-white/90 uppercase block mb-1 drop-shadow-sm">
                      {service.subtitle}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-extrabold tracking-tight !text-white uppercase drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                  <div className="flex flex-col gap-2.5">
                    {service.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 py-1.5 border-b border-brand-darkblue/[0.04] last:border-b-0"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        <span className="font-body text-xs sm:text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 mt-3 flex items-center justify-between border-t border-brand-darkblue/[0.06]">
                    <span className="font-display text-[9px] font-extrabold tracking-[0.2em] text-brand-gold uppercase">
                      Core Discipline
                    </span>
                    <span className="text-text-secondary group-hover:text-text-primary group-hover:translate-x-1 transition-all duration-200">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
