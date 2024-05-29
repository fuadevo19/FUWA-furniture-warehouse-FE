import { axiosInstance } from '@/axios'

export const fetchInbound = async () => {
  try {
    const response = await axiosInstance.get('/api/inbounds')
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}

export const fetchInboundDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/inbounds/${id}`)
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}

export const createInbound = async (data) => {
  try {
    const response = await axiosInstance.post(`/api/inbounds`, data)
    console.log(response)
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}
