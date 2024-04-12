<script setup>
// import Header from '@/components/Header.vue'
const publicRoutes = ['/login']
const isPublic = publicRoutes.includes(window.location.pathname)
</script>

<template>
  <Header v-if="!isPublic" />
  <RouterView />
</template>
