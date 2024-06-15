<template>
  <div class="bg-white min-h-full px-9">
    <h1 class="text-2xl font-semibold text-secondary text-center md:mt-10">
      Informasi Pengiriman Barang
    </h1>
    <div v-if="outboundDetail" class="my-9 grid grid-cols-4 gap-4">
      <ul class="space-y-2">
        <li>Outbound ID</li>
        <li>Tanggal dan Waktu</li>
        <li>Courier</li>
        <li>Source</li>
        <li>Status</li>
      </ul>
      <ul class="space-y-2 font-semibold">
        <li>{{ outboundDetail.id }}</li>
        <li>{{ formatDate(outboundDetail.datetime) }}</li>
        <li>JNT</li>
        <li>Marketplace</li>
        <li>
          <div :class="getStatusClass(selectedStatus)">
            <select
              v-model="selectedStatus"
              class="font-normal border-2 rounded-md px-2 border-slate-300"
            >
              <option value="Ready to Pick">Ready to Pick</option>
              <option value="On Delivery">On Delivery</option>
              <option value="Delivered">Delivered</option>
              <option value="In Review">In Review</option>
            </select>
          </div>
        </li>
      </ul>
      <ul class="space-y-2">
        <li>Customer ID</li>
        <li>Customer Name</li>
        <li>Customer Address</li>
        <li>Customer Number</li>
      </ul>
      <ul class="space-y-2 font-semibold">
        <li>{{ outboundDetail.customer_id }}</li>
        <li>{{ outboundDetail.customer_name }}</li>
        <li>{{ outboundDetail.customer_address }}</li>
        <li>{{ outboundDetail.customer_number }}</li>
      </ul>
    </div>
    <h2 v-if="outboundDetail">List Barang</h2>
    <div v-if="outboundDetail" class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>SKU</th>
            <th>Ukuran</th>
            <th>Berat</th>
            <th>Qty</th>
            <th>ZONE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in outboundDetail.OutboundProducts" :key="product.id">
            <th>{{ index + 1 }}</th>
            <td>{{ product.Product.name }}</td>
            <td>{{ product.Product.sku }}</td>
            <td>{{ product.Product.size }}</td>
            <td>{{ product.Product.weight }}Kg</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.Product.zone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="outboundDetail" class="flex flex-col justify-end items-end gap-5 mt-8">
      <h3 class="font-normal text-sm">
        Note: Status tidak bisa diubah menjadi approved jika terdapat barang dengan stok habis
      </h3>
      <button class="btn btn-md btn-secondary" @click="updateStatus">Update Status</button>
    </div>
  </div>
</template>

<script>
import { outbound } from '@/queries/outbound'
import { toast } from 'vue3-toastify'

export default {
  data() {
    return {
      outboundDetail: null,
      selectedStatus: ''
    }
  },
  methods: {
    getStatusClass(status) {
      const classMap = {
        'Ready to Pick': 'text-[#787303]',
        'On Delivery': 'text-[#032478]',
        Delivered: 'text-[#17BA14]',
        'In Review': 'text-[#D62424]'
      }
      return classMap[status] || 'text-gray-500'
    },
    formatDate(dateStr) {
      const date = new Date(dateStr)
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
    },
    async fetchOutboundDetails() {
      const outboundId = this.$route.query.id
      try {
        const data = await outbound.getById(outboundId)
        this.outboundDetail = data
        this.selectedStatus = data.status
      } catch (error) {
        console.error('Error fetching outbound details:', error)
      }
      console.log(this.selectedStatus)
    },
    async updateStatus() {
      try {
        await outbound.updateStatus(this.outboundDetail.id, { status: this.selectedStatus })
        toast.success('Status updated successfully', {
          onClose: () => {
            window.location.replace('/barang-keluar')
          }
        })
      } catch (error) {
        console.error('Error updating status:', error)
        toast.error('Failed to update status')
      }
    }
  },
  mounted() {
    this.fetchOutboundDetails()
  }
}
</script>
