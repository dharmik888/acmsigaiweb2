// src/pages/EventDetails.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { eventsData } from "../data/eventsData";

const TYPE_COLORS = {
  Event: "bg-retroSky",
  Workshop: "bg-retroLime",
  Seminar: "bg-retroCitrus",
  Competition: "bg-retroOrange",
  "Industrial Visit": "bg-retroSky",
  "Expert Talk": "bg-retroLime",
  Other: "bg-retroCitrus",
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
        <div className="font-mono text-xs text-retroGreySlate uppercase">
          // 404_EVENT_NOT_FOUND
        </div>
        <h2 className="text-2xl font-black uppercase text-black">
          Event does not exist or was removed.
        </h2>
        <Link
          to="/events"
          className="inline-block bg-retroOrange text-black font-black uppercase text-xs px-4 py-2 rounded-xl border-3 border-black shadow-brutal btn-brutal-press"
        >
          ← Back to Events
        </Link>
      </div>
    );
  }

  const headerBg = TYPE_COLORS[event.type] || "bg-retroSky";

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20 pt-4 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-white hover:bg-slate-100 text-black font-mono text-xs font-black px-4 py-2 rounded-xl border-3 border-black shadow-brutal-sm btn-brutal-press flex items-center gap-2"
        >
          <span>←</span>
          <span>BACK_TO_EVENTS</span>
        </button>

        <span className="font-mono text-xs font-bold text-retroGreySlate">
          EVENT_REF // #{eventId}
        </span>
      </div>

      <article className="bg-white border-3 border-black rounded-3xl shadow-brutal-lg overflow-hidden">
        <div
          className={`p-6 sm:p-10 border-b-3 border-black ${headerBg} space-y-4`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-white text-black font-black text-xs uppercase border-3 border-black px-3.5 py-1 rounded-full shadow-brutal-sm">
              {event.type}
            </span>
            <span className="font-mono text-xs font-bold bg-black text-retroLime px-3 py-1 rounded-xl border-3 border-black shadow-brutal-sm">
              {event.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase text-black tracking-tight leading-none">
            {event.title}
          </h1>
        </div>

        <div className="p-6 sm:p-10 bg-white space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {event.image && (
              <div className="md:col-span-5 border-3 border-black rounded-2xl overflow-hidden bg-white shadow-brutal flex justify-center items-center">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}

            <div
              className={`${event.image ? "md:col-span-7" : "md:col-span-12"} space-y-4`}
            >
              <div className="inline-block font-black text-xs md:text-sm uppercase tracking-widest bg-retroYellow text-black border-3 border-black px-4 py-2 shadow-brutal-sm mb-2">
                OVERVIEW
              </div>
              <p className="text-base font-bold text-black/80 leading-relaxed whitespace-pre-wrap">
                {event.description || event.shortDescription}
              </p>
            </div>
          </div>

          <div className="pt-8 border-t-3 border-black space-y-12">
            <div>
              <div className="inline-block font-black text-xs md:text-sm uppercase tracking-widest bg-retroLime text-black border-3 border-black px-4 py-2 shadow-brutal-sm mb-6">
                LOGISTICS & METRICS
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                {event.venue && event.venue !== "N/A" && (
                  <div className="space-y-1 border-l-3 border-retroLime pl-4">
                    <span className="font-bold text-black/60 uppercase text-[10px] tracking-wider block">
                      Venue
                    </span>
                    <span className="font-black text-black uppercase block">
                      {event.venue}
                    </span>
                  </div>
                )}

                {event.mode && (
                  <div className="space-y-1 border-l-3 border-retroLime pl-4">
                    <span className="font-bold text-black/60 uppercase text-[10px] tracking-wider block">
                      Mode
                    </span>
                    <span className="font-black text-black uppercase block">
                      {event.mode}
                    </span>
                  </div>
                )}

                {event.participants && (
                  <div className="space-y-1 border-l-3 border-retroLime pl-4">
                    <span className="font-bold text-black/60 uppercase text-[10px] tracking-wider block">
                      Attendance
                    </span>
                    <span className="font-black text-black uppercase block">
                      {event.participants}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {event.highlights && event.highlights.length > 0 && (
              <div>
                <div className="inline-block font-black text-xs md:text-sm uppercase tracking-widest bg-retroSky text-black border-3 border-black px-4 py-2 shadow-brutal-sm mb-6">
                  KEY HIGHLIGHTS
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm font-bold text-black/80">
                  {event.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {(event.speakers?.length > 0 || event.organizers?.length > 0) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {event.speakers?.length > 0 && (
                  <div>
                    <div className="inline-block font-black text-xs md:text-sm uppercase tracking-widest bg-retroOrange text-black border-3 border-black px-4 py-2 shadow-brutal-sm mb-6">
                      SPEAKERS & RESOURCE PERSONS
                    </div>
                    <ul className="space-y-3 border-l-3 border-retroOrange pl-4">
                      {event.speakers.map((s, i) => (
                        <li key={i} className="font-black text-black/80 text-sm">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.organizers?.length > 0 && (
                  <div>
                    <div className="inline-block font-black text-xs md:text-sm uppercase tracking-widest bg-retroCitrus text-black border-3 border-black px-4 py-2 shadow-brutal-sm mb-6">
                      ORGANIZERS & COORDINATORS
                    </div>
                    <ul className="space-y-4 border-l-3 border-retroCitrus pl-4">
                      {event.organizers.map((org, i) => (
                        <li key={i} className="space-y-0.5">
                          <span className="font-black text-sm text-black block">{org.name}</span>
                          <span className="font-bold text-[11px] text-black/60 uppercase block">{org.role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
