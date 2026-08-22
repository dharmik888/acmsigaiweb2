import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";
import Publications from "./pages/Publications";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Preloader from "./components/ui/Preloader";
import FloatingBottomNav from "./components/ui/FloatingBottomNav";
import StickerTicker from "./components/ui/StickerTicker";
import "./index.css";

function AppContent() {
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowBottomNav(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePreloaderComplete = () => {
    setPreloaderDone(true);
    navigate("/");
  };

  return (
    <>
      {!preloaderDone && <Preloader onComplete={handlePreloaderComplete} />}
      <div className="min-h-screen bg-paper-grid text-black font-sans selection:bg-retroYellow transition-colors duration-300">
        <StickerTicker />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <FloatingBottomNav isVisible={showBottomNav} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
