import React, { createContext, useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { motion, AnimatePresence } from 'framer-motion';

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const lenis = useLenis();

  const navigateTo = (path, scrollTarget = null) => {
    if (location.pathname === path && scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -70, duration: 1.2 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        if (lenis) lenis.scrollTo(0, { duration: 0.8 });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (path === '/' && scrollTarget && location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(scrollTarget);
        if (el) {
          if (lenis) lenis.scrollTo(el, { offset: -70, duration: 1 });
          else el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

    setIsPending(true);
    setTimeout(() => {
      navigate(path);
      if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo({ top: 0, behavior: 'auto' });
      setTimeout(() => {
        setIsPending(false);
      }, 350);
    }, 300);
  };

  return (
    <TransitionContext.Provider value={{ navigateTo, isPending }}>
      {children}
      <AnimatePresence mode="wait">
        {isPending && <PageTransitionOverlay />}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};

const PageTransitionOverlay = () => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#111111',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transformOrigin: 'top'
      }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.1, duration: 0.2 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <span style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 800,
          fontSize: '2rem',
          letterSpacing: '0.25em',
          color: '#FFFFFF'
        }}>
          3 CIRCLES
        </span>
        <div style={{
          width: '50px',
          height: '2px',
          backgroundColor: '#D4AF37',
          marginTop: '12px'
        }} />
      </motion.div>
    </motion.div>
  );
};
