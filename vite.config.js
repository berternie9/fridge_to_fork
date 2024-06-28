import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   "/api": "https://fridge-to-fork-api.onrender.com",
    //   "/spoonacularApi": "https://fridge-to-fork-api.onrender.com",
    // },
    proxy: {
      "/api": "http://localhost:8080",
      "/spoonacularApi": "http://localhost:8080",
    },
  },
  // base: `https://fridge-to-fork-api.onrender.com/`,
});
