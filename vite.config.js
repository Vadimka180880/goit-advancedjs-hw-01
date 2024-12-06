import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';
import path from 'path';

export default defineConfig(({ command }) => {
  return {
    define: {
      global: {}, 
    },
    root: 'src', 
    publicDir: 'public', 
    build: {
      outDir: '../dist',
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./public/*.html').reduce((entries, file) => {
          const fileName = path.basename(file, '.html');
          entries[fileName] = path.resolve(__dirname, file);
          return entries;
        }, {}),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
      emptyOutDir: true,
    },
    css: {
      postcss: {
        plugins: [
          SortCss({
            sort: 'mobile-first',
          }),
        ],
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./public/**/*.html']),
    ],
    server: {
      open: '/public/index.html', 
    },
  };
});
