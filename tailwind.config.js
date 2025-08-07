/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'class' if you prefer toggling manually
  theme: {
    extend: {
      fontFamily: {
        aladin: ['"Aladin"', "cursive"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        count: "tick 1s ease-in-out infinite",
        fadeInScale: "fadeInScale 2.5s ease-out forwards",
        slowGlow: "glow 5s ease-in-out infinite",
      },
      keyframes: {
        tick: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        fadeInScale: {
          "0%": {
            opacity: 0,
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(255, 105, 180, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(255, 105, 180, 0.5)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
