import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import svgr from 'vite-plugin-svgr'
import svgr from "@svgr/rollup";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages')
    }
  }
})
