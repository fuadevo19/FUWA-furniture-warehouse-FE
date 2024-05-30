<template>
  <div class="bg-white min-h-full px-9">
    <div class="flex justify-between mt-6">
      <div>
        <img class="h-[70px] w-[75px]" :src="logoIcon" alt="fuwa-ms" />
        <h1 class="font-bold text-2xl">PT. FUWA MS</h1>
        <h3>One stop warehouse solution</h3>
        <h3>Jl. pintu kemana saja</h3>
        <h3>Telp : 061-1234-567</h3>
      </div>
      <div class="flex flex-col justify-center items-center">
        <h1 class="font-bold text-xl">SURAT JALAN</h1>
        <h3>ID : 123213123</h3>
      </div>
    </div>
    <hr class="border-black my-4" />
    <div class="my-5 grid grid-cols-4 gap-4">
      <ul class="space-y-2">
        <li>Penerima</li>
        <li>Nomor Telepon</li>
        <li>Alamat</li>
      </ul>
      <ul class="space-y-2">
        <li>shintia zhou</li>
        <li>0812312312</li>
        <li>Tanah Abang Jakarta</li>
      </ul>
      <ul class="space-y-2">
        <li>Tanggal Kirim</li>
        <li>Tanggal diterima</li>
      </ul>
      <ul class="space-y-2">
        <li>12 Juni 2024</li>
        <li><hr class="mt-7 border border-black" /></li>
      </ul>
    </div>
    <h3 class="mt-8">Bersama ini kami kirimkan sejumlah barang berikut:</h3>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Ukuran</th>
            <th>Berat</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Lemari laci 4 pintu putih</td>
            <td>60cm x 39.5cm x 68cm</td>
            <td>21Kg</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 class="mt-8">Mohon untuk dicek dan diterima</h3>
    <div class="flex mt-24 gap-28">
      <div class="border-t border-black px-10">Pengirim</div>
      <div class="border-t border-black px-10">Penerima</div>
    </div>
    <div class="w-fit ml-auto">
      <button class="btn btn-md rounded-md btn-secondary px-8">Print</button>
    </div>
  </div>
</template>

<script>
import logoIcon from '@/assets/logo_icon_dark.png'

export default {
  data() {
    return {
      logoIcon
    }
  }
}
</script>
