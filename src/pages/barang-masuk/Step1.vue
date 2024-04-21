<script setup>
import { defineProps } from 'vue'
const { payload } = defineProps(['payload'])
</script>

<template>
  <div>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Tanggal dan Waktu</span>
      </div>
      <input
        v-model="payload.date"
        required
        type="text"
        placeholder="Masukkan Tanggal dan Waktu"
        class="input input-bordered w-full max-w-xs"
      />
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Reference Number</span>
      </div>
      <input
        v-model="payload.reference_number"
        required
        type="text"
        placeholder="Masukkan Reference Number"
        class="input input-bordered w-full max-w-xs"
      />
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Supplier ID</span>
      </div>
      <input
        v-model="payload.supplier_id"
        required
        type="text"
        placeholder="Masukkan Supplier ID"
        class="input input-bordered w-full max-w-xs"
      />
    </label>
  </div>
</template>
