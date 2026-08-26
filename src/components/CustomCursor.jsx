import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 450, mass: 0.3 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      const match = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
      setIsMobile(match);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]');
      if (cursorAttr) {
        setCursorType(cursorAttr.getAttribute('data-cursor'));
        return;
      }

      const interactive = target.closest('a, button, [role="button"]');
      if (interactive) {
        setCursorType('pointer');
        return;
      }

      setCursorType('default');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  const getStyle = () => {
    switch (cursorType) {
      case 'pointer':
        return {
          width: 32,
          height: 32,
          backgroundColor: 'rgba(212, 175, 55, 0.15)',
          border: '1px solid var(--accent-gold)'
        };
      case 'view':
        return {
          width: 70,
          height: 70,
          backgroundColor: '#111111',
          border: 'none'
        };
      case 'explore':
        return {
          width: 75,
          height: 75,
          backgroundColor: 'var(--accent-gold)',
          border: 'none'
        };
      default:
        return {
          width: 8,
          height: 8,
          backgroundColor: 'var(--text-primary)',
          border: 'none'
        };
    }
  };

  const currentStyle = getStyle();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        borderRadius: '50%',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
      animate={{
        width: currentStyle.width,
        height: currentStyle.height,
        backgroundColor: currentStyle.backgroundColor,
        border: currentStyle.border
      }}
      transition={{ type: 'spring', damping: 35, stiffness: 400 }}
    >
      {(cursorType === 'view' || cursorType === 'explore') && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '9px',
            fontWeight: 800,
            letterSpacing: '0.15em',
            color: cursorType === 'view' ? '#FFFFFF' : '#111111'
          }}
        >
          {cursorType.toUpperCase()}
        </motion.span>
      )}
    </motion.div>
  );
}
