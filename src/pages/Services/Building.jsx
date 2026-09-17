import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import buildingImg from '../../assets/services/building.jpg';
import heroback from '../../assets/services/heroback.png';
import rccworkImg from '../../assets/services/rccwork.png';
import mepworkImg from '../../assets/services/mepwork.png';
import claddingImg from '../../assets/services/cladding.png';
import cooperSchoolImg from '../../assets/services/Cooper School.png';
import anantUnivImg from '../../assets/services/Anantuniversity.png';
import airportImg from '../../assets/services/mumbai airport.png';
import ctaback from '../../assets/services/ctaback.png';

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 35, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } },
};
const lineVariants = {
  hidden: { opacity: 0, y: '100%', filter: 'blur(10px)' },
  visible: { opacity: 1, y: '0%', filter: 'blur(0px)', transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
};

const capabilities = [
  'RCC Works', 'MEP Works', 'Facade Works', 'Road & Highway',
  'Bridge Construction', 'High-Rise Buildings', 'Crushing Operations', 'Excavation & Earthworks',
];
const headlineLines = ['Comprehensive Civil Construction &', 'Infrastructure Services'];

const services = [
  {
     title: 'RCC Works', img: rccworkImg,
    body: 'Our RCC construction services cover reinforced cement concrete works required for strong and durable building structures. RCC works form a critical part of building construction, and our site teams undertake associated structural activities in accordance with project drawings, specifications and execution requirements.',
    detail: 'Our RCC works include structural concrete construction, reinforcement-related works, formwork and associated civil construction activities.',
    tags: ['RCC Works', 'RCC Construction', 'Reinforced Concrete Works', 'Structural Civil Works','Concrete Construction'],
    objectPos: 'object-center',
  },
  {
   title: 'MEP Works', img: mepworkImg,
    body: 'We undertake MEP works as part of integrated building construction projects. Our MEP capabilities support the coordination and execution of mechanical, electrical and plumbing works alongside civil and architectural construction.',
    detail: 'Effective MEP execution requires close coordination between building services and structural works. Our project teams integrate MEP requirements into the overall construction programme to support efficient site execution.',
    tags: ['MEP Works', 'MEP Services','MEP Construction', 'Mechanical Works', 'Electrical Works', 'Plumbing Works'],
    objectPos: 'object-center',
  },
  {
     title: 'Cladding & Facade Works', img: claddingImg,
    body: 'Our cladding and façade works support the architectural, functional and finishing requirements of modern buildings. We undertake façade-related construction and associated finishing works as part of larger building construction projects.',
    detail: 'Our approach focuses on coordinated site execution, integration with structural works and achieving the required architectural finish.',
    tags: ['Cladding Works', 'Facade Works', 'Facade Construction','Building Facade', 'Architectural Finishing'],
    objectPos: 'object-center',
  },
];

const faqs = [
  { q: 'What building construction services does 3 CIIRCLES provide?', a: '3 CIIRCLES provides RCC works, MEP works, cladding and façade works along with associated civil, architectural and interior execution.' },
  { q: 'Does 3 CIIRCLES undertake MEP works?', a: 'Yes. MEP works are part of the company\'s building construction capabilities.' },
  { q: 'Where does 3 CIIRCLES provide building construction services?', a: 'The company\'s project portfolio includes projects across Mumbai, Maharashtra and other locations in India.' },
  
];

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="border-b border-white/12 last:border-b-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-5 text-left group">
        <div className="flex items-start gap-4">
          <span className="font-display text-[9px] font-extrabold tracking-[0.28em] text-brand-gold uppercase shrink-0 mt-0.5">{String(index + 1).padStart(2, '0')}</span>
          <span className="font-display text-sm md:text-base font-bold text-white uppercase tracking-tight leading-snug group-hover:text-brand-gold transition-colors duration-200">{q}</span>
        </div>
        <span className="shrink-0 w-6 h-6 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/90 group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-200 mt-0.5 text-sm leading-none">{open ? '-' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="ans" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
            <p className="font-body text-sm text-white/75 leading-relaxed pb-5 pl-9">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Building() {
  const introSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const projectSectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // INTRO BLOCK GSAP TIMELINE (SLOW CINEMATIC ENTRANCE)
      const introEl = introSectionRef.current;
      if (introEl) {
        const heading = introEl.querySelector('.gsap-intro-heading');
        const paragraphs = introEl.querySelectorAll('.gsap-intro-p');
        const imgFrame = introEl.querySelector('.gsap-intro-img-frame');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: introEl,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        if (heading) {
          tl.fromTo(
            heading,
            { opacity: 0, y: 55, filter: 'blur(16px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.6, ease: 'power2.out' },
            0.1
          );
        }

        if (paragraphs && paragraphs.length > 0) {
          tl.fromTo(
            paragraphs,
            { opacity: 0, y: 40, filter: 'blur(12px)' },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 2.4,
              stagger: 0.4,
              ease: 'power2.out',
            },
            0.35
          );
        }

        if (imgFrame) {
          tl.fromTo(
            imgFrame,
            { opacity: 0, scale: 0.86, y: 70, rotate: -2, filter: 'blur(22px)' },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: 0,
              filter: 'blur(0px)',
              duration: 3.2,
              ease: 'power2.out',
            },
            0.2
          );
        }
      }

      // SERVICE CARDS SECTION GSAP TIMELINE
      const servicesEl = servicesSectionRef.current;
      if (servicesEl) {
        const title = servicesEl.querySelector('.gsap-svc-title');
        const cards = servicesEl.querySelectorAll('.gsap-svc-card');

        const stl = gsap.timeline({
          scrollTrigger: {
            trigger: servicesEl,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        if (title) {
          stl.fromTo(
            title,
            { opacity: 0, y: 40, filter: 'blur(10px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.6, ease: 'power3.out' },
            0
          );
        }

        if (cards && cards.length > 0) {
          stl.fromTo(
            cards,
            { opacity: 0, y: 50, scale: 0.93, filter: 'blur(10px)' },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 1.6,
              stagger: 0.22,
              ease: 'power3.out',
            },
            0.25
          );
        }
      }

      // PROJECT EXPERIENCE SECTION GSAP TIMELINE
      const projectEl = projectSectionRef.current;
      if (projectEl) {
        const tag = projectEl.querySelector('.gsap-proj-tag');
        const heading = projectEl.querySelector('.gsap-proj-heading');
        const textElements = projectEl.querySelectorAll('.gsap-proj-text');
        const cards = projectEl.querySelectorAll('.gsap-proj-card');

        const ptl = gsap.timeline({
          scrollTrigger: {
            trigger: projectEl,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        if (tag) {
          ptl.fromTo(
            tag,
            { opacity: 0, y: 20, filter: 'blur(6px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.4, ease: 'power3.out' },
            0
          );
        }

        if (heading) {
          ptl.fromTo(
            heading,
            { opacity: 0, y: 40, filter: 'blur(10px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.8, ease: 'power3.out' },
            0.15
          );
        }

        if (textElements && textElements.length > 0) {
          ptl.fromTo(
            textElements,
            { opacity: 0, y: 30, filter: 'blur(8px)' },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 1.6,
              stagger: 0.2,
              ease: 'power3.out',
            },
            0.3
          );
        }

        if (cards && cards.length > 0) {
          ptl.fromTo(
            cards,
            { opacity: 0, y: 55, scale: 0.92, filter: 'blur(12px)' },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 1.8,
              stagger: 0.24,
              ease: 'power3.out',
            },
            0.35
          );
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative min-h-[82vh] sm:min-h-[85vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={heroback}
            alt="Building Construction"
            initial={{ scale: 1.18, x: "0%", y: "-3.5%", rotate: 0, filter: "brightness(0.62) contrast(1.05)" }}
            animate={{
              x: ["0%", "3.5%", "0%", "-3.5%", "0%"],
              y: ["-3.5%", "0%", "3.5%", "0%", "-3.5%"],
              scale: [1.18, 1.24, 1.28, 1.24, 1.18],
              rotate: [0, 1.2, 0, -1.2, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-[130%] -top-[15%] relative object-cover object-center pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(100deg, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.72) 42%, rgba(15,23,42,0.30) 68%, rgba(15,23,42,0.08) 100%)' }} />
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(15,23,42,0.35) 0%, transparent 30%, transparent 70%, rgba(15,23,42,0.55) 100%)' }} />
        <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-52 pb-28 sm:pt-56 sm:pb-32">
          <motion.div className="flex flex-col items-start max-w-3xl" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span style={{ display: 'inline-block', width: '32px', height: '2px', background: '#D4AF37' }} />
              <span className="font-display font-extrabold uppercase text-brand-gold" style={{ fontSize: '10px', letterSpacing: '0.38em' }}>Services</span>
            </motion.div>
            <h1 className="font-display font-extrabold uppercase leading-tight md:leading-[1.12] tracking-tight text-white mb-8" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)' }}>
              {headlineLines.map((line, i) => (
                <span key={i} className={`block overflow-hidden ${i < headlineLines.length - 1 ? 'mb-1.5 sm:mb-2' : ''}`}>
                  <motion.span className={`inline-block ${i === headlineLines.length - 1 ? 'shimmer-text' : 'text-white'}`} variants={lineVariants}>{line}</motion.span>
                </span>
              ))}
            </h1>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-4">
              {capabilities.map((cap) => (
                <span key={cap} className="font-display font-bold uppercase text-white/85 rounded-full px-4 py-1.5 hover:text-brand-gold transition-all duration-300 cursor-default" style={{ fontSize: '9px', letterSpacing: '0.18em', background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.28)' }}>{cap}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      
      </section>

     
     
     
      {/* INTRO BLOCK */}
      <section ref={introSectionRef} id="building-services" className="bg-white border-b border-brand-darkblue/[0.07] py-14 md:py-18 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT CONTENT COLUMN */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* HEADING */}
              <h2 className="gsap-intro-heading font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight mb-5">
                <span>Our Building</span>
                <span className="block mt-1 sm:mt-1.5">Construction Services</span>
              </h2>

              {/* PARAGRAPHS */}
              <div className="space-y-3.5 font-body text-[13.5px] md:text-[14.5px] text-brand-darkblue/80 leading-relaxed mb-7">
                <p className="gsap-intro-p">
                  <strong className="font-bold text-brand-darkblue">3 CIIRCLES</strong> provides reliable{' '}
                  <strong className="font-bold text-brand-darkblue">building construction services</strong> for institutional, commercial, industrial and large-scale development projects. Our building construction capabilities cover{' '}
                  <strong className="font-bold text-brand-darkblue">RCC works, MEP works, cladding and façade works</strong>, along with associated civil and architectural execution.
                </p>
                <p className="gsap-intro-p">
                  Our experience includes projects where the scope involved{' '}
                  <strong className="font-bold text-brand-darkblue">civil construction, interiors, MEP works, architectural works</strong> and{' '}
                  <strong className="font-bold text-brand-darkblue">façade works</strong>, enabling us to provide coordinated execution across different stages of building development.
                </p>
                <p className="gsap-intro-p">
                  From structural construction to building services and external finishes, our{' '}
                  <strong className="font-bold text-brand-darkblue">building construction solutions</strong> are planned around project requirements, site conditions, quality standards and execution schedules.
                </p>
              </div>


            </div>

            {/* RIGHT IMAGE WITH ANIME STYLING & SLOW GSAP ANIMATION */}
            <div className="lg:col-span-6 relative">
              {/* AMBIENT ANIME AURA GLOW BACKDROP */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold/25 via-amber-400/15 to-brand-darkblue/25 rounded-[2.5rem] sm:rounded-[3rem] blur-xl opacity-70 animate-pulse pointer-events-none" />

              {/* MAIN FRAME CONTAINER WITH AUTOMATIC SLOW FLOAT */}
              <motion.div 
                className="gsap-intro-img-frame relative rounded-[2.2rem] sm:rounded-[2.6rem] p-3 sm:p-3.5 bg-gradient-to-br from-[#FFFDF9] via-[#FBF8F1] to-[#F2E7D3] border border-amber-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              >
                {/* INNER IMAGE CONTAINER WITH ANIME VIBRANCY FILTER & SHIMMER */}
                <div className="relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] h-[310px] sm:h-[370px] md:h-[415px] lg:h-[430px]">
                  {/* MAIN IMAGE WITH VIBRANT ANIME EFFECT & SLOW PAN-ZOOM */}
                  <motion.img
                    src={buildingImg}
                    alt="Building Construction Services"
                    className="w-full h-full object-cover shadow-inner"
                    style={{ 
                      objectPosition: 'center 40%',
                      filter: 'contrast(1.09) saturate(1.22) brightness(1.03) drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
                    }}
                    animate={{
                      scale: [1, 1.09, 1.03, 1],
                      x: [0, -10, 6, 0],
                      y: [0, -7, -4, 0],
                      rotate: [0, 0.8, -0.6, 0],
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut"
                    }}
                  />

                  {/* ANIME SHIMMER SWEEP OVERLAY */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                    animate={{ x: ['-140%', '220%'] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* GRADIENT SHADOW OVERLAYS FOR ANIME DEPTH */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/40 via-transparent to-amber-500/10 pointer-events-none" />

                  {/* FLOATING ANIME ACCENT BADGE */}
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 backdrop-blur-md bg-brand-darkblue/75 border border-brand-gold/40 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                    <span className="font-display text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white">
                      Building Construction Services
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section ref={servicesSectionRef} id="services" className="bg-[#FAF8F5] border-b border-brand-darkblue/[0.07] py-12 md:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-8 md:mb-10">
            <h2 className="gsap-svc-title font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight">
              Our Building Construction Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((svc, idx) => (
              <div key={svc.title} className="gsap-svc-card group flex flex-col bg-white border border-brand-darkblue/10 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-gold/50 transition-all duration-500 transform hover:-translate-y-1.5">
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img src={svc.img || buildingImg} alt={svc.title} className={`w-full h-full object-cover ${svc.objectPos} group-hover:scale-105 transition-all duration-700`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/75 via-brand-darkblue/25 to-transparent" />
                  <div className="absolute bottom-3.5 left-3.5 w-9 h-9 rounded-full bg-white/95 border border-brand-gold/40 flex items-center justify-center backdrop-blur-md shadow-sm group-hover:bg-brand-gold transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-brand-darkblue transition-colors duration-300">
                      {idx === 0 && <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 17h7M17 14v7"/></>}
                      {idx === 1 && <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></>}
                      {idx === 2 && <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></>}
                    </svg>
                  </div>
                  <span className="absolute top-3.5 right-3.5 font-display text-[9px] font-extrabold tracking-[0.25em] text-white bg-brand-darkblue/75 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/20">0{idx + 1}</span>
                </div>
                <div className="flex flex-col flex-1 p-5 sm:p-6 bg-white transition-all duration-500">
                  <h3 className="font-display text-base sm:text-lg font-extrabold uppercase tracking-tight text-brand-darkblue mb-3 group-hover:text-brand-gold transition-colors duration-300">{svc.title}</h3>
                  <p className="font-body text-[11.5px] sm:text-[12px] text-brand-darkblue/75 leading-relaxed mb-3 flex-1">{svc.body}</p>
                  <p className="font-body text-[11px] sm:text-[11.5px] text-brand-darkblue/55 leading-relaxed mb-4">{svc.detail}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="font-display text-[7.5px] font-bold uppercase tracking-[0.12em] text-brand-darkblue/65 bg-brand-darkblue/[0.04] border border-brand-darkblue/10 rounded-full px-2.5 py-0.5 group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10 group-hover:text-brand-darkblue transition-all duration-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* PROJECT EXPERIENCE */}
      <section ref={projectSectionRef} className="relative bg-gradient-to-b from-[#F4F7FC]/80 via-white to-[#F4F7FC]/60 border-b border-brand-darkblue/[0.07] py-14 md:py-20 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          
          {/* HEADER AREA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            <div className="lg:col-span-5">
              <div>
                <div className="gsap-proj-tag flex items-center gap-3 mb-3">
                  <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#D4AF37' }} />
                  <span className="font-display font-extrabold uppercase text-brand-gold" style={{ fontSize: '9.5px', letterSpacing: '0.35em' }}>Project Experience</span>
                </div>
                <h2 className="gsap-proj-heading font-display text-xl sm:text-2xl md:text-[30px] lg:text-[34px] font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight">
                  <span>Building a Better</span>
                  <span className="block mt-1 sm:mt-1.5">Tomorrow</span>
                </h2>
              </div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              <p className="gsap-proj-text font-body text-xs sm:text-sm text-brand-darkblue/75 leading-relaxed">
                Our project experience includes <strong className="font-bold text-brand-darkblue">Maneckji Cooper School</strong> in Juhu, Mumbai, <strong className="font-bold text-brand-darkblue">Anant National University</strong> in Ahmedabad and projects for <strong className="font-bold text-brand-darkblue">Mumbai International Airport Limited</strong>, with documented scopes covering civil, interior, architectural, MEP and façade works.
              </p>
              <p className="gsap-proj-text font-body text-xs sm:text-sm text-brand-darkblue/70 leading-relaxed">
                Whether it is institutional construction, commercial construction, industrial construction or large-scale building development, 3 CIIRCLES brings multidisciplinary civil construction capabilities to the project.
              </p>
            </div>
          </div>

          {/* 3 PROJECT BOX CARDS GRID AT THE BOTTOM */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { num: '01', label: 'Maneckji Cooper School', sub: 'Juhu, Mumbai', img: cooperSchoolImg },
              { num: '02', label: 'Anant National University', sub: 'Ahmedabad', img: anantUnivImg },
              { num: '03', label: 'Mumbai International Airport Limited', sub: 'Mumbai', img: airportImg },
            ].map((proj) => (
              <div
                key={proj.label}
                className="gsap-proj-card group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-64 sm:h-72 flex flex-col justify-end p-6 border border-black/5 cursor-pointer transform hover:-translate-y-1.5"
              >
                {/* Background Image */}
                <img src={proj.img} alt={proj.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                {/* Bottom Content */}
                <div className="relative z-10 flex flex-col items-start">
                  <h3 className="font-display text-base sm:text-lg font-extrabold uppercase tracking-tight text-white leading-snug mb-1.5 drop-shadow-sm group-hover:text-brand-gold transition-colors duration-300" style={{ color: '#FFFFFF' }}>
                    {proj.label}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    <span className="font-body text-xs text-white/90 font-semibold drop-shadow-sm">{proj.sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-darkblue relative overflow-hidden border-b border-white/10 py-16 md:py-20">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 'some' }} variants={fadeUp} className="lg:w-[440px] shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#D4AF37' }} />
                <span className="font-display font-extrabold uppercase text-brand-gold" style={{ fontSize: '9px', letterSpacing: '0.35em' }}>Frequently Asked Questions</span>
              </div>
              <h2 className="font-display text-lg sm:text-xl md:text-2xl lg:text-[25px] xl:text-[27px] font-extrabold uppercase tracking-tight text-white leading-tight whitespace-nowrap" style={{ color: '#FFFFFF' }}>
                Building Construction FAQs
              </h2>
            </motion.div>
            <motion.div className="flex-1" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 'some' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
              {faqs.map((faq, i) => (<FaqItem key={i} q={faq.q} a={faq.a} index={i} />))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative w-full flex items-center overflow-hidden bg-[#FAF8F5] border-t border-brand-darkblue/10 py-14 md:py-18">
        {/* BACKGROUND IMAGE WITH OVERLAY */}
        <div className="absolute inset-0 z-0">
          <img
            src={ctaback}
            alt="Construction background"
            className="w-full h-full object-cover object-center scale-105"
            style={{ filter: 'brightness(0.92) contrast(1.05)' }}
          />
          {/* Light gradient from left to right */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(95deg, #FFFFFF 0%, rgba(255,255,255,0.96) 38%, rgba(255,255,255,0.65) 60%, rgba(255,255,255,0.15) 85%, transparent 100%)',
            }}
          />
        </div>

        {/* CONTAINER CONTENT */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="max-w-2xl flex flex-col items-start"
            >
              {/* TAGLINE */}
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2.5">
                <span className="w-7 h-[2px] bg-[#D4AF37] inline-block" />
                <span className="font-display font-extrabold uppercase text-[#D4AF37] text-[9.5px] tracking-[0.38em]">
                  LET'S BUILD TOGETHER
                </span>
              </motion.div>

              {/* HEADING */}
              <motion.h2 variants={fadeUp} className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-brand-darkblue leading-tight mb-6 md:mb-7">
                Discuss Your Project Requirements
              </motion.h2>

              {/* BUTTON */}
              <motion.div variants={fadeUp} className="mt-1">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#E5A824] hover:bg-[#d69917] text-brand-darkblue font-display text-xs font-extrabold uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>CONTACT US</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
