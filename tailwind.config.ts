import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0a78ff",
        background: {
          light: "#f5f7f8",
          dark: "#0f1823"
        },
        slate: {
          950: "#0f1823"
        }
      },
      fontFamily: {
        display: ["Inter", "sans-serif"]
      },
      boxShadow: {
        card: "0 15px 35px rgba(15, 24, 35, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
