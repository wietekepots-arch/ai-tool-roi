import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "ai-tool-roi";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        // Single HTML entry point
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
});
