import axios from 'axios';
import { navigate } from './navigation'; // Replace './navigation' with the appropriate path to your navigation file

const axiosInstance = axios.create();

// Function to attach the JWT token to the request headers
const attachTokenToHeaders = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const token = window.localStorage.getItem('token'); // or retrieve the token from secure storage mechanism
        console.log('Token:', token);
        if (token) {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axiosInstance.defaults.headers.common['Authorization'];
        }
    }
};

// Attach the token to headers on initial load
attachTokenToHeaders();

// Interceptor to attach the token to headers on subsequent requests
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Token expired or invalid, handle logout or token refresh
            navigate('Login');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
