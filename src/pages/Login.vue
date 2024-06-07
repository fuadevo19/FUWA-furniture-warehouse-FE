<script setup>
import { ref, watchEffect } from 'vue'
import logo from '@/assets/logo_light.png'
import login_bg from '@/assets/login_bg.png'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/user'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const router = useRouter()
const username = ref('')
const password = ref('')
const isFormValid = ref(false)
const authStore = useAuthStore()

watchEffect(() => {
  isFormValid.value = username.value && password.value
})

const handleSubmit = async (event) => {
  event.preventDefault()

  if (isFormValid.value) {
    try {
      await authStore.login({
        username: username.value,
        password: password.value
      })

      toast('Login success', {
        type: 'success'
      })

      router.push('/')
    } catch (error) {
      if (error.response.status === 401) {
        toast('invalid username or password', {
          type: 'error'
        })
      }
    }
  }
}
</script>

<template>
  <main
    class="capitalize text-center overflow-hidden h-screen md:grid grid-cols-2 lg:grid-cols-3 text-dark"
  >
    <div class="lg:col-span-2 bg-cover bg-right" :style="{ backgroundImage: `url(${login_bg})` }" />
    <form
      @submit="handleSubmit"
      class="flex flex-col justify-center items-center gap-6 w-full h-full px-6 max-w-md mx-auto"
    >
      <div>
        <img class="w-[150px] mx-auto mb-2" :src="logo" alt="fuwa-ms" />
        <h1 class="font-bold text-2xl">selamat datang</h1>
        <p>Masuk untuk mulai mengakses dashboard</p>
      </div>
      <div class="w-full text-left space-y-2">
        <div>
          <span class="label-text">username</span>
          <input
            name="username"
            v-model="username"
            type="text"
            placeholder="Masukkan username anda"
            class="input input-bordered input-primary w-full"
          />
        </div>

        <div>
          <span class="label-text">Password</span>
          <input
            name="password"
            v-model="password"
            type="password"
            placeholder="Masukkan password anda"
            class="input input-bordered input-primary w-full"
          />
        </div>
      </div>
      <button :class="`btn btn-primary w-full ${!isFormValid && 'btn-disabled'}`">Masuk</button>
    </form>
  </main>
</template>
