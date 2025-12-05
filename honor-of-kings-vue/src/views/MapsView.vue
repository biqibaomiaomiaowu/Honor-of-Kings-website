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
    <main class="main-content">
      <section class="intro-section">
        <div class="page-header">
          <h1 class="page-title">王者峡谷</h1>
          <p class="page-subtitle">
            王者荣耀最经典的5V5对战地图，对称的地形设计、丰富的资源分布和策略性的路线规划，
            是考验团队配合与个人操作的核心战场。地图分为红蓝双方阵营，通过推塔、击杀野怪、争夺中立资源，
            最终摧毁敌方水晶即可获得胜利。
          </p>
        </div>

        <MapInteractive />
        <MapInfo />
        <MapStrategies />
        <MapModes />
      </section>
    </main>
    
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<style scoped>
.maps-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0d1117 100%);
    color: #ffffff;
}

.main-content {
    margin-top: 80px;
    padding: 2rem;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
}

.intro-section {
    margin-bottom: 2rem;
}

.page-header {
    text-align: center;
    margin-bottom: 2rem;
}

.page-title {
    font-size: 3rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 1rem;
}

.page-subtitle {
    font-size: 1.2rem;
    color: #b0b0b0;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}
</style>
