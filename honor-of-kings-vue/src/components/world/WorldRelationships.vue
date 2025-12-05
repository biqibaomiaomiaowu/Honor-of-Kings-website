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
        v-for="relationship in relationships" 
        :key="relationship.id" 
        class="relationship-card"
        @mouseenter="handleCardHover"
        @mouseleave="handleCardLeave"
      >
        <div class="relationship-header">
          <div class="hero-avatars">
            <img 
              v-for="(avatar, index) in relationship.avatars" 
              :key="index" 
              :src="avatar" 
              alt="Hero Avatar"
              class="hero-avatar"
            >
          </div>
          <div class="relationship-type">{{ relationship.type }}</div>
        </div>
        <div class="relationship-description">{{ relationship.description }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-relationships {
    margin: 3rem 0;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 2rem;
}

.relationships-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.relationship-card {
    background: rgba(26, 35, 50, 0.8);
    padding: 2rem;
    border-radius: 15px;
    border: 1px solid rgba(255, 215, 0, 0.2);
}

.relationship-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
}

.hero-avatars {
    display: flex;
    margin-right: 1rem;
}

.hero-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ffd700;
    margin-right: -10px;
}

.relationship-type {
    padding: 0.3rem 1rem;
    background: rgba(255, 107, 53, 0.2);
    color: #ff6b35;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
}

.relationship-description {
    color: #b0b0b0;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .relationships-grid {
        grid-template-columns: 1fr;
    }
}
</style>
