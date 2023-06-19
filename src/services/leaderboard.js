/* eslint-disable import/prefer-default-export */
import api from '../utils/axios';

export const getAllLeaderboard = async () => {
  try {
    const response = await api.get('/leaderboards');
    return response.leaderboards;
  } catch (error) {
    throw new Error(error.message);
  }
};
