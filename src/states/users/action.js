/* eslint-disable import/no-extraneous-dependencies */
/**
 * @TODO: Define all the actions (creator) for the users state
 */

import Swal from 'sweetalert2';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getAllUsers } from '../../services/users';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsers(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncGetAllUser() {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const users = await getAllUsers();
      dispatch(receiveUsers(users));
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

export { ActionType, receiveUsers, asyncGetAllUser };
