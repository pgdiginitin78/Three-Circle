import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import Logo from "../assets/logo/Logo.png";
import { ArrowRight } from "./Icons";
import { useTransition } from "./PageTransition";
import ScrollProgressBar from "./ScrollProgressBar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const { navigateTo } = useTransition();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setOpenSubMenu(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const handleNavClick = (path, target) => {
    setIsDrawerOpen(false);
    navigateTo(path, target);
  };

  const navItems = [
    { label: "Home", path: "/", target: "hero" },
    {
      label: "About Us",
      path: "/about",
      target: null,
      activePrefix: "/about",
      subItems: [
        { label: "Company Overview", path: "/about", target: "overview" },
        { label: "Our History", path: "/about", target: "history" },
        { label: "Leadership", path: "/about", target: "leadership" },
        { label: "Safety & Quality", path: "/about", target: "safety" },
        { label: "Our Strength", path: "/about", target: "strength" },
      ],
    },
    {
      label: "Services",
      path: "/services/building",
      target: null,
      activePrefix: "/services",
      subItems: [
        { label: "Building Industry", path: "/services/building", target: null },
        { label: "Infrastructure", path: "/services/infrastructure", target: null },
        { label: "Mining & Crushing", path: "/services/mining", target: null },
        { label: "Excavation", path: "/services/excavation", target: null },
      ],
    },
    {
      label: "Projects",
      path: "/projects",
      target: null,
      activePrefix: "/projects",
      subItems: [
        { label: "All Projects", path: "/projects", target: "all-projects" },
        { label: "Ongoing Projects", path: "/projects", target: "ongoing-projects" },
        { label: "Completed Projects", path: "/projects", target: "completed-projects" },
      ],
    },
    {
      label: "Plant & Machinery",
      path: "/plant-machinery",
      target: null,
      activePrefix: "/plant-machinery",
      subItems: [
        { label: "Equipment Overview", path: "/plant-machinery", target: "overview" },
        { label: "Construction Equipment", path: "/plant-machinery", target: "construction" },
        { label: "Concrete Equipment", path: "/plant-machinery", target: "concrete" },
        { label: "Hauling & Transport", path: "/plant-machinery", target: "hauling" },
        { label: "Asphalt & Crushing", path: "/plant-machinery", target: "asphalt" },
        { label: "Quality Control", path: "/plant-machinery", target: "quality" },
        { label: "Tools & Accessories", path: "/plant-machinery", target: "tools" },
      ],
    },
    {
      label: "Our Company",
      path: "/our-company",
      target: null,
      activePrefix: "/our-company",
      subItems: [
        { label: "Achievements", path: "/our-company/achievements", target: null },
        { label: "Major Associates", path: "/our-company/associates", target: null },
        { label: "Our Clients", path: "/our-company/clients", target: null },
        { label: "Accreditations", path: "/our-company/accreditations", target: null },
      ],
    },
  ];

  const isItemActive = (item) => {
    if (item.activePrefix) {
      return location.pathname.startsWith(item.activePrefix);
    }
    if (item.path === "/")
      return location.pathname === "/" && item.target === "hero";
    return location.pathname.startsWith(item.path);
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      <ScrollProgressBar />
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[9999] flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled
            ? "h-14 sm:h-18 px-4 sm:px-8 lg:px-12 bg-white/95 backdrop-blur-2xl border-b border-brand-darkblue/5 shadow-sm"
            : "h-16 sm:h-20 px-5 sm:px-10 lg:px-16 bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-sm"
          }`}
      >
        <button
          className="flex items-center cursor-pointer select-none hover:opacity-85 transition-opacity shrink-0"
          onClick={() => handleNavClick("/", "hero")}
        >
          <img
            src={Logo}
            alt="3 Circles Logo"
            className="h-10 md:h-16 2xl:h-16 w-auto object-contain"
          />
        </button>
        <div className="hidden lg:flex flex-1 items-center justify-center gap-1 px-4">
          {navItems.map((item, index) => {
            const active = isItemActive(item);
            const isHoveredSubmenu = hoveredIndex === index && item.subItems;

            return (
              <div
                key={item.label}
                className="relative group h-full flex items-center py-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  className={`relative flex flex-col items-center justify-center gap-1 px-4 py-2 xl:px-5 rounded-full cursor-pointer select-none transition-all duration-300 ${isHoveredSubmenu ? "bg-brand-darkblue" : "hover:bg-brand-darkblue/5"
                    }`}
                  onClick={() => !item.subItems && handleNavClick(item.path, item.target)}
                >
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`whitespace-nowrap font-display text-[12px] xl:text-[13px] font-bold tracking-wide transition-colors duration-300 ${active && !isHoveredSubmenu
                          ? "text-brand-gold"
                          : isHoveredSubmenu
                            ? "text-white"
                            : "text-brand-darkblue group-hover:text-brand-darkblue/70"
                        }`}
                    >
                      {item.label}
                    </span>
                    {item.subItems && (
                      <svg
                        viewBox="0 0 10 6"
                        className={`w-2.5 h-2.5 transition-all duration-300 ${active && !isHoveredSubmenu
                            ? "text-brand-gold"
                            : isHoveredSubmenu
                              ? "text-white rotate-180"
                              : "text-brand-darkblue group-hover:text-brand-darkblue/70"
                          }`}
                        fill="none"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`absolute -bottom-2 h-0.5 rounded-full bg-brand-gold transition-all duration-300 ${active
                        ? "w-5 opacity-100"
                        : hoveredIndex === index
                          ? "w-5 opacity-60"
                          : "w-0 opacity-0"
                      }`}
                  />
                </button>

                {item.subItems && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-md border border-white/80 rounded-2xl shadow-xl p-2 min-w-55 flex flex-col gap-1">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => handleNavClick(subItem.path, subItem.target)}
                          className="text-left px-4 py-2.5 whitespace-nowrap font-display text-[11px] font-bold tracking-wide text-text-secondary hover:bg-brand-gold/10 hover:text-brand-gold rounded-xl transition-colors duration-200"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <span className="w-px h-6 bg-brand-darkblue/10" />
          <button
            onClick={() => handleNavClick("/contact", null)}
            className="flex items-center gap-1.5 h-10 xl:h-11 px-5 xl:px-6 rounded-full bg-text-primary text-white font-display text-[11px] xl:text-[12px] font-bold tracking-wide cursor-pointer hover:bg-brand-gold transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <button
          className={`lg:hidden flex flex-col gap-1 w-10 h-10 items-center justify-center shrink-0 cursor-pointer rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-sm active:scale-95 transition-all`}
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-4 h-[1.5px] bg-text-primary transition-all duration-300 origin-center ${isDrawerOpen ? "translate-y-[5.5px] rotate-45" : ""}`}
          />
          <span
            className={`w-4 h-[1.5px] bg-text-primary transition-all duration-300 ${isDrawerOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`w-4 h-[1.5px] bg-text-primary transition-all duration-300 origin-center ${isDrawerOpen ? "-translate-y-[5.5px] -rotate-45" : ""}`}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-brand-darkblue/20 backdrop-blur-sm z-9997 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsDrawerOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-screen w-[86%] max-w-sm bg-white/80 backdrop-blur-3xl z-9998 flex flex-col border-l border-white/60 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-3 flex flex-col justify-evenly">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-px bg-brand-darkblue/15 ${i % 3 === 0 ? "w-3" : "w-1.5"}`}
                  />
                ))}
              </div>

              <div className="flex-1 overflow-y-auto pt-24 pb-6 pl-8 pr-6 flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const active = isItemActive(item);
                  const isSubMenuOpen = openSubMenu === item.label;
                  return (
                    <div
                      key={item.label}
                      className="border-b border-brand-darkblue/6"
                    >
                      <motion.button
                        className={`w-full group flex items-center justify-between py-3 text-left cursor-pointer transition-colors duration-200 ${active
                            ? "text-brand-gold"
                            : "text-text-secondary hover:text-text-primary"
                          }`}
                        onClick={() => {
                          if (item.subItems) {
                            setOpenSubMenu(isSubMenuOpen ? null : item.label);
                          } else {
                            handleNavClick(item.path, item.target);
                          }
                        }}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.08 + i * 0.03,
                          ease: [0.16, 1, 0.3, 1],
                          duration: 0.3,
                        }}
                      >
                        <span className="font-display text-base sm:text-lg font-bold tracking-tight">
                          {item.label}
                        </span>
                        {item.subItems ? (
                          <span
                            className={`text-[10px] transition-transform duration-300 ${isSubMenuOpen ? "rotate-180" : ""}`}
                          >
                            ▼
                          </span>
                        ) : active ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 text-brand-darkblue/25 group-hover:text-brand-gold transition-colors" />
                        )}
                      </motion.button>

                      <AnimatePresence>
                        {item.subItems && isSubMenuOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-1 pb-3 pl-2"
                          >
                            {item.subItems.map((subItem) => (
                              <button
                                key={subItem.label}
                                className="text-left py-1.5 font-display text-[12px] font-bold tracking-wide text-text-secondary hover:text-brand-gold transition-colors"
                                onClick={() =>
                                  handleNavClick(subItem.path, subItem.target)
                                }
                              >
                                {subItem.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <button
                  onClick={() => handleNavClick("/contact", null)}
                  className="mt-5 flex items-center justify-center gap-2 h-12 rounded-xl bg-text-primary text-white font-display text-xs font-bold tracking-wide cursor-pointer hover:bg-brand-gold transition-colors duration-200"
                >
                  Contact Us
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="pl-8 pr-6 pb-6 pt-4 border-t border-brand-darkblue/[0.06] flex items-center justify-between">
                <span className="font-display text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase">
                  3 Circles
                </span>
                <span className="font-display text-[8px] font-medium tracking-[0.15em] text-text-secondary uppercase">
                  Engineering • Infrastructure
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>,
    document.body,
  );
}
