<script setup>
import MapInfo from '../components/maps/MapInfo.vue';
import MapStrategies from '../components/maps/MapStrategies.vue';
import MapModes from '../components/maps/MapModes.vue';
import MapInteractive from '../components/maps/MapInteractive.vue';
import AppFooter from '../components/AppFooter.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
</script>

<template>
  <div class="maps-page">
    <div class="intro-section">
      <div class="container">
        <header class="page-header">
          <h1 class="page-title">地图介绍</h1>
          <p class="page-subtitle">探索王者峡谷的奥秘，掌握制胜的关键要素</p>
        </header>

        <MapInfo />
        <MapStrategies />
        <MapModes />
      </div>
    </div>

    <MapInteractive />
    
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<style scoped>
.maps-page {
    min-height: 100vh;
    padding-top: 40px; /* Adjust for navbar */
    color: #fff;
}

.intro-section {
    margin-bottom: 2rem;
    padding: 2rem 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.page-header {
    text-align: center;
    margin-bottom: 3rem;
}

.page-title {
    font-size: 3rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.page-subtitle {
    font-size: 1.2rem;
    color: #b0b0b0;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2rem;
    }
    
    .container {
        padding: 0 1rem;
    }
}
</style>
