import React, { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { TransitionProvider } from "./components/PageTransition";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Building from "./pages/Services/Building";
import Excavation from "./pages/Services/Excavation";
import Infrastructure from "./pages/Services/Infrastructure";
import Mining from "./pages/Services/Mining";
import Accreditations from "./pages/OurCompany/Accreditations";
import Achievements from "./pages/OurCompany/Achievements";
import Associates from "./pages/OurCompany/Associates";
import Clients from "./pages/OurCompany/Clients";
import Lexura from "./pages/OurCompany/Lexura";
import PlantMachinary from "./pages/PlantMachinery/PlantMachinary";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll immediately on route change (e.g. browser back/forward or direct navigation)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    // Clean up any stale ScrollTriggers from unmounted pages
    ScrollTrigger.getAll().forEach((trigger) => {
      if (!trigger.trigger || !document.body.contains(trigger.trigger)) {
        trigger.kill(true, true);
      }
    });

    // Remove any orphaned pin-spacers and hero element when navigating away from home
    if (location.pathname !== '/') {
      const hero = document.getElementById('hero');
      if (hero) hero.remove();
      const spacers = document.querySelectorAll('.pin-spacer');
      spacers.forEach((s) => s.remove());
    }

    ScrollTrigger.refresh();
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main style={{ position: "relative", zIndex: 2 }}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Services Routes */}
            <Route path="/services" element={<Navigate to="/services/building" replace />} />
            <Route path="/services/building" element={<Building />} />
            <Route path="/services/infrastructure" element={<Infrastructure />} />
            <Route path="/services/mining" element={<Mining />} />
            <Route path="/services/excavation" element={<Excavation />} />

            {/* Projects Routes */}
            <Route path="/projects/all" element={<ProjectsPage />} />

            {/* Plant & Machinery Routes */}
            <Route path="/plant-machinery" element={<PlantMachinary />} />

            {/* Our Company Routes */}
            <Route path="/our-company" element={<Navigate to="/our-company/lexura" replace />} />
            <Route path="/our-company/lexura" element={<Lexura />} />
            <Route path="/our-company/lexuraa" element={<Lexura />} />
            <Route path="/our-company/achievements" element={<Achievements />} />
            <Route path="/our-company/associates" element={<Associates />} />
            <Route path="/our-company/clients" element={<Clients />} />
            <Route path="/our-company/accreditations" element={<Accreditations />} />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ReactLenis root>
        <TransitionProvider>
          <AppContent />
        </TransitionProvider>
      </ReactLenis>
    </Router>
  );
}
