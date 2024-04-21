<script setup>
import { defineProps, ref } from 'vue'
import QrcodeVue from 'qrcode.vue'

const props = defineProps(['payload'])

const printableContent = ref(null)
const printContent = () => {
  if (!printableContent.value) return

  const content = printableContent.value.innerHTML
  const printWindow = window.open('', '_blank')

  printWindow.document.write('<html><head><title>Print</title></head><body>')
  printWindow.document.write(content)
  printWindow.document.write('</body></html>')

  printWindow.document.close()
  printWindow.print()
}
</script>

<template>
  <div>
    <div ref="printableContent">
      <div
        v-for="product in props.payload.selectedItems"
        :key="product.id"
        class="flex gap-4 my-10 p-4"
      >
        <QrcodeVue render-as="svg" :value="product.sku" size="100" level="H" />
        <ul>
          <li>{{ product.sku }}</li>
          <li>SU : {{ product.zone }}</li>
          <li>UK : {{ product.size }}</li>
          <li>W : {{ product.weight }}</li>
        </ul>
      </div>
    </div>
    <button @click="printContent" class="btn btn-primary">Print</button>
  </div>
</template>
