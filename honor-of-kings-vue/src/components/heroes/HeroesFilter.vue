<script setup>
defineProps({
  searchQuery: {
    type: String,
    required: true
  },
  currentFilter: {
    type: String,
    required: true
  },
  roles: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['update:searchQuery', 'update:currentFilter']);

const updateSearch = (event) => {
  emit('update:searchQuery', event.target.value);
};

const changeFilter = (roleKey) => {
  emit('update:currentFilter', roleKey);
};
</script>

<template>
  <div class="search-filter-section">
    <div class="search-box">
      <input 
        type="text" 
        class="search-input" 
        placeholder="搜索英雄名称..." 
        :value="searchQuery"
        @input="updateSearch"
      >
    </div>
    <div class="filter-buttons">
      <button 
        v-for="role in roles" 
        :key="role.key"
        class="filter-btn" 
        :class="{ active: currentFilter === role.key }"
        @click="changeFilter(role.key)"
      >
        {{ role.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.search-filter-section {
    background: rgba(26, 35, 50, 0.8);
    padding: 2rem;
    border-radius: 15px;
    margin-bottom: 2rem;
    border: 1px solid rgba(255, 215, 0, 0.2);
}

.search-box {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.search-input {
    flex: 1;
    padding: 1rem;
    background: rgba(15, 20, 25, 0.8);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 8px;
    color: #ffffff;
    font-size: 1rem;
    min-width: 250px;
}

.search-input::placeholder {
    color: #888;
}

.search-input:focus {
    outline: none;
    border-color: #ffd700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.filter-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

.filter-btn {
    padding: 0.8rem 1.5rem;
    background: rgba(15, 20, 25, 0.8);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 25px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.filter-btn:hover, .filter-btn.active {
    background: #ffd700;
    color: #0f1419;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

@media (max-width: 768px) {
    .search-box {
        flex-direction: column;
    }
    
    .filter-buttons {
        justify-content: flex-start;
    }
}
</style>
