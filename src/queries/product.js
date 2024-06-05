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

export const getProdukDetail= async (id) => {
  try {
    const response = await axiosInstance.get(`/api/products/${id}`)
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}
