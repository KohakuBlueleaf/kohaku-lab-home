import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import UnoCSS from '@unocss/astro';

export default defineConfig({
  integrations: [
    vue(),
    UnoCSS({
      // you can pass options here, e.g. injectReset: true
      injectReset: true,
    })
  ],
  vite: {
    // you can extend Vite/Rollup options here if needed (e.g., manualChunks)
    build: {
      rollupOptions: {
        // optional: manualChunks, chunkFileNames, etc.
      }
    }
  }
});
