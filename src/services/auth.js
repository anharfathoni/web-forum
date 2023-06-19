/* eslint-disable import/prefer-default-export */
import api from '../utils/axios';
import { JWT_TOKEN_KEY } from '../utils/constants';

export const authLogin = async ({ email, password }) => {
  try {
    const response = await api.post('/login', { email, password });
    const { token } = response;
    localStorage.setItem(JWT_TOKEN_KEY, token);
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const authRegister = async ({ name, email, password }) => {
  try {
    const response = await api.post('/register', { name, email, password });
    return response.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const authGetOwnProfile = async () => {
  try {
    const response = await api.get('/users/me', { headers: { Authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_KEY)}` } });
    return response.user;
  } catch (error) {
    throw new Error(error.message);
  }
};
