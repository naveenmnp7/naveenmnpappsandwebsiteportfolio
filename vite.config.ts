import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves project sites from /<repo-name>/, so the deploy workflow sets VITE_BASE.
// Locally (and on Netlify/Vercel/custom domains) it falls back to "/".
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
  build: {
    target: "es2020",
  },
});
