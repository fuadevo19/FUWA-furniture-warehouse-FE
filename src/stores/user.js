// src/stores/auth.js
import { login } from '@/queries/auth'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    status: JSON.parse(localStorage.getItem('user')) ? { loggedIn: true } : { loggedIn: false }
  }),
  actions: {
    async login(user) {
      try {
        const loggedInUser = await login(user)
        this.user = loggedInUser
        this.status.loggedIn = true
        return loggedInUser
      } catch (error) {
        this.status.loggedIn = false
        this.user = null
        throw error
      }
    },
    logout() {
      AuthService.logout()
      this.status.loggedIn = false
      this.user = null
    }
  }
})
