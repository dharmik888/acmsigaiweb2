import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- Tag pill ---
const Tag = ({ icon, text }) => (
  <span className="flex items-center gap-2 bg-white border-2 border-black rounded-full px-4 py-1.5 text-sm font-bold shadow-brutal-sm">
    <span>{icon}</span> {text}
  </span>
);

// --- Info row ---
const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <span className="text-xl mt-0.5">{icon}</span>
    <div>
      <p className="text-xs font-black uppercase tracking-wider text-gray-500">
        {label}
      </p>
      <p className="font-bold text-black">{value}</p>
    </div>
  </div>
);

// --- Check item ---
const CheckItem = ({ text }) => (
  <li className="flex items-center gap-2 font-medium text-black">
    <span className="w-5 h-5 rounded-full bg-retroGreen border-2 border-black flex items-center justify-center text-white text-xs font-black flex-shrink-0">
      ✓
    </span>
    {text}
  </li>
);

// --- Schedule row ---
const ScheduleRow = ({ day, time, highlight }) => (
  <div
    className={`flex justify-between items-center py-2.5 border-b-2 border-black last:border-0 ${highlight ? "font-black" : "font-medium"}`}
  >
    <span>{day}</span>
    <span
      className={`text-sm px-3 py-0.5 rounded-full border-2 border-black ${highlight ? "bg-retroGreen text-white" : "bg-white text-black"}`}
    >
      {time}
    </span>
  </div>
);



export default function Contact() {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Header */}
      <section className="bg-retroYellow border-3 border-black rounded-3xl p-8 md:p-12 shadow-brutal-lg text-center relative overflow-hidden">



        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter text-black mb-4">
          Let's talk ideas,
          <br />
          events & collabs.
        </h1>
        <p className="text-lg font-bold text-black max-w-2xl mx-auto">
          Whether you're a student, faculty member or external partner — this is
          the place to reach the TCET ACM SIGAI team.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Tag icon="📍" text="TCET Campus, Kandivali (E)" />
          <Tag icon="🕐" text="Active on weekdays · 10 AM – 5 PM" />
          <Tag icon="💬" text="Tech talks · Events · Collabs" />
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Contact Info Card */}
        <div className="bg-white border-3 border-black rounded-3xl p-6 shadow-brutal-lg flex flex-col gap-6">
          <div>
            <span className="bg-retroBlue text-black font-black text-xs px-3 py-1 border-2 border-black rounded-full uppercase tracking-wider">
              CONTACT
            </span>
            <h2 className="text-2xl font-black mt-3 text-black">
              Talk to the TCET ACM SIGAI team
            </h2>
            <p className="text-gray-600 font-medium mt-1">
              Drop us a mail, ping us on socials or catch us in the{" "}
              <strong>AIML department</strong>. We're always up for{" "}
              <strong>ideas, events and collaborations.</strong>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <InfoRow icon="📧" label="Email" value="acmtcet8@gmail.com" />
            <InfoRow
              icon="📍"
              label="On campus"
              value="TCET · 4th Floor · AIML Department"
            />
          </div>

          {/* Reach us for */}
          <div>
            <p className="font-black text-black uppercase tracking-wider text-xs mb-3">
              You can reach us for:
            </p>
            <ul className="flex flex-col gap-2">
              <CheckItem text="Event partnerships & tech talks" />
              <CheckItem text="Student chapter activities & queries" />
              <CheckItem text="Hackathons, workshops & bootcamps" />
              <CheckItem text="Research collaborations & publications" />
            </ul>
          </div>

          {/* Direct links */}
          <div>
            <p className="font-black text-black uppercase tracking-wider text-xs mb-3">
              Direct links:
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/tcet_acm.sigai?igsh=aHI0aXh4emQ4dmNp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-retroPink text-black font-black text-sm px-4 py-2 border-2 border-black rounded-full shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/tcet-acm-sigai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-retroBlue text-black font-black text-sm px-4 py-2 border-2 border-black rounded-full shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right: Map + Hours Stack */}
        <div className="flex flex-col gap-6">
          {/* Map Card */}
          <div className="bg-white border-3 border-black rounded-3xl overflow-hidden shadow-brutal-lg">
            <div className="p-4 border-b-2 border-black flex items-center justify-between">
              <div>
                <span className="bg-retroGreen text-white font-black text-xs px-3 py-1 border-2 border-black rounded-full uppercase tracking-wider">
                  LOCATION
                </span>
                <h3 className="font-black text-black mt-2">
                  Find us on the map
                </h3>
                <p className="text-gray-600 text-sm font-medium">
                  Located at Thakur College of Engineering &amp; Technology,
                  Kandivali (E).
                </p>
              </div>
              <span className="text-2xl">📍</span>
            </div>
            <div className="h-56 relative">
              <iframe
                title="TCET Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0!2d72.8566!3d19.2045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0959%3A0xe0b459ca56fbdad2!2sThakur%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1691000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <div className="p-3 bg-retroYellow border-t-2 border-black">
              <a
                href="https://maps.google.com/?q=Thakur+College+of+Engineering+Technology+Kandivali"
                target="_blank"
                rel="noopener noreferrer"
                className="font-black text-black text-sm hover:underline flex items-center gap-1"
              >
                🗺️ Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white border-3 border-black rounded-3xl p-6 shadow-brutal-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="bg-retroYellow text-black font-black text-xs px-3 py-1 border-2 border-black rounded-full uppercase tracking-wider">
                  SCHEDULE
                </span>
                <h3 className="font-black text-black mt-2">
                  When are we usually active?
                </h3>
                <p className="text-gray-500 text-sm font-medium">
                  Timings may shift during tests &amp; exams, but generally:
                </p>
              </div>
              <span className="text-2xl">🕐</span>
            </div>
            <div className="border-3 border-black rounded-2xl overflow-hidden">
              <div className="px-4">
                <ScheduleRow day="Mon – Fri" time="10:00 AM – 5:00 PM" />
                <ScheduleRow day="Saturday" time="As per schedule / events" />
                <ScheduleRow day="Sunday" time="Usually online" />
              </div>
            </div>
            <p className="text-sm text-gray-600 font-medium mt-3">
              Best time to catch us in person:{" "}
              <strong>shortly before / after lectures</strong> or during
              scheduled ACM activities.
            </p>
          </div>
        </div>
      </div>



      {/* Footer CTA Banner */}
      <section className="bg-retroYellow border-3 border-black rounded-full shadow-brutal-sm p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-black font-bold text-lg ml-4">
          <span>💡</span>
          <p>Have an idea? We'd love to hear it — let's build together.</p>
        </div>
        <a
          href="mailto:acmtcet8@gmail.com"
          className="bg-black text-white font-black uppercase text-sm px-6 py-2.5 border-2 border-black rounded-full hover:-translate-y-1 hover:shadow-brutal transition-all flex items-center gap-2 mr-2"
        >
          📧 Email Us →
        </a>
      </section>
    </div>
  );
}
