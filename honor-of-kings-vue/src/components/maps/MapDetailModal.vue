<script setup>
import { ref, watch } from 'vue';
import anime from 'animejs';

const props = defineProps({
  show: Boolean,
  hotspot: Object
});

const emit = defineEmits(['close', 'prev', 'next']);

const activeTab = ref('brief');
const detailImage = ref(null);

// Reset tab when hotspot changes
watch(() => props.hotspot, () => {
  activeTab.value = 'brief';
  // Simple animation for image change
  if (detailImage.value) {
    anime({
      targets: detailImage.value,
      opacity: [0, 1],
      duration: 300,
      easing: 'easeOutQuad'
    });
  }
});

const tabs = [
  { key: 'brief', label: '简介' },
  { key: 'detail', label: '详细信息' },
  { key: 'generalFeatures', label: '通用特性' },
  { key: 'legend', label: '传说' }
];

const handleClose = () => {
  emit('close');
};

const handlePrev = () => {
  emit('prev');
};

const handleNext = () => {
  emit('next');
};
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal" @click.self="handleClose">
      <div class="modal-content">
        <button class="modal-close-btn" @click="handleClose">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="modal-global-title">王者峡谷区域详情</div>

        <div class="modal-textarea">
          <div class="modal-hotspot-title">
            {{ hotspot.title }}
            <span class="modal-type-tag">{{ hotspot.type }}</span>
          </div>

          <div class="modal-tabs">
            <div 
              v-for="tab in tabs" 
              :key="tab.key"
              class="modal-tab"
              :class="{ active: activeTab === tab.key }"
              @click="activeTab = tab.key"
            >
              {{ tab.label }}
            </div>
          </div>

          <div class="modal-tab-content">
            <!-- 简介 -->
            <div v-if="activeTab === 'brief'">
              <div class="content-section-label">区域简介</div>
              <p class="content-text">{{ hotspot.brief }}</p>
            </div>

            <!-- 详细信息 -->
            <div v-if="activeTab === 'detail'">
              <div class="content-section-label">详细数据</div>
              <ul class="content-list">
                <li v-for="(item, index) in hotspot.detail" :key="index" class="content-list-item">
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- 通用特性 -->
            <div v-if="activeTab === 'generalFeatures'">
              <div class="content-section-label">通用特性</div>
              <ul class="content-list">
                <li v-for="(item, index) in hotspot.generalFeatures" :key="index" class="content-list-item">
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- 传说 -->
            <div v-if="activeTab === 'legend'">
              <div class="content-section-label">背景传说</div>
              <p class="content-text">{{ hotspot.legend }}</p>
            </div>
          </div>
        </div>

        <div class="modal-image-container">
          <img ref="detailImage" :src="hotspot.detailImage" :alt="hotspot.title" class="modal-detail-img">
          
          <div class="nav-arrow prev-arrow" @click="handlePrev">
            <i class="fas fa-chevron-left"></i>
          </div>
          <div class="nav-arrow next-arrow" @click="handleNext">
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 2000;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-content {
    position: relative;
    width: 100%;
    max-width: 1100px;
    height: 75vh;
    background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(59, 130, 246, 0.3);
    display: flex;
    flex-direction: row;
}

.modal-global-title {
    position: absolute;
    top: 1.2rem;
    left: 2rem;
    font-size: 1.1rem;
    color: #e2e8f0;
    font-weight: 500;
    z-index: 20;
}

.modal-textarea {
    width: 42%;
    padding: 2.8rem 2rem 2rem;
    overflow-y: auto;
    position: relative;
    background: rgba(15, 23, 42, 0.8);
}

.modal-hotspot-title {
    font-size: 1.4rem;
    color: #ffd700;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
}

.modal-type-tag {
    display: inline-block;
    padding: 0.25rem 0.7rem;
    background: #ff6b35;
    color: white;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
}

.modal-tabs {
    display: flex;
    gap: 1.5rem;
    margin: 0 0 1.5rem;
    position: relative;
}

.modal-tab {
    color: #94a3b8;
    font-size: 0.95rem;
    cursor: pointer;
    padding: 0.4rem 0;
    position: relative;
    transition: color 0.3s ease;
}

.modal-tab.active {
    color: #3b82f6;
}

.modal-tab.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #3b82f6;
    border-radius: 2px;
}

/* 内容区域 */
.content-section-label {
    font-size: 0.9rem;
    color: #94a3b8;
    margin-bottom: 1rem;
    font-weight: 500;
}

.content-text {
    color: #e2e8f0;
    line-height: 1.7;
    font-size: 0.9rem;
}

.content-list {
    padding-left: 1.2rem;
    color: #e2e8f0;
    line-height: 1.7;
    font-size: 0.9rem;
}

.content-list-item {
    margin-bottom: 0.7rem;
}

.modal-image-container {
    width: 58%;
    position: relative;
    overflow: hidden;
}

.modal-detail-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.modal-image-container:hover .modal-detail-img {
    transform: scale(1.02);
}

.nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 45px;
    height: 45px;
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(59, 130, 246, 0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3b82f6;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
}

.prev-arrow {
    left: 1.2rem;
}

.next-arrow {
    right: 1.2rem;
}

.modal-close-btn {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    width: 38px;
    height: 38px;
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(59, 130, 246, 0.4);
    border-radius: 50%;
    color: #94a3b8;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 20;
}

.modal-close-btn:hover {
    color: #3b82f6;
    background: #1e293b;
}

/* 响应式适配 */
@media (max-width: 900px) {
    .modal-content {
        flex-direction: column;
        height: auto;
        max-height: 90vh;
    }

    .modal-textarea,
    .modal-image-container {
        width: 100%;
    }

    .modal-textarea {
        max-height: 45vh;
        padding: 2.5rem 1.5rem 1.5rem;
    }

    .modal-image-container {
        height: 35vh;
    }
}
</style>
