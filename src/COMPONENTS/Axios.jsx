import axios from 'axios'

export const cliente = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})