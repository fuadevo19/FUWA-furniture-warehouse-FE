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
  },
  createOutbound: async (data) => {
    try {
      const newData = { ...data, status: 'In Review' }
      console.log('Data sebelum dikirim:', newData) // Mencetak data sebelum dikirim
      const response = await axiosInstance.post(`/api/outbound`, newData)
      console.log('Data yang diterima dari server:', response.data) // Mencetak data yang diterima dari server
      return response.data
    } catch (err) {
      console.error(err.toString())
      throw err
    }
  },
  updateStatus: async (id, status) => {
    try {
      const response = await axiosInstance.patch(`/api/outbound/${id}`, status)
      return response.data
    } catch (err) {
      console.error(err.toString())
      throw err
    }
  }
}

export const createOutbound = outbound.createOutbound
