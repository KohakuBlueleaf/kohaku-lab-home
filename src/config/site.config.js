/**
 * Site Configuration
 * Centralized configuration for site-wide content and settings
 */

/**
 * Basic site information
 */
export const siteInfo = {
  name: 'Kohaku Lab',
  tagline: 'Virtual Open Source AI Research Lab',
  description:
    'A virtual lab made by AI/ML enthusiasts. Powered by passion. Creating openly accessible tools and having fun with AI/ML.',
  url: 'https://kohaku-lab.com', // Update this with your actual domain
  ogImage: '/og-image.jpg',
};

/**
 * Hero section statistics
 * These numbers are displayed on the homepage hero
 */
export const heroStats = {
  githubStars: '7K', // Sum of all members' GitHub stars
  downloads: '2M', // HuggingFace downloads
  projects: '5', // Number of active projects (can be dynamic or static)
  openAccess: '100%', // Percentage of open access projects
};

/**
 * Contact information
 * @typedef {Object} ContactMethod
 * @property {string} type - Type of contact (email, github, discord, twitter, etc.)
 * @property {string} label - Display label
 * @property {string} value - Contact value (email address, username, etc.)
 * @property {string} url - Full URL for the contact method
 * @property {string} icon - UnoCSS icon class
 * @property {string} description - Brief description
 * @property {string} color - Icon color class
 * @property {boolean} [available] - Whether this contact method is currently available
 */

/**
 * List of contact methods
 * @type {ContactMethod[]}
 */
export const contactMethods = [
  {
    type: 'email',
    label: 'Email Us',
    value: 'contact@kohaku-lab.org',
    url: 'mailto:contact@kohaku-lab.org',
    icon: 'i-carbon-email',
    description: 'For general inquiries, collaboration proposals, or questions',
    color: 'text-blue-400',
    available: true,
  },
  {
    type: 'github',
    label: 'GitHub',
    value: '@KohakuBlueleaf',
    url: 'https://github.com/KohakuBlueleaf',
    icon: 'i-carbon-logo-github',
    description: 'Check out our projects, report issues, or contribute code',
    color: 'text-purple-400',
    available: true,
  },
  {
    type: 'discord',
    label: 'Community Chat',
    value: 'Discord Server',
    url: 'https://discord.gg/fBJfGPPMBc',
    icon: 'i-carbon-chat',
    description: 'Join our community discussions',
    color: 'text-green-400',
    available: true,
  },
  {
    type: 'twitter',
    label: 'Social Media',
    value: '@KohakuBlueleaf',
    url: 'https://twitter.com/KohakuBlueleaf',
    icon: 'i-carbon-logo-twitter',
    description: 'Follow us for updates, announcements, and insights',
    color: 'text-cyan-400',
    available: true,
  },
];

/**
 * Social media links
 * Used in footer, navbar, etc.
 */
export const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/KohakuBlueleaf',
    icon: 'i-carbon-logo-github',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/KohakuBlueleaf',
    icon: 'i-carbon-logo-twitter',
  },
  {
    platform: 'HuggingFace',
    url: 'https://huggingface.co/KBlueLeaf',
    icon: 'i-carbon-model',
  },
  {
    platform: 'Website',
    url: 'https://kohaku-lab.org',
    icon: 'i-carbon-earth',
  },
];

/**
 * Call-to-Action (CTA) configurations
 */
export const ctas = {
  // Main CTA on homepage
  primary: {
    text: 'Explore on GitHub',
    url: 'https://github.com/KohakuBlueleaf',
    icon: 'i-carbon-logo-github',
  },
  // Secondary CTA
  secondary: {
    text: 'Get in Touch',
    url: '/contact',
    icon: 'i-carbon-email',
  },
  // Join community CTA
  joinCommunity: {
    title: 'Ready to Get Involved?',
    description:
      'Join our community of AI/ML enthusiasts and contribute to open-access projects that are making a difference.',
    primaryButton: {
      text: 'Explore on GitHub',
      url: 'https://github.com/KohakuBlueleaf',
      icon: 'i-carbon-logo-github',
    },
    secondaryButton: {
      text: 'Get in Touch',
      url: '/contact',
      icon: 'i-carbon-email',
    },
  },
};

/**
 * Navigation links
 * Main site navigation menu
 */
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Members', href: '/members' },
  { label: 'Collaborators', href: '/collaborators' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Footer configuration
 */
export const footer = {
  tagline:
    'A virtual lab made by AI/ML enthusiasts. Powered by passion - building tools we love and sharing them with everyone.',

  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Members', href: '/members' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  featuredProjects: [
    { label: 'KohakuHub', href: 'https://github.com/KohakuBlueleaf/KohakuHub' },
    { label: 'KohakuBoard', href: 'https://github.com/KohakuBlueleaf/KohakuBoard' },
    { label: 'HDM', href: 'https://github.com/KohakuBlueleaf/HDM' },
    { label: 'LyCORIS', href: 'https://github.com/KohakuBlueleaf/LyCORIS' },
  ],

  copyright: 'Kohaku Lab. Built with ♥ by enthusiasts',
};

/**
 * SEO and meta information defaults
 */
export const seo = {
  defaultTitle: 'Kohaku Lab - Virtual AI/ML Lab by Enthusiasts',
  defaultDescription:
    'A virtual lab made by AI/ML enthusiasts. Powered by passion. Creating openly accessible tools and having fun with AI/ML.',
  twitterHandle: '@KohakuBlueleaf',
};

/**
 * Blog configuration
 */
export const blogConfig = {
  postsPerPage: 9,
  showReadingTime: true,
  showAuthor: true,
  enableSearch: true,
  enableTagFilter: true,
};

/**
 * Feature flags
 * Toggle features on/off
 */
export const features = {
  showCollaborators: true,
  showBlog: true,
  showStats: true,
  enableNewsletter: false, // Future feature
  enableComments: false, // Future feature
};

export default {
  siteInfo,
  heroStats,
  contactMethods,
  socialLinks,
  ctas,
  navLinks,
  footer,
  seo,
  blogConfig,
  features,
};
