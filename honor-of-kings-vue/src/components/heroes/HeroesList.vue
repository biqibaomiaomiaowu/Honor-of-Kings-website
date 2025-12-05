<script setup>
import { onMounted, nextTick, watch } from 'vue';

const props = defineProps({
  heroes: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['select-hero']);

const selectHero = (hero) => {
  emit('select-hero', hero);
};

// 动画逻辑
onMounted(() => {
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
    
    const observeHeroCards = () => {
        nextTick(() => {
            document.querySelectorAll('.hero-card').forEach(card => {
                if (!card.dataset.observed) {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    card.style.transition = 'all 0.6s ease';
                    card.dataset.observed = 'true';
                    observer.observe(card);
                }
            });
        });
    };
    
    observeHeroCards();
    
    watch(() => props.heroes, () => {
        setTimeout(observeHeroCards, 100);
    });
});
</script>

<template>
  <div class="heroes-container">
    <div 
        v-for="hero in heroes" 
        :key="hero.id"
        class="hero-card"
        @click="selectHero(hero)"
    >
        <div class="hero-image-container">
            <img :src="hero.image" :alt="hero.name" class="hero-image">
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-info">
            <h3 class="hero-name">{{ hero.name }}</h3>
            <span class="hero-role">{{ hero.roleText }}</span>
            <div class="hero-stats">
                <div class="stat-item">
                    <div class="stat-value">{{ hero.stats.attack }}</div>
                    <div class="stat-label">攻击</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">{{ hero.stats.defense }}</div>
                    <div class="stat-label">防御</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">{{ hero.stats.magic }}</div>
                    <div class="stat-label">法术</div>
                </div>
            </div>
            <p class="hero-description">{{ hero.description }}</p>
        </div>
    </div>
    
    <div class="no-results" v-if="heroes.length === 0">
        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
        <h3>未找到匹配的英雄</h3>
        <p>请尝试其他搜索条件</p>
    </div>
  </div>
</template>

<style scoped>
.heroes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.hero-card {
    background: rgba(26, 35, 50, 0.9);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 215, 0, 0.2);
    cursor: pointer;
    position: relative;
}

.hero-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: #ffd700;
}

.hero-image-container {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.hero-card:hover .hero-image {
    transform: scale(1.1);
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%);
}

.hero-info {
    padding: 1.5rem;
}

.hero-name {
    font-size: 1.4rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 0.5rem;
}

.hero-role {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background: rgba(255, 107, 53, 0.2);
    color: #ff6b35;
    border-radius: 15px;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.stat-item {
    text-align: center;
    padding: 0.5rem;
    background: rgba(15, 20, 25, 0.5);
    border-radius: 8px;
}

.stat-value {
    font-size: 1.1rem;
    font-weight: bold;
    color: #ffd700;
}

.stat-label {
    font-size: 0.8rem;
    color: #888;
}

.hero-description {
    color: #b0b0b0;
    font-size: 0.9rem;
    line-height: 1.4;
}

.no-results {
    text-align: center;
    padding: 3rem;
    color: #888;
    grid-column: 1 / -1;
}

@media (max-width: 768px) {
    .heroes-container {
        grid-template-columns: 1fr;
    }
}
</style>
