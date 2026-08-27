import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

/* =========================================================================
   SPEAKER CHARACTER VARIANTS (SAME STYLE & PROPORTIONS, SUBTLE POSE SHIFT)
   ========================================================================= */

// Speaker Variant A (Odd Semester: Pointing with Left Hand Pen, Right Hand at Hip)
function SpeakerCharacterA() {
  return (
    <div className="flex flex-col items-center mr-4 sm:mr-8 z-20">
      <svg
        className="w-24 h-36 sm:w-28 sm:h-44 md:w-32 md:h-48"
        viewBox="0 0 100 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow under feet */}
        <ellipse cx="52" cy="146" rx="22" ry="3.5" fill="#000000" fillOpacity="0.15" />

        {/* Shoes */}
        <path
          d="M38 141 C36 141 33 143 33 145 C33 147 38 148 46 148 C48 148 48 144 46 141 Z"
          fill="#0f172a"
          stroke="#000"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M56 141 C54 141 52 144 54 146 C55 148 62 148 67 147 C68 145 66 141 63 141 Z"
          fill="#0f172a"
          stroke="#000"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Trousers with natural drape & leg crease */}
        <path
          d="M36 84 L38 142 L47 142 L52 98 L57 142 L66 142 L66 84 Z"
          fill="#1e293b"
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Belt & Trouser Seams */}
        <line x1="36" y1="84" x2="66" y2="84" stroke="#000" strokeWidth="2" />
        <rect x="48" y="82" width="6" height="4" rx="1" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        <line x1="42" y1="88" x2="43" y2="136" stroke="#0f172a" strokeWidth="1.2" strokeOpacity="0.8" />
        <line x1="60" y1="88" x2="61" y2="136" stroke="#0f172a" strokeWidth="1.2" strokeOpacity="0.8" />

        {/* Torso: Collared White Shirt with Folds */}
        <path
          d="M34 40 C34 38 42 36 51 36 C60 36 68 38 68 40 L66 84 L36 84 Z"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Shirt placket & buttons */}
        <line x1="51" y1="44" x2="51" y2="84" stroke="#000" strokeWidth="1.5" strokeDasharray="1 8" strokeLinecap="round" />
        {/* Waist fold curves */}
        <path d="M38 76 C44 78 58 78 64 76" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />

        {/* Right Arm: Resting naturally at hip */}
        <path
          d="M35 42 L24 64 C24 64 27 72 32 74 L36 68 L30 62 L38 48 Z"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Right Hand at Hip */}
        <path
          d="M32 74 C34 76 38 78 40 76 C41 74 38 71 36 68"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Left Arm: Gesturing up toward presentation board */}
        <path
          d="M67 42 L84 32 C86 31 88 33 89 35 L78 52 L68 50 Z"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Left Hand holding laser/pen pointer */}
        <path
          d="M87 31 C89 29 93 30 94 32 C95 34 92 36 89 36 Z"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="1.8"
        />
        {/* Pointer Pen */}
        <line x1="88" y1="35" x2="98" y2="23" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <circle cx="98" cy="23" r="2" fill="#38bdf8" stroke="#000" strokeWidth="1" />

        {/* Blue Inner Neckline / Collar Accent */}
        <path d="M44 38 L51 46 L58 38 Z" fill="#38bdf8" stroke="#000" strokeWidth="1.5" />
        {/* Shirt Collar Wings */}
        <path d="M43 37 L48 44 L51 38" fill="#ffffff" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M59 37 L54 44 L51 38" fill="#ffffff" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />

        {/* Neck */}
        <path d="M47 28 L47 38 L55 38 L55 28 Z" fill="#ffffff" stroke="#000" strokeWidth="1.8" />

        {/* Head & Face Contour */}
        <path
          d="M42 16 C42 10 48 8 54 8 C60 8 62 12 62 18 C62 26 58 30 51 30 C45 30 42 24 42 16 Z"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="2"
        />
        {/* Ear with inner detail */}
        <path d="M42 18 C40 18 39 20 40 23 C41 25 43 24 43 22" fill="#ffffff" stroke="#000" strokeWidth="1.5" />

        {/* Styled Dark Hair with Fringe and Texture */}
        <path
          d="M42 16 C41 9 46 4 55 4 C64 4 65 10 65 14 C65 18 63 17 60 14 C56 16 52 14 47 16 C44 17 43 20 42 16 Z"
          fill="#0f172a"
          stroke="#000"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M43 14 C46 11 51 10 56 12" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />

        {/* Expressive Face: Eyebrows, Eyes, Smile */}
        <path d="M48 16 C50 15 52 15 54 16" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="51" cy="18" r="1.2" fill="#000" />
        <path d="M56 17 C57 18 57 19 56 20" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />
        {/* Friendly Smile */}
        <path d="M49 24 C51 26 55 26 56 24" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Speaker Variant B (Even Semester: Holding Digital Tablet in Left Hand, Gesturing Forward)
function SpeakerCharacterB() {
  return (
    <div className="flex flex-col items-center mr-4 sm:mr-8 z-20">
      <svg
        className="w-24 h-36 sm:w-28 sm:h-44 md:w-32 md:h-48"
        viewBox="0 0 100 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow under feet */}
        <ellipse cx="52" cy="146" rx="22" ry="3.5" fill="#000000" fillOpacity="0.15" />

        {/* Shoes */}
        <path
          d="M38 141 C36 141 33 143 33 145 C33 147 38 148 46 148 C48 148 48 144 46 141 Z"
          fill="#0f172a"
          stroke="#000"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M56 141 C54 141 52 144 54 146 C55 148 62 148 67 147 C68 145 66 141 63 141 Z"
          fill="#0f172a"
          stroke="#000"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Trousers with natural drape & leg crease */}
        <path
          d="M36 84 L38 142 L47 142 L52 98 L57 142 L66 142 L66 84 Z"
          fill="#1e293b"
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Belt & Trouser Seams */}
        <line x1="36" y1="84" x2="66" y2="84" stroke="#000" strokeWidth="2" />
        <rect x="48" y="82" width="6" height="4" rx="1" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        <line x1="42" y1="88" x2="43" y2="136" stroke="#0f172a" strokeWidth="1.2" strokeOpacity="0.8" />
        <line x1="60" y1="88" x2="61" y2="136" stroke="#0f172a" strokeWidth="1.2" strokeOpacity="0.8" />

        {/* Torso: Collared White Shirt with Folds */}
        <path
          d="M34 40 C34 38 42 36 51 36 C60 36 68 38 68 40 L66 84 L36 84 Z"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Shirt placket & buttons */}
        <line x1="51" y1="44" x2="51" y2="84" stroke="#000" strokeWidth="1.5" strokeDasharray="1 8" strokeLinecap="round" />
        {/* Waist fold curves */}
        <path d="M38 76 C44 78 58 78 64 76" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />

        {/* Left Arm: Holding slim Tablet at waist */}
        <path
          d="M35 42 L26 58 L32 72 L42 66 L36 54 L38 44 Z"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Digital Tablet */}
        <rect x="22" y="56" width="12" height="18" rx="2" fill="#0f172a" stroke="#000" strokeWidth="1.6" />
        <line x1="25" y1="60" x2="31" y2="60" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="25" y1="64" x2="29" y2="64" stroke="#facc15" strokeWidth="1.2" strokeLinecap="round" />

        {/* Right Arm: Raised forward in open-palm collaborative gesture */}
        <path
          d="M67 42 L82 36 C84 35 86 37 87 39 L76 54 L68 50 Z"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Right Hand in open gesture */}
        <path
          d="M84 36 C87 34 91 36 91 39 C91 41 87 42 85 41 Z"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="1.8"
        />

        {/* Warm Gold Inner Neckline / Collar Accent */}
        <path d="M44 38 L51 46 L58 38 Z" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        {/* Shirt Collar Wings */}
        <path d="M43 37 L48 44 L51 38" fill="#ffffff" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M59 37 L54 44 L51 38" fill="#ffffff" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />

        {/* Neck */}
        <path d="M47 28 L47 38 L55 38 L55 28 Z" fill="#ffffff" stroke="#000" strokeWidth="1.8" />

        {/* Head & Face Contour */}
        <path
          d="M42 16 C42 10 48 8 54 8 C60 8 62 12 62 18 C62 26 58 30 51 30 C45 30 42 24 42 16 Z"
          fill="#ffffff"
          stroke="#000"
          strokeWidth="2"
        />
        {/* Ear with inner detail */}
        <path d="M42 18 C40 18 39 20 40 23 C41 25 43 24 43 22" fill="#ffffff" stroke="#000" strokeWidth="1.5" />

        {/* Styled Dark Hair with Fringe and Texture */}
        <path
          d="M42 16 C41 9 46 4 55 4 C64 4 65 10 65 14 C65 18 63 17 60 14 C56 16 52 14 47 16 C44 17 43 20 42 16 Z"
          fill="#0f172a"
          stroke="#000"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M43 14 C46 11 51 10 56 12" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />

        {/* Expressive Face: Eyebrows, Eyes, Smile */}
        <path d="M48 16 C50 15 52 15 54 16" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="51" cy="18" r="1.2" fill="#000" />
        <path d="M56 17 C57 18 57 19 56 20" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />
        {/* Friendly Smile */}
        <path d="M49 24 C51 26 55 26 56 24" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* =========================================================================
   AUDIENCE ATTENDEES (VARIANTS A & B)
   ========================================================================= */

// Audience Variant A (Odd Semester)
function AudienceRowA() {
  return (
    <div className="flex items-end gap-2 sm:gap-4 z-10">
      {/* Attendee 1 */}
      <motion.div
        animate={{ y: [0, -1.8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        className="flex flex-col items-center"
      >
        <svg className="w-13 h-20 sm:w-16 sm:h-24 md:w-18 md:h-28" viewBox="0 0 60 80" fill="none">
          <rect x="10" y="38" width="40" height="38" rx="6" fill="#f8fafc" stroke="#000" strokeWidth="2" />
          <line x1="30" y1="50" x2="30" y2="70" stroke="#000" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.5" />
          <path d="M14 44 C14 36 24 34 30 34 C36 34 46 36 46 44 L48 76 L12 76 Z" fill="#ffffff" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
          <path d="M26 34 L30 40 L34 34" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 22 C18 10 24 4 31 4 C38 4 43 10 42 22 C44 28 47 38 45 48 C43 45 41 42 41 36 C38 34 24 34 21 36 C21 42 18 45 16 48 C15 38 18 28 20 22 Z" fill="#0f172a" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
          <ellipse cx="31" cy="20" rx="9" ry="11" fill="#ffffff" stroke="#000" strokeWidth="1.8" />
          <path d="M22 15 C24 8 30 6 38 7 C41 12 40 18 39 22" fill="#0f172a" stroke="#000" strokeWidth="1.5" />
          <circle cx="22" cy="22" r="2.5" fill="#ffffff" stroke="#000" strokeWidth="1.2" />
          <circle cx="22" cy="24" r="0.8" fill="#facc15" />
        </svg>
      </motion.div>

      {/* Attendee 2 */}
      <motion.div
        animate={{ y: [0, -2.2, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="flex flex-col items-center"
      >
        <svg className="w-13 h-20 sm:w-16 sm:h-24 md:w-18 md:h-28" viewBox="0 0 60 80" fill="none">
          <rect x="10" y="38" width="40" height="38" rx="6" fill="#f8fafc" stroke="#000" strokeWidth="2" />
          <line x1="30" y1="50" x2="30" y2="70" stroke="#000" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.5" />
          <path d="M13 44 C13 36 24 34 30 34 C36 34 47 36 47 44 L49 76 L11 76 Z" fill="#ffffff" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
          <path d="M25 34 L30 40 L35 34" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="30" y1="40" x2="30" y2="60" stroke="#000" strokeWidth="1.2" strokeDasharray="1 6" strokeLinecap="round" />
          <path d="M26 26 L26 34 L34 34 L34 26 Z" fill="#ffffff" stroke="#000" strokeWidth="1.8" />
          <ellipse cx="30" cy="18" rx="10" ry="11" fill="#ffffff" stroke="#000" strokeWidth="1.8" />
          <path d="M20 18 C20 8 24 4 30 4 C36 4 40 8 40 18 C40 22 38 24 36 24 C34 22 34 18 30 18 C26 18 26 22 24 24 C22 24 20 22 20 18 Z" fill="#0f172a" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M19 18 C18 18 17 20 18 22 C19 23 20 22 20 20" fill="#ffffff" stroke="#000" strokeWidth="1.4" />
          <path d="M41 18 C42 18 43 20 42 22 C41 23 40 22 40 20" fill="#ffffff" stroke="#000" strokeWidth="1.4" />
        </svg>
      </motion.div>

      {/* Attendee 3 */}
      <motion.div
        animate={{ y: [0, -1.8, 0] }}
        transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        className="flex flex-col items-center"
      >
        <svg className="w-13 h-20 sm:w-16 sm:h-24 md:w-18 md:h-28" viewBox="0 0 60 80" fill="none">
          <rect x="10" y="38" width="40" height="38" rx="6" fill="#f8fafc" stroke="#000" strokeWidth="2" />
          <line x1="30" y1="50" x2="30" y2="70" stroke="#000" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.5" />
          <path d="M14 44 C14 36 24 34 30 34 C36 34 46 36 46 44 L48 76 L12 76 Z" fill="#ffffff" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
          <path d="M26 34 L30 39 L34 34" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M27 26 L27 34 L33 34 L33 26 Z" fill="#ffffff" stroke="#000" strokeWidth="1.8" />
          <ellipse cx="30" cy="19" rx="9.5" ry="10.5" fill="#ffffff" stroke="#000" strokeWidth="1.8" />
          <path d="M21 18 C21 8 26 5 32 5 C38 5 40 9 40 18 C40 22 36 23 30 23 C24 23 21 22 21 18 Z" fill="#0f172a" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
          <rect x="38" y="12" width="4" height="6" rx="2" fill="#38bdf8" stroke="#000" strokeWidth="1.4" />
          <path d="M41 14 C48 12 53 16 54 26 C52 28 48 26 46 22 C44 18 42 16 41 16 Z" fill="#0f172a" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="21" cy="20" r="2.2" fill="#ffffff" stroke="#000" strokeWidth="1.2" />
        </svg>
      </motion.div>
    </div>
  );
}

// Audience Variant B (Even Semester: Subtle Laptop on middle desk & warm gold ties)
function AudienceRowB() {
  return (
    <div className="flex items-end gap-2 sm:gap-4 z-10">
      {/* Attendee 1 (Warm Gold Accent) */}
      <motion.div
        animate={{ y: [0, -1.9, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col items-center"
      >
        <svg className="w-13 h-20 sm:w-16 sm:h-24 md:w-18 md:h-28" viewBox="0 0 60 80" fill="none">
          <rect x="10" y="38" width="40" height="38" rx="6" fill="#f8fafc" stroke="#000" strokeWidth="2" />
          <line x1="30" y1="50" x2="30" y2="70" stroke="#000" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.5" />
          <path d="M14 44 C14 36 24 34 30 34 C36 34 46 36 46 44 L48 76 L12 76 Z" fill="#ffffff" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
          <path d="M26 34 L30 40 L34 34" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 22 C18 10 24 4 31 4 C38 4 43 10 42 22 C44 28 47 38 45 48 C43 45 41 42 41 36 C38 34 24 34 21 36 C21 42 18 45 16 48 C15 38 18 28 20 22 Z" fill="#0f172a" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
          <ellipse cx="31" cy="20" rx="9" ry="11" fill="#ffffff" stroke="#000" strokeWidth="1.8" />
          <path d="M22 15 C24 8 30 6 38 7 C41 12 40 18 39 22" fill="#0f172a" stroke="#000" strokeWidth="1.5" />
          <circle cx="22" cy="22" r="2.5" fill="#ffffff" stroke="#000" strokeWidth="1.2" />
          <circle cx="22" cy="24" r="0.8" fill="#facc15" />
        </svg>
      </motion.div>

      {/* Attendee 2 (With Mini Laptop on Desk) */}
      <motion.div
        animate={{ y: [0, -2.0, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-col items-center"
      >
        <svg className="w-13 h-20 sm:w-16 sm:h-24 md:w-18 md:h-28" viewBox="0 0 60 80" fill="none">
          <rect x="10" y="38" width="40" height="38" rx="6" fill="#f8fafc" stroke="#000" strokeWidth="2" />
          <line x1="30" y1="50" x2="30" y2="70" stroke="#000" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.5" />
          <path d="M13 44 C13 36 24 34 30 34 C36 34 47 36 47 44 L49 76 L11 76 Z" fill="#ffffff" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
          <path d="M25 34 L30 40 L35 34" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
          {/* Mini Open Laptop Lid */}
          <rect x="22" y="62" width="16" height="12" rx="1.5" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
          <circle cx="30" cy="68" r="1.8" fill="#38bdf8" />
          <path d="M26 26 L26 34 L34 34 L34 26 Z" fill="#ffffff" stroke="#000" strokeWidth="1.8" />
          <ellipse cx="30" cy="18" rx="10" ry="11" fill="#ffffff" stroke="#000" strokeWidth="1.8" />
          <path d="M20 18 C20 8 24 4 30 4 C36 4 40 8 40 18 C40 22 38 24 36 24 C34 22 34 18 30 18 C26 18 26 22 24 24 C22 24 20 22 20 18 Z" fill="#0f172a" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M19 18 C18 18 17 20 18 22 C19 23 20 22 20 20" fill="#ffffff" stroke="#000" strokeWidth="1.4" />
          <path d="M41 18 C42 18 43 20 42 22 C41 23 40 22 40 20" fill="#ffffff" stroke="#000" strokeWidth="1.4" />
        </svg>
      </motion.div>

      {/* Attendee 3 (Gold Ponytail Tier) */}
      <motion.div
        animate={{ y: [0, -1.8, 0] }}
        transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="flex flex-col items-center"
      >
        <svg className="w-13 h-20 sm:w-16 sm:h-24 md:w-18 md:h-28" viewBox="0 0 60 80" fill="none">
          <rect x="10" y="38" width="40" height="38" rx="6" fill="#f8fafc" stroke="#000" strokeWidth="2" />
          <line x1="30" y1="50" x2="30" y2="70" stroke="#000" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.5" />
          <path d="M14 44 C14 36 24 34 30 34 C36 34 46 36 46 44 L48 76 L12 76 Z" fill="#ffffff" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
          <path d="M26 34 L30 39 L34 34" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M27 26 L27 34 L33 34 L33 26 Z" fill="#ffffff" stroke="#000" strokeWidth="1.8" />
          <ellipse cx="30" cy="19" rx="9.5" ry="10.5" fill="#ffffff" stroke="#000" strokeWidth="1.8" />
          <path d="M21 18 C21 8 26 5 32 5 C38 5 40 9 40 18 C40 22 36 23 30 23 C24 23 21 22 21 18 Z" fill="#0f172a" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
          <rect x="38" y="12" width="4" height="6" rx="2" fill="#facc15" stroke="#000" strokeWidth="1.4" />
          <path d="M41 14 C48 12 53 16 54 26 C52 28 48 26 46 22 C44 18 42 16 41 16 Z" fill="#0f172a" stroke="#000" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="21" cy="20" r="2.2" fill="#ffffff" stroke="#000" strokeWidth="1.2" />
        </svg>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   SCENE 1: ODD SEMESTER (VERSION A)
   ========================================================================= */
function OddSemesterScene({ mouseX, mouseY }) {
  const pDeepX = useTransform(mouseX, [-0.5, 0.5], [12, -12]);
  const pDeepY = useTransform(mouseY, [-0.5, 0.5], [8, -8]);

  const pMidX = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const pMidY = useTransform(mouseY, [-0.5, 0.5], [-6, 6]);

  const pFrontX = useTransform(mouseX, [-0.5, 0.5], [-16, 16]);
  const pFrontY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[380px] md:min-h-[420px] flex items-center justify-center select-none overflow-hidden">
      {/* Background Soft Sky Aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-retroBlue/15 via-transparent to-retroYellow/10 rounded-2xl pointer-events-none" />

      {/* Decorative Circuit Paths & Dotted Constellations */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50,70 L 130,70 L 130,150 L 210,150"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 400,50 L 480,50 L 480,120"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 460,220 L 510,220 L 510,180"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <text x="90" y="45" fontSize="14" fontWeight="bold" fill="#000">✦</text>
        <text x="500" y="70" fontSize="12" fontWeight="bold" fill="#000">✦</text>
        <text x="370" y="35" fontSize="12" fontWeight="bold" fill="#38bdf8">✕</text>
        <text x="60" y="240" fontSize="12" fontWeight="bold" fill="#facc15">✕</text>
        <circle cx="130" cy="70" r="3" fill="#000" />
        <circle cx="480" cy="50" r="3" fill="#38bdf8" />
        <circle cx="510" cy="220" r="3" fill="#000" />
      </svg>

      {/* ================= FLOATING DECORATIVE PARALLAX OBJECTS ================= */}

      {/* 1. Floating Speech Bubble (Top-Left) */}
      <motion.div
        style={{ x: pDeepX, y: pDeepY }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-3 sm:top-6 left-4 sm:left-10 z-20"
        whileHover={{ scale: 1.2, rotate: -6 }}
      >
        <div className="bg-retroBlue text-white border-2 border-black px-3 py-1.5 rounded-xl shadow-brutal-sm flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.15s]" />
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.3s]" />
        </div>
      </motion.div>

      {/* 2. Floating Bar Chart Widget (Mid-Left) */}
      <motion.div
        style={{ x: pMidX, y: pMidY }}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20"
        whileHover={{ scale: 1.15, rotate: 6 }}
      >
        <div className="bg-retroYellow border-2 border-black p-2 rounded-xl shadow-brutal flex items-end gap-1.5 w-11 h-13">
          <div className="w-2 bg-black h-3.5 rounded-t-sm" />
          <div className="w-2 bg-retroBlue h-6 rounded-t-sm border border-black" />
          <div className="w-2 bg-retroPink h-9 rounded-t-sm border border-black" />
        </div>
      </motion.div>

      {/* 3. Floating AI Microprocessor (Top-Right) */}
      <motion.div
        style={{ x: pDeepX, y: pDeepY }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-3 sm:top-6 right-6 sm:right-14 z-20"
        whileHover={{ scale: 1.2, rotate: 8 }}
      >
        <div className="bg-retroBlue border-2 border-black p-2 rounded-xl shadow-brutal-sm flex items-center justify-center w-10 h-10">
          <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="5" width="14" height="14" rx="2" fill="#fff" />
            <path d="M9 9h6v6H9z" fill="#38bdf8" />
            <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
          </svg>
        </div>
      </motion.div>

      {/* 4. Floating Donut Chart (Mid-Right) */}
      <motion.div
        style={{ x: pMidX, y: pMidY }}
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20"
        whileHover={{ scale: 1.2, rotate: 45 }}
      >
        <div className="bg-white border-2 border-black p-1.5 rounded-full shadow-brutal w-11 h-11 flex items-center justify-center">
          <svg className="w-7 h-7 -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#facc15" strokeWidth="6" strokeDasharray="35 100" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#38bdf8" strokeWidth="6" strokeDasharray="30 100" strokeDashoffset="-35" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#000000" strokeWidth="6" strokeDasharray="25 100" strokeDashoffset="-65" />
          </svg>
        </div>
      </motion.div>

      {/* 5. Ceramic Potted Plant (Bottom-Right) */}
      <motion.div
        style={{ x: pFrontX, y: pFrontY }}
        className="absolute bottom-1 right-2 sm:right-8 z-20 pointer-events-none hidden sm:block"
      >
        <svg className="w-13 h-15" viewBox="0 0 60 70" fill="none">
          <path d="M30 35 C20 15 10 20 8 30 C15 35 25 35 30 35 Z" fill="#38bdf8" stroke="#000" strokeWidth="1.8" />
          <path d="M30 35 C40 15 50 20 52 30 C45 35 35 35 30 35 Z" fill="#38bdf8" stroke="#000" strokeWidth="1.8" />
          <path d="M30 35 C30 10 38 10 38 20 C38 28 32 32 30 35 Z" fill="#4ade80" stroke="#000" strokeWidth="1.8" />
          <path d="M30 35 L30 45" stroke="#000" strokeWidth="2" />
          <path d="M20 45 L40 45 L37 65 L23 65 Z" fill="#fff" stroke="#000" strokeWidth="2" />
          <rect x="18" y="43" width="24" height="4" rx="1" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* ================= CENTERPIECE: PRESENTATION WHITEBOARD & CHARACTERS ================= */}
      <motion.div
        style={{ x: pMidX, y: pMidY }}
        className="relative z-10 w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] flex flex-col items-center"
      >
        {/* Presentation Board Window */}
        <div className="w-full bg-white border-2.5 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          {/* Header Bar */}
          <div className="bg-retroBlue border-b-2 border-black px-3 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
            </div>
            <span className="font-mono font-black text-[10px] sm:text-[11px] uppercase tracking-wider text-black">
              AI SEMINAR
            </span>
            <div className="w-6" />
          </div>

          {/* Board Analytics & Profile */}
          <div className="p-3 sm:p-4 bg-[#fbfaf8] grid grid-cols-12 gap-2 sm:gap-3 items-center">
            {/* AI Profile Face */}
            <div className="col-span-4 border-2 border-black bg-white rounded-xl p-2 shadow-brutal-sm flex flex-col items-center justify-center">
              <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 50 50" fill="none">
                <path d="M15 38 C15 32 20 28 25 28 C28 28 32 30 35 34 L35 42 L15 42 Z" fill="#f8fafc" stroke="#000" strokeWidth="2" />
                <circle cx="25" cy="20" r="9" fill="#fff" stroke="#000" strokeWidth="2" />
                <circle cx="23" cy="18" r="2.5" fill="#38bdf8" stroke="#000" strokeWidth="1.2" />
                <circle cx="28" cy="16" r="2" fill="#ff70a6" stroke="#000" strokeWidth="1.2" />
                <circle cx="27" cy="22" r="2" fill="#facc15" stroke="#000" strokeWidth="1.2" />
                <path d="M23 18 L28 16 M23 18 L27 22" stroke="#000" strokeWidth="1.2" />
                <path d="M12 16 L8 14 M12 22 L7 22 M38 16 L42 14 M38 22 L43 22" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-mono font-bold text-[8px] sm:text-[9px] text-black mt-1 uppercase">
                NEURAL_AI
              </span>
            </div>

            {/* Live Chart Visuals */}
            <div className="col-span-8 space-y-1.5">
              <div className="border-2 border-black bg-white rounded-lg p-1.5 sm:p-2 shadow-brutal-sm flex items-end justify-between h-13 sm:h-14">
                <div className="flex items-end gap-1.5 h-full w-2/3">
                  <div className="w-2 bg-black h-3.5 rounded-t-sm" />
                  <div className="w-2 bg-retroBlue h-6 rounded-t-sm border border-black" />
                  <div className="w-2 bg-retroYellow h-9 rounded-t-sm border border-black" />
                  <div className="w-2 bg-retroGreen h-11 rounded-t-sm border border-black" />
                </div>
                <div className="w-1/3 flex flex-col items-end">
                  <span className="font-mono text-[9px] font-black text-black">98.4%</span>
                  <svg className="w-10 h-5" viewBox="0 0 50 25" fill="none">
                    <path d="M2 20 L15 15 L28 18 L46 4" stroke="#ff70a6" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="46" cy="4" r="2.5" fill="#000" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between font-mono text-[9px] font-bold text-black/70 px-1">
                <span>EPOCH // 48/50</span>
                <span className="text-black bg-retroGreen px-1.5 py-0.5 rounded border border-black">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Characters Row */}
        <div className="w-full flex items-end justify-center -mt-6 sm:-mt-8 relative z-20 pointer-events-none">
          <SpeakerCharacterA />
          <AudienceRowA />
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   SCENE 2: EVEN SEMESTER (VERSION B - SUBTLE VARIATION OF THE SAME SYSTEM)
   ========================================================================= */
function EvenSemesterScene({ mouseX, mouseY }) {
  const pDeepX = useTransform(mouseX, [-0.5, 0.5], [12, -12]);
  const pDeepY = useTransform(mouseY, [-0.5, 0.5], [8, -8]);

  const pMidX = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const pMidY = useTransform(mouseY, [-0.5, 0.5], [-6, 6]);

  const pFrontX = useTransform(mouseX, [-0.5, 0.5], [-16, 16]);
  const pFrontY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[380px] md:min-h-[420px] flex items-center justify-center select-none overflow-hidden">
      {/* Background Warm Amber & Sky Aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-retroYellow/15 via-transparent to-retroBlue/10 rounded-2xl pointer-events-none" />

      {/* Decorative Subtle Mirrored Track Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 60,65 L 140,65 L 140,140 L 220,140"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 390,55 L 470,55 L 470,130"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 450,210 L 500,210 L 500,170"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <text x="100" y="45" fontSize="14" fontWeight="bold" fill="#000">✦</text>
        <text x="490" y="65" fontSize="12" fontWeight="bold" fill="#facc15">✦</text>
        <text x="360" y="35" fontSize="12" fontWeight="bold" fill="#38bdf8">✕</text>
        <text x="70" y="235" fontSize="12" fontWeight="bold" fill="#facc15">✕</text>
        <circle cx="140" cy="65" r="3" fill="#facc15" />
        <circle cx="470" cy="55" r="3" fill="#000" />
        <circle cx="500" cy="210" r="3" fill="#38bdf8" />
      </svg>

      {/* ================= FLOATING DECORATIVE PARALLAX OBJECTS (SUBTLE RE-ALIGNMENT) ================= */}

      {/* 1. Floating Idea Lightbulb Charm (Top-Left) */}
      <motion.div
        style={{ x: pDeepX, y: pDeepY }}
        animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-3 sm:top-6 left-4 sm:left-10 z-20"
        whileHover={{ scale: 1.25, rotate: -8 }}
      >
        <div className="bg-retroYellow border-2 border-black p-2 rounded-xl shadow-brutal-sm flex items-center justify-center w-10 h-10">
          <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7M9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1Z" />
          </svg>
        </div>
      </motion.div>

      {/* 2. Floating Donut Chart (Mid-Left) */}
      <motion.div
        style={{ x: pMidX, y: pMidY }}
        animate={{ rotate: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20"
        whileHover={{ scale: 1.2, rotate: -45 }}
      >
        <div className="bg-white border-2 border-black p-1.5 rounded-full shadow-brutal w-11 h-11 flex items-center justify-center">
          <svg className="w-7 h-7 -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#38bdf8" strokeWidth="6" strokeDasharray="40 100" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#facc15" strokeWidth="6" strokeDasharray="35 100" strokeDashoffset="-40" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#000000" strokeWidth="6" strokeDasharray="20 100" strokeDashoffset="-75" />
          </svg>
        </div>
      </motion.div>

      {/* 3. Floating Code Speech Bubble (Top-Right) */}
      <motion.div
        style={{ x: pDeepX, y: pDeepY }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-3 sm:top-6 right-6 sm:right-14 z-20"
        whileHover={{ scale: 1.2, rotate: 6 }}
      >
        <div className="bg-retroPink border-2 border-black px-2.5 py-1.5 rounded-xl shadow-brutal-sm font-mono font-black text-xs text-black flex items-center gap-1">
          &lt;/&gt;
        </div>
      </motion.div>

      {/* 4. Floating Bar Chart Widget (Mid-Right) */}
      <motion.div
        style={{ x: pMidX, y: pMidY }}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20"
        whileHover={{ scale: 1.15, rotate: -6 }}
      >
        <div className="bg-white border-2 border-black p-2 rounded-xl shadow-brutal flex items-end gap-1.5 w-11 h-13">
          <div className="w-2 bg-retroBlue h-4 rounded-t-sm border border-black" />
          <div className="w-2 bg-retroYellow h-7 rounded-t-sm border border-black" />
          <div className="w-2 bg-retroGreen h-10 rounded-t-sm border border-black" />
        </div>
      </motion.div>

      {/* 5. Ceramic Potted Plant (Bottom-Right) */}
      <motion.div
        style={{ x: pFrontX, y: pFrontY }}
        className="absolute bottom-1 right-2 sm:right-8 z-20 pointer-events-none hidden sm:block"
      >
        <svg className="w-13 h-15" viewBox="0 0 60 70" fill="none">
          <path d="M30 35 C20 15 10 20 8 30 C15 35 25 35 30 35 Z" fill="#facc15" stroke="#000" strokeWidth="1.8" />
          <path d="M30 35 C40 15 50 20 52 30 C45 35 35 35 30 35 Z" fill="#38bdf8" stroke="#000" strokeWidth="1.8" />
          <path d="M30 35 C30 10 38 10 38 20 C38 28 32 32 30 35 Z" fill="#4ade80" stroke="#000" strokeWidth="1.8" />
          <path d="M30 35 L30 45" stroke="#000" strokeWidth="2" />
          <path d="M20 45 L40 45 L37 65 L23 65 Z" fill="#fff" stroke="#000" strokeWidth="2" />
          <rect x="18" y="43" width="24" height="4" rx="1" fill="#38bdf8" stroke="#000" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* ================= CENTERPIECE: WORKSHOP WHITEBOARD & CHARACTERS ================= */}
      <motion.div
        style={{ x: pMidX, y: pMidY }}
        className="relative z-10 w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] flex flex-col items-center"
      >
        {/* Presentation Board Window */}
        <div className="w-full bg-white border-2.5 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          {/* Header Bar */}
          <div className="bg-retroYellow border-b-2 border-black px-3 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-black border border-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-black border border-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-black border border-black" />
            </div>
            <span className="font-mono font-black text-[10px] sm:text-[11px] uppercase tracking-wider text-black">
              AI WORKSHOP
            </span>
            <div className="w-6" />
          </div>

          {/* Board Analytics & Profile */}
          <div className="p-3 sm:p-4 bg-[#fbfaf8] grid grid-cols-12 gap-2 sm:gap-3 items-center">
            {/* AI Profile Face */}
            <div className="col-span-4 border-2 border-black bg-white rounded-xl p-2 shadow-brutal-sm flex flex-col items-center justify-center">
              <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 50 50" fill="none">
                <path d="M15 38 C15 32 20 28 25 28 C28 28 32 30 35 34 L35 42 L15 42 Z" fill="#f8fafc" stroke="#000" strokeWidth="2" />
                <circle cx="25" cy="20" r="9" fill="#fff" stroke="#000" strokeWidth="2" />
                <circle cx="23" cy="18" r="2.5" fill="#facc15" stroke="#000" strokeWidth="1.2" />
                <circle cx="28" cy="16" r="2" fill="#38bdf8" stroke="#000" strokeWidth="1.2" />
                <circle cx="27" cy="22" r="2" fill="#ff70a6" stroke="#000" strokeWidth="1.2" />
                <path d="M23 18 L28 16 M23 18 L27 22" stroke="#000" strokeWidth="1.2" />
                <path d="M12 16 L8 14 M12 22 L7 22 M38 16 L42 14 M38 22 L43 22" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-mono font-bold text-[8px] sm:text-[9px] text-black mt-1 uppercase">
                MODEL_TRAIN
              </span>
            </div>

            {/* Live Chart Visuals */}
            <div className="col-span-8 space-y-1.5">
              <div className="border-2 border-black bg-white rounded-lg p-1.5 sm:p-2 shadow-brutal-sm flex items-end justify-between h-13 sm:h-14">
                <div className="flex items-end gap-1.5 h-full w-2/3">
                  <div className="w-2 bg-black h-3.5 rounded-t-sm" />
                  <div className="w-2 bg-retroYellow h-6 rounded-t-sm border border-black" />
                  <div className="w-2 bg-retroBlue h-9 rounded-t-sm border border-black" />
                  <div className="w-2 bg-retroGreen h-11 rounded-t-sm border border-black" />
                </div>
                <div className="w-1/3 flex flex-col items-end">
                  <span className="font-mono text-[9px] font-black text-black">99.2%</span>
                  <svg className="w-10 h-5" viewBox="0 0 50 25" fill="none">
                    <path d="M2 18 L14 12 L26 15 L46 3" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="46" cy="3" r="2.5" fill="#facc15" stroke="#000" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between font-mono text-[9px] font-bold text-black/70 px-1">
                <span>LOSS // 0.008</span>
                <span className="text-black bg-retroGreen px-1.5 py-0.5 rounded border border-black">OPTIMAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Characters Row */}
        <div className="w-full flex items-end justify-center -mt-6 sm:-mt-8 relative z-20 pointer-events-none">
          <SpeakerCharacterB />
          <AudienceRowB />
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   MAIN SEMESTER CHAPTER — INTEGRATED EDITORIAL SCENE
   ========================================================================= */
export default function SemesterChapter({ academicYear, semester, onSelectSemester }) {
  const isOdd = semester.semester === "ODD";
  const [isHovered, setIsHovered] = useState(false);

  // Mouse Parallax Engine
  const sceneRef = useRef(null);
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothMouseX = useSpring(rawMouseX, springConfig);
  const smoothMouseY = useSpring(rawMouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    rawMouseX.set(normalizedX);
    rawMouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    rawMouseX.set(0);
    rawMouseY.set(0);
    setIsHovered(false);
  };

  const tagColor = isOdd ? "bg-retroBlue" : "bg-retroYellow";
  const arrowBg = isOdd ? "bg-retroBlue" : "bg-retroYellow";

  return (
    <motion.div
      ref={sceneRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectSemester?.(semester.semester)}
      className="relative w-full mb-20 group cursor-pointer"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Outer Neo-Brutalist Illustrated Frame */}
      <div className="relative bg-white border-[3px] border-black rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1">
        {/* Subtle Canvas Graph Paper Texture */}
        <div className="absolute inset-0 bg-paper-grid opacity-35 pointer-events-none" />

        {/* Integrated Panoramic Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ================= LEFT EDITORIAL TYPOGRAPHY ZONE ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Date Pill & Academic Year Tag */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className={`${tagColor} text-black font-black text-xs uppercase px-3.5 py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] tracking-wider`}
                >
                  {isOdd ? "JULY – DECEMBER" : "JANUARY – JUNE"}
                </span>
                <span className="bg-black text-white font-mono font-bold text-xs uppercase px-3 py-1 rounded-md border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  AY {academicYear}
                </span>
              </div>

              {/* Expressive Editorial Headline */}
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black uppercase tracking-tight leading-[0.92] drop-shadow-[1px_1px_0px_rgba(0,0,0,0.1)]">
                  {isOdd ? "ODD" : "EVEN"}{" "}
                  <span className="block">{isOdd ? "SEMESTER" : "SEMESTER"}</span>
                </h2>
              </div>

              {/* Editorial Manifesto / Subtitle */}
              <p className="font-bold text-sm sm:text-base text-black/75 leading-relaxed max-w-sm">
                {isOdd
                  ? "Exploring ideas, building skills and creating impact."
                  : "Innovating, collaborating and shaping the future."}
              </p>
            </div>


          </div>

          {/* ================= RIGHT PANORAMIC ILLUSTRATION SCENE ================= */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isOdd ? (
                <OddSemesterScene key="odd" mouseX={smoothMouseX} mouseY={smoothMouseY} />
              ) : (
                <EvenSemesterScene key="even" mouseX={smoothMouseX} mouseY={smoothMouseY} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
