import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WordReveal } from "../pages/AboutUs/AnimatedText";

export default function Intro() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={containerRef}
      id="intro"
      className="relative py-12 md:py-20 bg-bg-primary border-y border-border-color overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <div className="flex flex-col">
            <motion.div
              className="w-8 h-[2px] bg-brand-gold mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-[1.08] tracking-tight text-text-primary uppercase mb-4">
              <WordReveal text="Built for complex projects." delay={0} />
              <br className="hidden sm:block" />
              <WordReveal text="Engineered for results." delay={0.08} />
            </h2>
            <motion.p
              className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span>3 Circles delivers integrated civil and infrastructure
              capabilities across building construction, mining and crushing,
              infrastructure development and excavation.</span>
            </motion.p>
          </div>

          <div className="flex flex-col">
            <motion.div
              className="relative w-full aspect-[16/10] overflow-hidden rounded-sm border border-brand-darkblue/[0.06] shadow-lg group"
              initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, amount: "some" }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="absolute inset-0 border border-brand-gold/20 m-3 pointer-events-none z-10 transition-all duration-500 group-hover:m-2 group-hover:border-brand-gold/45" />
              <motion.img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                alt="Heavy structural steel concrete framework"
                style={{ y: imgY }}
                className="w-full h-[115%] object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
