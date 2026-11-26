/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D2347",
          deep: "#091A36",
          ink: "#071429",
          sapphire: "#1B3A6B",
          dark: "#050C17",
          card: "rgba(13, 35, 71, 0.45)",
          cardHover: "rgba(27, 58, 107, 0.55)",
        },
        stone: {
          DEFAULT: "#F0EBE0",
          muted: "rgba(240, 235, 224, 0.62)",
          faint: "rgba(240, 235, 224, 0.16)",
          fainter: "rgba(240, 235, 224, 0.08)",
        },
        gold: {
          DEFAULT: "#C5A880",
          light: "#E2C896",
          dark: "#A68658",
          bronze: "#8F7246",
          soft: "rgba(197, 168, 128, 0.15)",
        },
        silver: "#8A9AB5",
        steel: "#5A6B85",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "DM Sans", "Manrope", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        ultra: ".32em",
        mega: ".4em",
      },
      animation: {
        "slow-zoom": "zoomSlow 24s infinite alternate ease-in-out",
        "pulse-subtle": "pulseSubtle 4s infinite ease-in-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        zoomSlow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
