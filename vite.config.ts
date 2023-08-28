import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { resolve } from "path"
import webExtension from "@samrum/vite-plugin-web-extension"
// @ts-ignore
import { manifest } from "./src/mainifest"
import postcss from "tailwindcss"

export default defineConfig({
  root: "./src",
  base: "/",
  envDir: "../",
  publicDir: "./public",
  plugins: [
    react(),
    webExtension({
      manifest,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
      plugins: [postcss],
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/popup.html"),
        background: resolve(__dirname, "./src/background.ts"),
        options: resolve(__dirname, "./src/options.html"),
      },
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/name-[hash].[ext]",
      },
    },
  },
})
