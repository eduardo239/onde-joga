import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // ou seu path base se estiver fazendo deploy em subdiretório
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  // @ts-ignore - Ignora o erro de tipo temporariamente
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
