/**
 * Kohaku Lab Theme Configuration
 * Centralized color and styling configuration for the entire site
 */

/**
 * @typedef {Object} ColorShades
 * @property {string} 50 - Lightest shade
 * @property {string} 100
 * @property {string} 200
 * @property {string} 300
 * @property {string} 400
 * @property {string} 500 - Base color
 * @property {string} 600
 * @property {string} 700
 * @property {string} 800
 * @property {string} 900 - Darkest shade
 */

/**
 * Primary color palette (Blue)
 * @type {ColorShades}
 */
export const primary = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a'
}

/**
 * Tag color mappings for categories
 * @type {Object.<string, {bg: string, text: string, name: string}>}
 */
export const tagColors = {
  yellow: {
    bg: '#fef08a',
    text: '#854d0e',
    name: 'yellow'
  },
  fuchsia: {
    bg: '#f0abfc',
    text: '#701a75',
    name: 'fuchsia'
  },
  lime: {
    bg: '#bef264',
    text: '#365314',
    name: 'lime'
  },
  red: {
    bg: '#fca5a5',
    text: '#7f1d1d',
    name: 'red'
  },
  green: {
    bg: '#86efac',
    text: '#14532d',
    name: 'green'
  },
  blue: {
    bg: '#93c5fd',
    text: '#1e3a8a',
    name: 'blue'
  },
  purple: {
    bg: '#d8b4fe',
    text: '#581c87',
    name: 'purple'
  },
  orange: {
    bg: '#fdba74',
    text: '#7c2d12',
    name: 'orange'
  },
  cyan: {
    bg: '#67e8f9',
    text: '#164e63',
    name: 'cyan'
  },
  pink: {
    bg: '#fbcfe8',
    text: '#831843',
    name: 'pink'
  }
}

/**
 * Gradient configurations for various UI elements
 * @type {Object.<string, string>}
 */
export const gradients = {
  hero: 'from-sky-500 via-blue-500 to-pink-300',
  heroAlt: 'from-sky-400 to-cyan-400',
  accent: 'from-blue-600 to-purple-600',
  card: 'from-slate-800 to-slate-900',
  text: 'from-sky-500 to-pink-300'
}

/**
 * Background colors for different sections
 * @type {Object.<string, string>}
 */
export const backgrounds = {
  base: '#0f172a',      // slate-900
  card: '#1e293b',      // slate-800
  cardHover: '#334155', // slate-700
  section: '#020617'    // slate-950
}

/**
 * Text colors
 * @type {Object.<string, string>}
 */
export const text = {
  primary: '#f1f5f9',   // slate-100
  secondary: '#cbd5e1', // slate-300
  muted: '#94a3b8',     // slate-400
  dark: '#64748b'       // slate-500
}

/**
 * Border colors
 * @type {Object.<string, string>}
 */
export const borders = {
  default: '#334155',  // slate-700
  light: '#475569',    // slate-600
  dark: '#1e293b'      // slate-800
}

/**
 * Shadow configurations
 * @type {Object.<string, string>}
 */
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
}

/**
 * Spacing scale (in pixels)
 * @type {Object.<string, string>}
 */
export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem'    // 96px
}

/**
 * Border radius scale
 * @type {Object.<string, string>}
 */
export const borderRadius = {
  sm: '0.125rem',  // 2px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  full: '9999px'
}

/**
 * Transition durations
 * @type {Object.<string, string>}
 */
export const transitions = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms'
}

/**
 * Container max widths for different breakpoints
 * @type {Object.<string, string>}
 */
export const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

/**
 * Export all theme values
 */
export default {
  primary,
  tagColors,
  gradients,
  backgrounds,
  text,
  borders,
  shadows,
  spacing,
  borderRadius,
  transitions,
  containers
}
