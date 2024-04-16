import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/Homepage.vue'
import Login from '@/pages/Login.vue'
import PageProduk from '@/pages/PageProduk.vue'
import BarangMasuk from '@/pages/barang-masuk/BarangMasuk.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/produk',
      name: 'produk',
      component: PageProduk
    },
    {
      path: '/barang-masuk',
      name: 'barang-masuk',
      component: BarangMasuk
    },
    {
      path: '/',
      name: 'home',
      component: Homepage
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
