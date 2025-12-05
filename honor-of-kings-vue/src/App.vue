<script setup>
import { RouterView } from 'vue-router'

import AppNavbar from './components/AppNavbar.vue' 
</script>

<template>
  <div>
    <!-- 使用新的组件名 -->
    <AppNavbar /> 
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
  /* margin-top: 80px;  由各个页面自己控制，因为首页需要全屏 */
  min-height: 100vh;
}
</style>