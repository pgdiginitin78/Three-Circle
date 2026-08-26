import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee({ items, speed = 30, className = '' }) {
  const duplicated = [...items, ...items];

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 font-display text-[10px] font-extrabold tracking-[0.3em] uppercase shrink-0"
          >
            {item}
            <span className="text-accent-gold opacity-60">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
