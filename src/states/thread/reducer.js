/**
 * @TODO: Define the reducer for the talks state
 */
import { ActionType } from './action';

const initialState = {
  threads: [],
  detailThread: {},
};

function threadReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_ALL_THREADS:
      return { ...state, threads: action.payload.threads };
    case ActionType.RECEIVE_THREAD:
      return { ...state, threads: [action.payload.thread, ...state.threads] };
    case ActionType.RECEIVE_COMMENT:
      return {
        ...state,
        detailThread: {
          ...state.detailThread,
          comments: [action.payload.comment, ...state.detailThread.comments],
        },
      };
    case ActionType.RECEIVE_DETAIL_THREAD:
      return { ...state, detailThread: action.payload.detailThread };
    case ActionType.ADD_THREAD:
      return { ...state, threads: [action.payload.thread, ...state.threads] };
    default:
      return state;
  }
}

export default threadReducer;
