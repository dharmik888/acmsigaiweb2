import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";
import Publications from "./pages/Publications";
import EventDetails from "./pages/EventDetails.jsx";
import AcmBytes from "./pages/AcmBytes.jsx";
import Footer from "./components/layouts/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import "./index.css";

import { CustomCursor } from "./components/ui/CustomCursor";
import { PeekingRobot } from "./components/ui/PeekingRobot";
import Preloader from "./components/ui/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* MAIN WEBSITE */}
      <div className="min-h-screen bg-paper-grid text-black font-sans selection:bg-retroYellow">
        <Navbar />
        <ScrollToTop />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/acm-bytes" element={<AcmBytes />} />
          </Routes>
        </main>

        <PeekingRobot />
        <Footer />
      </div>
    </Router>
  );
}
