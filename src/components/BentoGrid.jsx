import React from "react";
import { motion } from "framer-motion";

export function BentoGrid({ children, className = "" }) {
  return (
    <div
      className={`grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className = "",
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm border border-brand-darkblue/[0.08] p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)] hover:border-brand-gold/40 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default BentoGrid;
