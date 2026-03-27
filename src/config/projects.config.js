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
  // ============================================================
  // AI/NN Research
  // ============================================================
  {
    slug: 'lycoris',
    name: 'LyCORIS',
    subtitle: 'Comprehensive PEFT Library (ICLR 2024)',
    description:
      'Lora beYond Conventional methods. Advanced parameter-efficient fine-tuning techniques for neural networks, published at ICLR 2024.',
    link: 'https://github.com/KohakuBlueleaf/LyCORIS',
    tags: [
      { name: 'Research', color: 'red' },
      { name: 'Python', color: 'yellow' },
      { name: 'Neural Network', color: 'fuchsia' },
    ],
    image: {
      src: 'https://github.com/KohakuBlueleaf/LyCORIS/raw/main/docs/images/banner2.png',
      alt: 'LyCORIS',
    },
    members: ['KohakuBlueLeaf', 'cybermeow'],
    collaborators: [],
    featured: true,
  },
  {
    slug: 'hdm',
    name: 'HDM',
    subtitle: 'Home-made Diffusion Model',
    description:
      'Home-trained text-to-image diffusion model. Demonstrating that high-quality generative models can be trained on accessible hardware.',
    link: 'https://github.com/KohakuBlueleaf/HDM',
    tags: [
      { name: 'Research', color: 'red' },
      { name: 'Python', color: 'yellow' },
      { name: 'Neural Network', color: 'fuchsia' },
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
    slug: 'tipo',
    name: 'TIPO',
    subtitle: 'Text-to-Image Prompt Optimization (ICLR 2026)',
    description:
      'A system for prompt generation and optimization to improve text-to-image model performance. Published at ICLR 2026.',
    link: 'https://github.com/KohakuBlueleaf/KGen',
    tags: [
      { name: 'Research', color: 'red' },
      { name: 'Python', color: 'yellow' },
      { name: 'Neural Network', color: 'fuchsia' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: true,
  },

  // ============================================================
  // Infrastructure
  // ============================================================
  {
    slug: 'kohakuhub',
    name: 'KohakuHub',
    subtitle: 'Self-Hosted Model Hosting Platform',
    description:
      'A self-hosted HuggingFace alternative with model hosting, versioning, and collaboration features. Built with FastAPI and Vue 3.',
    link: 'https://github.com/KohakuBlueleaf/KohakuHub',
    tags: [
      { name: 'Infrastructure', color: 'blue' },
      { name: 'Python', color: 'yellow' },
      { name: 'Fullstack', color: 'green' },
    ],
    image: {
      src: '/assets/projects/kohakuhub.png',
      alt: 'KohakuHub',
    },
    members: ['KohakuBlueLeaf', 'theblackcat', 'ntrwansui'],
    collaborators: ['DeepGHS'],
    featured: true,
  },
  {
    slug: 'kohakuriver',
    name: 'KohakuRiver',
    subtitle: 'Lightweight Cluster Manager',
    description:
      'Turns your small fleet of nodes into one powerful computer, using Docker for environment consistency without enterprise orchestration overhead.',
    link: 'https://github.com/KohakuBlueleaf/KohakuRiver',
    tags: [
      { name: 'Infrastructure', color: 'blue' },
      { name: 'Python', color: 'yellow' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: true,
  },
  {
    slug: 'kohakuboard',
    name: 'KohakuBoard',
    subtitle: 'ML Experiment Tracking',
    description:
      'High-efficiency local/self-hosted ML experiment tracking and visualization system. A lightweight alternative to W&B.',
    link: 'https://github.com/KohakuBlueleaf/KohakuBoard',
    tags: [
      { name: 'Infrastructure', color: 'blue' },
      { name: 'Python', color: 'yellow' },
      { name: 'ML Ops', color: 'cyan' },
    ],
    image: {
      src: '/assets/projects/kohakuboard.png',
      alt: 'KohakuBoard',
    },
    members: ['KohakuBlueLeaf', 'theblackcat'],
    collaborators: ['DeepGHS'],
    featured: false,
  },

  // ============================================================
  // Database
  // ============================================================
  {
    slug: 'kohakuvault',
    name: 'KohakuVault',
    subtitle: 'Single-File Key-Value Store',
    description:
      'Simple single-file key-value store database built on SQLite. Lightweight, portable, and designed for embedding in other applications.',
    link: 'https://github.com/KohakuBlueleaf/KohakuVault',
    tags: [
      { name: 'Database', color: 'purple' },
      { name: 'Rust', color: 'amber' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: true,
  },

  // ============================================================
  // AI/LLM Applications
  // ============================================================
  {
    slug: 'kohakurag',
    name: 'KohakuRAG',
    subtitle: 'Hierarchical RAG Framework',
    description:
      'Domain-agnostic retrieval-augmented generation framework with hierarchical document indexing, context-aware search, and single-file SQLite storage.',
    link: 'https://github.com/Kohaku-Lab/KohakuRAG',
    tags: [
      { name: 'AI/LLM', color: 'pink' },
      { name: 'Python', color: 'yellow' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: false,
  },
  {
    slug: 'kohakuterrarium',
    name: 'KohakuTerrarium',
    subtitle: 'Universal Agent Framework',
    description:
      'Async-first Python agent framework for building autonomous systems. YAML-driven configuration with nested sub-agents and channel-based coordination.',
    link: 'https://github.com/Kohaku-Lab/KohakuTerrarium',
    tags: [
      { name: 'AI/LLM', color: 'pink' },
      { name: 'Python', color: 'yellow' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: false,
  },

  // ============================================================
  // Kernels
  // ============================================================
  {
    slug: 'igs',
    name: 'IGS',
    subtitle: 'Image Gaussian Splatting',
    description:
      'GPU-accelerated Image Gaussian Splatting implementation for efficient image representation and rendering.',
    link: 'https://github.com/KohakuBlueleaf/IGS',
    tags: [
      { name: 'Kernels', color: 'orange' },
      { name: 'Python', color: 'yellow' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: false,
  },
  {
    slug: 'kovec',
    name: 'KoVec',
    subtitle: 'Vector Operations Library',
    description:
      'Optimized vector operations library for high-performance numerical computing.',
    link: 'https://github.com/KohakuBlueleaf/KoVec',
    tags: [
      { name: 'Kernels', color: 'orange' },
      { name: 'Python', color: 'yellow' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: false,
  },

  // ============================================================
  // CV/ML/AI/NN Utils
  // ============================================================
  {
    slug: 'pixeloe',
    name: 'PixelOE',
    subtitle: 'Detail-Oriented Pixelization',
    description:
      'Contrast-aware outline expansion for detail-oriented pixelization. Converts images to pixel art while preserving important details.',
    link: 'https://github.com/KohakuBlueleaf/PixelOE',
    tags: [
      { name: 'ML Utils', color: 'cyan' },
      { name: 'Python', color: 'yellow' },
      { name: 'Computer Vision', color: 'lime' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: false,
  },
  {
    slug: 'optimfactory',
    name: 'OptimFactory',
    subtitle: 'Optimizer Collection for PyTorch',
    description:
      'Collection of optimizer implementations for PyTorch with a unified interface for easy experimentation.',
    link: 'https://github.com/KohakuBlueleaf/OptimFactory',
    tags: [
      { name: 'ML Utils', color: 'cyan' },
      { name: 'Python', color: 'yellow' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: false,
  },
  {
    slug: 'sensecraft',
    name: 'SenseCraft',
    subtitle: 'Unified Perceptual Loss',
    description:
      'Unified perceptual loss implementation for training neural networks with perceptual quality objectives.',
    link: 'https://github.com/KohakuBlueleaf/SenseCraft',
    tags: [
      { name: 'ML Utils', color: 'cyan' },
      { name: 'Python', color: 'yellow' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: false,
  },
  {
    slug: 'anyschedule',
    name: 'AnySchedule',
    subtitle: 'Hyperparameter Scheduling',
    description:
      'A composer tool for hyperparameter scheduling in PyTorch. Flexible schedule composition for learning rates and other parameters.',
    link: 'https://github.com/KohakuBlueleaf/AnySchedule',
    tags: [
      { name: 'ML Utils', color: 'cyan' },
      { name: 'Python', color: 'yellow' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: false,
  },
  {
    slug: 's3impleclient',
    name: 'S3impleClient',
    subtitle: 'S3-Compatible Storage Client',
    description:
      'Lightweight S3-compatible storage client for simple object storage operations.',
    link: 'https://github.com/KohakuBlueleaf/S3impleClient',
    tags: [
      { name: 'ML Utils', color: 'cyan' },
      { name: 'Python', color: 'yellow' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: false,
  },

  // ============================================================
  // Fun / Hobby
  // ============================================================
  {
    slug: 'kohakuboardgame',
    name: 'KohakuBoardGame',
    subtitle: 'AI Board Game Engine',
    description:
      'Multi-game board game engine with NNUE neural network evaluation and PVS search. Supports MiniChess, MiniShogi, and Gomoku.',
    link: 'https://github.com/KohakuBlueleaf/KohakuBoardGame',
    tags: [
      { name: 'Fun', color: 'lime' },
      { name: 'C++', color: 'indigo' },
      { name: 'Python', color: 'yellow' },
      { name: 'Neural Network', color: 'fuchsia' },
    ],
    members: ['KohakuBlueLeaf'],
    collaborators: [],
    featured: false,
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
