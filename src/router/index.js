import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/homepage/index.vue'
import Login from '@/pages/Login.vue'
import BarangMasuk from '@/pages/barang-masuk/BarangMasuk.vue'
import BarangMasukBaru from '@/pages/barang-masuk/BarangMasukBaru.vue'
import BarangKeluar from '@/pages/barang-keluar/index.vue'
import BarangKeluarBaru from '@/pages/barang-keluar/BarangKeluarBaru.vue'
import BarangKeluarBaruDetail from '@/pages/barang-keluar/BarangKeluarBaruDetail.vue'
import BarangKeluarDetail from '@/pages/barang-keluar/BarangKeluarDetail.vue'
import PrintLabel from '@/pages/barang-keluar/PrintLabel.vue'
import BarangKeluarSuratJalan from '@/pages/barang-keluar/SuratJalan.vue'
import Example from '@/pages/Example.vue'
import DetailProduk from '@/pages/produk/DetailProduk.vue'
import Produk from '@/pages/produk/index.vue'
import Detail from '@/pages/barang-masuk/Detail.vue'
import ProdukBaru from '@/pages/produk/ProdukBaru.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/example',
      name: 'example',
      component: Example
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
      path: '/produk',
      name: 'produk',
      component: Produk
    },
    {
      path: '/produk/detail',
      name: 'detailproduk',
      component: DetailProduk
    },
    {
      path: '/produk/new',
      name: 'produkBaru',
      component: ProdukBaru
    },
    {
      path: '/barang-keluar',
      name: 'barangkeluar',
      component: BarangKeluar
    },
    {
      path: '/barang-keluar/print-label',
      name: 'printlabel',
      component: PrintLabel
    },
    {
      path: '/barang-keluar/new',
      name: 'barangkeluarbaru',
      component: BarangKeluarBaru
    },
    {
      path: '/barang-keluar/newdetail',
      name: 'barangkeluarbarudetail',
      component: BarangKeluarBaruDetail
    },
    {
      path: '/barang-keluar/detail',
      name: 'barangkeluardetail',
      component: BarangKeluarDetail
    },
    {
      path: '/barang-keluar/surat-jalan',
      name: 'barangkeluarsuratjalan',
      component: BarangKeluarSuratJalan
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
