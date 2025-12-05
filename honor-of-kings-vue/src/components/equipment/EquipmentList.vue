<template>
  <div class="equipment-list">
    <div 
      v-for="item in equipment" 
      :key="item.id"
      class="equipment-card"
      @click="$emit('select', item)"
    >
      <div class="card-inner">
        <div class="equipment-icon-wrapper">
          <img :src="getImageUrl(item.icon)" :alt="item.name" class="equipment-icon">
          <div class="equipment-price">{{ item.price }}</div>
        </div>
        <div class="equipment-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  equipment: {
    type: Array,
    required: true
  }
});

defineEmits(['select']);

const getImageUrl = (path) => {
  // 处理本地路径和外部 URL
  if (path.startsWith('http')) {
    return path;
  }
  // 对于本地路径，我们需要调整路径使其相对于 public 或使用 require
  // 由于数据中有 'imgs/equipment/...'，且我们在 Vue 中，
  // 如果图片在 public/imgs/equipment 中，我们可以直接使用路径
  // 假设应用从根目录提供服务。
  return '/' + path;
};
</script>

<style scoped>
.equipment-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  padding: 20px;
  animation: fadeIn 0.5s ease-out;
}

.equipment-card {
  background: rgba(20, 20, 35, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.equipment-card:hover {
  transform: translateY(-5px);
  background: rgba(30, 30, 50, 0.8);
  border-color: #d4af37;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(212, 175, 55, 0.2);
}

.card-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.equipment-icon-wrapper {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #333;
}

.equipment-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.equipment-card:hover .equipment-icon {
  transform: scale(1.1);
}

.equipment-price {
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #ffd700;
  font-size: 12px;
  padding: 2px 4px;
  border-top-left-radius: 4px;
}

.equipment-name {
  color: #ccc;
  font-size: 13px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.equipment-card:hover .equipment-name {
  color: #d4af37;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
