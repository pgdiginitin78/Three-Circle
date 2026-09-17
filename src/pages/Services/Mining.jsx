import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import miningImg from '../../assets/services/mining.jpg';
import minningback from '../../assets/services/minningbg.png';
import excavationImg from '../../assets/services/excavation.jpg';
import infrastructureImg from '../../assets/services/infrastructure.jpg';
import ctaback from '../../assets/services/ctaback.png';
import MiningHeroCanvas from '../../components/MiningHeroCanvas';

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const lineVariants = {
  hidden: { y: '110%' },
  visible: { y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const headlineLines = ['Mining & Crushing', 'Services'];

const services = [
  {
 
    title: 'Extraction, Drilling & Blasting',
    img: excavationImg,
    body: 'Our extraction, drilling and blasting services support projects involving rock and material removal. These activities require appropriate equipment, site coordination and controlled execution based on project requirements.',
    detail: "The company's documented equipment includes a BAUER BG 15 hydraulic rig, wagon drills and concrete drilling equipment, supporting drilling and related construction activities.",
    tags: [
      'Extraction Services',
      'Drilling Services',
      'Blasting Services',
      'Rock Extraction',
      'Mining Services',
      'Drilling Operations',
    ],
    objectPos: 'object-center',
  },
  {
    
    title: 'Crushing Operations',
    img: miningImg,
    body: 'Our stone crushing and aggregate crushing services are designed for projects requiring efficient material processing. We undertake crushing operations to process supplied boulders into aggregate and crushed sand for construction and infrastructure applications.',
    detail: ['Our crushing capabilities include 2-stage and 3-stage crushing operations, VSI crushing and aggregate processing.',
      'The company has undertaken crushing work involving the processing of client-supplied boulders into aggregate and sand through a 3-stage VSI crusher.'
    ],
    tags: [
      'Stone Crushing',
      'Aggregate Crushing',
      'Crushing Plant',
      'VSI Crushing',
      'Crushing Operations',
      'Aggregate Production',
      'Crushed Sand',
    ],
    objectPos: 'object-center',
  },
  {
  
    title: 'Transportation & Material Handling',
    img: infrastructureImg,
    body: 'Efficient transportation and material handling are essential to mining, crushing and infrastructure operations. 3 CIIRCLES provides material movement capabilities for aggregates, construction materials and excavated material.',
    detail: 'Our equipment fleet includes dump trucks, water tankers, tractor trailers and other hauling equipment, supporting transportation and material handling requirements across project sites.',
    tags: [
      'Material Handling',
      'Aggregate Transportation',
      'Bulk Material Movement',
      'Construction Material Transportation',
      'Mining Logistics',
    ],
    objectPos: 'object-center',
  },
];

const faqs = [
  {
    q: 'What mining and crushing services does 3 CIIRCLES provide?',
    a: 'Our services include extraction, drilling, blasting, crushing operations, aggregate processing, transportation and material handling.',
  },
  {
    q: 'Does 3 CIIRCLES provide stone crushing services?',
    a: 'Yes. The company undertakes crushing operations for aggregate and sand production.',
  },
  {
    q: 'What crushing capacity is available?',
    a: 'The documented plant inventory includes 150 TPH, 300 TPH and 350 TPH crushing capabilities.',
  },
];

const projectHighlights = [
  {
    num: '01',
    label: 'National High Speed Rail Corporation Limited',
    sub: 'Material Processing & Crushing',
    tag: 'NHSRCL Project',
  },
  {
    num: '02',
    label: 'DFCC Corridor CTP-11',
    sub: 'Dedicated Freight Corridor',
    tag: 'Infrastructure Corridor',
  },
  {
    num: '03',
    label: 'Chennai Peripheral Ring Road',
    sub: 'Material Handling & Aggregate Supply',
    tag: 'Ring Road Project',
  },
];

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <div className="flex items-start gap-4">
          <span className="font-display text-[9px] font-extrabold tracking-[0.28em] text-brand-gold uppercase shrink-0 mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-display text-sm md:text-base font-bold text-white uppercase tracking-tight leading-snug group-hover:text-brand-gold transition-colors duration-200">
            {q}
          </span>
        </div>
        <span className="shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-200 mt-0.5 text-sm leading-none">
          {open ? '-' : '+'}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="ans"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-white/70 leading-relaxed pb-5 pl-9">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Mining() {
  const introSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const expSectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // INTRO BLOCK GSAP TIMELINE
      const introEl = introSectionRef.current;
      if (introEl) {
        const heading = introEl.querySelector('.gsap-mining-heading');
        const paragraphs = introEl.querySelectorAll('.gsap-mining-p');
        const imgFrame = introEl.querySelector('.gsap-mining-img-frame');

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

      // SERVICES SHOWCASE GSAP TIMELINE (SLOW CINEMATIC REVEAL)
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
            { opacity: 0, y: 50, filter: 'blur(16px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.2, ease: 'power2.out' },
            0
          );
        }

        if (cards && cards.length > 0) {
          stl.fromTo(
            cards,
            { opacity: 0, y: 65, scale: 0.92, filter: 'blur(18px)' },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 2.6,
              stagger: 0.32,
              ease: 'power2.out',
            },
            0.25
          );
        }
      }

      // PROJECT EXPERIENCE SECTION GSAP TIMELINE (SLOW CINEMATIC REVEAL)
      const expEl = expSectionRef.current;
      if (expEl) {
        const badge = expEl.querySelector('.gsap-exp-badge');
        const heading = expEl.querySelector('.gsap-exp-heading');
        const paragraphs = expEl.querySelectorAll('.gsap-exp-p');

        const etl = gsap.timeline({
          scrollTrigger: {
            trigger: expEl,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        if (badge) {
          etl.fromTo(
            badge,
            { opacity: 0, y: 35, filter: 'blur(12px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.2, ease: 'power2.out' },
            0.1
          );
        }

        if (heading) {
          etl.fromTo(
            heading,
            { opacity: 0, y: 50, filter: 'blur(16px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.6, ease: 'power2.out' },
            0.25
          );
        }

        if (paragraphs && paragraphs.length > 0) {
          etl.fromTo(
            paragraphs,
            { opacity: 0, y: 40, filter: 'blur(14px)' },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 2.4,
              stagger: 0.35,
              ease: 'power2.out',
            },
            0.4
          );
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] w-full flex items-center overflow-hidden">
        {/* CONTINUOUS MOVING BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={minningback}
            alt="Mining & Crushing Services Background"
            initial={{ scale: 1.18, x: "0%", y: "-3.5%", rotate: 0, filter: "brightness(0.64) contrast(1.05) saturate(0.9)" }}
            animate={{
              x: ["0%", "3.5%", "0%", "-3.5%", "0%"],
              y: ["-3.5%", "0%", "3.5%", "0%", "-3.5%"],
              scale: [1.18, 1.25, 1.28, 1.25, 1.18],
              rotate: [0, 1.2, 0, -1.2, 0],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-[130%] -top-[15%] relative object-cover object-center pointer-events-none"
          />
        </div>

        {/* THREE.JS 3D ANIMATION LAYER */}
        <MiningHeroCanvas />

        {/* GRADIENT OVERLAYS */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(100deg, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.72) 42%, rgba(15,23,42,0.30) 68%, rgba(15,23,42,0.08) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,23,42,0.35) 0%, transparent 30%, transparent 70%, rgba(15,23,42,0.55) 100%)',
          }}
        />
        <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-56 pb-32 md:pt-64 md:pb-40">
          <motion.div
            className="flex flex-col items-start max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            <h1
              className="font-display font-extrabold uppercase leading-[1.15] tracking-tight text-white mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.9rem)' }}
            >
              {headlineLines.map((line, i) => (
                <span key={i} className={`block overflow-hidden ${i < headlineLines.length - 1 ? 'mb-1.5 md:mb-2.5' : ''}`}>
                  <motion.span
                    className={`inline-block ${i === headlineLines.length - 1 ? 'text-brand-gold' : 'text-white'}`}
                    variants={lineVariants}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* INTRO BLOCK */}
      <section ref={introSectionRef} id="mining-services" className="bg-white border-b border-brand-darkblue/[0.07] py-14 md:py-18 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT CONTENT COLUMN */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* HEADING */}
              <h2 className="gsap-mining-heading font-display text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold uppercase tracking-tight text-brand-darkblue leading-snug mb-5">
                Mining &amp; Crushing Services
              </h2>

              {/* PARAGRAPHS */}
              <div className="space-y-3.5 font-body text-[13.5px] md:text-[14.5px] text-brand-darkblue/80 leading-relaxed">
                <p className="gsap-mining-p">
                  <strong className="font-bold text-brand-darkblue">3 CIIRCLES</strong> provides mining and crushing services for construction, infrastructure and material processing requirements. Our capabilities cover{' '}
                  <strong className="font-bold text-brand-darkblue">extraction, drilling, blasting, crushing operations, transportation and material handling</strong>.
                </p>
                <p className="gsap-mining-p">
                  With experience in aggregate and sand production, our crushing services support projects that require efficient processing of boulders and construction materials into usable aggregates.
                </p>
                <p className="gsap-mining-p">
                  Our plant and machinery capabilities include multi-stage crushing plants and VSI crushing equipment, supporting crushing operations for infrastructure and construction applications. The company profile records a{' '}
                  <strong className="font-bold text-brand-darkblue">300 TPH 3-stage crushing plant</strong>, a{' '}
                  <strong className="font-bold text-brand-darkblue">150 TPH 2-stage crushing plant</strong> and a{' '}
                  <strong className="font-bold text-brand-darkblue">350 TPH VSI stone crushing plant</strong>.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE WITH ANIME STYLING & SLOW GSAP ANIMATION */}
            <div className="lg:col-span-6 relative">
              {/* AMBIENT ANIME AURA GLOW BACKDROP */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold/25 via-amber-400/15 to-brand-darkblue/25 rounded-[2.5rem] sm:rounded-[3rem] blur-xl opacity-70 animate-pulse pointer-events-none" />

              {/* MAIN FRAME CONTAINER WITH AUTOMATIC SLOW FLOAT */}
              <motion.div 
                className="gsap-mining-img-frame relative rounded-[2.2rem] sm:rounded-[2.6rem] p-3 sm:p-3.5 bg-gradient-to-br from-[#FFFDF9] via-[#FBF8F1] to-[#F2E7D3] border border-amber-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              >
                {/* INNER IMAGE CONTAINER WITH ANIME VIBRANCY FILTER & SHIMMER */}
                <div className="relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] h-[310px] sm:h-[370px] md:h-[415px] lg:h-[430px]">
                  {/* MAIN IMAGE WITH VIBRANT ANIME EFFECT & SLOW PAN-ZOOM */}
                  <motion.img
                    src={miningImg}
                    alt="Mining & Crushing Operations"
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
                      Mining &amp; Crushing Services
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SHOWCASE SECTION - EXCLUSIVE MODERN DESIGN FOR MINING PAGE */}
      <section ref={servicesSectionRef} id="services" className="bg-[#FAF8F5] border-b border-brand-darkblue/[0.07] py-10 md:py-14 overflow-hidden relative">
        {/* Subtle background graphic accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-darkblue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          {/* SECTION HEADER */}
          <div className="mb-6 md:mb-8">
            <div className="max-w-2xl">
              <h2
                className="gsap-svc-title font-display text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold uppercase tracking-tight text-brand-darkblue leading-tight"
              >
                OUR MINING &amp; CRUSHING SERVICES
              </h2>
            </div>
          </div>

          {/* MODERN 3-CARD GRID ARCHITECTURE */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {services.map((svc, idx) => {
              const isFeatured = idx === 1; // Middle Crushing Operations card highlighted
              return (
                <div
                  key={svc.title}
                  className={`gsap-svc-card group relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 border ${
                    isFeatured
                      ? 'bg-brand-darkblue text-white border-brand-gold/40 shadow-2xl ring-1 ring-brand-gold/30'
                      : 'bg-white text-brand-darkblue border-brand-darkblue/10 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* IMAGE HEADER WITH GRADIENT OVERLAY */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={svc.img || miningImg}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-all duration-700 ease-out"
                    />
                    <div className={`absolute inset-0 ${
                      isFeatured
                        ? 'bg-gradient-to-t from-brand-darkblue via-brand-darkblue/40 to-transparent'
                        : 'bg-gradient-to-t from-white via-white/20 to-transparent'
                    }`} />
                    {isFeatured && (
                      <div className="absolute top-4 right-4 z-10">
                        
                      </div>
                    )}
                  </div>

                  {/* CARD BODY CONTENT */}
                  <div className="p-5 sm:p-5.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        className={`font-display text-lg sm:text-xl font-extrabold uppercase tracking-tight mb-2.5 ${
                          isFeatured || svc.title === 'Crushing Operations' ? 'text-white' : 'text-brand-darkblue'
                        }`}
                        style={isFeatured || svc.title === 'Crushing Operations' ? { color: '#ffffff' } : {}}
                      >
                        {svc.title}
                      </h3>

                      <p className={`font-body text-xs sm:text-[12.5px] leading-relaxed mb-3 ${
                        isFeatured ? 'text-white/80' : 'text-brand-darkblue/75'
                      }`}>
                        {svc.body}
                      </p>

                      {Array.isArray(svc.detail) ? (
                        <div className="space-y-2.5 mb-3">
                          {svc.detail.map((d, i) => (
                            <p
                              key={i}
                              className={`font-body text-xs sm:text-[12.5px] leading-relaxed ${
                                isFeatured ? 'text-white/80' : 'text-brand-darkblue/75'
                              }`}
                            >
                              {d}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className={`font-body text-xs sm:text-[12.5px] leading-relaxed mb-3 ${
                          isFeatured ? 'text-white/80' : 'text-brand-darkblue/75'
                        }`}>
                          {svc.detail}
                        </p>
                      )}
                    </div>

                    {/* KEYWORD TAGS */}
                    <div className="pt-1.5">
                      <div className="flex flex-wrap gap-1.5">
                        {svc.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className={`font-display text-[8px] font-bold uppercase tracking-[0.1em] rounded-full px-2.5 py-0.5 border transition-colors ${
                              isFeatured
                                ? 'bg-white/10 text-white border-white/15'
                                : 'bg-brand-darkblue/[0.04] text-brand-darkblue/80 border-brand-darkblue/10'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </section>

      {/* MINING & CRUSHING EXPERIENCE */}
      <section ref={expSectionRef} className="relative bg-gradient-to-b from-[#F4F7FC]/80 via-white to-[#F4F7FC]/60 border-b border-brand-darkblue/[0.07] pt-16 md:pt-24 pb-12 md:pb-16 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          {/* HEADER AREA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-0">
            <div className="lg:col-span-6">
              <div>
                <div className="gsap-exp-badge flex items-center gap-3 mb-3">
                  <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#D4AF37' }} />
                  <span
                    className="font-display font-extrabold uppercase text-brand-gold"
                    style={{ fontSize: '9.5px', letterSpacing: '0.35em' }}
                  >
                    Project Experience
                  </span>
                </div>
                <h2
                  className="gsap-exp-heading font-display text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[31px] font-bold uppercase tracking-tight text-brand-darkblue leading-tight whitespace-nowrap"
                >
                  Mining &amp; Crushing Experience
                </h2>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-3.5">
              <p className="gsap-exp-p font-body text-xs sm:text-sm text-brand-darkblue/75 leading-relaxed">
                Our project portfolio includes material processing and crushing-related work associated with major infrastructure projects. The profile also features work for <strong className="font-bold text-brand-darkblue">National High Speed Rail Corporation Limited</strong>, <strong className="font-bold text-brand-darkblue">DFCC Corridor CTP-11</strong> and <strong className="font-bold text-brand-darkblue">Chennai Peripheral Ring Road</strong>, among other projects.
              </p>
              <p className="gsap-exp-p font-body text-xs sm:text-sm text-brand-darkblue/70 leading-relaxed">
                With equipment, experienced teams and material processing capabilities, 3 CIIRCLES offers integrated mining, crushing and material handling solutions for demanding project environments.
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* MINING & CRUSHING FAQS - DARK THEME */}
      <section className="bg-brand-darkblue relative overflow-hidden border-b border-white/10 pt-20 md:pt-28 pb-16 md:pb-20">
        {/* Subtle Ambient Radial Glow accents */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={fadeUp}
              className="lg:w-[480px] shrink-0 pt-2 lg:pt-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#D4AF37' }} />
                <span
                  className="font-display font-extrabold uppercase text-brand-gold"
                  style={{ fontSize: '9px', letterSpacing: '0.35em' }}
                >
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight mb-6 whitespace-nowrap" style={{ color: '#FFFFFF' }}>
                Mining &amp; Crushing FAQs
              </h2>
            </motion.div>

            <motion.div
              className="flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
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
            alt="Mining & Crushing Contact Background"
            className="w-full h-full object-cover object-center scale-105"
            style={{ filter: 'brightness(0.92) contrast(1.05)' }}
          />
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
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-brand-darkblue leading-tight mb-6 md:mb-7 uppercase"
              >
                Enquire About Mining &amp; Crushing Services
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
