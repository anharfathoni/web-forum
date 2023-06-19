/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';

import threadReducer from './thread/reducer';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import leaderboardReducer from './leaderboard/reducer';
import loadReducer from './load/reducer';

export const store = configureStore({
  reducer: {
    thread: threadReducer,
    user: usersReducer,
    authUser: authUserReducer,
    leaderboard: leaderboardReducer,
    loading: loadReducer,
  },
});
