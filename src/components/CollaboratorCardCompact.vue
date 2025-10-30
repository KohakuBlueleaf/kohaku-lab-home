<template>
  <div class="flex items-start gap-3">
    <!-- Logo (smaller) -->
    <div
      class="flex-shrink-0 cursor-pointer"
      @click="toggleExpanded"
      role="button"
      :aria-expanded="isExpanded"
      tabindex="0"
      @keydown.enter="toggleExpanded"
      @keydown.space.prevent="toggleExpanded"
    >
      <div
        class="w-10 h-10 bg-slate-700/30 rounded-lg overflow-hidden flex items-center justify-center border-2 border-slate-600 hover:border-blue-500 transition-colors"
      >
        <img
          :src="collaborator.logoUrl"
          :alt="`${collaborator.name} logo`"
          class="max-w-full max-h-full object-contain p-1"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Info -->
    <div class="flex-1 min-w-0">
      <div
        class="cursor-pointer"
        @click="toggleExpanded"
        role="button"
        tabindex="0"
        @keydown.enter="toggleExpanded"
        @keydown.space.prevent="toggleExpanded"
      >
        <h4 class="text-sm font-semibold text-slate-100 hover:text-blue-400 transition-colors">
          {{ collaborator.name }}
        </h4>
        <p class="text-xs text-slate-400 line-clamp-1">{{ collaborator.description }}</p>
      </div>

      <!-- Expanded Details -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-[200px]"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 max-h-[200px]"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="isExpanded" class="mt-2 pt-2 border-t border-slate-700 overflow-hidden">
          <!-- Tags -->
          <div
            v-if="collaborator.tags && collaborator.tags.length > 0"
            class="flex flex-wrap gap-1 mb-2"
          >
            <span
              v-for="(tag, index) in collaborator.tags"
              :key="index"
              class="tag bg-slate-700 text-slate-300 text-[10px] px-2 py-0.5"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Website Link -->
          <a
            :href="collaborator.websiteUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-xs"
          >
            <span>Visit</span>
            <span class="i-carbon-arrow-right text-xs"></span>
          </a>
        </div>
      </Transition>
    </div>

    <!-- Active Indicator -->
    <div
      v-if="collaborator.active !== false"
      class="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full animate-pulse"
      title="Active collaboration"
    ></div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  collaborator: {
    type: Object,
    required: true,
  },
});

const isExpanded = ref(false);

function toggleExpanded() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
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
