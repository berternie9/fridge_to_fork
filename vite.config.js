import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://fridge-to-fork-api.onrender.com",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //     "/spoonacularApi": {
  //       target: "https://fridge-to-fork-api.onrender.com",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
  base: "/",
});

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": "http://localhost:8080",
//       "/spoonacularApi": "http://localhost:8080",
//     },
//   },
// });
