<script setup>
import anime from 'animejs';
import { factions } from '../../data/worldData';

const handleCardHover = (e) => {
    anime({
        targets: e.currentTarget,
        scale: 1.05,
        duration: 300,
        easing: 'easeOutQuad'
    });
};

const handleCardLeave = (e) => {
    anime({
        targets: e.currentTarget,
        scale: 1,
        duration: 300,
        easing: 'easeOutQuad'
    });
};
</script>

<template>
  <section class="factions-section">
    <h2 class="section-title">主要势力</h2>
    <div class="factions-grid">
      <div 
        v-for="faction in factions" 
        :key="faction.id" 
        class="faction-card"
        @mouseenter="handleCardHover"
        @mouseleave="handleCardLeave"
      >
        <img :src="faction.image" :alt="faction.name" class="faction-image">
        <div class="faction-info">
          <h3 class="faction-name">{{ faction.name }}</h3>
          <p class="faction-description">{{ faction.description }}</p>
          <div class="faction-heroes">
            <span 
              v-for="hero in faction.heroes" 
              :key="hero"
              class="hero-tag"
            >
              {{ hero }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.factions-section {
    margin-bottom: 3rem;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 2rem;
}

.factions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.faction-card {
    background: rgba(26, 35, 50, 0.8);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 215, 0, 0.2);
}

.faction-card:hover {
    transform: translateY(-10px);
    border-color: #ffd700;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.faction-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.faction-info {
    padding: 2rem;
}

.faction-name {
    font-size: 1.4rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 1rem;
}

.faction-description {
    color: #b0b0b0;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.faction-heroes {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.hero-tag {
    padding: 0.3rem 0.8rem;
    background: rgba(255, 107, 53, 0.2);
    color: #ff6b35;
    border-radius: 15px;
    font-size: 0.8rem;
}
</style>
