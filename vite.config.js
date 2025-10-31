import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Derive base path for GitHub Pages when repo is not <user>.github.io
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
    plugins: [react()],
    base: repo ? `/${repo}/` : '/', // Ensure correct asset paths on Pages
})
