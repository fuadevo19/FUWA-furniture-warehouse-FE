<script>
import { useRoute } from 'vue-router'
import { getProdukDetail } from '@/queries/product'

export default {
  data() {
    return {
      data: []
    }
  },
  async mounted() {
    const route = useRoute()
    const id = route.query?.id
    const productRes = await getProdukDetail(id)
    this.data = productRes.data
  },
}
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold text-blue-500 mb-3 mt-1 text-center">Produk Page</h1>
    
    <!-- Input form -->
    <div>
      <h2 class="text-xl ml-6 mt-10">Nama Barang</h2>
      <input type="text" placeholder="Type here" class="input input-bordered w-1/2 ml-6 mt-2" />
    </div>

    <!-- Deskripsi, SKU, Ukuran, Berat, Zone, Stok inputs -->
    <div>
      <h2 class="text-xl ml-6 mt-6">Deskripsi Barang</h2>
      <input type="text" placeholder="Type here" class="input input-bordered w-1/2 ml-6 mt-2" />
    </div>

    <div>
      <h2 class="text-xl ml-6 mt-6">SKU</h2>
      <input type="text" placeholder="Type here" class="input input-bordered w-1/2 ml-6 mt-2" />
    </div>

    <div>
      <h2 class="text-xl ml-6 mt-6">Ukuran</h2>
      <input type="text" placeholder="Type here" class="input input-bordered w-1/2 ml-6 mt-2" />
    </div>

    <div>
      <h2 class="text-xl ml-6 mt-6">Berat</h2>
      <input type="text" placeholder="Type here" class="input input-bordered w-1/2 ml-6 mt-2" />
    </div>

    <div>
      <h2 class="text-xl ml-6 mt-6">Zone</h2>
      <input type="text" placeholder="Type here" class="input input-bordered w-1/2 ml-6 mt-2" />
    </div>

    <div>
      <h2 class="text-xl ml-6 mt-6">Stok</h2>
      <input type="text" placeholder="Type here" class="input input-bordered w-1/2 ml-6 mt-2" />
    </div>

    <div class="mt-6">
      <button class="btn btn-info float-right mr-20 w-64 mt-2">SIMPAN</button>
    </div>
      
  </div>
</template>
