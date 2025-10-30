<template>
  <div
    class="card-interactive group"
    data-project-card
    :data-project-tags="JSON.stringify(project.tags.map(t => t.name))"
  >
    <!-- Project Image -->
    <div
      v-if="project.image"
      class="relative overflow-hidden rounded-md mb-4 aspect-video bg-slate-700"
    >
      <img
        :src="project.image.src"
        :alt="project.image.alt"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
      ></div>
    </div>

    <!-- Project Content -->
    <div class="flex-1">
      <h3
        class="text-xl font-semibold text-slate-100 mb-2 group-hover:gradient-text transition-all"
      >
        {{ project.name }}
      </h3>

      <p class="text-slate-400 text-sm mb-4 line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <TagBadge v-for="(tag, index) in project.tags" :key="index" :tag="tag" />
      </div>

      <!-- Link -->
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm"
      >
        <span>View Project</span>
        <span class="i-carbon-arrow-right"></span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import TagBadge from './TagBadge.vue';

/**
 * @typedef {Object} ProjectTag
 * @property {string} name - Tag display name
 * @property {string} color - Color key
 */

/**
 * @typedef {Object} ProjectImage
 * @property {string} src - Image source
 * @property {string} alt - Alt text
 */

/**
 * @typedef {Object} Project
 * @property {string} name - Project name
 * @property {string} description - Project description
 * @property {string} link - Project link
 * @property {ProjectTag[]} tags - Tags
 * @property {ProjectImage} [image] - Optional image
 */

/**
 * Component props
 */
const props = defineProps({
  /** @type {Project} */
  project: {
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
</style>
