import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homepageReducer from './homepageSlice';
import createRequestSliceReducer from './createRequestSlice';
import commonSliceReducer from './commonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    homepage: homepageReducer,
    createRequest: createRequestSliceReducer,
    common: commonSliceReducer,
  },
});
