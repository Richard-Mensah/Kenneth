import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — navy + gold + cream (matches the logo).
        navy: "#14233f",
        "navy-700": "#1d3357",
        gold: "#d8972a",
        "gold-soft": "#e7b85c",
        cream: "#f7f5ef",
        slate: "#5b6b85",
        // Legacy token names kept as aliases so existing classes recolour to the new palette.
        ink: "#14233f", // -> navy
        paper: "#f7f5ef", // -> cream
        moss: "#14233f", // -> navy
        saffron: "#d8972a", // -> gold
        clay: "#d8972a", // -> gold
        ocean: "#1d3357", // -> navy-700
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(24, 32, 29, 0.12)",
      },
    },
  },
  plugins: [],
}

export default config
