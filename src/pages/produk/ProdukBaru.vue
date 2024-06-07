<script>
import { createProduct } from '@/queries/product'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  data() {
    return {
      data: {}
    }
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault()

      try {
        await createProduct(this.data)

        toast('Product created successfully', {
          type: 'success'
        })
        window.location.replace('/produk')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<template>
  <form @submit="handleSubmit">
    <h1 class="font-bold text-blue-500 mb-3 mt-1 text-center text-2xl">Produk Baru</h1>

    <!-- Input form -->
    <div>
      <h2 class="ml-6 mt-10">Nama Barang</h2>
      <input
        required
        v-model="data.name"
        type="text"
        class="input input-sm input-bordered w-1/2 ml-6 mt-2"
      />
    </div>

    <!-- Deskripsi, SKU, Ukuran, Berat, Zone, Stok inputs -->
    <div>
      <h2 class="ml-6 mt-6">Deskripsi Barang</h2>
      <input
        required
        v-model="data.description"
        type="text"
        class="input input-sm input-bordered w-1/2 ml-6 mt-2"
      />
    </div>

    <div>
      <h2 class="ml-6 mt-6">SKU</h2>
      <input
        required
        v-model="data.sku"
        type="text"
        class="input input-sm input-bordered w-1/2 ml-6 mt-2"
      />
    </div>

    <div>
      <h2 class="ml-6 mt-6">Ukuran</h2>
      <input
        required
        v-model="data.size"
        type="text"
        class="input input-sm input-bordered w-1/2 ml-6 mt-2"
      />
    </div>

    <div>
      <h2 class="ml-6 mt-6">Berat</h2>
      <input
        required
        v-model="data.weight"
        type="text"
        class="input input-sm input-bordered w-1/2 ml-6 mt-2"
      />
    </div>

    <div>
      <h2 class="ml-6 mt-6">Zone</h2>
      <input
        required
        v-model="data.zone"
        type="text"
        class="input input-sm input-bordered w-1/2 ml-6 mt-2"
      />
    </div>

    <div class="mt-6">
      <button class="btn btn-info float-right mr-20 w-64 mt-2">SIMPAN</button>
    </div>
  </form>
</template>
