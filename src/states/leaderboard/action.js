/* eslint-disable import/no-extraneous-dependencies */
/**
 * @TODO: Define all the actions (creator) for the users state
 */

import Swal from 'sweetalert2';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getAllLeaderboard } from '../../services/leaderboard';

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
      dispatch(showLoading());
      const leaderboards = await getAllLeaderboard();
      dispatch(receiveLeaderboard(leaderboards));
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

export { ActionType, receiveLeaderboard, asyncGetAllLeaderboard };
