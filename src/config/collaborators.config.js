/**
 * Collaborators Configuration
 * Manage all Kohaku Lab collaborators and partner organizations here
 */

/**
 * @typedef {Object} Collaborator
 * @property {string} name - Collaborator/Organization name
 * @property {string} description - Brief description of the collaboration
 * @property {string} logoUrl - URL or path to logo image
 * @property {string} websiteUrl - Link to collaborator's website or profile
 * @property {string[]} [tags] - Optional tags describing the collaboration type
 * @property {boolean} [active] - Whether this is an active collaboration (default: true)
 */

/**
 * List of all Kohaku Lab collaborators
 * @type {Collaborator[]}
 */
export const collaborators = [
  {
    name: 'DeepGHS',
    description:
      'DeepGHS (Deep Generative anime Hobbyist Syndicate) is a passion-driven, non-profit open-source technical collective focused on building AI infrastructure for the anime/2D domain. We specialize in anime computer vision technologies and are dedicated to developing open-source tools, models, and datasets for the anime community.',
    logoUrl: 'https://cdn.xinhe-info.cn/dev/DeepGHS.png',
    websiteUrl: 'https://deepghs.org',
    tags: [
      'AI Infrastructure',
      'Computer Vision For Anime',
      'Open Source',
      'Anime MLOps',
      'Non-profit',
      'Research',
    ],
    active: true,
  },
  {
    name: 'Comfy Org',
    description:
      'Partnership to promote open-source AI development and democratize access to ML tools.',
    logoUrl: 'https://framerusercontent.com/images/3cNQMWKzIhIrQ5KErBm7dSmbd2w.png',
    websiteUrl: 'https://www.comfy.org',
    tags: ['Open Source', 'Community'],
    active: true,
  },
];

/**
 * Get active collaborators
 * @returns {Collaborator[]}
 */
export function getActiveCollaborators() {
  return collaborators.filter(c => c.active !== false);
}

/**
 * Get collaborators by tag
 * @param {string} tag - Tag to filter by
 * @returns {Collaborator[]}
 */
export function getCollaboratorsByTag(tag) {
  return collaborators.filter(
    c => c.tags && c.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique tags from collaborators
 * @returns {string[]}
 */
export function getAllCollaboratorTags() {
  const tags = new Set();
  collaborators.forEach(collab => {
    if (collab.tags) {
      collab.tags.forEach(tag => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

export default collaborators;
