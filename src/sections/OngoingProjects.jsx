import React from "react";
import { motion } from "framer-motion";

const ongoingProjects = [
  {
    num: "01",
    client: "MIAL",
    clientFullName: "Mumbai International Airport Limited",
    title: "AIRSIDE FIRE FIGHTING & RESCUE STATION",
    scope:
      "Scope of Work: All civil, Interiors, MEP and Façade Works for high-readiness airport emergency operations.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#B8860B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    num: "02",
    client: "MIAL",
    clientFullName: "Mumbai International Airport Limited",
    title: "SECONDARY FIRE STATION",
    scope:
      "Scope of Work: All civil, architectural and MEP work supporting secondary airport security response zones.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#B8860B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="#B8860B" />
        <circle cx="12" cy="10" r="1" fill="#B8860B" />
        <circle cx="15" cy="10" r="1" fill="#B8860B" />
      </svg>
    ),
  },
  {
    num: "03",
    client: "MIAL",
    clientFullName: "Mumbai International Airport Limited",
    title: "BOUNDARY WALL",
    scope:
      "Scope of Work: All civil Works and reinforced perimeter foundation securing airside demarcation boundaries.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#B8860B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    num: "04",
    client: "L & T",
    clientFullName: "Larsen & Toubro",
    title: "CRUSHING OF BOULDERS",
    scope:
      "Scope of Work: Crushing of supplied boulders by client into Aggregate and Sand by a 3 Stage VSI Crusher.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#B8860B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    num: "05",
    client: "L & T",
    clientFullName: "Larsen & Toubro",
    title: "SUPPLY OF AGGREGATE & SAND",
    scope:
      "Scope of Work: Supply of 10mm, 20mm and crushed sand for production of high-specification RMC concrete.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#B8860B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 11 3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

function DiamondTile({ item, index }) {
  const isEven = index % 2 === 1;

  return (
    <div className="relative w-[92px] h-[92px] flex items-center justify-center shrink-0 cursor-pointer">
      {/* Animated Floor Glow */}
      <motion.div
        className="absolute -bottom-2 w-16 h-8 bg-[#D4AF37]/50 rounded-full blur-lg"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4,
        }}
      />

      {/* Floating 3D Diamond Square with Alternate Up/Down Motion */}
      <motion.div
        className="relative w-[68px] h-[68px] bg-white border-[1.5px] border-[#D4AF37]/70 shadow-[0_10px_22px_rgba(212,175,55,0.35)] flex items-center justify-center"
        style={{ transform: "rotate(45deg)", borderRadius: "18px" }}
        animate={{
          y: isEven ? [4, -6, 4] : [-6, 4, -6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.35,
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 14px 28px rgba(212,175,55,0.55)",
          transition: { duration: 0.2 },
        }}
      >
        <div style={{ transform: "rotate(-45deg)" }}>{item.icon}</div>
      </motion.div>
    </div>
  );
}

export default function OngoingProjects() {
  return (
    <section
      id="ongoing-projects"
      className="w-full bg-white border-b border-black/[0.06] py-16 sm:py-24 lg:py-28 overflow-hidden font-sans"
    >
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-baseline gap-4 mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#222222] tracking-tight">
            Our Ongoing Projects
          </h2>
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#B8860B] uppercase">
            3 Circle
          </span>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute top-0 left-0 right-0 h-[220px] pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 220"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <filter
                  id="softLineGlow"
                  x="-20%"
                  y="-100%"
                  width="140%"
                  height="300%"
                >
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>
              <path
                d="M100,84 L300,172 L500,84 L700,172 L900,84"
                stroke="#D4AF37"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.28"
                filter="url(#softLineGlow)"
              />
              {/* <path
                d="M100,84 L300,172 L500,84 L700,172 L900,84"
                stroke="#C9C9C9"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.7"
              /> */}
            </svg>
          </div>

          <div className="flex relative z-10">
            {ongoingProjects.map((item, index) => {
              const isLow = index % 2 === 1;
              return (
                <div
                  key={item.num}
                  className="w-1/5 flex flex-col items-start text-left"
                >
                  <div
                    className="w-full flex flex-col items-center"
                    style={{
                      transform: isLow ? "translateY(88px)" : "translateY(0px)",
                    }}
                  >
                    <span className="w-full italic font-black text-2xl xl:text-[28px] text-[#B8860B] mb-1 leading-none pl-2">
                      {item.num}
                    </span>
                    <DiamondTile item={item} index={index} />

                    <div className="w-full pl-2 pr-4 mt-4 flex flex-col items-start">
                      <h3 className="text-xs xl:text-sm font-extrabold uppercase tracking-wide text-[#B8860B] leading-snug">
                        {item.title}
                      </h3>
                      <span className="w-8 h-[3px] bg-[#D4AF37] rounded-full my-2" />
                      <span className="text-[11px] font-bold text-[#111111] uppercase tracking-tight mb-1.5">
                        {item.clientFullName}
                      </span>
                      <p className="text-[11px] xl:text-xs text-[#666666] leading-relaxed">
                        {item.scope}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden relative">
          <div className="absolute left-[45px] top-8 bottom-8 w-2 bg-[#EDEDED] rounded-full" />
          <div className="flex flex-col gap-10">
            {ongoingProjects.map((item, index) => (
              <div
                key={item.num}
                className="flex items-start gap-4 sm:gap-6 relative z-10"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <span className="italic font-black text-lg text-[#B8860B] mb-1">
                    {item.num}
                  </span>
                  <DiamondTile item={item} index={index} />
                </div>

                <div className="flex-1 pt-1">
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[#B8860B] leading-snug">
                    {item.title}
                  </h3>
                  <span className="block w-8 h-[3px] bg-[#D4AF37] rounded-full my-2" />
                  <span className="text-[10px] font-bold text-[#111111] uppercase block mb-1.5">
                    {item.clientFullName}
                  </span>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {item.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
