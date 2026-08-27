// src/pages/Team.jsx
import React, { useState, useEffect, useRef } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Crown,
  UserCheck,
  FileText,
  DollarSign,
  Calendar,
  Code,
  Palette,
  Megaphone,
  Handshake,
  Globe,
  GraduationCap,
  Briefcase,
  Users,
  Terminal,
} from "lucide-react";
import {
  facultyMembers,
  coreTeam,
  juniorCoreTeam,
  getMemberImage,
} from "../data/teamData";

// Assets
import groupPhoto from "../assets/group_photo_team_banner.jpg";

/* Custom Brand SVG Icons */
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/* Position Icon Helper */
const getPositionIcon = (position) => {
  const pos = (position || "").toLowerCase();

  if (pos.includes("chairperson") && !pos.includes("vice")) {
    return <Crown size={14} className="text-black" />;
  }

  if (pos.includes("vice chairperson")) {
    return <UserCheck size={14} className="text-black" />;
  }

  if (pos.includes("faculty sponsor") || pos.includes("hod")) {
    return <GraduationCap size={14} className="text-black" />;
  }

  if (pos.includes("faculty") || pos.includes("professor")) {
    return <Briefcase size={14} className="text-black" />;
  }

  if (pos.includes("secretary")) {
    return <FileText size={14} className="text-black" />;
  }

  if (pos.includes("treasurer")) {
    return <DollarSign size={14} className="text-black" />;
  }

  if (pos.includes("event")) {
    return <Calendar size={14} className="text-black" />;
  }

  if (pos.includes("creative")) {
    return <Palette size={14} className="text-black" />;
  }

  if (pos.includes("pr & spons")) {
    return <Handshake size={14} className="text-black" />;
  }

  if (pos.includes("pr")) {
    return <Megaphone size={14} className="text-black" />;
  }

  if (pos.includes("spons")) {
    return <Handshake size={14} className="text-black" />;
  }

  if (pos.includes("webmaster")) {
    return <Globe size={14} className="text-black" />;
  }

  if (pos.includes("inhouse")) {
    return <Users size={14} className="text-black" />;
  }

  if (pos.includes("tech")) {
    return <Code size={14} className="text-black" />;
  }

  return <Terminal size={14} className="text-black" />;
};

/* ================= INDIVIDUAL MEMBER CARD ================= */
function TeamCard({ member, isActive, columnIndex = 0 }) {
  const cardRef = useRef(null);

  const accentBg = member.accent || member.badgeBg || "bg-retroYellow";

  const displayPosition = member.position || member.label || "MEMBER";

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const yPos = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -20]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.85, 1],
    [0.2, 1, 1, 0.4],
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y: yPos, opacity }}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay: columnIndex * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="team-row flex flex-col items-center w-full"
      data-id={member.id || member.name.toLowerCase().replace(/\s+/g, "-")}
    >
      {/* Name + Designation */}
      <div className="w-full max-w-xs mb-4 min-h-[92px] flex flex-col justify-end">
        <h3 className={`font-black uppercase tracking-tight text-black leading-none mb-2 ${member.name.length > 18 ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
          {member.name}
        </h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.4,
            delay: columnIndex * 0.15 + 0.25,
            ease: "backOut",
          }}
          className={`inline-flex items-center gap-1.5 ${accentBg} text-black font-black text-[11px] uppercase border-2 border-black px-3 py-1.5 rounded-full shadow-sm w-fit`}
        >
          {getPositionIcon(displayPosition)}
          <span>{displayPosition}</span>
        </motion.div>
      </div>

      {/* Coloured Image Card */}
      {/* Coloured Image Card */}
      <motion.div
        animate={{
          scale: isActive ? 1.03 : 1,
          boxShadow: isActive
            ? "3px 3px 0px 0px #000000"
            : "2px 2px 0px 0px #000000",
        }}
        transition={{ duration: 0.3 }}
        className={`relative w-full max-w-xs p-3.5 rounded-3xl border-3 border-black ${accentBg} transition-all`}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-black bg-black">
          <img
            src={getMemberImage(member)}
            alt={member.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>
      {/* Description + Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.5,
          delay: columnIndex * 0.15 + 0.35,
          ease: "easeOut",
        }}
        className="w-full max-w-xs space-y-3 mt-5 text-center"
      >
        <p
          className={`text-black font-bold text-sm leading-relaxed border-l-4 border-black pl-4 py-2 ${accentBg} rounded-r-2xl shadow-sm text-left`}
        >
          {member.bio || member.description}
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name}'s LinkedIn`}
              className={`p-2.5 ${accentBg} border-2 border-black rounded-xl shadow-sm hover:bg-black hover:text-white flex items-center justify-center text-black transition-colors`}
            >
              <LinkedinIcon size={18} />
            </a>
          )}

          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name}'s GitHub`}
              className={`p-2.5 ${accentBg} border-2 border-black rounded-xl shadow-sm hover:bg-black hover:text-white flex items-center justify-center text-black transition-colors`}
            >
              <GithubIcon size={18} />
            </a>
          )}

          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className={`p-2.5 ${accentBg} border-2 border-black rounded-xl shadow-sm hover:bg-black hover:text-white flex items-center justify-center text-black transition-colors`}
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================= MAIN TEAM PAGE ================= */
export default function Team() {
  const [activeMemberId, setActiveMemberId] = useState("");

  useEffect(() => {
    let rafId;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rows = document.querySelectorAll(".team-row");

        if (!rows.length) return;

        const centerY = window.innerHeight / 2;
        let minDistance = Infinity;
        let closestId = null;

        rows.forEach((row) => {
          const rect = row.getBoundingClientRect();
          const rowCenterY = rect.top + rect.height / 2;
          const dist = Math.abs(rowCenterY - centerY);

          if (dist < minDistance) {
            minDistance = dist;
            closestId = row.dataset.id;
          }
        });

        if (closestId) {
          setActiveMemberId(closestId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <SectionHeader
        badgeText="THE MINDSHARE"
        title="MEET THE TEAM"
        subtitle="A skilled and passionate team of student leaders, faculty advisors, and mentors driving AI innovation at TCET."
      />

      {/* Group Photo Showcase */}
      <div className="my-8 relative rounded-3xl border-3 border-black bg-retroYellow p-3 sm:p-4 shadow-md overflow-hidden">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl border-2 border-black overflow-hidden group">
          <img
            src={groupPhoto}
            alt="TCET ACM SIGAI Team Banner"
            className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
            <div className="text-white space-y-1">
              <span className="bg-retroOrange text-black font-black text-[10px] sm:text-xs uppercase px-3 py-1 rounded-full border-2 border-black shadow-sm">
                2026-27
              </span>

              <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-md">
                TCET ACM SIGAI Core & Jr Core Team
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* FACULTY SECTION */}
      <div className="mb-12">
        <div className="inline-block bg-black text-white font-black text-sm uppercase px-4 py-1.5 rounded-xl border-2 border-black shadow-sm mb-6">
          Faculty Mentors & Leaders
        </div>

        <div className="bg-[#FAF7F2] border-3 border-black rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14 justify-items-center">
            {facultyMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                isActive={activeMemberId === member.id}
                columnIndex={index % 2}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CORE TEAM SECTION */}
      <div className="mb-12">
        <div className="inline-block bg-black text-white font-black text-sm uppercase px-4 py-1.5 rounded-xl border-2 border-black shadow-sm mb-6">
          Core Executive Team
        </div>

        <div className="bg-[#FAF7F2] border-3 border-black rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14 justify-items-center">
            {coreTeam.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                isActive={
                  activeMemberId ===
                  member.name.toLowerCase().replace(/\s+/g, "-")
                }
                columnIndex={index % 2}
              />
            ))}
          </div>
        </div>
      </div>

      {/* JUNIOR CORE SECTION */}
      <div>
        <div className="inline-block bg-black text-white font-black text-sm uppercase px-4 py-1.5 rounded-xl border-2 border-black shadow-sm mb-6">
          Junior Core Team
        </div>

        <div className="bg-[#FAF7F2] border-3 border-black rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14 justify-items-center">
            {juniorCoreTeam.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                isActive={
                  activeMemberId ===
                  member.name.toLowerCase().replace(/\s+/g, "-")
                }
                columnIndex={index % 2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
