<template>
  <div class="flex items-start gap-3">
    <!-- Avatar (smaller) -->
    <div
      class="flex-shrink-0 cursor-pointer"
      @click="toggleExpanded"
      role="button"
      :aria-expanded="isExpanded"
      tabindex="0"
      @keydown.enter="toggleExpanded"
      @keydown.space.prevent="toggleExpanded"
    >
      <img
        :src="member.avatar"
        :alt="`${member.name} avatar`"
        class="w-10 h-10 rounded-full object-cover border-2 border-slate-600 hover:border-blue-500 transition-colors"
        loading="lazy"
      />
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
          {{ member.name }}
        </h4>
        <p class="text-xs text-slate-400">{{ member.role }}</p>
      </div>

      <!-- Expanded Details -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-[300px]"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 max-h-[300px]"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="isExpanded" class="mt-2 pt-2 border-t border-slate-700 overflow-hidden">
          <!-- Bio (truncated) -->
          <p class="text-xs text-slate-400 mb-2 line-clamp-2">
            {{ member.bio }}
          </p>

          <!-- Social Links (icons only) -->
          <div v-if="member.social && member.social.length > 0" class="flex gap-2">
            <a
              v-for="(link, index) in member.social"
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-400 hover:text-blue-400 transition-colors"
              :aria-label="link.platform"
            >
              <span :class="link.icon" class="text-base"></span>
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

/**
 * Component props
 */
const props = defineProps({
  member: {
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
