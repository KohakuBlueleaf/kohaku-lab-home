<template>
  <a
    :href="`/projects/${project.slug}`"
    class="card-interactive group block"
    data-project-card
    :data-project-tags="JSON.stringify(project.tags.map(t => t.name))"
  >
    <!-- Project Image (when provided) -->
    <div
      v-if="project.image"
      class="relative overflow-hidden rounded-md mb-4 aspect-[2.4/1] bg-slate-700"
    >
      <img
        v-show="!imageError"
        :src="project.image.src"
        :alt="project.image.alt"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        @error="handleImageError"
        onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-img').style.display='flex';"
      />
      <!-- Fallback -->
      <div
        class="fallback-img absolute inset-0 items-center justify-center bg-slate-800"
        style="display: none"
      >
        <div class="text-center text-slate-500">
          <span class="i-carbon-image text-4xl mb-2 block"></span>
          <span class="text-sm">{{ project.name }}</span>
        </div>
      </div>
      <!-- Gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        style="pointer-events: none"
      ></div>
    </div>

    <!-- Accent bar (when no image) -->
    <div
      v-else
      class="h-1 rounded-full mb-4 opacity-60 group-hover:opacity-100 transition-opacity"
      :style="{ background: accentGradient }"
    ></div>

    <!-- Project Content -->
    <div class="flex-1">
      <h3
        class="text-xl font-semibold text-slate-100 mb-2 group-hover:gradient-text transition-all"
      >
        {{ project.name }}
      </h3>

      <p v-if="project.subtitle" class="text-slate-300 text-sm mb-2 font-medium">
        {{ project.subtitle }}
      </p>

      <p class="text-slate-400 text-sm mb-4 line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <TagBadge v-for="(tag, index) in project.tags" :key="index" :tag="tag" />
      </div>

      <!-- Link Indicator -->
      <div
        class="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors font-medium text-sm"
      >
        <span>View Details</span>
        <span class="i-carbon-arrow-right group-hover:translate-x-1 transition-transform"></span>
      </div>
    </div>
  </a>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import TagBadge from './TagBadge.vue';

const imageError = ref(false);

function handleImageError() {
  imageError.value = true;
}

const accentColors = {
  red: '#f87171',
  blue: '#60a5fa',
  purple: '#c084fc',
  orange: '#fb923c',
  cyan: '#22d3ee',
  pink: '#f472b6',
  fuchsia: '#e879f9',
  green: '#4ade80',
  yellow: '#facc15',
  lime: '#a3e635',
  amber: '#fbbf24',
  indigo: '#818cf8',
};

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const accentGradient = computed(() => {
  const tags = props.project.tags || [];
  const c1 = accentColors[tags[0]?.color] || '#60a5fa';
  const c2 = accentColors[tags[1]?.color] || accentColors[tags[0]?.color] || '#818cf8';
  return `linear-gradient(to right, ${c1}, ${c2})`;
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
