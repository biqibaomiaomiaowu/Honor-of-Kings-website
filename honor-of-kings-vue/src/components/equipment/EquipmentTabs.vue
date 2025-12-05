<template>
  <div class="equipment-tabs">
    <div 
      v-for="category in categories" 
      :key="category.key"
      class="tab-item"
      :class="{ active: currentCategory === category.key }"
      @click="$emit('update:currentCategory', category.key)"
    >
      {{ category.label }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentCategory: {
    type: String,
    required: true
  }
});

defineEmits(['update:currentCategory']);

const categories = [
  { key: 'attack', label: '攻击' },
  { key: 'defense', label: '防御' },
  { key: 'magic', label: '法术' },
  { key: 'boots', label: '移动' },
  { key: 'jungle', label: '打野' },
  { key: 'support', label: '游走' }
];
</script>

<style scoped>
.equipment-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.tab-item {
  padding: 10px 30px;
  cursor: pointer;
  color: #8a8a8a;
  font-size: 16px;
  transition: all 0.3s ease;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
}

.tab-item:hover {
  color: #d4af37;
  background: rgba(212, 175, 55, 0.1);
}

.tab-item.active {
  color: #111;
  background: linear-gradient(45deg, #d4af37, #f2d06b);
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}
</style>
