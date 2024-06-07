<template>
  <div class="bg-white min-h-full px-9">
    <h1 class="text-2xl font-semibold text-secondary text-center md:mt-10">
      Masukkan Informasi Barang Keluar
    </h1>
    <div>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Tanggal dan Waktu</span>
        </div>
        <input
          required
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
          type="text"
          placeholder="Masukkan Alamat Customer"
          class="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
    <div class="w-fit ml-auto">
      <RouterLink class="btn btn-md btn-secondary mt-10" :to="{ name: 'barangkeluarbarudetail' }"
        >Selanjutnya</RouterLink
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>
