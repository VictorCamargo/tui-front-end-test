export default function({ $axios }) {
  $axios.setHeader('Content-Type', 'application/json')

  $axios.defaults.timeout = 30000
  $axios.defaults.baseURL = process.env.API_URL
  $axios.defaults.proxyHeaders = false
}
