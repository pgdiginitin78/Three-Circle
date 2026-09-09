import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import infrastructureImg from '../../assets/services/infrastructure.jpg';
import infraback from '../../assets/services/infrastructureback.png'

import ctaback from '../../assets/services/infracta.png';
import bridgeImg from '../../assets/services/bridge.png'
import roadsImg from '../../assets/services/roadsandhighway.png';
import highriseImg from '../../assets/services/highrise.png'

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
    <motion.div variants={fadeUp} className="border-b border-brand-darkblue/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <div className="flex items-start gap-4">
          <span className="font-display text-[9px] font-extrabold tracking-[0.28em] text-brand-gold uppercase shrink-0 mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-display text-sm md:text-base font-bold text-brand-darkblue uppercase tracking-tight leading-snug group-hover:text-brand-gold transition-colors duration-200">
            {q}
          </span>
        </div>
        <span className="shrink-0 w-6 h-6 rounded-full border border-brand-darkblue/20 flex items-center justify-center text-brand-darkblue group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-200 mt-0.5 text-sm leading-none">
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
            <p className="font-body text-sm text-brand-darkblue/65 leading-relaxed pb-5 pl-9">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Infrastructure() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={infraback}
            alt="Infrastructure Construction Services Background"
            className="w-full h-full object-cover object-center scale-105"
            style={{ filter: 'brightness(0.72) contrast(1.03) saturate(0.9)' }}
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
      <section className="bg-white border-b border-brand-darkblue/[0.07] py-14 md:py-18 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT CONTENT COLUMN */}
            <motion.div
              className="lg:col-span-6 flex flex-col items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {/* HEADING */}
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold uppercase tracking-tight text-brand-darkblue leading-snug mb-5"
              >
                <span className="block mb-2">Infrastructure</span>
                <span className="block"><span className="text-[#D4AF37]">Construction</span> Services</span>
              </motion.h2>

              {/* PARAGRAPHS */}
              <motion.div
                variants={fadeUp}
                className="space-y-3.5 font-body text-[13.5px] md:text-[14.5px] text-brand-darkblue/80 leading-relaxed"
              >
                <p>
                  <strong className="font-bold text-brand-darkblue">3 CIIRCLES</strong> provides infrastructure construction services for roads, highways, bridges, high-rise developments and associated civil infrastructure projects.
                </p>
                <p>
                  With extensive experience in government and infrastructure construction, our capabilities cover{' '}
                  <strong className="font-bold text-brand-darkblue">road construction, highway construction, bridge construction, road improvement, road strengthening, drainage works and associated civil works</strong>.
                </p>
                <p>
                  Our completed project portfolio includes road and infrastructure projects associated with{' '}
                  <strong className="font-bold text-brand-darkblue">NHAI, CIDCO, MSRDC, PWD and Pradhan Mantri Gram Sadak Yojana</strong>, along with other government and private-sector organisations.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="lg:col-span-6 relative"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative rounded-[2.2rem] sm:rounded-[2.6rem] p-3 sm:p-3.5 bg-[#FBF8F1] border border-[#F2E8D5] shadow-sm">
                <div className="relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] h-[310px] sm:h-[370px] md:h-[415px] lg:h-[430px]">
                  <img
                    src={infrastructureImg}
                    alt="Infrastructure Construction Services"
                    className="w-full h-full object-cover shadow-inner"
                    style={{ objectPosition: 'center 40%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICE SHOWCASE SECTION */}
      <section id="services" className="bg-[#FAF8F5] border-b border-brand-darkblue/[0.07] py-10 md:py-16 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 'some' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="mb-6 md:mb-8 text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight"
            >
              Our Infrastructure <span style={{ color: '#D4AF37' }}>Services</span>
            </motion.h2>
          </motion.div>

          {/* INTERACTIVE NAVIGATION TABS */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8 md:mb-10">
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
      </section>

      {/* INFRASTRUCTURE PROJECT EXPERIENCE */}
      <section className="relative bg-gradient-to-b from-[#F4F7FC]/80 via-white to-[#F4F7FC]/60 border-b border-brand-darkblue/[0.07] py-14 md:py-20 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          {/* HEADER AREA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-0">
            <div className="lg:col-span-5 pt-2 sm:pt-3 md:pt-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 'some' }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              >
               
                <motion.h2
                  variants={fadeUp}
                  className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold uppercase tracking-tight text-brand-darkblue leading-snug"
                >
                  <span className="block mb-1.5 md:mb-2">Infrastructure</span>
                  <span className="block">Project <span style={{ color: '#D4AF37' }}>Experience</span></span>
                </motion.h2>
              </motion.div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-3.5">
              <p className="font-body text-xs sm:text-sm text-brand-darkblue/75 leading-relaxed">
                Our infrastructure experience spans several decades and includes roads, highways, bridges, road overbridges, stormwater drainage, water supply pipelines and industrial infrastructure.
              </p>
              <p className="font-body text-xs sm:text-sm text-brand-darkblue/70 leading-relaxed">
                Projects documented in our portfolio include works for <strong className="font-bold text-brand-darkblue">CIDCO, NHAI, PWD, MSRDC, Mazagon Dock Limited</strong> and other government and infrastructure organisations.
              </p>
              <p className="font-body text-xs sm:text-sm text-brand-darkblue/65 leading-relaxed">
                This experience enables 3 CIIRCLES to undertake complex civil infrastructure projects requiring coordinated project execution, construction equipment, experienced site teams and stringent quality and safety practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE FAQS */}
      <section className="bg-white border-b border-brand-darkblue/[0.07] py-16 md:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={fadeUp}
              className="lg:w-[480px] shrink-0 lg:pt-[64px]"
            >
            
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight mb-6 whitespace-nowrap">
                Infrastructure <span style={{ color: '#D4AF37' }}>FAQs</span>
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
