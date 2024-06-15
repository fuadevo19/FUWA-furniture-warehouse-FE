import { axiosInstance, setAuthHeader } from '@/axios'

export const login = async (payload) => {
  try {
    const response = await axiosInstance.post('/auth/login', payload)
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('username', response.data.username)
      setAuthHeader(response.data.token)
      window.location.replace('/')
    }
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}

export const logout = async () => {
  try {
    localStorage.clear()
    setAuthHeader(null)
    window.location.replace('/login')
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}
