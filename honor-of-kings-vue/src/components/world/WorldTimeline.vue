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
    <h2 class="section-title">历史时间线</h2>
    <div class="timeline">
      <div 
        v-for="(event, index) in timelineEvents" 
        :key="index" 
        class="timeline-item"
        :ref="setItemRef"
      >
        <div class="timeline-content">
          <div class="timeline-year">{{ event.year }}</div>
          <div class="timeline-title">{{ event.title }}</div>
          <div class="timeline-description">{{ event.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
    margin: 3rem 0;
    background: rgba(26, 35, 50, 0.5);
    padding: 3rem 2rem;
    border-radius: 20px;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 2rem;
}

.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #ffd700, rgba(255, 215, 0, 0.3));
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
}

.timeline-item:nth-child(odd) {
    flex-direction: row;
}

.timeline-item:nth-child(even) {
    flex-direction: row-reverse;
}

.timeline-content {
    background: rgba(15, 20, 25, 0.8);
    padding: 2rem;
    border-radius: 15px;
    width: 45%;
    border: 1px solid rgba(255, 215, 0, 0.2);
    position: relative;
}

.timeline-content::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: #ffd700;
    border-radius: 50%;
    transform: translateY(-50%);
}

.timeline-item:nth-child(odd) .timeline-content::before {
    right: -60px;
}

.timeline-item:nth-child(even) .timeline-content::before {
    left: -60px;
}

.timeline-year {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 0.5rem;
}

.timeline-title {
    font-size: 1.1rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 1rem;
}

.timeline-description {
    color: #b0b0b0;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .timeline::before {
        left: 20px;
    }
    
    .timeline-item {
        flex-direction: column !important;
        align-items: flex-start;
    }
    
    .timeline-content {
        width: 100%;
        margin-left: 40px;
    }
    
    .timeline-content::before {
        left: -50px !important;
    }
}
</style>
