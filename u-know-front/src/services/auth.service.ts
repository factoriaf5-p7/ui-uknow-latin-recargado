import axios from "axios"

export const authService = {login(user: { email: string; password: string }){
    return axios.post('http://localhost:3000/api/v1/auth/login',
     user, {headers:{'Content-Type': 'application/JSON'}}) 
}}