import React from "react";
import { motion } from "framer-motion";
import { FadeUpText } from "../components/AnimatedText";
import SpotlightCard from "../components/SpotlightCard";

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
      className="relative bg-bg-primary border-b border-border-color py-16 md:py-24 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col  gap-6 mb-12 md:mb-5">
          <div>
            <FadeUpText>
              <span className="font-display text-[10px] font-extrabold tracking-[0.35em] text-accent-gold uppercase block mb-3">
                Comprehensive Expertise
              </span>
            </FadeUpText>
            <FadeUpText delay={0.05}>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary uppercase">
                Our Core Services
              </h2>
            </FadeUpText>
            <FadeUpText delay={0.1}>
              <p className="text-sm md:text-base text-text-secondary max-w-4xl leading-relaxed">
                Integrated engineering and heavy industrial capabilities
                delivered with precision across the UAE and GCC.
              </p>
            </FadeUpText>
          </div>
        </div>

        {/* 2x2 Responsive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <SpotlightCard className="h-full flex flex-col bg-white border border-black/[0.08] rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-black/20 transition-all duration-500 group">
                {/* Image Showcase with Inset Gold Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-tertiary">
                  <div className="absolute inset-0 border border-accent-gold/20 m-3 pointer-events-none z-10 transition-all duration-500 group-hover:m-2 group-hover:border-accent-gold/45 rounded-sm" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="font-mono text-xs font-bold tracking-widest bg-black/75 text-accent-gold backdrop-blur-md py-1 px-3 rounded-full border border-white/10 shadow-sm">
                      {service.num}
                    </span>
                  </div>

                  {/* Title Overlay on Image Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="font-display text-[9px] font-bold tracking-[0.2em] text-accent-gold uppercase block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Capability Bullet Points */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                  <div className="flex flex-col gap-3">
                    {service.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 py-2 border-b border-black/[0.05] last:border-b-0"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                        <span className="font-body text-xs sm:text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 mt-4 flex items-center justify-between border-t border-black/[0.06]">
                    <span className="font-display text-[9px] font-extrabold tracking-[0.25em] text-accent-gold uppercase">
                      Core Discipline
                    </span>
                    <span className="text-text-secondary group-hover:text-text-primary group-hover:translate-x-1 transition-all duration-200 text-sm">
                      →
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
