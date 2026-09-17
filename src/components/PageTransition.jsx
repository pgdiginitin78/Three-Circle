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
    if (!target || target === 'hero' || target === 'overview') {
      if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }
    const el = document.getElementById(target);
    if (el) {
      const isFullscreenDesktopSection =
        (el.classList.contains('arch__info') || el.clientHeight >= window.innerHeight * 0.85) &&
        window.innerWidth >= 769;
      const offset = isFullscreenDesktopSection ? 0 : -80;

      if (lenisInstance) {
        lenisInstance.scrollTo(el, { offset, duration: 1.0 });
      } else {
        const targetY = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      }
    }
  };

  const navigateTo = (path, scrollTarget = null) => {
    const currentPath = pathnameRef.current;

    if (currentPath === path) {
      // Already on this page — just scroll to section
      scrollToTarget(scrollTarget);
      return;
    }

    // Immediately reset scroll to top before page change to avoid showing previous page scroll position
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Navigate to new page
    navigate(path);

    // If navigating to a sub-section deeper on the page (not the hero/overview)
    if (scrollTarget && scrollTarget !== 'hero' && scrollTarget !== 'overview') {
      setTimeout(() => scrollToTarget(scrollTarget), 150);
      setTimeout(() => scrollToTarget(scrollTarget), 400);
    }
  };

  return (
    <TransitionContext.Provider value={{ navigateTo, isPending: false }}>
      {children}
    </TransitionContext.Provider>
  );
};
