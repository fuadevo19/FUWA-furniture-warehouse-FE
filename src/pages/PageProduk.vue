<script setup></script>

<template>
    <h1>Produk</h1>

    <div class="container">
        <div class="container1">
            <div class="number">100</div>
            <div class="text1">Stok Barang Tersedia</div>
        </div>
        <div class="container2">
            <div class="number">10</div>
            <div class="text2">Stok Barang Hampir Habis</div>
        </div>
        <div class="container3">
            <div class="number">1</div>
            <div class="text3">Stok Barang Habis</div>
        </div>
      </div> 
      
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Search By</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>

      <input type="text" placeholder="Type here" class="input input-bordered w-full1 max-w-xs1" />
      <button class="btn">Search</button>

      <br>
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Filter Status</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>

      <table class="custom-table">
        <tr>
          <th rowspan="8" colspan="5"></th>
        </tr>
        <tr>
        <td>No.</td>
          <td>Nama barang</td>
          <td>SKU</td>
          <td>Ukuran</td>
          <td>Berat</td>
          <td>Qty</td>
          <td>Zone</td>
          <td>Stock</td>
          <td>Action</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Lemari Laci 4 Pintu</td>
            <td>LL013299</td>
            <td>60cm x 39.5 x 68cm</td>
            <td>21Kg</td>
            <td>3</td>
            <td>AO1</td>
            <td>
                    <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-green-800 dark:bg-green-800/30 dark:text-green-800">
                        <span class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"></span>
                        Tersedia
                      </span>
            </td>
            <td>
                <div class="badge badge-outline">default</div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lemari Laci 4 Pintu</td>
            <td>LL013299</td>
            <td>60cm x 39.5 x 68cm</td>
            <td>21Kg</td>
            <td>3</td>
            <td>AO1</td>
            <td>
                    <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-green-800 dark:bg-green-800/30 dark:text-green-800">
                        <span class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"></span>
                        Tersedia
                      </span>
            </td>
            <td>
                <div class="badge badge-outline">default</div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lemari Laci 4 Pintu</td>
            <td>LL013299</td>
            <td>60cm x 39.5 x 68cm</td>
            <td>21Kg</td>
            <td>3</td>
            <td>AO1</td>
            <td>
                    <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-green-800 dark:bg-green-800/30 dark:text-green-800">
                        <span class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"></span>
                        Tersedia
                      </span>
            </td>
            <td>
                <div class="badge badge-outline">default</div>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Lemari Laci 4 Pintu</td>
            <td>LL013299</td>
            <td>60cm x 39.5 x 68cm</td>
            <td>21Kg</td>
            <td>3</td>
            <td>AO1</td>
            <td>
                    <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-green-800 dark:bg-green-800/30 dark:text-green-800">
                        <span class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"></span>
                        Tersedia
                      </span>
            </td>
            <td>
                <div class="badge badge-outline">default</div>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Lemari Laci 4 Pintu</td>
            <td>LL013299</td>
            <td>60cm x 39.5 x 68cm</td>
            <td>21Kg</td>
            <td>3</td>
            <td>AO1</td>
            <td>
                    <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-orange-600 dark:bg-orange-400/30 dark:text-orange-800">
                        <span class="size-1.5 inline-block rounded-full bg-orange-800 dark:bg-orange-400"></span>
                        Hampir Habis
                      </span>
            </td>
            <td>
                <div class="badge badge-outline">default</div>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Lemari Laci 4 Pintu</td>
            <td>LL013299</td>
            <td>60cm x 39.5 x 68cm</td>
            <td>21Kg</td>
            <td>3</td>
            <td>AO1</td>
            <td>
                    <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-red-900 dark:bg-red-800/30 dark:text-red-800">
                        <span class="size-1.5 inline-block rounded-full bg-red-800 dark:bg-red-700"></span>
                        Habis
                      </span>
            </td>
            <td>
                <div class="badge badge-outline">default</div>
            </td>
          </tr>
        <!-- Rows 3-8 are rowspanned -->
      </table>
</template>

<script setup>

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
</script>