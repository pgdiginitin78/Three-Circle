import React from 'react';
import { motion } from 'framer-motion';

export function WordReveal({ text, className = '', delay = 0 }) {
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span>{word}</span>
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function CharReveal({ text, className = '', delay = 0 }) {
  const chars = text.split('');

  return (
    <span className={`inline-block ${className}`}>
      {chars.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.02,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span>{char === ' ' ? '\u00A0' : char}</span>
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function FadeUpText({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
