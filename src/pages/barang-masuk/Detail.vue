<script>
import { fetchInboundDetail } from '@/queries/inbound'
import { useRoute } from 'vue-router'
import { format } from 'date-fns'

export default {
  data() {
    return {
      data: []
    }
  },
  async mounted() {
    const route = useRoute()
    const id = route.query?.id
    const inboundRes = await fetchInboundDetail(id)
    this.data = inboundRes.data
  },
  methods: {
    formatDate(date) {
      return format(date ? new Date(date) : new Date(), 'dd MMMM yyyy')
    }
  }
}
</script>
<template>
  <div class="bg-white min-h-full p-4 mt-10 max-w-5xl space-y-10">
    <h1 class="text-center text-2xl font-bold">Informasi Barang Masuk</h1>
    <div class="grid grid-cols-4 gap-4">
      <ul class="space-y-2 font-semibold">
        <li>Inbound ID</li>
        <li>Tanggal dan Waktu</li>
      </ul>
      <ul class="space-y-2">
        <li>{{ data.id }}</li>
        <li>{{ formatDate(data.datetime) }}</li>
      </ul>
      <ul class="space-y-2 font-semibold">
        <li>Reference Number</li>
        <li>Supplier ID</li>
      </ul>
      <ul class="space-y-2">
        <li>{{ data.reference_number }}</li>
        <li>SP{{ data.id }}</li>
      </ul>
    </div>
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in data.products" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.sku ?? '-' }}</td>
            <td>{{ product.size ?? '-' }}</td>
            <td>{{ product.weight ?? '-' }}</td>
            <td>{{ product.stock ?? 0 }}</td>
            <td>{{ product.zone ?? '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
