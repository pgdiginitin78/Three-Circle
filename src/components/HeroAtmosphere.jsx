import React from "react";
import { motion } from "framer-motion";

export default function HeroAtmosphere() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-[1]">
      {/* 1. REALISTIC HIGHWAY TRAFFIC FLOW (STREAMING CAR LIGHT TRAILS ALONG HIGHWAY CURVES) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          {/* Headlight Gold/White Gradient */}
          <linearGradient id="headlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFE066" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFF2A3" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>

          {/* Taillight Ruby Red Gradient */}
          <linearGradient id="taillightGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FF1E1E" stopOpacity="0" />
            <stop offset="60%" stopColor="#FF3333" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FF6666" stopOpacity="1" />
          </linearGradient>

          {/* Traffic Glow Filter */}
          <filter id="trafficGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- HIGHWAY LANE 1: MAIN LOWER OVERPASS (LEFT TO RIGHT - GOLD/WHITE HEADLIGHTS) --- */}
        <path
          d="M 680 1080 C 820 980, 1050 860, 1260 810 C 1420 770, 1620 740, 1920 710"
          stroke="url(#headlightGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#trafficGlow)"
          className="traffic-flow-lane-1 opacity-80"
        />
        <path
          d="M 690 1080 C 830 975, 1060 855, 1270 805 C 1430 765, 1630 735, 1920 705"
          stroke="#FFF2A3"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="24 65"
          filter="url(#trafficGlow)"
          className="traffic-particles-lane-1"
        />

        {/* --- HIGHWAY LANE 2: ELEVATED INTERCHANGE FLYOVER (RIGHT TO LEFT - RUBY RED TAILLIGHTS) --- */}
        <path
          d="M 1920 680 C 1680 710, 1420 750, 1220 800 C 1040 850, 840 940, 650 1080"
          stroke="url(#taillightGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#trafficGlow)"
          className="traffic-flow-lane-2 opacity-85"
        />
        <path
          d="M 1920 675 C 1675 705, 1415 745, 1215 795 C 1035 845, 835 935, 645 1080"
          stroke="#FF2A2A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="18 55"
          filter="url(#trafficGlow)"
          className="traffic-particles-lane-2"
        />

        {/* --- HIGHWAY LANE 3: SWEEPING CURVED BRIDGE OVERPASS (LEFT TO RIGHT) --- */}
        <path
          d="M 720 920 C 920 860, 1180 810, 1380 770 C 1580 730, 1780 700, 1920 680"
          stroke="url(#headlightGrad)"
          strokeWidth="3"
          strokeDasharray="20 45"
          filter="url(#trafficGlow)"
          className="traffic-particles-lane-3 opacity-90"
        />

        {/* --- HIGHWAY LANE 4: INNER CLOVERLEAF RAMP (RIGHT TO LEFT) --- */}
        <path
          d="M 1750 790 C 1520 830, 1320 890, 1180 950 C 1060 1000, 940 1040, 820 1080"
          stroke="url(#taillightGrad)"
          strokeWidth="2.5"
          strokeDasharray="16 48"
          filter="url(#trafficGlow)"
          className="traffic-particles-lane-4 opacity-80"
        />
      </svg>

      {/* 2. ACTIVE CONSTRUCTION CRANES & BLINKING AVIATION BEACONS ON TOWERS */}
      {/* Crane 1: Center Construction Skyscraper (Top Right Area) */}
      <div className="absolute right-[32%] top-[31%] hidden md:block">
        {/* Rotating Crane Jib Arm Silhouette */}
        <motion.div
          className="relative w-28 h-0.5 bg-accent-gold/60 origin-left"
          animate={{ rotate: [-25, 20, -25] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Hoist Line */}
          <div className="absolute right-4 top-0 w-[1px] h-6 bg-accent-gold/40" />
          <div className="absolute right-3.5 top-6 w-1 h-1 bg-accent-gold rounded-full shadow-[0_0_8px_#D4AF37]" />
        </motion.div>
        {/* Red Aviation Warning Beacon on Crane Top */}
        <span className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-red-500 animate-ping opacity-90" />
        <span className="absolute -left-0.5 -top-0.5 w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_6px_#FF0000]" />
      </div>

      {/* Crane 2: Right Construction Skyscraper */}
      <div className="absolute right-[22%] top-[34%] hidden md:block">
        <motion.div
          className="relative w-24 h-0.5 bg-accent-gold/50 origin-left"
          animate={{ rotate: [15, -30, 15] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute right-6 top-0 w-[1px] h-5 bg-accent-gold/40" />
        </motion.div>
        <span className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-red-500 animate-ping opacity-90" />
        <span className="absolute -left-0.5 -top-0.5 w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_6px_#FF0000]" />
      </div>

      {/* Spire Beacon on Center Tall Tower */}
      <div className="absolute right-[46.5%] top-[8%] hidden md:block">
        <span className="absolute -left-1 -top-1 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping opacity-80" />
        <span className="absolute left-0 top-0 w-1 h-1 rounded-full bg-red-400 shadow-[0_0_8px_#FF0000]" />
      </div>

      {/* 3. SUBTLE INTERMITTENT WELDING SPARK GLINTS ON CONSTRUCTION FLOORS */}
      <div className="absolute right-[33.5%] top-[45%] hidden md:block">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-sky-200 shadow-[0_0_12px_#7DD3FC]"
          animate={{ opacity: [0, 0.9, 0.2, 1, 0, 0, 0.8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute right-[24%] top-[48%] hidden md:block">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-amber-200 shadow-[0_0_10px_#FDE68A]"
          animate={{ opacity: [0, 0, 0.8, 0, 0.9, 0.1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      {/* 4. HORIZONTAL ATMOSPHERIC TWILIGHT LIGHT SWEEP (SWEEPING LEFT TO RIGHT) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-gold/[0.08] to-transparent w-[35%] h-full pointer-events-none"
        animate={{ x: ["-100%", "350%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
      />
    </div>
  );
}
