
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using './' makes the deployment work on any repository name 
  // without needing to manually update this file.
  base: './', 
})
