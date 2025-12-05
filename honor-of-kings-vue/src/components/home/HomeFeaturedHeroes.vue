<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { featuredHeroes as heroes } from '../../data/homeData';

onMounted(() => {
    nextTick(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.hero-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    });
});
</script>

<template>
    <section class="featured-heroes">
        <h2 class="section-title">热门英雄</h2>
        <div class="heroes-grid">
            <div v-for="hero in heroes" :key="hero.id" class="hero-card">
                <img :src="hero.image" :alt="hero.name" class="hero-image">
                <div class="hero-info">
                    <h3 class="hero-name">{{ hero.name }}</h3>
                    <p class="hero-role">{{ hero.role }}</p>
                    <p class="hero-description">{{ hero.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.featured-heroes {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 3rem;
    color: #ffd700;
}

.heroes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.hero-card {
    background: rgba(26, 35, 50, 0.8);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 215, 0, 0.2);
    backdrop-filter: blur(10px);
}

.hero-card:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: #ffd700;
}

.hero-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.hero-card:hover .hero-image {
    transform: scale(1.1);
}

.hero-info {
    padding: 1.5rem;
}

.hero-name {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #ffd700;
}

.hero-role {
    color: #ff6b35;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.hero-description {
    color: #b0b0b0;
    font-size: 0.9rem;
    line-height: 1.4;
}

@media (max-width: 768px) {
    .heroes-grid {
        grid-template-columns: 1fr;
    }
}
</style>