import { useState, useEffect } from "react";
import { FaRotate, FaLightbulb } from "react-icons/fa6";

const PROMPTS = [
  {
    tag: "FEATURED EDITION",
    text: "Tejas Vol 4.1 highlights breakthroughs in Large Language Models & Autonomous Agents.",
  },
  {
    tag: "CHAPTER TRIVIA",
    text: "TCET SIGAI provides students with hands-on research exposure in AI and Deep Learning.",
  },
  {
    tag: "SCRAPBOOK FEATURE",
    text: "Hover over any publication card to reveal its custom interactive keychain charm!",
  },
  {
    tag: "TECHNICAL INSIGHT",
    text: "Check our Blogs page for step-by-step technical guides on PyTorch & Transformers.",
  },
  {
    tag: "CALL FOR PAPERS",
    text: "Student submissions for the upcoming Tejas publication volume are now open!",
  },
];

export const PeekingRobot = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [isPeeking, setIsPeeking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const triggerPeek = () => {
      // Switch prompt and peek only if user isn't actively hovering
      if (!isHovered) {
        setCurrentPrompt(Math.floor(Math.random() * PROMPTS.length));
        setIsPeeking(true);

        // Retract after 6 seconds
        setTimeout(() => {
          setIsPeeking(false);
        }, 6000);
      }
    };

    const initialTimer = setTimeout(triggerPeek, 2000);
    const interval = setInterval(triggerPeek, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isHovered]);

  const promptData = PROMPTS[currentPrompt];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-0 left-6 sm:left-10 flex flex-col items-start z-50 select-none transition-transform duration-500 ease-in-out ${
        isPeeking || isHovered ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* --- SPEECH BUBBLE (Reveals ONLY on Hover or Auto Peek) --- */}
      <div
        className={`w-72 border-3 border-black bg-retroYellow p-4 rounded-2xl shadow-brutal-lg transition-all duration-300 absolute bottom-full mb-3 left-0 ${
          isHovered
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        {/* Header Bar */}
        <div className="flex justify-between items-center gap-2 mb-2 pb-1.5 border-b-2 border-black/20">
          <span className="font-black text-[9px] uppercase px-2 py-0.5 bg-black text-white rounded tracking-wider flex items-center gap-1">
            <FaLightbulb className="text-retroYellow w-2.5 h-2.5" />
            {promptData.tag}
          </span>
          <span className="font-black text-[9px] uppercase text-black/60">
            SIGAI-BOT
          </span>
        </div>

        {/* Text Prompt */}
        <p className="font-extrabold text-xs text-black leading-snug">
          "{promptData.text}"
        </p>

        {/* Action Button */}
        <div className="mt-3 pt-2 border-t-2 border-black flex justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentPrompt((prev) => (prev + 1) % PROMPTS.length);
            }}
            className="flex items-center gap-1 text-[10px] font-black uppercase px-2.5 py-1 bg-white border-2 border-black rounded-xl shadow-brutal-sm btn-brutal-press hover:bg-retroPink transition-colors"
          >
            <FaRotate className="w-2.5 h-2.5" /> Next Info
          </button>
        </div>

        {/* Dynamic Pointer Arrow */}
        <div className="absolute w-3.5 h-3.5 bg-retroYellow rotate-45 -bottom-2 left-8 border-r-3 border-b-3 border-black" />
      </div>

      {/* --- ROBOT CHARACTER --- */}
      <div className="cursor-pointer group relative flex items-center justify-center p-2">
        <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {/* Spring Antenna */}
          <div className="absolute -top-5 flex flex-col items-center z-10">
            <div className="w-3.5 h-3.5 bg-retroPink border-2 border-black rounded-full shadow-brutal-sm animate-pulse" />
            <div className="w-1 h-2.5 bg-black" />
          </div>

          {/* Left Ear Bolt */}
          <div className="w-2.5 h-4 bg-retroYellow border-2 border-black rounded-l-md -mr-0.5" />

          {/* Face Container */}
          <div className="w-20 h-14 bg-retroOrange border-3 border-black rounded-2xl shadow-brutal flex flex-col items-center justify-center relative overflow-hidden px-2">
            <div className="w-full h-8 bg-black rounded-xl border border-black/40 flex items-center justify-around px-2">
              <div className="w-4 h-4 bg-white rounded-full border-2 border-black flex items-center justify-center group-hover:scale-125 transition-transform overflow-hidden">
                <div className="w-2 h-2 bg-black rounded-full translate-x-0.5 -translate-y-0.5" />
              </div>
              <div className="w-1 h-1 bg-retroPink rounded-full opacity-80" />
              <div className="w-4 h-4 bg-white rounded-full border-2 border-black flex items-center justify-center group-hover:scale-125 transition-transform overflow-hidden">
                <div className="w-2 h-2 bg-black rounded-full translate-x-0.5 -translate-y-0.5" />
              </div>
            </div>

            {/* Mouth Grille */}
            <div className="flex gap-1 mt-1">
              <div className="w-1 h-1.5 bg-black rounded-full" />
              <div className="w-1 h-1.5 bg-black rounded-full" />
              <div className="w-1 h-1.5 bg-black rounded-full" />
            </div>
          </div>

          {/* Right Ear Bolt */}
          <div className="w-2.5 h-4 bg-retroYellow border-2 border-black rounded-r-md -ml-0.5" />

          {/* Wire Claws */}
          <div className="absolute -left-2 -bottom-1 z-20 flex flex-col items-end">
            <div className="w-3 h-3 border-2 border-black bg-retroLime rounded-full" />
          </div>
          <div className="absolute -right-2 -bottom-1 z-20 flex flex-col items-start">
            <div className="w-3 h-3 border-2 border-black bg-retroLime rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
