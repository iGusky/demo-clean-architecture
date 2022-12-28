import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://18.191.224.220:8000/api/',
  headers: {'X-Custom-Header': 'foobar'}
});
instance.defaults.headers.common.Authorization = `Bearer 67|2yE8uIpfRfPJ7iasjJc4Lp0GJpHUEU4SdaEyi5fl`

export default instance