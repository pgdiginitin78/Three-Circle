import React, { createContext, useContext, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const lenis = useLenis();

  // Use a ref so navigateTo always has the LATEST pathname (no stale closure)
  const pathnameRef = useRef(location.pathname);
  useEffect(() => {
    pathnameRef.current = location.pathname;
  }, [location.pathname]);

  const lenisRef = useRef(lenis);
  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  const scrollToTarget = (target) => {
    const lenisInstance = lenisRef.current;
    if (!target) {
      if (lenisInstance) lenisInstance.scrollTo(0, { duration: 0.8 });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(target);
    if (el) {
      if (lenisInstance) lenisInstance.scrollTo(el, { offset: -80, duration: 1.2 });
      else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateTo = (path, scrollTarget = null) => {
    const currentPath = pathnameRef.current;

    if (currentPath === path) {
      // Already on this page — just scroll to section
      scrollToTarget(scrollTarget);
      return;
    }

    // Navigate to new page first
    navigate(path);

    // Wait for React to finish rendering the new page, then scroll
    if (scrollTarget) {
      setTimeout(() => scrollToTarget(scrollTarget), 250);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <TransitionContext.Provider value={{ navigateTo, isPending: false }}>
      {children}
    </TransitionContext.Provider>
  );
};
