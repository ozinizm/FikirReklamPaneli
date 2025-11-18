import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f4ff",
          100: "#ebe9ff",
          200: "#cec9ff",
          300: "#b0a7ff",
          400: "#9182ff",
          500: "#726bff",
          600: "#5a52f0",
          700: "#4b43d4",
          800: "#3d35b2",
          900: "#302a8a"
        },
        accent: {
          100: "#fdf2e2",
          300: "#f7cfa0",
          500: "#ff9d4d"
        },
        background: {
          light: "#f7f8fb",
          dark: "#050912"
        }
      },
      fontFamily: {
        display: ["Inter", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 40px rgba(7, 9, 18, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
