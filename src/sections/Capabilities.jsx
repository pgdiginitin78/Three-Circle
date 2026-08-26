import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import Marquee from '../components/Marquee';
import { FadeUpText } from '../components/AnimatedText';

const statsData = [
  { value: 120, suffix: '+', label: 'PROJECTS COMPLETED', desc: 'Across GCC and MENA' },
  { value: 15, suffix: '+', label: 'YEARS EXPERIENCE', desc: 'In civil & industrial works' },
  { value: 450, suffix: '+', label: 'TEAM MEMBERS', desc: 'Skilled professionals' },
  { value: 25, suffix: '+', label: 'PROJECT LOCATIONS', desc: 'UAE and regional sites' },
];

const marqueeItems = [
  'Building Industry',
  'Mining & Crushing',
  'Infrastructure',
  'Excavation',
  'Bridge Construction',
  'RCC Works',
  'MEP Works',
  'Earthworks',
];

function CountingNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;
    const duration = 1600;
    const steps = Math.min(end, 60);
    const stepTime = Math.floor(duration / steps);
    const increment = Math.ceil(end / steps);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl font-extrabold leading-none text-text-primary">
      {count}<span className="text-accent-gold">{suffix}</span>
    </span>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-bg-primary border-b border-border-color overflow-hidden">
 

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-5 md:py-10">
        <FadeUpText>
          <div className="mb-14 md:mb-20">
            <span className="font-display text-[9px] font-extrabold tracking-[0.35em] text-accent-gold uppercase block mb-3">
              By The Numbers
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary uppercase">
              Our Capabilities
            </h2>
          </div>
        </FadeUpText>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard className="flex flex-col items-start w-full bg-white border border-black/[0.06] rounded-sm p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-black/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
                <CountingNumber value={stat.value} suffix={stat.suffix} />
                <span className="font-display text-[9px] font-extrabold tracking-[0.2em] text-text-primary uppercase mt-3 mb-1">
                  {stat.label}
                </span>
                <span className="font-body text-xs text-text-secondary">
                  {stat.desc}
                </span>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
