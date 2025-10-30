<template>
  <section class="relative py-20 sm:py-32 overflow-hidden">
    <!-- Background Gradient Effects -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"
      ></div>
    </div>

    <div class="container-section text-center">
      <!-- Main Heading -->
      <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
        <GradientText>Kohaku Lab</GradientText>
      </h1>

      <!-- Subtitle -->
      <p class="text-xl sm:text-2xl md:text-3xl text-slate-200 mb-4 font-medium">
        Virtual Open Source AI Research Lab
      </p>

      <!-- Description -->
      <p class="text-lg text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
        A collaborative virtual lab built by AI/ML enthusiasts from around the internet. We create
        open-source tools, conduct research, and work together to democratize AI technology and make
        it accessible to everyone.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <a href="/projects" class="btn-primary">
          <span class="i-carbon-analytics"></span>
          <span>View Projects</span>
        </a>
        <a href="/about" class="btn-outline">
          <span class="i-carbon-information"></span>
          <span>Learn More</span>
        </a>
        <a
          href="https://github.com/KohakuBlueleaf"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary"
        >
          <span class="i-carbon-logo-github"></span>
          <span>GitHub</span>
        </a>
      </div>

      <!-- Stats / Highlights -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div class="stat-item">
          <div class="text-3xl sm:text-4xl font-bold gradient-text mb-2">
            {{ stats.githubStars }}+
          </div>
          <div class="text-sm text-slate-400">Github Stars of Members</div>
        </div>
        <div class="stat-item">
          <div class="text-3xl sm:text-4xl font-bold gradient-text mb-2">
            {{ stats.downloads }}+
          </div>
          <div class="text-sm text-slate-400">HuggingFace Downloads</div>
        </div>
        <div class="stat-item">
          <div class="text-3xl sm:text-4xl font-bold gradient-text mb-2">{{ stats.projects }}+</div>
          <div class="text-sm text-slate-400">Active Projects</div>
        </div>
        <div class="stat-item">
          <div class="text-3xl sm:text-4xl font-bold gradient-text mb-2">100%</div>
          <div class="text-sm text-slate-400">Open Access</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import GradientText from './GradientText.vue';

/**
 * Component props
 */
const props = defineProps({
  /**
   * Statistics to display
   */
  stats: {
    type: Object,
    default: () => ({
      githubStars: '7K',
      downloads: '2M',
      projects: 10,
    }),
  },
});
</script>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(51, 65, 85, 0.5);
  transition: all 0.3s;
}

.stat-item:hover {
  border-color: #475569;
}
</style>
