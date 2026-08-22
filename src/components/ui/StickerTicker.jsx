import React from "react";

const STICKERS = [
  {
    id: 1,
    text: "SHIP CODE BEFORE THE MODEL HALTS",
    bg: "bg-[#D32F2F]",
    textColor: "text-retroYellow",
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
    bg: "bg-retroBlue",
    textColor: "text-white",
  },
  {
    id: 5,
    text: "TRANSFORMERS, AGENTS & OPEN SOURCE",
    bg: "bg-retroGreen",
    textColor: "text-black",
  },
];

const StickerTicker = () => {
  return (
    <div className="border-b-3 border-black py-2.5 overflow-hidden relative">
      <div className="flex items-center gap-5 animate-marquee whitespace-nowrap px-4 select-none">
        {[...STICKERS, ...STICKERS].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center bg-white rounded-md border-2 border-black p-1 shadow-brutal-sm"
          >
            <span
              className={`font-mono font-black text-[11px] tracking-wide px-2.5 py-1 rounded ${item.bg} ${item.textColor}`}
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
