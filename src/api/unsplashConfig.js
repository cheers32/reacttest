import axios from 'axios'  // can make default instance; this is an ajax client

//export default axios.create({
const defaultInstance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID wtrLJE2QsAi6heylKfJIGjl5Efzan8ZIdt6CuA74v3w'
    }
})

export default defaultInstance