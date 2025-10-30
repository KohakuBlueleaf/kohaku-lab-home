/**
 * Helper Utilities
 * Common utility functions used across the site
 */

/**
 * Format a date to a readable string
 * @param {Date|string} date - Date to format
 * @param {string} [locale='en-US'] - Locale for formatting
 * @returns {string} Formatted date string
 */
export function formatDate(date, locale = 'en-US') {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format a date to a short string (e.g., "Jan 2025")
 * @param {Date|string} date - Date to format
 * @param {string} [locale='en-US'] - Locale for formatting
 * @returns {string} Formatted date string
 */
export function formatDateShort(date, locale = 'en-US') {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
  });
}

/**
 * Sort array of objects by date field
 * @param {Array} items - Array to sort
 * @param {string} [dateField='pubDate'] - Name of the date field
 * @param {boolean} [descending=true] - Sort order (true = newest first)
 * @returns {Array} Sorted array
 */
export function sortByDate(items, dateField = 'pubDate', descending = true) {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.frontmatter?.[dateField] || a[dateField]);
    const dateB = new Date(b.frontmatter?.[dateField] || b[dateField]);
    return descending ? dateB - dateA : dateA - dateB;
  });
}

/**
 * Estimate reading time for content
 * @param {string} content - Content to analyze
 * @param {number} [wordsPerMinute=200] - Average reading speed
 * @returns {number} Estimated reading time in minutes
 */
export function estimateReadingTime(content, wordsPerMinute = 200) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} [suffix='...'] - Suffix to add when truncated
 * @returns {string} Truncated text
 */
export function truncate(text, maxLength, suffix = '...') {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length).trim() + suffix;
}

/**
 * Generate a slug from text
 * @param {string} text - Text to convert to slug
 * @returns {string} Slug
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

/**
 * Paginate an array
 * @param {Array} items - Items to paginate
 * @param {number} page - Current page (1-indexed)
 * @param {number} perPage - Items per page
 * @returns {{items: Array, totalPages: number, currentPage: number, hasNext: boolean, hasPrev: boolean}}
 */
export function paginate(items, page = 1, perPage = 10) {
  const totalPages = Math.ceil(items.length / perPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return {
    items: items.slice(start, end),
    totalPages,
    currentPage,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1,
  };
}

/**
 * Group items by a key
 * @param {Array} items - Items to group
 * @param {string|Function} key - Key to group by (property name or function)
 * @returns {Object} Grouped items
 */
export function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
    return groups;
  }, {});
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} [offset=0] - Offset in pixels
 * @returns {boolean} True if in viewport
 */
export function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= -offset &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
  );
}
