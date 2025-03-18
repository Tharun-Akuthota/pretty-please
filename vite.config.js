import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "src"), // Enables absolute imports
  //   },
  // },
  optimizeDeps: {
    include: ["prettier/standalone", "prettier/parser-babel"],
  },
  build: {
    target: "esnext", // Modern browser support
    minify: "esbuild", // Faster builds with esbuild minification
    sourcemap: true, // Useful for debugging
  },
  esbuild: {
    target: "esnext",
    treeShaking: true, // Optimizes unused code removal
  },
});
