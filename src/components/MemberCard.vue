<template>
  <div class="card">
    <!-- Member Header (Always Visible) -->
    <div
      class="flex items-start gap-4 cursor-pointer"
      @click="toggleExpanded"
      role="button"
      :aria-expanded="isExpanded"
      tabindex="0"
      @keydown.enter="toggleExpanded"
      @keydown.space.prevent="toggleExpanded"
    >
      <!-- Avatar -->
      <div class="flex-shrink-0">
        <img
          :src="member.avatar"
          :alt="`${member.name} avatar`"
          class="w-16 h-16 rounded-full object-cover border-2 border-slate-600"
          loading="lazy"
        />
      </div>

      <!-- Basic Info -->
      <div class="flex-1 min-w-0">
        <h3 class="text-xl font-semibold text-slate-100 mb-1">
          {{ member.name }}
        </h3>
        <p class="text-blue-400 text-sm mb-2 whitespace-pre-line">
          {{ member.role }}
        </p>
        <p v-if="member.location" class="text-slate-400 text-xs flex items-center gap-1">
          <span class="i-carbon-location"></span>
          {{ member.location }}
        </p>
      </div>

      <!-- Expand Icon with Hint -->
      <div class="flex-shrink-0 flex flex-col items-center gap-1">
        <span
          class="text-slate-400 text-xl transition-transform"
          :class="{ 'rotate-180': isExpanded }"
        >
          <span class="i-carbon-chevron-down"></span>
        </span>
        <span class="text-slate-500 text-[10px] uppercase tracking-wide">
          {{ isExpanded ? 'Close' : 'Details' }}
        </span>
      </div>
    </div>

    <!-- Expanded Content -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[1000px]"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 max-h-[1000px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isExpanded" class="mt-4 pt-4 border-t border-slate-700 overflow-hidden">
        <!-- Bio -->
        <p class="text-slate-300 text-sm leading-relaxed mb-4">
          {{ member.bio }}
        </p>

        <!-- Expertise Tags -->
        <div class="mb-4">
          <h4 class="text-sm font-semibold text-slate-200 mb-2">Expertise</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, index) in member.expertise"
              :key="index"
              class="tag bg-slate-700 text-slate-200 text-xs"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Social Links -->
        <div v-if="member.social && member.social.length > 0">
          <h4 class="text-sm font-semibold text-slate-200 mb-2">Connect</h4>
          <div class="flex flex-wrap gap-3">
            <a
              v-for="(link, index) in member.social"
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              <span v-if="link.icon" :class="link.icon" class="text-lg"></span>
              <span class="capitalize">{{ link.platform }}</span>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

/**
 * @typedef {Object} SocialLink
 * @property {string} platform - Platform name
 * @property {string} url - Profile URL
 * @property {string} [icon] - Optional icon class
 */

/**
 * @typedef {Object} Member
 * @property {string} name - Member name
 * @property {string} role - Member role
 * @property {string} avatar - Avatar image path
 * @property {string} bio - Biography
 * @property {string[]} expertise - Areas of expertise
 * @property {SocialLink[]} social - Social links
 * @property {string} [location] - Optional location
 */

/**
 * Component props
 */
const props = defineProps({
  /** @type {Member} */
  member: {
    type: Object,
    required: true,
  },
  /** Whether card starts expanded */
  initialExpanded: {
    type: Boolean,
    default: false,
  },
});

/**
 * Expanded state
 */
const isExpanded = ref(props.initialExpanded);

/**
 * Toggle expanded state
 */
function toggleExpanded() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
