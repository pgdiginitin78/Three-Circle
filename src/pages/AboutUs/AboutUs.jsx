import React from "react";
import { motion } from "framer-motion";
import BlueprintGrid from "./BlueprintGrid";
import { FadeUpText, WordReveal } from "./AnimatedText";
import ArchitecturalCanvas from "./ArchitecturalCanvas";

const narrativeSections = [
  {
    num: "01",
    label: "LEADERSHIP & LEGACY",
    title: "Leadership and Legacy",
    paragraphs: [
      "At the helm of 3 CIRCLES OPC P LTD is Mr. Sidharth Jaiswal, a Civil Engineer with a Diploma and a Bachelor's degree from Mumbai University. With hands-on experience in the family construction business and adept management skills developed under the mentorship of his father, Mr. Vijay Jaiswal, Mr. Sidharth Jaiswal leads the company into a new era.",
    ],
  },
  {
    num: "02",
    label: "ESTABLISHMENT & EXPERTISE",
    title: "Establishment and Expertise",
    paragraphs: [
      "Founded in 1979, Three Circles Construction Company, now 3 CIRCLES OPC P LTD, specializes in executing government construction projects. The company has played a foundational role in the development of New Bombay and has actively contributed to nation-building. Engaging in notable projects like JNPT Port, Three Circles has collaborated with prestigious multinational companies such as HYUNDAI, MITSUI, XANON VERSATOP, KLOCKNER, and many more., showcasing both technical expertise and financial stability for high-value endeavors.",
    ],
  },
  {
    num: "03",
    label: "TRANSITION & CONTINUITY",
    title: "Transition and Continuity",
    paragraphs: [
      'In 2021, recognizing the importance of preserving its legacy, the company underwent a strategic transition to become "3 CIRCLES OPC P LTD." This private limited entity, with Mr. Vijay Jaiswal as Director and Mr. Sidharth Jaiswal as Managing Director, reflects a commitment to sustained growth and unwavering continuity in the construction industry.',
    ],
  },
];

const directors = [
  {
    name: "MR. VIJAY JAISWAL",
    role: "Director",
    image: "/directors/vijay_portrait.png",
    period: "Foundational Leadership",
    desc: "Guiding visionary direction with decades of pioneering execution across foundational government and infrastructure endeavors.",
  },
  {
    name: "MR. SIDDHARTH JAISWAL",
    role: "Managing Director",
    image: "/directors/siddharth_portrait.png",
    period: "Strategic Direction",
    desc: "Civil Engineer (Diploma & B.E. Mumbai University) spearheading strategic modernization, high-value partnerships, and sustainable growth.",
  },
];

export default function AboutUs() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary mx-auto selection:bg-accent-gold selection:text-white overflow-hidden">
      <BlueprintGrid />

      <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 2xl:pt-60 2xl:pb-60 border-b border-black/[0.06] overflow-hidden">
        <ArchitecturalCanvas />

        <div className="w-full max-w-[1440px]  mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-5xl font-black tracking-tight text-text-primary uppercase leading-[0.95] mb-5 sm:mb-6 md:mb-7 lg:mb-8">
              <WordReveal text="ABOUT US" delay={0.05} />
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="origin-left h-0.5 w-20 sm:w-24 md:w-28 lg:w-32 bg-accent-gold mb-6 sm:mb-7 md:mb-8"
            />

            <FadeUpText delay={0.25}>
              <h2 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-tight text-text-primary/90 uppercase leading-snug max-w-full sm:max-w-xl md:max-w-2xl mb-6 sm:mb-8 md:mb-9 lg:mb-10">
                The Evolution From Three Circles To 3 Circles OPC P LTD.
              </h2>
            </FadeUpText>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 pt-6 sm:pt-7 md:pt-8 border-t border-black/[0.08]"
            >
              <div>
                <span className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-accent-gold block mb-1">
                  1979
                </span>
                <span className="font-display text-[8px] sm:text-[9px] md:text-[10px] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-text-secondary uppercase">
                  Legacy Founded
                </span>
              </div>
              <div>
                <span className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-accent-gold block mb-1">
                  45+ YRS
                </span>
                <span className="font-display text-[8px] sm:text-[9px] md:text-[10px] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-text-secondary uppercase">
                  Govt & Infrastructure
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-accent-gold block mb-1">
                  MNC Tier
                </span>
                <span className="font-display text-[8px] sm:text-[9px] md:text-[10px] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-text-secondary uppercase">
                  Global Partnerships
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-32">
            {narrativeSections.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-start pt-8 sm:pt-9 md:pt-10 border-t border-black/[0.08]"
              >
                <div className="md:col-span-4 flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-mono text-xs sm:text-sm font-bold text-accent-gold tracking-widest">
                      [{item.num}]
                    </span>
                    <span className="font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] sm:tracking-[0.25em] text-text-secondary uppercase">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight uppercase">
                    {item.title}
                  </h3>
                </div>

                <div className="md:col-span-8 flex flex-col gap-4 sm:gap-5 md:gap-6">
                  {item.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary font-normal leading-relaxed tracking-normal"
                    >
                      {p}
                    </p>
                  ))}
                  <div className="w-10 sm:w-12 h-px bg-accent-gold/40 mt-1 sm:mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 bg-bg-secondary border-t border-b border-black/[0.08] relative z-10">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 md:mb-16 lg:mb-20">
            <div>
              <FadeUpText>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="h-px w-6 sm:w-8 bg-accent-gold" />
                  <span className="font-display text-[9px] sm:text-[10px] md:text-xs font-extrabold tracking-[0.2em] sm:tracking-[0.3em] text-accent-gold uppercase">
                    Executive Leadership
                  </span>
                </div>
              </FadeUpText>
              <FadeUpText delay={0.1}>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-text-primary uppercase">
                  Board of Directors
                </h2>
              </FadeUpText>
            </div>
            <FadeUpText delay={0.2}>
              <span className="font-mono text-[10px] sm:text-xs font-semibold text-text-secondary uppercase tracking-widest">
                3 Circles OPC P LTD • Governance
              </span>
            </FadeUpText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14">
            {directors.map((director, i) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white border border-black/[0.08] rounded-sm p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-accent-gold/50 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-px h-8 sm:h-10 bg-accent-gold/40 transition-all duration-500 group-hover:h-14 sm:group-hover:h-16 group-hover:bg-accent-gold" />
                  <div className="absolute top-0 right-0 h-px w-8 sm:w-10 bg-accent-gold/40 transition-all duration-500 group-hover:w-14 sm:group-hover:w-16 group-hover:bg-accent-gold" />
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8 mb-5 sm:mb-6">
                    <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full p-1 bg-gradient-to-b from-accent-gold/50 via-black/10 to-transparent shadow-lg group-hover:from-accent-gold group-hover:scale-105 transition-all duration-500">
                      <div className="w-full h-full rounded-full overflow-hidden bg-bg-tertiary border border-black/10 relative">
                        <img
                          src={director.image}
                          alt={`${director.name} - ${director.role}`}
                          className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col text-center sm:text-left justify-center sm:pt-2">
                      <span className="font-mono text-[9px] sm:text-[10px] font-bold text-accent-gold uppercase tracking-widest mb-1 sm:mb-1.5">
                        {director.period}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-text-primary tracking-tight uppercase">
                        {director.name}
                      </h3>
                      <p className="font-display text-xs sm:text-sm md:text-base font-bold text-accent-gold tracking-wide uppercase mt-1">
                        {director.role}
                      </p>
                      <div className="h-0.5 w-10 sm:w-12 bg-accent-gold/60 mt-2 sm:mt-3 mx-auto sm:mx-0 group-hover:w-16 sm:group-hover:w-20 transition-all duration-300" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed mb-5 sm:mb-6">
                    {director.desc}
                  </p>
                </div>

                <div className="pt-5 sm:pt-6 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="font-display text-[8px] sm:text-[9px] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-text-primary uppercase">
                    3 Circles OPC P LTD
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
