import React from "react";
import { BentoGrid, BentoCard } from "../components/BentoGrid";
import { BorderBeam } from "../components/BorderBeam";
import { NumberTicker } from "../components/NumberTicker";
import SpotlightCard from "../components/SpotlightCard";
import RetroGrid from "../components/RetroGrid";
import { FadeUpText } from "../pages/AboutUs/AnimatedText";

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
      className="relative bg-bg-primary border-b border-border-color py-16 md:py-24 overflow-hidden"
    >
      {/* 21st.dev Retro Grid Background */}
      <RetroGrid />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <FadeUpText>
          <div className="mb-10 md:mb-14">
            <span className="font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.35em] text-accent-gold uppercase block mb-2.5">
              By The Numbers
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary uppercase">
              Our Capabilities
            </h2>
          </div>
        </FadeUpText>

        {/* 21st.dev BentoGrid Layout */}
        <BentoGrid>
          {statsData.map((stat, i) => (
            <BentoCard key={i} index={i} className="p-0">
              <SpotlightCard className="h-full w-full p-6 sm:p-8 flex flex-col justify-between">
                {/* 21st.dev Border Beam on Hover */}
                <BorderBeam
                  size={180}
                  duration={10}
                  delay={i * 2.5}
                  colorFrom="#D4AF37"
                  colorTo="transparent"
                />

                {/* Card Header Index */}
                <div className="flex items-center justify-between w-full mb-6">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-accent-gold uppercase">
                    0{i + 1}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 group-hover:bg-accent-gold transition-colors" />
                </div>

                {/* 21st.dev Number Ticker */}
                <div>
                  <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary flex items-baseline select-none mb-3">
                    <NumberTicker value={stat.value} delay={0.2 + i * 0.1} />
                    <span className="text-accent-gold ml-0.5 text-3xl sm:text-4xl lg:text-5xl font-black">
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Gold Divider Line */}
                  <div className="w-8 h-[2px] bg-accent-gold my-3.5 rounded-full transition-all duration-500 group-hover:w-16" />

                  <span className="font-display text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] text-text-primary uppercase block mb-1">
                    {stat.label}
                  </span>
                  <span className="font-body text-xs text-text-secondary block leading-relaxed font-medium">
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
