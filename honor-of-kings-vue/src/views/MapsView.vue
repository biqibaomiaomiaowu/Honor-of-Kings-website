<script setup>
import MapInfo from '../components/maps/MapInfo.vue';
import MapStrategies from '../components/maps/MapStrategies.vue';
import MapModes from '../components/maps/MapModes.vue';
import MapInteractive from '../components/maps/MapInteractive.vue';
import AppFooter from '../components/AppFooter.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import ParticleBackground from '../components/home/ParticleBackground.vue';
import ParticleText from '../components/home/ParticleText.vue';
</script>

<template>
  <div class="maps-page">
    <ParticleBackground />
    <main class="main-content">
      <section class="intro-section">
        <div class="page-header">
          <div class="page-title-wrapper">
            <ParticleText text="王者峡谷" :fontSize="60" color="#ffd700" />
          </div>
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
    background: transparent;
    color: #ffffff;
    position: relative;
}

.main-content {
    margin-top: 80px;
    padding: 2rem;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;
}

.page-header {
    text-align: center;
    margin-bottom: 2rem;
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
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}
</style>
