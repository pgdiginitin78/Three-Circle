import React from "react";
import { motion } from "framer-motion";

import mialAirsideRescueImg from "../../assets/ongoing-projects/mial-airside-rescue.jpg";
import mialSecondaryFireStationImg from "../../assets/ongoing-projects/mial-secondary-fire-station.jpg";
import mialBoundaryWallImg from "../../assets/ongoing-projects/mial-boundary-wall.jpg";
import ltBoulderCrushingImg from "../../assets/ongoing-projects/lt-boulder-crushing.jpg";
import ltAggregateSandSupplyImg from "../../assets/ongoing-projects/lt-aggregate-sand-supply.jpg";

function SvgIconPin() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-1.5 text-[#D4AF37] shrink-0"
    >
      <path
        d="M12 21C16 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 8 17 12 21Z"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="3" fill="#D4AF37" />
    </svg>
  );
}

function SvgIconTools() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-1.5 text-[#D4AF37] shrink-0"
    >
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SvgActionArrow() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:translate-x-1 shrink-0 text-[#D4AF37]"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <path
        d="M9 12H15M15 12L12 9M15 12L12 15"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ongoingProjects = [
  {
    id: "01",
    client: "MIAL",
    clientFullName: "Mumbai International Airport Limited",
    title: "AIRSIDE FIRE FIGHTING & RESCUE STATION",
    scope:
      "All civil, Interiors, MEP and Façade Works for high-readiness airport emergency operations.",
    image: mialAirsideRescueImg,
  },
  {
    id: "02",
    client: "MIAL",
    clientFullName: "Mumbai International Airport Limited",
    title: "SECONDARY FIRE STATION",
    scope:
      "All civil, architectural and MEP work supporting secondary airport security response zones.",
    image: mialSecondaryFireStationImg,
  },
  {
    id: "03",
    client: "MIAL",
    clientFullName: "Mumbai International Airport Limited",
    title: "BOUNDARY WALL",
    scope:
      "All civil Works and reinforced perimeter foundation securing airside demarcation boundaries.",
    image: mialBoundaryWallImg,
  },
  {
    id: "04",
    client: "L & T",
    clientFullName: "Larsen & Toubro",
    title: "CRUSHING OF BOULDERS",
    scope:
      "Crushing of supplied boulders by client into Aggregate and Sand by a 3 Stage VSI Crusher.",
    image: ltBoulderCrushingImg,
  },
  {
    id: "05",
    client: "L & T",
    clientFullName: "Larsen & Toubro",
    title: "SUPPLY OF AGGREGATE & SAND",
    scope:
      "Supply of 10mm, 20mm and crushed sand for production of high-specification RMC concrete.",
    image: ltAggregateSandSupplyImg,
  },
];

export default function FeaturedProjects() {
  return (
    <section
      className="relative w-full bg-[#FAFAFA] border-b border-black/[0.06] text-[#111111] py-6 sm:py-10 lg:py-12 overflow-hidden font-body"
      id="featured-projects"
    >
      <div className="absolute top-[70px] right-[15%] w-10 h-10 rounded-full border border-[#D4AF37]/30 pointer-events-none z-[1]" />

      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div
          className="mb-12 sm:mb-16 lg:mb-10 text-left"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="font-display text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-[#B8860B] uppercase">
              Current Deliverables
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111111] uppercase leading-tight m-0">
              Our Ongoing <span className="text-[#D4AF37]">Projects.</span>
            </h2>
          </div>
        </motion.div>
        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          {ongoingProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group w-full bg-white border border-black/[0.08] rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.12)] hover:border-[#D4AF37]/60 transition-all duration-300 text-left"
              >
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-6 lg:gap-8">
                  <div className="w-full lg:w-[280px] xl:w-[320px] aspect-[16/10] shrink-0 rounded-xl overflow-hidden bg-slate-100 shadow-sm relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  
                  </div>

                  <div className="flex-1 flex flex-col justify-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] sm:text-xs font-bold text-[#B8860B] uppercase tracking-wider">
                        {project.client} — {project.clientFullName}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl lg:text-[24px] xl:text-[26px] font-black text-[#111111] uppercase leading-tight tracking-tight group-hover:text-[#D4AF37] transition-colors m-0">
                      {project.title}
                    </h3>

                    <div className="flex flex-col gap-2 pt-1 border-t border-black/[0.06]">
                      <div className="flex items-start gap-1.5 text-xs sm:text-sm">
                        <SvgIconPin />
                        <span className="text-[#777777] font-medium shrink-0">
                          Client &nbsp;:
                        </span>
                        <span className="text-[#111111] font-semibold">
                          {project.clientFullName}
                        </span>
                      </div>

                      <div className="flex items-start gap-1.5 text-xs sm:text-sm">
                        <SvgIconTools />
                        <span className="text-[#777777] font-medium shrink-0">
                          Scope :
                        </span>
                        <span className="text-[#555552] leading-relaxed">
                          {project.scope}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex lg:flex-col items-center justify-between lg:justify-center gap-3 border-t lg:border-t-0 lg:border-l border-black/[0.06] pt-4 lg:pt-0 lg:pl-8">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-[#B8860B]">
                        Ongoing
                      </span>
                    </div>

                    <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-[#FAFAFA] border border-black/[0.08] group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
                      <SvgActionArrow />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
