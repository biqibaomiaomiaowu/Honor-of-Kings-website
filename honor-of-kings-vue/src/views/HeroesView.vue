<script setup>
import { ref, computed } from 'vue';
import HeroesFilter from '../components/heroes/HeroesFilter.vue';
import HeroesList from '../components/heroes/HeroesList.vue';
import HeroDetailModal from '../components/heroes/HeroDetailModal.vue';
import { roles as rolesRaw, heroesData as heroesDataRaw } from '../data/heroesData';
import ScrollToTop from '../components/ScrollToTop.vue';
import AppFooter from '../components/AppFooter.vue';
import ParticleBackground from '../components/home/ParticleBackground.vue';
import ParticleText from '../components/home/ParticleText.vue';
// 响应式数据
const searchQuery = ref('');
const currentFilter = ref('all');
const showModal = ref(false);
const selectedHero = ref(null);

// 英雄角色分类
const roles = ref(rolesRaw);

// 英雄数据
const heroesData = ref(heroesDataRaw);

// 计算属性：过滤英雄
const filteredHeroes = computed(() => {
    let result = heroesData.value;
    
    // 按角色筛选
    if (currentFilter.value !== 'all') {
        result = result.filter(hero => {
            if (Array.isArray(hero.role)) {
                return hero.role.includes(currentFilter.value);
            }
            return hero.role === currentFilter.value;
        });
    }
    
    // 按搜索词筛选
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        result = result.filter(hero => 
            hero.name.toLowerCase().includes(query)
        );
    }
    
    return result;
});

// 方法：显示英雄详情
const showHeroDetail = (hero) => {
    selectedHero.value = hero;
    showModal.value = true;
};

// 方法：关闭模态框
const closeModal = () => {
    showModal.value = false;
};
</script>

<template>
    <div class="heroes-page">
        <ParticleBackground />
        <main class="main-content">
            <div class="page-header">
                <div class="page-title-wrapper">
                    <ParticleText text="英雄介绍" :fontSize="60" color="#ffd700" />
                </div>
                <p class="page-subtitle">探索王者峡谷中的每一位英雄，了解他们的故事与技能</p>
            </div>

            <HeroesFilter 
                :searchQuery="searchQuery"
                @update:searchQuery="searchQuery = $event"
                :currentFilter="currentFilter"
                @update:currentFilter="currentFilter = $event"
                :roles="roles"
            />

            <HeroesList 
                :heroes="filteredHeroes"
                @select-hero="showHeroDetail"
            />
        </main>

        <!-- 英雄详情模态框 -->
        <HeroDetailModal 
            v-if="showModal" 
            :hero="selectedHero"
            @close="closeModal"
        />
        <AppFooter />
        <ScrollToTop />
    </div>
</template>

<style scoped>
.heroes-page {
    min-height: 100vh;
    background: transparent;
    color: #ffffff;
    padding-top: 80px; /* Add padding for fixed navbar */
    position: relative;
}

.main-content {
    padding: 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;
}

.page-header {
    text-align: center;
    margin-bottom: 2rem;
}

.page-title-wrapper {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

/* .page-title removed */

.page-subtitle {
    font-size: 1.2rem;
    color: #b0b0b0;
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2rem;
    }
}
</style>
