/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#03091a", 900: "#050d22", 800: "#08122c", 700: "#0d1b3d" },
        brand: { cyan: "#00c3ff", blue: "#2a7bff", violet: "#7c5cff" },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        drift: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "50%": { transform: "translate(30px,-20px) scale(1.08)" } },
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
        glow: { "0%,100%": { opacity: ".55" }, "50%": { opacity: "1" } },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        glow: "glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
