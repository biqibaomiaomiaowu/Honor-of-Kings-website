<script setup>
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const route = useRoute();

const closeMenu = () => {
  isMenuOpen.value = false;
};

watch(
  () => route.fullPath,
  () => {
    closeMenu();
  }
);
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="logo">
        <!-- 注意路径已改为 /imgs 开头 -->
        <img src="/imgs/index/logo.webp" alt="Logo" />
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-controls="mobile-nav"
        aria-label="打开导航菜单"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="menu-toggle-bar"></span>
        <span class="menu-toggle-bar"></span>
        <span class="menu-toggle-bar"></span>
      </button>

      <ul class="nav-links">
        <li><RouterLink to="/">首页</RouterLink></li>
        <li><RouterLink to="/heroes">英雄介绍</RouterLink></li>
        <li><RouterLink to="/equipment">装备介绍</RouterLink></li>
        <li><RouterLink to="/maps">地图介绍</RouterLink></li>
        <li><RouterLink to="/world">世界观</RouterLink></li>
      </ul>
    </div>

    <div v-if="isMenuOpen" class="menu-backdrop" @click="closeMenu" />

    <div id="mobile-nav" class="mobile-menu" :class="{ open: isMenuOpen }">
      <ul class="mobile-nav-links">
        <li><RouterLink to="/" @click="closeMenu">首页</RouterLink></li>
        <li><RouterLink to="/heroes" @click="closeMenu">英雄介绍</RouterLink></li>
        <li><RouterLink to="/equipment" @click="closeMenu">装备介绍</RouterLink></li>
        <li><RouterLink to="/maps" @click="closeMenu">地图介绍</RouterLink></li>
        <li><RouterLink to="/world" @click="closeMenu">世界观</RouterLink></li>
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
  padding: 1rem 1.25rem;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

.nav-container {
  max-width: 1900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.logo img {
  height: 70px;
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
  font-size: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
}

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

.menu-toggle {
  display: none;
  background: transparent;
  border: 1px solid rgba(255, 215, 0, 0.25);
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
  cursor: pointer;
}

.menu-toggle:focus {
  outline: none;
}

.menu-toggle-bar {
  display: block;
  width: 26px;
  height: 3px;
  background: #ffd700;
  margin: 5px 0;
}

.menu-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 999;
}

.mobile-menu {
  display: none;
}

.mobile-nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-nav-links a {
  display: block;
  padding: 0.9rem 1.2rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  border-top: 1px solid rgba(255, 215, 0, 0.12);
}

.mobile-nav-links a.router-link-active {
  color: #ffd700;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.9rem 1.5rem;
  }

  .logo img {
    height: 44px;
  }

  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-menu {
    display: block;
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: rgba(15, 20, 25, 0.98);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 215, 0, 0.2);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    z-index: 1000;
  }

  .mobile-menu.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
}
</style>