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
    description: '',
    logoUrl:
      'https://cdn-avatars.huggingface.co/v1/production/uploads/1673678946779-6391f19aba933dc6fd14c618.jpeg',
    websiteUrl: 'https://huggingface.co/deepghs',
    tags: ['Research', 'Academic', 'Anime'],
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
