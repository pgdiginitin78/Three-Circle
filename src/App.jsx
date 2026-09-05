import { ReactLenis } from "lenis/react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { TransitionProvider } from "./components/PageTransition";
import Home from "./pages/Home";

import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";

// About Us Imports
import History from "./pages/AboutUs/History";
import Leadership from "./pages/AboutUs/Leadership";
import Overview from "./pages/AboutUs/Overview";
import Safety from "./pages/AboutUs/Safety";
import Strength from "./pages/AboutUs/Strength";

// Services Imports
import Building from "./pages/Services/Building";
import Excavation from "./pages/Services/Excavation";
import Infrastructure from "./pages/Services/Infrastructure";
import Mining from "./pages/Services/Mining";

// Our Company Imports
import AboutUs from "./pages/AboutUs/AboutUs";
import Accreditations from "./pages/OurCompany/Accreditations";
import Achievements from "./pages/OurCompany/Achievements";
import Associates from "./pages/OurCompany/Associates";
import Clients from "./pages/OurCompany/Clients";
import PlantMachinary from "./pages/PlantMachinery/PlantMachinary";

function AppContent() {
  return (
    <ReactLenis root>
      <Navbar />
      <main style={{ position: "relative", zIndex: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* About Us Routes */}
          <Route path="/about-us/overview" element={<Overview />} />
          <Route path="/about-us/history" element={<History />} />
          <Route path="/about-us/leadership" element={<Leadership />} />
          <Route path="/about-us/safety" element={<Safety />} />
          <Route path="/about-us/strength" element={<Strength />} />

          {/* Services Routes */}
          <Route path="/services" element={<Navigate to="/services/building" replace />} />
          <Route path="/services/building" element={<Building />} />
          <Route path="/services/infrastructure" element={<Infrastructure />} />
          <Route path="/services/mining" element={<Mining />} />
          <Route path="/services/excavation" element={<Excavation />} />

          {/* Projects Routes */}
          <Route path="/projects/all" element={<ProjectsPage />} />

          {/* Plant & Machinery Routes */}
          <Route
            path="/plant-machinery"
            element={<PlantMachinary />}
          />


          {/* Our Company Routes */}
          <Route path="/our-company" element={<Navigate to="/our-company/achievements" replace />} />
          <Route path="/our-company/achievements" element={<Achievements />} />
          <Route path="/our-company/associates" element={<Associates />} />
          <Route path="/our-company/clients" element={<Clients />} />
          <Route
            path="/our-company/accreditations"
            element={<Accreditations />}
          />

          {/* Catch-all 404 Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default function App() {
  return (
    <Router>
      <TransitionProvider>
        <AppContent />
      </TransitionProvider>
    </Router>
  );
}
