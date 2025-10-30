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
    name: 'narugo1992',
    role: 'Core Member',
    avatar: 'https://cdn.xinhe-info.cn/dev/Jerry.png',
    bio: 'Software Engineering PhD, founder of DeepGHS. Focused on AI infrastructure for anime, specializing in computer vision R&D, and committed to building open-source tools, models, and datasets for anime ecosystems.',
    expertise: [
      'Founder of DeepGHS',
      'AI/ML/CV for Anime',
      'Anime AI Infrastructure',
      'Anime Dataset Development',
      'MLOps for Anime Applications',
      'Open Source',
    ],
    social: [
      {
        platform: 'github',
        url: 'https: //github.com/narugo1992',
        icon: 'i-carbon-logo-github',
      },
      {
        platform: 'huggingface',
        url: 'https: //huggingface.co/narugo1992',
        icon: 'i-carbon-model',
      },
    ],
    core: true,
    location: 'Git Repository',
  },
  {
    name: 'cybermeow',
    role: 'Researcher',
    avatar:
      'https://cdn.discordapp.com/avatars/390582750270193664/ad90368a84d467a25f434ffe24f298a6.webp',
    bio: 'Kawaii is justice. Working on whatever makes anime real.',
    expertise: [
      'make models that can generate cute anime girls',
      'math and optimization when I was young',
    ],
    social: [
      {
        platform: 'github',
        url: 'https://github.com/cyber-meow',
        icon: 'i-carbon-logo-github',
      },
      {
        platform: 'website',
        url: 'https://www.cyber-meow.com/',
        icon: 'i-carbon-earth',
      },
    ],
    core: false,
    location: 'Tokyo',
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
  {
    name: 'Tauska (Xuehai Wang)',
    role: 'ML Engineer',
    avatar: '/assets/members/tauska.jpg',
    bio: 'Machine-learning engineer focused on agentic LLM systems for healthcare. Maintainer of OmicVerse and related open-source tooling. Health Informatics (KI–SU). Committed to reproducible, privacy-aware, open science.',
    expertise: [
      'Large Language Models',
      'Post-Training (SFT/DPO/RLHF)',
      'Agentic Workflows',
      'Long-Context & Retrieval',
      'Data Engineering',
      'Health Informatics',
      'Multi-omics Integration',
      'Python',
      'R',
      'Open Source',
    ],
    social: [
      {
        platform: 'github',
        url: 'https://github.com/HendricksJudy',
        icon: 'i-carbon-logo-github',
      },
      {
        platform: 'website',
        url: 'https://ki.se/en/people/xuehai-wang',
        icon: 'i-carbon-earth',
      },
      {
        platform: 'project',
        url: 'https://github.com/HendricksJudy/omicverse',
        icon: 'i-carbon-cube',
      },
    ],
    core: null,
    location: 'Stockholm, Sweden',
  },
  {
    name: 'CMander',
    role: 'Member',
    avatar: '/assets/members/yusc.png',
    bio: 'Evolve together with agents.',
    expertise: ['Large Language Models', 'Agent', 'Agentic RL', 'Python', 'Open Source'],
    social: [
      {
        platform: 'github',
        url: 'https: //github.com/CMander02',
        icon: 'i-carbon-logo-github',
      },
      {
        platform: 'huggingface',
        url: 'https: //huggingface.co/CMander02',
        icon: 'i-carbon-model',
      },
    ],
    core: false,
    location: 'Shanghai, China',
  },
  {
    name: 'ntrwansui',
    role: 'Member',
    avatar: 'https://cdn.xinhe-info.cn/dev/2bfee3986f30f2ee7fa4b2a9d4f12355.png',
    bio: 'moe is justice',
    expertise: ['Full Stack Development', 'Member of DeepGHS'],
    social: [
      {
        platform: 'github',
        url: 'https://github.com/ntrwansuiBC',
        icon: 'i-carbon-logo-github',
      },
      {
        platform: 'huggingface',
        url: 'https://deepghs.org/',
        icon: 'i-carbon-model',
      },
    ],
    core: false,
    location: 'Shanghai, China',
  },
  {
    name: 'WYFlynn',
    role: 'Member',
    avatar: '/assets/members/wyfl.png',
    bio: 'Specialising in serious games research within HCI, with a passion for gaming and design. Regularly developing game demos for these purposes. Current Research Direction: Edu-games and Audience Participation Games.',
    expertise: ['HCI', 'Serious game', 'Edu-games', 'APGs', 'Game Design'],
    social: [],
    core: false,
    location: 'Newcastle',
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
