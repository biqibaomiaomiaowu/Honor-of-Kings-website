<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { heroStories } from '../../data/worldData';

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
