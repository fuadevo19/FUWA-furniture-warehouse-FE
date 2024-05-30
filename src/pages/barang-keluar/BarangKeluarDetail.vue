<template>
  <div class="bg-white min-h-full px-9">
    <h1 class="text-2xl font-semibold text-secondary text-center md:mt-10">
      Informasi Pengiriman Barang
    </h1>
    <div class="my-9 grid grid-cols-4 gap-4">
      <ul class="space-y-2">
        <li>Inbound ID</li>
        <li>Tanggal dan Waktu</li>
        <li>Courier</li>
        <li>Source</li>
        <li>Status</li>
      </ul>
      <ul class="space-y-2 font-semibold">
        <li>1231231</li>
        <li>24 Juni 2024</li>
        <li>JNT</li>
        <li>Marketplace</li>
        <li>
          <div class="dropdown">
            <div
              tabindex="0"
              role="button"
              class="text-red-500 font-normal border-2 rounded-md px-2 border-slate-300"
            >
              IN RIVIEW
            </div>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li class="font-normal"><a>Item 1</a></li>
            </ul>
          </div>
        </li>
      </ul>
      <ul class="space-y-2">
        <li>Customer ID</li>
        <li>Customer Name</li>
        <li>Customer Number</li>
        <li>Customer Adress</li>
      </ul>
      <ul class="space-y-2 font-semibold">
        <li>123123213</li>
        <li>s***** z***</li>
        <li>********67</li>
        <li>Tanah Abang Jakarta</li>
      </ul>
    </div>
    <h2>List Barang</h2>
    <div class="overflow-x-auto">
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
            <th>Stok</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Lemari laci 4 pintu putih</td>
            <td>LL012399</td>
            <td>60cm x 39.5cm x 68cm</td>
            <td>21Kg</td>
            <td>3</td>
            <td>A01</td>
            <td>
              <div class="badge bg-[#EEFDEC] text-[#17BA14]">tersedia</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex flex-col justify-end items-end gap-5 mt-8">
      <h3 class="font-normal text-sm">
        Note: Status tidak bisa diubah menjadi approved jika terdapat barang dengan stok habis
      </h3>
      <button class="btn btn-md btn-secondary">Update Status</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
