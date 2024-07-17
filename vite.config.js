import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/fridge_to_fork/",
  build: {
    outDir: "docs",
  },
});
