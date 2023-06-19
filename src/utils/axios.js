/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { JWT_TOKEN_KEY } from './constants';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 60000,
  headers: { Authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_KEY)}` },
});

// Add a response interceptor
api.interceptors.response.use(
  (response) => response.data.data,
  (error) => {
    const pathName = window.location.pathname;
    if (pathName !== '/login' && error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error.response?.data);
  },
);

export default api;
