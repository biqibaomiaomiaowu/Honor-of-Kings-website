<script setup>
import { onMounted, nextTick } from 'vue';
import { gameFeatures } from '../../data/homeData';

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
        
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    });
});
</script>

<template>
    <section class="game-features">
        <div class="features-container">
            <div class="features-grid">
                <div v-for="feature in gameFeatures" :key="feature.id" class="feature-card">
                    <div class="feature-icon">
                        <i :class="feature.icon"></i>
                    </div>
                    <h3 class="feature-title">{{ feature.title }}</h3>
                    <p class="feature-description">
                        {{ feature.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.game-features {
    background: rgba(15, 20, 25, 0.5);
    padding: 5rem 2rem;
    margin: 3rem 0;
}

.features-container {
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

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: rgba(26, 35, 50, 0.8);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 215, 0, 0.1);
}

.feature-card:hover {
    transform: translateY(-5px);
    border-color: #ffd700;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.feature-icon {
    font-size: 3rem;
    color: #ffd700;
    margin-bottom: 1rem;
}

.feature-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #ffffff;
}

.feature-description {
    color: #b0b0b0;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
    }
}
</style>