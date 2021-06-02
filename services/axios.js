import axios from 'axios'

// import { API_BASE_URL } from 'app-config'
const API_BASE_URL = 'https://6nx7fs4wxb.execute-api.us-east-1.amazonaws.com/stage'
const apiAxios = axios.create({
  baseURL: API_BASE_URL
});

apiAxios.interceptors.response.use((response) => {
  return response.data
})

export default apiAxios