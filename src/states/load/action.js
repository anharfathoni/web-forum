/* eslint-disable import/no-extraneous-dependencies */
/**
 * @TODO: Define all the actions (creator) for the users state
 */

const ActionType = {
  SET_LOADING: 'SET_LOADING',
};

function setLoading(isLoading) {
  return {
    type: ActionType.SET_LOADING,
    payload: {
      isLoading,
    },
  };
}

export { ActionType, setLoading };
