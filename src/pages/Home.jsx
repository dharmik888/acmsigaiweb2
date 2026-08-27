import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BlogCharm } from "../components/ui/BlogCharm";
import {
  Sparkles,
  ArrowRight,
  Target,
  Compass,
  Brain,
  Code2,
  FileText,
  BookOpen,
  GraduationCap,
  Cpu,
  Binary,
  Lightbulb,
  Rocket,
  Globe,
  Database,
  Terminal,
} from "lucide-react";

/* ================= UTILITY HOOKS & HELPER COMPONENTS ================= */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(node);
        }
      },
      { threshold },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    let start = null;
    const tick = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

const StatBlock = ({ label, target, suffix = "+" }) => {
  const [ref, inView] = useInView(0.5);
  const value = useCountUp(target, inView);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-5xl md:text-6xl font-black text-black tabular-nums">
        {value}
        <span className="text-retroOrange">{suffix}</span>
      </div>
      <div className="uppercase font-bold text-xs md:text-sm tracking-widest text-black/70 mt-2">
        {label}
      </div>
    </div>
  );
};

const PillButton = ({
  children,
  to,
  color = "bg-retroOrange",
  solid = true,
  textClass = "text-black",
}) => (
  <Link
    to={to}
    className={`group inline-flex items-center gap-2 ${solid ? color : "bg-white hover:bg-slate-100"
      } ${textClass} font-black uppercase text-sm px-7 py-3.5 border-3 border-black rounded-full btn-brutal-press`}
  >
    {children}
    <ArrowRight
      size={18}
      strokeWidth={3}
      className="transition-transform duration-200 group-hover:translate-x-1"
    />
  </Link>
);

/* ================= DATA CONFIGS ================= */
const PILLARS = [
  {
    icon: Target,
    label: "Our Vision",
    color: "bg-retroSky",
    charmType: "idea",
    text: "To be the AI/ML community every TCET student turns to first — where curiosity becomes research, and research becomes real work.",
  },
  {
    icon: Compass,
    label: "Our Mission",
    color: "bg-retroOrange",
    charmType: "rocket",
    text: "Give students hands-on AI/ML experience through workshops, hackathons, and mentorship — and connect it to real research and industry.",
  },
];

const FOCUS_AREAS = [
  {
    icon: Brain,
    title: "AI Research",
    tag: "DOMAIN",
    color: "bg-retroSky",
    charmType: "brain",
    text: "Publishing research papers and exploring deep learning architectures.",
    link: "/publications",
  },
  {
    icon: Code2,
    title: "Workshops & Hackathons",
    tag: "EVENTS",
    color: "bg-retroLime",
    charmType: "code",
    text: "Hands-on technical bootcamps and build sprints for student developers.",
    link: "/events",
  },
  {
    icon: FileText,
    title: "Publications",
    tag: "RESEARCH",
    color: "bg-retroOrange",
    charmType: "star",
    text: "Peer-reviewed research papers and academic achievements by members.",
    link: "/publications",
  },
  {
    icon: BookOpen,
    title: "Blogs & Articles",
    tag: "WRITING",
    color: "bg-retroSky",
    charmType: "pen",
    text: "Technical breakdowns, tutorials, and insights shared by students.",
    link: "/blogs",
  },
];

const FOCUS_TAGS = [
  "MACHINE LEARNING",
  "DEEP LEARNING",
  "NLP",
  "GENERATIVE AI",
  "REINFORCEMENT LEARNING",
  "DATA SCIENCE",
  "ROBOTICS",
];

const EXPANDED_SPLASH_ICONS = [
  {
    icon: Cpu,
    color: "bg-[#D4F6FF]",
    pos: "-top-3 left-4 md:left-8",
    transformHover: "-translate-y-10 -rotate-12 scale-125",
  },
  {
    icon: GraduationCap,
    color: "bg-[#D4F6FF]",
    pos: "-top-6 left-1/4",
    transformHover: "-translate-y-12 rotate-12 scale-125",
  },
  {
    icon: Binary,
    color: "bg-[#D4F6FF]",
    pos: "-top-6 right-1/4",
    transformHover: "-translate-y-12 -rotate-12 scale-125",
  },
  {
    icon: Terminal,
    color: "bg-[#D4F6FF]",
    pos: "-top-3 right-4 md:right-8",
    transformHover: "-translate-y-10 rotate-12 scale-125",
  },
  {
    icon: Globe,
    color: "bg-[#D4F6FF]",
    pos: "top-1/3 -left-4 md:-left-12",
    transformHover: "-translate-x-12 -rotate-15 scale-125",
  },
  {
    icon: Database,
    color: "bg-[#D4F6FF]",
    pos: "top-1/3 -right-4 md:-right-12",
    transformHover: "translate-x-12 rotate-15 scale-125",
  },
  {
    icon: Rocket,
    color: "bg-[#D4F6FF]",
    pos: "-bottom-3 left-6 md:left-12",
    transformHover: "translate-y-10 rotate-12 scale-125",
  },
  {
    icon: Lightbulb,
    color: "bg-[#D4F6FF]",
    pos: "-bottom-3 right-6 md:right-12",
    transformHover: "translate-y-10 -rotate-12 scale-125",
  },
];

function useTypewriterCycle(
  words,
  { typingSpeed = 70, deletingSpeed = 40, pause = 1400 } = {},
) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("typing");
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedRef.current) setDisplay(words[0]);
  }, [words]);

  useEffect(() => {
    if (reducedRef.current) return;
    const current = words[wordIndex % words.length];
    let timeout;

    if (phase === "typing") {
      if (display.length < current.length) {
        timeout = setTimeout(
          () => setDisplay(current.slice(0, display.length + 1)),
          typingSpeed,
        );
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(
          () => setDisplay(current.slice(0, display.length - 1)),
          deletingSpeed,
        );
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [display, phase, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return display;
}

/* ================= EVENT HIGHLIGHTS CAROUSEL ================= */
const HOME_CAROUSEL_IMAGES = [
  "/assests/new_highlights/Technologia 2.0/IMG-20260818-WA0010.jpg",
  "/assests/new_highlights/Technologia 2.0/IMG-20260818-WA0003.jpg",
  "/assests/new_highlights/AI Crime Lab/IMG_1366.JPG",
  "/assests/new_highlights/Technologia 2.0/IMG-20260818-WA0005.jpg",
  "/assests/new_highlights/AI Crime Lab/IMG_1372.JPG",
  "/assests/new_highlights/Technologia 2.0/IMG-20260818-WA0002.jpg",
  "/assests/new_highlights/AI Crime Lab/IMG_1373.JPG",
  "/assests/new_highlights/AI Crime Lab/IMG_1376.JPG",
  "/assests/new_highlights/AI Crime Lab/IMG_1371.JPG",
  "/assests/new_highlights/Technologia 2.0/IMG-20260818-WA0006.jpg",
  "/assests/new_highlights/AI Crime Lab/IMG_1379.JPG",
  "/assests/new_highlights/AI Crime Lab/IMG_1380.JPG",
  "/assests/new_highlights/Technologia 2.0/IMG-20260818-WA0008.jpg",
  "/assests/new_highlights/AI Crime Lab/IMG_1369.JPG",
  "/assests/new_highlights/Technologia 2.0/IMG-20260818-WA0007.jpg",
  "/assests/new_highlights/Technologia 2.0/IMG-20260818-WA0000.jpg"
];

function HighlightsCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full py-12 mt-16 mb-12 bg-retroCitrus border-3 border-black shadow-brutal-lg relative z-10 rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="absolute top-0 left-6 md:left-12 -translate-y-1/2 z-20">
        <span className="bg-retroOrange text-black border-2 border-black px-6 py-1.5 font-black text-sm uppercase tracking-widest shadow-brutal-sm -rotate-3 inline-block">
          ★ Event Highlights ★
        </span>
      </div>

      <div className="flex w-full overflow-hidden items-center whitespace-nowrap pt-8 pb-8 -mt-6 -mb-6">
        <div
          className="flex gap-6 px-3 min-w-max"
          style={{
            animation: "marquee 50s linear infinite",
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {[...HOME_CAROUSEL_IMAGES, ...HOME_CAROUSEL_IMAGES].map((src, idx) => (
            <div
              key={idx}
              className="w-[240px] md:w-[320px] lg:w-[400px] shrink-0 border-3 border-black bg-white rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] aspect-[4/3] rotate-1 hover:-rotate-1 odd:-rotate-2 even:rotate-2 transition-transform duration-500 hover:scale-105 hover:z-30 relative cursor-pointer"
            >
              <img
                src={src}
                alt="Highlight Event"
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%] hover:grayscale-0 hover:sepia-0 transition-all duration-500 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function Home() {
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const heroRef = useRef(null);

  const typedTag = useTypewriterCycle(FOCUS_TAGS);

  // Auto-retract when scrolling past the hero section
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom < 100 || rect.top > window.innerHeight - 100) {
        setIsHeroHovered(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden pb-8 text-white">
      {/* ================= HERO CONTAINER ================= */}
      {/* Home.jsx — Change max-w-6xl to max-w-7xl and update padding */}
      <div
        ref={heroRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
      >
        {/* Main Hero Card — Navy surface, pop colors reserved for badges only */}
        <section className="relative z-10 bg-[#0D47A1] border-3 border-black rounded-3xl shadow-brutal-lg px-6 pt-12 pb-12 text-center overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center justify-center">
          {/* Pure Dots Background Matrix */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Central Content Box */}
          <div className="relative inline-block max-w-3xl mx-auto z-10 w-full">
            {/* WIDE-SPREAD SPLASH ICONS LAYER */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {EXPANDED_SPLASH_ICONS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className={`absolute ${item.pos} transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) pointer-events-auto ${isHeroHovered
                      ? `opacity-100 ${item.transformHover}`
                      : "opacity-0 scale-50 translate-x-0 translate-y-0"
                      }`}
                    style={{
                      transitionDelay: isHeroHovered ? `${idx * 25}ms` : "0ms",
                    }}
                  >
                    <div
                      className={`${item.color} text-black border-3 border-black p-3 rounded-2xl shadow-brutal flex items-center justify-center hover:scale-125 transition-transform cursor-pointer`}
                    >
                      <IconComponent size={22} strokeWidth={2.5} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Terminal Pill Tag — Lime accent text, orange icon pop */}
              <div
                aria-hidden="true"
                className="inline-flex items-center gap-2 bg-black text-retroLime border-3 border-black rounded-full px-4 py-2 font-mono text-xs md:text-sm font-bold uppercase tracking-wider mb-6 shadow-brutal-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-retroLime animate-pulse shrink-0" />

                {/* Fixed Character Width Container */}
                <div className="relative flex items-center justify-center w-[25ch] h-5 overflow-hidden">
                  <div className="flex items-center justify-center whitespace-nowrap">
                    <span>{typedTag}</span>
                    <span className="inline-block w-[2px] h-4 bg-retroLime animate-pulse ml-0.5 shrink-0" />
                  </div>
                </div>

                <GraduationCap
                  size={16}
                  className="text-retroOrange shrink-0"
                />
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[1.05] tracking-tight text-white">
                Welcome to <br />
                <span className="inline-flex items-center gap-2.5 bg-retroLime text-black border-3 border-black rounded-full px-5 py-1.5 align-middle shadow-brutal-sm transform -rotate-1 hover:rotate-1 transition-transform cursor-pointer mt-2">
                  <span className="tracking-normal font-black">
                    TCET ACM SIGAI
                  </span>
                  <span className="bg-white border-2 border-black rounded-full p-1.5 flex items-center justify-center text-black">
                    <Sparkles size={18} strokeWidth={2.5} />
                  </span>
                </span>
              </h1>

              <p className="mt-6 max-w-xl mx-auto text-base md:text-lg font-bold text-white/80 leading-relaxed">
                The official AI &amp; ML student chapter at TCET — where we
                learn, build, and publish in Artificial Intelligence, together.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ================= ABOUT ================= */}
      <Reveal className="mt-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-3 border-black rounded-3xl p-8 md:p-12 shadow-brutal">
            <h2 className="text-3xl font-black uppercase text-black mb-2">
              About TCET ACM SIGAI
            </h2>
            <h3 className="text-xl font-bold text-retroOrange mb-4 uppercase tracking-wide">
              Think. Build. Innovate.
            </h3>
            <div className="space-y-4 text-black/80 font-bold max-w-3xl">
              <p>
                <strong className="text-black font-black">
                  TCET ACM SIGAI
                </strong>{" "}
                is a community of AI and Machine Learning enthusiasts dedicated
                to turning curiosity into innovation.
              </p>
              <p>
                Established in{" "}
                <strong className="text-black font-black">January 2023</strong>,
                we bring together students, researchers, and tech enthusiasts
                from across India to learn, experiment, collaborate, and build
                in the world of AI &amp; ML — through workshops, seminars,
                technical competitions, industrial visits, and research-driven
                initiatives.
              </p>
              <p className="font-black text-black text-lg pt-2">
                Learn together. Build boldly. Shape the future of AI.
              </p>
            </div>
            <div className="mt-6">
              <Link
                to="/team"
                className="inline-flex items-center gap-2 font-black uppercase text-sm text-black border-b-3 border-black hover:bg-retroOrange hover:text-white px-2 py-1 rounded transition-all"
              >
                Meet the team <ArrowRight size={16} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= TICKER ================= */}
      <Reveal className="mt-16">
        <div className="bg-black border-y-3 border-black overflow-hidden py-3.5 -rotate-1 scale-[1.02] shadow-brutal">
          <div className="animate-marquee whitespace-nowrap">
            {[...FOCUS_TAGS, ...FOCUS_TAGS].map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center text-retroLime font-black uppercase text-sm md:text-base tracking-widest mx-4"
              >
                {tag}
                <Sparkles size={14} className="text-retroLime mx-4" />
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ================= STATS ================= */}
      <Reveal className="mt-16">
        <section className="max-w-6xl mx-auto px-6">
          <div className="bg-white border-3 border-black rounded-3xl p-8 md:p-10 shadow-brutal grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatBlock label="Founded" target={2023} suffix="" />
            <StatBlock label="Active Members" target={150} />
            <StatBlock label="Events Hosted" target={20} />
            <StatBlock label="Research Papers" target={8} />
          </div>
        </section>
      </Reveal>

      {/* ================= VISION & MISSION ================= */}
      <section className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-6">
        {PILLARS.map((p, i) => (
          <Reveal key={p.label} delay={i * 100}>
            <div className="group relative hover-brutal-lift bg-white border-3 border-black rounded-2xl p-6 shadow-brutal-sm flex gap-4 h-full cursor-pointer">
              <BlogCharm type={p.charmType} color={p.color} />
              <div
                className={`${p.color} border-3 border-black rounded-xl w-14 h-14 flex items-center justify-center shrink-0 shadow-brutal-sm`}
              >
                <p.icon size={26} strokeWidth={2.5} className="text-black" />
              </div>
              <div>
                <div className="font-black uppercase text-sm tracking-wide text-black mb-1">
                  {p.label}
                </div>
                <p className="text-sm font-bold text-black/70 leading-relaxed">
                  {p.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <Reveal>
          <div className="text-center mb-10">
            <span className="bg-retroLime border-3 border-black rounded-full px-4 py-1 text-xs font-black uppercase tracking-wide shadow-brutal-sm">
              Our Focus
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mt-4">
              What We Do
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOCUS_AREAS.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <Link to={f.link} className="block h-full">
                <div
                  className={`group relative ${f.color} hover-brutal-lift border-3 border-black rounded-2xl p-6 shadow-brutal-sm h-full flex flex-col justify-between cursor-pointer`}
                >
                  <BlogCharm type={f.charmType} color="bg-white" />
                  <div>
                    <span className="bg-white border-2 border-black rounded-full px-3 py-0.5 text-[11px] font-black uppercase tracking-wide text-black">
                      {f.tag}
                    </span>
                    <h3 className="text-2xl font-black uppercase mt-4 text-black">
                      {f.title}
                    </h3>
                    <p className="text-sm font-bold text-black/70 mt-2">
                      {f.text}
                    </p>
                  </div>
                  <f.icon
                    size={40}
                    strokeWidth={2}
                    className="self-end mt-6 text-black/80 group-hover:scale-110 transition-transform"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      {/* ================= EVENT HIGHLIGHTS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <HighlightsCarousel />
      </section>

    </div>
  );
}
