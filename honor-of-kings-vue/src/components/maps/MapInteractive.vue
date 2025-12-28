<script setup>
import { ref } from 'vue';
import { mapsData } from '../../data/mapsData';
import MapDetailModal from './MapDetailModal.vue';

const currentMap = ref(mapsData[0]);
const mapImage = ref(null);
const mapAspectRatio = ref('');
const showModal = ref(false);
const selectedHotspot = ref({});

const handleMapImageLoad = () => {
    const img = mapImage.value;
    if (!img || !img.naturalWidth || !img.naturalHeight) return;
    mapAspectRatio.value = String(img.naturalWidth / img.naturalHeight);
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
    let newIndex = (currentIndex + direction + hotspots.length) % hotspots.length;
    selectedHotspot.value = hotspots[newIndex];
};
</script>

<template>
        <section class="full-map-section">
                <div class="map-viewer" :style="mapAspectRatio ? { aspectRatio: mapAspectRatio } : null">
            <img
                ref="mapImage"
                :src="currentMap.image"
                :alt="currentMap.name"
                class="map-image"
                @load="handleMapImageLoad"
            >
      
      <div class="map-overlay"></div>

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
    width: 100%;
    height: auto;
    background: rgba(15, 20, 25, 0.8);
    border-radius: 14px;
    overflow: hidden;
    position: relative;
    margin-bottom: 3rem;
    border: 1px solid rgba(255, 215, 0, 0.2);
}

.map-viewer {
    width: 100%;
    height: auto;
    position: relative;
    cursor: default;
}

.map-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: rgba(0, 0, 0, 0.25);
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
    width: 36px;
    height: 36px;
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

</style>
