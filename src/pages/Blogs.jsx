import React, { useState, useMemo, useEffect } from "react";
import {
  FaArrowRight,
  FaPenNib,
  FaRobot,
  FaBrain,
  FaComments,
  FaEye,
  FaMagnifyingGlass,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import StickerTicker from "../components/ui/StickerTicker";
import { SectionHeader } from "../components/ui/SectionHeader";

const CATEGORIES = [
  {
    name: "MACHINE LEARNING",
    count: "14 articles",
    Icon: FaRobot,
    bg: "bg-retroYellow",
  },
  {
    name: "DEEP LEARNING",
    count: "09 articles",
    Icon: FaBrain,
    bg: "bg-retroOrange",
  },
  {
    name: "LLMS & AGENTS",
    count: "12 articles",
    Icon: FaComments,
    bg: "bg-retroBlue",
  },
  {
    name: "COMPUTER VISION",
    count: "08 articles",
    Icon: FaEye,
    bg: "bg-retroGreen",
  },
];

const CATEGORY_COLORS = {
  "Machine Learning": "bg-retroYellow text-black",
  "Deep Learning": "bg-retroOrange text-black",
  "LLMs & Agents": "bg-retroBlue text-black",
  "Computer Vision": "bg-retroGreen text-black",
  Research: "bg-black text-white",
};

const FEATURED_BLOGS = [
  {
    id: 1,
    category: "LLMs & Agents",
    readTime: "6 min read",
    readMinutes: 6,
    title: "WHY SMALL SPECIFIC MODELS STILL MATTER IN 2026",
    excerpt:
      "Explore why task-specific models and edge deployments are outperforming massive LLMs in latency, security, and operational cost.",
    author: "Aarav K.",
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Computer Vision",
    readTime: "4 min read",
    readMinutes: 4,
    title: "SPATIAL AI & AUTONOMOUS DRIVING ARCHITECTURES",
    excerpt:
      "A deep dive into multi-camera visual odometry and real-time spatial transformer grids for autonomous vehicles.",
    author: "Alex Smith R.",
    img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Deep Learning",
    readTime: "8 min read",
    readMinutes: 8,
    title: "THE NEW MATHEMATICAL LANGUAGE OF TRANSFORMERS",
    excerpt:
      "Unpacking linear attention variants, state-space models, and geometric deep learning breakthroughs.",
    author: "Salman R.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Machine Learning",
    readTime: "5 min read",
    readMinutes: 5,
    title: "NEURAL SYMBOLIC AI: GIVING MACHINES REASONING",
    excerpt:
      "Combining classical logic systems with deep neural networks to eliminate hallucinations in decision pipelines.",
    author: "Nisha P.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Research",
    readTime: "7 min read",
    readMinutes: 7,
    title: "WHY THE BEST AI INSIGHTS HAPPEN IN OPEN SOURCE",
    excerpt:
      "How community-driven research labs are competing directly with billion-dollar corporate AI labs.",
    author: "Jane Rose",
    img: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Deep Learning",
    readTime: "5 min read",
    readMinutes: 5,
    title: "HARDWARE ACCELERATION: GPU VS NPU BENCHMARKS",
    excerpt:
      "Comparing memory bandwidth, TOPS performance, and energy efficiency for local neural processing units.",
    author: "Sam Johnson",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByReadTime, setSortByReadTime] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const slideshowBlogs = useMemo(() => FEATURED_BLOGS.slice(0, 3), []);

  const handleSlideChange = (newIndex) => {
    if (newIndex === currentSlide || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsFading(false);
    }, 200);
  };

  const nextSlide = () =>
    handleSlideChange((currentSlide + 1) % slideshowBlogs.length);
  const prevSlide = () =>
    handleSlideChange(
      (currentSlide - 1 + slideshowBlogs.length) % slideshowBlogs.length,
    );

  useEffect(() => {
    const slideTimer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [currentSlide, isFading]);

  const filteredBlogs = useMemo(() => {
    let result = FEATURED_BLOGS.filter((blog) => {
      const matchesCategory =
        selectedCategory === "ALL" ||
        blog.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortByReadTime) {
      result = [...result].sort((a, b) => a.readMinutes - b.readMinutes);
    }

    return result;
  }, [selectedCategory, searchQuery, sortByReadTime]);

  const activeHeroBlog = slideshowBlogs[currentSlide];

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      {/* 1. HEADER SECTION */}
      <section>
        <SectionHeader
          badgeText="OUR INSIGHTS"
          title="THOUGHTS & ARTICLES."
          subtitle="Deep dives, technical write-ups, and stories curated by the ACM SIGAI team."
          color="bg-retroGreen"
        />
      </section>

      <StickerTicker />

      {/* 3. HERO SLIDESHOW (PLACED FIRST) */}
      <section className="border-3 border-black rounded-2xl overflow-hidden bg-white relative shadow-none hover:shadow-brutal transition-shadow duration-200">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
          {/* Article Details */}
          <div
            className={`md:col-span-7 p-5 sm:p-6 flex flex-col justify-between border-b-3 md:border-b-0 md:border-r-3 border-black bg-retroYellow/10 transition-opacity duration-200 ease-in-out ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-black text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  FEATURED STORY #{currentSlide + 1}
                </span>
                <span
                  className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border-2 border-black ${
                    CATEGORY_COLORS[activeHeroBlog.category] ||
                    "bg-retroYellow text-black"
                  }`}
                >
                  {activeHeroBlog.category}
                </span>
                <span className="text-[10px] font-black uppercase text-black/70">
                  {activeHeroBlog.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-black mb-2 hover:text-retroOrange cursor-pointer transition-colors">
                {activeHeroBlog.title}
              </h2>

              <p className="text-xs sm:text-sm font-bold text-black/80 uppercase line-clamp-2 mb-4">
                {activeHeroBlog.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t-2 border-black/10">
              <span className="text-xs font-black uppercase text-black">
                By {activeHeroBlog.author}
              </span>

              <button className="px-3.5 py-1.5 bg-black text-white text-xs font-black uppercase rounded-lg border-2 border-black shadow-none hover:shadow-brutal hover:bg-retroOrange hover:text-black transition-all flex items-center gap-2">
                Read Article <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Cover Image */}
          <div className="md:col-span-5 relative h-56 md:h-auto overflow-hidden group">
            <img
              src={activeHeroBlog.img}
              alt={activeHeroBlog.title}
              className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Controls */}
            <div className="absolute bottom-3 right-3 flex gap-1.5">
              <button
                onClick={prevSlide}
                className="p-1.5 bg-white text-black border-2 border-black rounded-lg shadow-none hover:shadow-brutal hover:bg-retroOrange transition-all"
                aria-label="Previous Slide"
              >
                <FaChevronLeft className="w-3 h-3" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 bg-white text-black border-2 border-black rounded-lg shadow-none hover:shadow-brutal hover:bg-retroOrange transition-all"
                aria-label="Next Slide"
              >
                <FaChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute top-3 left-3 flex gap-1 bg-black/70 p-1 rounded-lg border border-white/30">
              {slideshowBlogs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSlideChange(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "w-5 bg-retroYellow"
                      : "w-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIDE NOTE (EDITORIAL HEADER & CATEGORY NAVIGATION BELOW HERO) */}
      <header className="border-3 border-black bg-white rounded-2xl overflow-hidden shadow-none hover:shadow-brutal transition-shadow duration-200">
        <div className="grid grid-cols-1 md:grid-cols-12 border-b-3 border-black">
          <div className="md:col-span-4 bg-retroOrange p-5 border-b-3 md:border-b-0 md:border-r-3 border-black flex flex-col justify-between">
            <div>
              <span className="font-black text-xs uppercase tracking-widest bg-black text-[#faf7f2] px-2 py-0.5 rounded">
                ACM SIGAI Blogs
              </span>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-none mt-2 text-black">
                SIDE NOTE
              </h1>
            </div>
            <p className="font-bold text-xs mt-2 uppercase text-black/80">
              Read / Write / Discover AI
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 divide-x-2 divide-y-2 sm:divide-y-0 divide-black bg-white">
            {CATEGORIES.map((cat, index) => {
              const isActive =
                selectedCategory.toLowerCase() === cat.name.toLowerCase();
              return (
                <button
                  key={index}
                  onClick={() =>
                    setSelectedCategory(
                      isActive ? "ALL" : cat.name.toUpperCase(),
                    )
                  }
                  className={`p-3.5 flex flex-col justify-between transition-all cursor-pointer group text-left ${
                    isActive
                      ? "bg-slate-200 ring-2 ring-inset ring-black"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg border-2 border-black flex items-center justify-center ${cat.bg} group-hover:rotate-6 group-hover:scale-110 transition-transform`}
                  >
                    <cat.Icon className="w-3 h-3 text-black" />
                  </span>
                  <div>
                    <h3 className="font-black text-xs uppercase tracking-tight mt-3 text-black">
                      {cat.name}
                    </h3>
                    <span className="text-[10px] font-bold text-black/60 uppercase">
                      {cat.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-retroYellow p-2.5 sm:px-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="font-black text-xs uppercase tracking-wide flex items-center gap-2 text-black">
            <FaPenNib className="text-black" /> Have an article idea? Publish
            your own research
          </span>
          <button className="w-full sm:w-auto px-4 py-1 bg-black text-[#faf7f2] text-xs font-black uppercase rounded-lg border-2 border-black shadow-none hover:shadow-brutal hover:bg-retroOrange hover:text-black transition-all active:translate-y-0.5">
            Start Writing
          </button>
        </div>
      </header>

      {/* 5. SEARCH & FILTER CONTROLS BAR */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center bg-white p-3 border-3 border-black rounded-2xl shadow-none hover:shadow-brutal transition-shadow duration-200">
        <div className="relative w-full sm:w-80">
          <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black text-xs" />
          <input
            type="text"
            placeholder="Search articles or authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-slate-100 border-2 border-black text-black placeholder:text-black/60 text-xs font-bold rounded-xl focus:outline-none focus:bg-white transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
          {selectedCategory !== "ALL" && (
            <button
              onClick={() => setSelectedCategory("ALL")}
              className="px-3 py-1.5 text-[11px] font-black uppercase bg-retroOrange text-black border-2 border-black rounded-lg shadow-none hover:shadow-brutal hover:scale-105 transition-all"
            >
              Clear Filter ✕
            </button>
          )}

          <button
            onClick={() => setSortByReadTime(!sortByReadTime)}
            className={`px-3 py-1.5 text-xs font-black uppercase border-2 border-black rounded-lg flex items-center gap-1.5 transition-all shadow-none hover:shadow-brutal ${
              sortByReadTime
                ? "bg-retroYellow text-black"
                : "bg-slate-100 text-black hover:bg-slate-200"
            }`}
          >
            <FaFilter className="text-[10px]" />
            {sortByReadTime ? "Sorted: Quick Reads" : "Sort: Read Time"}
          </button>
        </div>
      </div>

      {/* 6. ARTICLES GRID */}
      <section>
        <div className="flex justify-between items-center mb-4 pb-2 border-b-3 border-slate-700">
          <h2 className="font-black text-base uppercase tracking-wider bg-retroYellow text-black px-2.5 py-0.5 rounded border-2 border-black">
            {selectedCategory === "ALL" ? "All Articles" : selectedCategory}
          </h2>

          <span className="font-black text-xs uppercase text-slate-300">
            Showing {filteredBlogs.length} Article
            {filteredBlogs.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-8 bg-white border-3 border-black rounded-2xl shadow-none hover:shadow-brutal transition-shadow duration-200">
            <p className="text-black font-bold uppercase text-xs">
              No articles found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="mt-2 px-3 py-1 bg-retroYellow text-black font-black text-xs uppercase rounded-lg border-2 border-black shadow-none hover:shadow-brutal hover:bg-retroOrange transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white border-3 border-black rounded-2xl overflow-hidden shadow-none hover:shadow-brutal hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="relative h-44 border-b-3 border-black overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 flex gap-1.5">
                      <span
                        className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border-2 border-black ${
                          CATEGORY_COLORS[blog.category] ||
                          "bg-retroYellow text-black"
                        }`}
                      >
                        {blog.category}
                      </span>
                    </div>
                    <span className="absolute top-2 right-2 bg-white border-2 border-black text-black text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-none group-hover:shadow-brutal transition-shadow">
                      {blog.readTime}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="font-black text-sm uppercase leading-tight text-black group-hover:text-retroOrange transition-colors mb-1.5">
                      {blog.title}
                    </h3>
                    <p className="text-xs font-bold text-black/70 uppercase line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-3 pt-2 border-t-2 border-black/10 flex justify-between items-center text-[10px] font-black uppercase text-black/80">
                  <span>By {blog.author}</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform text-black" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 7. CALL-TO-ACTION BANNER */}
      <section className="bg-retroYellow border-3 border-black rounded-2xl p-5 sm:p-8 relative overflow-hidden shadow-none hover:shadow-brutal transition-shadow duration-200">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
          <div className="md:col-span-8">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter leading-none mb-2 text-black">
              Got a unique AI story worth sharing?
            </h2>
            <p className="font-bold text-xs uppercase text-black/80 max-w-xl">
              We're always looking for student research, tutorial guides, and
              original perspectives. If you have an idea or draft — we'd love to
              publish it!
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center">
            <button className="w-full sm:w-auto px-5 py-2.5 bg-black text-white font-black text-xs uppercase rounded-xl border-2 border-black shadow-none hover:shadow-brutal hover:bg-retroOrange hover:text-black transition-all active:translate-y-0.5 flex items-center gap-2">
              <FaPenNib /> Write for Side Note
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
