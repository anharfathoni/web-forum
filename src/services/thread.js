/* eslint-disable import/prefer-default-export */
import api from '../utils/axios';

export const getAllThread = async () => {
  try {
    const response = await api.get('/threads');
    return response.threads;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getDetailThread = async (id) => {
  try {
    const response = await api.get(`/threads/${id}`);
    return response.detailThread;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postCommentThread = async ({ threadId, content }) => {
  try {
    const response = await api.post(`/threads/${threadId}/comments`, { content });
    return response.comment;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postNewThread = async ({ title, body, category }) => {
  try {
    const response = await api.post('/threads', { title, body, category });
    return response.thread;
  } catch (error) {
    throw new Error(error.message);
  }
};
