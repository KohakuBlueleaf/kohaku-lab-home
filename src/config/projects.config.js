/**
 * Projects Configuration
 * Manage all Kohaku Lab projects here
 */

import { tagColors } from './theme.js';

/**
 * @typedef {Object} ProjectTag
 * @property {string} name - Tag display name
 * @property {string} color - Color key from theme.js tag colors
 */

/**
 * @typedef {Object} ProjectImage
 * @property {string} src - Image source path
 * @property {string} alt - Alt text for accessibility
 */

/**
 * @typedef {Object} Project
 * @property {string} slug - URL-friendly project identifier
 * @property {string} name - Project name
 * @property {string} subtitle - Short tagline/subtitle
 * @property {string} description - Brief project description
 * @property {string} link - Link to project (GitHub, website, etc.)
 * @property {ProjectTag[]} tags - Category/technology tags
 * @property {ProjectImage} [image] - Optional project image/logo
 * @property {string} [thumbnail] - Thumbnail image for detail page
 * @property {string[]} [members] - Contributing member names
 * @property {string[]} [collaborators] - Engaged collaborator names
 * @property {boolean} [featured] - Whether to feature on homepage
 */

/**
 * List of all Kohaku Lab projects
 * @type {Project[]}
 */
export const projects = [
  {
    slug: 'kohakuhub',
    name: 'KohakuHub',
    subtitle: 'Open Model Hosting Platform',
    description:
      'A HuggingFace alternative with advanced model hosting, versioning, and collaboration features. Built with FastAPI, PostgreSQL, and Vue 3.',
    link: 'https://github.com/KohakuBlueleaf/KohakuHub',
    tags: [
      { name: 'Python', color: 'yellow' },
      { name: 'Vue 3', color: 'green' },
      { name: 'AI/ML', color: 'fuchsia' },
      { name: 'Fullstack', color: 'blue' },
    ],
    image: {
      src: '/assets/projects/kohakuhub.png',
      alt: 'KohakuHub Logo',
    },
    thumbnail: '/assets/projects/kohakuhub-banner.jpg',
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: true,
  },
  {
    slug: 'kohakuboard',
    name: 'KohakuBoard',
    subtitle: 'ML Experiment Tracking & Visualization',
    description:
      'Machine learning experiment tracking and visualization platform. Track metrics, compare runs, and visualize results with powerful analytics.',
    link: 'https://github.com/KohakuBlueleaf/KohakuBoard',
    tags: [
      { name: 'Python', color: 'yellow' },
      { name: 'Vue 3', color: 'green' },
      { name: 'ML Ops', color: 'purple' },
      { name: 'Data Viz', color: 'cyan' },
    ],
    image: {
      src: '/assets/projects/kohakuboard.png',
      alt: 'KohakuBoard Logo',
    },
    thumbnail: '/assets/projects/kohakuboard-banner.jpg',
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: true,
  },
  {
    slug: 'hdm',
    name: 'HDM',
    subtitle: 'Home-Trained Text-to-Image Model',
    description:
      'Home-trained text-to-image diffusion model. Demonstrating that high-quality AI models can be trained with accessible hardware.',
    link: 'https://github.com/KohakuBlueleaf/HDM',
    tags: [
      { name: 'Python', color: 'yellow' },
      { name: 'Stable Diffusion', color: 'fuchsia' },
      { name: 'Research', color: 'red' },
    ],
    image: {
      src: '/assets/projects/hdm.png',
      alt: 'HDM Project',
    },
    thumbnail: '/assets/projects/hdm-banner.jpg',
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: true,
  },
  {
    slug: 'lycoris',
    name: 'LyCORIS',
    subtitle: 'Advanced Neural Network Fine-Tuning',
    description:
      'Lora beYond Conventional methods. Advanced fine-tuning techniques for neural networks with improved efficiency and quality.',
    link: 'https://github.com/KohakuBlueleaf/LyCORIS',
    tags: [
      { name: 'Python', color: 'yellow' },
      { name: 'Neural Network', color: 'fuchsia' },
      { name: 'Stable Diffusion', color: 'lime' },
      { name: 'Research', color: 'red' },
    ],
    image: {
      src: '/assets/projects/lycoris.png',
      alt: 'LyCORIS Logo',
    },
    thumbnail: '/assets/projects/lycoris-banner.jpg',
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: true,
  },
];

/**
 * Get featured projects
 * @returns {Project[]}
 */
export function getFeaturedProjects() {
  return projects.filter(p => p.featured);
}

/**
 * Get projects by tag
 * @param {string} tagName - Tag name to filter by
 * @returns {Project[]}
 */
export function getProjectsByTag(tagName) {
  return projects.filter(p => p.tags.some(tag => tag.name.toLowerCase() === tagName.toLowerCase()));
}

/**
 * Get all unique tags from projects
 * @returns {string[]}
 */
export function getAllTags() {
  const tags = new Set();
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag.name));
  });
  return Array.from(tags).sort();
}

/**
 * Get project by slug
 * @param {string} slug - Project slug
 * @returns {Project|undefined}
 */
export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

export default projects;
