<template>
  <div class="card">
    <!-- Collaborator Header (Always Visible) -->
    <div
      class="flex items-start gap-4 cursor-pointer"
      @click="toggleExpanded"
      role="button"
      :aria-expanded="isExpanded"
      tabindex="0"
      @keydown.enter="toggleExpanded"
      @keydown.space.prevent="toggleExpanded"
    >
      <!-- Logo (1:1 ratio) -->
      <div class="flex-shrink-0">
        <div
          class="w-16 h-16 bg-slate-700/30 rounded-lg overflow-hidden flex items-center justify-center"
        >
          <img
            v-show="!logoError"
            :src="collaborator.logoUrl"
            :alt="`${collaborator.name} logo`"
            class="max-w-full max-h-full object-contain p-2"
            loading="lazy"
            @error="handleLogoError"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
          />
          <span class="i-carbon-partnership text-slate-500 text-2xl" style="display: none"></span>
        </div>
      </div>

      <!-- Basic Info -->
      <div class="flex-1 min-w-0">
        <h3 class="text-xl font-semibold text-slate-100 mb-1">
          {{ collaborator.name }}
        </h3>
        <p class="text-slate-400 text-sm mb-2 line-clamp-2">
          {{ collaborator.description }}
        </p>

        <!-- Tags -->
        <div v-if="collaborator.tags && collaborator.tags.length > 0" class="flex flex-wrap gap-1">
          <span
            v-for="(tag, index) in collaborator.tags.slice(0, 2)"
            :key="index"
            class="tag bg-slate-700 text-slate-300 text-xs px-2 py-0.5"
          >
            {{ tag }}
          </span>
        </div>
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
      enter-to-class="opacity-100 max-h-[500px]"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 max-h-[500px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isExpanded" class="mt-4 pt-4 border-t border-slate-700 overflow-hidden">
        <!-- Full Description -->
        <p class="text-slate-300 text-sm leading-relaxed mb-4">
          {{ collaborator.description }}
        </p>

        <!-- All Tags -->
        <div v-if="collaborator.tags && collaborator.tags.length > 0" class="mb-4">
          <h4 class="text-sm font-semibold text-slate-200 mb-2">Collaboration Areas</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, index) in collaborator.tags"
              :key="index"
              class="tag bg-slate-700 text-slate-200 text-xs"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Website Link -->
        <div>
          <a
            :href="collaborator.websiteUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            <span>Visit Website</span>
            <span class="i-carbon-arrow-right"></span>
          </a>
        </div>
      </div>
    </Transition>

    <!-- Active Badge -->
    <div
      v-if="collaborator.active !== false"
      class="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30"
    >
      <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
      <span>Active</span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const logoError = ref(false);

function handleLogoError() {
  logoError.value = true;
}

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

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
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
