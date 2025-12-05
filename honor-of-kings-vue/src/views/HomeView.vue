<script setup>
import { ref, onMounted, nextTick } from 'vue';
import * as PIXI from 'pixi.js';
// import anime from 'animejs'; // 如果需要 animejs 动画，请取消注释并使用

// 响应式数据
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

const particlesContainer = ref(null);

// 方法
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const initParticles = async () => {
    if (!particlesContainer.value) return;

    const pixiApp = new PIXI.Application();
    
    await pixiApp.init({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x000000,
        backgroundAlpha: 0,
        resizeTo: window
    });
    
    particlesContainer.value.appendChild(pixiApp.canvas);
    
    const particleContainer = new PIXI.Container();
    pixiApp.stage.addChild(particleContainer);
    
    const particles = [];
    for (let i = 0; i < 50; i++) {
        const particle = new PIXI.Graphics();
        particle.beginFill(0xffd700, 0.3);
        particle.drawCircle(0, 0, Math.random() * 3 + 1);
        particle.endFill();
        
        particle.x = Math.random() * pixiApp.screen.width;
        particle.y = Math.random() * pixiApp.screen.height;
        particle.vx = (Math.random() - 0.5) * 2;
        particle.vy = (Math.random() - 0.5) * 2;
        
        particles.push(particle);
        particleContainer.addChild(particle);
    }
    
    pixiApp.ticker.add(() => {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0) particle.x = pixiApp.screen.width;
            if (particle.x > pixiApp.screen.width) particle.x = 0;
            if (particle.y < 0) particle.y = pixiApp.screen.height;
            if (particle.y > pixiApp.screen.height) particle.y = 0;
        });
    });
};

const initScrollAnimations = () => {
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
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.hero-card, .feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    });
};

onMounted(() => {
    initParticles().catch(err => console.error('Pixi init failed:', err));
    initScrollAnimations();
});
</script>

<template>
  <div class="home-page">
    <div ref="particlesContainer" id="particles-container"></div>
    
    <section class="hero-section" :style="{ backgroundImage: 'url(/imgs/index/bg-index.webp)' }">
        <div class="hero-content">
            <h1 class="hero-title">王者荣耀</h1>
            <p class="hero-subtitle">5v5英雄公平对战手游</p>
            <RouterLink to="/heroes" class="cta-button">探索英雄世界</RouterLink>
        </div>
    </section>

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

    <section class="game-features">
        <div class="features-container">
            <h2 class="section-title">游戏特色</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3 class="feature-title">5v5公平竞技</h3>
                    <p class="feature-description">
                        经典的MOBA玩法，5v5团队作战，考验配合与策略，体验公平的竞技乐趣。
                    </p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3 class="feature-title">快节奏对战</h3>
                    <p class="feature-description">
                        10分钟一局，随时随地享受紧张刺激的战斗体验，适合移动端游戏习惯。
                    </p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3 class="feature-title">丰富英雄池</h3>
                    <p class="feature-description">
                        超过100位英雄，涵盖坦克、战士、法师、射手、辅助、刺客六大职业。
                    </p>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2025 王者荣耀 南开大学前端小组制作</p>
        </div>
    </footer>

    <div class="scroll-indicator" @click="scrollToTop">
        <i class="fas fa-arrow-up"></i>
    </div>
  </div>
</template>

<style scoped>
#particles-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none; /* 防止遮挡点击 */
}

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
}

.hero-title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #ffd700, #ffed4e, #ffd700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
    from { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.5)); }
    to { filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.8)); }
}

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

.game-features {
    background: rgba(15, 20, 25, 0.5);
    padding: 5rem 2rem;
    margin: 3rem 0;
}

.features-container {
    max-width: 1200px;
    margin: 0 auto;
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

.footer {
    background: rgba(15, 20, 25, 0.95);
    padding: 2rem;
    text-align: center;
    border-top: 1px solid rgba(255, 215, 0, 0.2);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    color: #b0b0b0;
}

.scroll-indicator {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: rgba(255, 215, 0, 0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1000;
}

.scroll-indicator:hover {
    background: #ffd700;
    transform: scale(1.1);
}

.scroll-indicator i {
    color: #0f1419;
    font-size: 1.2rem;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .heroes-grid {
        grid-template-columns: 1fr;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
}
</style>