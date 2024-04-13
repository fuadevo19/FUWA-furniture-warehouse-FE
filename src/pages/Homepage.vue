<template>
  <div class="drawer md:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <Sidebar />
    <div class="drawer-content flex flex-col">
      <!-- Page content here -->
      <div class="bg-white min-h-full">
        <label for="my-drawer-2" class="btn btn-primary drawer-button md:hidden">Open drawer</label>
        <h1>homepage</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import { useRoute } from 'vue-router'
export default {
  components: {
    Sidebar
  }
}
</script>
