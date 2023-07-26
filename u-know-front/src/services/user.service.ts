import axios from "axios"

//connection for user login
export const authService = {login(user: { email: string; password: string }){
    return axios.post('http://localhost:3000/api/v1/auth/login',
     user, {headers:{'Content-Type': 'application/JSON'}}) 
}}

//connection for user registration
export const registerService = {signup(user: {name:string; email:string; password:string }){
    return axios.post('http://localhost:3000/api/v1/auth/signup',
     user, {headers:{'Content-Type': 'application/JSON'}}) 
}}