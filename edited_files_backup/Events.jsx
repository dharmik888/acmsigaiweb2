import React, { useState } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export default function Events() {
  const [filter, setFilter] = useState("ALL");

  const eventsList = [
    {
      title: "AI Hackathon 2026",
      type: "UPCOMING",
      date: "Sept 15, 2026",
      glass: "yellow",
    },
    {
      title: "LLM Workshop Series",
      type: "PAST",
      date: "Aug 02, 2026",
      glass: "pink",
    },
    {
      title: "Neural Networks Bootcamp",
      type: "PAST",
      date: "Jul 10, 2026",
      glass: "blue",
    },
  ];

  return (
    <div className="space-y-10 bg-paper-grid min-h-screen pb-12">
      <SectionHeader
        title="CHAPTER EVENTS"
        subtitle="Workshops, hackathons, and interactive technical sessions."
        badgeText="ACTION"
      />

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3">
        {["ALL", "UPCOMING", "PAST"].map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 font-black text-xs uppercase border-2 border-darkBorder rounded-lg transition-all ${
              filter === t
                ? "bg-retroPink text-darkCard shadow-brutal -translate-y-0.5"
                : "bg-darkCard text-darkText hover:bg-darkSurface"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsList
          .filter((e) => filter === "ALL" || e.type === filter)
          .map((event, idx) => (
            <Card
              key={idx}
              title={event.title}
              category={event.type}
              glassColor={event.glass}
            >
              <div className="p-3 border-2 border-darkBorder rounded-lg mb-4 font-bold text-sm bg-darkCard text-darkText">
                🗓️ {event.date}
              </div>
              <p className="text-sm font-medium mb-4 text-darkMuted">
                Hands-on training session covering key AI architectures and
                practical deployments.
              </p>
              <Button variant="pink" size="sm" className="w-full">
                {event.type === "UPCOMING" ? "Register Now" : "View Recap"}
              </Button>
            </Card>
          ))}
      </div>
    </div>
  );
}
