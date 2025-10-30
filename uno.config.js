import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';
import theme from './src/config/theme.js';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        ep: () =>
          import('@iconify-json/ep/icons.json', { with: { type: 'json' } }).then(i => i.default),
        carbon: () =>
          import('@iconify-json/carbon/icons.json', { with: { type: 'json' } }).then(
            i => i.default
          ),
      },
      scale: 1.2,
      warn: false,
    }),
  ],

  shortcuts: {
    // Button styles
    btn: 'px-4 py-2 rounded-md cursor-pointer transition-all duration-300 font-medium inline-flex items-center gap-2',
    'btn-primary': 'btn bg-blue-600 text-white hover:bg-blue-700 active:scale-95',
    'btn-secondary': 'btn bg-slate-700 text-slate-100 hover:bg-slate-600 active:scale-95',
    'btn-outline': 'btn border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',

    // Card styles
    card: 'bg-slate-800 rounded-lg shadow-md border border-slate-700 p-6',
    'card-hover': 'card hover:shadow-lg hover:border-slate-600 transition-all duration-300',
    'card-interactive': 'card-hover cursor-pointer hover:-translate-y-1',

    // Container styles (better max-widths for desktop)
    // Base containers with only horizontal padding
    'container-base': 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
    'container-wide': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    'container-narrow': 'max-w-3xl mx-auto px-4 sm:px-6',
    // Containers with vertical padding (for sections)
    'container-main': 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6',
    'container-section': 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',

    // Section styles
    section: 'py-12 sm:py-16',
    'section-title': 'text-3xl sm:text-4xl font-bold text-slate-100 mb-8',
    'section-subtitle': 'text-lg text-slate-400 mb-6',

    // Text styles
    'gradient-text': 'bg-gradient-to-br from-sky-500 to-pink-300 bg-clip-text text-transparent',
    'gradient-text-alt': 'bg-gradient-to-br from-sky-400 to-cyan-400 bg-clip-text text-transparent',
    'text-body': 'text-slate-300 leading-relaxed',
    'text-muted': 'text-slate-400',

    // Input styles
    input:
      'px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors',
    textarea: 'input resize-vertical min-h-24',

    // Layout utilities
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',

    // Link styles
    link: 'text-blue-400 hover:text-blue-300 transition-colors underline-offset-2',
    'link-hover': 'hover:underline',

    // Tag/Badge styles
    tag: 'px-3 py-1 rounded-full text-sm font-medium inline-block',
  },

  theme: {
    colors: {
      primary: theme.primary,
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },

  content: {
    pipeline: {
      include: [/\.(astro|vue|html|js)($|\?)/],
    },
    filesystem: ['./src/**/*.{astro,vue,js,html}'],
    pipelineExclude: ['node_modules', '.git', 'dist', 'public'],
  },
});
