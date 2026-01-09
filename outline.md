# 王者荣耀官网重构项目 (Vue 3) - 项目大纲

## 1. 项目概述
本项目是基于 **Vue 3** 框架重构的王者荣耀内容展示网站。项目采用现代前端工程化开发模式，整合了粒子特效、交互式地图、动态数据展示等功能，旨在提供沉浸式的视觉体验和流畅的移动端适配。

## 2. 技术栈
- **核心框架**: Vue 3 (Composition API, <script setup>)
- **路由管理**: Vue Router 4
- **构建工具**: Vue CLI (Webpack)
- **UI 组件/库**:
  - @tsparticles/vue3: 全局星空粒子背景系统
  - @splidejs/vue-splide: 响应式轮播图组件
  - Canvas API: 自定义粒子文字汇聚特效 (ParticleText)
- **样式**: CSS3 (Flexbox/Grid), 响应式设计 (Media Queries/CSS Variables)

## 3. 目录结构与页面规划

### 3.1 首页 (Home)
- **路径**: /
- **核心组件**:
  - HomeHeroSection: 包含粒子文字标题 (ParticleText.vue) 和全屏视觉引导。
  - HomeFeaturedHeroes: 热门英雄轮播展示。
  - HomeGameFeatures: 游戏特色介绍卡片。
  - **特效**: 全局背景粒子 (ParticleBackground.vue)。

### 3.2 英雄介绍 (Heroes)
- **路径**: /heroes
- **功能**:
  - **筛选器 (HeroesFilter)**: 支持按职业定位（坦克、法师、刺客等）筛选英雄。
  - **英雄列表 (HeroesList)**: 响应式网格展示英雄头像与名称，支持 Hover 放大效果。
  - **详情弹窗 (HeroDetailModal)**: 点击查看英雄详细数据、背景故事、技能介绍。
  - **页脚**: 包含 AppFooter 组件。

### 3.3 游戏地图 (Maps)
- **路径**: /maps
- **功能**:
  - **交互式地图 (MapInteractive)**:
    - **统一交互逻辑**: 采用了PC与移动端统一的逻辑方案，所有尺寸屏幕均使用 contain 模式展示完整地图。
    - **自适应比例**: 使用 spect-ratio 基于图片自然宽高比自适应容器高度。
    - **热点交互**: 点击地图热点触发详情弹窗 (MapDetailModal)。
  - **地图模式 (MapModes)**: 5v5 王者峡谷、3v3 长平攻防战等模式卡片。
  - **战术策略 (MapStrategies)**: 基础分路介绍与战术教学。

### 3.4 装备图鉴 (Equipment)
- **路径**: /equipment
- **功能**:
  - **分类标签 (EquipmentTabs)**: 攻击、法术、防御、移动、打野、游走分类切换。
  - **装备列表 (EquipmentList)**: 密集图标矩阵展示。
  - **推荐出装 (RecommendedBuilds)**: 针对不同职业的预设出装方案。
  - **详情展示**: 装备属性值、合成路径与售价。
  - **交互优化**: 解决了图层遮挡问题，确保装备可点击交互。

### 3.5 世界观 (World)
- **路径**: /world
- **功能**:
  - **视觉引导**: 顶部大图与动态粒子标题。
  - **时间轴 (WorldTimeline)**: 运用 IntersectionObserver 实现的滚动渐现动画效果。
  - **阵营展示 (WorldFactions)**: 魏蜀吴、大唐、长安等主要势力介绍。
  - **关系网 (WorldRelationships)**: 英雄间的人物关系图谱。

## 4. 公共组件 (Shared Components)
- **导航栏 (AppNavbar)**:
  - **响应式**: PC 端顶部横向导航，移动端汉堡菜单 + 侧边折叠抽屉。
  - **样式**: 磨砂玻璃效果背景，路由激活高亮，SVG 图标适配。
- **页脚 (AppFooter)**: 包含版权信息、友情链接与社交媒体入口。
- **特效组件**:
  - ParticleText: 基于 Canvas 的像素级粒子汇聚文字动画，支持复杂的文字粒子化与重组效果。
  - ParticleBackground: 全局复用的星空粒子背景，支持鼠标排斥/连线效果。
  - ScrollToTop: 智能显隐的页面回到顶部按钮。

## 5. 适配与优化
- **移动端适配**:
  - 导航栏折叠菜单 (Hamburger Menu)。
  - 地图组件采用 contain 模式，确保全平台热点不偏移。
  - 列表页 (Grid) 响应式列数调整 (Mobile: 1-2列, Tablet: 3列, Desktop: 4+列)。
- **交互细节**:
  - ParticleText 修复了滚动后的坐标计算偏差问题（使用 offsetX/Y）。
  - 全局字体规范统一使用 Microsoft YaHei。
