import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/contexts": fileURLToPath(new URL("./src/contexts", import.meta.url)),
    },
  },
  test: {
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      all: true,
    },

    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
