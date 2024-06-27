import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://vho1awboug.execute-api.us-east-1.amazonaws.com",
      "/spoonacularApi":
        " https://vho1awboug.execute-api.us-east-1.amazonaws.com",
    },
  },
});
