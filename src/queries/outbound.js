import { axiosInstance } from '@/axios'

export const outbound = {
  getAll: async () => {
    const response = await axiosInstance.get('/outbounds/')
    return response.data
  },
  getOne: async (id) => {
    const response = await axiosInstance.get(`/outbounds/${id}`)
    return response.data
  }
}
