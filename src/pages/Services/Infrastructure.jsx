import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import infrastructureImg from '../../assets/services/infrastructure.jpg';
import infraback from '../../assets/services/infrastructureback.png';
import ctaback from '../../assets/services/infracta.png';
import bridgeImg from '../../assets/services/bridge.png';
import roadsImg from '../../assets/services/roadsandhighway.png';
import highriseImg from '../../assets/services/highrise.png';
import logobackVideo from '../../assets/services/logoback.mp4';

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.35 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] } },
};

const lineVariants = {
  hidden: { y: '110%', opacity: 0, filter: 'blur(12px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 2.4, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } },
};

const capabilities = [
  'Bridge Construction',
  'Roads & Highways',
  'High-Rise Buildings',
  'Road Strengthening',
  'Drainage Works',
  'Civil Infrastructure',
];

const headlineLines = ['Infrastructure Construction', 'Services'];

const services = [
  {
    num: '01',
    title: 'Bridge Construction',
    img: bridgeImg,
    body: '3 CIIRCLES undertakes bridge construction and associated civil infrastructure works, including road overbridge construction and related structural works.',
    detail: 'Our project experience includes a Road Over Bridge at the Nerul-Uran Railway Line and bridge construction works across the Patalaganga and Balganga rivers in Maharashtra.',
    detail2: 'Our bridge construction capabilities include structural civil works, associated road works and supporting infrastructure development.',
    tags: [
      'Bridge Construction',
      'Bridge Contractor',
      'Road Over Bridge',
      'Bridge Civil Works',
      'Infrastructure Contractor',
    ],
    objectPos: 'object-center',
  },
  {
    num: '02',
    title: 'Roads & Highways Construction',
    img: roadsImg,
    body: 'Our road and highway construction services cover the development, improvement, strengthening and maintenance of road infrastructure.',
    detail: 'We have documented experience across National Highways, State Highways, Major District Roads, rural roads and internal infrastructure roads.',
     detail2:'Our completed works include projects associated with National Highway 17, National Highway 3, Maharashtra State Highway 119, State Highway 120, State Highway 121 and Pradhan Mantri Gram Sadak Yojana.',
    subCapabilities: [
      'Road construction',
      'Highway construction',
      'Road strengthening',
      'Road improvement',
      'Road maintenance',
      'Internal roads',
      'Allied drainage works',
    ],
    tags: [
      'Road Construction',
      'Highway Construction',
      'Road Contractor',
      'Highway Contractor',
      'Road Infrastructure',
      'Road Development',
    ],
    objectPos: 'object-center',
  },
  {
    num: '03',
    title: 'High-Rise Building Construction',
    img: highriseImg,
    body: '3 CIIRCLES undertakes high-rise building construction and associated civil works for large-scale developments.',
    detail: 'Our building construction capabilities include RCC construction, structural civil works, MEP coordination, interiors and façade execution, allowing multiple construction requirements to be managed within an integrated project environment.',
    tags: [
      'High-Rise Construction',
      'High-Rise Building Contractor',
      'Building Construction',
      'Structural Construction',
      'Civil Contractor',
    ],
    objectPos: 'object-center',
  },
];

const faqs = [
  {
    q: 'What infrastructure construction services does 3 CIIRCLES provide?',
    a: 'We provide bridge construction, road construction, highway construction and high-rise building construction along with associated civil infrastructure works.',
  },
  {
    q: 'Does 3 CIIRCLES undertake government infrastructure projects?',
    a: "Yes. The company's portfolio includes several government and public infrastructure projects.",
  },
  {
    q: 'Does the company undertake road and highway construction?',
    a: 'Yes. Road and highway construction, improvement, strengthening and maintenance form a significant part of the documented project experience.',
  },
];

const projectHighlights = [
  {
    num: '01',
    label: 'Roads, Highways & Overbridges',
    sub: 'NHAI, CIDCO & MSRDC Projects',
    tag: 'National Infrastructure',
    detail: 'Projects involving National Highways (NH-17, NH-3), State Highways (SH-119, SH-120, SH-121) & Nerul-Uran ROB.',
  },
  {
    num: '02',
    label: 'Bridge Civil Infrastructure',
    sub: 'Patalaganga & Balganga River Bridges',
    tag: 'River Bridge Construction',
    detail: 'Structural bridge construction, river span works, foundation engineering and allied road connectivity.',
  },
  {
    num: '03',
    label: 'Industrial & Rural Infrastructure',
    sub: 'Mazagon Dock & PMGSY Works',
    tag: 'Public Sector Projects',
    detail: 'Complex civil works for Mazagon Dock Limited, PWD stormwater drainage pipelines, and PMGSY rural road corridors.',
  },
];

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="border-b border-white/12 last:border-b-0">
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
        <span className="shrink-0 w-6 h-6 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/90 group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-200 mt-0.5 text-sm leading-none">
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
            <p className="font-body text-sm text-white/75 leading-relaxed pb-5 pl-9">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Infrastructure() {
  const [activeTab, setActiveTab] = useState(0);
  const introSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const projectSectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeTab]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // INTRO BLOCK GSAP TIMELINE
      const introEl = introSectionRef.current;
      if (introEl) {
        const heading = introEl.querySelector('.gsap-infra-heading');
        const paragraphs = introEl.querySelectorAll('.gsap-infra-p');
        const imgFrame = introEl.querySelector('.gsap-infra-img-frame');

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

      // SERVICES SHOWCASE GSAP TIMELINE
      const servicesEl = servicesSectionRef.current;
      if (servicesEl) {
        const title = servicesEl.querySelector('.gsap-svc-title');
        const tabs = servicesEl.querySelector('.gsap-svc-tabs');
        const stage = servicesEl.querySelector('.gsap-svc-stage');

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

        if (tabs) {
          stl.fromTo(
            tabs,
            { opacity: 0, y: 40, filter: 'blur(12px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.0, ease: 'power2.out' },
            0.25
          );
        }

        if (stage) {
          stl.fromTo(
            stage,
            { opacity: 0, y: 65, scale: 0.94, filter: 'blur(18px)' },
            { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 2.6, ease: 'power2.out' },
            0.4
          );
        }
      }

      // PROJECT EXPERIENCE SECTION GSAP TIMELINE (SLOW CINEMATIC ENTRANCE)
      const projectEl = projectSectionRef.current;
      if (projectEl) {
        const tag = projectEl.querySelector('.gsap-proj-tag');
        const heading = projectEl.querySelector('.gsap-proj-heading');
        const paragraphs = projectEl.querySelectorAll('.gsap-proj-p');

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
            { opacity: 0, y: 30, filter: 'blur(10px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.0, ease: 'power2.out' },
            0
          );
        }

        if (heading) {
          ptl.fromTo(
            heading,
            { opacity: 0, y: 55, filter: 'blur(16px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.6, ease: 'power2.out' },
            0.15
          );
        }

        if (paragraphs && paragraphs.length > 0) {
          ptl.fromTo(
            paragraphs,
            { opacity: 0, y: 40, filter: 'blur(12px)' },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 2.4,
              stagger: 0.38,
              ease: 'power2.out',
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
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={infraback}
            alt="Infrastructure Construction Services Background"
            initial={{ scale: 1.18, x: "0%", y: "-3.5%", rotate: 0, filter: "brightness(0.72) contrast(1.05) saturate(0.95)" }}
            animate={{
              x: ["0%", "3.5%", "0%", "-3.5%", "0%"],
              y: ["-3.5%", "0%", "3.5%", "0%", "-3.5%"],
              scale: [1.18, 1.25, 1.28, 1.25, 1.18],
              rotate: [0, 1.2, 0, -1.2, 0],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-[130%] -top-[15%] relative object-cover object-center pointer-events-none"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(100deg, rgba(15,23,42,0.76) 0%, rgba(15,23,42,0.55) 42%, rgba(15,23,42,0.20) 68%, rgba(15,23,42,0.04) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,23,42,0.22) 0%, transparent 30%, transparent 70%, rgba(15,23,42,0.38) 100%)',
          }}
        />
        <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-52 pb-28 md:pt-64 md:pb-36">
          <motion.div
            className="flex flex-col items-start max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
           

            <h1
              className="font-display font-extrabold uppercase leading-[1.18] tracking-tight text-white mb-4 flex flex-col gap-2"
              style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)' }}
            >
              {headlineLines.map((line, i) => (
                <span key={i} className="block overflow-hidden py-0.5">
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
      <section ref={introSectionRef} id="infrastructure-services" className="bg-white border-b border-brand-darkblue/[0.07] py-14 md:py-18 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT CONTENT COLUMN */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* HEADING */}
              <h2 className="gsap-infra-heading font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold uppercase tracking-tight text-brand-darkblue leading-snug mb-5">
                <span className="block mb-2">Infrastructure</span>
                <span className="block">Construction Services</span>
              </h2>

              {/* PARAGRAPHS */}
              <div className="space-y-3.5 font-body text-[13.5px] md:text-[14.5px] text-brand-darkblue/80 leading-relaxed">
                <p className="gsap-infra-p">
                  <strong className="font-bold text-brand-darkblue">3 CIIRCLES</strong> provides infrastructure construction services for roads, highways, bridges, high-rise developments and associated civil infrastructure projects.
                </p>
                <p className="gsap-infra-p">
                  With extensive experience in government and infrastructure construction, our capabilities cover{' '}
                  <strong className="font-bold text-brand-darkblue">road construction, highway construction, bridge construction, road improvement, road strengthening, drainage works and associated civil works</strong>.
                </p>
                <p className="gsap-infra-p">
                  Our completed project portfolio includes road and infrastructure projects associated with{' '}
                  <strong className="font-bold text-brand-darkblue">NHAI, CIDCO, MSRDC, PWD and Pradhan Mantri Gram Sadak Yojana</strong>, along with other government and private-sector organisations.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE WITH ANIME STYLING & SLOW GSAP ANIMATION */}
            <div className="lg:col-span-6 relative">
              {/* AMBIENT ANIME AURA GLOW BACKDROP */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold/25 via-amber-400/15 to-brand-darkblue/25 rounded-[2.5rem] sm:rounded-[3rem] blur-xl opacity-70 animate-pulse pointer-events-none" />

              {/* MAIN FRAME CONTAINER WITH AUTOMATIC SLOW FLOAT */}
              <motion.div 
                className="gsap-infra-img-frame relative rounded-[2.2rem] sm:rounded-[2.6rem] p-3 sm:p-3.5 bg-gradient-to-br from-[#FFFDF9] via-[#FBF8F1] to-[#F2E7D3] border border-amber-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              >
                {/* INNER IMAGE CONTAINER WITH ANIME VIBRANCY FILTER & SHIMMER */}
                <div className="relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] h-[310px] sm:h-[370px] md:h-[415px] lg:h-[430px]">
                  {/* MAIN IMAGE WITH VIBRANT ANIME EFFECT & SLOW PAN-ZOOM */}
                  <motion.img
                    src={infrastructureImg}
                    alt="Infrastructure Construction Services"
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
                      Infrastructure Construction Services
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SHOWCASE SECTION */}
      <section ref={servicesSectionRef} id="services" className="bg-[#FAF8F5] border-b border-brand-darkblue/[0.07] py-10 md:py-16 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          {/* HEADER */}
          <div className="mb-6 md:mb-8 text-center max-w-3xl mx-auto">
            <h2 className="gsap-svc-title font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight">
              Our Infrastructure Services
            </h2>
          </div>

          {/* INTERACTIVE NAVIGATION TABS */}
          <div className="gsap-svc-tabs flex flex-wrap items-center justify-center gap-2.5 mb-8 md:mb-10">
            {services.map((svc, i) => {
              const isActive = activeTab === i;
              return (
                <button
                  key={svc.num}
                  onClick={() => setActiveTab(i)}
                  className={`group relative flex items-center gap-2.5 px-5 py-2.5 rounded-full border transition-all duration-300 transform hover:-translate-y-0.5 font-display text-xs font-extrabold uppercase tracking-wider cursor-pointer ${
                    isActive
                      ? 'bg-brand-darkblue text-white border-brand-darkblue shadow-md scale-102'
                      : 'bg-white text-brand-darkblue/75 border-brand-darkblue/15 hover:border-brand-gold/60 hover:text-brand-darkblue shadow-sm'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[9.5px] font-bold ${
                      isActive
                        ? 'bg-brand-gold text-brand-darkblue'
                        : 'bg-brand-darkblue/10 text-brand-darkblue/60 group-hover:bg-brand-gold/20 group-hover:text-brand-darkblue'
                    }`}
                  >
                    {svc.num}
                  </span>
                  <span>{svc.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full border-2 border-brand-gold pointer-events-none"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* DISPLAY SHOWCASE STAGE */}
          <div className="gsap-svc-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 md:mt-5 bg-white border border-brand-darkblue/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* LEFT IMAGE SHOWCASE */}
                <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-[340px] overflow-hidden group">
                  <img
                    src={services[activeTab].img || infrastructureImg}
                    alt={services[activeTab].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/85 via-brand-darkblue/30 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <h4
                      className="font-display text-lg sm:text-xl font-extrabold uppercase tracking-tight !text-white drop-shadow-md"
                      style={{ color: '#ffffff' }}
                    >
                      {services[activeTab].title}
                    </h4>
                  </div>
                </div>

                {/* RIGHT DETAILED CONTENT */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white">
                  <div className="pt-2 md:pt-3">
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-extrabold uppercase tracking-tight text-brand-darkblue mb-4 md:mb-5">
                      {services[activeTab].title}
                    </h3>

                    <p className="font-body text-[12px] sm:text-[13px] text-brand-darkblue/80 leading-relaxed mb-3.5">
                      {services[activeTab].body}
                    </p>

                    <p className="font-body text-[12px] sm:text-[13px] text-brand-darkblue/80 leading-relaxed mb-3.5">
                      {services[activeTab].detail}
                    </p>

                    {services[activeTab].detail2 && (
                      <p className="font-body text-[12px] sm:text-[13px] text-brand-darkblue/80 leading-relaxed mb-3.5">
                        {services[activeTab].detail2}
                      </p>
                    )}

                    {services[activeTab].subCapabilities && (
                      <div className="mb-4">
                        <span className="block font-display text-[8.5px] font-extrabold uppercase tracking-[0.18em] text-brand-gold mb-2">
                         Our road construction capabilities include:

                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {services[activeTab].subCapabilities.map((subCap) => (
                            <div key={subCap} className="flex items-center gap-2 font-body text-xs text-brand-darkblue/80 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                              <span>{subCap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* SCOPE TAGS */}
                  <div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {services[activeTab].tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-display text-[8px] sm:text-[8.5px] font-bold uppercase tracking-[0.12em] text-brand-darkblue/75 bg-brand-darkblue/[0.04] border border-brand-darkblue/10 rounded-full px-3 py-0.5 hover:border-brand-gold/50 hover:bg-brand-gold/10 hover:text-brand-darkblue transition-all duration-300 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE PROJECT EXPERIENCE */}
      <section ref={projectSectionRef} className="relative border-b border-brand-darkblue/[0.07] py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#F4F7FC]/90 via-white/80 to-[#F4F7FC]/90">
        {/* BACKGROUND VIDEO */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={logobackVideo}
            className="w-full h-full object-cover object-center scale-105 opacity-[0.26] blur-[1px] mix-blend-multiply pointer-events-none"
          />
          {/* LIGHT GRADIENT OVERLAYS FOR ELEGANT READABILITY */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/55 to-white/35 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F7FC]/70 via-transparent to-white/70 z-10 pointer-events-none" />
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-20">
          {/* HEADER AREA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div>
                <div className="gsap-proj-tag flex items-center gap-3 mb-3">
                  <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#D4AF37' }} />
                  <span className="font-display font-extrabold uppercase text-brand-gold" style={{ fontSize: '9.5px', letterSpacing: '0.35em' }}>Project Experience</span>
                </div>
                <h2 className="gsap-proj-heading font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold uppercase tracking-tight text-brand-darkblue leading-snug">
                  <span className="block mb-1.5 md:mb-2">Infrastructure</span>
                  <span className="block">Project Experience</span>
                </h2>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-3.5">
              <p className="gsap-proj-p font-body text-xs sm:text-sm text-brand-darkblue/80 leading-relaxed">
                Our infrastructure experience spans several decades and includes roads, highways, bridges, road overbridges, stormwater drainage, water supply pipelines and industrial infrastructure.
              </p>
              <p className="gsap-proj-p font-body text-xs sm:text-sm text-brand-darkblue/75 leading-relaxed">
                Projects documented in our portfolio include works for <strong className="font-bold text-brand-darkblue">CIDCO, NHAI, PWD, MSRDC, Mazagon Dock Limited</strong> and other government and infrastructure organisations.
              </p>
              <p className="gsap-proj-p font-body text-xs sm:text-sm text-brand-darkblue/70 leading-relaxed">
                This experience enables <strong className="font-bold text-brand-darkblue">3 CIIRCLES</strong> to undertake complex civil infrastructure projects requiring coordinated project execution, construction equipment, experienced site teams and stringent quality and safety practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE FAQS */}
      <section className="bg-brand-darkblue relative overflow-hidden border-b border-white/10 py-16 md:py-20">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={fadeUp}
              className="lg:w-[480px] shrink-0 lg:pt-[64px]"
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight mb-6 whitespace-nowrap" style={{ color: '#FFFFFF' }}>
                Infrastructure FAQs
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
      <section className="relative w-full flex items-center overflow-hidden bg-[#FAF8F5] border-t border-brand-darkblue/10 py-10 md:py-14">
        {/* BACKGROUND IMAGE WITH OVERLAY */}
        <div className="absolute inset-0 z-0">
          <img
            src={ctaback}
            alt="Infrastructure Contact Background"
            className="w-full h-full object-cover object-center scale-105"
            style={{ filter: 'brightness(0.96) contrast(1.02)' }}
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 45%, rgba(255,255,255,0.50) 80%, rgba(255,255,255,0.25) 100%)',
            }}
          />
        </div>

        {/* CONTAINER CONTENT */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 'some' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
           
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight text-brand-darkblue leading-snug mb-6 md:mb-8 uppercase"
            >
              <span className="block mb-2 md:mb-3">Discuss Your</span>
              <span className="block text-[#D4AF37]">Infrastructure Project</span>
            </motion.h2>

            {/* BUTTON */}
            <motion.div variants={fadeUp} className="mt-1 md:mt-2">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#E5A824] hover:bg-[#d69917] text-brand-darkblue font-display text-xs font-extrabold uppercase tracking-widest shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>CONTACT US</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
      </section>
    </div>
  );
}
