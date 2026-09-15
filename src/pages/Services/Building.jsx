import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import buildingImg from '../../assets/services/building.jpg';
import heroback from '../../assets/services/heroback.png';
import rccworkImg from '../../assets/services/rccwork.png';
import mepworkImg from '../../assets/services/mepwork.png';
import claddingImg from '../../assets/services/cladding.png';
import cooperSchoolImg from '../../assets/services/Cooper School.png';
import anantUnivImg from '../../assets/services/Anantuniversity.png';
import airportImg from '../../assets/services/mumbai airport.png';
import ctaback from '../../assets/services/ctaback.png'

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
    <motion.div variants={fadeUp} className="border-b border-brand-darkblue/10 last:border-b-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-5 text-left group">
        <div className="flex items-start gap-4">
          <span className="font-display text-[9px] font-extrabold tracking-[0.28em] text-brand-gold uppercase shrink-0 mt-0.5">{String(index + 1).padStart(2, '0')}</span>
          <span className="font-display text-sm md:text-base font-bold text-brand-darkblue uppercase tracking-tight leading-snug group-hover:text-brand-gold transition-colors duration-200">{q}</span>
        </div>
        <span className="shrink-0 w-6 h-6 rounded-full border border-brand-darkblue/20 flex items-center justify-center text-brand-darkblue group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-200 mt-0.5 text-sm leading-none">{open ? '-' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="ans" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
            <p className="font-body text-sm text-brand-darkblue/65 leading-relaxed pb-5 pl-9">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Building() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative min-h-[60vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroback} alt="Building Construction" className="w-full h-full object-cover object-center scale-105" style={{ filter: 'brightness(0.62) contrast(1.05) saturate(0.85)' }} />
        </div>
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(100deg, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.72) 42%, rgba(15,23,42,0.30) 68%, rgba(15,23,42,0.08) 100%)' }} />
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(15,23,42,0.35) 0%, transparent 30%, transparent 70%, rgba(15,23,42,0.55) 100%)' }} />
        <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-40 pb-16">
          <motion.div className="flex flex-col items-start max-w-3xl" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span style={{ display: 'inline-block', width: '32px', height: '2px', background: '#D4AF37' }} />
              <span className="font-display font-extrabold uppercase text-brand-gold" style={{ fontSize: '10px', letterSpacing: '0.38em' }}>Services</span>
            </motion.div>
            <h1 className="font-display font-extrabold uppercase leading-[0.94] tracking-tight text-white mb-8" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)' }}>
              {headlineLines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span className={`inline-block ${i === headlineLines.length - 1 ? 'shimmer-text' : 'text-white'}`} variants={lineVariants}>{line}</motion.span>
                </span>
              ))}
            </h1>
            <motion.p variants={itemVariants} className="font-body text-white/80 leading-relaxed mb-4" style={{ fontSize: 'clamp(0.84rem, 1.25vw, 1.04rem)', maxWidth: '600px' }}>
              At <span className="text-brand-gold font-semibold">3 CIIRCLES OPC P LTD</span>, we provide comprehensive civil construction services, infrastructure construction services, building construction services, mining and crushing services, and excavation services for a wide range of projects.
            </motion.p>
            <motion.p variants={itemVariants} className="font-body text-white/70 leading-relaxed mb-4" style={{ fontSize: 'clamp(0.82rem, 1.2vw, 0.97rem)', maxWidth: '600px' }}>
              With a legacy in construction dating back to <span className="text-brand-gold font-semibold">1979</span>, 3 CIIRCLES has experience in executing government, institutional, industrial, infrastructure and commercial projects.
            </motion.p>
            <motion.p variants={itemVariants} className="font-body text-white/55 leading-relaxed mb-10" style={{ fontSize: 'clamp(0.82rem, 1.2vw, 0.97rem)', maxWidth: '600px' }}>
              Our integrated approach combines experienced project teams, construction equipment, site management, quality systems and safety practices to deliver reliable civil construction solutions across project requirements.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {capabilities.map((cap) => (
                <span key={cap} className="font-display font-bold uppercase text-white/85 rounded-full px-4 py-1.5 hover:text-brand-gold transition-all duration-300 cursor-default" style={{ fontSize: '9px', letterSpacing: '0.18em', background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.28)' }}>{cap}</span>
              ))}
            </motion.div>
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
                className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight mb-5"
              >
                Our Building<br />
                <span className="text-[#D4AF37]">Construction</span> Services
              </motion.h2>

              {/* PARAGRAPHS */}
              <motion.div variants={fadeUp} className="space-y-3.5 font-body text-[13.5px] md:text-[14.5px] text-brand-darkblue/80 leading-relaxed mb-7">
                <p>
                  <strong className="font-bold text-brand-darkblue">3 CIIRCLES</strong> provides reliable{' '}
                  <strong className="font-bold text-brand-darkblue">building construction services</strong> for institutional, commercial, industrial and large-scale development projects. Our building construction capabilities cover{' '}
                  <strong className="font-bold text-brand-darkblue">RCC works, MEP works, cladding and façade works</strong>, along with associated civil and architectural execution.
                </p>
                <p>
                  Our experience includes projects where the scope involved{' '}
                  <strong className="font-bold text-brand-darkblue">civil construction, interiors, MEP works, architectural works</strong> and{' '}
                  <strong className="font-bold text-brand-darkblue">façade works</strong>, enabling us to provide coordinated execution across different stages of building development.
                </p>
                <p>
                  From structural construction to building services and external finishes, our{' '}
                  <strong className="font-bold text-brand-darkblue">building construction solutions</strong> are planned around project requirements, site conditions, quality standards and execution schedules.
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
              {/* SOFT BACKDROP CONTAINER WITH CURVED CORNERS */}
              <div className="relative rounded-[2.2rem] sm:rounded-[2.6rem] p-3 sm:p-3.5 bg-[#FBF8F1] border border-[#F2E8D5] shadow-sm">
                {/* MAIN IMAGE */}
                <div className="relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] h-[310px] sm:h-[370px] md:h-[415px] lg:h-[430px]">
                  <img
                    src={buildingImg}
                    alt="Building Construction Services"
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

      {/* SERVICE CARDS */}
      <section id="services" className="bg-[#FAF8F5] border-b border-brand-darkblue/[0.07] py-12 md:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 'some' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="mb-8 md:mb-10">
            <motion.h2 variants={fadeUp} className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight">
              Our Building Construction <span style={{ color: '#D4AF37' }}>Services</span>
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((svc, idx) => (
              <motion.div key={svc.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 'some' }} transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }} className="group flex flex-col bg-white border border-brand-darkblue/10 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-gold/50 transition-all duration-500 transform hover:-translate-y-1">
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
                  <span className="absolute top-3.5 right-3.5 font-display text-[9px] font-extrabold tracking-[0.25em] text-white bg-brand-darkblue/75 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/20">{svc.num}</span>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* PROJECT EXPERIENCE */}
      <section className="relative bg-gradient-to-b from-[#F4F7FC]/80 via-white to-[#F4F7FC]/60 border-b border-brand-darkblue/[0.07] py-14 md:py-20 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          
          {/* HEADER AREA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            <div className="lg:col-span-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 'some' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
                  <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#D4AF37' }} />
                  <span className="font-display font-extrabold uppercase text-brand-gold" style={{ fontSize: '9.5px', letterSpacing: '0.35em' }}>Project Experience</span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight">
                  Building a Better <span style={{ color: '#D4AF37' }}>Tomorrow</span>
                </motion.h2>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              <p className="font-body text-xs sm:text-sm text-brand-darkblue/75 leading-relaxed">
                Our project experience includes <strong className="font-bold text-brand-darkblue">Maneckji Cooper School</strong> in Juhu, Mumbai, <strong className="font-bold text-brand-darkblue">Anant National University</strong> in Ahmedabad and projects for <strong className="font-bold text-brand-darkblue">Mumbai International Airport Limited</strong>, with documented scopes covering civil, interior, architectural, MEP and façade works.
              </p>
              <p className="font-body text-xs sm:text-sm text-brand-darkblue/70 leading-relaxed">
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
            ].map((proj, i) => (
              <motion.div
                key={proj.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-64 sm:h-72 flex flex-col justify-end p-6 border border-black/5"
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
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-b border-brand-darkblue/[0.07] py-16 md:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 'some' }} variants={fadeUp} className="lg:w-96 shrink-0">
              <div className="flex items-center gap-3 mb-4">
                <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#D4AF37' }} />
                <span className="font-display font-extrabold uppercase text-brand-gold" style={{ fontSize: '9px', letterSpacing: '0.35em' }}>Frequently Asked Questions</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-brand-darkblue leading-tight mb-6">
                <span className="block whitespace-nowrap">Building Construction</span>
                <span style={{ color: '#D4AF37' }}>FAQs</span>
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
                Discuss Your <span style={{ color: '#D4AF37' }}>Project Requirements</span>
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
