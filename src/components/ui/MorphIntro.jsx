import React, { useEffect, useState } from "react";
import "./MorphIntro.css";

const WORDS = ["BOOT", "COMPILE", "DEPLOY"];

const WORD_COLORS = ["violet", "cyan", "green"];

export default function MorphIntro({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [morphing, setMorphing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < WORDS.length - 1) {
        setMorphing(true);

        const morphTimer = setTimeout(() => {
          setIndex((prev) => prev + 1);
          setMorphing(false);
        }, 650);

        return () => clearTimeout(morphTimer);
      }

      const completeTimer = setTimeout(() => {
        onComplete?.();
      }, 1000);

      return () => clearTimeout(completeTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  const currentWord = WORDS[index];
  const nextWord = WORDS[index + 1];
  const currentColor = WORD_COLORS[index];

  return (
    <div className="morph-intro">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="morph-bg" />

      <div className="morph-grid" />

      <div className="morph-vignette" />

      {/* Fine scanning beam */}
      <div className="morph-scan morph-scan--horizontal" />
      <div className="morph-scan morph-scan--vertical" />

      {/* =====================================================
          CIRCUIT NETWORK
      ===================================================== */}

      <div className="circuit-network">
        <span className="circuit circuit-a">
          <i />
          <b />
        </span>

        <span className="circuit circuit-b">
          <i />
          <b />
        </span>

        <span className="circuit circuit-c">
          <i />
          <b />
        </span>

        <span className="circuit circuit-d">
          <i />
          <b />
        </span>

        <span className="circuit circuit-e">
          <i />
          <b />
        </span>

        <span className="circuit circuit-f">
          <i />
          <b />
        </span>

        <span className="circuit circuit-g">
          <i />
          <b />
        </span>

        <span className="circuit circuit-h">
          <i />
          <b />
        </span>
      </div>

      {/* =====================================================
          DATA PACKETS
      ===================================================== */}

      <div className="data-packets">
        <span className="packet packet-1" />
        <span className="packet packet-2" />
        <span className="packet packet-3" />
        <span className="packet packet-4" />
        <span className="packet packet-5" />
        <span className="packet packet-6" />
      </div>

      {/* =====================================================
          TECHNICAL HUD ELEMENTS
      ===================================================== */}

      <div className="hud hud--tl">
        <span className="hud-line" />
        <span>TCET / ACM / SIGAI</span>
        <small>NEURAL COMPUTATION SYSTEM</small>
      </div>

      <div className="hud hud--tr">
        <span>CORE_01</span>
        <small>LINK: STABLE</small>
        <i />
      </div>

      <div className="hud hud--bl">
        <span>SYS.RUNTIME</span>
        <small>PROCESSING...</small>
      </div>

      <div className="hud hud--br">
        <span>AI SYSTEM / 01</span>
        <small>SECURE BOOT</small>
      </div>

      {/* =====================================================
          CROSSHAIRS
      ===================================================== */}

      <div className="crosshair crosshair-1">
        <span />
      </div>

      <div className="crosshair crosshair-2">
        <span />
      </div>

      <div className="crosshair crosshair-3">
        <span />
      </div>

      <div className="crosshair crosshair-4">
        <span />
      </div>

      {/* =====================================================
          RANDOM TECHNICAL DATA
      ===================================================== */}

      <div className="code-stream code-stream--left">
        <span>01101001</span>
        <span>10011010</span>
        <span>00110110</span>
        <span>11001001</span>
        <span>01001110</span>
      </div>

      <div className="code-stream code-stream--right">
        <span>0x7A31</span>
        <span>0xFF09</span>
        <span>0xA102</span>
        <span>0x19BC</span>
      </div>

      {/* =====================================================
          CENTER SYSTEM LABEL
      ===================================================== */}

      <div className="system-label">
        <span>INITIALIZING</span>
        <i />
        <span>NEURAL CORE</span>
      </div>

      {/* =====================================================
          MAIN MORPH
      ===================================================== */}

      <main className={`morph-center morph-center--${currentColor}`}>
        <div className={`morph-word ${morphing ? "is-morphing" : ""}`}>
          <div className="morph-word-stage">
            {/* Current word */}
            {currentWord.split("").map((char, i) => (
              <span
                key={`old-${index}-${i}`}
                className="morph-char morph-char--old"
                style={{
                  "--i": i,
                  "--total": currentWord.length,
                }}
              >
                {char}
              </span>
            ))}

            {/* Next word */}
            {nextWord &&
              nextWord.split("").map((char, i) => (
                <span
                  key={`new-${index}-${i}`}
                  className="morph-char morph-char--new"
                  style={{
                    "--i": i,
                    "--total": nextWord.length,
                  }}
                >
                  {char}
                </span>
              ))}
          </div>
        </div>

        {/* Sharp system underline */}
        <div className="morph-underline">
          <span />
        </div>

        {/* Word metadata */}
        <div className="morph-meta">
          <span>PROCESS</span>

          <div className="meta-track">
            <span
              style={{
                width: `${((index + 1) / WORDS.length) * 100}%`,
              }}
            />
          </div>

          <span>{String(index + 1).padStart(2, "0")} / 03</span>
        </div>
      </main>

      {/* =====================================================
          STATUS
      ===================================================== */}

      <div className="morph-status">
        <span>SYS</span>
        <i />
        <span>
          {index === 0
            ? "KERNEL INITIALIZATION"
            : index === 1
              ? "COMPILING NEURAL MODULES"
              : "DEPLOYING INTELLIGENCE"}
        </span>
      </div>

      {/* Side measurement marks */}
      <div className="measurement measurement--left">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="measurement measurement--right">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
