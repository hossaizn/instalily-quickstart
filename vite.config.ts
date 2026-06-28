import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves at /<repo>/ so we need to match that base for assets.
// Override with VITE_BASE=/ for local dev or custom-domain deploys.
const base = process.env.VITE_BASE ?? '/instalily-quickstart/'

export default defineConfig({
  base,
  plugins: [react()],
})
