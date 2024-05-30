import axios from 'axios'
import { logout } from './queries/auth'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_URL ?? 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 15000
})

const setAuthHeader = (token) => {
  if (token) {
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`
  } else {
    delete axiosInstance.defaults.headers.Authorization
  }
}

// Set initial token if available
const token = localStorage.getItem('token')
setAuthHeader(token)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      logout()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export { axiosInstance, setAuthHeader }
