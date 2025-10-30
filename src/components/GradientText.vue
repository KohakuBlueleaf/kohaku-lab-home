<template>
  <span class="bg-clip-text text-transparent bg-gradient-to-br" :class="gradientClass">
    <slot />
  </span>
</template>

<script setup>
import { computed, defineProps } from 'vue';

/**
 * Component props
 */
const props = defineProps({
  /**
   * Gradient variant to use
   * @type {'default' | 'alt' | 'accent'}
   */
  variant: {
    type: String,
    default: 'default',
    validator: value => ['default', 'alt', 'accent'].includes(value),
  },
});

/**
 * Get gradient class based on variant
 */
const gradientClass = computed(() => {
  switch (props.variant) {
    case 'alt':
      return 'from-sky-400 to-cyan-400';
    case 'accent':
      return 'from-blue-600 to-purple-600';
    case 'default':
    default:
      return 'from-sky-500 to-pink-300';
  }
});
</script>
