import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WordReveal, FadeUpText } from "../pages/AboutUs/AnimatedText";

const capabilities = [
  "BUILDING INDUSTRY",
  "MINING & CRUSHING",
  "INFRASTRUCTURE",
  "EXCAVATION",
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-14 md:py-20 bg-bg-secondary border-b border-border-color overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            className="relative w-full aspect-[4/5] overflow-hidden rounded-sm border border-brand-darkblue/[0.06] shadow-xl group order-2 lg:order-1"
            initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 border border-brand-gold/20 m-3.5 pointer-events-none z-10 transition-all duration-500 group-hover:m-2.5 group-hover:border-brand-gold/45" />
            <motion.img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80"
              alt="Dubai urban infrastructure development"
              style={{ y: imgY }}
              className="w-full h-[115%] object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </motion.div>

          <div className="flex flex-col order-1 lg:order-2">
            <FadeUpText>
              <span className="font-display text-[9px] font-extrabold tracking-[0.35em] text-brand-gold uppercase mb-3 block">
                Who We Are
              </span>
            </FadeUpText>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-text-primary uppercase mb-6">
              <WordReveal text="Engineering" delay={0} />
              <br />
              <WordReveal text="With Purpose." delay={0.06} />
            </h2>

            <FadeUpText delay={0.12}>
              <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed mb-8 max-w-lg">
                3 Circles delivers precision civil engineering and industrial
                services. We provide fully integrated, large-scale capabilities
                designed to support major development projects across building
                construction, mining and crushing operations, public
                infrastructure, and heavy excavation.
              </p>
            </FadeUpText>

            <FadeUpText delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-3 py-2.5 border-b border-border-color"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    <span className="font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] text-text-primary uppercase">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUpText>
          </div>
        </div>
      </div>
    </section>
  );
}
