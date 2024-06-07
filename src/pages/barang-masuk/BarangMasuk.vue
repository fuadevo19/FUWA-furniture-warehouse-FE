<script>
import { format } from 'date-fns'
import { fetchInbound } from '@/queries/inbound'
export default {
  data() {
    return {
      inboundData: []
    }
  },
  async mounted() {
    const inboundRes = await fetchInbound()
    this.inboundData = inboundRes.data.map((item) => ({
      ...item,
      datetime: format(new Date(item.datetime), 'dd MMMM yyyy')
    }))
  }
}
</script>

<template>
  <div class="bg-white min-h-full p-4 mt-10 max-w-5xl space-y-4">
    <a href="/barang-masuk/new">
      <button class="btn btn-md btn-secondary">Penerimaan barang baru</button></a
    >
    <h1 class="text-4xl font-bold">Barang Masuk</h1>
    <div class="overflow-x-auto whitespace-nowrap">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal dan Waktu</th>
            <th>Inbound ID</th>
            <th>Reference Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="(inbound, index) in inboundData" :key="inbound.id">
            <td>{{ index + 1 }}</td>
            <td>{{ inbound.datetime }}</td>
            <td>{{ inbound.id }}</td>
            <td>{{ inbound.reference_number }}</td>
            <td>
              <a :href="`/barang-masuk/detail?id=${inbound.id}`">
                <button class="btn btn-bordered btn-sm">Detail</button></a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
