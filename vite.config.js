import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // relative base so the build works on GitHub Pages project subpaths
  // (username.github.io/<repo>/) as well as at a domain root.
  base: './',
  plugins: [react()],
})
