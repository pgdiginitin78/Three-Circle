import React from 'react';
import { motion } from 'framer-motion';
import { WordReveal, FadeUpText } from '../components/AnimatedText';

const capabilities = [
  'BUILDING INDUSTRY',
  'MINING & CRUSHING',
  'INFRASTRUCTURE',
  'EXCAVATION',
];

export default function About() {
  return (
    <section id="about" className="relative py-14 md:py-16 bg-bg-secondary border-b border-border-color overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            className="relative w-full aspect-[4/5] overflow-hidden rounded-sm border border-black/[0.05] shadow-2xl group order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 border border-accent-gold/15 m-3.5 pointer-events-none z-10 transition-all duration-500 group-hover:m-2 group-hover:border-accent-gold/35" />
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80"
              alt="Dubai urban infrastructure development"
              className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </motion.div>

          <div className="flex flex-col order-1 lg:order-2">
            <FadeUpText>
              <span className="font-display text-[9px] font-extrabold tracking-[0.35em] text-accent-gold uppercase mb-5 block">
                Who We Are
              </span>
            </FadeUpText>

            <h2 className="font-display text-4xl md:text-5xl xl:text-[56px] font-extrabold leading-[1.05] tracking-tight text-text-primary uppercase mb-8">
              <WordReveal text="Engineering" delay={0} />
              <br />
              <WordReveal text="With Purpose." delay={0.05} />
            </h2>

            <FadeUpText delay={0.15}>
              <p className="text-base text-text-secondary leading-relaxed mb-10 max-w-[480px]">
                3 Circles delivers precision civil engineering and industrial services. We provide fully integrated, large-scale capabilities designed to support major development projects across building construction, mining and crushing operations, public infrastructure, and heavy excavation.
              </p>
            </FadeUpText>

            <FadeUpText delay={0.25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap, i) => (
                  <div key={cap} className="flex items-center gap-3 py-3 border-b border-border-color last:border-b-0 sm:last:border-b-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                    <span className="font-display text-[10px] font-extrabold tracking-[0.2em] text-text-primary uppercase">
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
