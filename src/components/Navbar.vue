<template>
  <nav class="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
    <div class="container-base">
      <div class="flex-between py-4">
        <!-- Logo / Brand -->
        <a href="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 bg-gradient-to-br from-sky-500 to-pink-300 rounded-lg flex-center">
            <span class="text-white font-bold text-xl">K</span>
          </div>
          <span class="text-xl font-bold gradient-text group-hover:scale-105 transition-transform">
            Kohaku Lab
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-slate-300 hover:text-white transition-colors font-medium"
            :class="{ 'text-white': isActivePath(link.href) }"
          >
            {{ link.label }}
          </a>

          <!-- GitHub Link -->
          <a
            :href="githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-300 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <span class="i-carbon-logo-github text-2xl"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-slate-300 hover:text-white transition-colors p-2"
          aria-label="Toggle menu"
          aria-expanded="mobileMenuOpen"
        >
          <span v-if="!mobileMenuOpen" class="i-carbon-menu text-2xl"></span>
          <span v-else class="i-carbon-close text-2xl"></span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-slate-800">
          <div class="flex flex-col gap-3">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-slate-300 hover:text-white transition-colors font-medium py-2"
              :class="{ 'text-white': isActivePath(link.href) }"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </a>

            <!-- GitHub Link for Mobile -->
            <a
              :href="githubLink"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-300 hover:text-white transition-colors py-2 flex items-center gap-2"
            >
              <span class="i-carbon-logo-github text-xl"></span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { navLinks, socialLinks } from '../config/site.config.js';

const githubLink =
  socialLinks.find(link => link.platform === 'GitHub')?.url || 'https://github.com/KohakuBlueleaf';

const mobileMenuOpen = ref(false);
const currentPath = ref('');

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
  mobileMenuOpen.value = false;
}

/**
 * Check if a path is the current active path
 * @param {string} path - Path to check
 * @returns {boolean}
 */
function isActivePath(path) {
  if (path === '/') {
    return currentPath.value === '/';
  }
  return currentPath.value.startsWith(path);
}

/**
 * Set current path on mount
 */
onMounted(() => {
  currentPath.value = window.location.pathname;

  // Close mobile menu when clicking outside
  document.addEventListener('click', e => {
    if (mobileMenuOpen.value && !e.target.closest('nav')) {
      closeMobileMenu();
    }
  });
});
</script>
