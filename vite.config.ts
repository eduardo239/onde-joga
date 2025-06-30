import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/onde-joga/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        preserveModules: false,
      },
    },
    sourcemap: false,
  },
});
