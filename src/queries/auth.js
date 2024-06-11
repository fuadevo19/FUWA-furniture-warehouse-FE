import { axiosInstance, setAuthHeader } from '@/axios'

export const login = async (payload) => {
  try {
    const response = await axiosInstance.post('/auth/login', payload)
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      setAuthHeader(response.data.token)
    }
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}

export const logout = async () => {
  try {
    localStorage.removeItem('token')
    setAuthHeader(null)
    window.location.replace('/login')
    window.location.reload()
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}
