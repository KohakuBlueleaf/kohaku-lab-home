<template>
  <a
    :href="collaborator.websiteUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="card-interactive group"
  >
    <!-- Logo -->
    <div class="flex-center mb-4 h-32 bg-slate-700/30 rounded-md overflow-hidden">
      <img
        :src="collaborator.logoUrl"
        :alt="`${collaborator.name} logo`"
        class="max-w-full max-h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
    </div>

    <!-- Content -->
    <h3
      class="text-lg font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors"
    >
      {{ collaborator.name }}
    </h3>

    <p class="text-slate-400 text-sm mb-4 line-clamp-3">
      {{ collaborator.description }}
    </p>

    <!-- Tags -->
    <div v-if="collaborator.tags && collaborator.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="(tag, index) in collaborator.tags"
        :key="index"
        class="tag bg-slate-700 text-slate-200 text-xs"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Link Indicator -->
    <div class="flex items-center gap-2 text-blue-400 text-sm font-medium">
      <span>Visit Website</span>
      <span class="i-carbon-arrow-right group-hover:translate-x-1 transition-transform"></span>
    </div>

    <!-- Active Badge -->
    <div
      v-if="collaborator.active !== false"
      class="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30"
    >
      <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
      <span>Active</span>
    </div>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

/**
 * @typedef {Object} Collaborator
 * @property {string} name - Collaborator name
 * @property {string} description - Description
 * @property {string} logoUrl - Logo image path
 * @property {string} websiteUrl - Website URL
 * @property {string[]} [tags] - Optional tags
 * @property {boolean} [active] - Active status
 */

/**
 * Component props
 */
const props = defineProps({
  /** @type {Collaborator} */
  collaborator: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
