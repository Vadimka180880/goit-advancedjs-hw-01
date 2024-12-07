import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(() => ({
  base: '/goit-advancedjs-hw-01/', 
  root: 'src',
  publicDir: 'public',
  define: {
    global: 'window', 
  },
  build: {
    outDir: '../dist',
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/public/index.html'),
        gallery: path.resolve(__dirname, 'src/public/1-gallery.html'),
        form: path.resolve(__dirname, 'src/public/2-form.html'),
      },
    },
  },
  server: {
    open: '/public/index.html',
  },
}));
