import React, { useEffect, useState } from "react";
import "./Preloader.css";
import sigaiLogo from "../../assets/sigai-logo.webp";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const duration = 2800;
    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const percentage = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - percentage, 3);

      setProgress(Math.floor(eased * 100));

      // Start opening the center around 28%
      if (percentage > 0.28) {
        setLogoVisible(true);
      }

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setExit(true);

          setTimeout(() => {
            onComplete?.();
          }, 700);
        }, 300);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div className={`preloader ${exit ? "preloader--exit" : ""}`}>
      {/* =========================================
          TECHNICAL BACKGROUND
          ========================================= */}

      <div className="preloader-grid" />

      <div className="preloader-traces">
        <span className="trace trace-1" />
        <span className="trace trace-2" />
        <span className="trace trace-3" />
        <span className="trace trace-4" />
      </div>

      {/* =========================================
          MAIN CONTENT
          ========================================= */}

      <div className="preloader-content">
        {/* =========================================
            BRAND
            ========================================= */}

        <div className="preloader-brand">
          <div className="brand-word brand-left">TCET</div>

          <div
            className={`brand-logo-slot ${
              logoVisible ? "brand-logo-slot--visible" : ""
            }`}
          >
            <div className="brand-logo">
              <img src={sigaiLogo} alt="ACM SIGAI" />
            </div>
          </div>

          <div className="brand-word brand-right">ACM SIGAI</div>
        </div>

        {/* =========================================
            PROGRESS
            ========================================= */}

        <div className="loader-status">
          <div className="loader-number">
            <span>{progress}</span>
            <span className="loader-percent">%</span>
          </div>

          <div className="loader-track">
            <div
              className="loader-progress"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="loader-label">
            <span>SYSTEM INITIALIZATION</span>
            <span>TCET / ACM / SIGAI</span>
          </div>
        </div>
      </div>

      {/* =========================================
          CORNER INFORMATION
          ========================================= */}

      <div className="preloader-corner preloader-corner--tl">
        TCET ACM SIGAI
      </div>

      <div className="preloader-corner preloader-corner--br">
        AI SYSTEM / 01
      </div>
    </div>
  );
}
