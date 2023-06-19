/**
 * @TODO: Define reducer for the users state
 */
import { ActionType } from './action';

const initialState = {
  leaderboards: [],
};

function leaderboardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARD:
      return { ...state, leaderboards: action.payload.leaderboards };
    default:
      return state;
  }
}

export default leaderboardReducer;
