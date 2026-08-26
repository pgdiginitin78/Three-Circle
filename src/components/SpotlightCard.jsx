import React, { useRef, useCallback } from 'react';

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(212,175,55,0.12)' }) {
  const divRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty('--spotlight-x', `${x}px`);
    divRef.current.style.setProperty('--spotlight-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!divRef.current) return;
    divRef.current.style.setProperty('--spotlight-x', '50%');
    divRef.current.style.setProperty('--spotlight-y', '50%');
  }, []);

  return (
    <div
      ref={divRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--spotlight-x': '50%',
        '--spotlight-y': '50%',
        '--spotlight-color': spotlightColor,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-[inherit]"
        style={{
          background: `radial-gradient(350px circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color), transparent 70%)`,
          opacity: 1,
        }}
      />
      {children}
    </div>
  );
}
