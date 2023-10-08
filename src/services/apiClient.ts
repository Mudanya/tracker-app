import axios,{CanceledError} from 'axios'

export  const  apiClient = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

