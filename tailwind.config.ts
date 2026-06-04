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
        ink: "#18201d",
        paper: "#f8f7f2",
        moss: "#2f6f55",
        saffron: "#d8972a",
        clay: "#a94e37",
        ocean: "#1f5f7a",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(24, 32, 29, 0.12)",
      },
    },
  },
  plugins: [],
}

export default config
