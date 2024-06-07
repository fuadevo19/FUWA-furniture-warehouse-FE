import { axiosInstance } from '@/axios'

export const outbound = {
  getAll: async () => {
    try {
      const response = await axiosInstance.get('/api/outbound')
      return response.data
    } catch (err) {
      console.error(err.toString())
      throw err
    }
  },
  getById: async (id) => {
    try {
      const response = await axiosInstance.get(`/api/outbound/${id}`)
      return response.data
    } catch (err) {
      console.error(err.toString())
      throw err
    }
  }
}
