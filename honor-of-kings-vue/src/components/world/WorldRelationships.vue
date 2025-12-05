<script setup>
import anime from 'animejs';
import { relationships } from '../../data/worldData';

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
  <section class="hero-relationships">
    <h2 class="section-title">英雄关系</h2>
    <div class="relationships-grid">
      <div 
        v-for="relation in relationships" 
        :key="relation.id" 
        class="relationship-card"
        @mouseenter="handleCardHover"
        @mouseleave="handleCardLeave"
      >
        <div class="relationship-header">
          <div class="hero-avatars">
            <img 
              v-for="(avatar, index) in relation.avatars" 
              :key="index" 
              :src="avatar" 
              alt="Hero Avatar"
              class="hero-avatar"
            >
          </div>
          <div class="relationship-type">{{ relation.type }}</div>
        </div>
        <div class="relationship-description">{{ relation.description }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-relationships {
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2rem;
    color: #ffd700;
    text-align: center;
    margin-bottom: 3rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.relationships-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 2rem;
}

.relationship-card {
    background: rgba(26, 35, 50, 0.9);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid rgba(255, 215, 0, 0.1);
    transition: border-color 0.3s;
}

.relationship-card:hover {
    border-color: #ffd700;
}

.relationship-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
}

.hero-avatars {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.hero-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #ffd700;
    margin: 0 -10px;
    transition: transform 0.3s;
    object-fit: cover;
}

.relationship-card:hover .hero-avatar {
    transform: scale(1.1);
    margin: 0 5px;
}

.relationship-type {
    color: #ffd700;
    font-size: 1.2rem;
    font-weight: bold;
}

.relationship-description {
    color: #a0a0a0;
    font-size: 0.9rem;
    line-height: 1.6;
    text-align: center;
}
</style>
