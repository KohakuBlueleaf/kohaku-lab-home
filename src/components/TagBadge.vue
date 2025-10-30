<template>
  <span
    class="tag transition-transform hover:scale-105"
    :style="{
      backgroundColor: bgColor,
      color: textColor,
    }"
  >
    {{ tag.name }}
  </span>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { tagColors } from '../config/theme.js';

/**
 * @typedef {Object} Tag
 * @property {string} name - Tag display name
 * @property {string} color - Color key from theme
 */

/**
 * Component props
 */
const props = defineProps({
  /** @type {Tag} */
  tag: {
    type: Object,
    required: true,
  },
});

/**
 * Get background color from theme
 */
const bgColor = computed(() => {
  const colorKey = props.tag.color?.toLowerCase() || 'blue';
  return tagColors[colorKey]?.bg || tagColors.blue.bg;
});

/**
 * Get text color from theme
 */
const textColor = computed(() => {
  const colorKey = props.tag.color?.toLowerCase() || 'blue';
  return tagColors[colorKey]?.text || tagColors.blue.text;
});
</script>
