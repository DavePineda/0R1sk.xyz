import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'plugin-inspect-react-code'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Dominios publicados a través del túnel de Cloudflare
  server: {
    allowedHosts: ['newsite.0r1sk.xyz'],
  },
  preview: {
    port: 5173,
    strictPort: true,
    allowedHosts: ['newsite.0r1sk.xyz'],
  },
});
