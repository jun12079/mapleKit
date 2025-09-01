import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.DEPLOY_TARGET === 'github' ? '/mapleKit/' : '/',
  plugins: [react()],
})
