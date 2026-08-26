import React from 'react';
import { motion } from 'framer-motion';
import { useTransition } from './PageTransition';
import Marquee from './Marquee';

const marqueeItems = [
  'Engineering Excellence',
  'Infrastructure',
  'Mining & Crushing',
  'Built For Scale',
  'Civil Works',
  'Excavation',
  'RCC Works',
  'Dubai, UAE',
];

const navLinks = [
  { label: 'HOME', target: 'hero' },
  { label: 'ABOUT', target: 'about' },
  { label: 'SERVICES', target: 'services' },
  { label: 'PROJECTS', target: 'projects' },
  { label: 'CONTACT', target: 'contact' },
];

const sectorLinks = [
  { label: 'BUILDING', target: 'services' },
  { label: 'MINING & CRUSHING', target: 'services' },
  { label: 'INFRASTRUCTURE', target: 'services' },
  { label: 'EXCAVATION', target: 'services' },
];

export default function Footer() {
  const { navigateTo } = useTransition();
  const handleNavClick = (target) => navigateTo('/', target);

  return (
    <footer className="bg-bg-dark text-white overflow-hidden">
      <div className="py-5 border-b border-white/15 bg-black/40">
        <Marquee
          items={marqueeItems}
          speed={22}
          className="text-white/70"
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-16 mb-16 md:mb-20">

          <div className="flex flex-col gap-5">
            <button
              className="font-display font-extrabold text-2xl tracking-[0.2em] text-white cursor-pointer self-start"
              onClick={() => handleNavClick('hero')}
            >
              3<span className="text-accent-gold">CIRCLES</span>
            </button>
            <p className="font-display text-[10px] font-bold tracking-[0.2em] text-accent-gold uppercase">
              ENGINEERING • INFRASTRUCTURE • MINING
            </p>
            <p className="text-sm text-white/75 max-w-sm leading-relaxed">
              Fully integrated civil construction, infrastructure, and mining solutions engineered for large-scale development.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-display text-[10px] font-extrabold tracking-[0.25em] text-accent-gold uppercase mb-1">
              Navigation
            </span>
            <div className="flex flex-col gap-3">
              {navLinks.map(({ label, target }) => (
                <button
                  key={label}
                  className="font-display text-xs font-bold tracking-[0.18em] text-white/80 hover:text-accent-gold transition-colors duration-300 text-left w-max"
                  onClick={() => handleNavClick(target)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-display text-[10px] font-extrabold tracking-[0.25em] text-accent-gold uppercase mb-1">
              Sectors
            </span>
            <div className="flex flex-col gap-3">
              {sectorLinks.map(({ label, target }) => (
                <button
                  key={label}
                  className="font-display text-xs font-bold tracking-[0.18em] text-white/80 hover:text-accent-gold transition-colors duration-300 text-left w-max"
                  onClick={() => handleNavClick(target)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

     
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
          <span className="font-display text-[10px] font-medium tracking-[0.15em] text-white/60 uppercase">
            &copy; {new Date().getFullYear()} 3 CIRCLES. All rights reserved.
          </span>
 
        </div>
      </div>
    </footer>
  );
}
