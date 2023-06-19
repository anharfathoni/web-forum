/* eslint-disable import/no-extraneous-dependencies */
import Swal from 'sweetalert2';
import { authGetOwnProfile, authLogin } from '../../services/auth';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: { authUser: null },
  };
}

function asyncLoginAuthUser({ email, password }) {
  return async (dispatch) => {
    try {
      await authLogin({ email, password });
      const authUser = await authGetOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
    }
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    localStorage.clear();
  };
}

function asyncGetOwnProfile() {
  return async (dispatch) => {
    try {
      const authUser = await authGetOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
      return authUser;
    } catch (error) {
      dispatch(asyncUnsetAuthUser());
      return null;
    }
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncLoginAuthUser,
  asyncGetOwnProfile,
  asyncUnsetAuthUser,
};
