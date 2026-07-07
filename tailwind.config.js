/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F4C81",
          50: "#EAF2F8",
          100: "#D5E5F1",
          200: "#ABCBE3",
          300: "#81B1D5",
          400: "#5797C7",
          500: "#2D7DB9",
          600: "#0F4C81",
          700: "#0C3D67",
          800: "#092E4D",
          900: "#061F33",
        },
        secondary: {
          DEFAULT: "#1E3A8A",
          light: "#3B5AAE",
        },
        accent: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          dark: "#B45309",
        },
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(15, 76, 129, 0.08), 0 1px 2px -1px rgba(15, 76, 129, 0.08)",
        "card-hover":
          "0 10px 25px -5px rgba(15, 76, 129, 0.15), 0 8px 10px -6px rgba(15, 76, 129, 0.1)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
