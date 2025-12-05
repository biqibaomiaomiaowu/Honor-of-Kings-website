<script setup>
import WorldOverview from '../components/world/WorldOverview.vue';
import WorldFactions from '../components/world/WorldFactions.vue';
import WorldTimeline from '../components/world/WorldTimeline.vue';
import WorldStories from '../components/world/WorldStories.vue';
import WorldRelationships from '../components/world/WorldRelationships.vue';
import AppFooter from '../components/AppFooter.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
</script>

<template>
  <div class="world-page" :style="{ backgroundImage: 'url(/imgs/world/jixiaxueyuan.jpg)' }">
    <div class="container">
      <header class="page-header">
        <h1 class="page-title">王者世界</h1>
        <p class="page-subtitle">探索王者大陆的传奇故事与历史</p>
      </header>

      <WorldOverview />
      <WorldFactions />
      <WorldTimeline />
      <WorldStories />
      <WorldRelationships />
    </div>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<style scoped>
.world-page {
    min-height: 100vh;
    padding-top: 100px;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    color: #fff;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.page-header {
    text-align: center;
    margin-bottom: 4rem;
}

.page-title {
    font-size: 3.5rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.page-subtitle {
    font-size: 1.2rem;
    color: #e0e0e0;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
    }
    
    .container {
        padding: 0 1rem;
    }
}
</style>
