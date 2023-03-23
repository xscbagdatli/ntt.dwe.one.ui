import { configureStore } from '@reduxjs/toolkit';
import homepageReducer from './homepageSlice';
import createRequestSliceReducer from './createRequestSlice';
import commonSliceReducer from './commonSlice';
import requestsListSlice from './requestsListSlice';
import requestDetailSlice from './requestDetailSlice';
import providedRequestsSlice from './providedRequestsSlice';

export const store = configureStore({
  reducer: {
    common: commonSliceReducer,
    homepage: homepageReducer,
    createRequest: createRequestSliceReducer,
    requestsList: requestsListSlice,
    requestDetail: requestDetailSlice,
    providedRequests: providedRequestsSlice,
  },
});
