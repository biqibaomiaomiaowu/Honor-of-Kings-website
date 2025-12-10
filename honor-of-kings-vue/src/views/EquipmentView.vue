<template>
  <div class="equipment-view">
    <ParticleBackground />
    <div class="equipment-container">
      <div class="page-header">
        <div class="page-title-wrapper">
            <ParticleText text="装备图鉴" :fontSize="60" color="#ffd700" />
        </div>
        <p class="page-subtitle">全装备属性详解与合成路径</p>
      </div>

      <EquipmentTabs 
        :currentCategory="currentCategory"
        @update:currentCategory="val => currentCategory = val"
      />

      <EquipmentList 
        :equipment="filteredEquipment" 
        @select="showEquipmentDetail"
      />

      <RecommendedBuilds 
        :builds="recommendedBuilds" 
      />
    </div>

    <EquipmentDetailModal 
      :show="showModal" 
      :equipment="selectedEquipment" 
      @close="closeModal" 
    />

    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppFooter from '@/components/AppFooter.vue';
import EquipmentTabs from '@/components/equipment/EquipmentTabs.vue';
import EquipmentList from '@/components/equipment/EquipmentList.vue';
import EquipmentDetailModal from '@/components/equipment/EquipmentDetailModal.vue';
import RecommendedBuilds from '@/components/equipment/RecommendedBuilds.vue';
import { equipmentData, recommendedBuilds } from '@/data/equipmentData.js';
import ScrollToTop from '../components/ScrollToTop.vue';
import ParticleBackground from '../components/home/ParticleBackground.vue';
import ParticleText from '../components/home/ParticleText.vue';
const currentCategory = ref('attack');
const showModal = ref(false);
const selectedEquipment = ref({});

const filteredEquipment = computed(() => {
  return equipmentData[currentCategory.value] || [];
});

const showEquipmentDetail = (equipment) => {
  selectedEquipment.value = equipment;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedEquipment.value = {};
};
</script>

<style scoped>
.equipment-view {
  min-height: 100vh;
  /* 背景继承自 body */
  color: #fff;
  display: flex;
  flex-direction: column;
}

.equipment-container {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px 50px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
  animation: fadeInDown 0.8s ease-out;
}

.page-title-wrapper {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

/* .page-title removed */

.page-subtitle {
  font-size: 18px;
  color: #aaa;
  letter-spacing: 1px;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
