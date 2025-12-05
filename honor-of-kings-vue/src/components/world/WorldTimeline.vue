<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { timelineEvents } from '../../data/worldData';

const itemRefs = ref([]);
let observer = null;

const setItemRef = (el) => {
    if (el) {
        itemRefs.value.push(el);
    }
};

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    itemRefs.value.forEach(item => {
        observer.observe(item);
    });
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<template>
  <section class="timeline-section">
    <h2 class="section-title">历史长河</h2>
    <div class="timeline">
      <div 
        v-for="(event, index) in timelineEvents" 
        :key="index" 
        class="timeline-item"
        :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
        :ref="setItemRef"
      >
        <div class="timeline-content">
          <div class="year">{{ event.year }}</div>
          <h3>{{ event.title }}</h3>
          <p>{{ event.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
    margin-bottom: 4rem;
    padding: 2rem 0;
}

.section-title {
    font-size: 2rem;
    color: #ffd700;
    text-align: center;
    margin-bottom: 3rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.timeline {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
}

.timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background: #ffd700;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.timeline-item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease;
}

.timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
}

.timeline-item.left {
    left: 0;
}

.timeline-item.right {
    left: 50%;
}

.timeline-item::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background-color: #1a2332;
    border: 2px solid #ffd700;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.timeline-item.right::after {
    left: -10px;
}

.timeline-content {
    padding: 20px 30px;
    background: rgba(26, 35, 50, 0.9);
    position: relative;
    border-radius: 6px;
    border: 1px solid rgba(255, 215, 0, 0.2);
}

.timeline-content:hover {
    border-color: #ffd700;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
}

.year {
    color: #ffd700;
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.timeline-content h3 {
    color: #fff;
    margin-bottom: 0.5rem;
}

.timeline-content p {
    color: #a0a0a0;
    line-height: 1.5;
}

@media screen and (max-width: 600px) {
    .timeline::after {
        left: 31px;
    }
    
    .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
    }
    
    .timeline-item::after {
        left: 21px;
    }
    
    .timeline-item.right {
        left: 0%;
    }
}
</style>
