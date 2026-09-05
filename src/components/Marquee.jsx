import React from 'react';
import { motion } from 'framer-motion';



const marqueeItems = [
  <img src="/images/ourClients/Cidco.png" alt="Cidco" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />,
  <img src="/images/ourClients/Hyundai.png" alt="Hyundai" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />,
  <img src="/images/ourClients/LarsenAndToubro.png" alt="L&T" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />,
  <img src="/images/ourClients/MIDC.png" alt="MIDC" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />,
  <img src="/images/ourClients/MaharashtraStateRoad.png" alt="MSRDC" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />,
  <img src="/images/ourClients/MazagaonDock.png" alt="Mazagaon Dock" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />,
  <img src="/images/ourClients/NationalHighway.png" alt="National Highway" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />,
  <img src="/images/ourClients/PradhanMantriGramSadakYojna.png" alt="PMGSY" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />,
  <img src="/images/ourClients/Pwd.png" alt="PWD" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />,
  <img src="/images/ourClients/Supreme.png" alt="Supreme" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />,
  <img src="/images/ourClients/TataProjects.png" alt="Tata Projects" className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />,
];

export default function Marquee({ speed = 30, className = '' }) {
  const duplicated = [...marqueeItems, ...marqueeItems];

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
            className={`flex items-center px-10 shrink-0 ${typeof item === 'string' ? 'font-display text-[16px] font-extrabold tracking-[0.3em] uppercase' : ''}`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
