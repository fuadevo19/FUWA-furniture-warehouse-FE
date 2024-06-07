import { createInbound } from '@/queries/inbound'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const useBarangMasukStore = defineStore('barang-masuk', {
  state: () => ({ data: { date: '', reference_number: '', supplier_id: '', selectedItems: [] } }),
  getters: {
    getBarangMasukState: (state) => state
  },
  actions: {
    setBarangMasuk(key, value) {
      return (this.data[key] = value)
    },
    addItem(item) {
      if (!this.data.selectedItems.find((product) => product.id === item.id)) {
        this.data.selectedItems.push(item)
      } else {
        alert('Produk sudah ada, silahkan hapus produk sebelum menambahkan lagi')
      }
    },
    removeItem(index) {
      this.data.selectedItems = this.data.selectedItems.filter(
        (_, itemIndex) => itemIndex !== index
      )
    },
    async submitInbound() {
      await createInbound({
        datetime: this.data.date,
        reference_number: this.data.reference_number,
        supplier_id: this.data.supplier_id,
        products: this.data.selectedItems.map((item) => ({ ...item, product_id: item.id }))
      })
      toast('Inbound created successfully', {
        type: 'success',
        onClose: () => {
          window.location.replace('/barang-masuk')
        }
      })
    }
  }
})
