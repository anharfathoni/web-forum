/* eslint-disable import/no-extraneous-dependencies */
/**
 * @TODO: Define all the actions (creator) for the thread state
 */
import Swal from 'sweetalert2';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {
  getAllThread, getDetailThread, postCommentThread, postNewThread,
} from '../../services/thread';

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
      dispatch(showLoading());
      const threads = await getAllThread();
      dispatch(receiveAllThreads(threads));
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncGetDetailThread(id) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const thread = await getDetailThread(id);
      dispatch(receiveDetailThread(thread));
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncPostCommentThread({ threadId, content }) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const comment = await postCommentThread({ threadId, content });
      dispatch(receiveComment(comment));
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncPostNewThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const thread = await postNewThread({ title, body, category });
      dispatch(receiveThread(thread));
      return thread;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
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
