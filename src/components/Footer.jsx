import { motion, useScroll, useSpring } from 'framer-motion';
import { useLenis } from 'lenis/react';
import Logo from "../assets/logo/Logo.png";
import FooterCanvas from './FooterCanvas';
import { ArrowUp, MailIcon, MapPinIcon, PhoneIcon } from './Icons';
import Marquee from './Marquee';
import { useTransition } from './PageTransition';


const navLinks = [
  { label: 'HOME', path: '/', target: 'hero' },
  { label: 'ABOUT', path: '/about', target: null },
  { label: 'SERVICES', path: '/', target: 'services' },
  { label: 'PROJECTS', path: '/projects', target: null },
  { label: 'CONTACT', path: '/contact', target: null },
];

const sectorLinks = [
  { label: 'BUILDING', path: '/', target: 'services' },
  { label: 'MINING & CRUSHING', path: '/', target: 'services' },
  { label: 'INFRASTRUCTURE', path: '/', target: 'services' },
  { label: 'EXCAVATION', path: '/', target: 'services' },
];

function BackToTopButton() {
  const lenis = useLenis();
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className="group relative flex items-center gap-3 p-2 text-white/80 hover:text-brand-gold transition-colors cursor-pointer select-none"
      aria-label="Back to top"
    >
      <div className="relative w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/10 group-hover:border-brand-gold/50 transition-all duration-300">
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r="19"
            className="stroke-white/10"
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            cx="22"
            cy="22"
            r="19"
            className="stroke-brand-gold"
            strokeWidth="2"
            fill="none"
            style={{
              pathLength,
              strokeDasharray: '1 1',
            }}
          />
        </svg>
        <ArrowUp className="w-4 h-4 text-white group-hover:text-brand-gold transition-transform duration-300 group-hover:-translate-y-0.5" />
      </div>
      <span className="font-display text-[9px] font-extrabold tracking-[0.2em] uppercase">
        BACK TO TOP
      </span>
    </button>
  );
}

export default function Footer() {
  const { navigateTo } = useTransition();

  return (
    <footer className="relative bg-brand-darkblue text-white overflow-hidden ">
      <FooterCanvas />

      <div className="relative z-10 w-full max-w-[1580px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14 md:mb-16">
          <div className="flex flex-col gap-4">
            <button
              className="group flex items-center gap-1 font-display font-extrabold text-xl tracking-[0.2em] text-white cursor-pointer self-start transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => navigateTo('/', 'hero')}
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.40] backdrop-blur-md border border-white/15 group-hover:border-brand-gold/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300">
                <img
                  src={Logo}
                  alt="3 Circles Logo"
                  className="h-9 md:h-16 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
                />
              </div>
            </button>
            <p className="font-display text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase">
              ENGINEERING • INFRASTRUCTURE • MINING
            </p>
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Fully integrated civil construction, infrastructure, and aggregate solutions engineered for precision at scale.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-display text-[9px] font-extrabold tracking-[0.25em] text-brand-gold uppercase mb-1">
              Navigation
            </span>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(({ label, path, target }) => (
                <button
                  key={label}
                  className="group flex items-center gap-2 font-display text-[11px] font-bold tracking-[0.16em] text-white/75 hover:text-brand-gold transition-colors duration-200 text-left w-max cursor-pointer"
                  onClick={() => navigateTo(path, target)}
                >
                  <span className="w-0 group-hover:w-2 h-[1px] bg-brand-gold transition-all duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-display text-[9px] font-extrabold tracking-[0.25em] text-brand-gold uppercase mb-1">
              Sectors
            </span>
            <div className="flex flex-col gap-2.5">
              {sectorLinks.map(({ label, path, target }) => (
                <button
                  key={label}
                  className="group flex items-center gap-2 font-display text-[11px] font-bold tracking-[0.16em] text-white/75 hover:text-brand-gold transition-colors duration-200 text-left w-max cursor-pointer"
                  onClick={() => navigateTo(path, target)}
                >
                  <span className="w-0 group-hover:w-2 h-[1px] bg-brand-gold transition-all duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-display text-[9px] font-extrabold tracking-[0.25em] text-brand-gold uppercase mb-1">
              Headquarters
            </span>
            <div className="flex flex-col gap-3 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                <span>xxxxxxxxxxxxx</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneIcon className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>+971 4 333 3333</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MailIcon className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>info@3circles.ae</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
          <span className="font-display text-[9px] font-medium tracking-[0.15em] text-white/50 uppercase">
            &copy; {new Date().getFullYear()} 3 CIRCLES OPC P LTD. ALL RIGHTS RESERVED.
          </span>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
