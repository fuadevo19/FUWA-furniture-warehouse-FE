<template>
  <div class="bg-white min-h-full px-9">
    <label for="my-drawer-2" class="btn btn-primary drawer-button md:hidden mt-6"
      >Open drawer</label
    >
    <h1 class="text-2xl font-semibold text-secondary text-center mt-10">
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
          <span class="label-text">Supplier ID</span>
        </div>
        <input
          required
          type="text"
          placeholder="Masukkan Supplier ID"
          class="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
    <div class="w-fit ml-auto">
      <button class="btn btn-md btn-secondary mt-10">Selanjutnya</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
