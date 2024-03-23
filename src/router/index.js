import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/Homepage.vue'
import Example from '@/pages/Example.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    }
  ]
})

export default router
