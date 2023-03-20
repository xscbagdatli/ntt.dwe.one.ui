import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requirements: [],
  selectedRequestIndex: null,
};

export const requestsListSlice = createSlice({
  name: 'requestsList',
  initialState,

  reducers: {
    requirements: (state, action) => {
      state.requirements = action.payload;
    },
    selectedRequestIndex: (state, action) => {
      state.selectedRequestIndex = action.payload;
    },
  },
});


export const {
  requirements,
  selectedRequestIndex
} = requestsListSlice.actions;

export default requestsListSlice.reducer;
