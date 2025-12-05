<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <!-- 这里的 main-content 类用于给内容留出导航栏的高度 -->
    <main class="main-content">
    <RouterView />
    </main>
  </div>
</template>

<style>
/* 全局样式 - 不加 scoped */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  background: linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0d1117 100%);
  color: #ffffff;
  min-height: 100vh;
}

/* 统一的内容容器样式 */
.main-content {
  margin-top: 80px; /* 对应 Navbar 高度 */
  min-height: calc(100vh - 80px);
}
</style>