// src/axios.js
import axios from 'axios'

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

export { axiosInstance, setAuthHeader }
