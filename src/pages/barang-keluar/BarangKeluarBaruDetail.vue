<template>
  <div class="bg-white min-h-full px-9">
    <label for="my-drawer-2" class="btn btn-primary drawer-button md:hidden mt-6"
      >Open drawer</label
    >
    <div class="flex justify-between items-center md:my-10">
      <h1 class="text-2xl font-semibold text-secondary">Masukkan List Barang</h1>
      <h4>ID : IB00001</h4>
    </div>

    <section class="flex justify-between items-center">
      <div>
        <h2 class="font-bold text-lg">List Barang</h2>
        <p>Masukkan list barang</p>
      </div>
      <button class="btn btn-sm btn-secondary" onclick="tambah_barang.showModal()">
        Tambah Barang +
      </button>
      <dialog id="tambah_barang" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Tambah Barang</h3>
          <div class="py-4">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Produk</span>
              </div>
              <select class="select select-bordered w-full">
                <option
                  v-for="product in dummyProducts"
                  :key="product.id"
                  :value="JSON.stringify(product)"
                >
                  {{ product.name }}
                </option>
              </select>
            </label>
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Quantity</span>
              </div>
              <input
                :value="quantity"
                @change="quantity = $event.target.value"
                required
                min="1"
                type="number"
                placeholder="Input quantity"
                class="input input-bordered w-full"
              />
            </label>
          </div>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn btn-secondary">Tambahkan</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <td>1</td>
            <td>lemari</td>
            <td>1</td>
            <td>20cm x 20cm x 20cm</td>
            <td>20 kg</td>
            <td>3</td>
            <td>A01</td>
            <td>
              <button class="bg-red-200 text-red-700 px-2 rounded-full">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-fit ml-auto">
      <button class="btn btn-md btn-secondary mt-10">Selanjutnya</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
