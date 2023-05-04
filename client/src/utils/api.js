import axios from "axios";
import { useNavigate } from "react-router-dom"

const api = axios.create({ baseURL: `http://localhost:3000`, withCredentials: true });

function navigateToLogin() {
    const navigate = useNavigate();
    navigate('/login');
}


api.interceptors.request.use((config) => {
    const authToken = window.sessionStorage.getItem('authToken');
    if (authToken) config.headers = { ...config.headers, 'Authorization': `Bearer ${authToken}` }
    return config;
})

api.interceptors.response.use((response) => { return response; }, (error) => {

    if (error.response.data.resetAuthToken) {
        window.sessionStorage.removeItem("authToken");
        navigateToLogin();
    }

    return;
})

export default api;