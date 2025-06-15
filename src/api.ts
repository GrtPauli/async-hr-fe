// src/api/axiosConfig.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Response interceptor to unwrap the data
api.interceptors.response.use(
  (response) => {
    // If response has data.data structure, unwrap it
    if (response.data && response.data.data) {
      return {
        ...response,
        data: response.data.data
      };
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/auth/signin';
    }
    return Promise.reject(error);
  }
);

// Request interceptor remains the same
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;