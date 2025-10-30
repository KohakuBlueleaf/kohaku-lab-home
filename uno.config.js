import { defineConfig, presetUno, presetAttributify } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  content: {
    // include .js, .vue, .astro files
    pipeline: {
      include: [
        /\.(astro|vue|html|js)($|\?)/,
      ],
    },
    filesystem: [
      './src/**/*.{astro,vue,js,html}',
    ],
    // you might exclude node_modules, public, dist
    pipelineExclude: ['node_modules', '.git', 'dist', 'public'],
  },
  // other UnoCSS options...
});
