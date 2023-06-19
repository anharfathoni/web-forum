/* eslint-disable import/no-extraneous-dependencies */
/**
 * @TODO: Define all the actions (creator) for the users state
 */

import Swal from 'sweetalert2';
import { getAllUsers } from '../../services/users';
import { setLoading } from '../load/action';

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
      dispatch(setLoading(true));
      const users = await getAllUsers();
      dispatch(receiveUsers(users));
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

export { ActionType, receiveUsers, asyncGetAllUser };
