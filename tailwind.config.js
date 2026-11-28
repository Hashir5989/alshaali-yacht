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
        forest: {
          DEFAULT: "#12352D",
          deep: "#0A211B",
          dark: "#0D2721",
          light: "#1A493E",
          card: "rgba(18, 53, 45, 0.45)",
          cardHover: "rgba(26, 73, 62, 0.55)",
        },
        ivory: {
          DEFAULT: "#F5F0E5",
          light: "#FAF7F0",
          dark: "#EAE4D5",
          muted: "rgba(245, 240, 229, 0.62)",
          faint: "rgba(245, 240, 229, 0.16)",
          fainter: "rgba(245, 240, 229, 0.08)",
        },
        gold: {
          DEFAULT: "#C6A66B",
          light: "#D4B87E",
          dark: "#A8884C",
          bronze: "#8F7246",
          soft: "rgba(198, 166, 107, 0.15)",
        },
        sage: {
          DEFAULT: "#5D665F",
          light: "#7D877F",
          dark: "#454D47",
        },
        // Aliases to guarantee no blue is ever rendered
        navy: {
          DEFAULT: "#12352D",
          deep: "#0A211B",
          ink: "#0D2721",
          sapphire: "#1A493E",
          dark: "#081C17",
          card: "rgba(18, 53, 45, 0.45)",
          cardHover: "rgba(26, 73, 62, 0.55)",
        },
        stone: {
          DEFAULT: "#F5F0E5",
          muted: "rgba(245, 240, 229, 0.62)",
          faint: "rgba(245, 240, 229, 0.16)",
          fainter: "rgba(245, 240, 229, 0.08)",
        },
        silver: "#5D665F",
        steel: "#5D665F",
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
