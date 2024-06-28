import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://fridge-to-fork-api.onrender.com",
      "/spoonacularApi": "https://fridge-to-fork-api.onrender.com",
    },
  },
  base: `https://fridge-to-fork-api.onrender.com/`,
});
