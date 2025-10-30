/**
 * Members Configuration
 * Manage all Kohaku Lab team members here
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} platform - Platform name (github, website, linkedin, twitter, etc.)
 * @property {string} url - Profile URL
 * @property {string} [icon] - Optional icon name (UnoCSS icon format like 'i-carbon-logo-github')
 */

/**
 * @typedef {Object} Member
 * @property {string} name - Member's display name
 * @property {string} role - Member's role in the lab
 * @property {string} avatar - Path to avatar image
 * @property {string} bio - Short biography
 * @property {string[]} expertise - Areas of expertise/interests
 * @property {SocialLink[]} social - Social media links
 * @property {boolean} [core] - Whether this is a core team member
 * @property {string} [location] - Optional location/timezone
 */

/**
 * List of all Kohaku Lab members
 * @type {Member[]}
 */
export const members = [
  {
    name: 'KohakuBlueLeaf',
    role: 'Founder & Lead Developer',
    avatar: '/assets/members/kohakublueleaf.jpg',
    bio: 'Passionate about AI/ML research and open source development. Creator of LyCORIS and HDM. Believes in democratizing AI technology through accessible tools and education.',
    expertise: [
      'Machine Learning',
      'Stable Diffusion',
      'Neural Networks',
      'Python',
      'Full Stack Development',
      'Research',
    ],
    social: [
      {
        platform: 'github',
        url: 'https://github.com/KohakuBlueleaf',
        icon: 'i-carbon-logo-github',
      },
      {
        platform: 'website',
        url: 'https://kblueleaf.net/',
        icon: 'i-carbon-earth',
      },
    ],
    core: true,
    location: 'Taiwan',
  },
  // Add more members here as the team grows
  {
    name: 'Your Name',
    role: 'Contributor',
    avatar: '/assets/members/placeholder.jpg',
    bio: 'Enthusiastic contributor to Kohaku Lab projects. Passionate about open source and AI/ML.',
    expertise: ['Web Development', 'UI/UX', 'Vue.js'],
    social: [
      {
        platform: 'github',
        url: 'https://github.com/yourusername',
        icon: 'i-carbon-logo-github',
      },
    ],
    core: false,
  },
];

/**
 * Get core team members
 * @returns {Member[]}
 */
export function getCoreMembers() {
  return members.filter(m => m.core);
}

/**
 * Get all contributors (non-core members)
 * @returns {Member[]}
 */
export function getContributors() {
  return members.filter(m => !m.core);
}

/**
 * Get member by name
 * @param {string} name - Member name to search for
 * @returns {Member|undefined}
 */
export function getMemberByName(name) {
  return members.find(m => m.name.toLowerCase() === name.toLowerCase());
}

/**
 * Get members by expertise
 * @param {string} expertiseTag - Expertise tag to filter by
 * @returns {Member[]}
 */
export function getMembersByExpertise(expertiseTag) {
  return members.filter(m =>
    m.expertise.some(e => e.toLowerCase().includes(expertiseTag.toLowerCase()))
  );
}

export default members;
