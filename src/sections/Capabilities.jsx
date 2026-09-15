import React from "react";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { BorderBeam } from "../components/BorderBeam";
import { NumberTicker } from "../components/NumberTicker";
import SpotlightCard from "../components/SpotlightCard";
import RetroGrid from "../components/RetroGrid";
import SectionTag from "../components/SectionTag";
import { FadeUpText } from "../pages/AboutUs/AnimatedText";
import capabilitiesBackImg from "../assets/projectshome/capabilitiesback.png";

const statsData = [
  {
    value: 120,
    suffix: "+",
    label: "PROJECTS COMPLETED",
    desc: "Across GCC and MENA",
  },
  {
    value: 15,
    suffix: "+",
    label: "YEARS EXPERIENCE",
    desc: "In civil & industrial works",
  },
  {
    value: 450,
    suffix: "+",
    label: "TEAM MEMBERS",
    desc: "Skilled professionals",
  },
  {
    value: 25,
    suffix: "+",
    label: "PROJECT LOCATIONS",
    desc: "UAE and regional sites",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative bg-bg-primary border-b border-border-color pt-8 pb-10 md:pt-10 md:pb-14 overflow-hidden"
    >
      {/* 21st.dev Retro Grid Background */}
      <RetroGrid />

      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-[1]">
        <img
          src={capabilitiesBackImg}
          alt="Capabilities background"
          className="w-full h-full object-cover object-center opacity-70 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/45 to-white/75" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <FadeUpText>
          <div className="mb-6 md:mb-8">
            <div className="mb-3.5 sm:mb-4">
              <SectionTag text="By The Numbers" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary uppercase">
              Our Capabilities
            </h2>
          </div>
        </FadeUpText>

        {/* 21st.dev BentoGrid Layout */}
        <BentoGrid>
          {statsData.map((stat, i) => (
            <BentoCard key={i} index={i} className="p-0">
              <SpotlightCard className="h-full w-full p-4.5 sm:p-5 flex flex-col justify-between bg-white/90 backdrop-blur-md border border-brand-darkblue/[0.08] rounded-xl shadow-sm hover:shadow-xl hover:border-brand-gold/50 transition-all duration-300">
                {/* 21st.dev Border Beam on Hover */}
                <BorderBeam
                  size={180}
                  duration={10}
                  delay={i * 2.5}
                  colorFrom="var(--color-brand-gold)"
                  colorTo="transparent"
                />

                {/* Card Header Index */}
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                    0{i + 1}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
                </div>

                {/* 21st.dev Number Ticker */}
                <div>
                  <div className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-text-primary flex items-baseline select-none mb-2">
                    <NumberTicker value={stat.value} delay={0.2 + i * 0.1} />
                    <span className="text-brand-gold ml-0.5 text-2xl sm:text-3xl lg:text-4xl font-black">
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Gold Divider Line */}
                  <div className="w-7 h-[2px] bg-brand-gold my-2.5 rounded-full transition-all duration-500 group-hover:w-14" />

                  <span className="font-display text-[9.5px] sm:text-[10.5px] font-extrabold tracking-[0.18em] text-text-primary uppercase block mb-0.5">
                    {stat.label}
                  </span>
                  <span className="font-body text-[11px] sm:text-xs text-text-secondary block leading-relaxed font-medium">
                    {stat.desc}
                  </span>
                </div>
              </SpotlightCard>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
