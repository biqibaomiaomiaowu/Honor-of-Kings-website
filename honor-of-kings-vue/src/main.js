import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入路由配置
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

const app = createApp(App)

app.use(router) // 使用路由
app.use(Particles, {
  init: async engine => {
    await loadSlim(engine);
  },
});

app.mount('#app')