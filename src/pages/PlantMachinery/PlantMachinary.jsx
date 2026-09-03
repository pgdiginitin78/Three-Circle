import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  constructionData,
  concreteData,
  haulingData,
  asphaltData,
  qualityData,
  toolsData,
} from "../../data/plantMachineryData";

const fallbackImages = {
  "Hydraulic Excavators": "/images/machinery/hero.jpg",
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
  "Asphalt & Crushing": "/images/machinery/Asphalt & Crushing.png",
  "Hauling & Transport": "/images/machinery/Hauling & Transport.png",
  "Quality Control Equipment":
    "/images/machinery/Quality Control Equipment.png",
  "Other Accessories": "/images/machinery/Other Accessories.png",
};

export default function PlantMachinary() {
  useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const flattenedCategories = [
    ...constructionData.categories.map((c) => ({
      ...c,
      section: constructionData.title,
    })),
    ...concreteData.categories.map((c) => ({
      ...c,
      section: concreteData.title,
    })),
    {
      name: "Asphalt & Crushing",
      section: asphaltData.title,
      totalUnits: asphaltData.categories.reduce(
        (acc, curr) => acc + curr.totalUnits,
        0,
      ),
      items: [],
      subcategories: asphaltData.categories,
    },
    {
      name: "Hauling & Transport",
      section: haulingData.title,
      totalUnits: haulingData.categories.reduce(
        (acc, curr) => acc + curr.totalUnits,
        0,
      ),
      items: [],
      subcategories: haulingData.categories,
    },
    ...qualityData.categories.map((c) => ({
      ...c,
      section: qualityData.title,
    })),
    ...toolsData.categories.map((c) => ({ ...c, section: toolsData.title })),
  ];

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-body selection:bg-[var(--brass-bright)] selection:text-white">
      <section className="relative pt-40 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="relative w-full h-full">
            <img
              src="/images/machinery/HeroImage.png"
              alt="Excavator Hero"
              className="w-full h-full object-cover "
            />
            {/* Theme color glass frosted effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2EA]/95 via-[#F5F2EA]/10 to-transparent " />
          </div>
        </div>

        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[60%] pt-8"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-5xl font-black text-[#1e293b] leading-tight mb-4 uppercase">
              Our <br />
              <span className="text-[#D4AF37]">Machinery Fleet</span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-md mb-10 font-medium leading-relaxed">
              A comprehensive range of modern equipment to deliver excellence on
              every project.
            </p>

            <div className="flex flex-wrap lg:flex-nowrap items-stretch gap-3 md:gap-4">
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 flex-1 min-w-[180px]">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-[#1e293b] text-[#D4AF37] flex items-center justify-center font-black">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div>
                  <div className="font-black text-lg text-[#1e293b] leading-none mb-1">
                    6
                  </div>
                  <div className="text-[9px] font-bold uppercase leading-tight text-gray-600">
                    Equipment
                    <br />
                    Categories
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 flex-1 min-w-[180px]">
                <div className="w-10 h-10 shrink-0 text-[#D4AF37] flex items-center justify-center font-black">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-black text-lg text-[#1e293b] leading-none mb-1">
                    190+
                  </div>
                  <div className="text-[9px] font-bold uppercase leading-tight text-gray-600">
                    Total Units
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 flex-1 min-w-[180px]">
                <div className="w-10 h-10 shrink-0 text-[#D4AF37] flex items-center justify-center font-black">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#1e293b] leading-tight">
                    Well
                    <br />
                    Maintained
                    <br />& Reliable
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 flex-1 min-w-[180px]">
                <div className="w-10 h-10 shrink-0 text-[#D4AF37] flex items-center justify-center font-black">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M12 11v10"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#1e293b] leading-tight">
                    Operator
                    <br />
                    Ready
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-white/80 p-3 flex items-center gap-3 flex-1 min-w-[180px]">
                <div className="w-10 h-10 shrink-0 text-[#D4AF37] flex items-center justify-center font-black">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#1e293b] leading-tight">
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

      <section className="py-12 md:py-16 bg-[#f8fafc]">
        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {flattenedCategories.map((cat, index) => {
              const imageSrc =
                fallbackImages[cat.name] || fallbackImages["Other Equipments"];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
                  className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col h-full"
                >
                  <div className="bg-[#D4AF37] text-white px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-white text-[#1e293b] font-black flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <h2 className="font-display font-bold text-base md:text-lg uppercase tracking-wide">
                        {cat.name}
                      </h2>
                    </div>
                    <div className="bg-white text-[#D4AF37] px-3 py-1 rounded text-xs font-black uppercase tracking-wider">
                      {cat.totalUnits}{" "}
                      {typeof cat.totalUnits === "number" ? "Units" : ""}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row flex-grow p-4 gap-6">
                    <div className="sm:w-[40%] flex items-center justify-center bg-gray-50 rounded overflow-hidden">
                      <img
                        src={imageSrc}
                        alt={cat.name}
                        className="w-full h-48 sm:h-full object-cover mix-blend-multiply opacity-95"
                      />
                    </div>

                    <div className="sm:w-[60%] flex flex-col justify-between flex-grow">
                      {cat.subcategories && cat.subcategories.length > 0 ? (
                        <div className="space-y-4 mb-4">
                          {cat.subcategories.map((sub, sIdx) => (
                            <div key={sIdx}>
                              <h3 className="font-bold text-[#1e293b] text-[11px] uppercase mb-1">
                                {sub.name}{" "}
                                <span className="text-[#D4AF37] float-right">
                                  {sub.totalUnits} Units
                                </span>
                              </h3>
                              <ul className="space-y-1">
                                {sub.items.map((item, iIdx) => (
                                  <li
                                    key={iIdx}
                                    className="flex justify-between items-start text-xs border-b border-gray-100 pb-1 last:border-0"
                                  >
                                    <div className="flex items-start gap-2 pr-4">
                                      <span className="text-[#D4AF37] mt-1 text-[8px]">
                                        ■
                                      </span>
                                      <span className="font-medium text-gray-700">
                                        {item.model}
                                      </span>
                                    </div>
                                    <span className="font-bold text-gray-900 shrink-0">
                                      {item.units}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-1 mb-4">
                          {cat.items &&
                            cat.items.map((item, iIdx) => (
                              <li
                                key={iIdx}
                                className="flex justify-between items-start text-xs md:text-sm border-b border-gray-100 pb-1.5 last:border-0"
                              >
                                <div className="flex items-start gap-2 pr-4">
                                  <span className="text-[#D4AF37] mt-1.5 text-[8px]">
                                    ■
                                  </span>
                                  <span className="font-medium text-gray-700">
                                    {item.model}
                                  </span>
                                </div>
                                <span className="font-bold text-gray-900 shrink-0">
                                  {item.units}
                                </span>
                              </li>
                            ))}
                        </ul>
                      )}

                      <div className="mt-auto pt-2 border-t border-gray-200 flex justify-between items-center">
                        <span className="font-bold text-[#1e293b] text-sm">
                          Total Units
                        </span>
                        <span className="font-black text-[#D4AF37] text-base">
                          {cat.totalUnits}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
