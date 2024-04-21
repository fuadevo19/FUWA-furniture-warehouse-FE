<script setup>
import { ref } from 'vue'
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'

let currentStep = ref(0)
let selectedItems = ref([])
let payload = ref({
  date: '',
  reference_number: '',
  supplier_id: '',
  selectedItems
})

const handleAddItem = (item) => {
  if (!selectedItems.value.find((product) => product.id === item.id)) {
    selectedItems.value.push(item)
  } else {
    alert('Produk sudah ada, silahkan hapus produk sebelum menambahkan lagi')
  }
}
const handleRemoveItem = (index) => {
  selectedItems.value = selectedItems.value.filter((_, itemIndex) => itemIndex !== index)
}

const nextStep = () => {
  if (currentStep.value < 2) {
    currentStep.value++
  }
}
const disableForm = () => {
  if (currentStep.value === 0 && Object.values(payload.value).some((item) => item === '')) {
    return true
  }
  if (currentStep.value === 1 && !selectedItems.value.length) {
    return true
  }
  return false
}
</script>

<template>
  <div class="bg-white min-h-full p-6 mt-10 max-w-5xl space-y-2">
    <h1 class="text-center text-2xl font-bold text-secondary">
      {{
        currentStep === 2
          ? 'Print dan tempelkan label pada kemasan'
          : 'Masukkan Informasi Barang Masuk'
      }}
    </h1>

    <Step1 :payload="payload" v-if="currentStep === 0" />
    <Step2
      :handleAddItem="handleAddItem"
      :handleRemoveItem="handleRemoveItem"
      :selectedItems="selectedItems"
      v-else-if="currentStep === 1"
    />
    <Step3 :payload="payload" v-else-if="currentStep === 2" />

    <div>
      <div class="w-fit ml-auto">
        <button
          @click="nextStep"
          :class="`btn btn-md btn-secondary mt-10 ${disableForm() && ' btn-disabled'}`"
        >
          {{ currentStep === 2 ? 'Submit' : 'Selanjutnya' }}
        </button>
      </div>
    </div>
  </div>
</template>
