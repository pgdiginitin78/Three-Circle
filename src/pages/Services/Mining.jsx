import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import miningImg from '../../assets/services/mining.jpg';
import minningback from '../../assets/services/minningbg.png'
import excavationImg from '../../assets/services/excavation.jpg';
import infrastructureImg from '../../assets/services/infrastructure.jpg';
import ctaback from '../../assets/services/ctaback.png';

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
    num: '01',
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
    num: '02',
    title: 'Crushing Operations',
    img: miningImg,
    body: 'Our stone crushing and aggregate crushing services are designed for projects requiring efficient material processing. We undertake crushing operations to process supplied boulders into aggregate and crushed sand for construction and infrastructure applications.',
    detail: 'Our crushing capabilities include 2-stage and 3-stage crushing operations, VSI crushing and aggregate processing. The company has undertaken crushing work involving the processing of client-supplied boulders into aggregate and sand through a 3-stage VSI crusher.',
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
    num: '03',
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

export default function Mining() {
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
            src={minningback}
            alt="Mining & Crushing Services Background"
            className="w-full h-full object-cover object-center scale-105"
            style={{ filter: 'brightness(0.58) contrast(1.05) saturate(0.85)' }}
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(100deg, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.72) 42%, rgba(15,23,42,0.30) 68%, rgba(15,23,42,0.08) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10"
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
              style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)' }}
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
                <span className="block mb-1.5">Mining &amp;</span>
                <span className="block text-[#D4AF37]">Crushing Services</span>
              </motion.h2>

              {/* PARAGRAPHS */}
              <motion.div
                variants={fadeUp}
                className="space-y-3.5 font-body text-[13.5px] md:text-[14.5px] text-brand-darkblue/80 leading-relaxed"
              >
                <p>
                  <strong className="font-bold text-brand-darkblue">3 CIIRCLES</strong> provides mining and crushing services for construction, infrastructure and material processing requirements. Our capabilities cover{' '}
                  <strong className="font-bold text-brand-darkblue">extraction, drilling, blasting, crushing operations, transportation and material handling</strong>.
                </p>
                <p>
                  With experience in aggregate and sand production, our crushing services support projects that require efficient processing of boulders and construction materials into usable aggregates.
                </p>
                <p>
                  Our plant and machinery capabilities include multi-stage crushing plants and VSI crushing equipment, supporting crushing operations for infrastructure and construction applications. The company profile records a{' '}
                  <strong className="font-bold text-brand-darkblue">300 TPH 3-stage crushing plant</strong>, a{' '}
                  <strong className="font-bold text-brand-darkblue">150 TPH 2-stage crushing plant</strong> and a{' '}
                  <strong className="font-bold text-brand-darkblue">350 TPH VSI stone crushing plant</strong>.
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
                    src={miningImg}
                    alt="Mining & Crushing Operations"
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
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#D4AF37] inline-block" />
              <span className="font-display font-extrabold uppercase text-brand-gold text-[9.5px] tracking-[0.38em]">
                SPECIALIZED SOLUTIONS
              </span>
              <span className="w-8 h-[2px] bg-[#D4AF37] inline-block" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight"
            >
              Our Mining &amp; Crushing <span style={{ color: '#D4AF37' }}>Services</span>
            </motion.h2>
          </motion.div>

          {/* INTERACTIVE NAVIGATION TABS */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 md:mb-8">
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
              className="bg-white border border-brand-darkblue/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* LEFT IMAGE SHOWCASE */}
                <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-[340px] overflow-hidden group">
                  <img
                    src={services[activeTab].img || miningImg}
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
                  </div>

                  {/* SCOPE TAGS */}
                  <div>
                    <span className="block font-display text-[8.5px] font-extrabold uppercase tracking-[0.2em] text-brand-darkblue/45 mb-2">
                      Scope Keywords &amp; Services
                    </span>
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

      {/* MINING & CRUSHING EXPERIENCE */}
      <section className="relative bg-gradient-to-b from-[#F4F7FC]/80 via-white to-[#F4F7FC]/60 border-b border-brand-darkblue/[0.07] py-14 md:py-20 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          {/* HEADER AREA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 'some' }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
                  <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#D4AF37' }} />
                  <span
                    className="font-display font-extrabold uppercase text-brand-gold"
                    style={{ fontSize: '9.5px', letterSpacing: '0.35em' }}
                  >
                    Project Experience
                  </span>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight"
                >
                  Mining &amp; Crushing <span style={{ color: '#D4AF37' }}>Experience</span>
                </motion.h2>
              </motion.div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-3.5">
              <p className="font-body text-xs sm:text-sm text-brand-darkblue/75 leading-relaxed">
                Our project portfolio includes material processing and crushing-related work associated with major infrastructure projects. The profile also features work for <strong className="font-bold text-brand-darkblue">National High Speed Rail Corporation Limited</strong>, <strong className="font-bold text-brand-darkblue">DFCC Corridor CTP-11</strong> and <strong className="font-bold text-brand-darkblue">Chennai Peripheral Ring Road</strong>, among other projects.
              </p>
              <p className="font-body text-xs sm:text-sm text-brand-darkblue/70 leading-relaxed">
                With equipment, experienced teams and material processing capabilities, 3 CIIRCLES offers integrated mining, crushing and material handling solutions for demanding project environments.
              </p>
            </div>
          </div>

          {/* PROJECT CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {projectHighlights.map((proj, i) => (
              <motion.div
                key={proj.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl bg-white p-7 border border-brand-darkblue/10 shadow-sm hover:shadow-xl hover:border-brand-gold/50 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-xs font-extrabold tracking-[0.25em] text-brand-gold uppercase">
                      {proj.num}
                    </span>
                    <span className="font-display text-[8.5px] font-bold uppercase tracking-[0.14em] text-brand-darkblue/60 bg-brand-darkblue/[0.05] border border-brand-darkblue/10 rounded-full px-3 py-1">
                      {proj.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-brand-darkblue leading-snug mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {proj.label}
                  </h3>
                  <p className="font-body text-xs text-brand-darkblue/65 font-medium leading-relaxed">
                    {proj.sub}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-brand-darkblue/[0.07] flex items-center justify-between">
                  <span className="font-display text-[10px] font-extrabold uppercase tracking-wider text-brand-darkblue/70 group-hover:text-brand-gold transition-colors duration-300">
                    Infrastructure Portfolio
                  </span>
                  <svg
                    className="w-4 h-4 text-brand-gold transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MINING & CRUSHING FAQS */}
      <section className="bg-white border-b border-brand-darkblue/[0.07] py-16 md:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={fadeUp}
              className="lg:w-96 shrink-0"
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
              <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight mb-6">
                <span className="block whitespace-nowrap">Mining &amp; Crushing</span>
                <span style={{ color: '#D4AF37' }}>FAQs</span>
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
                Enquire About <span style={{ color: '#D4AF37' }}>Mining &amp; Crushing Services</span>
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
