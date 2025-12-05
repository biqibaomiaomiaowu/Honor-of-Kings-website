<script setup>
import ParticleBackground from '../components/home/ParticleBackground.vue';
import HomeHeroSection from '../components/home/HomeHeroSection.vue';
import HomeFeaturedHeroes from '../components/home/HomeFeaturedHeroes.vue';
import HomeGameFeatures from '../components/home/HomeGameFeatures.vue';
import AppFooter from '../components/AppFooter.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
</script>

<template>
  <div class="home-page">
    <ParticleBackground />
    <HomeHeroSection />
    <HomeFeaturedHeroes />
    <HomeGameFeatures />
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<style scoped>

</style>