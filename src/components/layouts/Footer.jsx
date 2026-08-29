import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Google Maps Embed - Neo Brutalist */}
        <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden border-3 border-black shadow-brutal bg-white relative z-10 group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.258380309995!2d72.8719003!3d19.2064563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1714578160000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TCET Location"
            className="filter grayscale-[50%] contrast-125 group-hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>

        {/* Bottom 4-Column Grid - Neo Brutalist */}
        <div className="bg-[#FAF7F2] border-3 border-black rounded-3xl p-8 sm:p-10 shadow-brutal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-black font-black uppercase text-xl tracking-tight">
              ACM SIGAI TCET
            </h3>
            <div className="w-12 h-1.5 bg-retroPink border-2 border-black rounded-full shadow-brutal-sm"></div>
            <p className="text-sm md:text-base font-bold text-black/80 leading-relaxed max-w-xs mt-4">
              Special Interest Group on Artificial Intelligence at Thakur
              College of Engineering and Technology.
            </p>
          </div>

          {/* Column 2: Pages */}
          <div className="space-y-4">
            <h3 className="text-black font-black uppercase text-xl tracking-tight">
              Pages
            </h3>
            <div className="w-12 h-1.5 bg-retroYellow border-2 border-black rounded-full shadow-brutal-sm"></div>
            <ul className="space-y-3 font-bold text-black flex flex-col mt-4">
              {[
                { name: "Home", path: "/" },
                { name: "Events", path: "/events" },
                { name: "Team", path: "/team" },
                { name: "Publications", path: "/publications" },
                { name: "Blogs", path: "/blogs" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-retroOrange hover:underline decoration-3 underline-offset-4 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h3 className="text-black font-black uppercase text-xl tracking-tight">
              Contact
            </h3>
            <div className="w-12 h-1.5 bg-retroOrange border-2 border-black rounded-full shadow-brutal-sm"></div>
            <ul className="space-y-4 font-bold text-black mt-4">
              <li className="flex items-start gap-3">
                <div className="bg-white p-2 rounded-xl border-3 border-black shadow-brutal-sm shrink-0">
                  <MapPin size={18} strokeWidth={2.5} />
                </div>
                <span className="pt-1 leading-snug">
                  Thakur College, Mumbai
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-xl border-3 border-black shadow-brutal-sm shrink-0">
                  <Mail size={18} strokeWidth={2.5} />
                </div>
                <a
                  href="mailto:tcetacmsigai@gmail.com"
                  className="hover:text-retroOrange hover:underline decoration-2 underline-offset-4 transition-colors break-all"
                >
                  tcetacmsigai@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-xl border-3 border-black shadow-brutal-sm shrink-0">
                  <Phone size={18} strokeWidth={2.5} />
                </div>
                <a
                  href="tel:+917710829523"
                  className="hover:text-retroOrange hover:underline decoration-2 underline-offset-4 transition-colors"
                >
                  +91 77108 29523
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="space-y-4">
            <h3 className="text-black font-black uppercase text-xl tracking-tight">
              Follow Us
            </h3>
            <div className="w-12 h-1.5 bg-retroLime border-2 border-black rounded-full shadow-brutal-sm"></div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/tcet_acm.sigai?igsh=aHI0aXh4emQ4dmNp"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-2xl bg-white border-3 border-black shadow-brutal-sm flex items-center justify-center text-black btn-brutal-press hover:bg-gradient-to-tr hover:from-amber-400 hover:via-rose-400 hover:to-purple-500 hover:text-white transition-all"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href="https://github.com/SIG-AI-OpenSource"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-2xl bg-white border-3 border-black shadow-brutal-sm flex items-center justify-center text-black btn-brutal-press hover:bg-black hover:text-white transition-all"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/tcet-acm-sigai"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-2xl bg-white border-3 border-black shadow-brutal-sm flex items-center justify-center text-black btn-brutal-press hover:bg-[#0077b5] hover:text-white transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
