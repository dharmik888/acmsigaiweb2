import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHouse,
  FaNewspaper,
  FaCalendarDays,
  FaUsers,
  FaBolt,
} from "react-icons/fa6";

const NAV_ITEMS = [
  { label: "Home", path: "/", icon: FaHouse },
  { label: "Blogs", path: "/blogs", icon: FaNewspaper },
  { label: "Events", path: "/events", icon: FaCalendarDays },
  { label: "Team", path: "/team", icon: FaUsers },
  { label: "ACM Bytes", path: "/acm-bytes", icon: FaBolt },
];

export default function FloatingBottomNav({ isVisible }) {
  const location = useLocation();

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 transform ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      <nav className="flex items-center gap-2 bg-white border-3 border-black px-4 py-2 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* LOGO: Redirects to Landing Page */}
        <Link
          to="/"
          className="w-9 h-9 bg-retroPink border-2 border-black rounded-xl flex items-center justify-center font-black text-black text-xs hover:bg-retroBlue transition-colors mr-1"
          title="Go to Home"
        >
          SIG
        </Link>

        <div className="h-6 w-[2px] bg-black/20 mx-1" />

        {/* NAVIGATION ICONS */}
        <div className="flex items-center gap-1.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                title={item.label}
                className={`p-2.5 rounded-xl border-2 border-black transition-all flex items-center justify-center ${
                  isActive
                    ? "bg-retroBlue text-black font-bold -translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-slate-100 text-black hover:bg-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
