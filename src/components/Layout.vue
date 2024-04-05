<script setup>
import { useRoute } from 'vue-router'
import Header from './Header.vue'
const publicRoutes = ['/login']
const route = useRoute()
const shouldHideLayout = publicRoutes.includes(route.path)
</script>

<template>
  <Header v-if="!shouldHideLayout" />
  <slot />
</template>
