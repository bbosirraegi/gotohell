import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import paths from "vite-jsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), paths()],
  server: {
    port: 3000,
  },
});
