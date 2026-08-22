import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layouts/Navbar";
import { MatrixCircuitBackground } from "./components/ui/MatrixCircuitBackground";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";
import Publications from "./pages/Publications";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css"; // Core requirement for Tailwind styles to load!

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-retroBg text-darkText font-sans selection:bg-retroYellow transition-colors duration-300 relative">
        <MatrixCircuitBackground />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
