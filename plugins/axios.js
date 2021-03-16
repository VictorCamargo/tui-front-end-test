export default function({ $axios, store }) {
  $axios.setHeader('Content-Type', 'application/json')

  $axios.defaults.timeout = 30000
  $axios.defaults.baseURL = process.env.API_URL
  $axios.defaults.proxyHeaders = false

  $axios.interceptors.request.use(
    function(request) {
      request.headers['accept-language'] = store.$i18n.locale

      return request
    },
    function(error) {
      return Promise.reject(error)
    }
  )
}
