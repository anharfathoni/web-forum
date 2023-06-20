/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';

import { loadingBarReducer } from 'react-redux-loading-bar';
import threadReducer from './thread/reducer';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import leaderboardReducer from './leaderboard/reducer';

export const store = configureStore({
  reducer: {
    thread: threadReducer,
    user: usersReducer,
    authUser: authUserReducer,
    leaderboard: leaderboardReducer,
    loadingBar: loadingBarReducer,
  },
});
