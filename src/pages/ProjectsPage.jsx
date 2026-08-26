import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlueprintGrid from '../components/BlueprintGrid';
import TiltCard from '../components/TiltCard';
import { FadeUpText } from '../components/AnimatedText';

const allProjects = [
  { id: 1, category: 'INFRASTRUCTURE', title: 'GCC Regional Highway Networks', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80' },
  { id: 2, category: 'BUILDING', title: 'Highrise Structural RCC Works', image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80' },
  { id: 3, category: 'MINING', title: 'Industrial Aggregates Crushing Plant', image: 'https://images.unsplash.com/photo-1508459855340-fb63ac591728?auto=format&fit=crop&w=800&q=80' },
  { id: 4, category: 'EXCAVATION', title: 'Dubai Commercial Site Excavation', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' },
  { id: 5, category: 'INFRASTRUCTURE', title: 'Urban Metro Expansion Foundations', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
  { id: 6, category: 'BUILDING', title: 'Commercial Cladding & Facade Installation', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
];

const categories = ['ALL', 'BUILDING', 'MINING', 'INFRASTRUCTURE', 'EXCAVATION'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('ALL');

  const filtered = filter === 'ALL'
    ? allProjects
    : allProjects.filter((p) => p.category === filter);

  return (
    <section className="relative min-h-screen bg-bg-primary pt-32 md:pt-40 pb-24 overflow-hidden">
      <BlueprintGrid />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <FadeUpText>
              <span className="font-display text-[9px] font-extrabold tracking-[0.35em] text-accent-gold uppercase block mb-3">
                Portfolio
              </span>
            </FadeUpText>
            <FadeUpText delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-text-primary uppercase">
                Core Execution
              </h1>
            </FadeUpText>
          </div>

          <FadeUpText delay={0.2}>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-display text-[9px] font-extrabold tracking-widest py-2.5 px-5 rounded-full border transition-all duration-300 ${
                    filter === cat
                      ? 'border-text-primary bg-text-primary text-white'
                      : 'border-black/[0.08] bg-white text-text-secondary hover:border-black/20 hover:text-text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUpText>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard className="flex flex-col gap-4 group" dataCursor="view">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-black/[0.05] bg-bg-tertiary">
                    <div className="absolute inset-0 border border-accent-gold/15 m-3 z-10 pointer-events-none transition-all duration-500 group-hover:m-2 group-hover:border-accent-gold/35" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 px-0.5">
                    <span className="font-mono text-[10px] font-bold text-accent-gold">{project.category}</span>
                    <h3 className="font-display text-base md:text-lg font-bold text-text-primary uppercase tracking-tight">{project.title}</h3>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
