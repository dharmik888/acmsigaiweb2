import React, { useState, useRef } from "react";
import { SectionHeader } from "../components/ui/SectionHeader.jsx";
import {
  ACCENT_HEX,
  getMemberImage,
  facultyMembers,
  coreTeam,
  juniorCoreTeam,
} from "../data/teamData.js";

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg
    className="w-4 h-4 stroke-current stroke-2 fill-none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17L17 7M17 7H7M17 7V17"
    />
  </svg>
);

// Specific Position Icons
const PositionIcon = ({ position }) => {
  const p = position.toLowerCase();

  if (p.includes("chair") || p.includes("sponsor") || p.includes("hod")) {
    return (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
      </svg>
    );
  }
  if (p.includes("tech") || p.includes("webmaster")) {
    return (
      <svg
        className="w-3.5 h-3.5 stroke-current stroke-2 fill-none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    );
  }
  if (p.includes("creative") || p.includes("design")) {
    return (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.97-4.03-9-9-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    );
  }
  if (p.includes("treasurer") || p.includes("spons")) {
    return (
      <svg
        className="w-3.5 h-3.5 stroke-current stroke-2 fill-none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 1v22m5-18H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
        />
      </svg>
    );
  }
  if (p.includes("event") || p.includes("inhouse")) {
    return (
      <svg
        className="w-3.5 h-3.5 stroke-current stroke-2 fill-none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    );
  }
  return (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M21 3L3 10.5v3L8 15v5l3.5-3.5L15 18l6-15zM8 13.5l-3-1 11-5.5-8 6.5z" />
    </svg>
  );
};

const FacultyCard = ({ faculty }) => {
  return (
    <div
      className="group relative p-[3px] overflow-hidden rounded-none max-w-5xl mx-auto"
      style={{ "--border-accent": ACCENT_HEX[faculty.badgeBg] }}
    >
      <div className="absolute inset-0 running-border-hover" />

      <div className="relative bg-[#1b2333] p-6 md:p-8 h-full w-full">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b-2 border-white/25 pb-4">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-extrabold uppercase border-2 border-black text-black ${faculty.badgeBg}`}
            >
              <PositionIcon position={faculty.position} />
              <span>{faculty.label}</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative border-4 border-white overflow-hidden bg-[#232c45] h-72 sm:h-80 lg:h-full">
              <img
                src={getMemberImage(faculty)}
                alt={faculty.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2 transition-colors duration-300 group-hover:text-retroYellow">
                {faculty.name}
              </h3>
              <span
                className={`inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-sm md:text-base font-mono font-extrabold uppercase border-2 border-black rounded-md text-black ${faculty.badgeBg}`}
              >
                <PositionIcon position={faculty.position} />
                <span>{faculty.position}</span>
              </span>
              <p className="text-sm font-medium leading-relaxed text-gray-200 font-sans transition-colors duration-300 group-hover:text-white">
                {faculty.description}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t-2 border-white/25 flex items-center justify-between gap-4">
              <a
                href={faculty.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop inline-flex items-center gap-2 bg-retroYellow text-black font-extrabold text-sm px-5 py-2.5 border-3 border-black transition-all"
                aria-label={`LinkedIn profile for ${faculty.name}`}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoreTeamCard = ({ member }) => {
  return (
    <div
      className="group relative bg-[#1b2333] border-2 border-white/25 hover:border-transparent transition-all duration-300"
      style={{ "--border-accent": ACCENT_HEX[member.accent] }}
    >
      <div className="running-border-hover w-full h-full p-1">
        <div className="bg-[#1b2333] w-full h-full flex flex-col justify-between overflow-hidden">
          <div className="bg-[#232c45] border-b-2 border-white/25 p-3 flex items-center justify-between shrink-0">
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 border border-black text-black ${member.accent}`}
            >
              <PositionIcon position={member.position} />
              <span>{member.badgeTag}</span>
            </span>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pop inline-flex items-center justify-center bg-white hover:bg-retroYellow text-black p-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] transition-all"
              aria-label={`LinkedIn for ${member.name}`}
            >
              <LinkedInIcon />
            </a>
          </div>

          <div className="p-3">
            <div className="w-full h-64 border-2 border-white overflow-hidden bg-gray-900 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)]">
              <img
                src={getMemberImage(member)}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="px-3 pb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-extrabold uppercase border-2 border-black rounded-md text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] ${member.accent}`}
            >
              <PositionIcon position={member.position} />
              <span>{member.position}</span>
            </span>
          </div>

          <div className="max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden px-3 pb-3">
            <h3 className="text-xl font-extrabold text-white tracking-tight leading-tight group-hover:text-{member.accent} transition-colors duration-300 mb-2">
              {member.name}
            </h3>

            <div className="bg-[#232c45] border border-white/25 p-2.5">
              <p className="text-xs font-sans text-gray-200 leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function splitIntoColumns(items, columnCount) {
  const columns = Array.from({ length: columnCount }, () => []);
  items.forEach((item, i) => columns[i % columnCount].push(item));
  return columns;
}

const JuniorCoreCard = ({ member }) => {
  const [tiltStyle, setTiltStyle] = useState({
    transform: "translate3d(0,0,0) rotate(0deg)",
  });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const moveX = (x / (rect.width / 2)) * 10;
    const moveY = (y / (rect.height / 2)) * 10;
    const rotate = (x / (rect.width / 2)) * 4;

    setTiltStyle({
      transform: `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rotate}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ transform: "translate3d(0,0,0) rotate(0deg)" });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative p-[2px] overflow-hidden rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]"
      style={{ "--border-accent": ACCENT_HEX[member.accent] }}
    >
      <div className="absolute inset-0 running-border-hover" />

      <div className="relative bg-[#1b2333] p-3.5 flex flex-col h-full w-full">
        <div className="flex items-center justify-between mb-3 pb-1.5 border-b-2 border-white/25">
          <span
            className={`inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono font-bold border border-black text-black ${member.accent}`}
          >
            <PositionIcon position={member.position} />
            <span>{member.tag}</span>
          </span>

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pop inline-flex items-center justify-center bg-white hover:bg-retroYellow text-black p-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] transition-all"
            aria-label={`LinkedIn for ${member.name}`}
          >
            <LinkedInIcon />
          </a>
        </div>

        <div className="relative border-2 border-white overflow-hidden bg-black h-64 sm:h-72 mb-3 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]">
          <img
            src={getMemberImage(member)}
            alt={member.name}
            style={tiltStyle}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-300 ease-out"
          />
        </div>

        <span
          className={`inline-flex items-center gap-1 mb-2 px-2 py-0.5 text-[10px] font-mono font-extrabold uppercase border-2 border-black rounded-md text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] w-fit ${member.accent}`}
        >
          <PositionIcon position={member.position} />
          <span>{member.position}</span>
        </span>

        <h4 className="text-base font-extrabold text-white tracking-tight group-hover:text-retroPink transition-colors duration-300">
          {member.name}
        </h4>

        <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 group-hover:mt-2 transition-all duration-500 ease-in-out overflow-hidden">
          <p className="text-[11px] font-sans text-gray-300 bg-[#232c45] border border-white/25 p-2">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredCore = coreTeam.filter((member) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "LEAD")
      return (
        member.position.includes("Chairperson") ||
        member.position.includes("Secretary") ||
        member.position.includes("Treasurer")
      );
    if (activeFilter === "TECH")
      return (
        member.position.includes("Technical") ||
        member.position.includes("Webmaster")
      );
    if (activeFilter === "CREATIVE")
      return (
        member.position.includes("Creative") ||
        member.position.includes("Event")
      );
    if (activeFilter === "OPS")
      return (
        member.position.includes("PR") || member.position.includes("Spons")
      );
    return true;
  });

  return (
    <div className="bg-paper-grid min-h-screen text-white font-sans overflow-x-hidden selection:bg-retroPink selection:text-black">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 relative">
        <section className="relative mb-8 lg:mb-10">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">
              <SectionHeader
                title="MEET THE TEAM"
                subtitle="The minds shaping TCET ACM SIGAI."
                badgeText="PEOPLE"
              />

              <div className="section-divider-row flex items-center justify-center gap-3 w-full">
                <div className="h-0.5 bg-white/20 flex-1 max-w-[80px] sm:max-w-[120px]" />
                <span
                  className="inline-flex items-center gap-1.5 font-black text-xs px-4 py-1.5 border-2 border-black rounded-full uppercase tracking-wider select-none shadow-brutal-sm"
                  style={{
                    backgroundColor: "#000000",
                    color: "#ff83b8",
                  }}
                >
                  ★ Faculty Leadership ★
                </span>
                <div className="h-0.5 bg-white/20 flex-1 max-w-[80px] sm:max-w-[120px]" />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 lg:mb-16">
          <div className="space-y-8">
            {facultyMembers.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </section>

        {/* CORE TEAM SECTION */}
        <section className="mb-12 lg:mb-16">
          <div className="section-divider-row flex items-center justify-center gap-3 w-full mb-6">
            <div className="h-0.5 bg-white/20 flex-1 max-w-[80px] sm:max-w-[120px]" />
            <span
              className="inline-flex items-center gap-1.5 font-black text-xs px-4 py-1.5 border-2 border-black rounded-full uppercase tracking-wider select-none shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]"
              style={{
                backgroundColor: "#fcd34d",
                color: "#000000",
              }}
            >
              Core Team
            </span>
            <div className="h-0.5 bg-white/20 flex-1 max-w-[80px] sm:max-w-[120px]" />
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
            <span className="text-gray-400 mr-2">FILTER BY DOMAIN:</span>
            {[
              { id: "ALL", label: "ALL MEMBERS" },
              { id: "LEAD", label: "LEADERSHIP" },
              { id: "TECH", label: "TECH & WEB" },
              { id: "CREATIVE", label: "CREATIVE & EVENTS" },
              { id: "OPS", label: "OPERATIONS & PR" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`btn-pop px-3 py-1.5 border-2 border-white shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] transition-all ${
                  activeFilter === btn.id
                    ? "bg-retroYellow text-black font-extrabold"
                    : "bg-[#1b2333] text-white hover:bg-white hover:text-black"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {splitIntoColumns(filteredCore, 3).map((column, ci) => (
              <div key={ci} className="space-y-6">
                {column.map((member) => (
                  <CoreTeamCard key={member.name} member={member} />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* JUNIOR CORE TEAM SECTION */}
        <section className="mb-10">
          <div className="section-divider-row flex items-center justify-center gap-3 w-full mb-6">
            <div className="h-0.5 bg-white/20 flex-1 max-w-[80px] sm:max-w-[120px]" />
            <span
              className="inline-flex items-center gap-1.5 font-black text-xs px-4 py-1.5 border-2 border-black rounded-full uppercase tracking-wider select-none shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]"
              style={{
                backgroundColor: "#70d6ff",
                color: "#000000",
              }}
            >
              Junior Core Team
            </span>
            <div className="h-0.5 bg-white/20 flex-1 max-w-[80px] sm:max-w-[120px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {juniorCoreTeam.map((member, idx) => (
              <JuniorCoreCard key={idx} member={member} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
