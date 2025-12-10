<script setup>
import { RouterLink } from 'vue-router';
import ParticleText from './ParticleText.vue';
</script>

<template>
    <section class="hero-section" :style="{ backgroundImage: 'url(/imgs/index/bg-index.webp)' }">
        <div class="hero-content">
            <div class="hero-title-wrapper">
                <ParticleText text="王者荣耀" :fontSize="100" color="#ffd700" />
            </div>
            <p class="hero-subtitle">5v5英雄公平对战手游</p>
            <RouterLink to="/heroes" class="cta-button">探索英雄世界</RouterLink>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
}

.hero-content {
    text-align: center;
    z-index: 2;
    max-width: 800px;
    padding: 0 2rem;
    width: 100%; /* Ensure full width for canvas scaling */
}

.hero-title-wrapper {
    margin-bottom: 1rem;
    height: 200px; /* Match ParticleText height */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Removed .hero-title styles as it is replaced by ParticleText */

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #e0e0e0;
}

.cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.5);
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
}
</style>