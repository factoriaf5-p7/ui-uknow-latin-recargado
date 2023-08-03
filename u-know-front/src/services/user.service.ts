import axios from "axios"

export interface UserData {
    Name: string;
    user_name: string;
    email: string;
    password: string;
}

//connection for user login
export const authService = {login(user: { email: string; password: string }){
    return axios.post('http://localhost:3000/api/v1/auth/login',
     user, {headers:{'Content-Type': 'application/JSON'}}) 
}}

//connection for user registration
export const registerService = {signup(user: {name:string; email:string; password:string }){
    return axios.post('http://localhost:3000/api/v1/auth/signup',
     user, {headers:{'Content-Type': 'application/JSON'}}) 
}
}

//connection for editing user profile
export const updateUserProfile = async (user: string, userData: UserData) => {
    try {
        const response = await axios.patch(`http://localhost:3000/api/v1/user/${user}`, userData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("Hubo un error al actualizar el perfil.");
    }
};

