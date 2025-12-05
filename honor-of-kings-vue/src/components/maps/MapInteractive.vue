<script setup>
import { ref, reactive } from 'vue';
import { mapsData } from '../../data/mapsData';
import MapDetailModal from './MapDetailModal.vue';

const currentMap = ref(mapsData[0]);
const mapViewer = ref(null);
const showModal = ref(false);
const selectedHotspot = ref({});
const lightEffectVisible = ref(false);
const lightEffectStyle = reactive({
    left: '0px',
    top: '0px'
});

const handleMapMouseMove = (e) => {
    if (!mapViewer.value) return;

    const rect = mapViewer.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    lightEffectStyle.left = `${x - 60}px`;
    lightEffectStyle.top = `${y - 60}px`;
    lightEffectVisible.value = true;
};

const removeLightEffect = () => {
    lightEffectVisible.value = false;
};

const showHotspotDetail = (hotspot) => {
    selectedHotspot.value = hotspot;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

const navigateHotspot = (direction) => {
    const hotspots = currentMap.value.hotspots;
    if (!hotspots.length || !selectedHotspot.value.id) return;

    const currentIndex = hotspots.findIndex(h => h.id === selectedHotspot.value.id);
    // 计算新索引（循环）
    let newIndex = (currentIndex + direction + hotspots.length) % hotspots.length;
    selectedHotspot.value = hotspots[newIndex];
};
</script>

<template>
  <section class="full-map-section">
    <div 
      class="map-viewer" 
      ref="mapViewer"
      @mousemove="handleMapMouseMove"
      @mouseleave="removeLightEffect"
    >
      <img :src="currentMap.image" :alt="currentMap.name" class="map-image">
      
      <div class="map-overlay"></div>
      
      <!-- 光效 -->
      <div 
        v-show="lightEffectVisible" 
        class="light-effect"
        :style="lightEffectStyle"
      ></div>

      <!-- 热点 -->
      <div 
        v-for="hotspot in currentMap.hotspots" 
        :key="hotspot.id"
        class="map-hotspot"
        :style="{ left: hotspot.x + '%', top: hotspot.y + '%' }"
        @click="showHotspotDetail(hotspot)"
      >
        <img :src="hotspot.customImg" :alt="hotspot.title" class="hotspot-img">
      </div>
    </div>

    <MapDetailModal 
      :show="showModal" 
      :hotspot="selectedHotspot"
      @close="closeModal"
      @prev="navigateHotspot(-1)"
      @next="navigateHotspot(1)"
    />
  </section>
</template>

<style scoped>
.full-map-section {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 95vh;
    background: rgba(15, 20, 25, 0.8);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    margin-bottom: 3rem;
    border: 1px solid rgba(255, 215, 0, 0.2);
}

.map-viewer {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: crosshair;
}

.map-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: transparent;
    object-position: center;
}

.map-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    pointer-events: none;
}

.map-hotspot {
    position: absolute;
    width: 45px;
    height: 45px;
    background: rgba(15, 23, 42, 0.7);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    animation: pulse 2s infinite;
    pointer-events: auto;
    z-index: 10;
    transform: translate(-50%, -50%); /* Center the hotspot on the coordinates */
}

.hotspot-img {
    width: 90%;
    height: 90%;
    object-fit: contain;
    display: block;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 #ffd700;
    }

    70% {
        box-shadow: 0 0 0 12px rgba(255, 215, 0, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
    }
}

.map-hotspot:hover {
    transform: translate(-50%, -50%) scale(1.3);
    background: rgba(15, 23, 42, 0.7);
}

.light-effect {
    position: absolute;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    transition: opacity 0.1s ease; /* Only transition opacity, position updates instantly */
    z-index: 5;
}
</style>
