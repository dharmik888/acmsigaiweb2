import React from "react";
import { Link } from "react-router-dom";

// --- Minimal SVG Icons for the cards ---
const LightbulbIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
    <path d="M 30 50 Q 30 20 50 20 Q 70 20 70 50 Q 70 70 60 80 L 40 80 Q 30 70 30 50" fill="none" stroke="#FACC15" strokeWidth="6" />
    <path d="M 45 80 L 45 90 L 55 90 L 55 80" fill="#FACC15" />
    <line x1="50" y1="10" x2="50" y2="5" stroke="#FACC15" strokeWidth="4" />
    <line x1="30" y1="20" x2="25" y2="15" stroke="#FACC15" strokeWidth="4" />
    <line x1="70" y1="20" x2="75" y2="15" stroke="#FACC15" strokeWidth="4" />
    <circle cx="50" cy="50" r="10" fill="#FACC15" />
  </svg>
);

const CodeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
    <path d="M 35 30 L 15 50 L 35 70" fill="none" stroke="#FACC15" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 65 30 L 85 50 L 65 70" fill="none" stroke="#FACC15" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="60" y1="20" x2="40" y2="80" stroke="#FACC15" strokeWidth="8" strokeLinecap="round" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
    <circle cx="30" cy="40" r="12" fill="#FACC15" />
    <circle cx="70" cy="40" r="12" fill="#FACC15" />
    <circle cx="50" cy="30" r="14" fill="#FACC15" />
    <path d="M 10 90 Q 30 60 50 60 Q 70 60 90 90" fill="#FACC15" />
  </svg>
);

const ChartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
    <path d="M 10 90 L 90 90" stroke="#FACC15" strokeWidth="6" strokeLinecap="round" />
    <path d="M 20 80 L 40 50 L 60 60 L 90 20" fill="none" stroke="#FACC15" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 70 20 L 90 20 L 90 40" fill="none" stroke="#FACC15" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ACMLogoPlaceholder = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="bg-retroBlue rounded-full p-2 border-2 border-darkBorder">
    <text x="50" y="55" fontSize="28" fontWeight="bold" fill="#0f0f0f" textAnchor="middle">acm</text>
  </svg>
);

export default function About() {
  return (
    <div className="space-y-8 pb-16">
      
      {/* Hero Section */}
      <section className="bg-darkCard border-3 border-darkBorder rounded-3xl p-8 md:p-16 shadow-brutal-lg text-center relative overflow-hidden">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-retroYellow via-retroPink to-retroBlue rounded-t-3xl" />
        


        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

          
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter text-darkText mt-4 mb-6">
            ABOUT US
          </h1>
          
          <p className="text-lg font-bold text-darkText mb-4">
            TCET ACM SIGAI is a community of AI and Machine Learning enthusiasts dedicated to turning curiosity into innovation.
          </p>
          <p className="text-base font-bold text-darkMuted mb-4">
            Established in <strong className="text-retroYellow">January 2023</strong>, we bring together students, researchers, and tech enthusiasts to learn, experiment, collaborate, and build in the world of AI & ML.
          </p>
          <p className="text-base font-bold text-darkMuted">
            Through workshops, seminars, technical competitions, and research-driven initiatives, we create opportunities to gain practical knowledge and explore the future of Artificial Intelligence.
          </p>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Learn */}
        <div className="bg-darkCard border-3 border-darkBorder rounded-xl p-4 flex items-start gap-4">
          <div className="bg-retroGreen/20 border-2 border-darkBorder p-3 rounded-lg flex-shrink-0">
            <LightbulbIcon />
          </div>
          <div>
            <h3 className="font-black text-lg uppercase tracking-tight text-darkText">LEARN</h3>
            <p className="text-sm font-medium text-darkMuted leading-snug mt-1">Workshops, seminars and tech talks by industry experts.</p>
          </div>
        </div>

        {/* Build */}
        <div className="bg-darkCard border-3 border-darkBorder rounded-xl p-4 flex items-start gap-4 relative overflow-hidden">

          <div className="bg-retroBlue/20 border-2 border-darkBorder p-3 rounded-lg flex-shrink-0">
            <CodeIcon />
          </div>
          <div>
            <h3 className="font-black text-lg uppercase tracking-tight text-darkText">BUILD</h3>
            <p className="text-sm font-medium text-darkMuted leading-snug mt-1">Hands-on projects, hackathons and research initiatives.</p>
          </div>
        </div>

        {/* Collaborate */}
        <div className="bg-darkCard border-3 border-darkBorder rounded-xl p-4 flex items-start gap-4">
          <div className="bg-retroYellow/20 border-2 border-darkBorder p-3 rounded-lg flex-shrink-0">
            <PeopleIcon />
          </div>
          <div>
            <h3 className="font-black text-lg uppercase tracking-tight text-darkText">COLLABORATE</h3>
            <p className="text-sm font-medium text-darkMuted leading-snug mt-1">Connect with peers, mentor juniors and grow together.</p>
          </div>
        </div>

        {/* Innovate */}
        <div className="bg-darkCard border-3 border-darkBorder rounded-xl p-4 flex items-start gap-4 relative overflow-hidden">
          <div className="bg-retroPink/20 border-2 border-darkBorder p-3 rounded-lg flex-shrink-0">
            <ChartIcon />
          </div>
          <div>
            <h3 className="font-black text-lg uppercase tracking-tight text-darkText">INNOVATE</h3>
            <p className="text-sm font-medium text-darkMuted leading-snug mt-1">Solve real-world problems using AI/ML technologies.</p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Parent Body */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Mission */}
        <div className="bg-darkCard border-3 border-darkBorder rounded-xl p-5 relative flex flex-col items-start overflow-hidden">
          <div className="absolute bottom-0 right-0 grid grid-cols-3 gap-1 p-2 opacity-30">
             <div className="w-4 h-10 bg-retroBlue border-2 border-darkBorder rounded-t-sm" />
             <div className="w-4 h-16 bg-retroBlue border-2 border-darkBorder rounded-t-sm" />
             <div className="w-4 h-24 bg-retroBlue border-2 border-darkBorder rounded-t-sm" />
          </div>

          <span className="bg-retroBlue text-darkCard font-black text-xs px-3 py-1 border-2 border-retroBlue rounded-full uppercase tracking-wider mb-3">
            OUR MISSION
          </span>
          <p className="text-sm font-bold text-darkMuted leading-relaxed pr-8 z-10">
            To empower students with the knowledge and skills in Artificial Intelligence and Machine Learning and encourage them to apply their learning for the betterment of society.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-darkCard border-3 border-darkBorder rounded-xl p-5 relative flex flex-col items-start overflow-hidden">
          <div className="absolute bottom-0 right-0 grid grid-cols-2 gap-1 p-2 opacity-30">
             <div className="w-4 h-12 bg-retroYellow border-2 border-darkBorder rounded-t-sm" />
             <div className="w-4 h-20 bg-retroYellow border-2 border-darkBorder rounded-t-sm" />
          </div>

          <span className="bg-darkSurface text-darkText font-black text-xs px-3 py-1 border-2 border-darkBorder rounded-full uppercase tracking-wider mb-3 shadow-brutal-sm">
            OUR VISION
          </span>
          <p className="text-sm font-bold text-darkMuted leading-relaxed z-10">
            To be a leading student chapter that inspires innovation, fosters research, and builds future leaders in AI and ML.
          </p>
        </div>

        {/* Parent Body */}
        <div className="bg-darkCard border-3 border-darkBorder rounded-xl p-5 flex flex-col items-start">
           <span className="bg-retroPink text-darkCard font-black text-xs px-3 py-1 border-2 border-retroPink rounded-full uppercase tracking-wider mb-4 shadow-brutal-sm">
            OUR PARENT BODY
          </span>
          <div className="flex items-center gap-3 w-full">
            <ACMLogoPlaceholder />
            <div className="flex flex-col">
              <span className="font-black text-darkText text-sm uppercase leading-tight">Association for <br /> Computing Machinery</span>
            </div>
          </div>
          <p className="text-xs font-bold text-retroBlue mt-3 tracking-wide">
            Advancing Computing as a Science & Profession
          </p>
        </div>
      </section>

    </div>
  );
}
