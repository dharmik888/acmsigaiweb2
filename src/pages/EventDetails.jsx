// src/pages/EventDetails.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { eventsData } from "../data/eventsData";

const TYPE_COLORS = {
  Event: "bg-retroPink",
  Workshop: "bg-retroBlue",
  Seminar: "bg-retroYellow",
  Competition: "bg-retroGreen",
  "Industrial Visit": "bg-retroPink",
  "Expert Talk": "bg-retroBlue",
  Other: "bg-retroYellow",
};

export default function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Robust lookup supporting id, index, slug, or title
  const event = eventsData.find((e, index) => {
    const currentId = String(e.id ?? e.slug ?? index + 1);
    return currentId === String(eventId);
  });

  if (!event) {
    return (
      <div className="py-20 text-center space-y-4">
        <div className="font-mono text-xs text-gray-400 uppercase">
          // 404_EVENT_NOT_FOUND
        </div>
        <h2 className="text-2xl font-bold">
          Event does not exist or was removed.
        </h2>
        <Link
          to="/events"
          className="inline-block bg-retroBlue text-black font-semibold text-xs px-4 py-2 rounded-lg border-[1.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          ← Back to Events
        </Link>
      </div>
    );
  }

  const headerBg = TYPE_COLORS[event.type] || "bg-retroPink";

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20 pt-4">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-white hover:bg-slate-50 text-black font-mono text-xs font-semibold px-3.5 py-1.5 rounded-lg border-[1.5px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2"
        >
          <span>←</span>
          <span>BACK_TO_EVENTS</span>
        </button>

        <span className="font-mono text-[11px] text-gray-400">
          EVENT_REF // #{eventId}
        </span>
      </div>

      <article className="bg-white border-[1.5px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div
          className={`p-6 sm:p-8 border-b-[1.5px] border-black ${headerBg} space-y-4`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-white text-black font-semibold text-xs uppercase border-[1.5px] border-black px-3 py-1 rounded-full shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              {event.type}
            </span>
            <span className="font-mono text-xs bg-black text-white px-3 py-1 rounded-md border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              {event.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-black tracking-tight leading-tight">
            {event.title}
          </h1>
        </div>

        <div className="p-6 sm:p-10 bg-[#fdfbf7] space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {event.image && (
              <div className="md:col-span-5 border-[1.5px] border-black rounded-xl overflow-hidden bg-white shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-auto object-cover max-h-96"
                />
              </div>
            )}

            <div
              className={`${event.image ? "md:col-span-7" : "md:col-span-12"} space-y-4`}
            >
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block">
                // OVERVIEW
              </span>
              <p className="text-base text-black/80 font-normal leading-relaxed whitespace-pre-wrap">
                {event.description || event.shortDescription}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block mb-4">
              // LOGISTICS & METRICS
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-xs">
              {event.venue && event.venue !== "N/A" && (
                <div className="p-4 rounded-xl border-[1.5px] border-black bg-retroBlue/15 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] space-y-1">
                  <span className="font-mono text-[10px] text-black/60 uppercase block">
                    Venue
                  </span>
                  <span className="font-bold text-sm text-black">
                    {event.venue}
                  </span>
                </div>
              )}

              {event.mode && (
                <div className="p-4 rounded-xl border-[1.5px] border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] space-y-1">
                  <span className="font-mono text-[10px] text-black/60 uppercase block">
                    Mode
                  </span>
                  <span className="font-bold text-sm text-black">
                    {event.mode}
                  </span>
                </div>
              )}

              {event.participants && (
                <div className="p-4 rounded-xl border-[1.5px] border-black bg-retroYellow/25 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] space-y-1">
                  <span className="font-mono text-[10px] text-black/60 uppercase block">
                    Attendance
                  </span>
                  <span className="font-bold text-sm text-black">
                    {event.participants}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
