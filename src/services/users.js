/* eslint-disable import/prefer-default-export */
import api from '../utils/axios';

export const getAllUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.users;
  } catch (error) {
    throw new Error(error.message);
  }
};
