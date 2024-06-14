import { axiosInstance } from '@/axios'

export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get('/api/products')
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}
export const fetchAnalytics = async () => {
  try {
    const response = await axiosInstance.get('/api/analytic')
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}

export const getProdukDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/products/${id}`)
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}
export const updateProduct = async (payload) => {
  try {
    const response = await axiosInstance.put(`/api/products/${payload.id}`, payload)
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}
export const createProduct = async (payload) => {
  try {
    const response = await axiosInstance.post(`/api/products`, payload)
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}
