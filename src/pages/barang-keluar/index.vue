<template>
  <div class="bg-white min-h-full px-9">
    <label for="my-drawer-2" class="btn btn-primary drawer-button md:hidden mt-6"
      >Open drawer</label
    >
    <div class="mt-3 md:mt-[70px] md:mb-[26px]">
      <RouterLink class="btn btn-secondary px-8 py-4" :to="{ name: 'barangkeluarbaru' }"
        >Barang Keluar Baru +</RouterLink
      >
    </div>
    <h1 class="text-3xl font-normal">Permintaan Pengiriman (Barang Keluar)</h1>
    <div class="flex py-4 gap-4">
      <div class="flex flex-col">
        <select class="select select-bordered w-full max-w-xs mb-4">
          <option disabled selected>Search By</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select class="select select-bordered w-full max-w-xs">
          <option disabled selected>Filter Status</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Search Here"
        class="appearance-none h-12 px-4 text-sm border border-gray-300 rounded w-full max-w-screen-md"
      />
      <button class="btn w-32 bg-green-500 text-stone-100">Search</button>
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal Waktu</th>
            <th>Outbound ID</th>
            <th>Source</th>
            <th>Customer ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="item in barang_keluar" :key="item.id">
            <th>{{ item.no }}</th>
            <td>{{ item.tanggal }}</td>
            <td>{{ item.outboundId }}</td>
            <td>{{ item.source }}</td>
            <td>{{ item.customerId }}</td>
            <td>
              <div :class="getStatusClasses(item.status)">{{ item.status }}</div>
            </td>
            <td><button class="btn btn-xs btn-outline font-medium">Detail</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      barang_keluar: []
    }
  },
  async created() {
    const result = await axios.get('https://663868634253a866a24da59a.mockapi.io/api/barangkeluar')
    this.barang_keluar = result.data
  },
  methods: {
    getStatusClasses(status) {
      const classMap = {
        'Ready to Pick': 'badge bg-[#FDFDEC] text-[#787303]',
        'On Delivery': 'badge bg-[#ECF1FD] text-[#032478]',
        Delivered: 'badge bg-[#EEFDEC] text-[#17BA14]',
        'In Review': 'badge bg-[#FFD7D7] text-[#D62424]'
      }
      return classMap[status] || 'badge'
    }
  }
}
</script>
