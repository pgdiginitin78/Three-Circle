import React from "react";
import { ReactLenis } from "lenis/react";
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
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
import PlantMachinary from "./pages/PlantMachinery/PlantMachinary";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Page error caught by boundary:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#0B1120", color: "#fff", fontFamily: "Outfit, sans-serif" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>Something went wrong</h2>
          <button
            onClick={() => { this.setState({ hasError: false }); window.location.href = "/"; }}
            style={{ padding: "0.75rem 2rem", background: "#C9A84C", color: "#fff", border: "none", borderRadius: "999px", fontWeight: 700, cursor: "pointer", fontSize: "0.875rem" }}
          >
            Go to Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppContent() {
  const location = useLocation();
  return (
    <ReactLenis root>
      <Navbar />
      <main style={{ position: "relative", zIndex: 2 }}>
        <ErrorBoundary key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
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
            <Route path="/our-company" element={<Navigate to="/our-company/achievements" replace />} />
            <Route path="/our-company/achievements" element={<Achievements />} />
            <Route path="/our-company/associates" element={<Associates />} />
            <Route path="/our-company/clients" element={<Clients />} />
            <Route path="/our-company/accreditations" element={<Accreditations />} />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ErrorBoundary>
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
