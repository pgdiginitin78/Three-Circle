import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTransition } from "./PageTransition";
import ScrollProgressBar from "./ScrollProgressBar";
import { ArrowRight } from "./Icons";
import Logo from "../assets/logo/Logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const { navigateTo } = useTransition();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (path, target) => {
    setIsMobileOpen(false);
    navigateTo(path, target);
  };

  const navItems = [
    { label: "HOME", path: "/", target: "hero", num: "01" },
    { label: "ABOUT", path: "/about-us", target: null, num: "02" },
    { label: "SERVICES", path: "/", target: "services", num: "03" },
    { label: "PROJECTS", path: "/projects", target: null, num: "04" },
    { label: "CAPABILITIES", path: "/", target: "capabilities", num: "05" },
    { label: "CONTACT", path: "/contact", target: null, num: "06" },
  ];

  const isItemActive = (item) => {
    if (item.path === "/about-us")
      return (
        location.pathname === "/about-us" || location.pathname === "/about"
      );
    if (item.path === "/projects") return location.pathname === "/projects";
    if (item.path === "/contact") return location.pathname === "/contact";
    if (item.path === "/" && item.target === "hero")
      return location.pathname === "/";
    return false;
  };

  return (
    <>
      <ScrollProgressBar />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-[9999] left-1/2 -translate-x-1/2 flex items-center  justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "top-2.5 sm:top-3.5 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] max-w-5xl h-12 sm:h-13 xl:max-w-350 2xl:max-w-360 2xl:h-20 px-4 sm:px-6 bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_12px_32px_0_rgba(0,0,0,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.9)]"
            : "top-3 sm:top-4.5 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] max-w-7xl xl:max-w-[1540px] h-13 sm:h-15 2xl:h-24 px-4 sm:px-7 bg-white/45 backdrop-blur-2xl border border-white/60 shadow-[0_8px_24px_0_rgba(0,0,0,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.85)]"
        } rounded-full`}
      >
        <button
          className="flex items-center gap-1 font-displa font-extrabold text-sm sm:text-base tracking-[0.2em] text-text-primary cursor-pointer select-none shrink-0 hover:opacity-85 transition-opacity"
          onClick={() => handleNavClick("/", "hero")}
        >
          <img
            src={Logo}
            alt="3 Circles Logo"
            className="h-16 md:h-16 2xl:h-24 w-auto object-contain"
          />
        </button>

        <div
          className="hidden lg:flex items-center gap-1 bg-black/[0.03] backdrop-blur-md p-1 rounded-full border border-white/50 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, index) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.label}
                className={`relative font-display text-[9px] xl:text-[10px] 2xl:text-[12px] font-extrabold tracking-[0.2em] transition-colors duration-200 py-1.5 px-3 xl:px-3.5 rounded-full cursor-pointer select-none ${
                  active
                    ? "text-accent-gold font-black"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => handleNavClick(item.path, item.target)}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <span className="relative z-10">{item.label}</span>
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-white/95 backdrop-blur-md shadow-sm border border-white/80 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {active && hoveredIndex === null && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 bg-white/95 backdrop-blur-md shadow-sm border border-white/80 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.button
          className="hidden lg:inline-flex items-center justify-center font-display text-[9px] xl:text-[10px] 2xl:text-[12px] font-extrabold tracking-[0.2em] py-2 px-4.5 xl:px-5 rounded-full bg-text-primary text-white border border-text-primary hover:bg-accent-gold hover:border-accent-gold hover:text-text-primary transition-all duration-300 select-none shrink-0 cursor-pointer shadow-sm"
          onClick={() => handleNavClick("/contact", null)}
          whileTap={{ scale: 0.96 }}
        >
          GET IN TOUCH
        </motion.button>

        <button
          className="flex flex-col gap-1 w-8 h-8 sm:w-9 sm:h-9 items-center justify-center lg:hidden z-[10000] shrink-0 cursor-pointer rounded-full bg-white/70 backdrop-blur-md border border-white/70 shadow-sm hover:bg-white/90 active:scale-95 transition-all"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-3.5 h-[1.5px] bg-text-primary transition-all duration-300 origin-center ${isMobileOpen ? "translate-y-[5.5px] rotate-45" : ""}`}
          />
          <span
            className={`w-3.5 h-[1.5px] bg-text-primary transition-all duration-300 ${isMobileOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`w-3.5 h-[1.5px] bg-text-primary transition-all duration-300 origin-center ${isMobileOpen ? "-translate-y-[5.5px] -rotate-45" : ""}`}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-white/85 backdrop-blur-3xl z-[9998] flex flex-col justify-between pt-20 pb-8 px-6 sm:px-10 overflow-y-auto border border-white/50"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-1 my-auto max-w-sm w-full">
              {navItems.map((item, i) => {
                const active = isItemActive(item);
                return (
                  <motion.button
                    key={item.label}
                    className={`group flex items-center justify-between py-3 border-b border-black/[0.06] text-left cursor-pointer transition-all duration-200 ${
                      active
                        ? "text-accent-gold font-black"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                    onClick={() => handleNavClick(item.path, item.target)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                      duration: 0.3,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] font-bold text-accent-gold/80 tracking-widest">
                        {item.num}
                      </span>
                      <span className="font-display text-lg sm:text-xl font-bold tracking-tight uppercase group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>
                    </div>
                    {active ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-black/25 group-hover:text-accent-gold transition-colors" />
                    )}
                  </motion.button>
                );
              })}

              <motion.div
                className="pt-5"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 + navItems.length * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                  duration: 0.3,
                }}
              >
                <button
                  className="w-full font-display text-[10px] font-extrabold tracking-[0.2em] py-3.5 px-6 bg-text-primary text-white rounded-full hover:bg-accent-gold hover:text-text-primary transition-all duration-300 cursor-pointer shadow-md text-center"
                  onClick={() => handleNavClick("/contact", null)}
                >
                  GET IN TOUCH
                </button>
              </motion.div>
            </div>

            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
              <span className="font-display text-[9px] font-bold tracking-[0.2em] text-accent-gold uppercase">
                3 Circles
              </span>
              <span className="font-display text-[8px] font-medium tracking-[0.15em] text-text-secondary uppercase">
                Engineering • Infrastructure
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
