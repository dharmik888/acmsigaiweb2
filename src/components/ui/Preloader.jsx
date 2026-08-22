import React, { useEffect, useState, useRef } from "react";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const DURATION = 2200; // ms for counter to reach 100

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * 100);
      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Start exit after brief pause
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            onComplete?.();
          }, 900);
        }, 300);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col overflow-hidden"
      style={{ backgroundColor: "#1e2538" }}
    >
      {/* Top half panel */}
      <div
        className="flex-1 flex flex-col items-center justify-end pb-0 relative transition-transform duration-700 ease-in-out"
        style={{
          transform: exiting ? "translateY(-100%)" : "translateY(0)",
          transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
          backgroundColor: "#1e2538",
        }}
      >
        {/* Center content — sits at the seam */}
        <div className="flex flex-col items-center" style={{ marginBottom: "-1px" }}>
          {/* Brutalist card with logo */}
          <div
            className="bg-yellow-300 border-4 border-black px-10 py-6 shadow-[8px_8px_0px_0px_#000] mb-8 relative"
            style={{ minWidth: 280 }}
          >
            {/* Top tag */}
            <div className="absolute -top-4 left-4 bg-black text-yellow-300 font-black text-xs px-3 py-1 uppercase tracking-widest border-2 border-black">
              EST. 2023
            </div>
            <div className="text-center">
              <p className="text-black font-black text-xs uppercase tracking-[0.3em] mb-1">
                ACM · SIGAI · TCET
              </p>
              <h1
                className="text-black font-black uppercase leading-none tracking-tighter"
                style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
              >
                SIGAI
              </h1>
              <p className="text-black font-bold text-xs uppercase tracking-widest mt-1 opacity-70">
                Artificial Intelligence
              </p>
            </div>
          </div>

          {/* Loading bar track */}
          <div
            className="border-2 border-black bg-white overflow-hidden"
            style={{ width: 280, height: 14 }}
          >
            <div
              className="h-full bg-yellow-300 transition-none"
              style={{
                width: `${count}%`,
                transition: "width 0.05s linear",
                backgroundImage:
                  "repeating-linear-gradient(45deg, #fcd34d 0, #fcd34d 6px, #f59e0b 6px, #f59e0b 12px)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom half panel */}
      <div
        className="flex-1 flex flex-col items-center justify-start pt-0 relative transition-transform duration-700 ease-in-out"
        style={{
          transform: exiting ? "translateY(100%)" : "translateY(0)",
          transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
          backgroundColor: "#1e2538",
        }}
      >
        <div className="flex flex-col items-center" style={{ marginTop: "-1px" }}>
          {/* Percentage counter */}
          <div
            className="font-black text-white uppercase tracking-tight leading-none select-none"
            style={{
              fontSize: "clamp(3.5rem, 14vw, 9rem)",
              WebkitTextStroke: "2px #fcd34d",
              color: "transparent",
            }}
          >
            {String(count).padStart(2, "0")}
            <span
              className="font-black"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3rem)",
                WebkitTextStroke: "1.5px #fcd34d",
                marginLeft: 4,
              }}
            >
              %
            </span>
          </div>

          {/* Tagline */}
          <p className="text-white/40 font-bold text-xs uppercase tracking-[0.25em] mt-4">
            Think · Build · Innovate
          </p>
        </div>
      </div>

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 1,
        }}
      />

      {/* Horizontal seam line */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "50%",
          height: 2,
          backgroundColor: "#fcd34d",
          zIndex: 2,
        }}
      />
    </div>
  );
}
