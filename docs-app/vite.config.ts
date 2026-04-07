import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Serve /llm as raw markdown with text/plain content type
function serveLlmRaw(): Plugin {
  return {
    name: 'serve-llm-raw',
    configureServer(server) {
      server.middlewares.use('/llm', (_req, res) => {
        const filePath = path.resolve(__dirname, 'public/llm.md');
        const content = fs.readFileSync(filePath, 'utf-8');
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(content);
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), serveLlmRaw()],
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
      'react': path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
    dedupe: ['styled-components', 'react', 'react-dom'],
  },
})
