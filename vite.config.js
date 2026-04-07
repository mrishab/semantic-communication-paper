import { cpSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: 'public',
  base: './',
  publicDir: false,
  resolve: {
    alias: {
      '/src': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    {
      name: 'copy-public-subdirs',
      closeBundle() {
        const sourceDir = resolve(__dirname, 'public/slides');
        const targetDir = resolve(__dirname, 'dist/slides');

        if (existsSync(sourceDir)) {
          cpSync(sourceDir, targetDir, { recursive: true });
        }
      },
    },
  ],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'public/index.html'),
    },
  },
  server: {
    fs: {
      allow: [resolve(__dirname), resolve(__dirname, 'public'), resolve(__dirname, 'src')],
    },
  },
});
