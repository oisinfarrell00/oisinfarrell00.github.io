import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as markdown, Mode } from 'vite-plugin-markdown'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), markdown({ mode: [Mode.HTML, Mode.TOC] }) ],
  define: {
    'global': 'globalThis',
  },
  resolve: {
    alias: {
      'buffer': 'buffer/',
    },
  },
})
