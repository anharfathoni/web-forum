/**
 * @TODO: Define reducer for the users state
 */
import { ActionType } from './action';

const initialState = {
  isLoading: false,
};

function loadReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
}

export default loadReducer;
