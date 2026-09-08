import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import {
  completedContracts,
  landmarkProjects,
} from "../../data/completedProjectsData";

const TOKENS = {
  "--ink": "#0F172A",
  "--paper": "#FFFFFF",
  "--brass": "var(--color-brand-gold)",
  "--brass-bright": "var(--color-brand-gold)",
  "--steel": "#0F172A",
  "--line": "rgba(21,20,15,0.12)",
  "--line-soft": "rgba(21,20,15,0.07)",
};

const STATS = [
  { value: "24+", label: "Executed contracts" },
  { value: "\u20B910,000+ L", label: "Contract valuation" },
  { value: "6+", label: "Landmark works" },
  { value: "100%", label: "Quality & safety" },
];

function IconPin({ className = "" }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
    >
      <path
        d="M12 21C16 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 8 17 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconMark({ className = "" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M3 21H21M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21M9 9H10M9 13H10M9 17H10M14 9H15M14 13H15M14 17H15"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function useSmoothScroll() {
  const prefersReduced = useReducedMotion();
  useEffect(() => {
    if (prefersReduced) return undefined;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [prefersReduced]);
}

function HeroRoute({ reduced }) {
  return (
    <svg
      viewBox="0 0 1200 500"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full opacity-80"
    >
      <motion.path
        d="M -60 430 C 220 430 260 210 560 235 C 880 262 930 90 1280 60"
        fill="none"
        stroke="var(--brass)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 2.4, ease: [0.65, 0, 0.35, 1] }
        }
      />
      {[
        [560, 235],
        [930, 90],
        [-60, 430],
      ].map((p, i) => (
        <motion.circle
          key={i}
          cx={p[0]}
          cy={p[1]}
          r="4.5"
          fill="var(--brass-bright)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: reduced ? 0 : 1.9 + i * 0.18,
            duration: 0.35,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
}

function Hero({ reduced }) {
  return (
    <section id="all-projects" className="relative overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-soft) 1px,transparent 1px),linear-gradient(90deg,var(--line-soft) 1px,transparent 1px)",
          backgroundSize: "clamp(32px,4vw,72px) clamp(32px,4vw,72px)",
        }}
      />
      <HeroRoute reduced={reduced} />

      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col px-5 pb-[clamp(2.5rem,6vw,5rem)] pt-[clamp(6rem,14vw,9rem)] sm:px-8 md:px-12 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.2 }}
          className="font-mono text-[clamp(0.7rem,0.9vw,0.85rem)] tracking-wide text-[var(--brass-bright)]"
        >
          <span>Civil &amp; infrastructure contracting \u2014 India</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduced ? 0 : 0.32 }}
          className="mt-[clamp(0.75rem,1.5vw,1.25rem)] max-w-[18ch] font-display text-[clamp(2.6rem,7vw,6.4rem)] font-black leading-[0.98] tracking-tight"
          style={{ color: "#FFFFFF" }}
        >
          <span>Engineering the arteries</span>
          <span className="block text-[var(--brass-bright)]">
            of India&apos;s growth.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduced ? 0 : 0.46 }}
          className="mt-[clamp(1rem,2vw,1.75rem)] max-w-[46ch] font-body text-[clamp(0.95rem,1.15vw,1.15rem)] leading-relaxed text-[rgba(245,242,234,0.7)]"
        >
          <span>Highways, maritime docks, heavy industrial plants and civic works,
          delivered to a single standard from survey to handover.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduced ? 0 : 0.6 }}
          className="mt-[clamp(2.5rem,5vw,4.5rem)] grid grid-cols-2 gap-x-[clamp(1rem,3vw,3rem)] gap-y-6 border-t border-[var(--line)] pt-[clamp(1.25rem,2.5vw,2rem)] sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-bold"
                style={{ color: "#FFFFFF" }}
              >
                {stat.value}
              </span>
              <span className="font-mono text-[clamp(0.68rem,0.8vw,0.78rem)] text-[rgba(245,242,234,0.5)]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LandmarkRow({ project, index }) {
  const reversed = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 gap-6 border-t border-[var(--line)] py-[clamp(2rem,4vw,3.5rem)] first:border-t-0 md:grid-cols-12 md:gap-10"
    >
      <div
        className={`md:col-span-7 ${reversed ? "md:order-2" : "md:order-1"}`}
      >
        <div className="relative aspect-[16/10] w-full  bg-[var(--line-soft)]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div
        className={`flex flex-col justify-center gap-3 md:col-span-5 ${
          reversed ? "md:order-1" : "md:order-2"
        }`}
      >
        <span className="font-mono text-[clamp(0.68rem,0.75vw,0.8rem)] text-[var(--brass)]">
          {`No. ${String(project.num).padStart(2, "0")}`}
        </span>
        <h3 className="font-display text-[clamp(1.3rem,2vw,1.9rem)] font-bold leading-snug text-[var(--ink)]">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-[clamp(0.8rem,0.9vw,0.9rem)] text-[var(--steel)]">
          <IconPin className="text-[var(--brass)]" />
          <span>{project.location}</span>
        </div>
        <p className="mt-1 max-w-[42ch] font-body text-[clamp(0.85rem,0.95vw,0.98rem)] leading-relaxed text-[rgba(21,20,15,0.7)]">
          {project.scope}
        </p>
      </div>
    </motion.div>
  );
}

function ContractRow({ contract }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 gap-x-6 gap-y-2 border-t border-[var(--line)] py-[clamp(1rem,1.8vw,1.4rem)] md:grid-cols-[1.6fr_1fr_0.9fr_0.9fr] md:items-center"
    >
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[clamp(0.65rem,0.7vw,0.72rem)] tracking-wide text-[var(--brass)]">
          {contract.client}
          {contract.code ? ` \u00b7 ${contract.code}` : ""}
        </span>
        <span className="font-display text-[clamp(0.95rem,1.05vw,1.05rem)] font-semibold text-[var(--ink)]">
          {contract.title}
        </span>
      </div>

      <div className="flex items-center gap-1.5 text-[clamp(0.8rem,0.85vw,0.85rem)] text-[var(--steel)]">
        <IconPin className="text-[var(--brass)]" />
        <span>{contract.location}</span>
      </div>

      <div>
        <span className="inline-block border border-[var(--line)] px-2 py-0.5 font-mono text-[clamp(0.65rem,0.7vw,0.72rem)] text-[var(--steel)]">
          {contract.category}
        </span>
      </div>

      <div className="font-body text-[clamp(0.8rem,0.85vw,0.85rem)] text-[rgba(21,20,15,0.7)] md:text-right">
        {contract.authority}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const reduced = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredContracts = useMemo(() => {
    if (activeCategory === "All") return completedContracts;
    return completedContracts.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <div
      style={TOKENS}
      className="min-h-screen bg-[var(--paper)] font-body text-[var(--ink)]"
    >
      <Hero reduced={reduced} />

      <section id="ongoing-projects" className="mx-auto w-full max-w-[1800px] px-5 py-[clamp(3rem,6vw,6rem)] sm:px-8 md:px-12 lg:px-16">
        <h2 className="max-w-[24ch] font-display text-[clamp(1.6rem,3vw,2.6rem)] font-extrabold tracking-tight text-[var(--ink)]">
          Landmark works
        </h2>
        <p className="mt-2 max-w-[54ch] font-body text-[clamp(0.85rem,0.95vw,1rem)] text-[rgba(21,20,15,0.6)]">
          A selection of contracts that shaped how people and freight move
          across the region.
        </p>

        <div className="mt-[clamp(1.5rem,3vw,2.5rem)]">
          {landmarkProjects.map((project, index) => (
            <LandmarkRow key={project.num} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="completed-projects" className="border-t border-[var(--line)] bg-[rgba(21,20,15,0.02)]">
        <div className="mx-auto w-full max-w-[1800px] px-5 py-[clamp(3rem,6vw,6rem)] sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-extrabold tracking-tight text-[var(--ink)]">
                Executed contracts
              </h2>
              <p className="mt-2 max-w-[54ch] font-body text-[clamp(0.85rem,0.95vw,1rem)] text-[rgba(21,20,15,0.6)]">
                Every contract on record, filed by scope of work.
              </p>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout>
              {filteredContracts.map((contract) => (
                <ContractRow key={contract.id} contract={contract} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto flex w-full max-w-[1800px] flex-col items-start gap-4 px-5 py-[clamp(3rem,6vw,5rem)] sm:px-8 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
          <div className="flex items-center gap-2">
            <IconMark className="text-[var(--brass)]" />
            <p className="font-display text-[clamp(1.1rem,1.6vw,1.5rem)] font-bold text-[var(--ink)]">
              Building what comes next.
            </p>
          </div>
          <p className="max-w-[40ch] font-body text-[clamp(0.85rem,0.9vw,0.95rem)] text-[rgba(21,20,15,0.6)]">
            Get in touch to discuss a new highway, dock or industrial contract.
          </p>
        </div>
      </section>
    </div>
  );
}
