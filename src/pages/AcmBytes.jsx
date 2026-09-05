import React, { useState, useMemo } from "react";
import {
  FaBolt,
  FaMagnifyingGlass,
  FaTag,
  FaFilter,
  FaRegClock,
  FaRss,
} from "react-icons/fa6";
import { SectionHeader } from "../components/ui/SectionHeader";
import {
  acmBytesData,
  BYTE_CATEGORIES,
  CATEGORY_COLORS,
} from "../data/acmBytesData";

/* ----------------------------------------------------------
 * BYTE CARD
 * --------------------------------------------------------- */
function ByteCard({ byte, onClick }) {
  return (
    <div
      onClick={() => onClick(byte)}
      className="group bg-white border-[2px] border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 flex flex-col cursor-pointer"
    >
      {/* Colour band header */}
      <div
        className={`${byte.color} px-4 py-3 border-b-[2px] border-black flex items-center justify-between`}
      >
        <span className="text-2xl">{byte.emoji}</span>
        <span className="font-mono text-[10px] bg-black text-white px-2 py-0.5 rounded-md border border-black">
          {byte.readTime}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category badge */}
        <span
          className={`inline-block self-start text-[9px] font-black uppercase px-2.5 py-1 rounded-md border-[1.5px] border-black mb-2 ${
            CATEGORY_COLORS[byte.category] || "bg-retroYellow text-black"
          }`}
        >
          {byte.category}
        </span>

        <h3 className="font-black text-sm uppercase leading-snug text-black mb-2 group-hover:text-retroOrange transition-colors">
          {byte.title}
        </h3>
        <p className="text-xs font-medium text-black/70 leading-relaxed line-clamp-3 flex-1">
          {byte.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t-[1.5px] border-black/10">
          {byte.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[9px] font-black uppercase px-2 py-0.5 bg-neutral-100 border border-black/30 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-3 flex items-center justify-between text-[10px] font-black uppercase text-black/50">
        <span className="flex items-center gap-1">
          <FaRegClock className="text-[9px]" /> {byte.date}
        </span>
        <span className="group-hover:translate-x-1 transition-transform text-black font-black">
          Read →
        </span>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
 * FULL BYTE DETAIL VIEW (modal-like inline expansion)
 * --------------------------------------------------------- */
function ByteDetail({ byte, onClose }) {
  return (
    <div className="space-y-6 pb-8 max-w-3xl mx-auto">
      <button
        onClick={onClose}
        className="px-4 py-2.5 bg-white text-black text-xs font-black uppercase rounded-xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-retroOrange transition-all active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-2 cursor-pointer"
      >
        ← Back to Bytes
      </button>

      <article className="bg-white border-[2.5px] border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        {/* Colour header */}
        <div
          className={`${byte.color} px-6 sm:px-10 py-6 border-b-[2.5px] border-black flex flex-wrap items-center gap-4`}
        >
          <span className="text-5xl">{byte.emoji}</span>
          <div className="flex-1 min-w-0">
            <span
              className={`inline-block text-[10px] font-black uppercase px-2.5 py-1 rounded-md border-[1.5px] border-black mb-2 ${
                CATEGORY_COLORS[byte.category] || "bg-white text-black"
              }`}
            >
              {byte.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black uppercase text-black leading-tight">
              {byte.title}
            </h1>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-6">
          {/* Meta strip */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase">
            <span className="flex items-center gap-1.5 bg-neutral-100 border-[1.5px] border-black px-3 py-1.5 rounded-xl">
              <FaRegClock /> {byte.readTime}
            </span>
            <span className="bg-neutral-100 border-[1.5px] border-black px-3 py-1.5 rounded-xl">
              {byte.date}
            </span>
          </div>

          {/* Summary */}
          <p className="text-base font-bold text-black/80 leading-relaxed border-l-4 border-black pl-4">
            {byte.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t-[1.5px] border-black/20">
            <FaTag className="text-xs text-black/40 mt-0.5" />
            {byte.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-black uppercase px-2.5 py-1 bg-retroLime/30 border border-black rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

/* ----------------------------------------------------------
 * MAIN PAGE
 * --------------------------------------------------------- */
export default function AcmBytes() {
  const [activeByte, setActiveByte] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBytes = useMemo(() => {
    return acmBytesData.filter((b) => {
      const matchCat =
        selectedCategory === "ALL" || b.category === selectedCategory;
      const matchSearch =
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (activeByte) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <ByteDetail byte={activeByte} onClose={() => setActiveByte(null)} />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      {/* ── HEADER ── */}
      <section>
        <SectionHeader
          badgeText="⚡ QUICK READS"
          title="ACM BYTES."
          subtitle="Bite-sized AI news, concepts & updates — curated by ACM SIGAI TCET. Stay sharp, one byte at a time."
        />
      </section>

      {/* ── HERO BANNER ── */}
      <section className="bg-black border-[3px] border-black rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)]">
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-16 h-16 shrink-0 bg-retroOrange border-[3px] border-white rounded-2xl flex items-center justify-center">
            <FaBolt className="text-black text-2xl" />
          </div>
          <div>
            <h2 className="text-white font-black text-xl sm:text-3xl uppercase tracking-tight leading-tight">
              AI Knowledge, Served Fast.
            </h2>
            <p className="text-white/70 font-bold text-sm mt-1 max-w-xl">
              Each byte is a curated micro-read on AI breakthroughs, tools,
              ethics, and SIGAI news — designed to keep you informed in under 3
              minutes.
            </p>
          </div>
          <div className="sm:ml-auto shrink-0">
            <div className="flex items-center gap-2 bg-retroOrange text-black font-black text-xs uppercase px-4 py-2.5 rounded-xl border-[2px] border-white">
              <FaRss />
              {acmBytesData.length} Bytes Published
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH & FILTER ── */}
      <div className="flex flex-col sm:flex-row gap-3 bg-white p-4 border-[2.5px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Search */}
        <div className="relative flex-1">
          <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black text-xs" />
          <input
            type="text"
            placeholder="Search bytes, topics or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-neutral-100 border-[2px] border-black text-black placeholder:text-black/50 text-xs font-bold rounded-xl focus:outline-none focus:bg-white transition-colors"
          />
        </div>

        {/* Category filters — horizontal scroll on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 flex-nowrap sm:flex-wrap">
          <FaFilter className="text-xs text-black/50 shrink-0" />
          {BYTE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-3 py-1.5 text-[10px] font-black uppercase rounded-lg border-[2px] border-black transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5 ${
                selectedCategory === cat
                  ? "bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
                  : "bg-white text-black hover:bg-retroOrange"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── RESULTS COUNT ── */}
      <div className="flex items-center justify-between pb-2 border-b-[2px] border-black">
        <h2 className="font-black text-sm uppercase tracking-wider bg-retroOrange text-black px-3 py-1 rounded-lg border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {selectedCategory === "ALL" ? "All Bytes" : selectedCategory}
        </h2>
        <span className="font-black text-xs uppercase text-black bg-white px-3 py-1 rounded-lg border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {filteredBytes.length} Byte{filteredBytes.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* ── BYTES GRID ── */}
      {filteredBytes.length === 0 ? (
        <div className="text-center py-16 bg-white border-[2.5px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-black font-black uppercase text-sm mb-3">
            No bytes found.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("ALL");
              setSearchQuery("");
            }}
            className="px-4 py-2 bg-retroOrange text-black font-black text-xs uppercase rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredBytes.map((byte) => (
            <ByteCard key={byte.id} byte={byte} onClick={setActiveByte} />
          ))}
        </div>
      )}

      {/* ── SUBMIT CTA ── */}
      <section className="bg-retroCitrus border-[3px] border-black rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
          <div className="md:col-span-8">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none mb-2 text-black">
              Got a hot AI byte to share?
            </h2>
            <p className="font-bold text-xs sm:text-sm text-black/80 max-w-xl">
              Found a cool paper, tool, or AI news snippet? Submit it to our
              team and we'll curate it as the next ACM Byte!
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            <a
              href="mailto:acmsigai@tcetmumbai.in"
              className="w-full sm:w-auto px-6 py-3 bg-black text-white font-black text-xs uppercase rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:bg-retroOrange hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <FaBolt /> Submit a Byte
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
