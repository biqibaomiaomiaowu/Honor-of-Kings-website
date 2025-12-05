<script setup>
import { ref } from 'vue';
import anime from 'animejs';

const relationships = ref([
    {
        id: 1,
        avatars: [
            '/imgs/world/sunce.webp',
            '/imgs/world/daqiao.webp'
        ],
        type: '宿命羁绊',
        description: '孙策为江东霸业征战，勇猛无畏；大乔温柔支持，默默相伴。战场双防提升，如坚固防线相守。 他们的爱情在硝烟中绽放，成为彼此最坚强的后盾。'
    },
    {
        id: 2,
        avatars: [
            '/imgs/world/yangjian.webp',
            '/imgs/world/houyi.webp'
        ],
        type: '亦敌亦友',
        description: '杨戬与后羿曾为天界主神候选人，相互讥讽。因延误人间救援神力衰退，被迫合作。濒死觉悟后互信，触发「日曜之辉」。 '
    },
    {
        id: 3,
        avatars: [
            '/imgs/world/sunshangxiang.webp',
            '/imgs/world/luban.webp'
        ],
        type: '同门师兄妹',
        description: '孙尚香与鲁班七号是同门，感情深厚。故事中鲁班七号为护师妹不顾安危。游戏里，二者皆为射手，孙尚香输出灵活，鲁班七号火力强大。 '
    }
]);

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
