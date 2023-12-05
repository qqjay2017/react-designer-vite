import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": {
        target: "https://test-ymsl.kxgcc.com:30195",
        changeOrigin: true,
      },
      "/public/": {
        target: "https://test-ymsl.kxgcc.com:30195",
        changeOrigin: true,
      },
      "/cms-static/": {
        target: "https://test-ymsl.kxgcc.com:30195",
        changeOrigin: true,
      },
    },
  },
});
