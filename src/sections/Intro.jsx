import React from 'react';
import { motion } from 'framer-motion';
import { WordReveal } from '../components/AnimatedText';

export default function Intro() {
  return (
    <section id="intro" className="relative py-8 md:py-16 bg-bg-primary border-y border-border-color overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-14 items-center">

          <div className="flex flex-col">
            <h2 className="font-display text-4xl md:text-5xl xl:text-[44px] font-extrabold leading-[1.08] tracking-tight text-text-primary uppercase mb-0">
              <WordReveal text="Built for complex projects." delay={0} />
              <br className="hidden md:block" />
              <WordReveal text="Engineered for results." delay={0.1} />
            </h2>
            <motion.p
              className="text-base md:text-lg text-text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              3 Circles delivers integrated civil and infrastructure capabilities across building construction, mining and crushing, infrastructure development and excavation.
            </motion.p>
          </div>

          <div className="flex flex-col gap-8">

            <motion.div
              className="relative w-full aspect-[16/9] overflow-hidden rounded-sm border border-black/[0.05] shadow-xl group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 border border-accent-gold/15 m-3 pointer-events-none z-10 transition-all duration-500 group-hover:m-2 group-hover:border-accent-gold/35" />
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                alt="Heavy structural steel concrete framework"
                className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
