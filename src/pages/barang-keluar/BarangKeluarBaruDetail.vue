<template>
  <div class="bg-white min-h-full px-9">
    <div class="flex justify-between items-center md:my-10">
      <h1 class="text-2xl font-semibold text-secondary">Masukkan List Barang</h1>
      <h4>ID : IB00001</h4>
    </div>

    <section class="flex justify-between items-center">
      <div>
        <h2 class="font-bold text-lg">List Barang</h2>
        <p>Masukkan list barang</p>
      </div>
      <button class="btn btn-sm btn-secondary" @click="showModal = true">Tambah Barang +</button>
      <dialog :open="showModal" @close="showModal = false" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Tambah Barang</h3>
          <div class="py-4">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Produk</span>
              </div>
              <select v-model="selectedProduct" class="select select-bordered w-full">
                <option v-for="product in products" :key="product.id" :value="product">
                  {{ product.name }}
                </option>
              </select>
            </label>
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Quantity</span>
              </div>
              <input
                v-model="quantity"
                required
                min="1"
                type="number"
                placeholder="Input quantity"
                class="input input-bordered w-full"
              />
            </label>
          </div>
          <div class="modal-action">
            <button class="btn btn-secondary" @click="addItem">Tambahkan</button>
            <button class="btn" @click="showModal = false">Batal</button>
          </div>
        </div>
      </dialog>
    </section>
    <div class="overflow-x-auto whitespace-nowrap">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>SKU</th>
            <th>Ukuran</th>
            <th>Berat</th>
            <th>Qty</th>
            <th>Zone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.sku }}</td>
            <td>{{ item.size }}</td>
            <td>{{ item.weight }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.zone }}</td>
            <td>
              <button class="bg-red-200 text-red-700 px-2 rounded-full" @click="removeItem(index)">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-fit ml-auto">
      <button class="btn btn-md btn-secondary mt-10" @click="submitOutbound">Simpan</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useBarangKeluarStore } from '@/stores/barang-keluar'
import { createOutbound } from '@/queries/outbound'

import { toast } from 'vue3-toastify'
import { fetchProducts } from '@/queries/product'

export default {
  setup() {
    const store = useBarangKeluarStore()
    const showModal = ref(false)
    const selectedProduct = ref(null)
    const quantity = ref(1)
    const products = ref([])

    // Mengambil produk dari API saat komponen dimuat
    onMounted(async () => {
      try {
        // Panggil fetchProducts untuk mendapatkan produk
        products.value = await fetchProducts()
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    })

    const addItem = () => {
      if (selectedProduct.value && quantity.value > 0) {
        // Validasi stok produk
        const selectedStock = products.value.find(
          (product) => product.id === selectedProduct.value.id
        ).stock
        if (selectedStock >= quantity.value) {
          store.addItem({
            ...selectedProduct.value,
            quantity: quantity.value
          })
        } else {
          alert('Stok produk tidak mencukupi')
        }
      }
    }

    const removeItem = (index) => {
      store.removeItem(index)
    }

    const submitOutbound = async () => {
      try {
        const productsData = store.data.selectedItems.map((item) => ({
          id: item.id,
          quantity: item.quantity
        }))

        await createOutbound({
          datetime: store.data.date,
          customer_id: 4,
          customer_name: store.data.customer_name,
          customer_number: store.data.customer_number,
          customer_address: store.data.customer_address,
          products: productsData
        })

        toast.success('Outbound created successfully', {
          type: 'success',
          onClose: () => {
            window.location.replace('/barang-keluar')
          }
        })

        store.setBarangKeluar('date', '')
        store.setBarangKeluar('customer_name', '')
        store.setBarangKeluar('customer_number', '')
        store.setBarangKeluar('customer_address', '')
        store.setBarangKeluar('selectedItems', [])
      } catch (error) {
        console.error('Error submitting outbound:', error)
        if (error.response) {
          console.error('Server response data:', error.response.data)
        }
        toast.error('Error submitting outbound')
      }
    }

    return {
      showModal,
      selectedProduct,
      quantity,
      products,
      addItem,
      removeItem,
      submitOutbound,
      items: store.data.selectedItems
    }
  }
}
</script>
