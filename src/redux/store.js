import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homepageReducer from './homepageSlice';
import createRequestSliceReducer from './createRequestSlice';
import commonSliceReducer from './commonSlice';
import requestsListSlice from './requestsListSlice';
import requestDetailSlice from './requestDetailSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    common: commonSliceReducer,
    homepage: homepageReducer,
    createRequest: createRequestSliceReducer,
    requestsList: requestsListSlice,
    requestDetail: requestDetailSlice,
  },
});
