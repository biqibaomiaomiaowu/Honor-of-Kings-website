<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal" @click.self="handleClose">
      <div class="modal-content">
        <button class="modal-close-btn" @click="handleClose">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="modal-global-title">地图介绍</div>

        <div class="modal-textarea">
          <div class="modal-textarea-header">
            <div class="modal-hotspot-title">
              {{ hotspot.subItems && hotspot.subItems.length > 1 ? processedHotspot.title : hotspot.title }}
              <span class="modal-type-tag">
                {{ hotspot.subItems && hotspot.subItems.length > 1 ? processedHotspot.tag1 : (hotspot.type || '') }}
              </span>
              <span v-if="processedHotspot.tag2" class="modal-type-tag">
                {{ processedHotspot.tag2 }}
              </span>
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
          </div>

          <div class="modal-textarea-body">
            <div class="modal-tab-content">
              <div v-if="activeTab === 'brief'">
                <div v-if="processedHotspot?.brief?.description && processedHotspot.brief.description.length" class="content-section">
                  <div class="content-section-label">说明</div>
                  <ul class="content-list">
                    <li v-for="(item, index) in processedHotspot.brief.description" :key="index" class="content-list-item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div v-if="processedHotspot?.brief?.defeatBenefits && processedHotspot.brief.defeatBenefits.length" class="content-section">
                  <div class="content-section-label">击败收益</div>
                  <ul class="content-list">
                    <li v-for="(item, index) in processedHotspot.brief.defeatBenefits" :key="index" class="content-list-item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div v-if="!processedHotspot?.brief?.description.length && !processedHotspot?.brief?.defeatBenefits.length" class="content-empty">
                  暂无简略说明信息
                </div>
              </div>

              <div v-if="activeTab === 'detail'">
                <div v-if="processedHotspot?.detail?.description && processedHotspot.detail.description.length" class="content-section">
                  <div class="content-section-label">说明</div>
                  <ul class="content-list">
                    <li v-for="(item, index) in processedHotspot.detail.description" :key="index" class="content-list-item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div v-if="processedHotspot?.detail?.generalFeatures && processedHotspot.detail.generalFeatures.length" class="content-section">
                  <div class="content-section-label">通用特性</div>
                  <ul class="content-list">
                    <li v-for="(item, index) in processedHotspot.detail.generalFeatures" :key="index" class="content-list-item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div v-if="processedHotspot?.detail?.dynamicAttributes && processedHotspot.detail.dynamicAttributes.length" class="content-section">
                  <div class="content-section-label">动态属性</div>
                  <ul class="content-list">
                    <li v-for="(item, index) in processedHotspot.detail.dynamicAttributes" :key="index" class="content-list-item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div v-if="processedHotspot?.detail?.defeatBenefits && processedHotspot.detail.defeatBenefits.length" class="content-section">
                  <div class="content-section-label">击败收益</div>
                  <ul class="content-list">
                    <li v-for="(item, index) in processedHotspot.detail.defeatBenefits" :key="index" class="content-list-item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div v-if="processedHotspot?.detail?.shadowPioneerEffects && processedHotspot.detail.shadowPioneerEffects.length" class="content-section">
                  <div class="content-section-label">暗影先锋效果</div>
                  <ul class="content-list">
                    <li v-for="(item, index) in processedHotspot.detail.shadowPioneerEffects" :key="index" class="content-list-item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div v-if="processedHotspot?.detail?.otherBenefits && processedHotspot.detail.otherBenefits.length" class="content-section">
                  <div class="content-section-label">其他收益</div>
                  <ul class="content-list">
                    <li v-for="(item, index) in processedHotspot.detail.otherBenefits" :key="index" class="content-list-item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div v-if="processedHotspot?.detail?.detrimentalEffects && processedHotspot.detail.detrimentalEffects.length" class="content-section">
                  <div class="content-section-label">减益效果</div>
                  <ul class="content-list">
                    <li v-for="(item, index) in processedHotspot.detail.detrimentalEffects" :key="index" class="content-list-item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>

              <div v-if="activeTab === 'scenery'">
                <div v-if="processedHotspot?.scenery?.canyonScenery && processedHotspot.scenery.canyonScenery.length" class="content-section">
                  <div class="content-section-label">峡谷风物志</div>
                  <ul class="content-list">
                    <li v-for="(item, index) in processedHotspot.scenery.canyonScenery" :key="index" class="content-list-item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div v-else class="content-empty">暂无峡谷风物志信息</div>
              </div>
            </div>

            <div v-if="hotspot.subItems && hotspot.subItems.length > 1" class="sub-switch">
              <button 
                v-for="(item, idx) in hotspot.subItems" 
                :key="idx"
                :class="{ active: currentSubIdx === idx }"
                @click="switchSubItem(idx)"
              >
                {{ item.title }}
              </button>
            </div>
          </div>
        </div>

        <div class="modal-image-container">
          <img ref="detailImage" :src="processedHotspot.detailImage" :alt="processedHotspot.title" class="modal-detail-img">
          
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

<script setup>
import { ref, watch, computed } from 'vue';
import anime from 'animejs';

const props = defineProps({
  show: Boolean,
  hotspot: Object
});

const emit = defineEmits(['close', 'prev', 'next']);

const activeTab = ref('brief');
const detailImage = ref(null);
const currentSubIdx = ref(0);

const currentSubItem = computed(() => {
  if (props.hotspot?.subItems && props.hotspot.subItems.length) {
    return props.hotspot.subItems[currentSubIdx.value] || {};
  } else {
    return props.hotspot || {};
  }
});

const switchSubItem = (idx) => {
  currentSubIdx.value = idx;
  if (detailImage.value) {
    anime({
      targets: detailImage.value,
      opacity: [0, 1],
      duration: 300,
      easing: 'easeOutQuad'
    });
  }
};

const processedHotspot = computed(() => {
  const base = { ...currentSubItem.value };
  
  base.tag1 = base.type || '';
  base.tag2 = base.tag2 || '';

  if (base?.brief?.description) {
    base.brief.description = typeof base.brief.description === 'string' 
      ? [base.brief.description] 
      : (Array.isArray(base.brief.description) ? base.brief.description : []);
  } else {
    base.brief = { ...base.brief, description: [] };
  }

  if (base?.brief?.defeatBenefits) {
    base.brief.defeatBenefits = typeof base.brief.defeatBenefits === 'string' 
      ? [base.brief.defeatBenefits] 
      : (Array.isArray(base.brief.defeatBenefits) ? base.brief.defeatBenefits : []);
  } else {
    base.brief = { ...base.brief, defeatBenefits: [] };
  }

  if (base?.detail?.description) {
    base.detail.description = typeof base.detail.description === 'string' 
      ? [base.detail.description] 
      : (Array.isArray(base.detail.description) ? base.detail.description : []);
  } else {
    base.detail = { ...base.detail, description: [] };
  }

  if (base?.detail?.generalFeatures) {
    base.detail.generalFeatures = Array.isArray(base.detail.generalFeatures) 
      ? base.detail.generalFeatures 
      : [];
  } else {
    base.detail = { ...base.detail, generalFeatures: [] };
  }

  if (base?.detail?.dynamicAttributes) {
    base.detail.dynamicAttributes = typeof base.detail.dynamicAttributes === 'string' 
      ? [base.detail.dynamicAttributes] 
      : (Array.isArray(base.detail.dynamicAttributes) ? base.detail.dynamicAttributes : []);
  } else {
    base.detail = { ...base.detail, dynamicAttributes: [] };
  }

  if (base?.detail?.defeatBenefits) {
    base.detail.defeatBenefits = Array.isArray(base.detail.defeatBenefits) 
      ? base.detail.defeatBenefits 
      : [];
  } else {
    base.detail = { ...base.detail, defeatBenefits: [] };
  }

  if (base?.detail?.shadowPioneerEffects) {
    base.detail.shadowPioneerEffects = typeof base.detail.shadowPioneerEffects === 'string' 
      ? [base.detail.shadowPioneerEffects] 
      : (Array.isArray(base.detail.shadowPioneerEffects) ? base.detail.shadowPioneerEffects : []);
  } else {
    base.detail = { ...base.detail, shadowPioneerEffects: [] };
  }

  if (base?.detail?.otherBenefits) {
    base.detail.otherBenefits = Array.isArray(base.detail.otherBenefits) 
      ? base.detail.otherBenefits 
      : [];
  } else {
    base.detail = { ...base.detail, otherBenefits: [] };
  }

  if (base?.detail?.detrimentalEffects) {
    base.detail.detrimentalEffects = typeof base.detail.detrimentalEffects === 'string' 
      ? [base.detail.detrimentalEffects] 
      : (Array.isArray(base.detail.detrimentalEffects) ? base.detail.detrimentalEffects : []);
  } else {
    base.detail = { ...base.detail, detrimentalEffects: [] };
  }

  if (base?.scenery?.canyonScenery) {
    base.scenery.canyonScenery = typeof base.scenery.canyonScenery === 'string' 
      ? [base.scenery.canyonScenery] 
      : (Array.isArray(base.scenery.canyonScenery) ? base.scenery.canyonScenery : []);
  } else {
    base.scenery = { ...base.scenery, canyonScenery: [] };
  }

  base.title = base.title || '';
  base.detailImage = base.detailImage || '';

  return base;
});

watch(() => props.hotspot, () => {
  activeTab.value = 'brief';
  currentSubIdx.value = 0;
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
  { key: 'brief', label: '简略' },
  { key: 'detail', label: '详细' },
  { key: 'scenery', label: '风物志' }
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
    padding: 0 2rem;
    position: relative;
    background: rgba(15, 23, 42, 0.8);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.modal-textarea-header {
    padding-top: 2.8rem;
    position: sticky;
    top: 0;
    background: rgba(15, 23, 42, 0.8);
    z-index: 1;
}

.modal-textarea-body {
    flex: 1;
    overflow-y: auto;
    padding-bottom: 2rem;
}

.sub-switch {
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(59, 130, 246, 0.2);
}
.sub-switch button {
    padding: 0.4rem 0.8rem;
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 4px;
    color: #94a3b8;
    cursor: pointer;
    transition: all 0.3s ease;
}
.sub-switch button.active {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
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
    margin-left: 0.5rem;
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

.content-section {
    margin-bottom: 1.5rem;
}
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
    padding-left: 0;
    list-style: none;
    color: #e2e8f0;
    line-height: 1.7;
    font-size: 0.9rem;
}

.content-list-item {
    margin-bottom: 0.7rem;
}

.content-empty {
    color: #94a3b8;
    font-size: 0.9rem;
    text-align: center;
    padding: 2rem 0;
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
        padding: 0 1.5rem;
    }

    .modal-textarea-header {
        padding-top: 2.5rem;
    }

    .modal-textarea-body {
        padding-bottom: 1.5rem;
    }

    .modal-image-container {
        height: 35vh;
    }
}
</style>