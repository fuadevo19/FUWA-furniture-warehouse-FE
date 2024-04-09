import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/Homepage.vue'
import Example from '@/pages/Example.vue'
import Login from '@/pages/Login.vue'
import PageProduk from '@/pages/PageProduk.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/produk',
      name: 'produk',
      component: PageProduk
    }
  ]
})
// router.beforeEach((to) => {
//   const isAuthenticated = localStorage.getItem('token')

//   if (
//     !isAuthenticated &&
//     // ❗️ Avoid an infinite redirect
//     to.path !== '/login'
//   ) {
//     // redirect the user to the login page
//     return { name: '/login' }
//   }
// })

export default router
