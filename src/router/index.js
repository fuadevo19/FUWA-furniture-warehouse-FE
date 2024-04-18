import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/homepage/Index.vue'
import Login from '@/pages/Login.vue'
import PageProduk from '@/pages/PageProduk.vue'
import DetailProduk from '@/pages/DetailProduk.vue'
import BarangKeluar from '@/pages/barang-keluar/Index.vue'

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
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/detailproduk',
      name: 'detailproduk',
      component: DetailProduk
    },
    {
      path: '/barangkeluar',
      name: 'barangkeluar',
      component: BarangKeluar
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
