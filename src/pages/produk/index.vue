<template>
  <div class="p-4">
    <h1 class="text-4xl font-bold ml-4 mb-3 mt-3">Produk Page</h1>
    <a href="/produk/new">
      <button class="btn btn-md btn-secondary ml-3 my-3">Tambah barang baru</button></a
    >
    <div class="overflow-x-auto">
      <table class="table table-xs ml-3 mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Barang</th>
            <th>Deskripsi</th>
            <th>SKU</th>
            <th>Ukuran</th>
            <th>Berat</th>
            <th>Zone</th>
            <th>Stok</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.sku }}</td>
            <td>{{ item.size }}</td>
            <td>{{ item.weight }}</td>
            <td>{{ item.zone }}</td>
            <td>{{ item.stock }}</td>
            <td>
              <a :href="`/produk/detail?id=${item.id}`">
                <button class="btn btn-bordered btn-sm">Detail</button></a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchProducts } from '@/queries/product'

const products = ref([])

const fetchProductData = async () => {
  try {
    const productsRes = await fetchProducts()
    products.value = productsRes
  } catch (error) {
    console.error(error.toString())
    alert('Failed to fetch products. Please try again later.')
    // Handle error as needed
  }
}

onMounted(fetchProductData)
</script>
