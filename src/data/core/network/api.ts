import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://18.191.224.220:8000/api/',
  headers: {'X-Custom-Header': 'foobar'}
});
instance.defaults.headers.common.Authorization = `Bearer 94|otAMsStwUqNYJaiKlu6LLBD2TdIFwAAHeet4bBc3`

export default instance