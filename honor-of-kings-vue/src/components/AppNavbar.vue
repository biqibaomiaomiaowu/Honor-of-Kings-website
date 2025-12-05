<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="logo">
        <!-- 注意路径已改为 /imgs 开头 -->
        <img src="/imgs/index/logo.webp" alt="Logo">
      </RouterLink>
      <ul class="nav-links">
        <li><RouterLink to="/">首页</RouterLink></li>
        <li><RouterLink to="/heroes">英雄介绍</RouterLink></li>
        <li><RouterLink to="/equipment">装备介绍</RouterLink></li>
        <li><RouterLink to="/maps">地图介绍</RouterLink></li>
        <li><RouterLink to="/world">世界观</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 20, 25, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 40px; /* 根据实际情况调整 */
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

/* Vue Router 激活状态样式 */
.nav-links a:hover,
.nav-links a.router-link-active {
  color: #ffd700;
  transform: translateY(-2px);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #ffd700;
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>