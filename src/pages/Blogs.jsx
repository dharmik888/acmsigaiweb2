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
  FaArrowLeft,
  FaCalendarDays,
  FaUser,
  FaTag,
} from "react-icons/fa6";
import StickerTicker from "../components/ui/StickerTicker";
import { SectionHeader } from "../components/ui/SectionHeader";
import { blogsData } from "../data/blogsData";

const CATEGORY_COLORS = {
  "Machine Learning": "bg-retroYellow text-black",
  "Deep Learning": "bg-retroPink text-black",
  "LLMs & Agents": "bg-retroOrange text-black",
  "Computer Vision": "bg-retroLime text-black",
  Research: "bg-black text-white",
};

export default function Blogs() {
  const [activeBlog, setActiveBlog] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByReadTime, setSortByReadTime] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const slideshowBlogs = useMemo(() => blogsData.slice(0, 3), []);

  const handleSlideChange = (newIndex) => {
    if (newIndex === currentSlide || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsFading(false);
    }, 200);
  };

  const nextSlide = () => {
    if (slideshowBlogs.length === 0) return;
    handleSlideChange((currentSlide + 1) % slideshowBlogs.length);
  };

  const prevSlide = () => {
    if (slideshowBlogs.length === 0) return;
    handleSlideChange(
      (currentSlide - 1 + slideshowBlogs.length) % slideshowBlogs.length,
    );
  };

  useEffect(() => {
    if (slideshowBlogs.length <= 1 || activeBlog) return;
    const slideTimer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [currentSlide, isFading, slideshowBlogs.length, activeBlog]);

  const handleSelectBlog = (blog) => {
    setActiveBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setActiveBlog(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredBlogs = useMemo(() => {
    let result = blogsData.filter((blog) => {
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

  /* -------------------------------------------------------------
   * RENDER SINGLE BLOG FULL-PAGE VIEW
   * ----------------------------------------------------------- */
  if (activeBlog) {
    return (
      <div className="space-y-6 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        {/* Back Button */}
        <button
          onClick={handleBackToList}
          className="px-4 py-2.5 bg-white text-black text-xs font-black uppercase rounded-xl border-3 border-black shadow-brutal hover:bg-retroYellow transition-all active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-2 cursor-pointer"
        >
          <FaArrowLeft /> Back to Articles
        </button>

        {/* Article Container */}
        <article className="bg-white border-3 border-black rounded-3xl overflow-hidden shadow-brutal-lg p-6 sm:p-10">
          {/* Header Grid: Image and Heading side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8 pb-8 border-b-3 border-black">
            {/* Title & Metadata Column */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span
                    className={`text-xs font-black uppercase px-3 py-1 rounded-md border-2 border-black select-none ${
                      CATEGORY_COLORS[activeBlog.category] ||
                      "bg-retroYellow text-black"
                    }`}
                  >
                    {activeBlog.category}
                  </span>
                  <span className="text-xs font-black uppercase text-black/70 bg-neutral-100 border-2 border-black px-2.5 py-1 rounded-md">
                    {activeBlog.readTime}
                  </span>
                  {activeBlog.date && (
                    <span className="text-xs font-black uppercase text-black/70 flex items-center gap-1">
                      <FaCalendarDays className="text-[10px]" />{" "}
                      {activeBlog.date}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black leading-tight mb-6">
                  {activeBlog.title}
                </h1>
              </div>

              {/* Author info strip */}
              <div className="flex items-center gap-3 p-3.5 bg-neutral-100 border-2 border-black rounded-2xl mt-4">
                <div className="w-10 h-10 rounded-xl bg-retroPink border-2 border-black flex items-center justify-center text-black font-black text-sm shrink-0">
                  <FaUser />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-black">
                    {activeBlog.author}
                  </p>
                  {activeBlog.designation && (
                    <p className="text-[11px] font-bold text-black/60">
                      {activeBlog.designation}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Header Image Column */}
            {(activeBlog.img || activeBlog.image) && (
              <div className="md:col-span-5 relative border-3 border-black rounded-2xl overflow-hidden bg-black min-h-[260px] max-h-[380px]">
                <img
                  src={activeBlog.img || activeBlog.image}
                  alt={activeBlog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Tags Section */}
          {activeBlog.tags && activeBlog.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b-2 border-black/10">
              <FaTag className="text-xs text-black/60" />
              {activeBlog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-black uppercase px-2.5 py-1 bg-retroLime/30 border border-black rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Body Content */}
          <div
            className="prose max-w-none text-black font-medium text-sm sm:text-base leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: activeBlog.content }}
          />
        </article>
      </div>
    );
  }

  /* -------------------------------------------------------------
   * RENDER BLOG LISTING VIEW
   * ----------------------------------------------------------- */
  return (
    <div className="space-y-4 sm:space-y-6 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      {/* 1. HEADER SECTION */}
      <section>
        <SectionHeader
          badgeText="OUR INSIGHTS"
          title="THOUGHTS & ARTICLES."
          subtitle="Deep dives, technical write-ups, and stories curated by the ACM SIGAI team."
        />
      </section>

      <StickerTicker />

      {/* 2. HERO SLIDESHOW */}
      {activeHeroBlog && (
        <section className="border-3 border-black rounded-3xl overflow-hidden bg-white relative shadow-brutal hover:shadow-brutal-lg transition-all duration-200">
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
            {/* Article Details */}
            <div
              className={`md:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b-3 md:border-b-0 md:border-r-3 border-black bg-retroLime/20 transition-opacity duration-200 ease-in-out ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-black text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md border border-black select-none">
                    FEATURED STORY #{currentSlide + 1}
                  </span>
                  <span
                    className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md border-2 border-black select-none ${
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

                <h2
                  onClick={() => handleSelectBlog(activeHeroBlog)}
                  className="text-xl sm:text-3xl font-black uppercase tracking-tight text-black mb-3 hover:text-retroPink cursor-pointer transition-colors"
                >
                  {activeHeroBlog.title}
                </h2>

                <p className="text-xs sm:text-sm font-bold text-black/80 line-clamp-2 mb-4">
                  {activeHeroBlog.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t-2 border-black/20">
                <span className="text-xs font-black uppercase text-black">
                  By {activeHeroBlog.author}
                </span>

                <button
                  onClick={() => handleSelectBlog(activeHeroBlog)}
                  className="px-4 py-2 bg-black text-white text-xs font-black uppercase rounded-xl border-1 border-black  hover:bg-retroOrange hover:text-black transition-all active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  Read Article <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Cover Image */}
            <div
              onClick={() => handleSelectBlog(activeHeroBlog)}
              className="md:col-span-5 relative h-64 md:h-auto overflow-hidden group bg-black cursor-pointer"
            >
              <img
                src={activeHeroBlog.img || activeHeroBlog.image}
                alt={activeHeroBlog.title}
                className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Controls */}
              <div
                className="absolute bottom-4 right-4 flex gap-2 z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={prevSlide}
                  className="p-2 bg-white text-black border-2 border-black rounded-xl shadow-brutal-sm hover:bg-retroPink transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                  aria-label="Previous Slide"
                >
                  <FaChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 bg-white text-black border-2 border-black rounded-xl shadow-brutal-sm hover:bg-retroPink transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                  aria-label="Next Slide"
                >
                  <FaChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Indicators */}
              <div
                className="absolute top-4 left-4 flex gap-1.5 bg-black/80 p-1.5 rounded-xl border-2 border-black z-10"
                onClick={(e) => e.stopPropagation()}
              >
                {slideshowBlogs.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSlideChange(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx
                        ? "w-6 bg-retroYellow"
                        : "w-2 bg-white/60 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. SEARCH & FILTER CONTROLS BAR */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center bg-white p-3.5 border-3 border-black rounded-2xl shadow-brutal">
        <div className="relative w-full sm:w-80">
          <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black text-xs" />
          <input
            type="text"
            placeholder="Search articles or authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-neutral-100 border-2 border-black text-black placeholder:text-black/60 text-xs font-bold rounded-xl focus:outline-none focus:bg-white transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-start sm:justify-end">
          {selectedCategory !== "ALL" && (
            <button
              onClick={() => setSelectedCategory("ALL")}
              className="px-3.5 py-2 text-xs font-black uppercase bg-retroPink text-black border-2 border-black rounded-xl shadow-brutal-sm hover:bg-black hover:text-white transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            >
              Clear Filter ✕
            </button>
          )}

          <button
            onClick={() => setSortByReadTime(!sortByReadTime)}
            className={`px-4 py-2 text-xs font-black uppercase border-2 border-black rounded-xl flex items-center gap-2 transition-all shadow-brutal-sm cursor-pointer active:translate-x-0.5 active:translate-y-0.5 ${
              sortByReadTime
                ? "bg-retroYellow text-black"
                : "bg-white text-black hover:bg-retroOrange"
            }`}
          >
            <FaFilter className="text-[10px]" />
            {sortByReadTime ? "Sorted: Quick Reads" : "Sort: Read Time"}
          </button>
        </div>
      </div>

      {/* 4. ARTICLES GRID */}
      <section>
        <div className="flex justify-between items-center mb-5 pb-2 border-b-3 border-black">
          <h2 className="font-black text-sm sm:text-base uppercase tracking-wider bg-retroYellow text-black px-3 py-1 rounded-lg border-2 border-black shadow-brutal-sm">
            {selectedCategory === "ALL" ? "All Articles" : selectedCategory}
          </h2>

          <span className="font-black text-xs uppercase text-black bg-white px-3 py-1 rounded-lg border-2 border-black shadow-brutal-sm">
            Showing {filteredBlogs.length} Article
            {filteredBlogs.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12 bg-white border-3 border-black rounded-2xl shadow-brutal p-6">
            <p className="text-black font-black uppercase text-sm mb-3">
              No articles found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-retroYellow text-black font-black text-xs uppercase rounded-xl border-2 border-black shadow-brutal-sm hover:bg-retroPink transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleSelectBlog(blog)}
                className="bg-white border-3 border-black rounded-2xl overflow-hidden shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="relative h-48 border-b-3 border-black overflow-hidden bg-black">
                    <img
                      src={blog.img || blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5 z-10">
                      <span
                        className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-md border-2 border-black shadow-brutal-sm ${
                          CATEGORY_COLORS[blog.category] ||
                          "bg-retroYellow text-black"
                        }`}
                      >
                        {blog.category}
                      </span>
                    </div>
                    <span className="absolute top-3 right-3 bg-white border-2 border-black text-black text-[9px] font-black uppercase px-2.5 py-1 rounded-md shadow-brutal-sm z-10">
                      {blog.readTime}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-black text-base uppercase leading-tight text-black group-hover:text-retroPink transition-colors mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-xs font-bold text-black/70 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-3 border-t-2 border-black/10 flex justify-between items-center text-[11px] font-black uppercase text-black">
                  <span>By {blog.author}</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform text-black" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. CALL-TO-ACTION BANNER */}
      <section className="bg-retroLime border-3 border-black rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-brutal-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 relative z-10">
          <div className="md:col-span-8">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none mb-3 text-black">
              Got a unique AI story worth sharing?
            </h2>
            <p className="font-bold text-xs sm:text-sm text-black/90 max-w-xl">
              We're always looking for student research, tutorial guides, and
              original perspectives. If you have an idea or draft — we'd love to
              publish it!
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center">
            <button className="w-full sm:w-auto px-6 py-3 bg-black text-white font-black text-xs uppercase rounded-xl border-2 border-black shadow-brutal-sm hover:bg-retroOrange hover:text-black transition-all active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer">
              <FaPenNib /> Write for Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
