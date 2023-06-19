/* eslint-disable import/no-extraneous-dependencies */
/**
 * @TODO: Define all the actions (creator) for the users state
 */

import Swal from 'sweetalert2';
import { getAllLeaderboard } from '../../services/leaderboard';
import { setLoading } from '../load/action';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderboard(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboards,
    },
  };
}

function asyncGetAllLeaderboard() {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const leaderboards = await getAllLeaderboard();
      dispatch(receiveLeaderboard(leaderboards));
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

export { ActionType, receiveLeaderboard, asyncGetAllLeaderboard };
