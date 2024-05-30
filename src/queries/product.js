import { axiosInstance } from '@/axios'

export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get('/api/products')
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}