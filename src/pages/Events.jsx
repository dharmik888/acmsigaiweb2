import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { eventsData } from "../data/eventsData";
import { SectionHeader } from "../components/ui/SectionHeader";
import SemesterChapter from "../components/ui/SemesterIllustration";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const TYPE_COLORS = {
  Event: "bg-retroOrange",
  Workshop: "bg-retroSky",
  Seminar: "bg-retroCitrus",
  Competition: "bg-retroLime",
  "Industrial Visit": "bg-retroOrange",
  "Expert Talk": "bg-retroSky",
  Other: "bg-retroCitrus",
};

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const SHORT_MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function getMonthFromDate(dateStr) {
  if (!dateStr) return "UNK";
  for (let i = 0; i < MONTH_NAMES.length; i++) {
    if (dateStr.toLowerCase().includes(MONTH_NAMES[i].toLowerCase())) {
      return SHORT_MONTHS[i];
    }
  }
  return "UNK";
}

const MapPinIcon = () => (
  <svg
    className="w-3.5 h-3.5 inline-block mr-1 opacity-80"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-3.5 h-3.5 inline-block mr-1 opacity-80"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    className="w-3.5 h-3.5 inline-block mr-1 opacity-80"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
    />
  </svg>
);

function EventCard({ event, index, isActive }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  const exitY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const exitOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const exitScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const cardColor = TYPE_COLORS[event.type] || "bg-retroOrange";

  return (
    <motion.div
      ref={cardRef}
      style={{ y: exitY, opacity: exitOpacity, scale: exitScale }}
      className="h-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{
          duration: 0.4,
          delay: Math.min(index, 6) * 0.08,
          ease: "easeOut",
        }}
        className="h-full"
      >
        <motion.div
          data-id={event.eventId}
          className="event-card group flex flex-col bg-white border-[1.5px] border-black rounded-2xl overflow-hidden h-full"
          animate={{
            scale: isActive ? 1.02 : 1,
            y: isActive ? -4 : 0,
            boxShadow: isActive
              ? "6px 6px 0px 0px rgba(0,0,0,1)"
              : "3px 3px 0px 0px rgba(0,0,0,1)",
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            y: -4,
            boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
          }}
        >
          <div
            className={`p-3.5 border-b-[1.5px] border-black flex justify-between items-center ${cardColor}`}
          >
            <div className="flex gap-2 items-center">
              <span className="inline-block bg-white text-black font-semibold text-[11px] uppercase border-[1.5px] border-black px-2.5 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                {event.type}
              </span>
              {event.status === "Upcoming" && (
                <span className="inline-block bg-[#ff4d4f] text-white font-bold text-[10px] uppercase border-[1.5px] border-black px-2 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                  Upcoming
                </span>
              )}
            </div>
            <span className="font-mono text-[11px] bg-black text-white px-2.5 py-0.5 rounded-md border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              {event.date}
            </span>
          </div>

          <div className="p-5 flex-grow flex flex-col bg-[#fdfbf7]">
            <h4 className="text-lg font-bold tracking-tight leading-snug mb-3 text-black">
              {event.title}
            </h4>

            {event.shortDescription && (
              <p className="text-xs text-black/70 font-normal leading-relaxed mb-5 border-l-2 border-retroCitrus pl-3 py-0.5">
                {event.shortDescription}
              </p>
            )}

            <div className="mt-auto flex flex-wrap gap-2 text-[11px]">
              {event.mode && (
                <span className="flex items-center font-medium border border-black px-2.5 py-1 rounded-md bg-white shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  <MapPinIcon /> {event.mode}
                </span>
              )}
              {event.participants && (
                <span className="flex items-center font-medium border border-black px-2.5 py-1 rounded-md bg-retroCitrus shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  <UsersIcon /> {event.participants}
                </span>
              )}
              {event.venue && event.venue !== "N/A" && (
                <span className="flex items-center font-medium border border-black px-2.5 py-1 rounded-md bg-retroSky shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  <BuildingIcon /> {event.venue}
                </span>
              )}
            </div>
          </div>

          <div className="p-3 border-t-[1.5px] border-black bg-white flex justify-end items-center">
            <Link
              to={`/events/${event.eventId}`}
              className="bg-retroSky text-black font-semibold text-xs uppercase px-5 py-2 rounded-lg border-[1.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-2 group/btn"
            >
              <span>Details</span>
              <span className="text-sm leading-none group-hover/btn:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function FeaturedEventCard({ event, index, isActive }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const exitY = useTransform(scrollYProgress, [0.8, 1], [0, -30]);
  const exitOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.3]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: exitY, opacity: exitOpacity }}
      className="col-span-1 md:col-span-2 lg:col-span-3 w-full mb-12 mt-6 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div
          data-id={event.eventId}
          className="event-card relative bg-white border-[3px] border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group"
        >
          {/* Subtle paper grid pattern */}
          <div className="absolute inset-0 bg-paper-grid opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
            {/* LEFT: Event Image Container (Light retro background, uncropped natural proportions) */}
            <div className="md:col-span-7 lg:col-span-7 bg-[#f8fafc] border-b-[3px] md:border-b-0 md:border-r-[3px] border-black flex items-center justify-center p-4 sm:p-6 md:p-8 relative group/img">
              {event.image ? (
                <div className="w-full flex items-center justify-center">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-auto h-auto max-w-full max-h-[380px] md:max-h-[440px] object-contain rounded-xl border-2 border-black/80 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover/img:scale-[1.01]"
                  />
                </div>
              ) : (
                <div className="w-full h-48 flex items-center justify-center font-mono text-xs text-black/50">
                  NO IMAGE AVAILABLE
                </div>
              )}
            </div>

            {/* RIGHT: Event Name & Details Button */}
            <div className="md:col-span-5 lg:col-span-5 bg-[#fdfbf7] p-6 sm:p-8 md:p-10 flex flex-col justify-between items-start">
              {/* Event Title */}
              <div className="w-full my-auto py-4">
                {event.status === "Upcoming" && (
                  <span className="inline-block bg-[#ff4d4f] text-white font-bold text-xs uppercase border-[1.5px] border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4 -rotate-2">
                    Upcoming
                  </span>
                )}
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-black uppercase tracking-tight leading-snug">
                  {event.title}
                </h4>
              </div>

              {/* Details Action Button */}
              <div className="pt-6 mt-auto w-full flex justify-start">
                <Link
                  to={`/events/${event.eventId}`}
                  className="bg-retroSky text-black font-semibold text-xs uppercase px-5 py-2.5 rounded-lg border-[1.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-2 group/btn"
                >
                  <span>Details</span>
                  <span className="text-sm leading-none group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const CAROUSEL_IMAGES = [
  "/assests/event_1.jpeg",
  "/assests/event_2.jpeg",
  "/assests/event_3.jpeg",
  "/assests/event_4.jpeg",
  "/assests/event_5.jpeg",
  "/assests/event_6.jpeg",
  "/assests/event_7.jpeg",
  "/assests/event_8.jpeg",
  "/assests/event_9.jpeg",
  "/assests/event_10.jpeg",
  "/assests/event_11.jpeg",
  "/assests/event_12.jpeg",
  "/assests/event_13.jpeg",
  "/assests/event_14.jpeg",
];

function ImageCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full py-12 mt-8 mb-12 bg-retroCitrus border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10 rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      {/* Decorative Label */}
      <div className="absolute top-0 left-6 md:left-12 -translate-y-1/2 z-20">
        <span className="bg-retroOrange text-black border-[2px] border-black px-6 py-1.5 font-black text-sm uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-3 inline-block">
          ★ ACM SIGAI Memory Lane ★
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
          {/* Double the array for seamless infinite scroll */}
          {[...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES].map((src, idx) => (
            <div
              key={idx}
              className="w-[240px] md:w-[320px] lg:w-[400px] shrink-0 border-[3px] border-black bg-white rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] aspect-[4/3] rotate-1 hover:-rotate-1 odd:-rotate-2 even:rotate-2 transition-transform duration-500 hover:scale-105 hover:z-30 relative cursor-pointer"
            >
              <img
                src={src}
                alt="ACM SIGAI Past Event"
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%] hover:grayscale-0 hover:sepia-0 transition-all duration-500 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MonthMarker({ month, isActive }) {
  if (!month || month === "UNK") return null;

  return (
    <>
      {/* Timeline Marker Node for MONTH */}
      <div className="absolute top-1.5 -left-[44px] md:-left-[68px] lg:-left-[84px] z-10 flex items-center justify-center w-6 h-6 pointer-events-none">
        <motion.div
          className={`rounded-full transition-all duration-300 ${
            isActive
              ? "w-2.5 h-2.5 border-[2px] border-black bg-retroOrange shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] scale-125"
              : "w-1.5 h-1.5 border-[1.5px] border-black/30 bg-white"
          }`}
        />
      </div>

      {/* MONTH LABEL */}
      <motion.div
        className="mb-5 flex justify-start items-center"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`text-[11px] font-bold px-3 py-1 border-[1.5px] border-black rounded-md uppercase tracking-widest transition-all duration-300 ${
            isActive
              ? "bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1"
              : "bg-white text-black/50 border-black/20 shadow-none"
          }`}
        >
          {month}
        </div>
      </motion.div>
    </>
  );
}

const ACADEMIC_YEARS = [
  { label: "2026-27", value: "2026-27" },
  { label: "2025-26", value: "2025-26" },
  { label: "2024-25", value: "2024-25" },
  { label: "2023-24", value: "2023-24" },
];

export default function Events() {
  const [selectedAcademicYear, setSelectedAcademicYear] = useState("2026-27");

  const filteredEvents = useMemo(() => {
    if (selectedAcademicYear === "ALL") {
      return eventsData;
    }
    return eventsData.filter((e) => e.academicYear === selectedAcademicYear);
  }, [selectedAcademicYear]);

  const eventsStructure = useMemo(() => {
    const grouped = filteredEvents.reduce((acc, event, index) => {
      const mStr = getMonthFromDate(event.date);
      const yearStr = event.year || "2024";
      const year = parseInt(yearStr);

      const ODD_MONTHS = ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      const EVEN_MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

      let acYear, sem;
      if (event.academicYear) {
        acYear = event.academicYear;
      } else if (ODD_MONTHS.includes(mStr)) {
        acYear = `${year}-${String(year + 1).slice(-2)}`;
      } else if (EVEN_MONTHS.includes(mStr)) {
        acYear = `${year - 1}-${String(year).slice(-2)}`;
      } else {
        acYear = yearStr;
      }

      if (event.semester) {
        sem = event.semester.toUpperCase();
      } else if (ODD_MONTHS.includes(mStr)) {
        sem = "ODD";
      } else if (EVEN_MONTHS.includes(mStr)) {
        sem = "EVEN";
      } else {
        sem = "ODD";
      }

      if (!acc[acYear]) acc[acYear] = {};
      if (!acc[acYear][sem]) acc[acYear][sem] = {};
      if (!acc[acYear][sem][mStr]) acc[acYear][sem][mStr] = [];

      acc[acYear][sem][mStr].push({
        ...event,
        eventId: event.id ?? event.slug ?? index + 1,
      });
      return acc;
    }, {});

    const sortedAcYears = Object.keys(grouped).sort((a, b) =>
      b.localeCompare(a),
    );

    return sortedAcYears.map((acYear) => {
      const semsObj = grouped[acYear];

      const sortedSems = Object.keys(semsObj).sort((a, b) => {
        if (a === "EVEN" && b === "ODD") return -1;
        if (a === "ODD" && b === "EVEN") return 1;
        return 0;
      });

      const semesters = sortedSems.map((sem) => {
        const monthsObj = semsObj[sem];
        const sortedMonths = Object.keys(monthsObj).sort((a, b) => {
          const idxA = SHORT_MONTHS.indexOf(a);
          const idxB = SHORT_MONTHS.indexOf(b);
          if (idxA === -1) return 1;
          if (idxB === -1) return -1;
          return idxB - idxA; // Descending order
        });

        let eventsCount = 0;
        let semImages = [];
        const months = sortedMonths.map((m) => {
          eventsCount += monthsObj[m].length;

          monthsObj[m].forEach((e) => {
            if (e.image && !e.image.includes("KaggleSmallImage")) {
              semImages.push(e.image);
            }
          });

          return {
            month: m,
            events: monthsObj[m],
          };
        });

        semImages = [...new Set(semImages)];

        return {
          semester: sem,
          name:
            sem === "ODD"
              ? "ODD SEMESTER"
              : sem === "EVEN"
                ? "EVEN SEMESTER"
                : "OTHER EVENTS",
          dateRange:
            sem === "ODD" ? "JUL — DEC" : sem === "EVEN" ? "JAN — JUN" : "",
          eventsCount,
          months,
          images: semImages,
        };
      });

      return { academicYear: acYear, semesters };
    });
  }, [filteredEvents]);

  const [activeCardId, setActiveCardId] = useState(null);

  // Adjusted for new structure
  const { activeYear, activeMonth } = useMemo(() => {
    if (!activeCardId) {
      return {
        activeYear: eventsStructure[0]?.academicYear,
        activeMonth: eventsStructure[0]?.semesters[0]?.months[0]?.month,
      };
    }

    for (const yearGroup of eventsStructure) {
      for (const semGroup of yearGroup.semesters) {
        for (const monthGroup of semGroup.months) {
          if (
            monthGroup.events.some((e) => String(e.eventId) === activeCardId)
          ) {
            return {
              activeYear: yearGroup.academicYear,
              activeMonth: monthGroup.month,
            };
          }
        }
      }
    }
    return {
      activeYear: eventsStructure[0]?.academicYear,
      activeMonth: eventsStructure[0]?.semesters[0]?.months[0]?.month,
    };
  }, [activeCardId, eventsStructure]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const cards = document.querySelectorAll(".event-card");
        if (!cards.length) return;

        const centerY = window.innerHeight / 2;
        const centerX = window.innerWidth / 2;

        let minDistance = Infinity;
        let closestId = null;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenterY = rect.top + rect.height / 2;
          const cardCenterX = rect.left + rect.width / 2;

          const dist = Math.sqrt(
            Math.pow(cardCenterY - centerY, 2) +
              Math.pow(cardCenterX - centerX, 2),
          );

          if (dist < minDistance) {
            minDistance = dist;
            closestId = card.dataset.id;
          }
        });

        setActiveCardId(closestId);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <section>
        <SectionHeader
          badgeText="OUR JOURNEY"
          title="THINGS WE'VE DONE."
          subtitle="A collection of events, workshops, seminars and experiences from ACM SIGAI."
        />

        <ImageCarousel />

        {/* ACADEMIC YEAR SELECTOR */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 bg-white border-[2.5px] border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] my-10">
          <div className="flex items-center gap-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-retroOrange border-[1.5px] border-black inline-block animate-pulse" />
            <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-black">
              SELECT ACADEMIC YEAR:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {ACADEMIC_YEARS.map((ay) => {
              const isSelected = selectedAcademicYear === ay.value;
              return (
                <button
                  key={ay.value}
                  onClick={() => setSelectedAcademicYear(ay.value)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl border-[2px] border-black transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-retroOrange text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-x-[1px] -translate-y-[1px]"
                      : "bg-[#fdfbf7] text-black/70 hover:text-black hover:bg-black/5 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-[0.5px]"
                  }`}
                >
                  {ay.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative flex max-w-full">
          {/* TIMELINE SPINE */}
          <div className="w-6 md:w-8 lg:w-12 shrink-0 relative mr-3 md:mr-4 lg:mr-6 flex justify-center">
            <div className="absolute top-0 bottom-0 w-[2.5px] md:w-[3px] bg-white/20 rounded-full" />

            <motion.div
              className="absolute top-0 bottom-0 w-[2.5px] md:w-[3px] bg-black rounded-full origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          <div
            className="flex-1 w-full min-w-0 pb-12 relative"
            ref={containerRef}
          >
            {eventsStructure.map((acYearData, yIdx) => {
              const isActiveYear = activeYear === acYearData.academicYear;

              return (
                <div key={acYearData.academicYear} className="relative">
                  {acYearData.semesters.map((sem, sIdx) => {
                    const globalIndex = yIdx * 2 + sIdx;
                    return (
                      <div
                        key={sem.semester}
                        className="mb-24 relative last:mb-0"
                      >
                        {/* Timeline Marker for Semester Chapter */}
                        <div className="absolute top-10 -left-[36px] md:-left-[44px] lg:-left-[60px] z-10 flex items-center justify-center w-6 h-6">
                          <motion.div
                            className={`rounded-full transition-all duration-300 w-4 h-4 border-[2.5px] border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                          />
                        </div>

                        <SemesterChapter
                          academicYear={acYearData.academicYear}
                          semester={sem}
                        />

                        <div className="space-y-12 mt-12 pl-2 md:pl-6">
                          {sem.months.map(({ month, events }) => {
                            const isActiveMonth =
                              activeYear === acYearData.academicYear &&
                              activeMonth === month;

                            return (
                              <div key={month} className="relative">
                                <MonthMarker
                                  month={month}
                                  isActive={isActiveMonth}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                  {events.map((event, index) =>
                                    event.featured ? (
                                      <FeaturedEventCard
                                        key={event.eventId}
                                        event={event}
                                        index={index}
                                        isActive={
                                          activeCardId === String(event.eventId)
                                        }
                                      />
                                    ) : (
                                      <EventCard
                                        key={event.eventId}
                                        event={event}
                                        index={index}
                                        isActive={
                                          activeCardId === String(event.eventId)
                                        }
                                      />
                                    ),
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
