<script setup>
import { ref, onMounted, nextTick } from 'vue';

const heroes = ref([
    {
        id: 1,
        name: '露娜',
        role: '战士/刺客',
        image: '/imgs/heroes/luna/luna.jpg',
        description: '月光之女，拥有强大的突进能力和持续输出能力，是战场上的致命杀手。'
    },
    {
        id: 2,
        name: '李白',
        role: '刺客',
        image: '/imgs/heroes/libai/libai.jpeg',
        description: '青莲剑仙，以华丽的剑法和灵活的位移著称，能够快速切入敌方后排。'
    },
    {
        id: 3,
        name: '貂蝉',
        role: '法师',
        image: '/imgs/heroes/diaochan/diaochan.jpg',
        description: '闭月羞花，拥有美丽的舞姿和强大的法术伤害，是团队的核心输出。'
    },
    {
        id: 4,
        name: '孙悟空',
        role: '战士/刺客',
        image: '/imgs/heroes/sunwukong/sunwukong.jpg',
        description: '齐天大圣，拥有超强的爆发力和生存能力，是战场上的不败战神。'
    },
    {
        id: 5,
        name: '亚瑟',
        role:'坦克/战士',
        image: '/imgs/heroes/yase/yase.png',
        description: '圣骑之力，新手友好的坦克英雄，拥有稳定的控制能力'
    },
    {
        id: 6,
        name: '后羿',
        role: '射手',
        image: '/imgs/heroes/houyi/houyi.webp',
        description: '半神之弓，拥有强大的持续输出能力和全图支援能力'
    },
]);

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