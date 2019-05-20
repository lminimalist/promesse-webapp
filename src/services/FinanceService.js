import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAsset(ticker, start) {
    return apiClient.get(`/asset/${ticker}/history?start=${start}&returns=1`)
  }
}
