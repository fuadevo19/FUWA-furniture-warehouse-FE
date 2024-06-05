<template>
  <div>
    <h1 class="text-4xl font-bold ml-4 mb-3 mt-3">Produk Page</h1>
    
    <div class="container flex justify-between">
      <!-- Bagian Statistik Produk -->
      <div class="flex space-x-5">
        <div
          class="container1 w-72 h-48 bg-yellow-500 flex flex-col justify-center items-center text-left text-4xl font-bold rounded-lg -mt-0 -mr-10 -ml-20"
        >
          <div class="number text-6xl font-bold">100</div>
          <div class="text1 text-lg mt-4 font-light">Stok Barang Tersedia</div>
        </div>

        <div
          class="container2 w-72 h-48 bg-yellow-500 flex flex-col justify-center items-center text-left text-5xl font-bold rounded-lg mt-0"
        >
          <div class="number text-6xl font-bold">10</div>
          <div class="text2 text-lg mt-3 font-light">Stok Barang Hampir Habis</div>
        </div>

        <div
          class="container3 w-72 h-48 bg-yellow-500 flex flex-col justify-center items-center text-left text-6xl font-bold rounded-lg mr-0 mt--5"
        >
          <div class="number text-6xl font-bold">1</div>
          <div class="text3 text-lg mt-1 font-light">Stok Barang Habis</div>
        </div>
      </div>
    </div>

    <select class="inline-flex cursor-pointer select select-bordered w-1/6 max-w-xs h-12 mt-4 ml-4">
      <option disabled selected>Search By</option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>

    <input
      type="text"
      :placeholder="products.length > 0 ? 'Search Products' : 'Loading...'"
      class="appearance-none h-12 px-4 text-sm ml-4 mt-3 border border-gray-300 rounded w-full max-w-screen-md"
    />

    <button class="btn ml-4 mt-2.5 w-32 bg-green-500 text-stone-100">Button</button>

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
        <tfoot>
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
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchProducts } from '@/queries/product';

const products = ref([]);

const fetchProductData = async () => {
  try {
    const productsRes = await fetchProducts();
    products.value = productsRes;
  } catch (error) {
    console.error(error.toString());
    alert('Failed to fetch products. Please try again later.');
    // Handle error as needed
  }
};

onMounted(fetchProductData);
</script>
