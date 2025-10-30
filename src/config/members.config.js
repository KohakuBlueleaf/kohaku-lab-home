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
    role: 'Founder &\nLead Developer',
    avatar: 'https://kblueleaf.net/_astro/kohaku-badge.qHLEJyD4.webp',
    bio: 'Passionate about AI/ML research and open source development. Creator of LyCORIS and HDM. Believes in democratizing AI technology through accessible tools and education.',
    expertise: [
      'Machine Learning',
      'Neural Networks',
      'Full Stack Development',
      'Research',
      'Python',
      'Vue3',
      'Open Source',
    ],
    social: [
      {
        platform: 'github',
        url: 'https://github.com/KohakuBlueleaf',
        icon: 'i-carbon-logo-github',
      },
      {
        platform: 'huggingface',
        url: 'https://huggingface.co/KBlueLeaf',
        icon: 'i-carbon-model',
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
  {
    name: 'theblackcat',
    role: 'Developer',
    avatar:
      'https://avatars.githubusercontent.com/u/13172147?s=400&u=d7e84c54c7a564027f181a9dc517782c4cad6592&v=4',
    bio: 'reasoning by meowing',
    expertise: ['Large Language Models', 'Full Stack Development', 'Research', 'Python'],
    social: [
      {
        platform: 'github',
        url: 'https://github.com/theblackcat102',
        icon: 'i-carbon-logo-github',
      },
      {
        platform: 'huggingface',
        url: 'https://huggingface.co/theblackcat102',
        icon: 'i-carbon-model',
      },
      {
        platform: 'website',
        url: 'https://zrt.wtf',
        icon: 'i-carbon-earth',
      },
    ],
    core: false,
    location: 'Taiwan',
  },
  // Add more members here as the team grows
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
