import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/Homepage.vue'
import Login from '@/pages/Login.vue'
import PageProduk from '@/pages/PageProduk.vue'
import BarangMasuk from '@/pages/barang-masuk/BarangMasuk.vue'
import BarangMasukBaru from '@/pages/barang-masuk/BarangMasukBaru.vue'
import Detail from '@/pages/barang-masuk/Detail.vue'
import DetailProduk from '@/pages/DetailProduk.vue'

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
      path: '/barang-masuk/detail',
      name: 'detail-barang-masuk',
      component: Detail
    },
    {
      path: '/barang-masuk/new',
      name: 'barang-masuk-baru',
      component: BarangMasukBaru
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
    }
  ]
})
router.beforeEach((to) => {
  const isAuthenticated = localStorage.getItem('token')

  if (
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.path !== '/login'
  ) {
    // redirect the user to the login page
    return { name: 'login' }
  }
})

export default router
