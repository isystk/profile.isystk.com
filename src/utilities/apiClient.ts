import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  // APIのURI
  baseURL: import.meta.env.VITE_EXTERNAL_ENDPOIN,
  // リクエストヘッダ
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient
