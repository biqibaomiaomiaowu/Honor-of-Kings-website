import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeroesView from '../views/HeroesView.vue'
import WorldView from '../views/WorldView.vue'
import MapsView from '../views/MapsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: HeroesView
    },
    {
      path: '/world',
      name: 'world',
      component: WorldView
    },
    {
      path: '/maps',
      name: 'maps',
      component: MapsView
    }
  ]
})

export default router