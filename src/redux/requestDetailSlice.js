import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRequestItem: [],
};

export const requestDetailSlice = createSlice({
  name: 'requestDetail',
  initialState,

  reducers: {
    selectedRequestItem: (state, action) => {
      state.selectedRequestItem = action.payload;
    },
  },
});


export const {
  requirements,
  selectedRequestItem
} = requestDetailSlice.actions;

export default requestDetailSlice.reducer;
