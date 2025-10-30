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
 * @property {string} link - Link to project page (website, docs, etc.)
 * @property {string} [githubLink] - Optional separate GitHub repository link
 * @property {ProjectTag[]} tags - Category/technology tags
 * @property {ProjectImage} [image] - Project thumbnail (2.4:1 ratio, used in card and detail page)
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
    link: 'https://kohakuhub.example.com',
    githubLink: 'https://github.com/KohakuBlueleaf/KohakuHub',
    tags: [
      { name: 'Python', color: 'yellow' },
      { name: 'Vue 3', color: 'green' },
      { name: 'AI/ML', color: 'fuchsia' },
      { name: 'Fullstack', color: 'blue' },
    ],
    image: {
      src: '/assets/projects/kohakuhub.png',
      alt: 'KohakuHub',
    },
    members: ['KohakuBlueLeaf', 'theblackcat'],
    collaborators: ['DeepGHS'],
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
      alt: 'KohakuBoard',
    },
    members: ['KohakuBlueLeaf', 'theblackcat'],
    collaborators: ['DeepGHS'],
    featured: true,
  },
  {
    slug: 'hdm',
    name: 'HDM',
    subtitle: 'Home-made Diffusion Model',
    description:
      'Home-trained text-to-image diffusion model. Demonstrating that high-quality AI models can be trained with accessible hardware.',
    link: 'https://github.com/KohakuBlueleaf/HDM',
    tags: [
      { name: 'Python', color: 'yellow' },
      { name: 'Neural Network', color: 'fuchsia' },
      { name: 'Research', color: 'red' },
    ],
    image: {
      src: '/assets/projects/hdm.jpg',
      alt: 'HDM',
    },
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: true,
  },
  {
    slug: 'lycoris',
    name: 'LyCORIS',
    subtitle: 'Comprehensive PEFT Library',
    description:
      'Lora beYond Conventional methods. Advanced fine-tuning techniques for neural networks with improved efficiency and quality.',
    link: 'https://github.com/KohakuBlueleaf/LyCORIS',
    tags: [
      { name: 'Python', color: 'yellow' },
      { name: 'Neural Network', color: 'fuchsia' },
      { name: 'Research', color: 'red' },
    ],
    image: {
      src: 'https://github.com/KohakuBlueleaf/LyCORIS/raw/main/docs/images/banner2.png',
      alt: 'LyCORIS',
    },
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
