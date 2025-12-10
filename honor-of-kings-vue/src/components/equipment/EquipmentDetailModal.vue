<template>
  <Transition name="modal">
    <div v-if="show" class="modal-overlay" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="$emit('close')">&times;</button>
        
        <div class="modal-header">
          <div class="modal-icon-wrapper">
            <img :src="getImageUrl(equipment.icon)" :alt="equipment.name" class="modal-icon">
          </div>
          <div class="modal-title-info">
            <h3>{{ equipment.name }}</h3>
            <div class="modal-price">
              <span class="coin-icon">💰</span> {{ equipment.price }}
            </div>
          </div>
        </div>

        <div class="modal-body">
          <!-- 基础属性 -->
          <div class="stats-section" v-if="equipment.stats">
            <div class="stat-item" v-for="(value, key) in equipment.stats" :key="key">
              <span class="stat-label">{{ key }}</span>
              <span class="stat-value">+{{ value }}</span>
            </div>
          </div>

          <!-- 被动/主动技能 -->
          <div class="passives-section" v-if="equipment.passives && equipment.passives.length">
            <div class="passive-item" v-for="(passive, index) in equipment.passives" :key="index">
              <div class="passive-name">{{ passive.type }}</div>
              <div class="passive-desc" :class="{ 'pre-wrap': passive.needLineBreak }">
                {{ passive.description }}
              </div>
            </div>
          </div>

          <!-- 合成路径 -->
          <div class="materials-section" v-if="equipment.materials && equipment.materials.length">
            <div class="section-title">合成路径</div>
            <div class="materials-list">
              <div class="material-item" v-for="(material, index) in equipment.materials" :key="index">
                <img :src="getImageUrl(material)" alt="material" class="material-icon">
                <div class="material-arrow" v-if="index < equipment.materials.length - 1">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  },
  equipment: {
    type: Object,
    default: () => ({})
  }
});

defineEmits(['close']);

const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) {
    return path;
  }
  return '/' + path;
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  width: 90%;
  max-width: 500px;
  border-radius: 15px;
  border: 1px solid #d4af37;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
  position: relative;
  overflow: hidden;
  animation: modalSlideIn 0.3s ease-out;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #888;
  font-size: 28px;
  cursor: pointer;
  z-index: 10;
  transition: color 0.3s;
}

.close-btn:hover {
  color: #fff;
}

.modal-header {
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
}

.modal-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  border: 2px solid #d4af37;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
}

.modal-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-title-info h3 {
  color: #d4af37;
  font-size: 24px;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.modal-price {
  color: #ffd700;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.modal-body {
  padding: 25px;
  max-height: 60vh;
  overflow-y: auto;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 8px;
}

.stat-item {
  color: #ccc;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

.stat-value {
  color: #4caf50;
  font-weight: bold;
}

.passives-section {
  margin-bottom: 20px;
}

.passive-item {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.passive-item:last-child {
  border-bottom: none;
}

.passive-name {
  color: #d4af37;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
}

.passive-desc {
  color: #aaa;
  font-size: 13px;
  line-height: 1.6;
}

.passive-desc.pre-wrap {
  white-space: pre-wrap;
}

.materials-section {
  margin-top: 20px;
}

.section-title {
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  border-left: 3px solid #d4af37;
  padding-left: 10px;
}

.materials-list {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.material-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.material-icon {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #666;
}

.material-arrow {
  color: #666;
  font-size: 18px;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Scrollbar */
.modal-body::-webkit-scrollbar {
  width: 6px;
}

.modal-body::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}

.modal-body::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 3px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: #666;
}
</style>
