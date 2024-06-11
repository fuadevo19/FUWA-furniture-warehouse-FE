// barang-keluar.js
import { createOutbound } from '@/queries/outbound'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const useBarangKeluarStore = defineStore('barang-keluar', {
  state: () => ({
    // Memuat data dari local storage jika ada, atau gunakan nilai awal jika tidak ada
    data: JSON.parse(localStorage.getItem('barangKeluarData')) || {
      date: '',
      customer_name: '',
      customer_number: '',
      customer_address: '',
      selectedItems: []
    }
  }),
  getters: {
    getBarangKeluarState: (state) => state
  },
  actions: {
    setBarangKeluar(key, value) {
      this.data[key] = value
      // Simpan data ke local storage setiap kali ada perubahan
      localStorage.setItem('barangKeluarData', JSON.stringify(this.data))
    },
    addItem(item) {
      if (!this.data.selectedItems.find((product) => product.id === item.id)) {
        this.data.selectedItems.push(item)
        localStorage.setItem('barangKeluarData', JSON.stringify(this.data))
      } else {
        alert('Produk sudah ada, silahkan hapus produk sebelum menambahkan lagi')
      }
    },
    removeItem(index) {
      this.data.selectedItems.splice(index, 1)
      localStorage.setItem('barangKeluarData', JSON.stringify(this.data))
    },
    async submitOutbound() {
      await createOutbound({
        datetime: this.data.date,
        customer_name: this.data.customer_name,
        customer_number: this.data.customer_number,
        customer_address: this.data.customer_address,
        products: this.data.selectedItems.map((item) => ({ ...item, product_id: item.id }))
      })

      localStorage.removeItem('barangKeluarData')
    }
  }
})
