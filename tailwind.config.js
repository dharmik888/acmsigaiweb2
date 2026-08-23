/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        retroYellow: "#FCD34D",
        retroOrange: "#FF5722",
        retroBlue: "#70D6FF",
        retroGreen: "#38B000",
        retroGreen: "#38B000",
        retroPurple: "#C084FC",
        retroBg: "#FAF7F2",
        themeBg: "var(--theme-bg)",
        themeText: "var(--theme-text)",
        themeCard: "var(--theme-card)",
        themeBorder: "var(--theme-border)",
      },
      borderWidth: {
        3: "3px", // Signature Neo-Brutalist border width
      },
      boxShadow: {
        "brutal-sm": "0px 0px 0px 0px transparent",
        brutal: "0px 0px 0px 0px transparent",
        "brutal-lg": "0px 0px 0px 0px transparent",
      },
    },
  },
  plugins: [],
};
