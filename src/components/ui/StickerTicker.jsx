import React from "react";

const STICKERS = [
  {
    id: 1,
    text: "SHIP CODE BEFORE THE MODEL HALTS",
    bg: "bg-[#0A192F]", // Navy Blue
    textColor: "text-retroLime",
  },
  {
    id: 2,
    text: "DEEP DIVES // ARCHITECTURE & RESEARCH",
    bg: "bg-retroYellow",
    textColor: "text-black",
  },
  {
    id: 3,
    text: "NEURAL NETWORKS & LATE NIGHT READS",
    bg: "bg-retroPink",
    textColor: "text-black",
  },
  {
    id: 4,
    text: "0x200: ARTICLE_PUBLISHED_SUCCESSFULLY",
    bg: "bg-retroOrange",
    textColor: "text-black",
  },
  {
    id: 5,
    text: "TRANSFORMERS, AGENTS & OPEN SOURCE",
    bg: "bg-retroLime",
    textColor: "text-black",
  },
  {
    id: 6,
    text: "SYSTEMS_ONLINE // ACM_SIGAI_2026",
    bg: "bg-[#0A192F]", // Navy Blue
    textColor: "text-retroLime",
  },
];

const StickerTicker = () => {
  // Repeating array 4x guarantees smooth, uninterrupted scrolling across ultra-wide monitors
  const tickerItems = [...STICKERS, ...STICKERS, ...STICKERS, ...STICKERS];

  return (
    <div className="border-3 border-black py-2.5 bg-white rounded-2xl overflow-hidden relative shadow-brutal my-4 flex">
      <div className="flex items-center gap-5 animate-marquee whitespace-nowrap select-none shrink-0 min-w-full">
        {tickerItems.map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center bg-white rounded-lg border-2 border-black p-1 shadow-brutal-sm hover:scale-105 transition-transform"
          >
            <span
              className={`font-mono font-black text-[11px] uppercase tracking-wide px-3 py-1 rounded-md border border-black/10 ${item.bg} ${item.textColor}`}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickerTicker;
