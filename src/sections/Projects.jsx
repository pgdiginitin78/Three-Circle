import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTransition } from '../components/PageTransition';
import MagneticButton from '../components/MagneticButton';
import { FadeUpText } from '../components/AnimatedText';
import { ArrowRight } from '../components/Icons';

const projectsData = [
  {
    num: '01',
    category: 'INFRASTRUCTURE',
    title: 'GCC Regional Highway Networks',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '02',
    category: 'BUILDING CONSTRUCTION',
    title: 'Highrise Structural RCC Works',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '03',
    category: 'MINING & CRUSHING',
    title: 'Industrial Aggregates Crushing Plant',
    image: 'https://images.unsplash.com/photo-1508459855340-fb63ac591728?auto=format&fit=crop&w=1000&q=80',
  },
  {
    num: '04',
    category: 'EARTHWORKS',
    title: 'Dubai Commercial Site Excavation',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function Projects() {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { navigateTo } = useTransition();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <div
      ref={targetRef}
      id="projects"
      className={`relative bg-bg-secondary border-b border-border-color ${isMobile ? '' : 'h-[280vh]'}`}
    >
      <div className={`${isMobile ? 'relative py-16 px-6 md:px-12' : 'sticky top-0 h-screen overflow-hidden flex flex-col justify-center px-6 md:px-12 lg:px-16'}`}>
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 md:mb-10">
            <div>
              <FadeUpText>
                <span className="font-display text-[9px] font-extrabold tracking-[0.35em] text-accent-gold uppercase block mb-2.5">
                  Featured Works
                </span>
              </FadeUpText>
              <FadeUpText delay={0.1}>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary uppercase">
                  Architectural Scale
                </h2>
              </FadeUpText>
            </div>
            <MagneticButton
              className="group font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] py-3 px-6 border border-text-primary rounded-full hover:bg-text-primary hover:text-white transition-all duration-300 self-start sm:self-auto shrink-0 flex items-center gap-2"
              onClick={() => navigateTo('/projects')}
            >
              <span>VIEW ALL WORKS</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
          </div>

          {isMobile ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {projectsData.map((project) => (
                <div key={project.num} className="flex flex-col gap-3 group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-black/[0.06] bg-bg-tertiary">
                    <div className="absolute inset-0 border border-accent-gold/20 m-3 z-10 pointer-events-none transition-all duration-500 group-hover:m-2 group-hover:border-accent-gold/45" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold text-accent-gold block mb-0.5">{project.num} — {project.category}</span>
                    <h3 className="font-display text-sm sm:text-base font-bold text-text-primary uppercase tracking-tight">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-visible">
              <motion.div
                className="flex gap-5"
                style={{ x }}
              >
                {projectsData.map((project) => (
                  <div
                    key={project.num}
                    className="flex flex-col gap-3 group shrink-0 w-[340px] lg:w-[400px]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-black/[0.06] bg-bg-tertiary">
                      <div className="absolute inset-0 border border-accent-gold/20 m-3 z-10 pointer-events-none transition-all duration-500 group-hover:m-2 group-hover:border-accent-gold/45" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] font-bold text-accent-gold block mb-0.5">{project.num} — {project.category}</span>
                      <h3 className="font-display text-base font-bold text-text-primary uppercase tracking-tight">{project.title}</h3>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
