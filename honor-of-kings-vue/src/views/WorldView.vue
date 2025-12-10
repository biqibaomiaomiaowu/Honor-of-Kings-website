<script setup>
import WorldOverview from '../components/world/WorldOverview.vue';
import WorldFactions from '../components/world/WorldFactions.vue';
import WorldTimeline from '../components/world/WorldTimeline.vue';
import WorldStories from '../components/world/WorldStories.vue';
import WorldRelationships from '../components/world/WorldRelationships.vue';
import AppFooter from '../components/AppFooter.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import ParticleBackground from '../components/home/ParticleBackground.vue';
import ParticleText from '../components/home/ParticleText.vue';
</script>

<template>
  <div class="world-page">
    <ParticleBackground />
    <main class="main-content">
      <div class="page-header">
        <div class="page-title-wrapper">
            <ParticleText text="世界观" :fontSize="60" color="#ffd700" />
        </div>
        <p class="page-subtitle">探索王者大陆的神秘历史与英雄传说</p>
      </div>

      <WorldOverview />
      <WorldFactions />
      <WorldTimeline />
      <WorldStories />
      <WorldRelationships />
    </main>
    
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<style scoped>
.world-page {
    min-height: 100vh;
    background: transparent;
    color: #ffffff;
    position: relative;
}

.main-content {
    margin-top: 80px;
    padding: 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;
}

.page-header {
    text-align: center;
    margin-bottom: 3rem;
}

.page-title-wrapper {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

/* .page-title removed */

.page-subtitle {
    font-size: 1.2rem;
    color: #b0b0b0;
}
</style>
