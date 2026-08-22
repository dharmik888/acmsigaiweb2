// src/pages/Events.jsx
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { eventsData } from "../data/eventsData";
import { SectionHeader } from "../components/ui/SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";

const TYPE_COLORS = {
  Event: "bg-retroPink",
  Workshop: "bg-retroBlue",
  Seminar: "bg-retroYellow",
  Competition: "bg-retroGreen",
  "Industrial Visit": "bg-retroPink",
  "Expert Talk": "bg-retroBlue",
  Other: "bg-retroYellow",
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

  const cardColor = TYPE_COLORS[event.type] || "bg-retroPink";

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
            <span className="inline-block bg-white text-black font-semibold text-[11px] uppercase border-[1.5px] border-black px-2.5 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              {event.type}
            </span>
            <span className="font-mono text-[11px] bg-black text-white px-2.5 py-0.5 rounded-md border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              {event.date}
            </span>
          </div>

          <div className="p-5 flex-grow flex flex-col bg-[#fdfbf7]">
            <h4 className="text-lg font-bold tracking-tight leading-snug mb-3 text-black">
              {event.title}
            </h4>

            {event.shortDescription && (
              <p className="text-xs text-black/70 font-normal leading-relaxed mb-5 border-l-2 border-retroYellow pl-3 py-0.5">
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
                <span className="flex items-center font-medium border border-black px-2.5 py-1 rounded-md bg-retroYellow shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  <UsersIcon /> {event.participants}
                </span>
              )}
              {event.venue && event.venue !== "N/A" && (
                <span className="flex items-center font-medium border border-black px-2.5 py-1 rounded-md bg-retroBlue shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  <BuildingIcon /> {event.venue}
                </span>
              )}
            </div>
          </div>

          <div className="p-3 border-t-[1.5px] border-black bg-white flex justify-end items-center">
            <Link
              to={`/events/${event.eventId}`}
              className="bg-retroBlue text-black font-semibold text-xs uppercase px-5 py-2 rounded-lg border-[1.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-2 group/btn"
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

// Odd semester: June–November (months 6–11)
// Even semester: December–May (months 12,1–5)
const ODD_MONTHS = ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV"];
const EVEN_MONTHS = ["DEC", "JAN", "FEB", "MAR", "APR", "MAY"];

function getSemester(dateStr) {
  const month = getMonthFromDate(dateStr);
  if (ODD_MONTHS.includes(month)) return "ODD";
  if (EVEN_MONTHS.includes(month)) return "EVEN";
  return "ALL";
}

export default function Events() {
  const [filter, setFilter] = useState("ALL");
  const [semester, setSemester] = useState("ALL");

  const categories = useMemo(() => {
    const types = new Set(eventsData.map((e) => e.type));
    return ["ALL", ...Array.from(types).sort()];
  }, []);

  const eventsByYearAndMonth = useMemo(() => {
    const filtered = eventsData.filter((e) => {
      const typeMatch = filter === "ALL" || e.type === filter;
      const semMatch = semester === "ALL" || getSemester(e.date) === semester;
      return typeMatch && semMatch;
    });

    const groupedByYear = filtered.reduce((acc, event, index) => {
      const y = event.year || "Archive";
      if (!acc[y]) acc[y] = {};

      const mStr = getMonthFromDate(event.date);
      if (!acc[y][mStr]) acc[y][mStr] = [];

      acc[y][mStr].push({
        ...event,
        eventId: event.id ?? event.slug ?? index + 1,
      });
      return acc;
    }, {});

    const sortedYears = Object.keys(groupedByYear).sort((a, b) =>
      b.localeCompare(a),
    );

    return sortedYears.map((year) => {
      const monthsObj = groupedByYear[year];
      const sortedMonths = Object.keys(monthsObj).sort((a, b) => {
        const idxA = SHORT_MONTHS.indexOf(a);
        const idxB = SHORT_MONTHS.indexOf(b);
        if (idxA === -1) return 1;
        if (idxB === -1) return -1;
        return idxB - idxA;
      });

      const months = sortedMonths.map((m) => ({
        month: m,
        events: monthsObj[m],
      }));

      return { year, months };
    });
  }, [filter, semester]);

  const [activeCardId, setActiveCardId] = useState(null);

  const { activeYear, activeMonth } = useMemo(() => {
    if (!activeCardId) {
      return {
        activeYear: eventsByYearAndMonth[0]?.year,
        activeMonth: eventsByYearAndMonth[0]?.months[0]?.month,
      };
    }

    for (const yearGroup of eventsByYearAndMonth) {
      for (const monthGroup of yearGroup.months) {
        if (monthGroup.events.some((e) => String(e.eventId) === activeCardId)) {
          return { activeYear: yearGroup.year, activeMonth: monthGroup.month };
        }
      }
    }
    return {
      activeYear: eventsByYearAndMonth[0]?.year,
      activeMonth: eventsByYearAndMonth[0]?.months[0]?.month,
    };
  }, [activeCardId, eventsByYearAndMonth]);

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

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [filter]); // Re-run when filter changes because DOM elements change

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <section>
        {/* Uniform SectionHeader */}
        <SectionHeader
          badgeText="OUR JOURNEY"
          title="THINGS WE'VE DONE."
          subtitle="A collection of events, workshops, seminars and experiences from ACM SIGAI."
        />

        {/* Semester Tabs */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[11px] text-black/40 uppercase tracking-wider mr-1">Semester</span>
          {[
            { id: "ALL", label: "All" },
            { id: "ODD",  label: "Odd Semester", sub: "Jun – Nov" },
            { id: "EVEN", label: "Even Semester", sub: "Dec – May" },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => { setSemester(s.id); setActiveCardId(null); }}
              className={`flex items-center gap-1.5 px-4 py-1.5 font-bold text-xs uppercase border-[1.5px] border-black rounded-lg transition-all ${
                semester === s.id
                  ? "bg-retroYellow text-black shadow-none translate-y-[1px] translate-x-[1px]"
                  : "bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50"
              }`}
            >
              {s.label}
              {s.sub && (
                <span className="font-mono text-[9px] opacity-60 normal-case">{s.sub}</span>
              )}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="w-full mb-12">
          <div className="flex flex-wrap justify-start gap-2.5 w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setActiveCardId(null); }}
                className={`px-4 py-1.5 font-bold text-xs uppercase border-[1.5px] border-black rounded-lg transition-all ${
                  filter === cat
                    ? "bg-retroBlue text-black shadow-none translate-y-[1px] translate-x-[1px]"
                    : "bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid with Timeline */}
        <div className="relative flex max-w-full">
          {/* TIMELINE SPINE */}
          <div className="w-6 md:w-8 lg:w-12 shrink-0 relative mr-3 md:mr-4 lg:mr-6 flex justify-center">
            {/* Changed bg-black/10 -> bg-white/20 for the base track */}
            <div className="absolute top-0 bottom-0 w-[2.5px] md:w-[3px] bg-white/20 rounded-full" />

            {/* Changed bg-black -> bg-white for the active scroll line */}
            <motion.div
              className="absolute top-0 bottom-0 w-[2.5px] md:w-[3px] bg-white rounded-full origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          {/* EVENTS CONTENT */}
          <div
            className="flex-1 w-full min-w-0 pb-12 relative"
            ref={containerRef}
          >
            {eventsByYearAndMonth.map(({ year, months }) => {
              const isActiveYear = activeYear === year;

              return (
                <div key={year} className="relative mb-20 last:mb-0">
                  {/* Timeline Marker Node for YEAR */}
                  <div className="absolute top-2 -left-[36px] md:-left-[44px] lg:-left-[60px] z-10 flex items-center justify-center w-6 h-6">
                    <motion.div
                      className={`rounded-full transition-all duration-300 ${
                        isActiveYear
                          ? "w-4 h-4 border-[2.5px] border-black bg-retroYellow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          : "w-2.5 h-2.5 border-[2px] border-black/30 bg-white"
                      }`}
                      animate={{ scale: isActiveYear ? 1.2 : 1 }}
                    />
                  </div>

                  <motion.div
                    className="mb-8 flex justify-start"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h3 className="text-xl font-black bg-white text-black border-[2px] border-black px-5 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1 inline-block rounded-xl tracking-tight">
                      {year}
                    </h3>
                  </motion.div>

                  <div className="space-y-12">
                    {months.map(({ month, events }) => {
                      const isActiveMonth =
                        activeYear === year && activeMonth === month;

                      return (
                        <div key={month} className="relative">
                          {/* Timeline Marker Node for MONTH */}
                          <div className="absolute top-1.5 -left-[36px] md:-left-[44px] lg:-left-[60px] z-10 flex items-center justify-center w-6 h-6">
                            <motion.div
                              className={`rounded-full transition-all duration-300 ${
                                isActiveMonth
                                  ? "w-2.5 h-2.5 border-[2px] border-black bg-retroPink shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] scale-125"
                                  : "w-1.5 h-1.5 border-[1.5px] border-black/30 bg-white"
                              }`}
                            />
                          </div>

                          {/* MONTH LABEL */}
                          {month !== "UNK" && (
                            <motion.div
                              className="mb-5 flex justify-start items-center"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: false, amount: 0.8 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div
                                className={`text-[11px] font-bold px-3 py-1 border-[1.5px] border-black rounded-md uppercase tracking-widest transition-all duration-300 ${
                                  isActiveMonth
                                    ? "bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1"
                                    : "bg-transparent text-black/40 border-black/20 shadow-none"
                                }`}
                              >
                                {month}
                              </div>
                            </motion.div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {events.map((event, index) => (
                              <EventCard
                                key={event.eventId}
                                event={event}
                                index={index}
                                isActive={
                                  activeCardId === String(event.eventId)
                                }
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
