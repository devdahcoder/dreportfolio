/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      cabinetgrotesk: ["CabinetGrotesk", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      untitled: ["Untitled", "sans-serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
        blinker: "blinker 600ms linear infinite",
        "slow-bounce": "slow-bounce 2s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blinker: {
          "50%": { opacity: "0.6" },
        },
        "slow-bounce": {
          "0% 100%": { transform: "translateY(0)" },
          // '30%': { transform: 'translateY(-20px)'},
          "50%": { transform: "translateY(-100px)" },
        },
      },
    },
    screens: {
      // For each break point i tend to try and trigger at least three example: xs, xg, xx.
      // Same with sm, sg, sx
      xs: { min: "320px" },
      sm: {
        min: "480px",
      },
      sg: {
        min: "559px",
      },
      mx: {
        min: "639px",
      },
      md: {
        min: "768px",
      },
      ls: {
        min: "840px",
      },
      lg: {
        min: "1024px",
      },
      xl: {
        min: "1280px",
      },
      "2xl": {
        min: "1920px",
      },
    },
  },
  plugins: [],
};
