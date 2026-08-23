import React, { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Track hovered interactive elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest(".cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0,
      }}
    >
      {/* Target Radar Rings (SVGs Inspired) */}
      <div
        className={`absolute -left-6 -top-6 w-12 h-12 rounded-full border-2 border-black bg-retroYellow/30 transition-transform duration-150 ease-out flex items-center justify-center ${
          isHovered ? "scale-150 bg-retroOrange/50 rotate-45" : "scale-100"
        } ${isClicked ? "scale-75" : ""}`}
      >
        {/* Radar Rays Graphic */}
        <div className="absolute inset-0 rounded-full border border-dashed border-black/40 animate-spin-slow" />
      </div>

      {/* Main Cursor Arrow (Inverted SVG Pointer) */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`relative -left-1 -top-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-transform duration-75 ${
          isHovered ? "scale-110 fill-retroOrange" : "fill-retroYellow"
        }`}
      >
        <path
          fillRule="evenodd"
          d="M11.532 8.632a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z"
          clipRule="evenodd"
          stroke="#000"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};
