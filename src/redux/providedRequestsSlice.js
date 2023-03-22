import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  commitments: [],
  providedRequestItem: [],
};

export const providedRequestsSlice = createSlice({
  name: 'providedRequests',
  initialState,

  reducers: {
    commitments: (state, action) => {
      state.commitments = action.payload;
    },
    providedRequestItem: (state, action) => {
      state.providedRequestItem = action.payload;
    },
  },
});


export const {
  commitments,
  providedRequestItem,
} = providedRequestsSlice.actions;

export default providedRequestsSlice.reducer;
