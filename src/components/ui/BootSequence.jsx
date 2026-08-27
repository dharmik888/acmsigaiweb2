import React, { useEffect, useState } from "react";
import "./BootSequence.css";

const WORDS = ["BOOT", "COMPILE", "DEPLOY"];

const WORD_META = {
  BOOT: {
    label: "KERNEL INITIALIZATION",
    sublabel: "LOADING SYSTEM CORE",
    diagnostics: [
      ["MEMORY", "OK"],
      ["NETWORK", "OK"],
      ["CORE", "SYNC"],
      ["SIGAI", "LOAD"],
    ],
  },

  COMPILE: {
    label: "BUILDING CORE",
    sublabel: "COMPILING NEURAL MODULES",
    diagnostics: [
      ["MODULES", "14/14"],
      ["DEPENDENCIES", "OK"],
      ["NEURAL CORE", "BUILD"],
      ["INTEGRITY", "PASS"],
    ],
  },

  DEPLOY: {
    label: "STARTING SYSTEM",
    sublabel: "DEPLOYING SIGAI CORE",
    diagnostics: [
      ["CORE", "READY"],
      ["SERVICES", "ONLINE"],
      ["NETWORK", "LINK"],
      ["SYSTEM", "READY"],
    ],
  },
};

const CIRCUITS = [
  "circuit-1",
  "circuit-2",
  "circuit-3",
  "circuit-4",
  "circuit-5",
  "circuit-6",
  "circuit-7",
  "circuit-8",
];

const DATA = [
  "01101001",
  "10110100",
  "00101101",
  "11001010",
  "01011011",
  "11100010",
  "10100110",
];

const STAGE_DURATION = 1900;
const TRANSITION_DURATION = 900;

export default function BootSequence({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("enter");
  const [stageProgress, setStageProgress] = useState(0);

  const word = WORDS[index];
  const meta = WORD_META[word];

  /*
   * Prevent page scrolling while boot sequence is active.
   */
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /*
   * Stage progress.
   */
  useEffect(() => {
    setStageProgress(0);

    const start = performance.now();
    let frame;

    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / STAGE_DURATION, 1);

      setStageProgress(progress);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [index]);

  /*
   * Stage transition.
   */
  useEffect(() => {
    const stageTimer = setTimeout(() => {
      setPhase("exit");

      const transitionTimer = setTimeout(() => {
        if (index === WORDS.length - 1) {
          onComplete?.();
          return;
        }

        setIndex((prev) => prev + 1);
        setPhase("enter");
      }, TRANSITION_DURATION);

      return () => clearTimeout(transitionTimer);
    }, STAGE_DURATION);

    return () => clearTimeout(stageTimer);
  }, [index, onComplete]);

  const totalProgress = ((index + stageProgress) / WORDS.length) * 100;

  return (
    <div className={`boot-sequence boot-sequence--${phase}`}>
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="boot-grid" />
      <div className="boot-grid boot-grid--fine" />

      <div className="boot-vignette" />

      {/* =====================================================
          SCREEN BORDER
      ===================================================== */}

      <div className="boot-screen-border">
        <div className="border-trace border-trace--top" />
        <div className="border-trace border-trace--right" />
        <div className="border-trace border-trace--bottom" />
        <div className="border-trace border-trace--left" />

        <div className="border-head border-head--top" />
        <div className="border-head border-head--right" />
        <div className="border-head border-head--bottom" />
        <div className="border-head border-head--left" />
      </div>

      {/* =====================================================
          SCANNERS
      ===================================================== */}

      <div className="boot-scanline" />
      <div className="boot-vertical-scan" />

      {/* =====================================================
          CIRCUIT NETWORK
      ===================================================== */}

      <div className="boot-circuits">
        {CIRCUITS.map((circuit, i) => (
          <div
            className={`circuit ${circuit}`}
            key={circuit}
            style={{
              "--circuit-delay": `${i * 0.25}s`,
            }}
          >
            <span className="circuit-line" />
            <span className="circuit-line circuit-line--vertical" />
            <span className="circuit-node" />
            <span className="circuit-pulse" />
          </div>
        ))}
      </div>

      {/* =====================================================
          DATA TRACES
      ===================================================== */}

      <div className="boot-traces">
        <span className="trace trace-1" />
        <span className="trace trace-2" />
        <span className="trace trace-3" />
        <span className="trace trace-4" />
        <span className="trace trace-5" />
        <span className="trace trace-6" />
      </div>

      {/* =====================================================
          DATA STREAMS
      ===================================================== */}

      <div className="boot-data boot-data--left">
        {DATA.map((value, i) => (
          <span key={i} className={i === index + 1 ? "data-active" : ""}>
            {value}
          </span>
        ))}
      </div>

      <div className="boot-data boot-data--right">
        {DATA.map((_, i) => (
          <span key={i} className={i === index + 2 ? "data-active" : ""}>
            0x
            {(index * 31 + i * 17 + Math.floor(stageProgress * 9))
              .toString(16)
              .padStart(2, "0")
              .toUpperCase()}
          </span>
        ))}
      </div>

      {/* =====================================================
          TECH TICKS
      ===================================================== */}

      <div className="boot-ticks boot-ticks--left">
        {Array.from({ length: 13 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="boot-ticks boot-ticks--right">
        {Array.from({ length: 13 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      {/* =====================================================
          CORNER HUD
      ===================================================== */}

      <div className="boot-corner boot-corner--tl">
        <span>TCET</span>
        <b>/</b>
        <span>ACM</span>
        <b>/</b>
        <span>SIGAI</span>
      </div>

      <div className="boot-corner boot-corner--tr">
        SYSTEM <b>//</b> 01
      </div>

      <div className="boot-corner boot-corner--bl">
        CORE LINK
        <span className="corner-status">
          <i />
          ONLINE
        </span>
      </div>

      <div className="boot-corner boot-corner--br">
        AI SYSTEM <b>//</b> 01
      </div>

      {/* =====================================================
          SIDE FRAMES
      ===================================================== */}

      <div className="boot-frame boot-frame--left">
        <span />
      </div>

      <div className="boot-frame boot-frame--right">
        <span />
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="boot-main">
        {/* System label */}

        <div className="boot-system-label">
          <span>
            {index === 0
              ? "INITIALIZING"
              : index === 1
                ? "PROCESSING"
                : "FINALIZING"}
          </span>

          <i />

          <span>NEURAL CORE</span>
        </div>

        {/* =================================================
            CORE MARKER
        ================================================= */}

        <div className={`boot-core boot-core--${word.toLowerCase()}`}>
          <div className="core-ring core-ring--outer" />
          <div className="core-ring core-ring--inner" />

          <div className="core-crosshair">
            <span />
            <span />
          </div>

          <div className="core-node" />
        </div>

        {/* =================================================
            WORD
        ================================================= */}

        <div className="boot-word-frame">
          <div
            key={word}
            className={`boot-word boot-word--${phase}`}
            aria-label={word}
          >
            {word.split("").map((letter, i) => (
              <span
                key={`${word}-${i}`}
                className="boot-letter"
                style={{
                  "--letter-index": i,
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* =================================================
            ACTIVE LABEL
        ================================================= */}

        <div className="boot-active-label">
          <span className="active-dot" />
          <span>{meta.label}</span>
        </div>

        <div className="boot-sublabel">{meta.sublabel}</div>

        {/* =================================================
            DIAGNOSTICS
        ================================================= */}

        <div className="boot-diagnostics">
          {meta.diagnostics.map(([label, value], i) => {
            const completed = stageProgress > (i + 1) / meta.diagnostics.length;

            return (
              <div
                className={`diagnostic ${
                  completed ? "diagnostic--complete" : ""
                }`}
                key={label}
              >
                <span className="diagnostic-index">0{i + 1}</span>

                <span className="diagnostic-label">{label}</span>

                <span className="diagnostic-status">
                  {completed ? value : "---"}
                </span>
              </div>
            );
          })}
        </div>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="boot-progress">
          <div className="boot-progress-top">
            <span>PROCESS</span>

            <span>0{index + 1} / 03</span>
          </div>

          <div className="boot-progress-track">
            <div
              className="boot-progress-fill"
              style={{
                width: `${totalProgress}%`,
              }}
            />

            <div className="boot-progress-spark" />
          </div>

          <div className="boot-meta">
            <span>
              SYS <i /> ACTIVE
            </span>

            <span>{Math.round(totalProgress)}%</span>

            <span>{meta.label}</span>
          </div>
        </div>
      </main>

      {/* =====================================================
          BOTTOM STATUS
      ===================================================== */}

      <div className="boot-bottom-status">
        <span>ENCRYPTED CHANNEL</span>
        <i />
        <span>SECURE LINK</span>
        <i />
        <span>NODE 0{index + 1}</span>
      </div>

      {/* =====================================================
          CROSSHAIRS
      ===================================================== */}

      <div className="boot-crosshair boot-crosshair--1">
        <span />
        <span />
      </div>

      <div className="boot-crosshair boot-crosshair--2">
        <span />
        <span />
      </div>

      <div className="boot-crosshair boot-crosshair--3">
        <span />
        <span />
      </div>
    </div>
  );
}
