import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ou seu path base se estiver fazendo deploy em subdiretório
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
