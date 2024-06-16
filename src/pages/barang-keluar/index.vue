<template>
  <div class="bg-white min-h-full px-9">
    <div class="mt-3 md:mt-[70px] md:mb-[26px]">
      <RouterLink class="btn btn-secondary px-8 py-4" :to="{ name: 'barangkeluarbaru' }"
        >Barang Keluar Baru +</RouterLink
      >
    </div>
    <h1 class="text-3xl font-normal">Permintaan Pengiriman (Barang Keluar)</h1>

    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal Waktu</th>
            <th>Outbound ID</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in outbound" :key="item.id">
            <th>{{ index + 1 }}</th>
            <td>{{ item.datetime }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.customer_name }}</td>
            <td>
              <div :class="getStatusClasses(item.status)">{{ item.status }}</div>
            </td>
            <td>
              <RouterLink
                :to="`/barang-keluar/detail?id=${item.id}`"
                class="btn btn-xs btn-outline font-medium"
                >Detail</RouterLink
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
import { outbound } from '@/queries/outbound'

export default {
  data() {
    return {
      outbound: []
    }
  },
  mounted() {
    this.fetchOutbound()
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
    },
    fetchOutbound() {
      outbound
        .getAll()
        .then((response) => {
          this.outbound = response.map((item) => ({
            ...item,
            datetime: format(new Date(item.datetime), 'dd MMMM yyyy HH:mm:ss')
          }))
        })
        .catch((error) => {
          console.error('Error fetching outbound data:', error)
        })
    }
  }
}
</script>
