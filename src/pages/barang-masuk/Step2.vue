<script></script>

<template>
  <div class="bg-white min-h-full p-4 mt-10 max-w-5xl space-y-4">
    <section class="flex justify-between items-center">
      <div>
        <h2 class="font-bold text-lg">List Barang</h2>
        <p>Masukkan list barang</p>
      </div>
      <button class="btn btn-sm btn-secondary">Tambah Barang +</button>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <td>1</td>
            <td>Lemari 4 pintu</td>
            <td>LLC123</td>
            <td>60kcm x 20cm x 10cm</td>
            <td>21Kg</td>
            <td>3</td>
            <td><button class="bg-red-200 text-red-700 px-2 rounded-full">Remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
