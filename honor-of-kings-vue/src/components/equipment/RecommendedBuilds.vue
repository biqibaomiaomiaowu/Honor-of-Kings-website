<template>
  <div class="recommended-builds">
    <h2 class="section-title">大神出装推荐</h2>
    <div class="builds-container">
      <div 
        v-for="(build, index) in builds" 
        :key="index"
        class="build-card"
      >
        <div class="hero-info">
          <div class="hero-avatar-wrapper">
            <img :src="build.heroAvatar" :alt="build.hero" class="hero-avatar">
          </div>
          <div class="hero-name">{{ build.hero }}</div>
        </div>
        
        <div class="build-content">
          <div class="items-row">
            <div 
              v-for="(item, i) in build.items" 
              :key="i"
              class="build-item"
            >
              <img :src="item" alt="item" class="item-icon">
            </div>
          </div>
          <div class="build-desc">{{ build.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  builds: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.recommended-builds {
  margin-top: 50px;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  color: #d4af37;
  font-size: 28px;
  margin-bottom: 30px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #d4af37;
  margin: 10px auto 0;
  border-radius: 2px;
}

.builds-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.build-card {
  background: rgba(20, 20, 35, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
}

.build-card:hover {
  transform: translateY(-5px);
  background: rgba(30, 30, 50, 0.8);
  border-color: #d4af37;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.hero-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 80px;
}

.hero-avatar-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #d4af37;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
}

.hero-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-name {
  color: #fff;
  font-weight: bold;
  font-size: 14px;
}

.build-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.items-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.build-item {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #444;
}

.item-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.build-desc {
  color: #aaa;
  font-size: 13px;
  line-height: 1.5;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 8px;
}
</style>
