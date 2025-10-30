<template>
  <footer class="bg-slate-950 border-t border-slate-800 mt-20">
    <div class="container-base py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand Column -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 bg-gradient-to-br from-sky-500 to-pink-300 rounded-lg flex-center"
            >
              <span class="text-white font-bold text-xl">K</span>
            </div>
            <span class="text-xl font-bold gradient-text"> Kohaku Lab </span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed">
            {{ tagline }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Projects -->
        <div>
          <h3 class="text-white font-semibold mb-4">Featured Projects</h3>
          <ul class="space-y-2">
            <li v-for="project in featuredProjects" :key="project.href">
              <a
                :href="project.href"
                class="text-slate-400 hover:text-white transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ project.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social & Contact -->
        <div>
          <h3 class="text-white font-semibold mb-4">Connect</h3>
          <div class="flex gap-4 mb-4">
            <a
              v-for="social in socialLinks"
              :key="social.platform"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-400 hover:text-white transition-colors"
              :aria-label="social.platform"
            >
              <span :class="social.icon" class="text-2xl"></span>
            </a>
          </div>
          <p class="text-slate-400 text-sm">
            <a href="/contact" class="hover:text-white transition-colors"> Get in touch → </a>
          </p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p class="text-slate-400 text-sm">&copy; {{ currentYear }} {{ copyrightText }}</p>
        <div class="flex gap-6 text-sm">
          <a href="/about" class="text-slate-400 hover:text-white transition-colors"> About </a>
          <a
            href="https://github.com/KohakuBlueleaf"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a href="/blog" class="text-slate-400 hover:text-white transition-colors"> Blog </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { footer, socialLinks } from '../config/site.config.js';

const quickLinks = footer.quickLinks;
const featuredProjects = footer.featuredProjects;
const tagline = footer.tagline;
const copyrightText = footer.copyright;

/**
 * Current year for copyright
 */
const currentYear = computed(() => new Date().getFullYear());
</script>
