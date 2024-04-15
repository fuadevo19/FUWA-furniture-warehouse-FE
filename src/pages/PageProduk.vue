<script setup></script>

<template>
    <h1>Produk</h1>

    <div class="container flex justify-between">
      <div class="container1" style="width: 300px; height: 200px; background-color: #e4a24c; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: left; font-size: 60px; font-weight: bolder; border-radius: 10px; margin-top: -5px; margin-right: -450px; margin-left: -95px;">
        <div class="number">100</div>
        <div class="text1" style="font-size: 19px; margin-top: 10px; font-weight: lighter;">Stok Barang Tersedia</div>
      </div>
      <div class="container2" style="width: 300px; height: 200px; background-color: #e4a24c; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: left; font-size: 60px; font-weight: bolder; border-radius: 10px; margin-left: 470px; margin-top: -4px">
        <div class="number">10</div>
        <div class="text2" style="font-size: 19px; margin-top: 10px; font-weight: lighter;">Stok Barang Hampir Habis</div>
      </div>
      <div class="container3" style="width: 300px; height: 200px; background-color: #e4a24c; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: left; font-size: 60px; font-weight: bolder; border-radius: 10px; margin-right: 490px; margin-top: -4px">
        <div class="number">1</div>
        <div class="text3" style="font-size: 19px; margin-top: 10px; font-weight: lighter;">Stok Barang Habis</div>
      </div>
    </div>    
      
      <select class="inline-flex cursor-pointer select select-bordered w-1/6 max-w-xs h-12 mt-4 ml-2.5">
        <option disabled selected>Search By</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>      

      <input type="text" placeholder="Type here" class="appearance-none h-12 px-4 text-sm ml-5 mt-1 border border-gray-300 rounded w-full max-w-screen-md" />

      <button class="btn ml-2.5 w-32 bg-green-500 text-stone-100">Button</button>

      <br>
      <select class="inline-flex cursor-pointer select select-bordered w-1/6 max-w-xs h-12 mt-2 ml-2.5">
        <option disabled selected>Filter Status</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>

      <table style="border-collapse: collapse; width: 80%; margin-top: 15px; margin-left: 12px;">
        <tr>
          <th rowspan="8" colspan="5" style="border: 1px solid rgb(221, 220, 220); padding: 8px;"></th>
        </tr>
        <tr>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">No.</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">Nama barang</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">SKU</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">Ukuran</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">Berat</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">Qty</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">Zone</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">Stock</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">Action</td>
        </tr>
        <tr>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">1</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">Lemari Laci 4 Pintu</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">LL013299</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">60cm x 39.5 x 68cm</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">21Kg</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">3</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">AO1</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">
            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-green-800 dark:bg-green-800/30 dark:text-green-800">
              <span class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"></span>
              Tersedia
            </span>
          </td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">
            <div class="badge badge-outline">default</div>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">1</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">Lemari Laci 4 Pintu</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">LL013299</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">60cm x 39.5 x 68cm</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">21Kg</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">3</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">AO1</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">
            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-green-800 dark:bg-green-800/30 dark:text-green-800">
              <span class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"></span>
              Tersedia
            </span>
          </td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">
            <div class="badge badge-outline">default</div>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">1</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">Lemari Laci 4 Pintu</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">LL013299</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">60cm x 39.5 x 68cm</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">21Kg</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">3</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">AO1</td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">
            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-green-800 dark:bg-green-800/30 dark:text-green-800">
              <span class="size-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"></span>
              Tersedia
            </span>
          </td>
          <td style="border: 1px solid rgb(221, 220, 220); padding: 8px; text-align: center;">
            <div class="badge badge-outline">default</div>
          </td>
        </tr>
        <!-- Sisipkan baris-baris data di sini -->
      </table>      
</template>

<script setup>

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
</script>