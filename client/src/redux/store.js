import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import photosReducer from './photosSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    photos: photosReducer,
  },
});
