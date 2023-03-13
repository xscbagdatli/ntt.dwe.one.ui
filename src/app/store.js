import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homepageReducer from './homepageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    homepage: homepageReducer,
  },
});
