import React from "react";
import { Link, useLocation } from "react-router-dom";
import sigaiLogo from "../../assets/sigai-logo.png";

// Official TCET ACM SIGAI Logo Badge (from LinkedIn)
const OfficialLogo = () => (
  <div className="flex items-center gap-2">
    <img
      src={sigaiLogo}
      alt="TCET ACM SIGAI Logo"
      className="w-8 h-8 rounded-full border-2 border-retroYellow object-cover shadow-brutal-sm micro-pulse"
    />
    <span className="font-black text-darkText text-sm md:text-base tracking-tight uppercase">
      TCET ACM SIGAI
    </span>
  </div>
);


export const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "PUBLICATIONS", path: "/publications" },
    { name: "BLOG", path: "/blogs" },
  ];

  return (
    <nav className="bg-darkCard border-3 border-darkBorder rounded-full shadow-brutal flex items-center justify-between p-2 md:px-4 mb-10 w-full relative z-50">
      {/* Left side: Official Logo Pill */}
      <Link 
        to="/" 
        className="bg-darkSurface text-darkText px-4 py-1.5 border-2 border-darkBorder rounded-full shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal hover:border-retroYellow transition-all duration-200 micro-card-hover flex items-center gap-1"
      >
        <OfficialLogo />
      </Link>

      {/* Center Links with Moving Active Highlight Pill */}
      <div className="hidden md:flex items-center gap-3 font-black uppercase text-sm relative bg-darkSurface/60 p-1 rounded-full border-2 border-darkBorder">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-5 py-1.5 rounded-full transition-all duration-300 ease-out select-none flex items-center justify-center ${
                isActive
                  ? "bg-retroYellow text-darkCard border-2 border-retroYellow shadow-brutal-sm scale-105"
                  : "text-darkMuted hover:text-darkText hover:bg-darkBorder/60 hover:scale-105"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>


    </nav>
  );
};

