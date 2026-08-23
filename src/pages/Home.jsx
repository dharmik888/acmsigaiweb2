import React from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Card } from "../components/ui/Card";
import { Link } from "react-router-dom";
import About from "../components/layouts/About";
import Contact from "../components/layouts/Contact";

// --- SVGS ---


const BrainMagnifierIcon = ({ className }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <circle
      cx="45"
      cy="45"
      r="30"
      fill="#70D6FF"
      stroke="#000"
      strokeWidth="4"
    />
    <path
      d="M 65 65 L 85 85"
      stroke="#000"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M 35 35 Q 45 25 55 35 Q 65 45 55 55 Q 45 65 35 55 Q 25 45 35 35"
      stroke="#000"
      strokeWidth="3"
      fill="none"
    />
  </svg>
);

const LaptopGradCapIcon = ({ className }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <path d="M 50 10 L 80 25 L 50 40 L 20 25 Z" fill="#000" />
    <rect x="25" y="45" width="50" height="35" rx="4" fill="#000" />
    <text x="35" y="70" fontFamily="monospace" fontSize="20" fill="#fff">
      &gt;_
    </text>
    <rect x="15" y="80" width="70" height="10" rx="2" fill="#000" />
  </svg>
);

const PencilIcon = ({ className }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <path
      d="M 20 80 L 15 95 L 30 90 L 85 35 L 75 25 Z"
      fill="#FCD34D"
      stroke="#000"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M 75 25 L 85 15 C 90 10 95 15 90 20 L 80 30 Z"
      fill="#FF70A6"
      stroke="#000"
      strokeWidth="4"
    />
    <path d="M 15 95 L 22 88 L 27 93 Z" fill="#000" />
  </svg>
);

const CodeIconPlaceholder = ({ className }) => (
  <LaptopGradCapIcon className={className} />
);

const ButtonPink = ({ children, to }) => (
  <Link
    to={to}
    className="bg-retroOrange text-black font-black uppercase text-sm px-6 py-3 border-2 border-black rounded-full shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all flex items-center gap-2"
  >
    {children} <span className="font-bold">&gt;</span>
  </Link>
);

const ButtonBlue = ({ children, to }) => (
  <Link
    to={to}
    className="bg-retroBlue text-black font-black uppercase text-sm px-6 py-3 border-2 border-black rounded-full shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all flex items-center gap-2"
  >
    {children} <span className="font-bold">&gt;</span>
  </Link>
);

// --------------------------------

export default function Home() {
  return (
    <div className="space-y-12 bg-paper-grid min-h-screen pb-12 relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-retroYellow border-3 border-black rounded-3xl p-8 md:p-16 shadow-brutal-lg relative overflow-hidden flex flex-col items-center text-center">
        <div className="relative z-20 space-y-6 max-w-3xl">

          <h1 className="text-6xl md:text-8xl font-black text-black uppercase leading-none tracking-tighter">
            Welcome to<br />ACM SIGAI<br />TCET
          </h1>
          <p className="text-lg font-bold text-black mt-4 max-w-xl mx-auto">
            The official AI student chapter pushing boundaries in Artificial
            Intelligence and Machine Learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <ButtonPink to="/events">Explore Events</ButtonPink>
            <ButtonBlue to="/publications">Read Publications</ButtonBlue>
          </div>
        </div>
      </section>

      {/* Our Objectives Section */}
      <section className="relative mt-20">
        <SectionHeader
          title="OUR OBJECTIVES"
          withSpeedLines={true}
          color="bg-retroYellow"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20 mt-10 max-w-4xl mx-auto">
          {/* Card 1: Goals */}
          <Card
            title="Goals"
            category="VISION"
            description="To establish a globally recognized department advancing Artificial Intelligence and Machine Learning."
            bgColor="bg-retroBlue"
          >
            <div className="absolute top-1/2 right-4 -translate-y-1/2">
              <BrainMagnifierIcon className="w-16 h-16" />
            </div>
          </Card>

          {/* Card 2: Mission */}
          <Card
            title="Mission"
            category="PURPOSE"
            description="To deliver elite AI & ML education through modern infrastructure and an industry-aligned curriculum. We empower students with technical mastery, research aptitude, and ethical leadership to build sustainable solutions and excel as globally competent professionals."
            bgColor="bg-retroGreen"
          >
            <div className="absolute top-1/2 right-4 -translate-y-1/2">
              <CodeIconPlaceholder className="w-16 h-16" />
            </div>
          </Card>


        </div>
      </section>

      <div className="mt-32">
        <About />
      </div>
      <div className="mt-32">
        <Contact />
      </div>
    </div>
  );
}
