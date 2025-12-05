<script setup>
import { ref } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const heroStories = ref([
    {
        id: 1,
        title: '月光之女',
        image: '/imgs/world/luna.jpg',
        description: '露娜身为古老的魔道家族后裔，继承了月光的力量。她与兄长铠的纠葛，以及与孙悟空的相遇，构成了一段跨越时空的传奇故事。'
    },
    {
        id: 2,
        title: '青莲剑仙',
        image: '/imgs/heroes/libai/libai.jpeg',
        description: '李白是长安城中最负盛名的剑客，他的剑法如诗如画，却背负着不为人知的过去。在剑与酒的世界里，他寻找着真正的自我。'
    },
    {
        id: 3,
        title: '闭月羞花',
        image: '/imgs/heroes/diaochan/diaochan.jpg',
        description: '貂蝉是稷下学院最优秀的学生之一，她掌握着古老的花之魔法。在乱世之中，她用自己的方式守护着心中的正义。'
    },
    {
        id: 4,
        title: '齐天大圣',
        image: '/imgs/heroes/sunwukong/sunwukong.jpg',
        description: '孙悟空来自神秘的东方，拥有不可思议的力量。他在王者大陆上寻找着战斗的意义，每一次战斗都让他更接近真相。'
    }
]);

const splideOptions = {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
    cover: true,
    height: '640px'
};
</script>

<template>
  <section class="stories-section">
    <h2 class="section-title">英雄故事</h2>
    <div class="story-gallery">
      <Splide :options="splideOptions">
        <SplideSlide v-for="story in heroStories" :key="story.id">
          <div class="story-card">
            <img :src="story.image" :alt="story.title">
            <div class="story-overlay">
              <h3>{{ story.title }}</h3>
              <p>{{ story.description }}</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<style scoped>
.stories-section {
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2rem;
    color: #ffd700;
    text-align: center;
    margin-bottom: 3rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.story-gallery {
    padding: 0 2rem;
}

.story-card {
    position: relative;
    height: 100%;
    width: 100%;
}

.story-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.story-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
    padding: 4rem 2rem 2rem;
    color: #fff;
}

.story-overlay h3 {
    font-size: 2rem;
    color: #ffd700;
    margin-bottom: 1rem;
}

.story-overlay p {
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 800px;
}
</style>
