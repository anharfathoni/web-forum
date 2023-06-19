/**
 * @TODO: Define reducer for the users state
 */
import { ActionType } from './action';

const initialState = {
  users: [],
};

function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return { ...state, users: action.payload.users };
    default:
      return state;
  }
}

export default usersReducer;
