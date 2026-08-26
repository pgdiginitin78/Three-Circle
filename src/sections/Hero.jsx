import React from 'react';
import { motion } from 'framer-motion';
import { useTransition } from '../components/PageTransition';
import MagneticButton from '../components/MagneticButton';
import heroBg from '../assets/HeroImage.avif';

const titleLines = ['Building What', 'Moves The', 'Future'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const lineVariants = {
  hidden: { y: '110%' },
  visible: { y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const { navigateTo } = useTransition();

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <img
          src={heroBg}
          alt="Dubai Skyline Architecture"
          className="w-full h-full object-cover object-[90%_center] lg:object-right scale-100"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent w-full md:w-[80%] lg:w-[65%]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <motion.div
          className="flex flex-col items-start max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="font-display text-[10px] sm:text-xs font-extrabold tracking-[0.35em] text-accent-gold uppercase mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            variants={itemVariants}
          >
            3 Circles • Engineering • Infrastructure • Mining
          </motion.span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-[86px] font-extrabold leading-[0.94] tracking-tight text-white uppercase mb-7 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            {titleLines.map((line, index) => (
              <span key={index} className="block overflow-hidden">
                <motion.span
                  className={`inline-block ${index === 2 ? 'shimmer-text' : 'text-white'}`}
                  variants={lineVariants}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="text-base sm:text-lg text-zinc-100 max-w-[540px] leading-relaxed mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            variants={itemVariants}
          >
            Integrated civil construction, infrastructure, mining, crushing and excavation solutions engineered for scale.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            variants={itemVariants}
          >
            <MagneticButton
              className="font-display text-[10px] font-extrabold tracking-[0.2em] py-4 px-8 bg-accent-gold text-[#111111] border border-accent-gold rounded-full hover:bg-white hover:border-white hover:text-[#111111] transition-all duration-300 text-center shadow-xl cursor-pointer"
              onClick={() => navigateTo('/', 'services')}
            >
              EXPLORE OUR SERVICES
            </MagneticButton>
            <MagneticButton
              className="font-display text-[10px] font-extrabold tracking-[0.2em] py-4 px-8 bg-white/95 backdrop-blur-md text-[#111111] border border-white rounded-full hover:bg-accent-gold hover:border-accent-gold hover:text-[#111111] transition-all duration-300 text-center shadow-xl cursor-pointer"
              onClick={() => navigateTo('/', 'projects')}
            >
              VIEW OUR PROJECTS
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
