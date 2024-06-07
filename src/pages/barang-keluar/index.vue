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
            <th>Source</th>
            <th>Customer ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in outbound" :key="item.id">
            <th>{{ item.no }}</th>
            <td>{{ item.tanggal }}</td>
            <td>{{ item.outboundId }}</td>
            <td>{{ item.source }}</td>
            <td>{{ item.customerId }}</td>
            <td>
              <div :class="getStatusClasses(item.status)">{{ item.status }}</div>
            </td>
            <td>
              <RouterLink
                :to="{ name: 'barangkeluardetail' }"
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
import axios from 'axios'
import { outbound } from '@/queries/outbound'

export default {
  name: 'outbound',
  data() {
    return {
      outbound: []
    }
  },
  mounted() {
    this.fetchoutbound()
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
    fetchoutbound() {
      outbound.getAll().then((response) => {
        this.outbound = response.data
      })
    }
  }
}
</script>
