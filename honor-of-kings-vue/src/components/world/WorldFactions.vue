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
        <img :src="faction.image" :alt="faction.name">
        <div class="faction-info">
          <h3>{{ faction.name }}</h3>
          <p>{{ faction.description }}</p>
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
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2rem;
    color: #ffd700;
    text-align: center;
    margin-bottom: 3rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.factions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 2rem;
}

.faction-card {
    background: rgba(26, 35, 50, 0.9);
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(255, 215, 0, 0.1);
    cursor: pointer;
    transition: border-color 0.3s;
}

.faction-card:hover {
    border-color: #ffd700;
}

.faction-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.faction-info {
    padding: 1.5rem;
}

.faction-info h3 {
    color: #ffd700;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.faction-info p {
    color: #a0a0a0;
    font-size: 0.9rem;
    line-height: 1.5;
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
