import axios from "axios";

export const authApi = axios.create({
    baseURL: "http://localhost:8080",
    /* headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }, 
    Investigar esto
    Al final esto es lo que utilizo en el backend con spring security
    */
    withCredentials: true
})