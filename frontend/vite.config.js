import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { visualizer } from 'rollup-plugin-visualizer'; //to analyze bundle size to keep site performance up

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ filename: './dist/stats.html', open: true })], //adding build stats visualizer
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:3000',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  build: {
    minify: 'terser', //using terser for minification
    terserOptions: {
      compress: {
        drop_console: true, //removing any logs in production build
      },
      output: {
        comments: false, //removing any comments in dist build
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) { //to optimize chunking for common deps
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0].toString(); //creating separate chunks for each dep- ex. ['path/to/project/', 'react/index.js']
          }
        },
      },
    },
  },
});
