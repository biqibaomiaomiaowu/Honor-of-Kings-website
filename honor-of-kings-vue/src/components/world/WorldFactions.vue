<script setup>
import { ref } from 'vue';
import anime from 'animejs';

const factions = ref([
    {
        id: 1,
        name: '长安城',
        image: '/imgs/world/changan.webp',
        description: '繁华的中心都城，科技与魔法完美融合的文明中心。在这里，古老的智慧与现代的创新交相辉映。',
        heroes: ['李白', '狄仁杰', '李元芳', '武则天']
    },
    {
        id: 2,
        name: '稷下学院',
        image: '/imgs/world/jixiaxueyuan.jpg',
        description: '培养英雄的摇篮，汇聚了整个大陆最优秀的人才。三位贤者在这里传授着古老的智慧。',
        heroes: ['诸葛亮', '司马懿', '周瑜', '元歌']
    },
    {
        id: 3,
        name: '云梦泽',
        image: '/imgs/world/yunmengze.webp',
        description: '神歌森林梦幻神秘，神陨战后古云梦新生。千年后虽成乐土，但虚幻枯萎与反叛似引风暴 ',
        heroes: ['少司缘', '影', '大司命', '云中君']
    },
    {
        id: 4,
        name: '海都',
        image: '/imgs/world/haidu.webp',
        description: '阿尔卡纳叛乱终结旧神遭诅咒，建海都繁华，海都人爱冒险，盼通东方解咒  ',
        heroes: ['海诺', '朵莉亚', '米莱狄', '露娜']
    },
    {
        id: 5,
        name: '建木',
        image: '/imgs/world/jianmu.png',
        description: '上古神明居此建倒悬都市，“十方天枢”停摆引紊流，归山族抗灾盼归天。  ',
        heroes: ['妲己', '姜子牙', '盘古', '女娲']
    },
    {
        id: 6,
        name: '沙海',
        image: '/imgs/world/shahai.webp',
        description: '神陨后云中成荒漠，“船帮”崛起。沙民苦寻真王，盼指引沙漠走出厄运、重启辉煌   ',
        heroes: ['戈娅']
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
