import React, { useEffect, useRef } from "react";

export const MatrixCircuitBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();



    // Circuit lines configuration
    const circuits = [];
    const numCircuits = 15;
    const colors = ["#38BDF8", "#FF6B2B", "#FACC15"]; // Blue, Orange, Yellow

    for (let i = 0; i < numCircuits; i++) {
      circuits.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.4 + 0.2),
        vy: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        length: Math.floor(Math.random() * 50) + 20,
        history: [],
        thickness: Math.random() * 2 + 1,
        turnTimer: 0,
      });
    }

    const draw = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = "rgba(15, 15, 15, 0.1)"; // Matches retroBg
      ctx.fillRect(0, 0, canvas.width, canvas.height);



      // --- Draw Circuits ---
      circuits.forEach((circuit) => {
        // Save history for trails
        circuit.history.push({ x: circuit.x, y: circuit.y });
        if (circuit.history.length > circuit.length) {
          circuit.history.shift();
        }

        // Draw the circuit trail
        ctx.beginPath();
        if (circuit.history.length > 0) {
          ctx.moveTo(circuit.history[0].x, circuit.history[0].y);
          for (let j = 1; j < circuit.history.length; j++) {
            ctx.lineTo(circuit.history[j].x, circuit.history[j].y);
          }
        }
        
        ctx.strokeStyle = circuit.color;
        ctx.lineWidth = circuit.thickness;
        ctx.shadowBlur = 10;
        ctx.shadowColor = circuit.color;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw circuit "node" at the head
        ctx.beginPath();
        ctx.arc(circuit.x, circuit.y, circuit.thickness * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // Move circuit
        circuit.x += circuit.vx;
        circuit.y += circuit.vy;

        // 90-degree turns
        circuit.turnTimer++;
        if (circuit.turnTimer > 50 && Math.random() > 0.95) {
          circuit.turnTimer = 0;
          if (circuit.vx !== 0) {
            circuit.vy = (Math.random() > 0.5 ? 1 : -1) * Math.abs(circuit.vx);
            circuit.vx = 0;
          } else {
            circuit.vx = (Math.random() > 0.5 ? 1 : -1) * Math.abs(circuit.vy);
            circuit.vy = 0;
          }
        }

        // Wrap around screen
        if (circuit.x > canvas.width) circuit.x = 0;
        if (circuit.x < 0) circuit.x = canvas.width;
        if (circuit.y > canvas.height) circuit.y = 0;
        if (circuit.y < 0) circuit.y = canvas.height;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40"
      style={{ background: "#0f0f0f" }}
    />
  );
};
