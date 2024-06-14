<script>
import { useRoute } from 'vue-router'
import { format } from 'date-fns'
import { fetchAnalytics } from '@/queries/product'

export default {
  data() {
    return {
      data: []
    }
  },
  async mounted() {
    const analyticsRes = await fetchAnalytics()
    this.data = analyticsRes
  }
}
</script>
<template>
  <div class="bg-white min-h-full p-8 space-y-5">
    <h1 class="text-2xl font-bold">Product Overview</h1>
    <ul class="flex gap-6">
      <li class="bg-primary p-7 text-center w-fit rounded-xl">
        Barang Tersedia <br />
        <span class="font-bold text-4xl">{{ data?.barang_tersedia }}</span>
      </li>
      <li class="bg-primary p-7 text-center w-fit rounded-xl">
        Barang Hampir Habis <br />
        <span class="font-bold text-4xl">{{ data?.barang_hampir_habis }}</span>
      </li>
      <li class="bg-primary p-7 text-center w-fit rounded-xl">
        Barang Habis <br />
        <span class="font-bold text-4xl">{{ data?.barang_habis }}</span>
      </li>
    </ul>
    <h1 class="text-2xl font-bold">Quick Action</h1>
    <div class="flex gap-3 flex-wrap">
      <a href="/barang-masuk"><button class="btn bg-blue-200">Barang Masuk</button></a>
      <a href="/barang-keluar"><button class="btn bg-cyan-200">Barang Keluar</button></a>
      <a href="/produk"><button class="btn bg-purple-200">Product</button></a>
    </div>
  </div>
</template>
