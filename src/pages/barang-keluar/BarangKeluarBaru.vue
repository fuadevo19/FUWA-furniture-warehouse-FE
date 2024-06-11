<template>
  <div class="bg-white min-h-full px-9">
    <h1 class="text-2xl font-semibold text-secondary text-center md:mt-10">
      Masukkan Informasi Barang Keluar
    </h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Tanggal dan Waktu</span>
          </div>
          <input
            required
            v-model="form.date"
            type="text"
            placeholder="Masukkan Tanggal dan Waktu"
            class="input input-bordered w-full max-w-xs"
          />
        </label>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Nama Customer</span>
          </div>
          <input
            required
            v-model="form.customer_name"
            type="text"
            placeholder="Masukkan Nama Customer"
            class="input input-bordered w-full max-w-xs"
          />
        </label>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Nomor Customer</span>
          </div>
          <input
            required
            v-model="form.customer_number"
            type="text"
            placeholder="Masukkan Nomor Customer"
            class="input input-bordered w-full max-w-xs"
          />
        </label>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Alamat Customer</span>
          </div>
          <input
            required
            v-model="form.customer_address"
            type="text"
            placeholder="Masukkan Alamat Customer"
            class="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
      <div class="w-fit ml-auto">
        <button type="submit" class="btn btn-md btn-secondary mt-10">Selanjutnya</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useBarangKeluarStore } from '@/stores/barang-keluar'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useBarangKeluarStore()
    const form = ref({
      date: '',
      customer_name: '',
      customer_number: '',
      customer_address: ''
    })
    const router = useRouter()

    const handleSubmit = async () => {
      // Simpan data ke dalam store Pinia
      store.setBarangKeluar('date', form.value.date)
      store.setBarangKeluar('customer_name', form.value.customer_name)
      store.setBarangKeluar('customer_number', form.value.customer_number)
      store.setBarangKeluar('customer_address', form.value.customer_address)
      // Navigasi ke halaman berikutnya
      await router.push('/barang-keluar/newdetail')
    }

    return {
      form,
      handleSubmit
    }
  }
}
</script>
