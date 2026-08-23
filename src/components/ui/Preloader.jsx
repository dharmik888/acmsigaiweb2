import React, { useEffect, useState, useRef } from "react";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const DURATION = 2200; // ms for counter to reach 100

  useEffect(() => {
    // Inject font if it doesn't exist
    if (!document.getElementById("preloader-font")) {
      const link = document.createElement("link");
      link.id = "preloader-font";
      link.href = "https://fonts.googleapis.com/css2?family=Pacifico&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

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
          }, 800);
        }, 400);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] bg-retroBg"
      style={{
        transform: exiting ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="absolute inset-0 bg-paper-grid pointer-events-none opacity-50" />

      <div className="flex flex-col items-center relative -top-10 z-10">
        {/* Logo text - Script font but in theme colors */}
        <h1
          className="text-black mb-16"
          style={{
            fontFamily: "'Pacifico', cursive",
            fontSize: "clamp(5rem, 15vw, 10rem)",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          Sigai
        </h1>

        {/* Counter */}
        <div
          className="text-black font-black tracking-widest text-3xl mb-6"
          style={{ letterSpacing: "0.1em" }}
        >
          {count} %
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-6 bg-white relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-retroOrange transition-none"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </div>
  );
}

