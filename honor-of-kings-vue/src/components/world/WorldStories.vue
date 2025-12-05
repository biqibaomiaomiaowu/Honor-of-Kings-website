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
          <div class="splide__slide">
            <img :src="story.image" :alt="story.title" class="story-image">
            <div class="story-overlay">
              <h3 class="story-title">{{ story.title }}</h3>
              <p class="story-description">{{ story.description }}</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<style scoped>
.stories-section {
    margin: 3rem 0;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 2rem;
}

.story-gallery {
    position: relative;
    margin: 2rem 0;
}

.splide__slide {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
}

.story-image {
    width: 100%;
    height: 640px;
    max-height: 80vh;
    object-fit: cover;
}

.story-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
    padding: 2rem;
    color: white;
}

.story-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #ffd700;
}

.story-description {
    font-size: 0.9rem;
    line-height: 1.4;
    color: #e0e0e0;
}
</style>
