<script setup>
import { ref, onMounted, nextTick } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  hero: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close']);

const statsChart = ref(null);

const closeModal = () => {
  emit('close');
};

const renderStatsChart = (stats) => {
    if (!statsChart.value) return;
    
    const myChart = echarts.init(statsChart.value);

    const option = {
        backgroundColor: 'transparent',
        radar: {
            indicator: [
                { name: '攻击', max: 100 },
                { name: '防御', max: 100 },
                { name: '法术', max: 100 },
                { name: '难度', max: 100 }
            ],
            axisName: {
                color: '#ffd700'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 215, 0, 0.3)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 215, 0, 0.5)'
                }
            }
        },
        series: [{
            type: 'radar',
            data: [{
                value: [stats.attack, stats.defense, stats.magic, stats.difficulty],
                name: '英雄属性',
                areaStyle: {
                    color: 'rgba(255, 215, 0, 0.3)'
                },
                lineStyle: {
                    color: '#ffd700'
                },
                itemStyle: {
                    color: '#ffd700'
                }
            }]
        }]
    };

    myChart.setOption(option);
};

onMounted(() => {
    nextTick(() => {
        renderStatsChart(props.hero.stats);
    });
});
</script>

<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal-content">
        <div class="modal-header">
            <h2 class="modal-title">{{ hero.name }}</h2>
            <button class="close-btn" @click="closeModal">&times;</button>
        </div>
        <div class="hero-detail-grid">
            <div>
                <img :src="hero.image" :alt="hero.name" class="hero-detail-image">
            </div>
            <div>
                <div class="hero-stats-chart" ref="statsChart"></div>
            </div>
        </div>
        <div class="hero-skills">
            <h3 class="skills-title">技能介绍</h3>
            <div class="skill-item" v-for="skill in hero.skills" :key="skill.name">
                <div class="skill-name">{{ skill.name }}</div>
                <div class="skill-description">{{ skill.description }}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2000;
    backdrop-filter: blur(5px);
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(26, 35, 50, 0.95);
    border-radius: 20px;
    padding: 2rem;
    max-width: 800px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    border: 1px solid rgba(255, 215, 0, 0.3);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.modal-title {
    font-size: 2rem;
    font-weight: bold;
    color: #ffd700;
}

.close-btn {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s ease;
}

.close-btn:hover {
    color: #ffd700;
}

.hero-detail-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

.hero-detail-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
}

.hero-stats-chart {
    height: 300px;
}

.hero-skills {
    margin-top: 2rem;
}

.skills-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 1rem;
}

.skill-item {
    background: rgba(15, 20, 25, 0.5);
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.skill-name {
    font-weight: bold;
    color: #ff6b35;
    margin-bottom: 0.5rem;
}

.skill-description {
    color: #b0b0b0;
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .hero-detail-grid {
        grid-template-columns: 1fr;
    }
}
</style>
