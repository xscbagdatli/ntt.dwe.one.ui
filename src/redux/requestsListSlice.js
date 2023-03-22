import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requirements: [],
  requirementWithId: [],
  selectedRequestIndex: null,
};

export const requestsListSlice = createSlice({
  name: 'requestsList',
  initialState,

  reducers: {
    requirements: (state, action) => {
      state.requirements = action.payload;
    },
    requirementWithId: (state, action) => {
      state.requirementWithId = action.payload;
    },
    selectedRequestIndex: (state, action) => {
      state.selectedRequestIndex = action.payload;
    },
  },
});


export const {
  requirements,
  requirementWithId,
  selectedRequestIndex
} = requestsListSlice.actions;

export default requestsListSlice.reducer;
