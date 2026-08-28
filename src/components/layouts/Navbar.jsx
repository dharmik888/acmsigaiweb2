import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaHouse,
  FaCalendarDays,
  FaUsers,
  FaNewspaper,
  FaBookOpen,
} from "react-icons/fa6";
import logo from "../../assets/sigai-logo.webp";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/", icon: FaHouse },
    { name: "EVENTS", path: "/events", icon: FaCalendarDays },
    { name: "TEAM", path: "/team", icon: FaUsers },
    { name: "BLOGS", path: "/blogs", icon: FaNewspaper },
    { name: "PUBLICATIONS", path: "/publications", icon: FaBookOpen },
  ];

  return (
    <>
      {/* 1. STANDARD TOP NAVBAR */}
      <header
        className={`sticky top-0 z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 transition-all duration-300 ${
          isScrolled
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
      >
        <nav className="bg-white border-3 border-black rounded-3xl p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-brutal">
          {/* Brand / Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-white p-1.5 rounded-2xl border-3 border-black shadow-brutal-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
              <img
                src={logo}
                alt="TCET ACM SIGAI Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <span className="font-black text-xl tracking-tight text-black uppercase">
              TCET ACM SIGAI
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl font-black text-xs sm:text-sm tracking-wide border-3 border-black transition-all btn-brutal-press ${
                    isActive
                      ? "bg-retroOrange text-black"
                      : "bg-white text-black hover:bg-slate-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* 2. COMPRESSED SIDE DOCK */}
      <div
        className={`fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 transform ${
          isScrolled
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-95"
        }`}
      >
        <nav className="flex flex-col items-center gap-2 bg-white border-3 border-black p-2.5 rounded-2xl shadow-brutal">
          <div className="flex flex-col items-center gap-2.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  title={item.name}
                  className={({ isActive }) =>
                    `p-2.5 rounded-xl border-3 border-black transition-all btn-brutal-press flex items-center justify-center ${
                      isActive
                        ? "bg-retroOrange text-black font-black"
                        : "bg-white text-black hover:bg-slate-100"
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                </NavLink>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}
