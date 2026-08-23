import { FaLightbulb, FaArrowLeft } from "react-icons/fa6";

export const PeekabooSticky = ({
  title = "QUICK TIP",
  text = "Hover over cards to see dynamic keychain charms!",
  color = "bg-retroYellow",
}) => {
  return (
    <div className="fixed bottom-8 right-0 z-50 group cursor-pointer select-none">
      <div
        className={`border-3 border-r-0 border-black ${color} rounded-l-2xl p-3 shadow-brutal-lg transform translate-x-[calc(100%-2.75rem)] group-hover:translate-x-0 transition-transform duration-300 ease-out flex items-center gap-3`}
      >
        {/* Visible Tab Handle when collapsed */}
        <div className="flex items-center gap-1 font-black text-xs text-black">
          <FaArrowLeft className="w-3 h-3 transition-transform group-hover:rotate-180" />
          <FaLightbulb className="w-4 h-4 text-black animate-pulse" />
        </div>

        {/* Revealed Content when expanded */}
        <div className="text-xs font-bold text-black pr-2 whitespace-nowrap">
          <span className="block font-black uppercase text-[10px] tracking-wider text-black/70">
            {title}
          </span>
          {text}
        </div>
      </div>
    </div>
  );
};

// Transparent scrapbook tape strip for cards & images
export const PhotoTape = ({ className = "-top-3 left-4 -rotate-6" }) => (
  <div
    className={`absolute ${className} z-20 w-16 h-5 bg-yellow-100/80 border border-black/20 shadow-sm backdrop-blur-[1px] pointer-events-none`}
  />
);

// Circular Retro Rubber Stamp Badge
export const RubberStamp = ({
  text = "VERIFIED",
  color = "bg-retroOrange",
  className = "",
}) => (
  <div
    className={`w-16 h-16 rounded-full border-2 border-black ${color} shadow-brutal flex items-center justify-center text-center p-1 font-black text-[9px] uppercase leading-none select-none ${className}`}
  >
    <div className="border border-black border-dashed rounded-full w-full h-full flex items-center justify-center p-1">
      {text}
    </div>
  </div>
);
