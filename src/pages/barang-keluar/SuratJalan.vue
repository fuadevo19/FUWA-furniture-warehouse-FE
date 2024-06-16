<template>
  <div class="bg-white min-h-full px-9" v-if="outboundDetail">
    <div class="flex justify-between mt-6">
      <div>
        <img class="h-[70px] w-[75px]" :src="logoIcon" alt="fuwa-ms" />
        <h1 class="font-bold text-2xl">PT. FUWA MS</h1>
        <h3>One stop warehouse solution</h3>
        <h3>Jl. pintu kemana saja</h3>
        <h3>Telp : 061-1234-567</h3>
      </div>
      <div class="flex flex-col justify-center items-center">
        <h1 class="font-bold text-xl">SURAT JALAN</h1>
        <h3>ID : {{ outboundDetail.id }}</h3>
      </div>
    </div>
    <hr class="border-black my-4" />
    <div class="my-5 grid grid-cols-4 gap-4">
      <ul class="space-y-2">
        <li>Penerima</li>
        <li>Nomor Telepon</li>
        <li>Alamat</li>
      </ul>
      <ul class="space-y-2 font-semibold">
        <li>{{ outboundDetail.customer_name }}</li>
        <li>{{ outboundDetail.customer_number }}</li>
        <li>{{ outboundDetail.customer_address }}</li>
      </ul>
      <ul class="space-y-2">
        <li>Tanggal Kirim</li>
        <li>Tanggal diterima</li>
      </ul>
      <ul class="space-y-2 font-semibold">
        <li>{{ formatDate(outboundDetail.datetime) }}</li>
        <li><hr class="mt-7 border border-black" /></li>
      </ul>
    </div>
    <h3 class="mt-8">Bersama ini kami kirimkan sejumlah barang berikut:</h3>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Ukuran</th>
            <th>Berat</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in outboundDetail.OutboundProducts" :key="product.id">
            <th>{{ index + 1 }}</th>
            <td>{{ product.Product.name }}</td>
            <td>{{ product.Product.size }}</td>
            <td>{{ product.Product.weight }}Kg</td>
            <td>{{ product.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 class="mt-8">Mohon untuk dicek dan diterima</h3>
    <div class="flex mt-24 gap-28">
      <div class="border-t border-black px-10">Pengirim</div>
      <div class="border-t border-black px-10">Penerima</div>
    </div>
    <div class="w-fit ml-auto flex space-x-4 mt-4 print:hidden">
      <button class="btn btn-md rounded-md btn-secondary px-8" @click="printPage">Print</button>
      <button class="btn btn-md rounded-md btn-secondary px-8" @click="completeDelivery">
        Selesai
      </button>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { format } from 'date-fns'
import { outbound } from '@/queries/outbound'
import logoIcon from '@/assets/logo_icon_dark.png'

export default {
  data() {
    return {
      outboundDetail: null,
      logoIcon
    }
  },
  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr)
      return format(date, 'dd MMMM yyyy HH:mm:ss')
    },
    async fetchOutboundDetails() {
      const outboundId = this.$route.query.id
      try {
        const data = await outbound.getById(outboundId)
        this.outboundDetail = {
          ...data,
          datetime: this.formatDate(data.datetime)
        }
      } catch (error) {
        console.error('Error fetching outbound details:', error)
      }
    },
    printPage() {
      window.print()
    },
    async completeDelivery() {
      try {
        await outbound.updateStatus(this.outboundDetail.id, { status: 'On Delivery' })
        this.$router.push('/barang-keluar')
      } catch (error) {
        console.error('Error updating status:', error)
        alert('Failed to update status')
      }
    }
  },
  mounted() {
    this.fetchOutboundDetails()
  }
}
</script>
