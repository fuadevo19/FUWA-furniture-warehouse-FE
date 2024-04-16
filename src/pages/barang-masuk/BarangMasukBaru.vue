<script setup>
import { ref } from 'vue'
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'

const currentStep = ref(0)

const nextStep = () => {
  if (currentStep.value < 2) {
    currentStep.value++
  }
}
</script>

<template>
  <div class="bg-white min-h-full p-6 mt-10 max-w-5xl space-y-2">
    <h1 class="text-center text-2xl font-bold text-secondary">Masukkan Informasi Barang Masuk</h1>

    <Step1 v-if="currentStep === 0" />
    <Step2 v-else-if="currentStep === 1" />
    <Step3 v-else-if="currentStep === 2" />

    <div>
      <div @click="nextStep" class="w-fit ml-auto">
        <button class="btn btn-md btn-secondary mt-10">Selanjutnya</button>
      </div>
    </div>
  </div>
</template>
