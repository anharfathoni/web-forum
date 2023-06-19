/* eslint-disable import/no-extraneous-dependencies */
/**
 * @TODO: Define all the actions (creator) for the thread state
 */
import Swal from 'sweetalert2';
import {
  getAllThread, getDetailThread, postCommentThread, postNewThread,
} from '../../services/thread';
import { setLoading } from '../load/action';

const ActionType = {
  RECEIVE_ALL_THREADS: 'RECEIVE_ALL_THREADS',
  RECEIVE_THREAD: 'RECEIVE_THREAD',
  RECEIVE_COMMENT: 'RECEIVE_COMMENT',
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  ADD_THREAD: 'ADD_THREAD',
};

function receiveAllThreads(threads) {
  return {
    type: ActionType.RECEIVE_ALL_THREADS,
    payload: {
      threads,
    },
  };
}

function receiveThread(thread) {
  return {
    type: ActionType.RECEIVE_THREAD,
    payload: {
      thread,
    },
  };
}

function receiveDetailThread(detailThread) {
  return {
    type: ActionType.RECEIVE_DETAIL_THREAD,
    payload: {
      detailThread,
    },
  };
}

function addThread(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function receiveComment(comment) {
  return {
    type: ActionType.RECEIVE_COMMENT,
    payload: {
      comment,
    },
  };
}

function asyncGetAllThread() {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const threads = await getAllThread();
      dispatch(receiveAllThreads(threads));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
    }
  };
}

function asyncGetDetailThread(id) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const thread = await getDetailThread(id);
      dispatch(receiveDetailThread(thread));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
    }
  };
}

function asyncPostCommentThread({ threadId, content }) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const comment = await postCommentThread({ threadId, content });
      dispatch(receiveComment(comment));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
    }
  };
}

function asyncPostNewThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const thread = await postNewThread({ title, body, category });
      dispatch(receiveThread(thread));
      dispatch(setLoading(false));
      return thread;
    } catch (error) {
      dispatch(setLoading(false));
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
      throw new Error(error.message);
    }
  };
}

export {
  ActionType,
  receiveAllThreads,
  receiveThread,
  receiveDetailThread,
  addThread,
  receiveComment,
  asyncGetAllThread,
  asyncGetDetailThread,
  asyncPostCommentThread,
  asyncPostNewThread,
};
