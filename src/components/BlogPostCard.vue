<template>
  <a :href="`/blog/${post.slug}`" class="card-interactive group block">
    <!-- Content -->
    <div class="flex-1">
      <!-- Meta -->
      <div class="flex items-center gap-3 text-slate-400 text-xs mb-3">
        <div class="flex items-center gap-1">
          <span class="i-carbon-calendar"></span>
          <time :datetime="post.pubDate">{{ formattedDate }}</time>
        </div>
        <div v-if="readingTime" class="flex items-center gap-1">
          <span class="i-carbon-time"></span>
          <span>{{ readingTime }} min read</span>
        </div>
      </div>

      <!-- Title -->
      <h3
        class="text-xl font-semibold text-slate-100 mb-2 group-hover:gradient-text transition-all"
      >
        {{ post.title }}
      </h3>

      <!-- Description -->
      <p class="text-slate-400 text-sm mb-4 line-clamp-3">
        {{ post.description }}
      </p>

      <!-- Tags -->
      <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="(tag, index) in post.tags.slice(0, 3)"
          :key="index"
          class="tag bg-slate-700 text-slate-200 text-xs"
        >
          #{{ tag }}
        </span>
        <span v-if="post.tags.length > 3" class="tag bg-slate-700 text-slate-400 text-xs">
          +{{ post.tags.length - 3 }}
        </span>
      </div>

      <!-- Read indicator -->
      <div
        class="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors font-medium text-sm"
      >
        <span>Read Article</span>
        <span class="i-carbon-arrow-right group-hover:translate-x-1 transition-transform"></span>
      </div>
    </div>
  </a>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { formatDate } from '../utils/helpers.js';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const formattedDate = computed(() => {
  return formatDate(props.post.pubDate);
});

const readingTime = computed(() => {
  return props.post.readingTime;
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
