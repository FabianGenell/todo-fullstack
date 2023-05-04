import axios from "axios";

const api = axios.create({ baseURL: `http://localhost:3000`, withCredentials: true });

api.interceptors.request.use((config) => {
    const authToken = window.sessionStorage.getItem('authToken');
    if (authToken) config.headers = { ...config.headers, 'Authorization': `Bearer ${authToken}` }
    return config;
})

api.interceptors.response.use((response) => { }, (error) => {
    if (error.response.data.resetAuthToken) window.sessionStorage.removeItem("authToken")
    return;
})

export default api;